//div[starts-with(@class,'modal') and .//div[text()='No ads on any chart']]//button[@aria-label='Close']
//article[starts-with(@class,'toast')]//button[starts-with(@class,'close-button')]

tvObserver.AddAction(()=>{
	//shit window 3
	var shit3 = "//article[starts-with(@class,'toast')]//button[starts-with(@class,'close-button')]";
	if(tv.xpathItemCount(shit3)>0)
	{
		tv.triggerMouseEvent(tv.xpathGetFirstItem(shit3),"click");
	}
});

function setStrategySettings(sets)
{
	var settings = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-settings-action']";
	var item = tv.xpathGetFirstItem(settings);
	tv.triggerMouseEvent(item, "mousedown");
	var that = this;
	setTimeout(function () {
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
	},150);
}

class BinanceAdapter {
    constructor(B52Tv) {
        this.tv = B52Tv;
	this.ExchangeInfo = null;
    }
	_getExchangeInfo(then)
	{
		var url = "https://fapi.binance.com/fapi/v1/exchangeInfo";
		var that = this;
		$.getJSON(url, function (tiketInfo) {
			that.ExchangeInfo = tiketInfo;
			then();
		    
		});	
	}
    	GetTickSize(resultFunc) {
		var that = this;
		var getSize = (then) => {
			var theSymb = this.ExchangeInfo.symbols.filter(a=>a.symbol==that.tv.getCurrentCurrencyPair());
			if(!theSymb.length) {console.log("ERROR! Not found symbol "+that.tv.getCurrentCurrencyPair());}
			else
			{
				var theMinSize = parseFloat(theSymb[0].filters.filter(a => a.filterType == 'LOT_SIZE')[0].stepSize);
				then(theMinSize);
			}
		};
		if(this.ExchangeInfo==null)
		{
			this._getExchangeInfo(getSize(resultFunc));
		}
		else
		{
			getSize(resultFunc);
		}
    	}
}
var tv = new B52Tv();
var b = new BinanceAdapter(tv);
b.GetTicketSize((size)=>{console.log(size);});
setStrategySettings([{label:"Min buy quantity",value:0.1}]);

