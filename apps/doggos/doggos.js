const DOGGO_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.getElementById("doggo-pic");

function addNewDoggo() {
  const dogPromise = fetch(DOGGO_URL);
  dogPromise
    .then(function(response) {
      const processingPromise = response.json();
      console.log("getting dog");
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      doggos.setAttribute("src", img.src);
      doggos.style.visibility = "visible";
    });
}

addNewDoggo();
document.getElementById("doggo-pic").addEventListener("click", addNewDoggo);

// function addHeightOnLoad() {
//   document.getElementById("doggo-pic").onload = function() {
//     let thisDoggo = document.getElementById("doggo-pic");
//     let doggoHeight = thisDoggo.contentWindow.document.body.scrollHeight;
//     thisDoggo.height = `${doggoHeight}px`;
//   };
// }
