const accessKey1 = "MlmTyzzGbiFSDNyrI745NboXTBS9AdKXwxLMXd00aUWpWKPcI8hiRIfDpFv0oI8o";
const secretKey1 = "u3fNSMJlYwTMwCOb3X5Bvp3xrpiogEN1MyQbDdtYS3lisd2VB6aKV8KjCaGmgFIg";
const secretWord = "B52";
const B52AreaHtml = `
<div>
  <button id='B52ClearChart'>Clear chart</button>
</div>
<div>
  <button id='B52Start100'>B52</button>
</div>
<div>
  <button id='B52StartBinance'>START!</button>
</div>
<div>
  Binance connection status: <span id="B52ConnectionStatus"></span>
  <button id='B52ConnectBinance'>Connect</button>
</div>
<div>
  Results:
  <div id='B52Result'></div>
</div>
`;

class B52Tv {
    constructor() {
    }
    triggerMouseEvent(node, eventType) {
        var clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        node.dispatchEvent(clickEvent);
    }
    getCurrentCurrencyPair() {
        var sign = this.xpathGetFirstItem("//div[@id='header-toolbar-symbol-search']/div");
	    var pairText = sign.innerText;
	    if(pairText.substr(pairText.length - 4)=="PERP") pairText = pairText.slice(0,-4);
        return pairText;
    }
    xpathItemCount(xpath) {
        return document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength;
    }
    xpathGetFirstItem(xpath) {
        var items = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
        return items.iterateNext();
    }
    clearB52s() {
        var query = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-delete-action']";
        var itemsCount = this.xpathItemCount(query);
        for (var i = 0; i < itemsCount; i++) {
            var item = this.xpathGetFirstItem(query);
            this.triggerMouseEvent(item, "mousedown");
        }
    }
    runFavIndicator(name) {
        var arrow = this.xpathGetFirstItem("(//div[@data-name='show-favorite-indicators'])[1]");
        this.triggerMouseEvent(arrow, "click");
        var that = this;
        var fav = "//div[./div[text()='Favorite Indicators']]/div[.//span[text()='" + name + "']]";
        return new Promise((s,f)=>{
            that.waitForElement(fav).then((e)=>{
                that.triggerMouseEvent(e, "click");
                var settings = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-settings-action']";
                that.waitForElement(settings).then((e2)=>{
                    s();
                });
            });
        });
    }
    runStopAlert(currency, name) {
        var that =this;
        var play = "(//div[starts-with(@class,'body')]//div[./div/span[contains(text(),'" + currency + "')] and ./div[contains(text(),'" + name + "')]]//div[@role='button'])[1]";
        //try clicking if no try openning then clicking
        var alertMenu = "//div[@data-role='button' and @data-name='alerts']";
        return new Promise((s,f)=>{
            that.waitForElement(alertMenu).then((a)=>{
                if(that.xpathItemCount(play)<1)
                {
                    that.triggerMouseEvent(a, "click");
                }
                that.waitForElement(play).then((e)=>{
                    that.triggerMouseEvent(e, "click");
                    s();
                });
            });
        });
    }
    getCurrentStrategyName() {
        var sign = this.xpathGetFirstItem("//div[@data-name='legend']//div[@data-name='legend-source-title' and contains(text(),'" + secretWord + "')]");
        return sign.innerText;
    }
    getAlertMessage() {
        var alert = this.xpathGetFirstItem("//div[@data-qa-dialog-name='alert-fired']//div[contains(@class,'secondaryRow')]");
        return alert.innerText;
    }
    closeAlert() {
        var close = this.xpathGetFirstItem("//div[@data-qa-dialog-name='alert-fired']//span[starts-with(@class,'close')]");
        this.triggerMouseEvent(close, "click");
    }
    grabAlertMessage(name) {
        var that = this;
	    return new Promise((s,f) => {
            var existCondition = setInterval(function () {
                if ($("div[data-qa-dialog-name='alert-fired']").length) {
                    clearInterval(existCondition);
                    //stop it now
                    var theMessage = that.getAlertMessage();
                    that.closeAlert();
                    that.runStopAlert(that.getCurrentCurrencyPair(), name).then(()=>{
                        s(theMessage);
                    });
                }
            }, 100);
	    });
    }
    createNewAlert(alertName) {
        var that = this;
        return new Promise((s,f) => 
        {
            var more = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-more-action']";
            var item = this.xpathGetFirstItem(more);
            that.triggerMouseEvent(item, "mousedown");
            var newAlert = "//div[@id='overlap-manager-root']//tr[.//span[starts-with(text(),'Add alert on')]]";
            that.waitForElement(newAlert).then((e1)=>{
                that.triggerMouseEvent(e1, "click");
                var inputVal = "//input[@name='alert-name']";
                that.waitForElement(inputVal).then((e2)=>{
                        that.setReactValue(e2,alertName);
                        that.pressEnter().then(()=>{
                            s();
                        });
                });
            });
        });
    }
    pressEnter() {
        return new Promise((s,f)=>{
            setTimeout(() => {
                    const ke = new KeyboardEvent('keydown', {
                    bubbles: true,
                    cancelable: true,
                    keyCode: 13
                });
                document.body.dispatchEvent(ke);
                s();
            }, 50);
        });
    }
    deleteAlert(currency, name) {
        var del = this.xpathGetFirstItem("(//div[starts-with(@class,'body')]//div[./div/span[contains(text(),'" + currency + "')] and ./div[contains(text(),'" + name + "')]]//div[@role='button'])[3]");
        this.triggerMouseEvent(del, "click");
        var that = this;
        var yesButton = "//button[starts-with(@class,'actionButton') and @name='yes']";
        that.waitForElement(yesButton).then((e)=>{
            that.triggerMouseEvent(e, "click");
        });
    }
	setStrategySettings(sets)
	{
		var settings = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-settings-action']";
		var item = tv.xpathGetFirstItem(settings);
		this.triggerMouseEvent(item, "mousedown");
		var that = this;
        var input = "//div[./div[text()='"+sets[0].label+"']]/following-sibling::div[1]//input";
        return new Promise((s,f)=>{
            this.waitForElement(input).then((e)=>{
                for(var i=0;i<sets.length;i++)
                {
                    var input = "//div[./div[text()='"+sets[i].label+"']]/following-sibling::div[1]//input";
                    var inputNode = that.xpathGetFirstItem(input);
                    that.setReactValue(inputNode,sets[i].value);
                }
                var ok = that.xpathGetFirstItem("//button[@data-name='submit-button']");
                that.triggerMouseEvent(ok, "click");
                s();
            });
        });
	}
    waitForElement(xpath)
    {
        var that = this;
        return new Promise((s,f) => {
            var maxTimer = 300;
            var existCondition = setInterval(() => {
                var theElementFound = that.xpathItemCount(xpath)>0;
                if (theElementFound) {
                    //wait till ready and exit
                    var theElement = that.xpathGetFirstItem(xpath);
                    $(theElement).ready(()=>{
                        s(theElement);
                    });
                    //exit
                    clearInterval(existCondition);
                }
                else if(maxTimer<1)
                {
                    console.log("Didn't find element after 30 seconds: "+xpath);
                    clearInterval(existCondition);
                }
                else
                {
                    maxTimer--;
                }
            }, 100);
        });
    }
    setReactValue(element, value) {
        let lastValue = element.value;
        element.value = value;
        let event = new Event("input", { target: element, bubbles: true });
        // React 15
        event.simulated = true;
        // React 16
        let tracker = element._valueTracker;
        if (tracker) {
            tracker.setValue(lastValue);
        }
        element.dispatchEvent(event);
    }
    runNTimes(func,delay,times){
        var maxTimer = times;
            var existCondition = setInterval(() => {
                func();

                console.log(maxTimer);

                if(maxTimer<1)
                {
                    clearInterval(existCondition);
                }
                else
                {
                    maxTimer--;
                }
            }, delay);
    }
}

