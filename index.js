//const mongo = require("mongodb");

("use strict");

////////////////////////////////////////////

// resize iframes to content
function resizeIframes() {
  let iframes = document.getElementsByTagName("iframe");
  for (let i = 0; i < iframes.length; i++) {
    let id = iframes[i].id;
    //console.log(id);
    let source = `apps/${id}/info.json`;
    let req = new Request(source);
    fetch(req)
      .then(function(response) {
        const processingPromise = response.json();
        //console.log(`getting ${id} height:`);
        return processingPromise;
      })
      .then(function(processedResponse) {
        //console.log(processedResponse.height);
        if (processedResponse.height) {
          let iframeHeight = processedResponse.height;
          document.getElementById(`${id}`).height = iframeHeight;
        } else {
          function resizeIframeOnLoad() {
            document.getElementById(`${id}`).onload = function() {
              let thisIframe = document.getElementById(`${id}`);
              let iframeHeight =
                thisIframe.contentWindow.document.body.scrollHeight;
              thisIframe.height = `${iframeHeight}px`;
            };
          }
          resizeIframeOnLoad();
          document
            .getElementById(`${id}`)
            .addEventListener("change", resizeIframeOnLoad());
        }
      });
  }
}
resizeIframes();

////////////////////////////////////////////

//hides columns with no content
function hideEmptyColumn() {
  let column = document.getElementsByClassName("column");
  for (let i = 0; i < column.length; i++) {
    let id = column[i].id;
    console.log(id);
    let app = column[i].getElementsByClassName("app-frame")[0];
    if (document.getElementById(id).contains(app) == false) {
      document.querySelector(`#${id}`).style.display = "none";
    } else {
      document.querySelector(`#${id}`).style.display = "block";
    }
  }
}

////////////////////////////////////////////

// remove app frame when "x" is clicked
function removeApp(elementId) {
  let element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
  hideEmptyColumn();
}

function addWindowCloseListeners() {
  let exes = document.getElementsByClassName("x");
  for (let i = 0; i < exes.length; i++) {
    exes[i].addEventListener("click", function() {
      let app = event.target.parentNode.parentNode.id;
      console.log(app);
      removeApp(app);
    });
  }
}
addWindowCloseListeners();

////////////////////////////////////////////

//adds app
function addApp(appId) {
  document.getElementById("column-1").innerHTML +=
    `<div class="app-frame" id="${appId}-frame">` +
    '                <div class="frame-header">' +
    '                    <img class="x" src="assets/images/x.png" alt="close app window">' +
    '                    <div class="drag-bar"></div>' +
    "                </div>" +
    `                <iframe src="apps/${appId}/index.html" id="${appId}"></iframe>` +
    "            </div>";
  resizeIframes();
  addWindowCloseListeners();
}

//listens for app click dropdown
document
  .querySelector(".apps-dropdown-container")
  .addEventListener("click", function(e) {
    appId = e.target.id.slice(5);
    console.log(`You clicked on ${appId}`);
    addApp(appId);
  });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
////////////////////////////////////////////
//code above is all working
//code below is not working
////////////////////////////////////////////

//select shortest column
function getShortest() {
  document.body.addEventListener("loadend", function() {
    let columns = document.getElementsByClassName("column");
    let height = 0;
    let shortest;
    for (let i = 0; i < columns.length; i++) {
      if (i == 0) {
        height = document.getElementById(this.id).offsetHeight;
        shortest = this.id;
      } else {
        if (document.getElementById(this.id).offsetHeight < height) {
          height = document.getElementById(this.id).offsetHeight;
          shortest = this.id;
        }
      }
    }
    return shortest;
  });
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
  document.getElementById("dropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

////////////////////////////////////////////

//Make the DIV element draggagle:
// dragElement(document.getElementById("mydiv"));

// function dragElement(elmnt) {
//   var pos1 = 0,
//     pos2 = 0,
//     pos3 = 0,
//     pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = elmnt.offsetTop - pos2 + "px";
//     elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }
