const B52AreaHtml = `
<div>
  <button id='B52ClearChart'>Clear chart</button>
</div>
<div>
  <button id='B52Start100'>B52</button>
</div>
<div>
  <button id='B52StartBinance'>START!</button>
</div>
<div>
  Binance connection status: <span id="B52ConnectionStatus"></span>
  <button id='B52ConnectBinance'>Connect</button>
</div>
<div>
  Results:
  <div id='B52Result'></div>
</div>
`;

function B52Widget(B52Tv,theme)
{
    this.tv = B52Tv;
    this.theme = theme;
}

B52Widget.prototype.Build = function()
{
    $('body').append('<div id="B52Area" draggable="true" class="'+theme+'"></div>');
    $('#B52Area').html(B52AreaHtml);

    //events
    $("#B52ClearChart").click(() => {
        clearB52s();
      });
      $("#B52Start100").click(() => {
        runFavIndicator($("#B52Start100").text());
      });
      $("#B52StartBinance").click(() => {
        var theUniqueName = "B52 " + Date.now().toString();
        var menu = xpathGetFirstItem("//div[@data-role='button' and @data-name='alerts']");
        triggerMouseEvent(menu, "click");
        createNewAlert(theUniqueName, () => {
          grabAlertMessage(theUniqueName, (res) => {
            $("#B52Result").text(res);
            setTimeout(function() {
              deleteAlert(getCurrentCurrencyPair(), theUniqueName);
            }, 50);
          });
        });
      });
      $("#B52ConnectBinance").click(() => {
        binanceGetTickSize((size)=>{$("#B52ConnectionStatus").text(size.toString());});
      });
      Stlye();
}

B52Widget.prototype.Stlye = function()
{
    $("#B52Area.dark").css({
        "-webkit-user-drag": "element",
        "resize": "both",
        "position": "absolute",
        "right": "57px",
        "bottom": "25px",
        "border": "1px solid gray",
        "height": "350px",
        "width": "240px",
        "background-color": "black",
        "padding": "5px"
    });
  
  $("#B52Area.dark").find("div").css({
      "padding": "2px"
  });
  
  $("#B52Area.dark").find("button").css({
     "border": "1px solid gray",
     "background-color": "#3f5721"
  });
}