/* 
params = {
    currencyinfo:""
    maxloss:"",
    buypositions:"",
    percent:"",
    percmin:""
}
*/

class B52Robot_Carl{
    #_params;
    #_lastCandle;
    #_positions;
    Srvs = [];
    #_binance;
    #_perc;
    constructor(params,binance){
        this.#_params = params;
        this.#_binance = binance;
        if(this.#_params.percent!="auto") this.#_perc = parseFloat(this.#_params.percent);
    }
    Start(){
        //get last 5 m candle and add as data
        this.#_binance.GET_ANON_PARAMS(B52Settings.binanceSettings.kindle,
            {
                symbol:this.#_params.currencyinfo.symbol,
                limit:2,
                interval:"5m"
            }).then(res=>{
                console.log(res);
            });
        //calc initial if required
        if(this.#_params.percent=="auto"){}
        //run
    }
    Stop(){

    }
    _calcPerc(){

    }
}

b52.Binance
var r = new B52Robot_Carl({
    currencyinfo:b52.Binance.ExchangeInfo.symbols.filter(a=>a.symbol=="GMTUSDT")[0],
    maxloss:0.2,
    maxbuypositions:10,
    percent:"auto",
    percmin:"0.35"
},b52.Binance);