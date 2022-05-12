var B52Settings = 
{
	secretWord : "B52",
	accessKey1 : "MlmTyzzGbiFSDNyrI745NboXTBS9AdKXwxLMXd00aUWpWKPcI8hiRIfDpFv0oI8o",
	secretKey1 : "u3fNSMJlYwTMwCOb3X5Bvp3xrpiogEN1MyQbDdtYS3lisd2VB6aKV8KjCaGmgFIg",
	maxLossLabel : "Max Loss in $",
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
var B52HTML = 
{
	B52AreaHtml : `
	<style>
		div.B52dark {
			position:absolute;
			background-color:black;
			padding:2px;
			z-index:1000;
		}
		div.B52dark button {
			border: "1px solid gray";
			margin:1px;
			
		}
		button.B52StrategyButton {
			margin:2px;
			padding-top:5px;
			padding-bottom:5px;
			font-size:15px;
			width:55px;
		}
		button.B52BigButton {
			padding-top:5px;
			padding-bottom:5px;
			font-size:20px;
			width:70px;
			height:65px;
		}
	</style>
    <div id="B52CloseOpen" class="B52dark" style="margin:-2px;height:100px;width:30px;background-color:#404040;display:flex;margin-right:2px;right:360px;bottom:2px;">
            <button id="B52CloseOpenButton" style="background-color:transparent;border:none;width:30px;height:120px;display:flex;margin:0px;padding:0px;" closed="false">
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 270.774 270.775" style="margin:auto">
                    <path fill="white" d="M239.326,139.072c-8.12-8.129-22.284-8.129-30.404,0l-56.894,56.883l3.086-33.529c0.01-0.125,0.022-0.252,0.022-0.378
                        c0.702-6.54-1.503-12.887-6.121-17.507c-8.12-8.11-22.271-8.11-30.408,0c-2.688,2.688-4.611,6.11-5.58,9.917
                        c-0.066,0.204-0.113,0.414-0.155,0.624c-0.469,2.127-0.603,4.326-0.404,6.552l-4.467,83.623
                        c-1.338,7.033,0.851,14.195,5.893,19.244c4.068,4.069,9.377,6.146,15.404,6.237c0.21,0.021,0.42,0.036,0.636,0.036
                        c0.097,0,0.194,0,0.289-0.005l85.046-4.552c2.114,0.199,4.257,0.078,6.282-0.341c0.473-0.053,0.93-0.174,1.36-0.348
                        c3.6-0.997,6.851-2.865,9.433-5.454c8.378-8.377,8.378-22.021,0-30.409c-4.565-4.566-10.985-6.781-17.49-6.116
                        c-0.127,0-0.258,0.011-0.39,0.021l-32.199,2.966l57.072-57.065C247.709,161.089,247.709,147.445,239.326,139.072z"/>
                    <path fill="white" d="M115.66,108.334c-0.011,0.131-0.021,0.26-0.021,0.389c-0.704,6.535,1.512,12.879,6.124,17.497
                        c4.063,4.058,9.459,6.293,15.208,6.293c5.745,0,11.142-2.236,15.198-6.293c2.705-2.698,4.625-6.111,5.581-9.891
                        c0.062-0.209,0.116-0.419,0.163-0.635c0.473-2.123,0.603-4.32,0.404-6.556l4.473-83.621c1.343-7.031-0.836-14.197-5.89-19.239
                        c-4.085-4.089-9.629-6.535-15.444-6.247c-0.288-0.031-0.6-0.036-0.883-0.026L55.526,4.553c-2.1-0.184-4.212-0.076-6.229,0.339
                        c-0.501,0.052-0.984,0.176-1.441,0.36c-3.596,1-6.837,2.871-9.406,5.44c-8.381,8.386-8.381,22.027,0,30.402
                        c4.569,4.569,10.965,6.795,17.443,6.124c0.145,0,0.289-0.011,0.436-0.023l32.208-2.966l-57.074,57.066
                        c-4.065,4.053-6.302,9.449-6.302,15.195c0,5.747,2.237,11.149,6.297,15.208c4.063,4.063,9.459,6.299,15.205,6.299
                        c5.743,0,11.14-2.236,15.203-6.294l56.887-56.893L115.66,108.334z"/>
                </svg>
            </button>
	</div>
	<div id="B52Area1" class="B52dark" style="right:72px;bottom:2px;border:1px solid gray;height:96px;width:290px;border-right:none;display:flex;">
		<div id="B52StrategyButtons">
		</div>
	</div>
	<div id="B52Area2" class="B52dark" style="right:2px;bottom:2px;border:1px solid gray;height:200px;width:70px;">
		<!--<div id="B52ExpandButton" style="margin:-2px;height:30px;width:124px;background-color:#404040">
		</div>-->
		<div>
            <button id='B52SellAll' class="B52BigButton" style="background-color:green">FIX $30.21</button>
		</div>
		<div>
			<button id='B52StartBinance' class="B52BigButton" style="background-color:maroon">START!</button>
		</div>
		<div>
			<button id='B52ClearChart' class="B52BigButton" style="background-color:#000099">CLEAR CHART</button>
		</div>
	</div>`
}

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
        var query = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + B52Settings.secretWord + "')]]//div[@data-name='legend-delete-action']";
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
                var settings = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + B52Settings.secretWord + "')]]//div[@data-name='legend-settings-action']";
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
            var more = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + B52Settings.secretWord + "')]]//div[@data-name='legend-more-action']";
            var item = this.xpathGetFirstItem(more);
            that.triggerMouseEvent(item, "mousedown");
            var newAlert = ["//div[@id='overlap-manager-root']//tr[.//span[starts-with(text(),'Add alert on')]]","//div[@id='overlap-manager-root']//li[.//span[starts-with(text(),'Add alert on')]]"];
            that.waitForElementOr(newAlert).then((e1)=>{
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
		var settings = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + B52Settings.secretWord + "')]]//div[@data-name='legend-settings-action']";
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
    waitForElementOr(xpaths)
    {
        var that = this;
        return new Promise((s,f) => {
            var maxTimer = 300;
            var existCondition = setInterval(() => {
                var theElementFound = false;
                var theFoundXpath = "";
                xpaths.forEach(x=>{if(that.xpathItemCount(x)>0)theElementFound = true;theFoundXpath=x;});
                if (theElementFound) {
                    //wait till ready and exit
                    var theElement = that.xpathGetFirstItem(theFoundXpath);
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
                    f();
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

class B52Widget {
    constructor(B52Tv, BinanceAdapter, theme) {
        this.tv = B52Tv;
        this.theme = theme;
        this.b = BinanceAdapter;
    }
    Build() {
        var that = this;
        $('body').append(B52HTML.B52AreaHtml);
	    that.fillButtonsIn(B52Settings.sButtons);

        //events
        $("#B52ClearChart").mouseup(() => {that.tv.clearB52s();});
        $("#B52StartBinance").mouseup(() => {that.makeADeal();});
	    $("#B52CloseOpenButton").mouseup(() => {that.closeOpen();});

    }
    closeOpen()
    {
        var closed = $("#B52CloseOpenButton").attr("closed")=="true";
        if (closed)
        {
            //open
            $("#B52CloseOpenButton").attr("closed","false");
            $("#B52CloseOpen").css("right","360px");
            $("#B52CloseOpen").css("bottom","2px");
            $("#B52Area1").show();
            $("#B52Area2").show();
        }
        else
        {
            //close
            $("#B52CloseOpenButton").attr("closed","true");
            $("#B52CloseOpen").css("right","2px");
            $("#B52CloseOpen").css("bottom","2px");
            $("#B52Area1").hide();
            $("#B52Area2").hide();
        }
    }

    startStrategy(strategyName, maxLoss) {
		var that = this;
		this.tv.runFavIndicator(strategyName).then(()=>{
			that.b.GetTickSize().then((s)=>{
				that.b.GetPriceFormatting().then(f=>{
					var sets = [];
					if(s!=1)
					{
						sets.push({label:"Min buy quantity",value:s})
					}
					//get format
					var form = "#.";
					for(var i=0;i<f.length-2;i++)
					{
						form+="#";
					}
					if(form!="#.####") 
					{
						sets.push({label:"Price Formatting",value:form})
					}
					//set maxLoss
					sets.push({label:B52Settings.maxLossLabel,value:maxLoss});
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

	fillButtonsIn(buttons)
	{
		var that = this;
	    	buttons.forEach(b=>
			{
		    	var splitted = b.name.split('_');
				var stratName = splitted[0]+"_"+splitted[1];
				var loss = parseFloat(splitted[2]);
				$("#B52StrategyButtons").append("<button class='B52StrategyButton' id='"+b.name+"' style='background-color:"+b.color+"'>"+splitted[1]+" " + splitted[2] +"</button>");
			});
		$("#B52StrategyButtons").on("click",".B52StrategyButton",e=>{that.strategyButtonClick(e);})
	}

	strategyButtonClick(b)
	{
		var that = this;
		var splitted = b.srcElement.id.split('_');
		var stratName = splitted[0]+"_"+splitted[1];
		var loss = parseFloat(splitted[2]);
		that.startStrategy(stratName,loss);
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
        "//div[starts-with(@class,'modal') and .//div[text()='Never miss a trade with our server-side alerts']]//button[@aria-label='Close']",
	"//div[@data-dialog-name='gopro']//button[@aria-label='Close']"
    ]
);
tvShitObserver.Start();

//libs afterall
var CryptoJS=CryptoJS||function(h,s){var f={},g=f.lib={},q=function(){},m=g.Base={extend:function(a){q.prototype=this;var c=new q;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=g.WordArray=m.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=s?c:4*a.length},toString:function(a){return(a||k).stringify(this)},concat:function(a){var c=this.words,d=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((b+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)c[b+e>>>2]=d[e>>>2];else c.push.apply(c,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=h.ceil(c/4)},clone:function(){var a=m.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],d=0;d<a;d+=4)c.push(4294967296*h.random()|0);return new r.init(c,a)}}),l=f.enc={},k=l.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-8*(b%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b+=2)d[b>>>3]|=parseInt(a.substr(b,
2),16)<<24-4*(b%8);return new r.init(d,c/2)}},n=l.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++)d.push(String.fromCharCode(c[b>>>2]>>>24-8*(b%4)&255));return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b++)d[b>>>2]|=(a.charCodeAt(b)&255)<<24-8*(b%4);return new r.init(d,c)}},j=l.Utf8={stringify:function(a){try{return decodeURIComponent(escape(n.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return n.parse(unescape(encodeURIComponent(a)))}},
u=g.BufferedBlockAlgorithm=m.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=j.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,d=c.words,b=c.sigBytes,e=this.blockSize,f=b/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;b=h.min(4*a,b);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(d,g);g=d.splice(0,a);c.sigBytes-=b}return new r.init(g,b)},clone:function(){var a=m.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});g.Hasher=u.extend({cfg:m.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){u.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,d){return(new a.init(d)).finalize(c)}},_createHmacHelper:function(a){return function(c,d){return(new t.HMAC.init(a,
d)).finalize(c)}}});var t=f.algo={};return f}(Math);
(function(h){for(var s=CryptoJS,f=s.lib,g=f.WordArray,q=f.Hasher,f=s.algo,m=[],r=[],l=function(a){return 4294967296*(a-(a|0))|0},k=2,n=0;64>n;){var j;a:{j=k;for(var u=h.sqrt(j),t=2;t<=u;t++)if(!(j%t)){j=!1;break a}j=!0}j&&(8>n&&(m[n]=l(h.pow(k,0.5))),r[n]=l(h.pow(k,1/3)),n++);k++}var a=[],f=f.SHA256=q.extend({_doReset:function(){this._hash=new g.init(m.slice(0))},_doProcessBlock:function(c,d){for(var b=this._hash.words,e=b[0],f=b[1],g=b[2],j=b[3],h=b[4],m=b[5],n=b[6],q=b[7],p=0;64>p;p++){if(16>p)a[p]=
c[d+p]|0;else{var k=a[p-15],l=a[p-2];a[p]=((k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3)+a[p-7]+((l<<15|l>>>17)^(l<<13|l>>>19)^l>>>10)+a[p-16]}k=q+((h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25))+(h&m^~h&n)+r[p]+a[p];l=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&f^e&g^f&g);q=n;n=m;m=h;h=j+k|0;j=g;g=f;f=e;e=k+l|0}b[0]=b[0]+e|0;b[1]=b[1]+f|0;b[2]=b[2]+g|0;b[3]=b[3]+j|0;b[4]=b[4]+h|0;b[5]=b[5]+m|0;b[6]=b[6]+n|0;b[7]=b[7]+q|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;
d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=h.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=q.clone.call(this);a._hash=this._hash.clone();return a}});s.SHA256=q._createHelper(f);s.HmacSHA256=q._createHmacHelper(f)})(Math);
(function(){var h=CryptoJS,s=h.enc.Utf8;h.algo.HMAC=h.lib.Base.extend({init:function(f,g){f=this._hasher=new f.init;"string"==typeof g&&(g=s.parse(g));var h=f.blockSize,m=4*h;g.sigBytes>m&&(g=f.finalize(g));g.clamp();for(var r=this._oKey=g.clone(),l=this._iKey=g.clone(),k=r.words,n=l.words,j=0;j<h;j++)k[j]^=1549556828,n[j]^=909522486;r.sigBytes=l.sigBytes=m;this.reset()},reset:function(){var f=this._hasher;f.reset();f.update(this._iKey)},update:function(f){this._hasher.update(f);return this},finalize:function(f){var g=
this._hasher;f=g.finalize(f);g.reset();return g.finalize(this._oKey.clone().concat(f))}})})();
