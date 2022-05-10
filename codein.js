var B52Settings = 
{
	accessKey1 : "MlmTyzzGbiFSDNyrI745NboXTBS9AdKXwxLMXd00aUWpWKPcI8hiRIfDpFv0oI8o",
	secretKey1 : "u3fNSMJlYwTMwCOb3X5Bvp3xrpiogEN1MyQbDdtYS3lisd2VB6aKV8KjCaGmgFIg",
	maxLossLabel : "",
	sButtons : 
	[
		{name:"B52_ZONE_0.5",color:"#006600"},
		{name:"B52_ZONE_1.0",color:"#006600"},
		{name:"B52_LINE_0.5",color:"#000099"},
		{name:"B52_LINE_1.0",color:"#000099"},
		{name:"B52_NOW_0.5",color:"#cc3300"},
		{name:"B52_NOW_1.0",color:"#cc3300"}
	]
}

var B52HTML = 
{
	B52AreaHtml : `
	<style>
		div.B52dark {
			position:absolute;
			background-color:black;
			padding:2px;
			z-index:1000;
		}
		div.B52dark button {
			"border": "1px solid gray";
			margin:1px;
		}
	</style>
	<div id="B52Area1" class="B52dark" style="right:130px;bottom:10px;border:1px solid gray;height:120px;width:500px;border-right:none;display:flex;">
		<div id="B52CloseOpen" style="margin:-2px;height:124px;width:30px;background-color:#404040">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
		</div>
		<div id="B52StrategyButtons">
		</div>
	</div>
	<div id="B52Area2" class="B52dark" style="right:10px;bottom:10px;border:1px solid gray;height:350px;width:120px;">
		<div id="B52ExpandButton" style="margin:-2px;height:30px;width:124px;background-color:#404040">
		</div>
		<div>
			<button id='B52StartBinance'>START!</button>
		</div>
		<div>
			<button id='B52ClearChart'>Clear chart</button>
		</div>
	</div>`
}


function fillButtonsIn(buttons)
{
    buttons.forEach(b=>
		{
			var appended = $("#B52StrategyButtons").append("<button id='"+b.name+"' style='background-color:"+b.color+"'>"+b.name+"</button>");
			$(appended).click(()=>{
				var splitted = b.name.split('_');
				var stratName = splitted[0]+"_"+splitted[1];
				var loss = parseFloat(splitted[2]);
				startStrategy(stratName,loss);
			});
		})
}

function startStrategy(strategyName, maxLoss) {
	var that = this;
	this.tv.runFavIndicator(strategyName).then(()=>{
		that.b.GetTickSize().then((s)=>{
			that.b.GetPriceFormatting().then(f=>{
				var sets = [];
				if(s!=1)
				{
					sets.push({label:"Min buy quantity",value:s})
				}
				//get format
				var form = "#.";
				for(var i=0;i<f.length-2;i++)
				{
					form+="#";
				}
				if(form!="#.####") 
				{
					sets.push({label:"Price Formatting",value:form})
				}
				//set maxLoss
				sets.push({label:B52Settings.maxLossLabel,value:maxLoss});
				if(sets.length)
				{
					that.tv.setStrategySettings(sets);
				}
			})
		});
		
	});
}

$('body').append(B52HTML.B52AreaHtml);
fillButtonsIn(B52Settings.sButtons);