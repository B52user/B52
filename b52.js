const secretWord = "B52";

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
        return sign.innerText;
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
        setTimeout(function () {
            var fav = that.xpathGetFirstItem("//div[./div[text()='Favorite Indicators']]/div[.//span[text()='" + name + "']]");
            that.triggerMouseEvent(fav, "click");
        }, 200);
    }
    runStopAlert(currency, name) {
        var play = this.xpathGetFirstItem("(//div[starts-with(@class,'body')]//div[./div/span[contains(text(),'" + currency + "')] and ./div[contains(text(),'" + name + "')]]//div[@role='button'])[1]");
        this.triggerMouseEvent(play, "click");
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
    grabAlertMessage(name, thenRun) {
        var that = this;
        var existCondition = setInterval(function () {
            if ($("div[data-qa-dialog-name='alert-fired']").length) {
                clearInterval(existCondition);
                //stop it now
                that.runStopAlert(getCurrentCurrencyPair(), name);
                var theMessage = that.getAlertMessage();
                that.closeAlert();
                thenRun(theMessage);
            }
        }, 100);
    }
    createNewAlert(alertName, thenRun) {
        var more = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-more-action']";
        var item = this.xpathGetFirstItem(more);
        this.triggerMouseEvent(item, "mousedown");
        var that = this;
        setTimeout(function () {
            var newAlert = that.xpathGetFirstItem("//div[@id='overlap-manager-root']//tr[.//span[starts-with(text(),'Add alert on')]]");
            that.triggerMouseEvent(newAlert, "click");
            setTimeout(function () {
                $("input[name='alert-name']")[0].value = alertName;
                that.triggerMouseEvent($("input[name='alert-name']")[0], "focus");
                that.triggerMouseEvent($("input[name='alert-name']")[0], "input");
                that.triggerMouseEvent($("input[name='alert-name']")[0], "change");
                that.triggerMouseEvent($("input[name='alert-name']")[0], "blur");
                setTimeout(function () {
                    const ke = new KeyboardEvent('keydown', {
                        bubbles: true,
                        cancelable: true,
                        keyCode: 13
                    });
                    document.body.dispatchEvent(ke);
                    thenRun();
                }, 50);
            }, 350);
        }, 250);
    }
    deleteAlert(currency, name) {
        var del = this.xpathGetFirstItem("(//div[starts-with(@class,'body')]//div[./div/span[contains(text(),'" + currency + "')] and ./div[contains(text(),'" + name + "')]]//div[@role='button'])[3]");
        this.triggerMouseEvent(del, "click");
        var that = this;
        setTimeout(function () {
            var yesButton = that.xpathGetFirstItem("//button[starts-with(@class,'actionButton') and @name='yes']");
            that.triggerMouseEvent(yesButton, "click");
        }, 150);
    }
}


class BinanceAdapter {
    constructor(B52Tv) {
        this.tv = B52Tv;
    }
    GetTickSize(resultFunc) {
        var url = "https://fapi.binance.com/fapi/v1/exchangeInfo";
        $.getJSON(url, function (tiketInfo) {
            var theMinSize = parseFloat(tiketInfo.symbols.filter(a=>a.pair==this.tv.getCurrentCurrencyPair())[0].filters.filter(a => a.filterType == 'LOT_SIZE')[0].stepSize);
            resultFunc(theMinSize);
        });
    }
}

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
            var menu = this.tv.xpathGetFirstItem("//div[@data-role='button' and @data-name='alerts']");
            this.tv.triggerMouseEvent(menu, "click");
            var that = this;
            this.tv.createNewAlert(theUniqueName, () => {
                that.tv.grabAlertMessage(theUniqueName, (res) => {
                    $("#B52Result").text(res);
                    setTimeout(function () {
                        that.tv.deleteAlert(that.tv.getCurrentCurrencyPair(), theUniqueName);
                    }, 50);
                });
            });
        });
        $("#B52ConnectBinance").click(() => {
            this.b.GetTickSize((size) => { $("#B52ConnectionStatus").text(size.toString()); });
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
tvObserver.Start();


