//Lesson 52
//Part 1
// var yaakovGreater = {};
// yaakovGreater.name = "Yaakov";
// yaakovGreater.sayHello = function () {
//   console.log("Hello " + yaakovGreater.name);
// }

//Part 2
// var yaakovGreater = {};
// yaakovGreater.name = "Yaakov";
// var greeting = "Hello ";
// yaakovGreater.sayHello = function () {
//   console.log(greeting + yaakovGreater.name);
// }

//Immediately Invoked Function Expression
//IIFE
(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "Yaakov";
  var greeting = "Hello ";
  yaakovGreeter.sayHello = function () {
    console.log(greeting + yaakovGreeter.name);
  }

  window.yaakovGreeter = yaakovGreeter;//Exposing the yaakovGreeter obj to the outside

})(window);
