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
        let tick = that.#_params.currencyinfo.filters.filter(a => a.filterType == 'LOT_SIZE')[0].stepSize;
        let precision = parseFloat(that.#_params.currencyinfo.filters.filter(a => a.filterType == 'PRICE_FILTER')[0].tickSize);
        let precisionNumber = precision.toString().includes(".")?precision.toString().split(".")[1].length:0;
        //get last 5 m candle and add as data
        this._renewCandleStart().then(()=>{
            //create service and start it
            B52Robot_Carl.Srv = new B52Service("B52Robot_Carl",500);
            B52Robot_Carl.Srv.Actions.push(()=>{
                that.#_binance.MARKET_GetPrice(that.#_params.currencyinfo.symbol).then(currprice=>{
                    //1. cancell all that not started
                    that.#_positions = that.#_positions.filter(a=>a.orders.length);
                    let bords = that._calcFromToLos();
                    let potentialPositions = B52.CALC.GetOrdersIntervalMaxLoss(10,bords.from,bords.to,bords.loss,that.#_params.maxloss,B52Settings.minnotal,tick,2*B52Settings.marketOrderPrice,precisionNumber);
                    //exclude positions that already in game
                    let existingMaxPrice = parseFloat(that.#_params.direction == "BUY"? Math.max(...that.#_positions.map(a=>a.price)) : Math.min(...that.#_positions.map(a=>a.price)));
                    potentialPositions = potentialPositions.filter(a=>(that.#_params.direction == "BUY")?parseFloat(a.price)>existingMaxPrice:parseFloat(a.price)<existingMaxPrice);
                    console.log(potentialPositions);
                    potentialPositions.forEach(p=>{
                        that.#_positions.push({
                            orders:[],
                            position:p,
                            enterPrice:parseFloat(p.price),
                            price:null
                        });
                    });
                    that.#_positions.filter(a=>(that.#_params.direction == "BUY")?a.enterPrice>currprice:a.enterPrice<currprice).forEach(p=>{
                        console.log("Buy "+currprice+" "+p.enterPrice);
                        p.price = currprice;
                        p.orders.push({xxx:""});
                    });
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
                console.log(that.#_lastCandle);
                console.log((c.timeToRefresh.getTime()-(new Date()).getTime()));
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
    _calcFromToLos(){
        let that = this;
        let from = 0;
        let to = 0;
        let loss = 0;
        if(that.#_params.direction=="BUY")
        {
            from = parseFloat((that.#_lastCandle.high+that.#_lastCandle.low)/2);
            to = parseFloat(that.#_lastCandle.low + 0.1*(that.#_lastCandle.high-that.#_lastCandle.low));
            loss = parseFloat(that.#_lastCandle.low - 0.1*(that.#_lastCandle.high-that.#_lastCandle.low));
        }
        else
        {
            from = parseFloat((that.#_lastCandle.high+that.#_lastCandle.low)/2);
            to = parseFloat(that.#_lastCandle.high + 0.1*(that.#_lastCandle.high-that.#_lastCandle.low));
            loss = parseFloat(that.#_lastCandle.high - 0.1*(that.#_lastCandle.high-that.#_lastCandle.low));
        }
        return {from:from,to:to,loss:loss};
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
}

var r = null;
B52Tv.GetCurrentCurrencyPair().then(currency=>{
    r = new B52Robot_Carl({
        currencyinfo:b52.Binance.ExchangeInfo.symbols.filter(a=>a.symbol==currency)[0],
        maxloss:0.4,
        maxbuypositions:10,
        percent:"auto",
        percmin:0.35,
        direction:"SELL"
    },b52.Binance);
    r.Start();
});

console.log(B52.CALC.GetOrdersIntervalMaxLoss(20,1.471,1.461,1.477,0.5,5,0.1,0.16,3));