const BITSTAMP_XRPUSD = "https://www.bitstamp.net/api/v2/ticker/xrpusd/";
const XRPlast = document.querySelector(".last");
const XRPbid = document.querySelector(".bid");
const XRPask = document.querySelector(".ask");

setInterval(getPrice, 12000);

function getPrice() {
  req = new Request(BITSTAMP_XRPUSD);
  fetch(req)
    .then(function(response) {
      const processingPromise = response.json();
      console.log("getting price");
      return processingPromise;
    })
    .then(function(processedResponse) {
      if (processedResponse !== null) {
        console.log(processedResponse);
        XRPlast.innerHTML = `$${processedResponse.last}`;
        XRPbid.innerHTML = `$${processedResponse.bid}`;
        XRPask.innerHTML = `$${processedResponse.ask}`;
      }
    });
}

getPrice();
