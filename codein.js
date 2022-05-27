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
    #_renewcandle;
    constructor(params,binance){
        this.#_params = params;
        this.#_binance = binance;
        if(this.#_params.percent!="auto") this.#_perc = parseFloat(this.#_params.percent);
        this._renewcandle = true;
    }
    Start(){
        let that = this;
        //get last 5 m candle and add as data
       this._get2Candle().then((c)=>{
            that.#_lastCandle = c;
           console.log(that.#_lastCandle);
           //calc initial if required
            let percTake = 0;
            if(this.#_params.percent=="auto"){percTake=this._calcPerc();} else percTake = this.#_params.percent;
            console.log("perctake "+percTake);
            //run
        });
    }
    Stop(){

    }
    _renewCandleStart(){
        if (!this.#_renewcandle) return;
        this._get2Candle().then((c)=>{
            
        });
    }
    _renewCandleStop(){
        this.#_renewcandle = false;
    }
    _calcPerc(){
        let calcPerc = 50*Math.abs(this.#_lastCandle.high - this.#_lastCandle.low) / this.#_lastCandle.low;
        if(calcPerc<this.#_params.percmin) return this.#_params.percmin;
        return calcPerc;
    }
    _klineToCandle(kline){
        return {
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