class BinanceAdapter {
    constructor(B52Tv) {
        this.tv = B52Tv;
	this.ExchangeInfo = null;
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
				var tickSize = theSymb[0].filters.filter(a => a.filterType == 'PRICE_FILTER')[0].tickSize;
				s(tickSize);
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
                that._signedGETRequest("https://fapi.binance.com/fapi/v1/balance?",accessKey1,secretKey1).then((resp)=>{
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
                    that._signedPOSTRequest_simple("https://fapi.binance.com/fapi/v1/order?",accessKey1,secretKey1,e).then((resp)=>{
                        messageResponses += resp.toString() + "\n";
                    });
                });
                s(messageResponses);
            });
        }
}

class B52Widget {
    constructor(B52Tv, BinanceAdapter, theme) {
        this.tv = B52Tv;
        this.theme = theme;
        this.b = BinanceAdapter;
    }
    Build() {
        var that = this;
        $('body').append('<div id="B52Area" draggable="true" class="' + this.theme + '"></div>');
        $('#B52Area').html(B52AreaHtml);

        //events
        $("#B52ClearChart").click(() => {
            this.tv.clearB52s();
        });
        $("#B52Start100").click(() => {that.startStrategy();});
        $("#B52StartBinance").click(() => {that.makeADeal();});

        $("#B52ConnectBinance").click(() => {
            //this.b.GetTickSize().then((size) => { $("#B52ConnectionStatus").text(size.toString()); });
            this.b.GetBalance().then((bal)=>{$("#B52ConnectionStatus").text("$"+bal.toString());})
        });
        that.stlyeIt();
    }
    stlyeIt() {
        $("#B52Area.dark").css({
            "-webkit-user-drag": "element",
            "resize": "both",
            "position": "absolute",
            "right": "57px",
            "bottom": "25px",
            "border": "1px solid gray",
            "height": "350px",
            "width": "240px",
            "background-color": "black",
            "padding": "5px"
        });

        $("#B52Area.dark").find("div").css({
            "padding": "2px"
        });

        $("#B52Area.dark").find("button").css({
            "border": "1px solid gray",
            "background-color": "#3f5721"
        });
    }
    startStrategy() {
        var that = this;
        this.tv.runFavIndicator($("#B52Start100").text()).then(()=>{
            that.b.GetTickSize().then((s)=>{
                that.b.GetPriceFormatting().then(f=>{
                    var sets = [];
                    if(s!=1)
                    {
                        sets.push({label:"Min buy quantity",value:s})
                    }
                    //get format
                    console.log(f);
                    var form = "#.";
                    for(var i=0;i<f.length-2;i++)
                    {
                        form+="#";
                    }
                    console.log(form);
                    if(form!="#.####") 
                    {
                        sets.push({label:"Price Formatting",value:form})
                    }
                    if(sets.length)
                    {
                        that.tv.setStrategySettings(sets);
                    }
                })
            });
            
        });
    }
    makeADeal() {
        var theUniqueName = "B52 " + Date.now().toString();
            var that = this;
            this.tv.createNewAlert(theUniqueName).then(() => {
                that.tv.grabAlertMessage(theUniqueName).then((res) => {
                    //process the message
                    $("#B52Result").text(res);
                    b.ForEachOrderInMessage(res).then(r=>{
                        console.log(r);
                    });
                    
                    setTimeout(function () {
                        that.tv.deleteAlert(that.tv.getCurrentCurrencyPair(), theUniqueName);
                        that.tv.runNTimes(()=>{
                            var theButtonClose = "//div[@data-qa-dialog-name='alert-fired']//span[starts-with(@class,'close')]";
                            if(that.tv.xpathItemCount(theButtonClose)>0)
                            {
                                that.tv.closeAlert();
                            }
                        },300,10);
                    }, 50);
                    
                });
            });
    }
}

