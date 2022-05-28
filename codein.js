/* 
params = {
    currencyinfo:""
    maxloss:"",
    buypositions:"",
    percent:"",
    percmin:"",
    direction:"BUY"
}
*/
/*
[
                    1499040000000,      # Open time
                    "0.01634790",       # Open
                    "0.80000000",       # High
                    "0.01575800",       # Low
                    "0.01577100",       # Close
                    "148976.11427815",  # Volume
                    1499644799999,      # Close time
                    "2434.19055334",    # Quote asset volume
                    308,                # Number of trades
                    "1756.87402397",    # Taker buy base asset volume
                    "28.46694368",      # Taker buy quote asset volume
                    "17928899.62484339" # Can be ignored
]
*/
class Gennadiy_Soplizhuy{
    #_params;
    #_lastCandle;
    #_positions = [];
    #_binance;
    #_perc;
    Closed = [];
    static Renewcandle = true;
    static Srv = null;
    constructor(params,binance){
        this.#_params = params;
        this.#_binance = binance;
        if(this.#_params.percent!="auto") this.#_perc = parseFloat(this.#_params.percent);
    }
    
    Start(){
        let that = this;
        this._renewCandleStart().then(()=>{
            //create service and start it
            Gennadiy_Soplizhuy.Srv = new B52Service("Gennadiy_Soplizhuy",that.#_params.priceCheckMS);
            Gennadiy_Soplizhuy.Srv.Actions.push(()=>{
                that.#_binance.MARKET_GetPrice(that.#_params.currencyinfo.symbol).then(currprice=>{
                    let positions = Gennadiy_Soplizhuy.Gennadiy_Soplizhuy_Tick(currprice,that.#_params,that.#_positions,that.#_lastCandle);
                    //process them with binance
                    positions.filter(a=>a.state=="open").forEach(p=>{
                        //open order
                        that.#_binance.ORDERS_NewOrder({
                            symbol: that.#_params.currencyinfo.symbol,
                            type: "MARKET",
                            quantity: p.position.quantity,
                            side: that.#_params.direction
                        }).then(openOrd=>{
                            p.ordOpen = openOrd;
                            p.state = "opened";
                            p.price = openOrd.price;
                            //and stoploss
                            that.#_binance.ORDERS_NewOrder({
                                symbol: that.#_params.currencyinfo.symbol,
                                type: "STOP_MARKET",
                                quantity: p.position.quantity,
                                side: that.#_params.direction=="BUY"?"SELL":"BUY",
                                stopPrice: p.stop,
                                timeInForce: "GTE_GTC",
                                reduceOnly: "True"
                            }).then(stOrder=>{
                                p.stOrder = stOrder;
                            });
                        });
                        
                    });
                    positions.filter(a=>a.state=="close").forEach(p=>{
                        //fix
                        that.#_binance.ORDERS_NewOrder({
                            symbol: that.#_params.currencyinfo.symbol,
                            type: "MARKET",
                            quantity: p.ordOpen.origQty,
                            side: that.#_params.direction=="BUY"?"SELL":"BUY"
                        }).then(next=>{
                            //cancel stoploss associated
                            that.#_binance.ORDERS_ChancelSingleOrder(p.stOrder.orderId,p.stOrder.symbol);
                        });
                        let toAdd = {diff:((p.price-currprice)*parseFloat(p.position.quantity)).toFixed(2),open:p.price,close:currprice,quantity:p.position.quantity};
                        console.log(toAdd);
                        that.Closed.push(toAdd);
                    });
                    positions = positions.filter(a=>a.state!="close");
                    that.#_positions = positions;
                    //console.log("------------------------------------------------------------------------------------------");
                    //console.log(that.#_positions);
                    //console.log("------------------------------------------------------------------------------------------");
                });
            });
            Gennadiy_Soplizhuy.Srv.Start();
        });
        
    }
    Stop(){
        this._renewCandleStop();
        Gennadiy_Soplizhuy.Srv.Stop();
    }
    _renewCandleStart(){
        let that = this;
        if (!Gennadiy_Soplizhuy.Renewcandle) return;
        return new Promise((s,f)=>{
            that.#_binance.GET_ANON_PARAMS(B52Settings.binanceSettings.kindle,
                {
                    symbol:that.#_params.currencyinfo.symbol,
                    limit:2,
                    interval:"5m"
                }).then(res=>{
                    let cadData = Gennadiy_Soplizhuy._klineToCandle(res[0]);
                    cadData.timeToRefresh = new Date(parseInt(res[1][6])+2000);
                    that.#_lastCandle = cadData;
                    setTimeout(that._renewCandleStart.bind(that),(cadData.timeToRefresh.getTime()-(new Date()).getTime()));
                    s();
                });
        });
    }
    _renewCandleStop(){
        Gennadiy_Soplizhuy.Renewcandle = false;
    }
    static _klineToCandle(kline){
        return {
            id:kline[0],
            timeStart:new Date(kline[0]),
            timeEnd:new Date(kline[6]),
            high:parseFloat(kline[2]),
            low:parseFloat(kline[3]),
            open:parseFloat(kline[1]),
            close:parseFloat(kline[4]),
            numOfTrades:parseInt(kline[8]),
            volume:parseFloat(kline[5]),
            percision:kline[2].split('.')[1].length
        };
    }
    static Gennadiy_Soplizhuy_Tick(currprice,params,positions,lastcandle){
        let from = 0;
        let to = 0;
        let loss = 0;
        if(params.direction=="BUY")
        {
            from = parseFloat((lastcandle.high+lastcandle.low)/2);
            to = parseFloat(lastcandle.low + 0.1*(lastcandle.high-lastcandle.low));
            loss = parseFloat(lastcandle.low - 0.2*(lastcandle.high-lastcandle.low));
        }
        else
        {
            from = parseFloat((lastcandle.high+lastcandle.low)/2);
            to = parseFloat(lastcandle.high + 0.1*(lastcandle.high-lastcandle.low));
            loss = parseFloat(lastcandle.high - 0.2*(lastcandle.high-lastcandle.low));
        }
        let tick = params.currencyinfo.filters.filter(a => a.filterType == 'LOT_SIZE')[0].stepSize;
        let precision = parseFloat(params.currencyinfo.filters.filter(a => a.filterType == 'PRICE_FILTER')[0].tickSize);
        let precisionNumber = precision.toString().includes(".")?precision.toString().split(".")[1].length:0;
        let calcPerc =params.percmin;
        if(params.percent=="auto")
        {
            calcPerc = 50*Math.abs(lastcandle.high - lastcandle.low) / lastcandle.low;
            if(calcPerc<params.percmin) calcPerc =params.percmin;
        }
    
        //_01_act_filter_busy = () =>{
        positions = positions.filter(a=>a.busy);
    
        //_02_act_get_potential = () =>{
        let potential = B52.CALC.GetOrdersIntervalMaxLoss(10,from,to,loss,params.maxloss,B52Settings.minnotal,tick,2*B52Settings.marketOrderPrice,precisionNumber);
        
        //_03_act_filter_potential_where_busy = () => {
        if(positions.length)
        {
            //any exist
            let existingMaxPrice = parseFloat(params.direction == "BUY"? Math.min(...positions.map(a=>a.price)) : Math.max(...positions.map(a=>a.price)));
            potential = potential.filter(a=>(params.direction == "BUY")?parseFloat(a.price)<existingMaxPrice:parseFloat(a.price)>existingMaxPrice);
        }
        
        //_04_act_add_potential_to_positions = () => {
        potential.forEach(p=>{
            positions.push({
                busy:false,
                position:p,
                enterPrice:parseFloat(p.price)
            });
        });
    
        //_05_act_set_open = () => {
        positions.filter(a=>!a.busy).filter(b=>params.direction == "BUY"?b.enterPrice>=currprice:b.enterPrice<=currprice).forEach(p=>{
            p.state = "open";
            p.busy = true;
            p.closePrice = currprice + (params.direction == "BUY"?1:-1)*(currprice*calcPerc/100),
            p.stop = loss.toFixed(precisionNumber)
        });
    
        //_06_act_set_close = () => {
        positions.filter(a=>a.busy).filter(b=>b.state=="opened").forEach(p=>{
            if((params.direction == "BUY"?currprice>=p.closePrice:currprice<=p.closePrice))
            {
                p.state = "close"
            }
        });
        
        /*
        Positions with orders =>
        Get potential =>
        Exclude zones where orders exist => 
        Add to Positions =>
        Mark which to open according the price =>
        Mark which to close according the price
        */
        return positions;
    }
}

