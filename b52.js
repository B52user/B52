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
    xpathGetFirstItem(xpath) {
        var items = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
        return items.iterateNext();
    }
    clearB52s() {
        var query = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-delete-action']";
        var itemsCount = this.xpathItemCount(query);
        for (i = 0; i < itemsCount; i++) {
            item = this.xpathGetFirstItem(query);
            this.triggerMouseEvent(item, "mousedown");
        }
    }
    runFavIndicator(name) {
        var arrow = this.xpathGetFirstItem("(//div[@data-name='show-favorite-indicators'])[1]");
        this.triggerMouseEvent(arrow, "click");
        setTimeout(function () {
            var fav = this.xpathGetFirstItem("//div[./div[text()='Favorite Indicators']]/div[.//span[text()='" + name + "']]");
            this.triggerMouseEvent(fav, "click");
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
        that = this;
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
        item = this.xpathGetFirstItem(more);
        this.triggerMouseEvent(item, "mousedown");
        that = this;
        setTimeout(function () {
            var newAlert = xpathGetFirstItem("//div[@id='overlap-manager-root']//tr[.//span[starts-with(text(),'Add alert on')]]");
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
            }, 250);
        }, 150);
    }
    deleteAlert(currency, name) {
        var del = this.xpathGetFirstItem("(//div[starts-with(@class,'body')]//div[./div/span[contains(text(),'" + currency + "')] and ./div[contains(text(),'" + name + "')]]//div[@role='button'])[3]");
        this.triggerMouseEvent(del, "click");
        that = this;
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
        var url = "https://fapi.binance.com/fapi/v1/exchangeInfo?symbol=" + this.tv.getCurrentCurrencyPair();
        $.getJSON(url, function (tiketInfo) {
            var theMinSize = parseFloat(tiketInfo.symbols[0].filters.filter(a => a.filterType == 'PRICE_FILTER')[0].tickSize);
            resultFunc(theMinSize);
        });
    }
}

