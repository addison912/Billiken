let currencyPairs = ["btcusd", "ethusd", "xrpusd"];

setInterval(getPrice, 32000);

function getPrice() {
  for (let i = 0; i < currencyPairs.length; i++) {
    let pair = currencyPairs[i];
    let BITSTAMP = `https://www.bitstamp.net/api/v2/ticker/${pair}/`;
    const last = document.querySelector(`.${pair}> .last`);
    const bid = document.querySelector(`.${pair}> .bid`);
    const ask = document.querySelector(`.${pair}> .ask`);

    req = new Request(BITSTAMP);
    fetch(req)
      .then(function(response) {
        const processingPromise = response.json();
        console.log("getting price");
        return processingPromise;
      })
      .then(function(processedResponse) {
        if (processedResponse !== null) {
          console.log(processedResponse);
          last.innerHTML = `$${processedResponse.last}`;
          bid.innerHTML = `$${processedResponse.bid}`;
          ask.innerHTML = `$${processedResponse.ask}`;
        }
      });
  }
}
getPrice();