var r = null;
B52Tv.GetCurrentCurrencyPair().then(currency=>{
    r = new Gennadiy_Soplizhuy({
        currencyinfo:b52.Binance.ExchangeInfo.symbols.filter(a=>a.symbol==currency)[0],
        maxloss:0.2,
        maxbuypositions:10,
        percent:"auto",
        percmin:0.35,
        direction:"SELL",
        priceCheckMS:3000
    },b52.Binance);
    r.Start();
});

console.log(B52.CALC.GetOrdersIntervalMaxLoss(20,1.471,1.461,1.477,0.5,5,0.1,0.16,3));

function Gennadiy_Soplizhuy_Tick(currprice,params,positions,lastcandle){
    let from = 0;
    let to = 0;
    let loss = 0;
    if(params.direction=="BUY")
    {
        from = parseFloat((lastcandle.high+lastcandle.low)/2);
        to = parseFloat(lastcandle.low + 0.1*(lastcandle.high-lastcandle.low));
        loss = parseFloat(lastcandle.low - 0.2*(lastcandle.high-lastcandle.low));
    }
    else
    {
        from = parseFloat((lastcandle.high+lastcandle.low)/2);
        to = parseFloat(lastcandle.high + 0.1*(lastcandle.high-lastcandle.low));
        loss = parseFloat(lastcandle.high - 0.2*(lastcandle.high-lastcandle.low));
    }
    let tick = params.currencyinfo.filters.filter(a => a.filterType == 'LOT_SIZE')[0].stepSize;
    let precision = parseFloat(params.currencyinfo.filters.filter(a => a.filterType == 'PRICE_FILTER')[0].tickSize);
    let precisionNumber = precision.toString().includes(".")?precision.toString().split(".")[1].length:0;
    let calcPerc =params.percmin;
        if(params.percent=="auto")
        {
            calcPerc = 50*Math.abs(lastcandle.high - lastcandle.low) / lastcandle.low;
            if(calcPerc<params.percmin) calcPerc =params.percmin;
        }
    
    //_01_act_filter_busy = () =>{
    positions = positions.filter(a=>a.busy);

    //_02_act_get_potential = () =>{
    let potential = B52.CALC.GetOrdersIntervalMaxLoss(10,from,to,loss,params.maxloss,B52Settings.minnotal,tick,2*B52Settings.marketOrderPrice,precisionNumber);
    
    //_03_act_filter_potential_where_busy = () => {
    if(positions.length)
    {
        //any exist
        let existingMaxPrice = parseFloat(params.direction == "BUY"? Math.min(...positions.map(a=>a.price)) : Math.max(...positions.map(a=>a.price)));
        potential = potential.filter(a=>(params.direction == "BUY")?parseFloat(a.price)<existingMaxPrice:parseFloat(a.price)>existingMaxPrice);
    }
    
    //_04_act_add_potential_to_positions = () => {
    potential.forEach(p=>{
        positions.push({
            busy:false,
            position:p,
            enterPrice:parseFloat(p.price)
        });
    });

    //_05_act_set_open = () => {
    positions.filter(a=>!a.busy).filter(b=>params.direction == "BUY"?b.enterPrice>=currprice:b.enterPrice<=currprice).forEach(p=>{
        p.state = "open";
        p.busy = true;
        p.closePrice = currprice + (params.direction == "BUY"?1:-1)*(currprice*calcPerc/100),
        p.stop = loss.toFixed(precisionNumber)
    });

    //_06_act_set_close = () => {
    positions.filter(a=>a.busy).filter(b=>b.state=="opened").forEach(p=>{
        if((params.direction == "BUY"?currprice>=p.closePrice:currprice<=p.closePrice))
        {
            p.state = "close"
        }
    });
    
    /*
    Positions with orders =>
    Get potential =>
    Exclude zones where orders exist => 
    Add to Positions =>
    Mark which to open according the price =>
    Mark which to close according the price
    */
    return positions;
}

