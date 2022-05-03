function BinanceAdapter(B52Tv)
{
    this.tv = B52Tv;
}

BinanceAdapter.prototype.GetTickSize = function(resultFunc)
{
    var url = "https://fapi.binance.com/fapi/v1/exchangeInfo?symbol=" + tv.getCurrentCurrencyPair();
    $.getJSON(url, function(tiketInfo) {
        var theMinSize = parseFloat(tiketInfo.symbols[0].filters.filter(a => a.filterType == 'PRICE_FILTER')[0].tickSize);
        resultFunc(theMinSize)
    });
}