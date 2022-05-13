GetOrders()
{
			var that = this;
            return new Promise((s,f)=>{
                that._signedGETWithParamsRequest("https://fapi.binance.com/fapi/v1/allOrders?",
                                 that.accessKey,
                                 that.secretKey,
                                 {"symbol":that.tv.getCurrentCurrencyPair()}
                      ).then((resp)=>{
                          s(resp);
                });
            });
}
GetOpenedOrders()
{
			var that = this;
            return new Promise((s,f)=>{
                that.GetOrders.then(r=>{
					s(r.filter(a=>a.status=="NEW"));
				});
                
            });
}

GetPositions()
{
			var that = this;
            return new Promise((s,f)=>{
                that._signedGETRequest("https://fapi.binance.com/fapi/v1/allOrders?",
                                 that.accessKey,
                                 that.secretKey
                      ).then((resp)=>{
                          s(resp);
                });
            });
}

b.GetPositions().them(r=>console.log(r));

b.GetOrders().then(r=>console.log());