class B52TvService
{
	AddAction(action)
	{
		this.arrayOfActions.push(action);
	}
    AddCloseClickers(closers)
    {
        var that = this;
        that.closers = closers;
    }
	
	Start() {
		var that = this;
		this.service = setInterval(function () {
			for (var i = 0; i < that.arrayOfActions.length; i++) {
 			   that.arrayOfActions[i]();
			}
            for(var i=0;i<that.closers.length;i++)
            {
                var shit = that.closers[i];
                if(that.tv.xpathItemCount(shit)>0)
                {
                    that.tv.triggerMouseEvent(that.tv.xpathGetFirstItem(shit),"click");
                }    

            }
		}
        , this.freq);
	}
	Stop() {
		clearInterval(this.service);
	}

	constructor(B52Tv,freq){
		this.arrayOfActions = [];
		this.service = null;
		this.freq = freq;
        this.tv = B52Tv;
        this.closers = [];
	}
}

var tv = new B52Tv();
var b = new BinanceAdapter(tv);
var page = new B52Widget(tv,b,"dark");
page.Build();
var tvShitObserver = new B52TvService(tv,100);
tvShitObserver.AddCloseClickers(
    [
        "//article[.//h2[text()='Unlock the full power of TradingView']]//button[starts-with(@class,'close-button')]",
        "//div[starts-with(@class,'modal') and .//div[text()='No ads on any chart']]//button[@aria-label='Close']",
        "//div[starts-with(@class,'modal') and .//div[text()='More indicators, more trading possibilities']]//button[@aria-label='Close']",
        "//article[starts-with(@class,'toast')]//button[starts-with(@class,'close-button')]",
        "//div[starts-with(@class,'modal') and .//div[text()='Never miss a trade with our server-side alerts']]//button[@aria-label='Close']"
    ]
);
tvShitObserver.Start();


