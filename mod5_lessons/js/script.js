// DOM manipulation
//*** Lecture 53 - Part 1 - ***
// console.log(document.getElementById("title"));
//
// console.log(document instanceof HTMLDocument);

// *** Lecture 53 - Part 2 - ***
// *** - 1 - ***
// function sayHello () {
//   console.log(
//     "Hello " + document.getElementById("name").value
//   );
// }

// // *** - 2 - ***
// function sayHello () {
//   var name = document.getElementById("name").value;
//
//   //If you want to put some text in a different element by input (.value) you must use .textContent
//   // var message = "Hello " + name + "!";
//   // document.getElementById("content").textContent = message;
//
//   //If you want to add some HTML to the added part you must use .innerHTML
//   var message = "<h2>Hello " + name + "!</h2>";
//   document.getElementById("content").innerHTML = message;
//
//   if (name === "student") {
//     var title = document.querySelector("#title").textContent;
//     // title = title + " & Lovin' it!";
//     title += " & Lovin' it!";
//     var title = document.querySelector("#title").textContent = title;//Needed for copy by value/reference problem
//   }
// }

// *** Lecture 54 ***
// function sayHello (event) {
//   this.textContent = "Said it!"; // The button change its content text when the function is run (this points to the button thanks to the Unobtrusiveevent binding)
//   console.log(this);// It points to the window. To make it point to the button see below Unobstrusive event binding (also deleting the .onclick in the html button).
//   var name = document.getElementById("name").value;
//
//   var message = "<h2>Hello " + name + "!</h2>";
//   document.getElementById("content").innerHTML = message;
//
//   if (name === "student") {
//     var title = document.querySelector("#title").textContent;
//     // title = title + " & Lovin' it!";
//     title += " & Lovin' it!";
//     var title = document.querySelector("#title").textContent = title;//Needed for copy by value/reference problem
//   }
// }

//*** Unobstrusive event binding ***
// //*** - 1 - ***
// document.querySelector("button").addEventListener("click", sayHello);
//*** - 2 - ***
// document.querySelector("button").onclick = sayHello;

// *** To run the function before everything else (css or other scripts) without any conflict put it in an .addEventListener function. In this case you do not have to put <script> tag at the end of the body, but you can also put it in the <head> tag without problems. ***
// document.addEventListener("DOMContentLoaded",
//   function (event) {
//
//     function sayHello (event) {
//       this.textContent = "Said it!";
//       console.log(this);
//       var name = document.getElementById("name").value;
//
//       var message = "<h2>Hello " + name + "!</h2>";
//       document.getElementById("content").innerHTML = message;
//
//       if (name === "student") {
//         var title = document.querySelector("#title").textContent;
//         title += " & Lovin' it!";
//         var title = document.querySelector("#title").textContent = title;//Needed for copy by value/reference problem
//       }
//     }
//
//     //*** Unobstrusive event binding ***
//     document.querySelector("button").addEventListener("click", sayHello);
//   });


// *** Lecture 55 ***
// document.addEventListener("DOMContentLoaded",
//   function (event) {
//
//     function sayHello (event) {
//       console.log(event);
//
//       this.textContent = "Said it!";
//       var name = document.getElementById("name").value;
//
//       var message = "<h2>Hello " + name + "!</h2>";
//       document.getElementById("content").innerHTML = message;
//
//       if (name === "student") {
//         var title = document.querySelector("#title").textContent;
//         title += " & Lovin' it!";
//         var title = document.querySelector("#title").textContent = title;//Needed for copy by value/reference problem
//       }
//     }
//
//     //*** Unobstrusive event binding ***
//     document.querySelector("button").addEventListener("click", sayHello);
//
//
//     document.querySelector("body").addEventListener("mousemove",
//       function (event) {
//         if (event.shiftKey === true) {//This set the condition of the shiftKey pressed
//           console.log("Mouse pointer coordinates: ");
//           console.log(" X: " + event.clientX);
//           console.log(" Y: " + event.clientY);
//           console.log("--------");
//         }
//       });
//   });



// *** Lecture 57 - AJAX - Part 3 - ***
// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    //Unobstrusive event binding
    document.querySelector("button").addEventListener("click", function () {
      //Call server to get the name
      $ajaxUtils.sendGetRequest("data/name.txt",
        function (request) {
          var name = request.responseText;
          console.log(name);
          document.querySelector("#content").innerHTML = "<h2>Hello" + name +"!</h2>";
        });
    });
  }
);

























// *** Lecture ***
