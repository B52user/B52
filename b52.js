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
    workBookScale:10,
	sButtons : 
	[
        {name:"B52_ZONE_0.2",color:"#006600"},
		{name:"B52_ZONE_0.5",color:"#006600"},
		{name:"B52_ZONE_1.0",color:"#006600"},
        {name:"B52_NOW_0.2",color:"#cc3300"},
		{name:"B52_NOW_0.5",color:"#cc3300"},
		{name:"B52_NOW_1.0",color:"#cc3300"},
        {name:"B52_TAKE_1",color:"#000099"}
	],
    positionsServiceIntervalMS : 1000,
    ordersSerciceIntervalMS : 1000,
    workbookSerciceIntervalMS : 1000,
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
    workBookDepth:100,
    binanceSettings:{
        serverUrl:"https://fapi.binance.com/",
        orderUrl:"fapi/v1/order",
        allOpenedOrders:"fapi/v1/allOpenOrders",
        currentPrice: "fapi/v1/ticker/24hr",
        openedOrders:"fapi/v1/openOrders",
        positions:"fapi/v1/positionRisk",
        exchangeInfo:"fapi/v1/exchangeInfo",
        balance:"fapi/v1/balance",
        workbook: "fapi/v1/depth",
        income:"fapi/v1/income"
    },
    workbookColors:{
        ask:"rgba(165, 42, 42, .4)",
        bid:"rgba(0, 107, 60, .4)"
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
			padding-top:5px;
			padding-bottom:5px;
			font-size:15px;
			width:51px;
		}
		button.B52BigButton {
			padding-top:0px;
			padding-bottom:0px;
			font-size:15px;
			width:70px;
			height:42px;
		}
        button.B52TabButton
        {
            border:1px solid gray;
            width: 50px;
            height:30px;
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
            width:270px;
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
            height:23px;
            width:23px;
            text-align: center;
            font-size:17px;
            background:black;
            padding-top:0px;
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
            height:100%;
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
            background:black;
            padding-top:0px;
        }
	</style>
    `,
	B52AreaHtml : `
    <div id="B52CloseOpen" class="B52" style="margin:-2px;height:100px;width:30px;background-color:#404040;display:flex;margin-right:2px;right:355px;bottom:2px;">
            <button id="B52CloseOpenButton" style="background-color:transparent;border:none;width:30px;height:120px;display:flex;margin:0px;padding:0px;" closed="false">
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 270.774 270.775" style="margin:auto">
                    <path fill="white" d="M239.326,139.072c-8.12-8.129-22.284-8.129-30.404,0l-56.894,56.883l3.086-33.529c0.01-0.125,0.022-0.252,0.022-0.378
                        c0.702-6.54-1.503-12.887-6.121-17.507c-8.12-8.11-22.271-8.11-30.408,0c-2.688,2.688-4.611,6.11-5.58,9.917
                        c-0.066,0.204-0.113,0.414-0.155,0.624c-0.469,2.127-0.603,4.326-0.404,6.552l-4.467,83.623
                        c-1.338,7.033,0.851,14.195,5.893,19.244c4.068,4.069,9.377,6.146,15.404,6.237c0.21,0.021,0.42,0.036,0.636,0.036
                        c0.097,0,0.194,0,0.289-0.005l85.046-4.552c2.114,0.199,4.257,0.078,6.282-0.341c0.473-0.053,0.93-0.174,1.36-0.348
                        c3.6-0.997,6.851-2.865,9.433-5.454c8.378-8.377,8.378-22.021,0-30.409c-4.565-4.566-10.985-6.781-17.49-6.116
                        c-0.127,0-0.258,0.011-0.39,0.021l-32.199,2.966l57.072-57.065C247.709,161.089,247.709,147.445,239.326,139.072z"/>
                    <path fill="white" d="M115.66,108.334c-0.011,0.131-0.021,0.26-0.021,0.389c-0.704,6.535,1.512,12.879,6.124,17.497
                        c4.063,4.058,9.459,6.293,15.208,6.293c5.745,0,11.142-2.236,15.198-6.293c2.705-2.698,4.625-6.111,5.581-9.891
                        c0.062-0.209,0.116-0.419,0.163-0.635c0.473-2.123,0.603-4.32,0.404-6.556l4.473-83.621c1.343-7.031-0.836-14.197-5.89-19.239
                        c-4.085-4.089-9.629-6.535-15.444-6.247c-0.288-0.031-0.6-0.036-0.883-0.026L55.526,4.553c-2.1-0.184-4.212-0.076-6.229,0.339
                        c-0.501,0.052-0.984,0.176-1.441,0.36c-3.596,1-6.837,2.871-9.406,5.44c-8.381,8.386-8.381,22.027,0,30.402
                        c4.569,4.569,10.965,6.795,17.443,6.124c0.145,0,0.289-0.011,0.436-0.023l32.208-2.966l-57.074,57.066
                        c-4.065,4.053-6.302,9.449-6.302,15.195c0,5.747,2.237,11.149,6.297,15.208c4.063,4.063,9.459,6.299,15.205,6.299
                        c5.743,0,11.14-2.236,15.203-6.294l56.887-56.893L115.66,108.334z"/>
                </svg>
            </button>
	</div>
	<div id="B52Area1" class="B52" style="right:72px;bottom:2px;border:1px solid gray;height:96px;width:285px;border-right:none;display:flex;">
		<div id="B52StrategyButtons" style="overflow-y: auto;">
		</div>
	</div>
	<div id="B52Area2" class="B52" style="right:2px;bottom:2px;border:1px solid gray;height:300px;width:70px;">
		<div id="B52ExpandButton" style="margin:1px;height:35px;width:70px;background-color:black;display:flex">
            <div>
                <button style="width:67px;display:flex" id="B52Window2Open">
                    <div style="height:28px;width:28px">
                        <svg version="1.1" x="0px" y="0px" viewBox="0 0 270.774 270.775" style="margin:auto">
                            <path fill="white" d="M239.326,139.072c-8.12-8.129-22.284-8.129-30.404,0l-56.894,56.883l3.086-33.529c0.01-0.125,0.022-0.252,0.022-0.378
                                c0.702-6.54-1.503-12.887-6.121-17.507c-8.12-8.11-22.271-8.11-30.408,0c-2.688,2.688-4.611,6.11-5.58,9.917
                                c-0.066,0.204-0.113,0.414-0.155,0.624c-0.469,2.127-0.603,4.326-0.404,6.552l-4.467,83.623
                                c-1.338,7.033,0.851,14.195,5.893,19.244c4.068,4.069,9.377,6.146,15.404,6.237c0.21,0.021,0.42,0.036,0.636,0.036
                                c0.097,0,0.194,0,0.289-0.005l85.046-4.552c2.114,0.199,4.257,0.078,6.282-0.341c0.473-0.053,0.93-0.174,1.36-0.348
                                c3.6-0.997,6.851-2.865,9.433-5.454c8.378-8.377,8.378-22.021,0-30.409c-4.565-4.566-10.985-6.781-17.49-6.116
                                c-0.127,0-0.258,0.011-0.39,0.021l-32.199,2.966l57.072-57.065C247.709,161.089,247.709,147.445,239.326,139.072z"/>
                            <path fill="white" d="M115.66,108.334c-0.011,0.131-0.021,0.26-0.021,0.389c-0.704,6.535,1.512,12.879,6.124,17.497
                                c4.063,4.058,9.459,6.293,15.208,6.293c5.745,0,11.142-2.236,15.198-6.293c2.705-2.698,4.625-6.111,5.581-9.891
                                c0.062-0.209,0.116-0.419,0.163-0.635c0.473-2.123,0.603-4.32,0.404-6.556l4.473-83.621c1.343-7.031-0.836-14.197-5.89-19.239
                                c-4.085-4.089-9.629-6.535-15.444-6.247c-0.288-0.031-0.6-0.036-0.883-0.026L55.526,4.553c-2.1-0.184-4.212-0.076-6.229,0.339
                                c-0.501,0.052-0.984,0.176-1.441,0.36c-3.596,1-6.837,2.871-9.406,5.44c-8.381,8.386-8.381,22.027,0,30.402
                                c4.569,4.569,10.965,6.795,17.443,6.124c0.145,0,0.289-0.011,0.436-0.023l32.208-2.966l-57.074,57.066
                                c-4.065,4.053-6.302,9.449-6.302,15.195c0,5.747,2.237,11.149,6.297,15.208c4.063,4.063,9.459,6.299,15.205,6.299
                                c5.743,0,11.14-2.236,15.203-6.294l56.887-56.893L115.66,108.334z"/>
                        </svg>
                    </div>
                    <div>
                    <div style="height:14px" id="B52Balance">
                    </div>
                    <div style="height:14px" id="B52BalanceChange">
                    </div>
                </button>
            </div>
		</div>
        <div>
            <button id='B52NLStop' class="B52BigButton" style="background-color:green">STOP NO L.</button>
		</div>
        <div>
            <button id='B52COrders' class="B52BigButton" style="background-color:#000099">C.ORDS</button>
		</div>
        <div>
            <button id='B52SellPart' class="B52BigButton" style="background-color:green">FIX</button>
		</div>
		<div>
            <button id='B52SellAll' class="B52BigButton" style="background-color:green">FIXALL</button>
		</div>
		<div>
			<button id='B52StartBinance' class="B52BigButton" style="background-color:maroon">START!</button>
		</div>
		<div>
			<button id='B52ClearChart' class="B52BigButton" style="background-color:#000099">CLEAR</button>
		</div>
	</div>
    <div id="B52Tabs" class="B52" style="margin:1px;height:200px;width:312px;background:rgba(0, 0, 0, .6);right:75px;bottom:102px;" hid="true">
        <div style="display:flex;height:30px;width:100%"">
            <button class="B52TabButton" style="background:rgba(0, 162, 11, .5)" id="B52TabButton1">Ords</button>
            <button class="B52TabButton" style="background:rgba(202, 86, 0, .5)" id="B52TabButton2">Risk</button>
            <button class="B52TabButton" style="background:rgba(0, 3, 202, .5)" id="B52TabButton3">Inc</button>
            <button class="B52TabButton" style="background:rgba(0, 0, 0, .5)" id="B52TabButton4">Log</button>
        </div>
        <div style="height:170px;width:100%;border:1px solid gray;">
            <div class="B52Tab" id="B52Tab1">Some 1111 interesting text</div>
            <div class="B52Tab" id="B52Tab2" style="display:flex">
                <div style="width:170px;overflow-y:auto;height:100%;" id="B52PosOpenedList">
                Positions:
                </div>
                <div style="width:180px;">
                    <div style="width:100%;display:flex">Orders: 
                        <button id="B52RenewAllPositions" style="width:20px;height:20px;background:black;">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24">
                                <path fill="white" d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"/>
                            </svg>
                        </button>
                    </div>
                    <div style="width:100%;height:144px;overflow-y: auto;" id="B52OrdersOpenedList">
                    </div>
                </div>
            </div>
            <div class="B52Tab" id="B52Tab3" style="display:flex">
                <div style="width:170px;overflow-y:auto;height:100%;" id="B52Transactions">
                    Transactions:
                </div>
                <div style="width:100px;overflow-y:auto;height:100%;" id="B52IncomeDays">
                    Income by day:
                </div>
                <div style="width:30px;height:30px;">
                    <button id="B52RenewTransactions" style="width:40px;height:30px;background:black;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                            <path fill="white" d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="B52Tab" id="B52Tab4">Some 4444 interesting text</div>
        </div>
    </div>
    <div id="B52Workbook" class="B52" style="margin:1px;height:400px;width:160px;background:rgba(0, 0, 0, .6);right:5px;bottom:308px;" hid="true">
        <div class="B52WorkbookContainer">
            <table id="B52WorkBookTable">
            </table>
        </div>
    </div>
    `
}

var B52Log = {
    _log:[],
    _eventLogChanged:[],
    Info : (message,obj=null)=>{
        B52Log._log.push({type:"info",mess:message,obj:obj});
        //if(obj!=null)console.log(obj);
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
    }

    static groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
             const key = keyGetter(item);
             const collection = map.get(key);
             if (!collection) {
                 map.set(key, [item]);
             } else {
                 collection.push(item);
             }
        });
        return map;
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
        for(let i=1;i<5;i++)
        {
            $(this.#_w.Button("B52TabButton"+i.toString())).mouseup(() => that.BUTTON_B52TabButton(i));
        }
        $("#B52StrategyButtons").on("click",".B52StrategyButton",e=>{that.BUTTON_B52Strategy(e);})
        $("#B52RenewAllPositions").mouseup(()=>{that.BUTTON_B52RenewAllOrders();});
        $("#B52RenewTransactions").mouseup(()=>{that.BUTTON_B52RenewTransactions();});
    }

    BUTTON_B52RenewTransactions(){
        let that = this;
        that.Binance.ORDERS_GetIncome().then(income=>{
            $("#B52Transactions").html("Transactions:");
            $("#B52IncomeDays").html("Income by day:");
            //filter by "COMMISSION" and "REALIZED_PNL" then append date then draw
            var curCoin = "";
            var curCoinDate = "";
            var curCoinSum = 0.0;
            var curDayDate = "";
            var curDaySum = 0.0;
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
                            <div class="B52RiskPosItem" style="background:${col};width:100px;">
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
                    <div class="B52RiskPosItem" style="background:${col};width:140px;overflow:hidden;white-space: nowrap;">
                        $${curCoinSum.toFixed(2)} ${curCoin} ${curCoinDate}
                    <div>`;
                $("#B52Transactions").prepend(control);
                let col2 = B52Settings.orderColors.filter(a=>a.name=="LIMIT"+(curDaySum>0?"BUY":"SELL"))[0].col;
                let control2 = `
                    <div class="B52RiskPosItem" style="background:${col2};width:100px;">
                            ${curDayDate} $${curDaySum.toFixed(2)}
                    <div>`;
                $("#B52IncomeDays").prepend(control2);
        });
    }

    BUTTON_B52RenewAllOrders() {
        let that = this;
        that.Binance.ORDERS_GetAllOpenedOrders().then(ords=>{
            $("#B52OrdersOpenedList").empty();
            ords.forEach((o)=>{
                let col = B52Settings.orderColors.filter(a=>a.name=="LIMIT"+o.side)[0].col;
                let control = `
                <div class="B52RiskPosItem" style="background:${col}">
                    <div style="width:18px;">
                        <button id="B52${o.clientOrderId}OC">x</button>
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
                        
                        if(sets.length) B52Tv.SetStrategySettings(sets);
                    });
                });
            });
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
        var closed = $("#B52CloseOpenButton").attr("closed")=="true";
        var closed2 = $("#B52Tabs").attr("hid")=="true";
        if (closed)
        {
            //open
            $("#B52CloseOpenButton").attr("closed","false");
            $("#B52CloseOpen").css("right","355px");
            $("#B52CloseOpen").css("bottom","2px");
            $("#B52Area1").show();
            $("#B52Area2").show();
            if(!closed2)
            {
                $("#B52Tabs").show();$("#B52Workbook").show();
                $("#B52TabButton1").mouseup();
            }
        }
        else
        {
            //close
            $("#B52CloseOpenButton").attr("closed","true");
            $("#B52CloseOpen").css("right","2px");
            $("#B52CloseOpen").css("bottom","2px");
            $("#B52Area1").hide();
            $("#B52Area2").hide();
            $("#B52Tabs").hide();$("#B52Workbook").hide();
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
        var closed = $("#B52Tabs").attr("hid")=="true";
        
        if(!closed)
        {
            $("#B52Tabs").attr("hid","true");
            $("#B52Tabs").hide();
            $("#B52Workbook").hide();
        }
        else
        {
            $("#B52Tabs").attr("hid","false");
            $("#B52Tabs").show();
            $("#B52Workbook").show();
            $("#B52TabButton1").mouseup();
        }
    }

    BUTTON_B52TabButton(num){
        $(".B52Tab").hide();
        $("#B52Tab"+num).show();
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
        this.#_srvs["Workbook"] = wSrv;
    }

    SERVICE_MakeShitService(){
        let that = this;
        let shitService = new B52Service(200);
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
        return shitService;
    }

    #_openedPositions_lock;
    Fixes = [];
    SERVICE_MakeRiskService(){
        let that = this;
        this.#_openedPositions_lock = false;
        let risksrv = new B52Service(B52Settings.positionsServiceIntervalMS);
        risksrv.Actions.push(()=>{
            if(!that.#_openedPositions_lock)
                {
                    that.#_openedPositions_lock = true;
                    that.Binance.ORDERS_GetAllPositions().then(pos=>{
                        that.Binance.OpenedPositions = pos;
                        that.#_openedPositions_lock = false;
                        //run events
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
                        if(!that.Fixes.length) that.Fixes = that.CALC.GetTakes(B52Settings.numberOfTakes,B52Settings.minnotal,amount,tick,entryPrice);
                        $("#B52SellPart").text("FIX ("+that.Fixes.length+") ("+ ((profit-charge)/that.Fixes.length).toFixed(2) + ")");
                    });  
                    
                    let colorFilter = (profit-charge)>0?"green":"red";
                    let colorProp = Math.abs((profit-charge)/entryPrice*Math.abs(amount));
                    let pickAcolorForIt = B52Settings.redToGreen.filter(a=>a.dir==colorFilter&&colorProp>=a.perc).sort((a,b)=>a.perc>b.perc?1:-1)[0].col;
                    $("#B52SellAll").css("background-color",pickAcolorForIt);
                    $("#B52SellAll").css("color","white");
                    $("#B52SellPart").css("background-color",pickAcolorForIt);
                    $("#B52SellPart").css("color","white");
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
            });
        });
        that.Binance._eventOpenPositionsChanged.push(()=>{
            let riskOpened = that.Binance.OpenedPositions.filter(a=>parseFloat(a.positionAmt)!=0||parseFloat(a.unRealizedProfit)!=0||parseFloat(a.entryPrice)!=0);
            $("#B52PosOpenedList").html("Positions:");
            riskOpened.forEach((p)=>{
                let col = B52Settings.orderColors.filter(a=>a.name=="LIMIT"+(parseFloat(p.unRealizedProfit)>0?"BUY":"SELL"))[0].col;
                let control = `
                <div class="B52RiskPosItem" style="background:${col}">
                    <div style="width:05px;">
                        <button id="B52${p.symbol}POS">x</button>
                    </div>
                    <div style="margin-top:5px;width:110px">
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
        let ordService = new B52Service(B52Settings.ordersSerciceIntervalMS);
        ordService.Actions.push(()=>{
            if(!that.#_openedOrders_lock)
                {
                    that.#_openedOrders_lock = true;
                    B52Tv.GetCurrentCurrencyPair().then(currency=>{
                        that.Binance.ORDERS_GetOpenOrders(currency).then(ords=>{
                            that.Binance.OpenedOrders = ords;
                            that.#_openedOrders_lock = false;
                            //run events
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
                let ordersOpened = that.Binance.OpenedOrders.sort((a,b)=>parseFloat((a.price=="0"?a.stopPrice:a.price))>parseFloat((b.price=="0"?b.stopPrice:b.price))?-1:1);
                $("#B52Tab1").empty();
                ordersOpened.forEach((o)=>{
                    let col = B52Settings.orderColors.filter(a=>a.name==o.origType+o.side)[0].col;
                    let control = `
                    <div class="B52OrderItem" style="background:${col}">
                        <div style="width:25px;">
                            <button id="B52${o.clientOrderId}">x</button>
                        </div>
                        <div style="margin-top:5px;width:200px">
                            ${(o.price=="0"?o.stopPrice:o.price)+" "+o.origQty}
                        </div>
                        <div>
                            <button id="B52${o.clientOrderId}Line">*</button>
                        </div>
                    <div>`;
                    $("#B52Tab1").append(control);
                    let ordid = o.orderId;
                    $("#B52"+o.clientOrderId).mouseup(()=>that.Binance.ORDERS_ChancelSingleOrder(ordid,currency));
                    $("#B52"+o.clientOrderId+"Line").mouseup(()=>B52Tv.DrawOrderLine(o));
                });
            });
        });
        return ordService;
    }

    #_workbook_lock;
    SERVICE_MakeWorBookService(){
        let that = this;
        this.#_workbook_lock = false;
        let wbSrv = new B52Service(B52Settings.workbookSerciceIntervalMS);
        wbSrv.Actions.push(()=>{
            if(!that.#_workbook_lock)
                {
                    that.#_workbook_lock = true;
                    that.Binance.MARKET_GetCurrentOrderBook().then(wb=>{
                        that.Binance.WorkBook = wb;
                        that.#_workbook_lock = false;
                        //run events
                        that.Binance._eventWorkbookChanged.forEach(a=>a());
                    });
                }
        });
        
        that.Binance._eventWorkbookChanged.push(()=>{
            let that = b52;
            B52Tv.GetCurrentCurrencyPair().then(currency=>{
                that.Binance.MARKET_GetPriceFormatPrecision(currency).then(form=>{
                    that.Binance.MARKET_GetTickSize(currency).then(tick=>{
                        console.log(tick);
                        let workbook = that.Binance.WorkBook;
                        let scale = B52Settings.workBookScale;
                        let step = parseFloat(form)*scale;
                        let currPrice = parseFloat(workbook.asks[0][0]);
                        let theTick = tick<1?tick.toString().length-2:0;
                        $("#B52WorkBookTable").empty();
                        while(currPrice<parseFloat(workbook.asks[workbook.asks.length-1][0]))
                        {
                            //do red business
                            let prevPrice = currPrice;
                            currPrice+=step;
                            let sum = workbook.asks.filter(a=>parseFloat(a[0])<=currPrice&&parseFloat(a[0])>prevPrice).map(b=>parseFloat(b[1])).reduce((c,d)=>c+d);
                            let control = `
                            <tr class="B52WBrow" style="background:${B52Settings.workbookColors.ask}">
                                <td>${sum.toFixed(theTick)}</td>
                                <td>${currPrice}</td>
                            <tr>`;
                            $("#B52WorkBookTable").append(control);
                        }
                        currPrice = parseFloat(workbook.bids[0][0]);
                        while(currPrice<parseFloat(workbook.bids[workbook.bids.length-1][0]))
                        {
                            //do red business
                            let prevPrice = currPrice;
                            currPrice+=step;
                            let sum = workbook.bids.filter(a=>parseFloat(a[0])<=currPrice&&parseFloat(a[0])>prevPrice).map(b=>b[1]).reduce((c,d)=>c+d);
                            let control = `
                            <tr class="B52WBrow" style="background:${B52Settings.workbookColors.bid}">
                                <td>${sum.toFixed(theTick)}</td>
                                <td>${currPrice}</td>
                            <tr>`;
                            $("#B52WorkBookTable").append(control);
                        }
                    });
                });
            });
                
        });
        return wbSrv;
    }

    CALC = {
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
        }
    }
}

class B52Tv {
    constructor() {
    }
    static TriggerMouseEvent(node, eventType) {
        var clickEvent = document.createEvent('MouseEvents');
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
        var items = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
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
                B52Tv.WaitForElement(B52Settings.tvXpath.b52SettingButton).then((e2)=>{
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
                let firstInput = "//div[./div[text()='"+sets[0].label+"']]/following-sibling::div[1]//input";
                B52Tv.WaitForElement(firstInput).then(e1=>{
                    for(let i=0;i<sets.length;i++)
                    {
                        let input = "//div[./div[text()='"+sets[i].label+"']]/following-sibling::div[1]//input";
                        let inputNode = B52Tv.XpathGetFirstItem(input);
                        B52Tv.SetReactValue(inputNode,sets[i].value);
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
    #_exchangeInfo;
    WorkBook;
    _eventWorkbookChanged;

    constructor() {
	    this.#_exchangeInfo = null;
        this.OpenedPositions = null;
        this.OpenedOrders = null;
        this._eventOpenPositionsChanged = [];
        this._eventOpenOrdersChanged = [];
        this._eventWorkbookChanged = [];
        this.WorkBook = null;
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
            that.GetPriceFormatting().then(f=>{
                let closeParams = {
                    side:direction,
                    quantity:Math.abs(position),
                    stopPrice:priceToToStop.toFixed(f.length-2),
                    type:"STOP_MARKET",
                    symbol:B52Tv.GetCurrentCurrencyPair(),
                    timeInForce:"GTC"
                };
                that.POST_SIGNED_PARAMS(
                    B52Settings.binanceSettings.orderUrl,
                    that.#_accessKey,
                    that.#_secretKey,
                    closeParams).then((resp)=>{
                        B52Log.Info("No Loss set sucess. ", resp);
                    });
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
            let pos
            if(prec.length!=1)
            {

            }
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
                });
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
                    B52Log.Info("MARKET_GetSize couldn't find symbol in exchange info: "+currency);
                    f();
                }
                else
                {
                    var theMinSize = parseFloat(theSymb[0].filters.filter(a => a.filterType == 'LOT_SIZE')[0].stepSize);
                    s(theMinSize);
                }
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
                    var tickSize = parseFloat(theSymb[0].filters.filter(a => a.filterType == 'PRICE_FILTER')[0].tickSize);
                    s(tickSize.toString());
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
                        .catch(error => B52Log.Info("DELETE_SIGNED_PARAMS ERROR: ",error));
            })
            .catch(error => B52Log.Info("DELETE_SIGNED_PARAMS ERROR: ",error));
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
                        .catch(error => B52Log.Info("POST_SIGNED_PARAMS ERROR: ",error));
            })
            .catch(error => B52Log.Info("POST_SIGNED_PARAMS ERROR: ",error));
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
                .catch(error => B52Log.Info("GET_ANON_PARAMS ERROR: ",error));
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
                        .catch(error => B52Log.Info("GET_SIGNED_PARAMS ERROR: ",error));
            })
            .catch(error => B52Log.Info("GET_SIGNED_PARAMS ERROR: ",error));
        });
    }

    ORDERS_GetBalance() {
            var that = this;
            return new Promise((s,f)=>{
                that.GET_SIGNED_PARAMS(B52Settings.binanceSettings.balance,
                    that.#_accessKey,
                    that.#_secretKey).then((resp)=>{
                        s(resp.filter(a=>a.asset=="USDT")[0].balance);
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
        var that = this;
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
		   	var splitted = b.name.split('_');
			$("#B52StrategyButtons").append("<button class='B52StrategyButton' id='"+b.name+"' style='background-color:"+b.color+"' origcolor='"+b.color+"'>"+splitted[1]+" " + splitted[2] +"</button>");
		});
	}
}

class B52Service
{
    #_freq;
    #_service;
    Actions;
    constructor(freq){
        this.#_freq = freq;
        this.Actions = [];
    }
    Start() {
		let that = this;
		this.#_service = setInterval(()=>{
			for (let i = 0; i < that.Actions.length; i++) {
 			   that.Actions[i]();
			}
		}
        , this.freq);
	}
	Stop() {
		clearInterval(this.#_service);
	}
}

var b52 = new B52();
b52.Binance.SetAccessKey(B52Settings.accessKey1);
b52.Binance.SetSecretKey(B52Settings.secretKey1);


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
