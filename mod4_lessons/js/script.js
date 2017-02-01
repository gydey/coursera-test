//"use strict"; //Defines that JavaScript code should be executed in "strict mode" (no udeclared variables!). Always declare variables with var = .



/* Lesson 40-41
var message = "in global";
console.log("global: message = " + message);

var a = function () { //Define function and store its value in the var a
  var message = "inside a";
  console.log("a: message = " + message);
    function c () { //Outer Reference = function a
      console.log("c: message = " + message);
    }
  b();
  c();
}

function b () { //Outer Reference = global
  console.log("b: message = " + message);
}

a(); //Execute function a
*/

/* Lesson 42
//Should be undefined
var x;
console.log(x);

if (x == undefined) {
  console.log("x is undefined");
}

//Define variable x
x = 5;
if (x == undefined) {
  console.log("x is undefined");
}
else {
  console.log("x has been defined with the value of " + x);
}
*/


/* Lesson 43

// // ****** String Concatenation
// var string = "Hello";
// string += " World";
// // string = string + " World";
// console.log(string + "!");

// // ****** Regular Math Operators: +, -, *, /
// console.log((5+4)/3);
// console.log(undefined/3);

// // ****** Equality
// var x = 4, y = 4;
//   if (x == y) {
//     console.log("x=4 is equal to y=4");
//   }
// var x = '4';
//   if (x == y) {
//     console.log("x='4' is equal to y=4");
//   }
//
// // ****** Strict Equality
// if (x === y) {
//   console.log("Strict: x='4' is equal to y=4");
// }
// else {
//   console.log("Strict: x='4' is NOT equal to y=4");
// }


// // ****** If Statement (all false)
// if (false || null || undefined || "" || 0 || NaN){
//     console.log("This line won't ever execute");
// }
// else {
//   console.log("All false");
// }
// // ****** If Statement (all true)
// if (true && "hello" && 1 && -1 && "false") {
//   console.log("All true");
// }


// // ****** Best Practice for {} style
// // Bad practice to put {} on new line; in this case js doesn't see nothing after return then stop the function and return undefined variable
// function a()
// {
//   return
//   {
//     name: "Yaakov"
//   };
// }
// //Good practice to put {} right on the same line as the previous command
// function b(){
//   return {
//     name: "Yaakov"
//   };
// }
//
// console.log(a());
// console.log(b());


//For Loop
var sum = 0;
for (var i = 0; i < 10; i++) {
  //console.log(i);
  sum = sum +i;
  console.log(sum);
}
console.log("Sum of 0 through 9 is: " + sum);
*/


/* Lesson 44
// //Default Values 1
// function orderChickenWith(sideDish) {
//   console.log("Chicken with " + sideDish);
// }
//
// orderChickenWith("noodles");
// orderChickenWith();

// //Default Values 2
// function orderChickenWith(sideDish) {
//   if (sideDish === undefined) {
//     sideDish = "wathever!";
//   }
//   console.log("Chicken with " + sideDish);
// }
//
// orderChickenWith("noodles");
// orderChickenWith();

//Default Values 3
function orderChickenWith(sideDish) {
  sideDish = sideDish || "wathever!";
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();
*/


/* Lesson 45
//*********** Object Creation
// var company = new Object();
// company.name = "Facebook";
// company.adress = "Boulevard Str, 15C";
// company.ceo = new Object(); //Set Obj within another Obj (company.ceo in company)
// company.ceo.firstName = "Mark";
// company.ceo.favColor ="blue";
// console.log(company);
// console.log(company.name); //DOT NOTATION
// console.log(company["name"]); // BRACKETS NOTATION
// console.log("Company CEO name is: " + company.ceo.firstName);
//
// company["stockPropName"] = 110;
// console.log("Stock price is: " + company["stockPropName"]);


//*********** Better way: Object Literal
var facebook = {
  name: "Facebook",
  ceo:{
    firstName:"Mark",
    favColor: "blue"
  },
  "stock of company": 110
};

console.log("The company name is: " + facebook.name);
console.log("The CEO of the Company is: " + facebook.ceo.firstName);
console.log("The stock price of the Company is: " + facebook["stock of company"]);
*/


/* Lesson 46
//Functions are First-Class Data
//Functions ARE objects
function multiply(x, y) {
  return x*y;
}
//Show the value of the function with specific variables
console.log(multiply(5, 3));
//Show the function syntax
console.log(multiply);
//Show the function syntax as a string
console.log(multiply.toString());
//Assign new name to Obj multiply
multiply.version = "v.1.0.0";
console.log("The version of the function 'Multiply' is: " + multiply.version);

// Function Factory
function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  };
  return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));


//Passing Functions as Arguments
function doOperationOn(x, operation) {
  return operation(x);
}
var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);
*/

