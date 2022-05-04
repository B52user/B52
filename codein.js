class B52TvService
{
	AddAction(action)
	{
		this.arrayOfActions.push(action);
	}
	
	Start() {
		this.service = setInterval(function () {
			for (i = 0; i < this.arrayOfActions.length; i++) {
 			   this.arrayOfActions[i]();
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

var tvObserver = new B52TvService(100);
tvObserver.AddAction(()=>{console.log("test");});
tvObserver.Start();

var tv = new B52Tv();
var b = new BinanceAdapter(tv);
var page = new B52Widget(tv,b,"dark");
page.Build();
