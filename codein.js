/* 
params = {
    currencyinfo:""
    maxloss:"",
    buypositions:"",
    percent:"",
    percmin:""
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
    #_positions;
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
        //get last 5 m candle and add as data
        this._renewCandleStart().then(()=>{
            //create service and start it
            B52Robot_Carl.Srv = new B52Service("B52Robot_Carl",500);
            B52Robot_Carl.Srv.Actions.push(()=>{
                //do all checks and staff
                console.log("test");
                
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
        return new Promise((s,f)=>{
            this.#_binance.GET_ANON_PARAMS(B52Settings.binanceSettings.kindle,
                {
                    symbol:this.#_params.currencyinfo.symbol,
                    limit:2,
                    interval:"5m"
                }).then(res=>{
                    let cadData = this._klineToCandle(res[0]);
                    cadData.timeToRefresh = new Date(parseInt(res[1][6])+2000);
                    s(cadData);
                });
        });
    }
}

b52.Binance
var r = new B52Robot_Carl({
    currencyinfo:b52.Binance.ExchangeInfo.symbols.filter(a=>a.symbol=="GMTUSDT")[0],
    maxloss:0.2,
    maxbuypositions:10,
    percent:"auto",
    percmin:0.35
},b52.Binance);

r.Start();