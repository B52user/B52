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
