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
    var sign = xpathGetFirstItem("//div[@id='header-toolbar-symbol-search']/div");
    return sign.innerText;
}

B52Tv.prototype.xpathGetFirstItem = function(xpath) {
    var items = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
    return items.iterateNext();
}

B52Tv.prototype.clearB52s = function() {
    var query = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-delete-action']";
    var itemsCount = xpathItemCount(query);
    for (i = 0; i < itemsCount; i++) {
      item = xpathGetFirstItem(query);
      triggerMouseEvent(item, "mousedown");
    }
  }

B52Tv.prototype.runFavIndicator = function(name) {
    var arrow = xpathGetFirstItem("(//div[@data-name='show-favorite-indicators'])[1]");
    triggerMouseEvent(arrow, "click");
    setTimeout(function() {
      var fav = xpathGetFirstItem("//div[./div[text()='Favorite Indicators']]/div[.//span[text()='" + name + "']]");
      triggerMouseEvent(fav, "click");
    }, 200);
  }

B52Tv.prototype.runStopAlert = function(currency, name) {
    var play = xpathGetFirstItem("(//div[starts-with(@class,'body')]//div[./div/span[contains(text(),'" + currency + "')] and ./div[contains(text(),'" + name + "')]]//div[@role='button'])[1]");
    triggerMouseEvent(play, "click");
  }

B52Tv.prototype.getCurrentStrategyName = function() {
    var sign = xpathGetFirstItem("//div[@data-name='legend']//div[@data-name='legend-source-title' and contains(text(),'" + secretWord + "')]");
    return sign.innerText;
  }

B52Tv.prototype.getAlertMessage = function () {
    var alert = xpathGetFirstItem("//div[@data-qa-dialog-name='alert-fired']//div[contains(@class,'secondaryRow')]");
    return alert.innerText;
}
  
B52Tv.prototype.closeAlert = function () {
    var close = xpathGetFirstItem("//div[@data-qa-dialog-name='alert-fired']//span[starts-with(@class,'close')]");
    triggerMouseEvent(close, "click");
}
  
B52Tv.prototype.grabAlertMessage = function (name, thenRun) {
    var existCondition = setInterval(function() {
      if ($("div[data-qa-dialog-name='alert-fired']").length) {
        clearInterval(existCondition);
        //stop it now
        runStopAlert(getCurrentCurrencyPair(), name);
        var theMessage = getAlertMessage();
        closeAlert();
        thenRun(theMessage);
      }
    }, 100);
}
  
B52Tv.prototype.createNewAlert = function (alertName, thenRun) {
    var more = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-more-action']";
    item = xpathGetFirstItem(more);
    triggerMouseEvent(item, "mousedown");
    setTimeout(function() {
      var newAlert = xpathGetFirstItem("//div[@id='overlap-manager-root']//tr[.//span[starts-with(text(),'Add alert on')]]");
      triggerMouseEvent(newAlert, "click");
      setTimeout(function() {
        $("input[name='alert-name']")[0].value = alertName;
        triggerMouseEvent($("input[name='alert-name']")[0], "focus");
        triggerMouseEvent($("input[name='alert-name']")[0], "input");
        triggerMouseEvent($("input[name='alert-name']")[0], "change");
        triggerMouseEvent($("input[name='alert-name']")[0], "blur");
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
    var del = xpathGetFirstItem("(//div[starts-with(@class,'body')]//div[./div/span[contains(text(),'" + currency + "')] and ./div[contains(text(),'" + name + "')]]//div[@role='button'])[3]");
    triggerMouseEvent(del, "click");
    setTimeout(function() {
      var yesButton = xpathGetFirstItem("//button[starts-with(@class,'actionButton') and @name='yes']");
      triggerMouseEvent(yesButton, "click");
    }, 150);
}