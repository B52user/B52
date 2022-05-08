const accessKey1 = "MlmTyzzGbiFSDNyrI745NboXTBS9AdKXwxLMXd00aUWpWKPcI8hiRIfDpFv0oI8o";
const secretKey1 = "u3fNSMJlYwTMwCOb3X5Bvp3xrpiogEN1MyQbDdtYS3lisd2VB6aKV8KjCaGmgFIg";
params = null;
var dummyMakeSTopLimit = `[{'side':'BUY','stopPrice':'32000','symbol':'BTCUSDT','type':'STOP_MARKET'},{'side':'BUY','stopPrice':'32500','symbol':'BTCUSDT','type':'STOP_MARKET'}]`;

var theSingleOrder = `{"side":"BUY","stopPrice":"13.510","symbol":"WAVESUSDT","type":"STOP_MARKET","quantity":"0.5","timeInForce":"GTC"}`;

function signedPOSTRequest_simple(url,accessKey,secretKey,params)
{
	return new Promise((s,f)=>{
		fetch("https://fapi.binance.com/fapi/v1/time")
		.then(response => response.json())
		.then(timer => {
				var  timeCode = timer.serverTime;
				var queryString = "timestamp=" + timeCode;
				params["timestamp"] = timeCode;
				var hash = CryptoJS.HmacSHA256(jQuery.param(params),secretKey);
				params["signature"] = hash.toString();
				var toAdd = jQuery.param(params);
				fetch(url+toAdd,{method:"post",headers:{"X-MBX-APIKEY":accessKey}})
					.then(response => response.json())
					.then(resp => {
						s(resp);
					})
					.catch(error => console.log(error));
		})
		.catch(error => console.log(error));
	});
}
signedPOSTRequest_simple("https://fapi.binance.com/fapi/v1/order?",accessKey1,secretKey1,JSON.parse(theSingleOrder)).then((resp)=>{
	console.log(resp);
});

function signedPOSTRequest(url,accessKey,secretKey,params)
    {
		return new Promise((s,f)=>{
			fetch("https://fapi.binance.com/fapi/v1/time")
			.then(response => response.json())
			.then(timer => {
					var  timeCode = timer.serverTime;
					var queryString = "timestamp=" + timeCode;
					params["timestamp"] = timeCode;
					console.log("Pure Params:");
					console.log(params);
					console.log("JQuery to Params:");
					console.log(jQuery.param(params));
					var hash = CryptoJS.HmacSHA256(jQuery.param(params),secretKey);
					params["signature"] = hash.toString();
					var toAdd = jQuery.param(params);
					console.log("To Add:");
					console.log(toAdd);
					console.log("JSON stringlify:");
					console.log(JSON.stringify(params));
					fetch(url+toAdd,{method:"post",headers:{"X-MBX-APIKEY":accessKey},
						body:JSON.stringify(params)})
						.then(response => response.json())
						.then(resp => {
							s(resp);
						})
						.catch(error => console.log(error));
			})
			.catch(error => console.log(error));
		});
    }
signedPOSTRequest("https://fapi.binance.com/fapi/v1/batchOrders?",accessKey1,secretKey1,{
		"batchOrders":dummyMakeSTopLimit
	}).then((resp)=>{
	console.log(resp);
});


function signedGETRequest(url,params,accessKey,secretKey)
    {
		return new Promise((s,f)=>{
			fetch("https://fapi.binance.com/fapi/v1/time")
			.then(response => response.json())
			.then(timer => {
					var  timeCode = timer.serverTime;
					var queryString = params + "&timestamp=" + timeCode;
					if(queryString.charAt(0)=='&') queryString = queryString.substring(1);
					var hash = CryptoJS.HmacSHA256(queryString,secretKey);
					var toAdd = queryString + "&signature=" + hash;
					fetch(url+toAdd,{method:"get",headers:{"X-MBX-APIKEY":accessKey}})
						.then(response => response.json())
						.then(resp => {
							s(resp);
						})
						.catch(error => console.log(error));
			})
			.catch(error => console.log(error));
		});
    }

