const secretWord = "B52";

var B52Settings = 
{
	secretWord : secretWord,
	accessKey1 : "MlmTyzzGbiFSDNyrI745NboXTBS9AdKXwxLMXd00aUWpWKPcI8hiRIfDpFv0oI8o",
	secretKey1 : "u3fNSMJlYwTMwCOb3X5Bvp3xrpiogEN1MyQbDdtYS3lisd2VB6aKV8KjCaGmgFIg",
	maxLossLabel : "Max Loss in $",
    marketOrderPrice : 0.08,
    numberOfTakes:5,
    minnotal: 5,
    workBookScale:5,
    workBookScaleInc:15,
    workBookScale2:5,
    workbookEmptyCells:20,
    workbookDollars:true,
    workbookShorten:1,
    workbookAutoScroll:120,
    workBookDepth:100,
    workBookDepth2:100,
    workBookColorPerc:0.005,
    workBookMaxRows:600,
    drawLinesStratName:"D52Orders",
	sButtons : 
	[
        {name:"B52_ZONE_0.2",color:"#006600"},
		{name:"B52_ZONE_0.5",color:"#006600"},
		{name:"B52_ZONE_1.0",color:"#006600"},
        {name:"B52_NOW_0.2",color:"#cc3300"},
		{name:"B52_NOW_0.5",color:"#cc3300"},
		{name:"B52_NOW_1.0",color:"#cc3300"},
        {name:"B52_TAKE_1",color:"#000099"},
        {name:"B52_ST.L_1",color:"rgba(165, 42, 42)"},
	],
    positionsServiceIntervalMS : 1000,
    ordersSerciceIntervalMS : 1000,
    workbookSerciceIntervalMS : 1000,
    workbookSerciceIntervalMS2 : 1000,
    shitClickers:[
        "//article[.//h2[text()='Unlock the full power of TradingView']]//button[starts-with(@class,'close-button')]",
        "//div[starts-with(@class,'modal') and .//div[text()='No ads on any chart']]//button[@aria-label='Close']",
        "//div[starts-with(@class,'modal') and .//div[text()='More indicators, more trading possibilities']]//button[@aria-label='Close']",
        "//article[starts-with(@class,'toast')]//button[starts-with(@class,'close-button')]",
        "//div[starts-with(@class,'modal') and .//div[text()='Never miss a trade with our server-side alerts']]//button[@aria-label='Close']",
	    "//div[@data-dialog-name='gopro']//button[@aria-label='Close']"
    ],
    redToGreen:[
        {dir:"green",perc:0,col:"#54785c"},
        {dir:"green",perc:0.005,col:"#00a12a"},
        {dir:"red",perc:0,col:"#855151"},
        {dir:"red",perc:0.005,col:"#960000"}
    ],
    orderColors:[
        {name:"STOP_MARKETBUY",col:"rgba(85, 107, 47, .4)"},
        {name:"STOP_MARKETSELL",col:"rgba(204, 85, 0, .4)"},
        {name:"LIMITBUY",col:"rgba(0, 107, 60, .4)"},
        {name:"LIMITSELL",col:"rgba(165, 42, 42, .4)"}
    ],
    tvXpath:{
        currency:"//div[@id='header-toolbar-symbol-search']/div",
        activeSecretStrategies:"//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-delete-action']",
        favIndicatorArrow:"(//div[@data-name='show-favorite-indicators'])[1]",
        b52SettingButton:"//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-settings-action']",
        activeStrategyName:"//div[@data-name='legend']//div[@data-name='legend-source-title' and contains(text(),'" + secretWord + "')]",
        alertMessage:"//div[@data-qa-dialog-name='alert-fired']//div[contains(@class,'secondaryRow')]",
        closeAlertButton:"//div[@data-qa-dialog-name='alert-fired']//span[starts-with(@class,'close')]",
        moreButton:"//div[@data-name='legend-source-item' and .//div[contains(text(),'" + secretWord + "')]]//div[@data-name='legend-more-action']",
        newAlertButtons:["//div[@id='overlap-manager-root']//tr[.//span[starts-with(text(),'Add alert on')]]","//div[@id='overlap-manager-root']//li[.//span[starts-with(text(),'Add alert on')]]"],
        yesButton:"//button[starts-with(@class,'actionButton') and @name='yes']",
    },
    binanceSettings:{
        serverUrl:"https://fapi.binance.com/",
        serverUrl2:"https://api.binance.com/",
        orderUrl:"fapi/v1/order",
        allOpenedOrders:"fapi/v1/allOpenOrders",
        currentPrice: "fapi/v1/ticker/24hr",
        openedOrders:"fapi/v1/openOrders",
        positions:"fapi/v1/positionRisk",
        exchangeInfo:"fapi/v1/exchangeInfo",
        balance:"fapi/v1/balance",
        workbook: "fapi/v1/depth",
        income:"fapi/v1/income",
        workbook2:"api/v3/depth",
        kindle:"fapi/v1/klines",
        exchangeInfoSpot:"api/v3/exchangeInfo",
    },
    workbookColors:{
        ask:"rgba(165, 42, 42, .4)",
        bid:"rgba(0, 107, 60, .4)",
        posask:"rgba(165, 42, 42, .8)",
        posbid:"rgba(0, 107, 60, .8)",
        askscale:"rgb(114 15 15 / 88%)",
        bidscale:"rgb(169 86 0)",
        big1:"rgba(175, 162, 0)",
        big2:"rgba(126, 0, 181)",
        empty:"rgba(0, 0, 0, .6)",
        bar025_1:"rgba(69, 69, 69, 1)",
        bar025_2:"rgba(175, 175, 175, 1)"
    }
}

var B52HTML = 
{
    B52StyleDark : `
    <style>
		div.B52 {
			position:absolute;
			background-color:black;
			padding:2px;
			z-index:1000;
            color-scheme: dark;
		}
		div.B52 button {
			border: "1px solid gray";
			margin:1px;
		}
		button.B52StrategyButton {
			margin:2px;
			padding:1px;
			font-size:13px;
			width:35px;
            height:35px;
		}
		button.B52BigButton {
			padding-top:0px;
			padding-bottom:0px;
			font-size:13px;
			width:50px;
			height:35px;
		}
        button.B52TabButton
        {
            border:1px solid gray;
            width: 50px;
            height:20px;
            margin: 1px;
            text-align: center;
        }
        div.B52Tab
        {
            height:100%;
            width:100%;
            overflow-y: auto;
        }
        div.B52OrderItem
        {
            height:24px;
            width:230px;
            margin:2px;
            padding:2px;
            font-size:14px;
            display:flex;
        }
        div.B52OrderItem div
        {
            margin-right:8px;
        }
        div.B52OrderItem button
        {
            height:30px;
            width:30px;
            text-align: center;
            font-size:17px;
            background:rgba(35, 35, 35, 0.6);
            padding:0px;
            margin-top: -2px;
            margin-left: -3px;
            border: 1px solid darkslategray;
        }
        tr.B52WBrow
        {
            font-size:10px;
            width:100px;
            text-align:left;
        }
        tr.B52WBRow td:nth-child(2)
        {
            text-align:right;
            width:1px;
            border-left:1px solid gray;
        }
        div.B52WorkbookContainer
        {
            overflow-y:auto;
            height:430px;
        }
        div.B52RiskPosItem
        {
            height:24px;
            width:150px;
            margin:2px;
            padding:2px;
            font-size:12px;
            display:flex;
        }
        div.B52RiskPosItem div
        {
            margin-right:8px;
        }
        div.B52RiskPosItem button
        {
            height:23px;
            width:23px;
            text-align: center;
            font-size:17px;
            background:rgba(35, 35, 35, 0.6);
            padding:0px;
            margin-top: -2px;
            margin-left: -3px;
            border: 1px solid darkslategray;
        }
        button.B52AdditionalButton
        {
            margin-left:0px;
            width:45px;
            height:30px;
            background:rgba(103, 103, 103, 0.3);
            padding: 0px;
            font-size: 14px;
        }
        div.B52Income
        {
            height:14px;
            margin:2px;
            padding:2px;
            font-size:12px;
            display:flex;
        }
        ::-webkit-scrollbar {
            width: 8px;
          }
	</style>
    `,
	B52AreaHtml : `
    <div id="B52CloseOpen" class="B52" style="margin:-2px;height:70px;width:20px;background-color:#404040;display:flex;margin-right:2px;right:365px;bottom:2px;">
        <div style="height:100%;width:5px;background:aqua;" id="B52timeleft"></div>    
        <button id="B52CloseOpenButton" style="background-color:transparent;border:none;width:20px;height:100px;display:flex;margin:auto;padding:0px;font-size:30px;padding-top:18px;padding-left:1px;" closed="false">
            ⇕
        </button>
	</div>
	<div id="B52Area1" class="B52" style="right:55px;bottom:2px;border:1px solid gray;height:65px;width:310px;border-right:none;display:flex;">
		<div id="B52StrategyButtons" style="overflow-y: auto;">
		</div>
	</div>
	<div id="B52Area2" class="B52" style="right:2px;bottom:2px;border:1px solid gray;height:257px;width:50px;">
		<div id="B52ExpandButton" style="margin:1px;height:35px;width:48px;background-color:black;display:flex">
            <div>
                <button style="width:50px;display:flex;padding:0px" id="B52Window2Open">
                    <div>
                        <div style="height:14px" id="B52Balance">
                        </div>
                        <div style="height:14px" id="B52BalanceChange">
                    </div>
                </button>
            </div>
		</div>
        <div>
            <button id='B52NLStop' class="B52BigButton" style="background-color:green">S.NO.L</button>
		</div>
        <div>
            <button id='B52COrders' class="B52BigButton" style="background-color:#000099">C.ORD</button>
		</div>
        <div>
            <button id='B52SellPart' class="B52BigButton" style="background-color:green">FIX</button>
		</div>
		<div>
            <button id='B52SellAll' class="B52BigButton" style="background-color:green">FIXALL</button>
		</div>
		<div>
			<button id='B52StartBinance' class="B52BigButton" style="background-color:maroon">START</button>
		</div>
		<div>
			<button id='B52ClearChart' class="B52BigButton" style="background-color:#000099">CLEAR</button>
		</div>
	</div>
    <div id="B52Tabs" class="B52" style="margin:1px;height:185px;width:285px;background:rgba(0, 0, 0, .6);right:104px;bottom:74px;" hid="true">
        <div style="display:flex;height:20px;width:100%"">
            <button class="B52TabButton" style="background:rgba(0, 162, 11, .5)" id="B52TabButton1">Ords</button>
            <button class="B52TabButton" style="background:rgba(202, 86, 0, .5)" id="B52TabButton2">Risk</button>
            <button class="B52TabButton" style="background:rgba(0, 3, 202, .5)" id="B52TabButton3">Inc</button>
            <button class="B52TabButton" style="background:rgba(0, 0, 0, .5)" id="B52TabButton4">Log</button>
            <button class="B52TabButton" style="background:rgba(0, 0, 0, .5)" id="B52TabButton5">Sets</button>
        </div>
        <div style="height:167px;width:100%;border:1px solid gray;">
            <div class="B52Tab" id="B52Tab1" style="display:flex">
                <div id="B52Ordung" style="width:242px;height:100%;overflow-y:auto;">
                </div>
                <div>
                    <button style="width:40px;height:160px;background-color:darkslategray;margin-top:3px;padding:0px" id="B52OrdersDraw">Draw</button>
                </div>
            </div>
            <div class="B52Tab" id="B52Tab2" style="display:flex">
                <div style="width:242px;height:100%;display:flex">
                    <div style="width:120px;overflow-y:auto;height:100%;" id="B52PosOpenedList">Positions:</div>
                    <div style="width:120px;height:100%;overflow-y:auto;" id="B52OrdersOpenedList">Orders:</div>
                </div>
                <div>
                    <button style="width:40px;height:40px;background:rgba(200, 0, 104, 0.5);margin-top:3px;padding:0px;font-size:18px;" id="B52RenewAllPositions">⟳</button>
                </div>
            </div>
            <div class="B52Tab" id="B52Tab3" style="display:flex">
                <div style="width:242px;height:100%;display:flex">
                    <div style="width:120px;overflow-y:auto;height:100%;" id="B52Transactions">Transactions:</div>
                    <div style="width:120px;height:100%;overflow-y:auto;" id="B52IncomeDays">Income by day:</div>
                </div>
                <div>
                    <button style="width:40px;height:40px;background:rgba(70, 172, 0, 0.5);margin-top:3px;padding:0px;font-size:18px;" id="B52RenewTransactions">⟳</button>
                </div>
            </div>
            <div class="B52Tab" id="B52Tab4">Some 4444 interesting text</div>
            <div class="B52Tab" id="B52Tab5" style="display:flex;overflow-y:auto;">
                <button id="B52ShitServiceStatus" style="width:60px;height:60px;">SHIT SRV ⟳</button>
                <button id="B52OrdersServiceStatus" style="width:60px;height:60px;">ORD SRV ⟳</button>
                <button id="B52RiskServiceStatus" style="width:60px;height:60px;">RISK SRV ⟳</button>
                <button id="B52Workbook1ServiceStatus" style="width:60px;height:60px;">WB1 SRV ⟳</button>
                <button id="B52Workbook2ServiceStatus" style="width:60px;height:60px;">WB2 SRV ⟳</button>
            </div>
        </div>
    </div>
    <div id="B52Workbook" class="B52" style="margin:1px;height:450px;width:210px;background:rgba(0, 0, 0, .6);right:0px;bottom:264px;display:flex;" hid="true">
        <div style="height: 100%;">
            <div style="height:16px;background:rgba(82, 82, 82, 0.8);font-size:12px;padding-top:3px;" id="B52FuturesX">FUTURES X5</div>
            <div class="B52WorkbookContainer">
                <table id="B52WorkBookTable">
                </table>
            </div>
        </div>
        <div style="width:10px;height:100%;"></div>
        <div style="height: 100%;">
            <div style="height:16px;background:rgba(82, 82, 82, 0.8);font-size:12px;display:flex;padding-top:3px">
                <div id="B52SpotX">SPOT X5</div>
                <div><input type="text" id="B52SpotName" style="width:30px;border:1px solid gray;margin-top:-2px;margin-left:2px"></div>
            </div>
            <div class="B52WorkbookContainer">
                <table id="B52WorkBookTable2">
                </table>
            </div>
        </div>
        <div style="width:20px;height:100%;">
                <input type="range" min="1" max="10" value="5" id="B52WBScale" style="height:140px;width:16px;-webkit-appearance: slider-vertical;">
                <input type="range" min="1" max="10" value="5" id="B52WBScale2" style="height:140px;width:16px;-webkit-appearance: slider-vertical;">
                <input type="range" min="1" max="30" value="15" id="B52WBBars" style="height:140px;width:16px;-webkit-appearance: slider-vertical;">
        </div>
    </div>
    <div id="B52AdditionalButtons" class="B52" style="width:47px;height:182px;right:55px;bottom:75px;">
        <button class="B52AdditionalButton" style="background:rgba(0, 138, 127, 0.8);" id="B52WBDepth">F500</button>
        <button class="B52AdditionalButton" style="background:rgba(0, 138, 127, 0.8);" id="B52SWBDepth">S500</button>
        <button class="B52AdditionalButton" style="background:rgba(134, 138, 0, 0.5);" id="B52WBCent">CE</button>
    </div>
    `
}

