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

var settings = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-settings-action']";
var item = tv.xpathGetFirstItem(settings);
tv.triggerMouseEvent(item, "mousedown");
//div[./div[text()="Max Loss in $"]]/following-sibling::div[1]//input
