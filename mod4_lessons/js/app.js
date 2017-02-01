// Lesson 52
// Part 1
// yaakovGreater.sayHello();
// johnGreater.sayHi();


// Part 2
// var a = function () {
//   console.log("Hello Coursera!");
// }
//
// a();
//Immediately Invoked Function Expression
//IIFE
(function () {
  console.log("Hello Coursera!");
})();

(function (name) {
  console.log("Hello Coursera!");
})("Coursera");