var B52Log = {
    _log:[],
    _eventLogChanged:[],
    Info : (message,obj=null)=>{
        B52Log._log.push({type:"info",mess:message,obj:obj});
        //console.log(message);
    },
    Error : (message,obj=null)=>{
        B52Log._log.push({type:"error",mess:message,obj:obj});
        console.log(message);
    },
    GetLog : ()=>{
        return B52Log._log;
    },
    _eventLogChangedTrigger : ()=>{
        B52Log._eventLogChanged.forEach(a=>a());
    }
}

class B52 {
    #_tv;
    #_b;
    #_w;
    #_srvs;
    get TV(){return this.#_tv}
    get Binance(){return this.#_b}
    get Widjet(){return this.#_w}
    get Srvs(){return this.#_srvs}

    constructor(){
        this.#_tv = new B52Tv();
        this.#_b = new BinanceAdapter();
        this.#_w = new B52Widget();
        this.#_srvs = {};
        this.#_b.SetAccessKey(B52Settings.accessKey1);
        this.#_b.SetSecretKey(B52Settings.secretKey1);
        this.#_w.Build();
        this.SetButtonEvents();
        this.SetServices();
        $("#B52Tabs").hide();
        $("#B52Workbook").hide();
        $("#B52AdditionalButtons").hide();
    }

    SetButtonEvents(){
        let that = this;
        $(this.#_w.Button("B52ClearChart")).mouseup(() => {B52Tv.ClearSecretStrategies();});
        $(this.#_w.Button("B52StartBinance")).mouseup(() => {that.BUTTON_B52StartBinance();});
        $(this.#_w.Button("B52CloseOpenButton")).mouseup(() => {that.BUTTON_B52CloseOpenButton();});
        $(this.#_w.Button("B52SellAll")).mouseup(() => {that.BUTTON_B52SellAll();});
        $(this.#_w.Button("B52SellPart")).mouseup(() => {that.BUTTON_B52SellPart();});
        $(this.#_w.Button("B52COrders")).mouseup(() => {that.BUTTON_B52COrders();});
        $(this.#_w.Button("B52NLStop")).mouseup(() => {that.BUTTON_B52NLStop();});
        $(this.#_w.Button("B52Window2Open")).mouseup(() => {that.BUTTON_B52Window2Open();});
        for(let i=1;i<6;i++)
        {
            $(this.#_w.Button("B52TabButton"+i.toString())).mouseup(() => that.BUTTON_B52TabButton(i));
        }
        $("#B52StrategyButtons").on("click",".B52StrategyButton",e=>{that.BUTTON_B52Strategy(e);})
        $("#B52RenewAllPositions").mouseup(()=>{that.BUTTON_B52RenewAllOrders();});
        $("#B52RenewTransactions").mouseup(()=>{that.BUTTON_B52RenewTransactions();});
        let scaleSlider = document.getElementById("B52WBScale");
        scaleSlider.onchange = (e)=>{
                B52Settings.workBookScale = parseFloat(scaleSlider.value);
                if(that.Stakan1!=null) that.Stakan1.ReDraw(B52Settings.workBookScale);
                $("#B52FuturesX").text("FUTURES X"+scaleSlider.value);
        };
        let scaleSlider2 = document.getElementById("B52WBBars");
        scaleSlider2.onchange = (e)=>{
                B52Settings.workBookScaleInc = parseFloat(scaleSlider2.value);
                if(that.Stakan2!=null)that.Stakan2.ReDraw();
                if(that.Stakan1!=null)that.Stakan1.ReDraw();
        };
        let scaleSlider3 = document.getElementById("B52WBScale2");
        scaleSlider3.onchange = (e)=>{
                B52Settings.workBookScale2 = parseFloat(scaleSlider3.value);
                if(that.Stakan2!=null)that.Stakan2.ReDraw(B52Settings.workBookScale2);
                $("#B52SpotX").text("SPT X"+scaleSlider3.value);
        };
        $("#B52WBDepth").mouseup(()=>{
            B52Settings.workBookDepth=B52Settings.workBookDepth==100?500:100;
            $("#B52WBDepth").text("F"+B52Settings.workBookDepth);
            if(that.Stakan1!=null)that.Stakan1.ReDraw();
            if(that.Stakan2!=null)that.Stakan2.ReDraw();
        });
        $("#B52SWBDepth").mouseup(()=>{
            B52Settings.workBookDepth2=B52Settings.workBookDepth2==100?500:100;
            $("#B52SWBDepth").text("S"+B52Settings.workBookDepth2);
            if(that.Stakan1!=null)that.Stakan1.ReDraw();
            if(that.Stakan2!=null)that.Stakan2.ReDraw();
        });
        
        $("#B52WBCent").mouseup(()=>{
            if(that.Stakan1!=null)that.Stakan1.Center();
            if(that.Stakan2!=null)that.Stakan2.Center();
        });
        $("#B52WBDepth").text("F"+B52Settings.workBookDepth);
        $("#B52SWBDepth").text("S"+B52Settings.workBookDepth2);
        $("#B52OrdersDraw").mouseup(()=>that.BUTTON_DrawOrderLines());

        $("#B52SpotName").change(()=>{
            $("#B52SpotName").val();
            if(that.Stakan2!=null) that.Stakan2.ReDraw();
        });
        B52Tv.GetCurrentCurrencyPair().then(currency=>{
            $("#B52SpotName").val(currency);
            $("#B52SpotName").trigger("change");
        });

        $("#B52ShitServiceStatus").mouseup(()=>{
            that.Srvs.Shit.Stop();
            that.Srvs.Shit = this.SERVICE_MakeShitService();
            that.Srvs.Shit.Start();
        });
        $("#B52OrdersServiceStatus").mouseup(()=>{
            that.Srvs.Orders.Stop();
            that.Srvs.Orders = this.SERVICE_MakeOrderService();
            that.Srvs.Orders.Start();
        });
        $("#B52RiskServiceStatus").mouseup(()=>{
            that.Srvs.Risk.Stop();
            that.Srvs.Risk = this.SERVICE_MakeRiskService();
            that.Srvs.Risk.Start();
        });
        $("#B52Workbook1ServiceStatus").mouseup(()=>{
            that.Srvs.Workbook1.Stop();
            that.Srvs.Workbook1 = this.SERVICE_MakeWorBookService();
            that.Srvs.Workbook1.Start();
        });
        $("#B52Workbook2ServiceStatus").mouseup(()=>{
            that.Srvs.Workbook2.Stop();
            that.Srvs.Workbook2 = this.SERVICE_MakeWorBookService2();
            that.Srvs.Workbook2.Start();
        });
    }

    BUTTON_B52RenewTransactions(){
        let that = this;
        that.Binance.ORDERS_GetIncome().then(income=>{
            $("#B52Transactions").html("Transactions:");
            $("#B52IncomeDays").html("Income by day:");
            //filter by "COMMISSION" and "REALIZED_PNL" then append date then draw
            let curCoin = "";
            let curCoinDate = "";
            let curCoinSum = 0.0;
            let curDayDate = "";
            let curDaySum = 0.0;
            let trans = income.filter(a=>a.incomeType=="COMMISSION"||a.incomeType=="REALIZED_PNL");
            trans.forEach((t)=>{
                let inc = parseFloat(t.income);
                let ind = new Date(t.time).toString().split(' ');
                let d = ind[2]+" "+ind[1];
                let sim = t.symbol;
                if(curCoinDate!=d||curCoin!=sim)
                {
                    //renew coin drop result
                    if(curCoin!="")
                    {
                        let col = B52Settings.orderColors.filter(a=>a.name=="LIMIT"+(curCoinSum>0?"BUY":"SELL"))[0].col;
                        let control = `
                            <div class="B52RiskPosItem" style="background:${col};width:140px;overflow:hidden;white-space: nowrap;">
                                    $${curCoinSum.toFixed(2)} ${curCoin} ${curCoinDate}
                            <div>`;
                        $("#B52Transactions").prepend(control);
                    }
                    curCoinDate = d;
                    curCoin = sim;
                    curCoinSum = inc;
                }
                else 
                {
                    //add summ
                    curCoinSum+=inc;
                }

                if(curDayDate!=d)
                {
                    //renew day drop result
                    if(curDayDate!="")
                    {
                        let col = B52Settings.orderColors.filter(a=>a.name=="LIMIT"+(curDaySum>0?"BUY":"SELL"))[0].col;
                        let control = `
                            <div class="B52Income" style="background:${col};width:100px;">
                                    ${curDayDate} $${curDaySum.toFixed(2)}
                            <div>`;
                        $("#B52IncomeDays").prepend(control);
                    }
                    curDayDate = d;
                    curDaySum = inc;
                }
                else 
                {
                    //add summ
                    curDaySum+=inc;
                }
            });
            let col = B52Settings.orderColors.filter(a=>a.name=="LIMIT"+(curCoinSum>0?"BUY":"SELL"))[0].col;
                let control = `
                    <div class="B52Income" style="background:${col};width:140px;overflow:hidden;white-space: nowrap;">
                        $${curCoinSum.toFixed(2)} ${curCoin} ${curCoinDate}
                    <div>`;
                $("#B52Transactions").prepend(control);
                let col2 = B52Settings.orderColors.filter(a=>a.name=="LIMIT"+(curDaySum>0?"BUY":"SELL"))[0].col;
                let control2 = `
                    <div class="B52Income" style="background:${col2};width:100px;">
                            ${curDayDate} $${curDaySum.toFixed(2)}
                    <div>`;
                $("#B52IncomeDays").prepend(control2);
        });
    }

    BUTTON_B52RenewAllOrders() {
        let that = this;
        that.Binance.ORDERS_GetAllOpenedOrders().then(ords=>{
            $("#B52OrdersOpenedList").html("Orders:");
            ords.forEach((o)=>{
                let col = B52Settings.orderColors.filter(a=>a.name=="LIMIT"+o.side)[0].col;
                let control = `
                <div class="B52RiskPosItem" style="background:${col}">
                    <div style="width:18px;">
                        <button id="B52${o.clientOrderId}OC">✘</button>
                    </div>
                    <div style="margin-top:5px;width:110px">
                        ${o.symbol} $${(o.origQty*parseFloat(o.price=="0"?o.stopPrice:o.price).toFixed(2))}
                    </div>
                <div>`;
                /*${(o.price=="0"?o.stopPrice:o.price)}*/
                $("#B52OrdersOpenedList").append(control);
                let ordID = o.orderId;
                let symB = o.symbol;
                $("#B52"+o.clientOrderId+"OC").mouseup(()=>that.Binance.ORDERS_ChancelSingleOrder(ordID,symB));
            });
        });
    }

    BUTTON_B52Strategy(b){
        let that = this;
		let splitted = b.srcElement.id.split('_');
		let stratName = splitted[0]+"_"+splitted[1];
		let maxLoss = parseFloat(splitted[2]);

        B52Tv.RunFavIndicator(stratName).then(()=>{
            B52Tv.GetCurrentCurrencyPair().then(currency=>{
                that.Binance.MARKET_GetTickSize(currency).then(s=>{
                    that.Binance.MARKET_GetPriceFormatPrecision(currency).then(f=>{
                        let sets = [];
                        if(s!=1) sets.push({label:"Min buy quantity",value:s});
                        
                        let form = "#.";
                        for(let i=0;i<f.length-2;i++) { form+="#";}
                        if(form!="#.####") sets.push({label:"Price Formatting",value:form});
                        //set maxLoss
                        sets.push({label:B52Settings.maxLossLabel,value:maxLoss});
                        let currPos = null;
                        if(that.Binance.OpenedPositions!=null&&
                        that.Binance.OpenedPositions.filter(a=>a.symbol==currency).length&&
                        parseFloat(that.Binance.OpenedPositions.filter(a=>a.symbol==currency)[0].positionAmt)>0
                            )
                        {
                            currPos = that.Binance.OpenedPositions.filter(a=>a.symbol==currency)[0];
                        }
                        
                        if(currPos!=null){
                            sets.push({label:"Current position in coins",value:currPos.positionAmt});
                            sets.push({label:"Entry price in $",value:currPos.entryPrice});
                        }
                        if(sets.length) B52Tv.SetStrategySettings(sets);
                    }).catch(error=>{
                        B52Log.Error("BUTTON_B52Strategy Fail Getting MARKET_GetPriceFormatPrecision " + currency, error);
                    });
                }).catch(error=>{
                    B52Log.Error("BUTTON_B52Strategy Fail Getting MARKET_GetTickSize " + currency, error);
                });
            }).catch(error=>{
                B52Log.Error("BUTTON_B52Strategy Error getting currency from TV", error);
            });
        }).catch(error=>{
            B52Log.Error("BUTTON_B52Strategy Error running Fav indicator from TV " + currency, error);
        });
    }

    BUTTON_B52StartBinance(){
        let theUniqueName = "B52 " + Date.now().toString();
        let that = this;
        B52Tv.CreateNewAlert(theUniqueName).then(() => {
            B52Tv.GetAlertMessage(theUniqueName).then(mess=>{
                B52Tv.GetCurrentCurrencyPair().then(currency=>{
                    let arr = JSON.parse(mess);
                    arr.forEach(e=>{
                        e["symbol"] = currency;
                        that.Binance.ORDERS_NewOrder(e).then(resp=>{
                            B52Log.Info("BUTTON_B52StartBinance",resp);
                            console.log(resp);
                        }).catch(error=>{
                            B52Log.Error("BUTTON_B52StartBinance FAILED SEDING ORDER "+JSON.stringify(e), error);
                        });
                    });
                });
                B52Tv.DeleteAlertQuickly(theUniqueName).then(()=>{
                    B52Tv.RunNTimes(()=>{
                        if(B52Tv.XpathItemCount(B52Settings.tvXpath.closeAlertButton)>0)
                        {
                            B52Tv.CloseAlert();
                        }
                    },300,10);
                });
            });
        });
    }

    BUTTON_B52CloseOpenButton(){
        let closed = $("#B52CloseOpenButton").attr("closed")=="true";
        let closed2 = $("#B52Tabs").attr("hid")=="true";
        if (closed)
        {
            //open
            $("#B52CloseOpenButton").attr("closed","false");
            $("#B52CloseOpen").css("right","365px");
            $("#B52CloseOpen").css("bottom","2px");
            $("#B52CloseOpen").css("width","20px");
            $("#B52Area1").show();
            $("#B52Area2").show();
            if(!closed2)
            {
                $("#B52Tabs").show();
                $("#B52Workbook").show();
                $("#B52AdditionalButtons").show();
                $("#B52TabButton1").mouseup();
                
                this.Srvs.Workbook1.Start();
                this.Srvs.Workbook2.Start();
                this.Stakan1.Center();
                this.Stakan2.Center();
            }
        }
        else
        {
            //close
            $("#B52CloseOpenButton").attr("closed","true");
            $("#B52CloseOpen").css("right","2px");
            $("#B52CloseOpen").css("bottom","2px");
            $("#B52CloseOpen").css("width","30px");
            $("#B52Area1").hide();
            $("#B52Area2").hide();
            $("#B52Tabs").hide();
            $("#B52Workbook").hide();
            $("#B52AdditionalButtons").hide();
            
            this.Srvs.Workbook1.Stop();
            this.Srvs.Workbook2.Stop();
        }
    }

    BUTTON_B52SellAll(){
        let that = this;
        B52Tv.GetCurrentCurrencyPair().then(currency=>{
            that.Binance.ORDERS_FixPosition(currency);
        });
    }

    BUTTON_B52SellPart(){
        let that = this;
        B52Tv.GetCurrentCurrencyPair().then(currency=>{
            let ord = that.Fixes.shift();
            that.Binance.ORDERS_FixSinglePosition(currency,ord);
        });
        
    }

    BUTTON_B52COrders(){
        let that = this;
        B52Tv.GetCurrentCurrencyPair().then(currency=>{
            that.Binance.ORDERS_ChancelAllOrders(currency);
        });
    }

    BUTTON_B52NLStop(){
        this.Binance.ORDERS_SetNoLoss();
    }

    BUTTON_B52Window2Open(){
        let closed = $("#B52Tabs").attr("hid")=="true";
        
        if(!closed)
        {
            $("#B52Tabs").attr("hid","true");
            $("#B52Tabs").hide();
            $("#B52Workbook").hide();
            $("#B52AdditionalButtons").hide();
            this.Srvs.Workbook1.Stop();
            this.Srvs.Workbook2.Stop();
        }
        else
        {
            $("#B52Tabs").attr("hid","false");
            $("#B52Tabs").show();
            $("#B52Workbook").show();
            $("#B52AdditionalButtons").show();
            $("#B52TabButton1").mouseup();
            this.Srvs.Workbook1.Start();
            this.Srvs.Workbook2.Start();
            this.Stakan1.Center();
            this.Stakan2.Center();
        }
    }

    BUTTON_B52TabButton(num){
        $(".B52Tab").hide();
        $("#B52Tab"+num).show();
    }

    BUTTON_DrawOrderLines(){
        let that = this;
        //check strategy is run? not=> run, then set ords
        let settingsButton = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + B52Settings.drawLinesStratName + "')]]//div[@data-name='legend-settings-action']";
        let ordersString = "";
        that.Binance.OpenedOrders.forEach(o=>{
            let interPrice = o.price=="0"?parseFloat(o.stopPrice):parseFloat(o.price);
            let interType = o.origType.includes("STOP")?"STOP":o.origType;
            ordersString += o.side + ";" +
                            interType +";" + 
                            interPrice.toString() + ";"+ 
                            parseFloat(o.origQty) + "|";
        });
        if(ordersString.length) ordersString = ordersString.substring(0,ordersString.length-1);
        if(B52Tv.XpathItemCount(settingsButton)>0){
            B52Tv.SetAnyStrategySettings(B52Settings.drawLinesStratName,[{label:"DrawArray",value:ordersString}]);
        }
        else
        {
            B52Tv.RunFavIndicator(B52Settings.drawLinesStratName).then(()=>{
                B52Tv.SetAnyStrategySettings(B52Settings.drawLinesStratName,[{label:"DrawArray",value:ordersString}]);
            });
        }
    }

    SetServices()
    {
        let shitService = this.SERVICE_MakeShitService();
        shitService.Start();
        this.#_srvs["Shit"] = shitService;

        let riskSrv = this.SERVICE_MakeRiskService();
        riskSrv.Start();
        this.#_srvs["Risk"] = riskSrv;

        let ordSrv = this.SERVICE_MakeOrderService();
        ordSrv.Start();
        this.#_srvs["Orders"] = ordSrv;

        let wSrv = this.SERVICE_MakeWorBookService();
        wSrv.Start();
        this.#_srvs["Workbook1"] = wSrv;

        let wSrv2 = this.SERVICE_MakeWorBookService2();
        wSrv2.Start();
        this.#_srvs["Workbook2"] = wSrv2;

        let contolSrv = this.SERVICE_ControlService();
        contolSrv.Start();
        this.#_srvs["Control"] = contolSrv;
    }

    SERVICE_ControlService(){
        let that = this;
        let control = new B52Service("Control",1000);
        control.Actions.push(()=>{
            let shitTime = (new Date().getTime() - that.Srvs.Shit.LastTimeActive);
            let shitTimeColor = shitTime<2000?"rgba(47, 129, 0, 0.7)":shitTime<5000?"rgba(143, 135, 0, 0.7)":"rgba(164, 25, 0, 0.7)";
            $("#B52ShitServiceStatus").css("background",shitTimeColor);
            let ordersTime = (new Date().getTime() - that.Srvs.Orders.LastTimeActive);
            let ordersTimeColor = ordersTime<2000?"rgba(47, 129, 0, 0.7)":ordersTime<5000?"rgba(143, 135, 0, 0.7)":"rgba(164, 25, 0, 0.7)";
            $("#B52OrdersServiceStatus").css("background",ordersTimeColor);
            let riskTime = (new Date().getTime() - that.Srvs.Risk.LastTimeActive);
            let riskTimeColor = riskTime<2000?"rgba(47, 129, 0, 0.7)":riskTime<5000?"rgba(143, 135, 0, 0.7)":"rgba(164, 25, 0, 0.7)";
            $("#B52RiskServiceStatus").css("background",riskTimeColor);
            let w1Time = (new Date().getTime() - that.Srvs.Workbook1.LastTimeActive);
            let w1TimeColor = w1Time<2000?"rgba(47, 129, 0, 0.7)":w1Time<5000?"rgba(143, 135, 0, 0.7)":"rgba(164, 25, 0, 0.7)";
            $("#B52Workbook1ServiceStatus").css("background",w1TimeColor);
            let w2Time = (new Date().getTime() - that.Srvs.Workbook2.LastTimeActive);
            let w2TimeColor = w2Time<2000?"rgba(47, 129, 0, 0.7)":w2Time<5000?"rgba(143, 135, 0, 0.7)":"rgba(164, 25, 0, 0.7)";
            $("#B52Workbook2ServiceStatus").css("background",w2TimeColor);

        });
        control.Actions.push(()=>{
            let mathList = [
                {name:"1m",interval:60000},
                {name:"5m",interval:5*60000},
                {name:"15m",interval:15*60000},
                {name:"30m",interval:30*60000},
                {name:"1h",interval:60*60000},
                {name:"4h",interval:4*60*60000}
            ];
            let theTimeInterval = $("div#header-toolbar-intervals").text();
            let midnight = new Date();
            midnight.setHours(0,0,0,0);
            let percent = Math.floor(100*(1-(((new Date().getTime()) - midnight.getTime())/mathList.filter(a=>a.name==theTimeInterval)[0].interval)%1));
            let theColor = "linear-gradient(to top,aqua "+percent+"%, transparent 0) no-repeat";
            $("#B52timeleft").css("background",theColor);
        });
        return control;
    }

    SERVICE_MakeShitService(){
        let that = this;
        let shitService = new B52Service("Shit",200);
        //gray buttons observer
        shitService.Actions.push(()=>{
            //check gray buttons
            let anyStratOnline = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + B52Settings.secretWord + "')]]//div[@data-name='legend-settings-action']";
            if(B52Tv.XpathItemCount(anyStratOnline)<1)
            {
                $(".B52StrategyButton").each((i,e)=>{
                    $(e).css("background-color",$(e).attr("origcolor"));
                });
                $(".B52StrategyButton").css("color","white");
                $("#B52StartBinance").css("background-color","#262626");
                $("#B52StartBinance").css("color","#636363");
                $("#B52ClearChart").css("background-color","#262626");
                $("#B52ClearChart").css("color","#636363");
            }
            else
            {
                //gray
                $(".B52StrategyButton").css("background-color","#262626");
                $(".B52StrategyButton").css("color","#636363");
                $("#B52StartBinance").css("background-color","maroon");
                $("#B52StartBinance").css("color","white");
                $("#B52ClearChart").css("background-color","#000099");
                $("#B52ClearChart").css("color","white");
            }
        });
        shitService.Actions.push(()=>{
            B52Settings.shitClickers.forEach((shit)=>{
                if(B52Tv.XpathItemCount(shit)>0) B52Tv.TriggerMouseEvent(B52Tv.XpathGetFirstItem(shit),"click");
            });
        });
        shitService.Actions.push(()=>{
            //detect currency change
            B52Tv.GetCurrentCurrencyPair().then(currency=>{
                if($("#B52SpotName").attr("autovalue")!=currency)
                {
                    $("#B52SpotName").val(currency);
                    $("#B52SpotName").trigger("change");
                    $("#B52SpotName").attr("autovalue",currency);
                }
            });
        });
        return shitService;
    }

    #_openedPositions_lock;
    Fixes = [];
    SERVICE_MakeRiskService(){
        let that = this;
        this.#_openedPositions_lock = false;
        let risksrv = new B52Service("Risk",B52Settings.positionsServiceIntervalMS);
        risksrv.Actions.push(()=>{
            if(!that.#_openedPositions_lock)
                {
                    that.#_openedPositions_lock = true;
                    that.Binance.ORDERS_GetAllPositions().then(pos=>{
                        that.Binance.OpenedPositions = pos;
                        that.#_openedPositions_lock = false;
                        that.Binance._eventOpenPositionsChanged.forEach(a=>a());
                    }).catch(error=>{
                        B52Log.Error("SERVICE_MakeRiskService failed getting positions, erasing", error);
                        that.Binance.OpenedPositions = null;
                        that.#_openedPositions_lock = false;
                        that.Binance._eventOpenPositionsChanged.forEach(a=>a());
                    });
                }
        });
        that.Binance._eventOpenPositionsChanged.push(()=>{
            B52Tv.GetCurrentCurrencyPair().then(currency=>{
                let currentRisk = that.Binance.OpenedPositions.filter(a=>a.symbol==currency)[0];
                let entryPrice = parseFloat(currentRisk.entryPrice);
                let amount = parseFloat(currentRisk.positionAmt);
                let profit = parseFloat(currentRisk.unRealizedProfit);
                if(profit!=0)
                {
                    let charge = (2*B52Settings.marketOrderPrice/100)*entryPrice*Math.abs(amount);
                    $("#B52SellAll").text("FIXALL ("+ (profit-charge).toFixed(2) + ")");
                    that.Binance.MARKET_GetTickSize(currency).then(tick=>{
                        if(!that.Fixes.length) that.Fixes = B52.CALC.GetTakes(B52Settings.numberOfTakes,B52Settings.minnotal,amount,tick,entryPrice);
                        if(!that.Fixes.length) //disable
                        {
                            $("#B52SellPart").css("background-color","#262626");
                            $("#B52SellPart").css("color","#636363");
                        }
                        else{
                            let toAdd = "("+that.Fixes.length+") ("+ ((profit-charge)/that.Fixes.length).toFixed(2) + ")";
                            $("#B52SellPart").text("FIX "+toAdd);
                            $("#B52SellPart").css("background-color",pickAcolorForIt);
                            $("#B52SellPart").css("color","white");
                        }
                        
                    }).catch(error=>{
                        B52Log.Error("SERVICE_MakeRiskService coudln't redraw FIX buttons as coudn't get MARKET_GetTickSize ",error);
                    });
                    
                    let colorFilter = (profit-charge)>0?"green":"red";
                    let colorProp = Math.abs((profit-charge)/entryPrice*Math.abs(amount));
                    let pickAcolorForIt = B52Settings.redToGreen.filter(a=>a.dir==colorFilter&&colorProp>=a.perc).sort((a,b)=>a.perc>b.perc?1:-1)[0].col;
                    $("#B52SellAll").css("background-color",pickAcolorForIt);
                    $("#B52SellAll").css("color","white");
                    $("#B52NLStop").css("background-color","green");
                    $("#B52NLStop").css("color","white");
                }
                else
                {
                    $("#B52SellAll").text("FIXALL");
                    $("#B52SellAll").css("background-color","#262626");
                    $("#B52SellAll").css("color","#636363");
                    $("#B52SellPart").text("FIX");
                    $("#B52SellPart").css("background-color","#262626");
                    $("#B52SellPart").css("color","#636363");
                    $("#B52NLStop").css("background-color","#262626");
                    $("#B52NLStop").css("color","#636363");
                }
                
                                  
            });
        });
        that.Binance._eventOpenPositionsChanged.push(()=>{
            that.Binance.ORDERS_GetBalance().then(bal=>{
                let prevBalance = parseFloat($("#B52Balance").text().split('$').join(''));
                let currBalance = parseFloat(parseFloat(bal).toFixed(2));
                if(currBalance!=prevBalance)
                {
                    $("#B52Balance").text("$"+currBalance.toFixed(2));
                    if(Math.abs(currBalance-prevBalance)>=0.01)
                    {
                        $("#B52BalanceChange").text("$"+(currBalance-prevBalance).toFixed(2));
                    }
                }
            }).catch(error=>{
                B52Log.Error("SERVICE_MakeRiskService couldn't renew balance and redraw button ", error);
            });
        });
        that.Binance._eventOpenPositionsChanged.push(()=>{
            $("#B52PosOpenedList").html("Positions:");
            if(that.Binance.OpenedPositions==null) return;
            let riskOpened = that.Binance.OpenedPositions.filter(a=>parseFloat(a.positionAmt)!=0||parseFloat(a.unRealizedProfit)!=0||parseFloat(a.entryPrice)!=0);
            riskOpened.forEach((p)=>{
                let col = B52Settings.orderColors.filter(a=>a.name=="LIMIT"+(parseFloat(p.unRealizedProfit)>0?"BUY":"SELL"))[0].col;
                let control = `
                <div class="B52RiskPosItem" style="background:${col}">
                    <div style="width:18px;">
                        <button id="B52${p.symbol}POS">✘</button>
                    </div>
                    <div style="margin-top:4px;width:110px">
                        ${p.symbol} $${parseFloat(p.unRealizedProfit).toFixed(2)}
                    </div>
                <div>`;
                $("#B52PosOpenedList").append(control);
                $("#B52"+p.symbol+"POS").mouseup(()=>that.Binance.ORDERS_FixPosition(p.symbol));
            });
        });
        return risksrv;
    }

    #_openedOrders_lock;
    SERVICE_MakeOrderService(){
        let that = this;
        this.#_openedOrders_lock = false;
        let ordService = new B52Service("Order",B52Settings.ordersSerciceIntervalMS);
        ordService.Actions.push(()=>{
            if(!that.#_openedOrders_lock)
                {
                    that.#_openedOrders_lock = true;
                    B52Tv.GetCurrentCurrencyPair().then(currency=>{
                        that.Binance.ORDERS_GetOpenOrders(currency).then(ords=>{
                            that.Binance.OpenedOrders = ords;
                            that.#_openedOrders_lock = false;
                            that.Binance._eventOpenOrdersChanged.forEach(a=>a());
                        }).catch(error=>{
                            B52Log.Error("SERVICE_MakeOrderService failed getting orders, erasing", error);
                            that.Binance.OpenedOrders = null;
                            that.#_openedOrders_lock = false;
                            that.Binance._eventOpenOrdersChanged.forEach(a=>a());
                        });
                    });
                }
        });
        that.Binance._eventOpenOrdersChanged.push(()=>{
            let ordersOpened = that.Binance.OpenedOrders;
            if(ordersOpened.length)
            {
                $("#B52COrders").text("C.ORDS ("+ ordersOpened.length + ")");
                $("#B52COrders").css("background-color","#000099");
                $("#B52COrders").css("color","white");
            }
            else
            {
                $("#B52COrders").text("C.ORDS");
                $("#B52COrders").css("background-color","#262626");
                $("#B52COrders").css("color","#636363");
            }
        });
        that.Binance._eventOpenOrdersChanged.push(()=>{
            B52Tv.GetCurrentCurrencyPair().then(currency=>{
                $("#B52Ordung").empty();
                if(!that.Binance.OpenedOrders.length) return;
                let ordersOpened = that.Binance.OpenedOrders.sort((a,b)=>parseFloat((a.price=="0"?a.stopPrice:a.price))>parseFloat((b.price=="0"?b.stopPrice:b.price))?-1:1);
                ordersOpened.forEach((o)=>{
                    let col = B52Settings.orderColors.filter(a=>a.name==o.origType+o.side)[0].col;
                    let control = `
                    <div class="B52OrderItem" style="background:${col}">
                        <div style="width:25px;">
                            <button id="B52${o.clientOrderId}">✘</button>
                        </div>
                        <div style="margin-top:5px;width:200px">
                            ${(o.price=="0"?o.stopPrice:o.price)+" "+o.origQty}
                        </div>
                    <div>`;
                    $("#B52Ordung").append(control);
                    let ordid = o.orderId;
                    $("#B52"+o.clientOrderId).mouseup(()=>that.Binance.ORDERS_ChancelSingleOrder(ordid,currency));
                    
                });
            });
        });
        that.Binance._eventOpenOrdersChanged.push(()=>{
            if(that.Stakan1!=null) that.Stakan1.DrawOrders(that.Binance.OpenedOrders);
        });
        return ordService;
    }

    #_workbook_lock;
    Stakan1;
    SERVICE_MakeWorBookService(){
        let that = this;
        this.#_workbook_lock = false;
        let wbSrv = new B52Service("WorkBook1",B52Settings.workbookSerciceIntervalMS);
        wbSrv.Actions.push(()=>{
            if(!that.#_workbook_lock)
                {
                    that.#_workbook_lock = true;
                    that.Binance.MARKET_GetCurrentOrderBook().then(wb=>{
                        that.Binance.WorkBook = wb;
                        that.#_workbook_lock = false;
                        //run events
                        that.Binance._eventWorkbookChanged.forEach(a=>a());
                    }).catch(error=>{
                        B52Log.Error("SERVICE_MakeWorBookService coudln't renew orderbook 1 due to error clearing it",error);
                        that.Binance.WorkBook = null;
                        that.#_workbook_lock = false;
                        that.Binance._eventWorkbookChanged.forEach(a=>a());
                    });
                }
        });
        
        that.Binance._eventWorkbookChanged.push(()=>{
            B52Tv.GetCurrentCurrencyPair().then(currency=>{
                that.Binance.MARKET_GetPriceFormatPrecision(currency).then(form=>{
                    that.Binance.MARKET_GetTickSize(currency).then(tick=>{
                        if(that.Stakan1==null) {
                            that.Stakan1 = new B52Stakan(
                                document.getElementById("B52WorkBookTable"),
                                form,
                                tick,
                                that.Binance.WorkBook,
                                "_1",
                                B52Settings.workBookScale
                            );
                            that.Stakan1.ReDraw();
                            that.Stakan1.Center();
                        }
                        else {
                            //refine will redraw automatically if required
                            that.Stakan1.Refine(that.Binance.WorkBook,form,tick,B52Settings.workBookScale);
                        }
                    }).catch(error=>{
                        B52Log.Error("SERVICE_MakeWorBookService coudln't process stakan because couldn't get MARKET_GetTickSize",error);
                        if(that.Stakan1!=null)that.Stakan1.Clear();
                    });
                }).catch(error=>{
                    B52Log.Error("SERVICE_MakeWorBookService coudln't process stakan because couldn't get MARKET_GetPriceFormatPrecision",error);
                    if(that.Stakan1!=null)that.Stakan1.Clear();
                });
            });
        });
        return wbSrv;
    }

    #_workbook_lock2;
    Stakan2;
    SERVICE_MakeWorBookService2(){
        let that = this;
        this.#_workbook_lock2 = false;
        let wbSrv = new B52Service("WorkBook2",B52Settings.workbookSerciceIntervalMS2);
        wbSrv.Actions.push(()=>{
            if(!that.#_workbook_lock2)
                {
                    that.#_workbook_lock2 = true;
                    let spotCurrency = $("#B52SpotName").val();
                    if(spotCurrency!="")
                    {
                        that.Binance.MARKET_GetSpotOrderBook(spotCurrency).then(wb=>{
                            that.Binance.WorkBook2 = wb;
                            that.#_workbook_lock2 = false;
                            //run events
                            that.Binance._eventWorkbookChanged2.forEach(a=>a());
                        }).catch(error=>{
                            B52Log.Error("SERVICE_MakeWorBookService2 coudln't renew orderbook 2 due to error clearing it",error);
                            that.Binance.WorkBook2 = null;
                            that.#_workbook_lock2 = false;
                            that.Binance._eventWorkbookChanged2.forEach(a=>a());
                        });
                    }
                }
        });
        
        that.Binance._eventWorkbookChanged2.push(()=>{
            let currency = $("#B52SpotName").val();
            that.Binance.MARKET_SPOT_GetPriceFormatPrecision(currency).then(form=>{
                that.Binance.MARKET_SPOT_GetTickSize(currency).then(tick=>{
                    if(that.Stakan2==null) {
                        
                        that.Stakan2 = new B52Stakan(
                            document.getElementById("B52WorkBookTable2"),
                            form,
                            tick,
                            that.Binance.WorkBook2,
                            "_2",
                            B52Settings.workBookScale2
                        );
                        that.Stakan2.ReDraw();
                        that.Stakan2.Center();
                    }
                    else {
                        //refine will redraw automatically if required
                        that.Stakan2.Refine(that.Binance.WorkBook2,form,tick,B52Settings.workBookScale2);
                    }
                }).catch(error=>{
                    B52Log.Error("SERVICE_MakeWorBookService2 coudln't process stakan because couldn't get MARKET_SPOT_GetTickSize",error);
                    if(that.Stakan2!=null)that.Stakan2.Clear();
                });
            }).catch(error=>{
                B52Log.Error("SERVICE_MakeWorBookService2 coudln't process stakan because couldn't get MARKET_SPOT_GetPriceFormatPrecision",error);
                if(that.Stakan2!=null)that.Stakan2.Clear();
            });
        });
        return wbSrv;
    }

    static CALC = {
        GetTakes:(maxTakes,minNotal,amount,minTick,price) => {
            let numOfTakes = (amount*price/minNotal)>=maxTakes?maxTakes:Math.floor(amount*price/minNotal);
            let oneTake = Math.floor(amount/numOfTakes/minTick)*minTick;
            let toReturn = [];
            let sumDone = 0;
            for(let i=0;i<numOfTakes;i++)
            {
                if(i+1==numOfTakes)
                {
                    //last
                    toReturn.push(amount-sumDone);
                }
                else
                {
                    toReturn.push(oneTake);
                    sumDone+=oneTake;
                }
                
            }
            return toReturn;
        },

        GetOrdersIntervalMaxLoss:(maxOrders,priceFrom,priceTo,stopLoss,maxLoss,minNotal,minTick,pricePerOrder,priceDigNumber)=>{
            let ordsToReturn = [];
            let minOfPrices  = Math.min(...[priceFrom,priceTo,stopLoss]);
            pricePerOrder = pricePerOrder/100;
            let calcedMedian = (priceFrom+priceTo)/2;
            let combinedLoss = Math.abs(calcedMedian - stopLoss)/stopLoss + pricePerOrder;
            let cotleta = maxLoss/combinedLoss;
            let tickPrice = parseFloat((minTick*minOfPrices).toFixed(priceDigNumber)); //regarding stop loss as we need to close position for sure
            let cotletaInTicks = Math.floor(cotleta/tickPrice);
            let absMinOrderInTicks = Math.floor(minNotal/tickPrice) + 1;
            let ordsNumber = 0;

            if((cotletaInTicks/absMinOrderInTicks)<1) return []; //imposible
            if((cotletaInTicks/absMinOrderInTicks)>maxOrders) ordsNumber = maxOrders;
            else ordsNumber = Math.floor(cotletaInTicks/absMinOrderInTicks);

            let eachOrderSizeInTicks = Math.ceil(cotletaInTicks/ordsNumber);
            let priceStep = (priceTo - priceFrom)/ordsNumber; //could be negative
            let minTickDigs = minTick.toString().includes(".")?minTick.toString().split(".")[1].length:0;
            let quantity = (eachOrderSizeInTicks*minTick).toFixed(minTickDigs);
            let currPrice = priceFrom + priceStep;
            for(let i=0;i<ordsNumber;i++)
            {
                
                ordsToReturn.push({quantity:quantity,price:currPrice.toFixed(priceDigNumber)});
                currPrice += priceStep;
            }
            return ordsToReturn;
        }
    }
}

class B52Stakan{
    #_table;
    #_form;
    #_tick;
    #_wb;
    #_colaPerc;
    #_lastColaPercPrice;
    #_maxSum;
    #_wbFrom;
    #_uniqieid;
    #_wbEnd;
    #_scale;
    constructor(tableElement,form,tick,wb,uniqueid,scale){
        this.#_table = tableElement;
        this.#_form = form;
        this.#_tick = tick;
        this.#_wb = wb;
        this.#_uniqieid = uniqueid;
        this.#_colaPerc = null;
        this.#_lastColaPercPrice = null;
        this.#_maxSum = 0;
        this.#_wbFrom = null;
        this.#_lastProcessedWB = null;
        this.#_wbEnd = null;
        this.#_scale = scale;
    }

    ReDraw(scale=null){
        if(scale!=null) this.#_scale = scale;
        this.#_maxSum = 0;
        let html = "";
        this.#_lastProcessedWB = this.ProcessWB();
        this.#_lastProcessedWB.forEach(tr=>{
            html+=`<tr id="${this.#_uniqieid}${tr.priceText.replace(".","_")}" class="B52WBrow" style="background:${tr.background}"${(tr.thisIsPrice?" priceat=\"true\"":"")}>
            <td style="width:5px;background:${tr.scaleColor}">.</td>
            <td style="width: 50px;background:linear-gradient(to right,${tr.barColor} ${tr.barSize}%, transparent 0) no-repeat;">
            ${tr.sumText}
            </td>
            <td>${tr.priceText}</td>
            <tr>`;
        });
        this.#_table.innerHTML =  html;
        this.Center();
    }

    #_lastProcessedWB;
    Refine(newwb,form,tick,scale){
        this.#_form = form;
        this.#_tick = tick;
        this.#_wb = newwb;
        this.#_scale = scale;
        //calculate if we are redrawing
        if(this.CalcBorders().redraw) 
        {
            this.ReDraw();
            return;
        }
        let pb = this.ProcessWB();
        //only change what required
        let diff = pb.filter(a=>!this.#_lastProcessedWB.some(b=>b.priceText==a.priceText&&b.sumText==a.sumText));
        $(this.#_table).find("tr[priceat='true']").attr("priceat","false");
        diff.forEach(tr=>{
            let sid = "#"+this.#_uniqieid+tr.priceText.replace(".","_");
            $(sid).css("background",tr.background);
            if(tr.thisIsPrice) $(sid).attr("priceat","true");
            $(sid).children("td").eq(1).text(tr.sumText); 
            $(sid).children("td").eq(1).css("background",`linear-gradient(to right,${tr.barColor} ${tr.barSize}%, transparent 0) no-repeat`);
        });
        this.#_lastProcessedWB = pb;
    }

    ProcessWB(){
        this.#_colaPerc=null;
        //out json
        let scale = this.#_scale;
        let step = parseFloat(this.#_form)*scale;
        step = parseFloat(step.toFixed(this.#_form.length));
        //num of decimals in sum
        let theTick = this.#_tick<1?this.#_tick.toString().length-2:0;
        //num of decimals in price
        let theForm = step<1?step.toString().length-2:0;
        let borders = this.CalcBorders();
        if(borders.redraw)
        {
            this.#_wbFrom = borders.from;
            this.#_wbEnd = borders.to;
        }
        
        let currPrice = this.#_wbFrom;
        
        let cola = "";
        let toReturn = [];
        while(currPrice>parseFloat(this.#_wb.asks[0][0])) {
            let prevPrice = currPrice;
            currPrice-=step;
            let presum = 0;
            if(currPrice<=borders.askFrom)
            {
                presum = this.#_wb.asks.filter(a=>parseFloat(a[0])>currPrice&&parseFloat(a[0])<=prevPrice);
            }
            let sum = 0;
            //calc sums based on sumof USD or sumof coins
            if(B52Settings.workbookDollars)
            {
                sum = presum.length?presum.map(b=>parseFloat(b[1])*parseFloat(b[0])).reduce((c,d)=>c+d):0;
            }
            else
            {
                sum = presum.length?presum.map(b=>parseFloat(b[1])).reduce((c,d)=>c+d):0;
            }
            //find max sum of the Stakan, to highlight
            if(sum>this.#_maxSum)this.#_maxSum=sum;
                            
            //size of bar
            let scaleSize = Math.round(100*sum*(B52Settings.workBookScaleInc/15)/(this.#_maxSum));
            //color of bar
            let scaleColor = scaleSize>50?(scaleSize>90?B52Settings.workbookColors.big2:B52Settings.workbookColors.big1):B52Settings.workbookColors.bidscale;
            //color of the background main
            cola = sum==0?B52Settings.workbookColors.empty:B52Settings.workbookColors.ask;
            //colorize high volume 1 and high volume 2
            if(this.#_colaPerc==null||(this.#_lastColaPercPrice-currPrice)/currPrice>B52Settings.workBookColorPerc)
            {
                this.#_colaPerc = this.#_colaPerc==B52Settings.workbookColors.bar025_1?B52Settings.workbookColors.bar025_2:B52Settings.workbookColors.bar025_1;
                this.#_lastColaPercPrice = currPrice;
            }
            //convert sum to string and shorten if so
            let sumString = "";
            if(B52Settings.workbookDollars)
            {
                if(B52Settings.workbookShorten>0)
                {
                    let fixes = B52Settings.workbookShorten==1?1:2;
                    let divideBy = parseInt("1"+"000".repeat(B52Settings.workbookShorten));
                    let letter = B52Settings.workbookShorten==1?"k":B52Settings.workbookShorten==2?"m":B52Settings.workbookShorten==3?"b":"?";
                    sumString = "$"+(sum/divideBy).toFixed(fixes)+letter;
                }
                else
                {
                    sumString = "$"+(sum).toFixed(0);
                }
            }
            else
            {
                if(B52Settings.workbookShorten>0)
                {
                    let fixes = B52Settings.workbookShorten==1?1:2;
                    let divideBy = parseInt("1"+"000".repeat(B52Settings.workbookShorten));
                    let letter = B52Settings.workbookShorten==1?"k":B52Settings.workbookShorten==2?"m":B52Settings.workbookShorten==3?"b":"?";
                    sumString = (sum/divideBy).toFixed(fixes)+letter;
                }
                else
                {
                    sumString = (sum).toFixed(theTick);
                }
            }
            //we are ready to add element
            toReturn.push({
                background:cola,
                scaleColor:this.#_colaPerc,
                barColor:scaleColor,
                barSize: scaleSize,
                sumText:sumString,
                priceText:currPrice.toFixed(theForm),
                thisIsPrice: false
            });
        }
        //set top as a price
        if(toReturn.length>0)
        {
            toReturn[toReturn.length-1].background = B52Settings.workbookColors.posask;
            toReturn[toReturn.length-1].thisIsPrice = true;
        }

        //color top of bids
        cola = B52Settings.workbookColors.posbid;
        while(currPrice>this.#_wbEnd)
        {
            let prevPrice = currPrice;
            currPrice-=step;
            let presum = 0;
            if(currPrice>=borders.bidEnd)
            {
                presum = this.#_wb.bids.filter(a=>parseFloat(a[0])>=currPrice&&parseFloat(a[0])<prevPrice);
            }
            let sum = 0;
            //calc sums based on sumof USD or sumof coins
            if(B52Settings.workbookDollars)
            {
                sum = presum.length?presum.map(b=>parseFloat(b[1])*parseFloat(b[0])).reduce((c,d)=>c+d):0;
            }
            else
            {
                sum = presum.length?presum.map(b=>parseFloat(b[1])).reduce((c,d)=>c+d):0;
            }
            //find max sum of the Stakan, to highlight
            if(sum>this.#_maxSum)this.#_maxSum=sum;

            //size of bar
            let scaleSize = Math.round(100*sum*(B52Settings.workBookScaleInc/15)/(this.#_maxSum));
            //color of bar
            let scaleColor = scaleSize>50?(scaleSize>90?B52Settings.workbookColors.big2:B52Settings.workbookColors.big1):B52Settings.workbookColors.bidscale;

            //colorize high volume 1 and high volume 2
            if(this.#_colaPerc==""||(this.#_lastColaPercPrice-currPrice)/currPrice>B52Settings.workBookColorPerc)
            {
                this.#_colaPerc = this.#_colaPerc==B52Settings.workbookColors.bar025_1?B52Settings.workbookColors.bar025_2:B52Settings.workbookColors.bar025_1;
                this.#_lastColaPercPrice = currPrice;
            }
            let sumString = "";
            if(B52Settings.workbookDollars)
            {
                if(B52Settings.workbookShorten>0)
                {
                    let fixes = B52Settings.workbookShorten==1?1:2;
                    let divideBy = parseInt("1"+"000".repeat(B52Settings.workbookShorten));
                    let letter = B52Settings.workbookShorten==1?"k":B52Settings.workbookShorten==2?"m":B52Settings.workbookShorten==3?"b":"?";
                    sumString = "$"+(sum/divideBy).toFixed(fixes)+letter;
                }
                else
                {
                    sumString = "$"+(sum).toFixed(0);
                }
            }
            else
            {
                if(B52Settings.workbookShorten>0)
                {
                    let fixes = B52Settings.workbookShorten==1?1:2;
                    let divideBy = parseInt("1"+"000".repeat(B52Settings.workbookShorten));
                    let letter = B52Settings.workbookShorten==1?"k":B52Settings.workbookShorten==2?"m":B52Settings.workbookShorten==3?"b":"?";
                    sumString = (sum/divideBy).toFixed(fixes)+letter;
                }
                else
                {
                    sumString = (sum).toFixed(theTick);
                }
            }
            //we are ready to add element
            toReturn.push({
                background:cola,
                scaleColor:this.#_colaPerc,
                barColor:scaleColor,
                barSize: scaleSize,
                sumText:sumString,
                priceText:currPrice.toFixed(theForm),
                thisIsPrice: false
            });
            //sometimes it is null
            if(sum==0){
                cola = B52Settings.workbookColors.empty;
                toReturn[toReturn.length-1].background = B52Settings.workbookColors.empty;
            }
            else
            {
                cola = B52Settings.workbookColors.bid;
            }
        }
        return toReturn;
    }

    Center(){
        let that = this;
        if($(that.#_table).find("tr[priceat='true']").length)
        {
            $(that.#_table).find("tr[priceat='true']")[0].scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });
        }
    }

    CalcBorders(){
        //calc data
        let scale = this.#_scale;
        let step = parseFloat(this.#_form)*scale;
        step = parseFloat(step.toFixed(this.#_form.length));
        let theForm = step<1?step.toString().length-2:0;
        let maxRowsPerPart = B52Settings.workBookMaxRows/2-B52Settings.workbookEmptyCells;
        let askStart = parseFloat(this.#_wb.asks[this.#_wb.asks.length-1][0]);
        let askEnd = parseFloat(this.#_wb.asks[0][0]);
        let bidStart = parseFloat(this.#_wb.bids[0][0]);
        let bidEnd = parseFloat(this.#_wb.bids[this.#_wb.bids.length-1][0]);
        //atjust the start to the max rows per stakan
        let askStartAtjusted =  askStart;
        if(((askStart-askEnd)/step)>maxRowsPerPart) {
            askStartAtjusted = askEnd + maxRowsPerPart*step;
            askStartAtjusted = parseFloat(askStartAtjusted.toFixed(theForm-1));
        }
        let bidEndAtjusted = bidEnd;
        if(((bidStart-bidEnd)/step)>maxRowsPerPart) {
            bidEndAtjusted = bidStart - maxRowsPerPart*step;
            bidEndAtjusted = parseFloat(bidEndAtjusted.toFixed(theForm-1));
        }
        
        if (this.#_wbFrom==null|| //null
            this.#_wbFrom==""|| //null
            askStartAtjusted>this.#_wbFrom|| //hit top
            bidEndAtjusted<this.#_wbEnd //hit bottom
            ) 
        {
            let from = askStartAtjusted + B52Settings.workbookEmptyCells*step;
            let to = bidEndAtjusted - B52Settings.workbookEmptyCells*step;
            return {
                from:from,
                to:to,
                askFrom:askStartAtjusted,
                bidEnd:bidEndAtjusted,
                redraw:true
            };
        }
        return {
            from:this.#_wbFrom,
            to:this.#_wbEnd,
            askFrom:askStartAtjusted,
            bidEnd:bidEndAtjusted,
            redraw:false
        };
    }

    DrawOrders(orders){
        $("tr[isorder='true']").css("border","0px");
        $("tr[isorder='true']").attr("isorder","false");
        if(!orders.length) return;
        orders.forEach(ord=>{
            let price = ord.price=="0"?ord.stopPrice:ord.price;
            let sid = "#"+this.#_uniqieid+price.replace(".","_");
            let col = ord.side=="BUY"?"green":"red";
            if($(sid).length)
            {
                $(sid).css("border","3px solid "+col);
                $(sid).attr("isorder","true");
            }
            else
            {
                //search for closest
                let prices = $(this.#_table).find("tr").filter((a,b)=>$(b).children("td").length).map((a,b)=>$(b).children("td").eq(2).text()).get();
                let closest = prices.reduce(function(prev, curr) {
                    return (Math.abs(parseFloat(curr) - price) < Math.abs(parseFloat(prev) - price) ? curr : prev);
                });
                sid = "#"+this.#_uniqieid+closest.replace(".","_");
                $(sid).css("border","3px solid "+col);
                $(sid).attr("isorder","true");
            }
        });
    }

    Clear(){
        this.#_table.innerHTML =  "";
    }
}

class B52Tv {
    constructor() {
    }
    static TriggerMouseEvent(node, eventType) {
        let clickEvent = document.createEvent('MouseEvents');
        clickEvent.initEvent(eventType, true, true);
        node.dispatchEvent(clickEvent);
    }

    static GetCurrentCurrencyPair() {
        return new Promise((s,f)=>{
            B52Tv.WaitForElement(B52Settings.tvXpath.currency).then(e=>{
                let pairText = e.innerText;
                //remove perp in the end as binance doesn't recognize it
                if(pairText.substr(pairText.length - 4)=="PERP") pairText = pairText.slice(0,-4);
                s(pairText);
            });
        });
    }

    static XpathItemCount(xpath) {
        return document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength;
    }
    static XpathGetFirstItem(xpath) {
        let items = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
        return items.iterateNext();
    }

    static ClearSecretStrategies() {
        let itemsCount = B52Tv.XpathItemCount(B52Settings.tvXpath.activeSecretStrategies);
        for (let i = 0; i < itemsCount; i++) {
            let item = B52Tv.XpathGetFirstItem(B52Settings.tvXpath.activeSecretStrategies);
            B52Tv.TriggerMouseEvent(item, "mousedown");
        }
    }

    static RunFavIndicator(name) {
        let arrow = B52Tv.XpathGetFirstItem(B52Settings.tvXpath.favIndicatorArrow);
        B52Tv.TriggerMouseEvent(arrow, "click");
        let fav = "//div[./div[text()='Favorite Indicators']]/div[.//span[text()='" + name + "']]";
        return new Promise((s,f)=>{
            B52Tv.WaitForElement(fav).then((e)=>{
                B52Tv.TriggerMouseEvent(e, "click");
                let setButt = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + name + "')]]//div[@data-name='legend-settings-action']";
                B52Tv.WaitForElement(setButt).then((e2)=>{
                    s();
                });
            });
        });
    }

    static RunStopAlert(currency, name) {
        let play = "(//div[starts-with(@class,'body')]//div[./div/span[contains(text(),'" + currency + "')] and ./div[contains(text(),'" + name + "')]]//div[@role='button'])[1]";
        //try clicking if no try openning then clicking
        let alertMenu = "//div[@data-role='button' and @data-name='alerts']";
        return new Promise((s,f)=>{
            B52Tv.WaitForElement(alertMenu).then((a)=>{
                if(B52Tv.XpathItemCount(play)<1)
                {
                    B52Tv.TriggerMouseEvent(a, "click");
                }
                B52Tv.WaitForElement(play).then((e)=>{
                    B52Tv.TriggerMouseEvent(e, "click");
                    s();
                });
            });
        });
    }
    
    static DeleteAlertQuickly(name)
    {
        return new Promise((s,f)=>{
            let alertEditButton = "//div[starts-with(@class,'dialog') and .//div[text()='"+name+"']]//button[1]";
            B52Tv.TriggerMouseEvent(B52Tv.XpathGetFirstItem(alertEditButton), "click");
            B52Tv.WaitForElement("//div[@data-name='delete']").then(e=>{
                B52Tv.TriggerMouseEvent(e,"click");
                B52Tv.WaitForElement("//button[@name='yes']").then(b=>{
                    B52Tv.TriggerMouseEvent(b,"click");
                    s();
                });
            });
        });
    }

    static GetActiveStrategyName() {
        return new Promise((s,f)=>{
            B52Tv.WaitForElement(B52Settings.tvXpath.activeStrategyName).then(e=>{
                s(e.innerText);
            });
        });
    }

    static GetAlertMessage() {
        return new Promise((s,f)=>{
            B52Tv.WaitForElement(B52Settings.tvXpath.alertMessage).then(e=>{
                s(e.innerText);
            });
        });
    }

    static CloseAlert() {
        return new Promise((s,f)=>{
            B52Tv.WaitForElement(B52Settings.tvXpath.closeAlertButton).then(e=>{
                B52Tv.TriggerMouseEvent(e,"click");
                s();
            });
        });
    }

    static CreateNewAlert(alertName) {
        return new Promise((s,f) => 
        {
            B52Tv.WaitForElement(B52Settings.tvXpath.moreButton).then(e=>{
                B52Tv.TriggerMouseEvent(e,"mousedown");
                B52Tv.WaitForElementOr(B52Settings.tvXpath.newAlertButtons).then(e1=>{
                    B52Tv.TriggerMouseEvent(e1, "click");
                    let inputVal = "//input[@name='alert-name']";
                    B52Tv.WaitForElement(inputVal).then((e2)=>{
                        B52Tv.SetReactValue(e2,alertName);
                        B52Tv.PressEnter().then(()=>{
                                s();
                            });
                    });
                });
            });
        });
    }
    
    static PressEnter() {
        return new Promise((s,f)=>{
            setTimeout(() => {
                    const ke = new KeyboardEvent('keydown', {
                    bubbles: true,
                    cancelable: true,
                    keyCode: 13
                });
                document.body.dispatchEvent(ke);
                s();
            }, 50);
        });
    }

    static DeleteAlert(currency, name) {
        B52Tv.WaitForElement("(//div[starts-with(@class,'body')]//div[./div/span[contains(text(),'" + currency + "')] and ./div[contains(text(),'" + name + "')]]//div[@role='button'])[3]").then(e=>{
            B52Tv.TriggerMouseEvent(e,"click");
            B52Tv.WaitForElement(B52Settings.tvXpath.yesButton).then(e1=>{
                B52Tv.TriggerMouseEvent(e1, "click");
            });
        });
    }

	static SetStrategySettings(sets)
	{
        return new Promise((s,f)=>{
            B52Tv.WaitForElement(B52Settings.tvXpath.b52SettingButton).then(e=>{
                B52Tv.TriggerMouseEvent(e,"mousedown");
                let firstInput = "//div[@data-name='indicator-properties-dialog']";
                B52Tv.WaitForElement(firstInput).then(e1=>{
                    for(let i=0;i<sets.length;i++)
                    {
                        let input = "//div[./div[text()='"+sets[i].label+"']]/following-sibling::div[1]//input";
                        
                        let inputNode = B52Tv.XpathGetFirstItem(input);
                        if(inputNode!=null) B52Tv.SetReactValue(inputNode,sets[i].value);
                    }
                    let ok = B52Tv.XpathGetFirstItem("//button[@data-name='submit-button']");
                    B52Tv.TriggerMouseEvent(ok, "click");
                    s();
                });
            });
        });
	}

    static SetAnyStrategySettings(stratName,sets)
	{
        return new Promise((s,f)=>{
            let settingsButton = "//div[@data-name='legend-source-item' and .//div[contains(text(),'" + stratName + "')]]//div[@data-name='legend-settings-action']";
            B52Tv.WaitForElement(settingsButton).then(e=>{
                B52Tv.TriggerMouseEvent(e,"mousedown");
                let firstInput = "//div[@data-name='indicator-properties-dialog']";
                B52Tv.WaitForElement(firstInput).then(e1=>{
                    for(let i=0;i<sets.length;i++)
                    {
                        let input = "//div[./div[text()='"+sets[i].label+"']]/following-sibling::div[1]//input";
                        
                        let inputNode = B52Tv.XpathGetFirstItem(input);
                        if(inputNode!=null) B52Tv.SetReactValue(inputNode,sets[i].value);
                    }
                    let ok = B52Tv.XpathGetFirstItem("//button[@data-name='submit-button']");
                    B52Tv.TriggerMouseEvent(ok, "click");
                    s();
                });
            });
        });
	}

    static WaitForElement(xpath,maxTimer = 300)
    {
        return new Promise((s,f) => {
            let existCondition = setInterval(() => {
                let theElementFound = B52Tv.XpathItemCount(xpath)>0;
                if (theElementFound) {
                    //wait till ready and exit
                    let theElement = B52Tv.XpathGetFirstItem(xpath);
                    $(theElement).ready(()=>{
                        s(theElement);
                    });
                    //exit
                    clearInterval(existCondition);
                }
                else if(maxTimer<1)
                {
                    f("Couldt find object after "+(maxTimer*100).toString()+" ms for "+xpath);
                    clearInterval(existCondition);
                }
                else
                {
                    maxTimer--;
                }
            }, 100);
        });
    }

    static WaitForElementOr(xpaths,maxTimer = 300)
    {
        return new Promise((s,f) => {
            let existCondition = setInterval(() => {
                let theElementFound = false;
                let theFoundXpath = "";
                xpaths.forEach(x=>{if(B52Tv.XpathItemCount(x)>0){theElementFound = true;theFoundXpath=x;}});
                if (theElementFound) {
                    //wait till ready and exit
                    let theElement = B52Tv.XpathGetFirstItem(theFoundXpath);
                    $(theElement).ready(()=>{
                        s(theElement);
                    });
                    //exit
                    clearInterval(existCondition);
                }
                else if(maxTimer<1)
                {
                    xpaths.forEach(x=>console.log("Didn't find element after 30 seconds: "+ x));
                    clearInterval(existCondition);
                    f("Couldt find objects after "+(maxTimer*100).toString()+" ms for ",xpaths);
                }
                else
                {
                    maxTimer--;
                }
            }, 100);
        });
    }

    static SetReactValue(element, value) {
        let lastValue = element.value;
        element.value = value;
        let event = new Event("input", { target: element, bubbles: true });
        // React 15
        event.simulated = true;
        // React 16
        let tracker = element._valueTracker;
        if (tracker) {
            tracker.setValue(lastValue);
        }
        element.dispatchEvent(event);
    }

    static RunNTimes(func,delay,times){
        let maxTimer = times;
            let existCondition = setInterval(() => {
                func();
                if(maxTimer<1)
                {
                    clearInterval(existCondition);
                }
                else
                {
                    maxTimer--;
                }
            }, delay);
    }

    //endof class
}

class BinanceAdapter {
    #_accessKey;
    #_secretKey;
    OpenedPositions;
    _eventOpenPositionsChanged;
    OpenedOrders;
    _eventOpenOrdersChanged;
    get ExchangeInfo(){return this.#_exchangeInfo}
    get ExchangeInfoSpot(){return this.#_spot_exchangeInfo}
    #_exchangeInfo;
    #_spot_exchangeInfo;
    WorkBook;
    WorkBook2;
    _eventWorkbookChanged;
    _eventWorkbookChanged2;

    constructor() {
	    this.#_exchangeInfo = null;
        this.OpenedPositions = null;
        this.OpenedOrders = null;
        this._eventOpenPositionsChanged = [];
        this._eventOpenOrdersChanged = [];
        this._eventWorkbookChanged = [];
        this.WorkBook = null;
        this._eventWorkbookChanged2 = [];
        this.WorkBook2 = null;
    }

    ORDERS_SetNoLoss(){
        let that = this;
        B52Tv.GetCurrentCurrencyPair().then(pair=>{
            let currentRisk = that.OpenedPositions.filter(a=>a.symbol==pair)[0];
            let position = parseFloat(currentRisk.positionAmt);
            let entryPrice = parseFloat(currentRisk.entryPrice);
            if(position==0) 
            {
                B52.Info("Couldn't set No Loss Stop Market order as there is 0 position risk info regarding the currency "+pair);
                return; //we are out
            }
            let direction = position>0?"SELL":"BUY";
            let priceToToStop = (position>0?(1+(2*B52Settings.marketOrderPrice/100)):(1-(2*B52Settings.marketOrderPrice/100)))*entryPrice;
            that.MARKET_GetPriceFormatPrecision(pair).then(f=>{
                let closeParams = {
                    side:direction,
                    quantity:Math.abs(position),
                    stopPrice:priceToToStop.toFixed(f.length-2),
                    type:"STOP_MARKET",
                    symbol:pair,
                    timeInForce:"GTC"
                };
                that.POST_SIGNED_PARAMS(
                    B52Settings.binanceSettings.orderUrl,
                    that.#_accessKey,
                    that.#_secretKey,
                    closeParams).then((resp)=>{
                        B52Log.Info("No Loss set sucess. ", resp);
                    }).catch(error=>{
                        B52Log.Error("Fail Setting NOLOS. ", error);
                    });
            }).catch(error=>{
                B52Log.Error("Fail Getting MARKET_GetPriceFormatPrecision for pair = "+pair, error);
            });
        });
    }

    ORDERS_FixPosition(currency) {
        let that = this;
        let currentRisk = that.OpenedPositions.filter(a=>a.symbol==currency)[0];
        let position = parseFloat(currentRisk.positionAmt);
        if(position==0) {
            B52Log.Info("ORDERS_FixPosition there is nothing to fix");
            return;
        }
        let direction = position>0?"SELL":"BUY";
        let closeParams = {
            side:direction,
            quantity:Math.abs(position),
            type:"MARKET",
            symbol:currency,
            reduceOnly: true
        };
        that.POST_SIGNED_PARAMS(
            B52Settings.binanceSettings.orderUrl,
            that.#_accessKey,
            that.#_secretKey,
            closeParams).then((resp)=>{
                B52Log.Info(`Position fixed for ${currency}. `, resp);
            }).catch(error=>{
                B52Log.Error("Fail Fixing poisitons for currency = "+currency, error);
            });
    }

    ORDERS_FixSinglePosition(currency,coins) {
        let that = this;
        let currentRisk = that.OpenedPositions.filter(a=>a.symbol==currency)[0];
        let pos = parseFloat(currentRisk.positionAmt);
        if(pos==0) {
            B52Log.Info("ORDERS_FixPosition there is nothing to fix");
            return;
        }
        let direction = pos>0?"SELL":"BUY";
        that.MARKET_GetPriceFormatPrecision(currency).then(prec=>{

            let closeParams = {
                side:direction,
                quantity:coins,
                type:"MARKET",
                symbol:currency,
                reduceOnly: true
            };
            that.POST_SIGNED_PARAMS(
                B52Settings.binanceSettings.orderUrl,
                that.#_accessKey,
                that.#_secretKey,
                closeParams).then((resp)=>{
                    B52Log.Info(`Position fixed for ${currency}. `, resp);
                }).catch(error=>{
                    B52Log.Error("Fail Fixing sinlge position for pair = "+currency, error);
                });;
        }).catch(error=>{
            B52Log.Error("Fail Getting MARKET_GetPriceFormatPrecision for pair = "+currency, error);
        });
    }

    ORDERS_ChancelAllOrders(currency) {
        let that = this;
        let orders = that.OpenedOrders;
        if(orders.length==0) {
            B52Log.Info("ORDERS_ChancelAllOrders no orders found.");
            return;
        }
        let closeParams = {
            symbol:currency
        };
        that.DELETE_SIGNED_PARAMS(
            B52Settings.binanceSettings.allOpenedOrders,
            that.#_accessKey,
            that.#_secretKey,
            closeParams).then((resp)=>{
                B52Log.Info(`Chanceled all opened orders for ${currency}. `, resp);
            }).catch(error=>{
                B52Log.Error("Fail Canceling all orders for pair = "+currency, error);
            });
    }

    SetAccessKey(key) {
        this.#_accessKey = key;
    }

    SetSecretKey(key) {
        this.#_secretKey = key;
    }
    
    MARKET_GetPrice(currency) {
        let that = this;
        return new Promise((s,f)=>{
            let params = {symbol:currency};
            that.GET_ANON_PARAMS(
                B52Settings.binanceSettings.currentPrice,
                params).then((resp)=>{
                    B52Log.Info(`MARKET_GetPrice for ${currency}. `, resp);
                    s(parseFloat(resp.lastPrice));
                }).catch(error=>{
                    B52Log.Error("Fail Getting Price for pair = "+currency, error);
                    f(error);
                });
        });
    }
    
    ORDERS_GetOpenOrders(currency) {
		let that = this;
        return new Promise((s,f)=>{
            let params = {symbol:currency};
            that.GET_SIGNED_PARAMS(
                B52Settings.binanceSettings.openedOrders,
                that.#_accessKey,
                that.#_secretKey,
                params).then((resp)=>{
                    B52Log.Info(`ORDERS_GetOpenOrders for ${currency}. `, resp);
                    s(resp);
                }).catch(error=>{
                    B52Log.Error("Fail Getting Opened orders for pair = "+currency, error);
                    f(error);
                });
        });
    }

    ORDERS_GetAllPositions() {
		let that = this;
        return new Promise((s,f)=>{
            that.GET_SIGNED_PARAMS(
                B52Settings.binanceSettings.positions,
                that.#_accessKey,
                that.#_secretKey).then((resp)=>{
                    B52Log.Info(`ORDERS_GetAllPositions. `, resp);
                    s(resp);
                }).catch(error=>{
                    B52Log.Error("Fail Getting all opened risk positions", error);
                    f(error);
                });
        });
    }

    MARKET_GetExchangeInfo(){
        let that = this;
        return new Promise((s,f)=>{
            if(that.#_exchangeInfo!=null)
            {
                s(that.#_exchangeInfo);
                return;
            }
            that.GET_ANON_PARAMS(
                B52Settings.binanceSettings.exchangeInfo
                ).then((resp)=>{
                    B52Log.Info(`MARKET_GetExchangeInfo. `, resp);
                    that.#_exchangeInfo = resp;
                    s(that.#_exchangeInfo);
                }).catch(error=>{
                    B52Log.Error("Fail Getting futures exchange info", error);
                    f(error);
                });
        });
    }

	MARKET_GetTickSize(currency)
	{
		let that = this;
		return new Promise((s,f)=>
		{
            that.MARKET_GetExchangeInfo().then(info=>{
                let theSymb = info.symbols.filter(a=>a.symbol==currency);
                if(!theSymb.length) {
                    B52Log.Error("MARKET_GetSize couldn't find symbol in exchange info: "+currency);
                    f("MARKET_GetSize couldn't find symbol in exchange info: "+currency);
                }
                else
                {
                    let theMinSize = parseFloat(theSymb[0].filters.filter(a => a.filterType == 'LOT_SIZE')[0].stepSize);
                    s(theMinSize);
                }
            }).catch(error=>{
                B52Log.Error("Fail Getting futures exchange info", error);
                f(error);
            });
		});
	}

    MARKET_GetPriceFormatPrecision(currency)
	{
		let that = this;
		return new Promise((s,f)=>
		{
			that.MARKET_GetExchangeInfo().then(info=>{
                let theSymb = info.symbols.filter(a=>a.symbol==currency);
                if(!theSymb.length) {
                    B52Log.Info("MARKET_GetPriceFormatPrecision couldn't find symbol in exchange info: "+currency);
                    f();
                }
                else
                {
                    let microTick = theSymb[0].filters.filter(a => a.filterType == 'PRICE_FILTER')[0].tickSize;
                    let tickSize = parseFloat(microTick);
                    s(tickSize.toString().includes("e")?microTick:tickSize.toString());
                }
		    }).catch(error=>{
                B52Log.Error("Fail Getting futures exchange info", error);
                f(error);
            });
    	});
    }

    MARKET_SPOT_GetExchangeInfo(){
        let that = this;
        return new Promise((s,f)=>{
            if(that.#_spot_exchangeInfo!=null)
            {
                s(that.#_spot_exchangeInfo);
                return;
            }
            that.GET_SPOT_ANON_PARAMS(
                B52Settings.binanceSettings.exchangeInfoSpot
                ).then((resp)=>{
                    B52Log.Info(`MARKET_SPOT_GetExchangeInfo. `, resp);
                    that.#_spot_exchangeInfo = resp;
                    s(that.#_spot_exchangeInfo);
                }).catch(error=>{
                    B52Log.Error("Fail Getting spot exchange info", error);
                    f(error);
                });
        });
    }

	MARKET_SPOT_GetTickSize(currency)
	{
		let that = this;
		return new Promise((s,f)=>
		{
            that.MARKET_SPOT_GetExchangeInfo().then(info=>{
                let theSymb = info.symbols.filter(a=>a.symbol==currency);
                if(!theSymb.length) {
                    B52Log.Error("MARKET_SPOT_GetTickSize couldn't find symbol in exchange info: "+currency);
                    f("MARKET_SPOT_GetTickSize couldn't find symbol in exchange info: "+currency);
                }
                else
                {
                    let theMinSize = parseFloat(theSymb[0].filters.filter(a => a.filterType == 'LOT_SIZE')[0].stepSize);
                    s(theMinSize);
                }
            }).catch(error=>{
                B52Log.Error("Fail Getting spot exchange info", error);
                f(error);
            });
		});
	}

    MARKET_SPOT_GetPriceFormatPrecision(currency)
	{
		let that = this;
		return new Promise((s,f)=>
		{
			that.MARKET_SPOT_GetExchangeInfo().then(info=>{
                let theSymb = info.symbols.filter(a=>a.symbol==currency);
                if(!theSymb.length) {
                    B52Log.Error("MARKET_SPOT_GetPriceFormatPrecision couldn't find symbol in exchange info: "+currency);
                    f("MARKET_SPOT_GetPriceFormatPrecision couldn't find symbol in exchange info: "+currency);
                }
                else
                {
                    let microTick = theSymb[0].filters.filter(a => a.filterType == 'PRICE_FILTER')[0].tickSize;
                    let tickSize = parseFloat(microTick);
                    s(tickSize.toString().includes("e")?microTick:tickSize.toString());
                }
		    });
    	});
    }

    DELETE_SIGNED_PARAMS(url,accessKey,secretKey,params={}){
        return new Promise((s,f)=>{
            fetch("https://fapi.binance.com/fapi/v1/time")
            .then(response => response.json())
            .then(timer => {
                    let timeCode = timer.serverTime;
                    params["timestamp"] = timeCode;
                    let hash = CryptoJS.HmacSHA256(jQuery.param(params),secretKey);
                    params["signature"] = hash.toString();
                    let toAdd = jQuery.param(params);
                    fetch(B52Settings.binanceSettings.serverUrl+url+"?"+toAdd,{method:"DELETE",headers:{"X-MBX-APIKEY":accessKey}})
                        .then(response => response.json())
                        .then(resp => {
                            s(resp);
                        })
                        .catch(error => {
                            B52Log.Info("DELETE_SIGNED_PARAMS ERROR: ",error);
                            f(error);
                        });
            })
            .catch(error => {
                B52Log.Error("DELETE_SIGNED_PARAMS ERROR: ",error);
                f(error);
            });
        });
    }

    POST_SIGNED_PARAMS(url,accessKey,secretKey,params={})
    {
        return new Promise((s,f)=>{
            fetch("https://fapi.binance.com/fapi/v1/time")
            .then(response => response.json())
            .then(timer => {
                    let timeCode = timer.serverTime;
                    params["timestamp"] = timeCode;
                    let hash = CryptoJS.HmacSHA256(jQuery.param(params),secretKey);
                    params["signature"] = hash.toString();
                    let toAdd = jQuery.param(params);
                    fetch(B52Settings.binanceSettings.serverUrl+url+"?"+toAdd,{method:"post",headers:{"X-MBX-APIKEY":accessKey}})
                        .then(response => response.json())
                        .then(resp => {
                            s(resp);
                        })
                        .catch(error => {
                            B52Log.Info("POST_SIGNED_PARAMS ERROR: ",error);
                            f(error);
                        });
            })
            .catch(error => {
                B52Log.Error("POST_SIGNED_PARAMS ERROR: ",error);
                f(error);
            });
        });
    }
    
    GET_ANON_PARAMS(url,params=null){
        return new Promise((s,f)=>{
            let toAdd = "";
            if(params!=null)
            {
                toAdd+="?" + jQuery.param(params);
            }
            fetch(B52Settings.binanceSettings.serverUrl+url+toAdd,{method:"get"})
                .then(response => response.json())
                .then(resp => {
                    s(resp);
                })
                .catch(error => {
                    B52Log.Error("GET_ANON_PARAMS ERROR: ",error);
                    f(error);
                });
        });
    }

    GET_SPOT_ANON_PARAMS(url,params=null){
        return new Promise((s,f)=>{
            let toAdd = "";
            if(params!=null)
            {
                toAdd+="?" + jQuery.param(params);
            }
            fetch(B52Settings.binanceSettings.serverUrl2+url+toAdd,{method:"get"})
                .then(response => response.json())
                .then(resp => {
                    s(resp);
                })
                .catch(error => {
                    B52Log.Error("GET_SPOT_ANON_PARAMS ERROR: ",error);
                    f(error);
                });
        });
    }

    GET_SIGNED_PARAMS(url,accessKey,secretKey,params={}){
        return new Promise((s,f)=>{
            fetch("https://fapi.binance.com/fapi/v1/time")
            .then(response => response.json())
            .then(timer => {
                    let  timeCode = timer.serverTime;
                    params["timestamp"] = timeCode;
                    let hash = CryptoJS.HmacSHA256(jQuery.param(params),secretKey);
                    params["signature"] = hash.toString();
                    let toAdd = jQuery.param(params);
                    fetch(B52Settings.binanceSettings.serverUrl+url+"?"+toAdd,{method:"get",headers:{"X-MBX-APIKEY":accessKey}})
                        .then(response => response.json())
                        .then(resp => {
                            s(resp);
                        })
                        .catch(error => {
                            B52Log.Error("GET_SIGNED_PARAMS ERROR: ",error);
                            f(error);
                        });
            })
            .catch(error => {
                B52Log.Error("GET_SIGNED_PARAMS ERROR: ",error);
                f(error);
            });
        });
    }

    ORDERS_GetBalance() {
            let that = this;
            return new Promise((s,f)=>{
                that.GET_SIGNED_PARAMS(B52Settings.binanceSettings.balance,
                    that.#_accessKey,
                    that.#_secretKey).then((resp)=>{
                        s(resp.filter(a=>a.asset=="USDT")[0].balance);
                    }).catch(error=>{
                        B52Log.Error("Fail Getting balance for wallet ", error);
                        f(error);
                    });
            });
    }

    ORDERS_ChancelSingleOrder(orderid,currency){
        let that = this;
        let orders = that.OpenedOrders;
        if(orders.length==0) {
            B52Log.Info("ORDERS_ChancelSingleOrder nothing to cancel, no orders");
            return;
        }
        let closeParams = {
            orderId:orderid,
            symbol:currency
        };
        that.DELETE_SIGNED_PARAMS(
            B52Settings.binanceSettings.orderUrl,
            that.#_accessKey,
            that.#_secretKey,
            closeParams
        ).then(resp=>{
            B52Log.Info(`ORDERS_ChancelSingleOrder for orderid=${orderid} and currency=${currency} done.`,resp);
        }).catch(error=>{
            B52Log.Error("Fail Getting spot exchange info", error);
            f(error);
        });
    }

    ORDERS_NewOrder(order){
        let that = this;
        return new Promise((s,f)=>{
            that.POST_SIGNED_PARAMS(
                B52Settings.binanceSettings.orderUrl,
                that.#_accessKey,
                that.#_secretKey,
                order).then((resp)=>{
                    B52Log.Info("ORDERS_NewOrder. ", resp);
                    s(resp);
                }).catch(error=>{
                    B52Log.Error("Fail creating new order ", error);
                    f(error);
                });
        });
    }

    MARKET_GetCurrentOrderBook(){
        let that = this;
        return new Promise((s,f)=>{
            B52Tv.GetCurrentCurrencyPair().then(currency=>{
                that.GET_ANON_PARAMS(
                    B52Settings.binanceSettings.workbook,
                    {
                        symbol:currency,
                        limit:B52Settings.workBookDepth
                    }
                    ).then((resp)=>{
                        B52Log.Info(`MARKET_GetCurrentOrderBook. `, resp);
                        s(resp);
                    }).catch(error=>{
                        B52Log.Error("Fail Getting futures order book for " + currency, error);
                        f(error);
                    });
            });
        });
    }

    ORDERS_GetAllOpenedOrders(){
        let that = this;
        return new Promise((s,f)=>{
            that.GET_SIGNED_PARAMS(
                B52Settings.binanceSettings.openedOrders,
                that.#_accessKey,
                that.#_secretKey,
                ).then((resp)=>{
                    B52Log.Info(`ORDERS_GetAllOpenedOrders. `, resp);
                    s(resp);
                }).catch(error=>{
                    B52Log.Error("Fail Getting absolutely all opened orders ", error);
                    f(error);
                });
        });
    }

    ORDERS_GetIncome(){
        let that = this;
        return new Promise((s,f)=>{
            that.GET_SIGNED_PARAMS(
                B52Settings.binanceSettings.income,
                that.#_accessKey,
                that.#_secretKey,
                {limit:1000}
                ).then((resp)=>{
                    B52Log.Info(`ORDERS_GetIncome. `, resp);
                    s(resp);
                }).catch(error=>{
                    B52Log.Error("Fail Getting income ", error);
                    f(error);
                });
        });
    }

    MARKET_GetSpotOrderBook(currency){
        let that = this;
        return new Promise((s,f)=>{
            that.GET_SPOT_ANON_PARAMS(
                B52Settings.binanceSettings.workbook2,
                {
                    symbol:currency,
                    limit:B52Settings.workBookDepth2
                }
                ).then((resp)=>{
                    B52Log.Info(`MARKET_GetSpotOrderBook. `, resp);
                    s(resp);
                }).catch(error=>{
                    B52Log.Error("Fail Getting spot order book for " + currency, error);
                    f(error);
                });
        });
    }
}

class B52Widget {
    #_buttons;

    constructor() {
        this.#_buttons = [];
    }

    Button(id){
        return this.#_buttons.filter(a=>a.id==id)[0];
    }

    Build() {
        let that = this;
        $('body').append(B52HTML.B52StyleDark+B52HTML.B52AreaHtml);
	    that.FillButtonsIn(B52Settings.sButtons);
        $("div.B52 button").each((i,b)=>{
            this.#_buttons.push(b);
        });
    }
	FillButtonsIn(buttons)
	{
	    buttons.forEach(b=>
		{
		   	let splitted = b.name.split('_');
			$("#B52StrategyButtons").append("<button class='B52StrategyButton' id='"+b.name+"' style='background-color:"+b.color+"' origcolor='"+b.color+"'>"+splitted[1]+" " + splitted[2] +"</button>");
		});
	}
}

class B52Service
{
    #_freq;
    #_service;
    #_name;
    Actions;
    LastTimeActive;
    static Srvs = [];
    constructor(name,freq){
        this.#_freq = freq;
        this.#_name = name;
        this.Actions = [];
        this.LastTimeActive = new Date().getTime();
    }
    Start() {
		let that = this;
        if(this.#_service!=null) this.Stop();
		this.#_service = setInterval(()=>{
			for (let i = 0; i < that.Actions.length; i++) {
 			   that.Actions[i]();
			}
            that.LastTimeActive = new Date().getTime();
		}
        , this.#_freq);
        B52Service.Srvs.push({name:this.#_name,id:this.#_service});
	}
	Stop() {
        B52Service.Srvs = B52Service.Srvs.filter(a=>a.id!=this.#_service);
		clearInterval(this.#_service);
	}
}

var b52 = new B52();



//libs afterall
var CryptoJS=CryptoJS||function(h,s){var f={},g=f.lib={},q=function(){},m=g.Base={extend:function(a){q.prototype=this;var c=new q;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=g.WordArray=m.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=s?c:4*a.length},toString:function(a){return(a||k).stringify(this)},concat:function(a){var c=this.words,d=a.words,b=this.sigBytes;a=a.sigBytes;this.clamp();if(b%4)for(var e=0;e<a;e++)c[b+e>>>2]|=(d[e>>>2]>>>24-8*(e%4)&255)<<24-8*((b+e)%4);else if(65535<d.length)for(e=0;e<a;e+=4)c[b+e>>>2]=d[e>>>2];else c.push.apply(c,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=h.ceil(c/4)},clone:function(){var a=m.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],d=0;d<a;d+=4)c.push(4294967296*h.random()|0);return new r.init(c,a)}}),l=f.enc={},k=l.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++){var e=c[b>>>2]>>>24-8*(b%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b+=2)d[b>>>3]|=parseInt(a.substr(b,
2),16)<<24-4*(b%8);return new r.init(d,c/2)}},n=l.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var d=[],b=0;b<a;b++)d.push(String.fromCharCode(c[b>>>2]>>>24-8*(b%4)&255));return d.join("")},parse:function(a){for(var c=a.length,d=[],b=0;b<c;b++)d[b>>>2]|=(a.charCodeAt(b)&255)<<24-8*(b%4);return new r.init(d,c)}},j=l.Utf8={stringify:function(a){try{return decodeURIComponent(escape(n.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return n.parse(unescape(encodeURIComponent(a)))}},
u=g.BufferedBlockAlgorithm=m.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=j.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,d=c.words,b=c.sigBytes,e=this.blockSize,f=b/(4*e),f=a?h.ceil(f):h.max((f|0)-this._minBufferSize,0);a=f*e;b=h.min(4*a,b);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(d,g);g=d.splice(0,a);c.sigBytes-=b}return new r.init(g,b)},clone:function(){var a=m.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});g.Hasher=u.extend({cfg:m.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){u.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,d){return(new a.init(d)).finalize(c)}},_createHmacHelper:function(a){return function(c,d){return(new t.HMAC.init(a,
d)).finalize(c)}}});var t=f.algo={};return f}(Math);
(function(h){for(var s=CryptoJS,f=s.lib,g=f.WordArray,q=f.Hasher,f=s.algo,m=[],r=[],l=function(a){return 4294967296*(a-(a|0))|0},k=2,n=0;64>n;){var j;a:{j=k;for(var u=h.sqrt(j),t=2;t<=u;t++)if(!(j%t)){j=!1;break a}j=!0}j&&(8>n&&(m[n]=l(h.pow(k,0.5))),r[n]=l(h.pow(k,1/3)),n++);k++}var a=[],f=f.SHA256=q.extend({_doReset:function(){this._hash=new g.init(m.slice(0))},_doProcessBlock:function(c,d){for(var b=this._hash.words,e=b[0],f=b[1],g=b[2],j=b[3],h=b[4],m=b[5],n=b[6],q=b[7],p=0;64>p;p++){if(16>p)a[p]=
c[d+p]|0;else{var k=a[p-15],l=a[p-2];a[p]=((k<<25|k>>>7)^(k<<14|k>>>18)^k>>>3)+a[p-7]+((l<<15|l>>>17)^(l<<13|l>>>19)^l>>>10)+a[p-16]}k=q+((h<<26|h>>>6)^(h<<21|h>>>11)^(h<<7|h>>>25))+(h&m^~h&n)+r[p]+a[p];l=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&f^e&g^f&g);q=n;n=m;m=h;h=j+k|0;j=g;g=f;f=e;e=k+l|0}b[0]=b[0]+e|0;b[1]=b[1]+f|0;b[2]=b[2]+g|0;b[3]=b[3]+j|0;b[4]=b[4]+h|0;b[5]=b[5]+m|0;b[6]=b[6]+n|0;b[7]=b[7]+q|0},_doFinalize:function(){var a=this._data,d=a.words,b=8*this._nDataBytes,e=8*a.sigBytes;
d[e>>>5]|=128<<24-e%32;d[(e+64>>>9<<4)+14]=h.floor(b/4294967296);d[(e+64>>>9<<4)+15]=b;a.sigBytes=4*d.length;this._process();return this._hash},clone:function(){var a=q.clone.call(this);a._hash=this._hash.clone();return a}});s.SHA256=q._createHelper(f);s.HmacSHA256=q._createHmacHelper(f)})(Math);
(function(){var h=CryptoJS,s=h.enc.Utf8;h.algo.HMAC=h.lib.Base.extend({init:function(f,g){f=this._hasher=new f.init;"string"==typeof g&&(g=s.parse(g));var h=f.blockSize,m=4*h;g.sigBytes>m&&(g=f.finalize(g));g.clamp();for(var r=this._oKey=g.clone(),l=this._iKey=g.clone(),k=r.words,n=l.words,j=0;j<h;j++)k[j]^=1549556828,n[j]^=909522486;r.sigBytes=l.sigBytes=m;this.reset()},reset:function(){var f=this._hasher;f.reset();f.update(this._iKey)},update:function(f){this._hasher.update(f);return this},finalize:function(f){var g=
this._hasher;f=g.finalize(f);g.reset();return g.finalize(this._oKey.clone().concat(f))}})})();