let params = {
    currencyinfo:b52.Binance.ExchangeInfo.symbols.filter(a=>a.symbol=="PEOPLEUSDT")[0],
    maxloss:0.4,
    maxbuypositions:10,
    percent:"auto",
    percmin:0.35,
    direction:"SELL",
    priceCheckMS:5000
};
let positions = [];
let candle = {
    high:0.02021,
    low:0.02005,
    precision:5
};
let closed = [];
for(let i=0;i<10;i=i+1)
{
    let pr = parseFloat("0.0201"+i.toString());
    positions = Gennadiy_Soplizhuy_Tick(pr,params,positions,candle);
    positions.filter(a=>a.state=="open").forEach(p=>{
        p.state = "opened",
        p.price = pr
    });
    positions.filter(a=>a.state=="close").forEach(p=>{
        closed.push({diff:(p.price-pr)*parseFloat(p.position.quantity)});
    });
    positions = positions.filter(a=>a.state!="close");
}
console.log(positions);
console.log(closed);
for(let i=0;i<15;i=i+1)
{
    let pr = parseFloat((0.02013-i/100000).toFixed(5));
    console.log(pr);
    positions = Gennadiy_Soplizhuy_Tick(pr,params,positions,candle);
    positions.filter(a=>a.state=="open").forEach(p=>{
        p.state = "opened",
        p.price = pr
    });
    positions.filter(a=>a.state=="close").forEach(p=>{
        closed.push({open:p.price,close:pr,quantity:p.position.quantity});
    });
    positions = positions.filter(a=>a.state!="close");
}
console.log(positions);
console.log(closed);


