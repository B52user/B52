class B52TvService
{
	AddAction(action)
	{
		this.arrayOfActions.push(action);
	}
	
	Start() {
		this.service = setInterval(function () {
    		this.arrayOfActions.forEach((a)=>{a();});	
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

var tv = new B52Tv();
var b = new BinanceAdapter(tv);
var page = new B52Widget(tv,b,"dark");
page.Build();