/*Lesson 47
// Copy by Reference vs by Value
// console.log("Passed by value (primitives):");
// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);
//
// b = 5;
// console.log("After b update:");
// console.log("a: " + a);
// console.log("b: " + b);

// console.log("Passed by reference (objects):");
// var a = {x: 7};
// var b = a;
// console.log("Object a:");
// console.log(a);
// console.log("Object b:");
// console.log(b);
//
// b.x = 5;
// console.log("After b.x update:");
// console.log("Object a:");
// console.log(a);
// console.log("Object b:");
// console.log(b);

// Pass by refernce vs by value in function
// Change primitive
// function changePrimitive(primValue) {
//   console.log("In changePrimitive...");
//   console.log("before:");
//   console.log(primValue);
//
//   primValue = 5; //2nd value assigned to the function changePrimitive
//   console.log("after:");
//   console.log(primValue);
// }
//
// var value = 7; //1st value assigned to the function changePrimitive
// changePrimitive(value); // primValue = value
// console.log("After changePrimitive, orig value:");
// console.log(value); //Still be 7 because it refers to different memory location

// Change object
function changeObject(objValue) {
  console.log("In changeObject...");
  console.log("before:");
  console.log(objValue);

  objValue.x = 5; //2nd value assigned to the objValue.x
  console.log("after:");
  console.log(objValue);
}

value = { x: 7}; //1st value assigned to the objValue.x
changeObject(value); //objValue = value
console.log("After changeObject, orig value:");
console.log(value); // As objValue and value referes to the same memory location, it changed to 5
*/

/* Lesson 48
// function test() {
//   //console.log("Hello Coursera!");
//   console.log(this);
//   this.myName = "Yaakov";
// }
//
// test();
// console.log(window.myName);//Same as console.log(this.myName);

// //Function Constructors
// function Circle(radius) {
//   this.radius = radius;
// }
//
// Circle.prototype.getArea =
//   function () {
//     return Math.PI * Math.pow(this.radius, 2);
//   };
//
// var myCircle = new Circle(10);
// console.log(myCircle);
//
// var myOtherCircle = new Circle(20);
// console.log(myOtherCircle);
//
// console.log(myCircle.getArea());
// console.log(myOtherCircle.getArea());
*/

/* Lesson 49
// Object Literals and "this"
var literalCircle = { //Create a new Object()
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(this);

    var increaseRadius = function () {
      self.radius = 20;
      };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);//this keyword refers to the obj literalCircle instead of global obj window
  }
};

console.log(literalCircle.getArea());
*/

/* Lesson 50
// Array creation
// var array = new Array();
// array[0] = "Yaakov"; //string
// array[1] = 2; //number
// array[2] = function (name) {
//   console.log("Hello " + name);
// }; //function
// array[3] = {course: "HTLM, CSS & JS"}; //obj literar
//
// console.log(array); //print all the array
// console.log(array[1]); //print only position 2 (array[1]) of the array
// array[2](); //undefined because no name param has been passed to the function
// array[2](name); //incorrect
// array[2]("Yaakov"); //right, name param "Yaakov" passed
// array[2](array[0]); //rigth, name param contained in the array[0] passed
// console.log(array[3].course); //print the obj literal course

// Short hand array Creation
// var names = ["Yaakov", "Jhon", "Joe"];
// console.log(names); //print the array
//
// var names2 = [
//   {name: "Yaakov", eta: 45},
//   {name: "Jhon", eta: 26},
//   "Joe"]; //Also work with different types objs
// console.log(names2);
//
// //Loop array
// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }
//
// //Can create a new far index; all the in between obj will be declared undefined
// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }

//Loop Objects
// var names3 = ["Yaakov", "John", "Joe"];
//
// // var myObj = {
// //   name: "Yaakov",
// //   course: "HTML/CSS/JS",
// //   platform: "Coursera"
// // };
// // for (var prop in myObj) {
// //   console.log(prop + ": " + myObj[prop]);
// // }
//
// for (var name in names3) {
//   console.log("Hello " + names3[name]);
// }

//Question: What's the output value of this javascript cod?
var counter = 0;
var myArray = ["Yaakov", 2, {handle: "yaakovchaikin"}];
for(var i = 0; i < myArray.length; i++) {
  counter++;
}
console.log(counter);
*/

//* Lesson 51
// Closures
function makeMultiplier (multiplier) {
  return (
    function (x) {
      return multiplier * x;
    }
  );
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));