signedGETRequest("https://fapi.binance.com/fapi/v1/batchOrders?","batchOrders=%5B%7B%22side%22%3A%20%22BUY%22%2C%22stopPrice%22%3A%20%2235600%22%2C%22symbol%22%3A%20%22BTCUSDT%22%2C%22type%22%3A%20%22STOP_MARKET%22%7D%2C%7B%22side%22%3A%20%22BUY%22%2C%22stopPrice%22%3A%20%2235610%22%2C%22symbol%22%3A%20%22BTCUSDT%22%2C%22type%22%3A%20%22STOP_MARKET%22%7D%5D",accessKey1,secretKey1).then((resp)=>{
	console.log(resp);
});


var key1 = "";
var key2 = "";
function connect(key1,key2)
{
	var timeTable = $.getJSON("https://fapi.binance.com/api/v3/time",(obj)=>{
		console.log(obj);
		var accRequest = "https://api.binance.com/api/v3/account?timestamp={{timestamp}}&signature={{signature}}";
		debugger;
		$.ajaxSetup({
			headers:{
				"X-MBX-APIKEY":"key"
			}
		});
	});
}





var a = "test";
var s = "test";

function signIt(apikey,secret)
{
	return new Promise((s,f)=>{
		$.ajax({
			beforeSend: function(req){
				req.setRequestHeader("X-MBX-APIKEY", apikey);
			},
			dataType: "json",
			url: "https://api.binance.com/api/v3/time",
			success: (watch)=>
			{
				var queryString = "timestamp=" + watch.serverTime;
				var hash = CryptoJS.HmacSHA256(queryString,secret);
				s(queryString + "&signature=" + hash);
			}
		  })
		 .done(function() {
			console.log( "second success" );
		  })
		  .fail(function(err) {
			console.log("Error1:");
			console.log(err);
		  })
		  .always(function() {
			console.log( "complete" );
		  });
	});
}

signIt(a,s).then((toadd)=>{
	console.log(toadd);
	var url = "https://api.binance.com/api/v3/account?"+toadd;
	$.ajax({
		beforeSend: function(req){
			req.setRequestHeader("X-MBX-APIKEY", apikey);
		},
		dataType: "json",
		url: url,
		success: (resp)=>
		{
			console.log(resp);
		}
	})
	.done(function() {
		console.log( "second success" );
	  })
	  .fail(function(err) {
		console.log("Error2:");
		console.log(err);
	  })
	  .always(function() {
		console.log( "complete" );
	  });
},(err)=>{
	console.log("Error3:");
	console.log(err);
});

var secret = 'mySecret';
var queryString = 'timestamp=' + Date.now();
var hash = CryptoJS.HmacSHA256(queryString,secret);
var url = 'https://api.binance.com/api/v3/account?'+ queryString + '&signature=' +hash;

$('.botonOrden').click(function(){
    $.ajax({
        beforeSend: function(req){
            req.setRequestHeader("X-MBX-APIKEY", apiKey);
        },
        type: 'GET',
        url: url
    })
    .done(function() {
        console.log("success");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
});

pm.sendRequest('https://api.binance.com/api/v3/time', function (err, res) {
        console.log('Timestamp Response: '+res.json().serverTime);
        pm.expect(err).to.not.be.ok;
        var timestamp = res.json().serverTime;

        postman.setEnvironmentVariable('timestamp',timestamp)  
        postman.setGlobalVariable('timestamp',timestamp) 

        let paramsObject = {};

        const binance_api_secret = 'YOUR_API_SECRET';

        const parameters = pm.request.url.query;

        parameters.map((param) => {
            if (param.key != 'signature' && 
                param.key != 'timestamp' && 
                !is_empty(param.value) &&
                !is_disabled(param.disabled)) {
                    paramsObject[param.key] = param.value;
            }
        })
        
        Object.assign(paramsObject, {'timestamp': timestamp});

        if (binance_api_secret) {
            const queryString = Object.keys(paramsObject).map((key) => {
                return `${encodeURIComponent(key)}=${paramsObject[key]}`;
            }).join('&');
            console.log(queryString);
            const signature = CryptoJS.HmacSHA256(queryString, binance_api_secret).toString();
            pm.environment.set("signature", signature);
        }

        function is_disabled(str) {
            return str == true;
        }

        function is_empty(str) {
            if (typeof str == 'undefined' ||
                !str || 
                str.length === 0 || 
                str === "" ||
                !/[^\s]/.test(str) ||
                /^\s*$/.test(str) ||
                str.replace(/\s/g,"") === "")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
); 
