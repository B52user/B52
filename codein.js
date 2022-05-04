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
tvObserver.Start();

