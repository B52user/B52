function B52Tv()
{
    
}

B52Tv.prototype.triggerMouseEvent = function(node, eventType) {
    var clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent(eventType, true, true);
    node.dispatchEvent(clickEvent);
}

B52Tv.prototype.getCurrentCurrencyPair = function()
{
    var sign = this.xpathGetFirstItem("//div[@id='header-toolbar-symbol-search']/div");
    return sign.innerText;
}

B52Tv.prototype.xpathGetFirstItem = function(xpath) {
    var items = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
    return items.iterateNext();
}

B52Tv.prototype.clearB52s = function() {
    var query = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-delete-action']";
    var itemsCount = this.xpathItemCount(query);
    for (i = 0; i < itemsCount; i++) {
      item = this.xpathGetFirstItem(query);
      this.triggerMouseEvent(item, "mousedown");
    }
  }

B52Tv.prototype.runFavIndicator = function(name) {
    var arrow = this.xpathGetFirstItem("(//div[@data-name='show-favorite-indicators'])[1]");
    this.triggerMouseEvent(arrow, "click");
    setTimeout(function() {
      var fav = this.xpathGetFirstItem("//div[./div[text()='Favorite Indicators']]/div[.//span[text()='" + name + "']]");
      this.triggerMouseEvent(fav, "click");
    }, 200);
  }

B52Tv.prototype.runStopAlert = function(currency, name) {
    var play = this.xpathGetFirstItem("(//div[starts-with(@class,'body')]//div[./div/span[contains(text(),'" + currency + "')] and ./div[contains(text(),'" + name + "')]]//div[@role='button'])[1]");
    this.triggerMouseEvent(play, "click");
  }

B52Tv.prototype.getCurrentStrategyName = function() {
    var sign = this.xpathGetFirstItem("//div[@data-name='legend']//div[@data-name='legend-source-title' and contains(text(),'" + secretWord + "')]");
    return sign.innerText;
  }

B52Tv.prototype.getAlertMessage = function () {
    var alert = this.xpathGetFirstItem("//div[@data-qa-dialog-name='alert-fired']//div[contains(@class,'secondaryRow')]");
    return alert.innerText;
}
  
B52Tv.prototype.closeAlert = function () {
    var close = this.xpathGetFirstItem("//div[@data-qa-dialog-name='alert-fired']//span[starts-with(@class,'close')]");
    this.triggerMouseEvent(close, "click");
}
  
B52Tv.prototype.grabAlertMessage = function (name, thenRun) {
    var existCondition = setInterval(function() {
      if ($("div[data-qa-dialog-name='alert-fired']").length) {
        clearInterval(existCondition);
        //stop it now
        this.runStopAlert(getCurrentCurrencyPair(), name);
        var theMessage = this.getAlertMessage();
        this.closeAlert();
        thenRun(theMessage);
      }
    }, 100);
}
  
B52Tv.prototype.createNewAlert = function (alertName, thenRun) {
    var more = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-more-action']";
    item = this.xpathGetFirstItem(more);
    this.triggerMouseEvent(item, "mousedown");
    setTimeout(function() {
      var newAlert = xpathGetFirstItem("//div[@id='overlap-manager-root']//tr[.//span[starts-with(text(),'Add alert on')]]");
      this.triggerMouseEvent(newAlert, "click");
      setTimeout(function() {
        $("input[name='alert-name']")[0].value = alertName;
        this.triggerMouseEvent($("input[name='alert-name']")[0], "focus");
        this.triggerMouseEvent($("input[name='alert-name']")[0], "input");
        this.triggerMouseEvent($("input[name='alert-name']")[0], "change");
        this.triggerMouseEvent($("input[name='alert-name']")[0], "blur");
        setTimeout(function() {
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
  
B52Tv.prototype.deleteAlert = function (currency, name) {
    var del = this.xpathGetFirstItem("(//div[starts-with(@class,'body')]//div[./div/span[contains(text(),'" + currency + "')] and ./div[contains(text(),'" + name + "')]]//div[@role='button'])[3]");
    this.triggerMouseEvent(del, "click");
    setTimeout(function() {
      var yesButton = this.xpathGetFirstItem("//button[starts-with(@class,'actionButton') and @name='yes']");
      this.triggerMouseEvent(yesButton, "click");
    }, 150);
}

function BinanceAdapter(B52Tv)
{
    this.tv = B52Tv;
}

BinanceAdapter.prototype.GetTickSize = function(resultFunc)
{
    var url = "https://fapi.binance.com/fapi/v1/exchangeInfo?symbol=" + this.tv.getCurrentCurrencyPair();
    $.getJSON(url, function(tiketInfo) {
        var theMinSize = parseFloat(tiketInfo.symbols[0].filters.filter(a => a.filterType == 'PRICE_FILTER')[0].tickSize);
        resultFunc(theMinSize)
    });
}