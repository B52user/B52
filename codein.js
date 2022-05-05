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
			//tv.triggerMouseEvent($("input[name='alert-name']")[0], "focus");
                	//tv.triggerMouseEvent($("input[name='alert-name']")[0], "input");
                	tv.triggerMouseEvent(inputNode, "change");
                	//tv.triggerMouseEvent($("input[name='alert-name']")[0], "blur");
		}
		var ok = tv.xpathGetFirstItem("//button[@data-name='submit-button']");
		tv.triggerMouseEvent(ok, "click");
	},150);
}

setStrategySettings([{label:"Min buy quantity",value:0.01}]);

