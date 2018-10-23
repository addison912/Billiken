const WIRE_URL =
  "https://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey=5ecf03c07ae84f529f59f11e896fc847";
const headline = document.getElementsByClassName("headline");
const time = document.getElementsByClassName("time");

//parse elapsed time
function elapsedTime(publishedAt) {
  let currentDate = new Date();
  let timestamp = new Date(publishedAt);
  let elapsedTime = currentDate - timestamp;
  elapsedTime = Math.round((elapsedTime /= 60000));
  return elapsedTime;
}

let req = new Request(WIRE_URL);
fetch(req)
  .then(function(response) {
    const processingPromise = response.json();
    console.log("getting news");
    return processingPromise;
  })
  .then(function(processedResponse) {
    for (i = 0; i <= 20; i++) {
      let elapsed = elapsedTime(processedResponse.articles[i].publishedAt);
      if (elapsed < 60) {
        time[i].innerHTML = `${elapsed}m ago`;
      } else if (elapsed < 1440) {
        let hours = Math.floor(elapsed / 60);
        time[i].innerHTML = `${hours}h ago`;
      } else {
        let days = Math.floor(elapsed / 1440);
        time[i].innerHTML = `${days}d ago`;
      }
      news = `<br><h1>${processedResponse.articles[i].title}</h1>`;
      headline[i].innerHTML += news;
      headline[i].setAttribute("href", `${processedResponse.articles[i].url}`);
    }
  });
