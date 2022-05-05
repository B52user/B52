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
        this.waitForElement(fav).then((e)=>{
            that.triggerMouseEvent(e, "click");
        });
    }
    runStopAlert(currency, name) {
        var that =this;
        var play = "(//div[starts-with(@class,'body')]//div[./div/span[contains(text(),'" + currency + "')] and ./div[contains(text(),'" + name + "')]]//div[@role='button'])[1]";
        //try clicking if no try openning then clicking
        if(that.xpathItemCount(play)<1)
        {
            var menu = that.tv.xpathGetFirstItem("//div[@data-role='button' and @data-name='alerts']");
            that.tv.triggerMouseEvent(menu, "click");
        }
        that.waitForElement(play).then((e)=>{
            this.triggerMouseEvent(e, "click");
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
                    that.runStopAlert(that.getCurrentCurrencyPair(), name);
                    var theMessage = that.getAlertMessage();
                    that.closeAlert();
                    s(theMessage);
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
                    e2.value = alertName;
                    that.triggerMouseEvent(e2, "focus");
                    that.triggerMouseEvent(e2, "input");
                    that.triggerMouseEvent(e2, "change");
                    that.triggerMouseEvent(e2, "blur");
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
		tv.triggerMouseEvent(item, "mousedown");
		var that = this;
        var input = "//div[./div[text()='"+sets[0].label+"']]/following-sibling::div[1]//input";
        this.waitForElement(input).then((e)=>{
            for(var i=0;i<sets.length;i++)
			{
				var input = "//div[./div[text()='"+sets[i].label+"']]/following-sibling::div[1]//input";
				var inputNode = tv.xpathGetFirstItem(input);
				inputNode.value = sets[i].value;
				tv.triggerMouseEvent(inputNode, "focus");
				tv.triggerMouseEvent(inputNode, "input");
				tv.triggerMouseEvent(inputNode, "change");
				tv.triggerMouseEvent(inputNode, "blur");
			}
			setTimeout(function(){
				var ok = tv.xpathGetFirstItem("//button[@data-name='submit-button']");
				tv.triggerMouseEvent(ok, "click");
			},5000);
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
}

class B52Widget {
    constructor(B52Tv, BinanceAdapter, theme) {
        this.tv = B52Tv;
        this.theme = theme;
        this.b = BinanceAdapter;
    }
    Build() {
        $('body').append('<div id="B52Area" draggable="true" class="' + this.theme + '"></div>');
        $('#B52Area').html(B52AreaHtml);

        //events
        $("#B52ClearChart").click(() => {
            this.tv.clearB52s();
        });
        $("#B52Start100").click(() => {
            this.tv.runFavIndicator($("#B52Start100").text());
        });
        $("#B52StartBinance").click(() => {
            var theUniqueName = "B52 " + Date.now().toString();
            
            var that = this;
            this.tv.createNewAlert(theUniqueName).then(() => {
                that.tv.grabAlertMessage(theUniqueName).then((res) => {
                    $("#B52Result").text(res);
                    setTimeout(function () {
                        that.tv.deleteAlert(that.tv.getCurrentCurrencyPair(), theUniqueName);
                    }, 50);
                });
            });
        });
        $("#B52ConnectBinance").click(() => {
            this.b.GetTickSize().then((size) => { $("#B52ConnectionStatus").text(size.toString()); });
        });
        this.Stlye();
    }

    Stlye() {
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
}

class B52TvService
{
	AddAction(action)
	{
		this.arrayOfActions.push(action);
	}
	
	Start() {
		var that = this;
		this.service = setInterval(function () {
			for (var i = 0; i < that.arrayOfActions.length; i++) {
 			   that.arrayOfActions[i]();
			}
		}
        , this.freq);
	}
	Stop() {
		clearInterval(this.service);
	}

	constructor(freq){
		this.arrayOfActions = [];
		this.service = null;
		this.freq = freq;
	}
}

var tv = new B52Tv();
var b = new BinanceAdapter(tv);
var page = new B52Widget(tv,b,"dark");
page.Build();
var tvObserver = new B52TvService(100);
tvObserver.AddAction(()=>{
	//shit window 1
	var shit1 = "//article[.//h2[text()='Unlock the full power of TradingView']]//button[starts-with(@class,'close-button')]";
	if(tv.xpathItemCount(shit1)>0)
	{
		tv.triggerMouseEvent(tv.xpathGetFirstItem(shit1),"click");
	}
});
tvObserver.AddAction(()=>{
	//shit window 2
	var shit2 = "//div[starts-with(@class,'modal') and .//div[text()='No ads on any chart']]//button[@aria-label='Close']";
	if(tv.xpathItemCount(shit2)>0)
	{
		tv.triggerMouseEvent(tv.xpathGetFirstItem(shit2),"click");
	}
});
tvObserver.AddAction(()=>{
	//shit window 3
	var shit3 = "//div[starts-with(@class,'modal') and .//div[text()='More indicators, more trading possibilities']]//button[@aria-label='Close']";
	if(tv.xpathItemCount(shit3)>0)
	{
		tv.triggerMouseEvent(tv.xpathGetFirstItem(shit3),"click");
	}
});
tvObserver.AddAction(()=>{
	//shit window 4
	var shit4 = "//article[starts-with(@class,'toast')]//button[starts-with(@class,'close-button')]";
	if(tv.xpathItemCount(shit4)>0)
	{
		tv.triggerMouseEvent(tv.xpathGetFirstItem(shit4),"click");
	}
});
//
tvObserver.Start();


