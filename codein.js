//div[starts-with(@class,'modal') and .//div[text()='No ads on any chart']]//button[@aria-label='Close']

tvObserver.AddAction(()=>{
	//shit window 2
	var shit2 = "//div[starts-with(@class,'modal') and .//div[text()='No ads on any chart']]//button[@aria-label='Close']";
	if(tv.xpathItemCount(shit2)>0)
	{
		tv.triggerMouseEvent(tv.xpathGetFirstItem(shit2),"click");
	}
});
