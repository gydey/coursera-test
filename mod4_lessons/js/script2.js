//Lesson 52
//Part 1
// var johnGreater = {};
// johnGreater.name = "John";
// johnGreater.sayHi = function () {
//   console.log("Hi " + johnGreater.name);
// }

//Part 2
// var johnGreater = {};
// johnGreater.name = "John";
// var greeting = "Hi ";
// johnGreater.sayHi = function () {
//   console.log(greeting + johnGreater.name);
// }

//Immediately Invoked Function Expression
//IIFE
(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "Hi ";
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;//Exposing the johnGreeter obj to the outside

})(window);
