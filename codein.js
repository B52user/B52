var B52Settings = 
{
	accessKey1 : "MlmTyzzGbiFSDNyrI745NboXTBS9AdKXwxLMXd00aUWpWKPcI8hiRIfDpFv0oI8o",
	secretKey1 : "u3fNSMJlYwTMwCOb3X5Bvp3xrpiogEN1MyQbDdtYS3lisd2VB6aKV8KjCaGmgFIg",
	maxLossLabel : "",
	sButtons : 
	[
		{name:"B52_ZONE_0.5",color:"#006600"},
		{name:"B52_ZONE_1.0",color:"#006600"},
		{name:"B52_LINE_0.5",color:"#000099"},
		{name:"B52_LINE_1.0",color:"#000099"},
		{name:"B52_NOW_0.5",color:"#cc3300"},
		{name:"B52_NOW_1.0",color:"#cc3300"}
	]
}

class BinanceAdapter {
    constructor(B52Tv) {
        this.tv = B52Tv;
	this.ExchangeInfo = null;
	this.accessKey = "";
	this.secretKey = "";
    }
	SetAccessKey(key)
	{
		this.accessKey = key;
	}
	SetSecretKey(key)
	{
		this.secretKey = key;
	}
	GetPrice()
	{
		var that = this;
	    	return new Promise((s,f)=>
		{
			var url = "https://fapi.binance.com/fapi/v1/ticker/24hr?symbol="+that.tv.getCurrentCurrencyPair();
			
			$.getJSON(url, (priceInfo) => {
				s(parseFloat(priceInfo.lastPrice));
			});	
		});
	}
	GetOrders()
	{
		
	}
	_getExchangeInfo() {
		var that = this;
	    	return new Promise((s,f)=>
		{
			var url = "https://fapi.binance.com/fapi/v1/exchangeInfo";
			
			$.getJSON(url, (tiketInfo) => {
				that.ExchangeInfo = tiketInfo;
				s();
			});	
		});
	}
	_getSize()
	{
		var that = this;
		return new Promise((s,f)=>
		{
			var theSymb = that.ExchangeInfo.symbols.filter(a=>a.symbol==that.tv.getCurrentCurrencyPair());
			if(!theSymb.length) {console.log("ERROR! Not found symbol "+that.tv.getCurrentCurrencyPair());}
			else
			{
				var theMinSize = parseFloat(theSymb[0].filters.filter(a => a.filterType == 'LOT_SIZE')[0].stepSize);
				s(theMinSize);
			}
		});
	}
    _getPriceFormat()
	{
		var that = this;
		return new Promise((s,f)=>
		{
			var theSymb = that.ExchangeInfo.symbols.filter(a=>a.symbol==that.tv.getCurrentCurrencyPair());
			if(!theSymb.length) {console.log("ERROR! Not found symbol "+that.tv.getCurrentCurrencyPair());}
			else
			{
				var tickSize = parseFloat(theSymb[0].filters.filter(a => a.filterType == 'PRICE_FILTER')[0].tickSize);
				s(tickSize.toString());
			}
		});
	}
    GetTickSize() {
		var that = this;
		return new Promise((s,f) =>
		{
			if(this.ExchangeInfo==null)
			{
				this._getExchangeInfo().then(()=>{this._getSize().then(s);});
			}
			else
			{
				this._getSize().then(s);
			}
		});
    }
    GetPriceFormatting() {
        var that = this;
		return new Promise((s,f) =>
		{
			if(this.ExchangeInfo==null)
			{
				this._getExchangeInfo().then(()=>{this._getPriceFormat().then(s);});
			}
			else
			{
				this._getPriceFormat().then(s);
			}
		});
    }
    _signedGETRequest(url,accessKey,secretKey) {
            return new Promise((s,f)=>{
                fetch("https://fapi.binance.com/fapi/v1/time")
                .then(response => response.json())
                .then(timer => {
                        var  timeCode = timer.serverTime;
                        var queryString = "timestamp=" + timeCode;
                        var hash = CryptoJS.HmacSHA256(queryString,secretKey);
                        var toAdd = queryString + "&signature=" + hash;
                        fetch(url+toAdd,{method:"get",headers:{"X-MBX-APIKEY":accessKey}})
                            .then(response => response.json())
                            .then(resp => {
                                s(resp);
                            })
                            .catch(error => console.log(error));
                })
                .catch(error => console.log(error));
            });
    }
    _signedPOSTRequest_simple(url,accessKey,secretKey,params)
        {
            return new Promise((s,f)=>{
                fetch("https://fapi.binance.com/fapi/v1/time")
                .then(response => response.json())
                .then(timer => {
                        var  timeCode = timer.serverTime;
                        params["timestamp"] = timeCode;
                        var hash = CryptoJS.HmacSHA256(jQuery.param(params),secretKey);
                        params["signature"] = hash.toString();
                        var toAdd = jQuery.param(params);
                        fetch(url+toAdd,{method:"post",headers:{"X-MBX-APIKEY":accessKey}})
                            .then(response => response.json())
                            .then(resp => {
                                s(resp);
                            })
                            .catch(error => console.log(error));
                })
                .catch(error => console.log(error));
            });
        }
        GetBalance()
        {
            var that = this;
            return new Promise((s,f)=>{
                that._signedGETRequest("https://fapi.binance.com/fapi/v1/balance?",B52Settings.accessKey1,B52Settings.secretKey1).then((resp)=>{
                    s(resp.filter(a=>a.asset=="USDT")[0].balance);
                });
            });
            
        }
        ForEachOrderInMessage(message)
        {
            var that = this;
            return new Promise((s,f)=>{
                var arr = JSON.parse(message);
                var messageResponses = [];
                arr.forEach(e=>{
                    e["symbol"] = that.tv.getCurrentCurrencyPair();
                    that._signedPOSTRequest_simple("https://fapi.binance.com/fapi/v1/order?",B52Settings.accessKey1,B52Settings.secretKey1,e).then((resp)=>{
                        messageResponses += resp.toString() + "\n";
                    });
                });
                s(messageResponses);
            });
        }
}
