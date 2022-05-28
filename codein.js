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
class B52Robot_Carl{
    #_params;
    #_lastCandle;
    #_positions = [];
    #_binance;
    #_perc;
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
            B52Robot_Carl.Srv = new B52Service("B52Robot_Carl",that.#_params.priceCheckMS);
            B52Robot_Carl.Srv.Actions.push(()=>{
                that.#_binance.MARKET_GetPrice(that.#_params.currencyinfo.symbol).then(currprice=>{
                    B52Robot_Carl.ProcessTick(currprice,that.#_params,that.#_positions,that.#_lastCandle);
                });
            });
            B52Robot_Carl.Srv.Start();
        });
        
    }
    Stop(){
        this._renewCandleStop();
        B52Robot_Carl.Srv.Stop();
    }
    _renewCandleStart(){
        let that = this;
        if (!B52Robot_Carl.Renewcandle) return;
        return new Promise((s,f)=>{
            that._get2Candle().then((c)=>{
                that.#_lastCandle = c;
                setTimeout(that._renewCandleStart.bind(that),(c.timeToRefresh.getTime()-(new Date()).getTime()));
                s();
            });
        });
    }
    _renewCandleStop(){
        B52Robot_Carl.Renewcandle = false;
    }
    _calcPerc(){
        let calcPerc = 50*Math.abs(this.#_lastCandle.high - this.#_lastCandle.low) / this.#_lastCandle.low;
        if(calcPerc<this.#_params.percmin) return this.#_params.percmin;
        return calcPerc;
    }
    _klineToCandle(kline){
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
    _get2Candle(){
        let that = this;
        return new Promise((s,f)=>{
            that.#_binance.GET_ANON_PARAMS(B52Settings.binanceSettings.kindle,
                {
                    symbol:that.#_params.currencyinfo.symbol,
                    limit:2,
                    interval:"5m"
                }).then(res=>{
                    let cadData = that._klineToCandle(res[0]);
                    cadData.timeToRefresh = new Date(parseInt(res[1][6])+2000);
                    s(cadData);
                });
        });
    }
    static ProcessTick(currprice,params,positions,lastcandle){
        bordsNested = () => {
            let from = 0;
            let to = 0;
            let loss = 0;
            if(direction=="BUY")
            {
                from = parseFloat((lastcandle.high+lastcandle.low)/2);
                to = parseFloat(lastcandle.low + 0.1*(lastcandle.high-lastcandle.low));
                loss = parseFloat(lastcandle.low - 0.1*(lastcandle.high-lastcandle.low));
            }
            else
            {
                from = parseFloat((lastcandle.high+lastcandle.low)/2);
                to = parseFloat(lastcandle.high + 0.1*(lastcandle.high-lastcandle.low));
                loss = parseFloat(lastcandle.high - 0.1*(lastcandle.high-lastcandle.low));
            }
            return {from:from,to:to,loss:loss};
        }

        let tick = params.currencyinfo.filters.filter(a => a.filterType == 'LOT_SIZE')[0].stepSize;
        let precision = parseFloat(params.currencyinfo.filters.filter(a => a.filterType == 'PRICE_FILTER')[0].tickSize);
        let precisionNumber = precision.toString().includes(".")?precision.toString().split(".")[1].length:0;
        positions = positions.filter(a=>a.orders.length);
        let bords = bordsNested;
        let potentialPositions = B52.CALC.GetOrdersIntervalMaxLoss(10,bords.from,bords.to,bords.loss,params.maxloss,B52Settings.minnotal,tick,2*B52Settings.marketOrderPrice,precisionNumber);
        console.log("Potential: ");
        console.log(potentialPositions);
        if(positions.length)
        {
            //exclude positions that already in game
            let existingMaxPrice = parseFloat(params.direction == "BUY"? Math.max(...positions.map(a=>a.price)) : Math.min(...positions.map(a=>a.price)));
            console.log("MaxPrice "+existingMaxPrice);
            potentialPositions = potentialPositions.filter(a=>(params.direction == "BUY")?parseFloat(a.enterPrice)>existingMaxPrice:parseFloat(a.enterPrice)<existingMaxPrice);
            console.log("M Filtered ");
            console.log(potentialPositions);
        }

        potentialPositions.forEach(p=>{
            console.log("Adding");
            positions.push({
                orders:[],
                position:p,
                enterPrice:parseFloat(p.price),
                price:null
            });
        });
        console.log("Before");
        console.log(positions);
        positions.filter(a=>(params.direction == "BUY")?a.enterPrice>currprice:a.enterPrice<currprice).forEach(p=>{
            console.log("Buy " + currprice + " " + p.enterPrice);
            p.price = currprice;
            p.orders.push({xxx:""});
        });
        console.log("After");
        console.log(positions);
        console.log("----------------------------------------------------------------------------------");
    }
}

var r = null;
B52Tv.GetCurrentCurrencyPair().then(currency=>{
    r = new B52Robot_Carl({
        currencyinfo:b52.Binance.ExchangeInfo.symbols.filter(a=>a.symbol==currency)[0],
        maxloss:0.4,
        maxbuypositions:10,
        percent:"auto",
        percmin:0.35,
        direction:"SELL",
        priceCheckMS:5000
    },b52.Binance);
    r.Start();
});

console.log(B52.CALC.GetOrdersIntervalMaxLoss(20,1.471,1.461,1.477,0.5,5,0.1,0.16,3));

function Gennadiy_Soplizhuy_Tick(currprice,params,positions,lastcandle){
    let tick = params.currencyinfo.filters.filter(a => a.filterType == 'LOT_SIZE')[0].stepSize;
    let precision = parseFloat(params.currencyinfo.filters.filter(a => a.filterType == 'PRICE_FILTER')[0].tickSize);
    let precisionNumber = precision.toString().includes(".")?precision.toString().split(".")[1].length:0;
    let bords = _00_params_bords();
    let potential = null;

    _00_params_bords = () => {
        let from = 0;
        let to = 0;
        let loss = 0;
        if(params.direction=="BUY")
        {
            from = parseFloat((lastcandle.high+lastcandle.low)/2);
            to = parseFloat(lastcandle.low + 0.1*(lastcandle.high-lastcandle.low));
            loss = parseFloat(lastcandle.low - 0.1*(lastcandle.high-lastcandle.low));
        }
        else
        {
            from = parseFloat((lastcandle.high+lastcandle.low)/2);
            to = parseFloat(lastcandle.high + 0.1*(lastcandle.high-lastcandle.low));
            loss = parseFloat(lastcandle.high - 0.1*(lastcandle.high-lastcandle.low));
        }
        return {from:from,to:to,loss:loss};
    }
    _01_act_filter_busy = () =>{
        positions = positions.filter(a=>a.busy);
    }
    _02_act_get_potential = () =>{
        potential = B52.CALC.GetOrdersIntervalMaxLoss(10,bords.from,bords.to,bords.loss,params.maxloss,B52Settings.minnotal,tick,2*B52Settings.marketOrderPrice,precisionNumber);
    }
    _03_act_filter_potential_where_busy = () => {
        if(positions.length)
        {
            //any exist
            let existingMaxPrice = parseFloat(params.direction == "BUY"? Math.min(...positions.map(a=>a.price)) : Math.max(...positions.map(a=>a.price)));
            potential = potential.filter(a=>(params.direction == "BUY")?parseFloat(a.price)<existingMaxPrice:parseFloat(a.price)>existingMaxPrice);
        }
    }
    _04_act_add_potential_to_positions = () => {
        potential.forEach(p=>{
            positions.push({
                busy:false,
                position:p,
                enterPrice:parseFloat(p.price)
            });
        });
    }
    _05_act_set_open = () => {
        positions.filter(a=>!a.busy).filter(b=>params.direction == "BUY"?b.enterPrice>=currprice:b.enterPrice<=currprice).forEach(p=>{
            p.state = "open";
            p.busy = true;
        });
    }
    _06_act_set_close = () => {
        positions.filter(a=>a.busy).filter(b=>a.state=="opened").forEach(p=>{
            if((params.direction == "BUY"?currprice>=p.closePrice:currprice<=p.closePrice))
            {
                p.state = "close"
            }
        });
    }
    
    /*
    Positions with orders =>
    Get potential =>
    Exclude zones where orders exist => 
    Add to Positions =>
    Mark which to open according the price =>
    Mark which to close according the price
    */
    _00_params_bords();
    _01_act_filter_busy();
    _02_act_get_potential();
    _03_act_filter_potential_where_busy();
    _04_act_add_potential_to_positions();
    _05_act_set_open();
    _06_act_set_close();
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
        p.state = "opened",
        p.price = pr
    });
    closed
}
console.log(positions);

candle = {
    high:0.02015,
    low:0.01991,
    precision:5
}
for(let i=0;i<10;i=i+1)
{
    positions = ProcessTick(parseFloat("0.0199"+i.toString()),params,positions,candle);
}
console.log(positions);
