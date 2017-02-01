//****** EXAMPLE ******//
// function myFunction(a, b) { //Function
//   return a*b;
// }
// var x = myFunction(4, 3); //Function called
// console.log(x); //DIsplay result
//****** EXAMPLE ******//


//****** REVERSE NUMBER FUNCTION ******//
//****** 1. Write a JavaScript function that reverse a number. ******//
// function reverseNumber(n) {
//   var nStr = n.toString();
//   // n = n + ""; //Also work
//   console.log("In the function " + nStr + " is a " + typeof nStr);
//   return parseInt(nStr.split("").reverse().join("")); //Split obj into an array of strings by separating with "", then reverse the array and join all the element. In the end the string becomes number again thank to parseInt
// }
//
//
// var num = 34223;
// console.log("At the start point " + num + " is a " + typeof num);
//
// var mun = reverseNumber(num);
// console.log("At this point " + mun + " is a " + typeof mun);


//****** PALINDROME STRING FUNCTION ******//
//****** 2. Write a JavaScript function that checks whether a passed string is palindrome or not? ******//
// function palindromeText(t) {
//   var palindrome = "is palindrome?";
//   t = t.toLowerCase(); //Transform the string in lowerCase
//   if (t === t.split("").reverse().join("")) {
//     palindrome = "palindrome!"
//     console.log("The word " + t + " is " + palindrome);
//   }
//   else {
//     palindrome = "NOT palindrome!"
//     console.log("The word " + t + " is " + palindrome);
//   }
//   return palindrome;
// }
//
// var text1 = "oco";
// var text2 = "caco";
//
// palindromeText(text1);
// palindromeText(text2);
// palindromeText("cacca");
// palindromeText("acca");
// palindromeText("CacCa");
// palindromeText("aCcA");


//****** ALL STRING COMBINATIONS FUNCTION ******//
//****** 3. Write a JavaScript function that generates all combinations of a string. ******//
// function allStringCombinations(string) {
//   // var string = string.split("");//No need to transform the String in an array
//   var results = [];
//   for (var i = 0; i < string.length; i++) {
//     var resultsLength = results.length;
//     for (var j = 0; j < resultsLength; j++) {
//       results.push(string[i] + results[j])
//     }
//     results.push(string[i]);
//   }
//   console.log(results);
//   return results;
// }
//
// allStringCombinations("dog");


//****** ALL LETTERS OF A STRING IN ALPHABETICAL ORDER FUNCTION ******//
//****** 4.Write a JavaScript function that returns a passed string with letters in alphabetical order. ******//
//
// function alphbeticalString(string) {
//   var string = string.toLowerCase();
//   string = string.split("");
//   string.sort();
//   console.log(string);
//   return string;
// }
//
// alphbeticalString("webmaster");
// alphbeticalString("DisoRganiZAtiOn");


//****** UPPERCASE LETTER FUNCTION ******//
//****** 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. ******//

// function stringCapitalized(sentence) {
//   var words = sentence.split(' ');
//   // console.log(words);
//   var phraseArray = [];
//   for (var i = 0; i < words.length; i++) {
//     var currentWord = words[i];
//     // console.log(currentWord);
//     var wordCap = currentWord[0].toUpperCase();
//     // console.log(wordCap);
//     for (var j = 1; j < currentWord.length; j++) {
//       wordCap += currentWord[j]; //wordCap = wordCap + currentWord[j]
//     }
//     console.log(wordCap);
//     phraseArray[i] = wordCap;
//   }
//   var phrase = phraseArray.join(' ');
//   console.log(phrase);
// }
//
// var futuramaString = 'calculon is a futurama robot character';
// var space = ' ';
//
// stringCapitalized(futuramaString, space);

//****** Better version ******//
// function capitalizeSentence(sentence) {
//   return sentence.split(' ').map(function(word) {
//       return word[0].toUpperCase() + word.slice(1);
//     }).join(' ');
// }
//
// var s = 'The quick brown fox jumps over the lazy dog';
// console.log(s);
// console.log(capitalizeSentence(s));


//****** LONGEST WORD FUNCTION ******//
//****** 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. ******//

// function longestWord(phrase) {
//   var phraseArray = phrase.split(' ');//Transform the string into an array of string elements
//   console.log(phraseArray);
//   phraseArray = phraseArray.sort(function (a, b) {
//     if (a.length > b.length) {//sort condition is a function
//       return -1;
//     }
//     else {
//       return 1;
//     }
//   });
//   console.log(phraseArray);
//   console.log(phraseArray[0] + " is the longest word of the phrase.");
// }
//
// longestWord("Today is a sunny day");
//
// longestWord("Yesterday was cloudy and cold");

//***** longestWord ID *****//
// function longestWord(phrase) {
//   var phraseArray = phrase.split(' ');//Transform the string into an array of string elements
//   console.log(phraseArray);
//   if (phraseArray.length > 0) {
//     var id = 0;
//     var maxLength = phraseArray[0].length;
//     for (var i = 1; i < phraseArray.length; i++) {
//       if (phraseArray[i].length > maxLength) {
//         maxLength = phraseArray[i].length;
//         id = i;
//       }
//     }
//     console.log(id);
//     console.log(maxLength);
//     return id;
//   }
//   else {
//     return -1;//Error! Situation in which the array is empty. !Bisognerebbe sollevare un'eccezione!
//   }
// }
//
// longestWord("Yesterday was cloudy and cold");
// longestWord("Today is the day of my birthday");

//****** WOVELS FUNCTION ******//
//****** 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. ******//
//
// function howManyVowels (text) {
// console.log(text);
// var textArray = text.split('');
// var count = 0;
// var vowels = textArray.filter(function (x) {
//     var y = x.toLowerCase();
//     return (y == 'a' || y == 'e' || y == 'i' || y == 'o' || y == 'u' );//Return always or true or false. Same as If...return true else return false
//   });
//   console.log(vowels.length);
// }
//
// howManyVowels('Today is my birthday')
// howManyVowels('Tdddd')


//****** PRIME NUMBER FUNCTION ******//
//****** 8. Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not. ******//
//
// function primeNumber(num) {
// // console.log(num);
// for (var i = 2; i <= num / 2; i++) {
//   var y = num / i;
//   // console.log(y);
//     if (Number.isInteger(y)) {
//       console.log(num + ' is not a prime number.');
//       return (Number.isInteger(y));
//     }
//     else {
//       console.log(num + ' is a prime number.');
//       return (Number.isInteger(y));
//     }
//   }
// }
//
// primeNumber(1);
// primeNumber(0);
// primeNumber(10);
// primeNumber(17);
// primeNumber(5);
// primeNumber(100);
// primeNumber(3);
// primeNumber(19);
// primeNumber(97);
//
// // Example//
// // Number.isInteger('10');      // false
// // console.log(Number.isInteger('10'));
// // Example//
//
//
// console.log('//*************************************************//');
//
// //****** num === 0 and num === 1 ******//
// function primeNumber(num) {
//   // console.log(num);
//   if (num === 0 || num === 1) {
//       console.log(num + ' is not a valid number.');
//       return undefined;
//   }
//   else {
//     for (var i = 2; i <= num / 2; i++) {
//       var y = num % i; //num MOD i, resto divisione intera
//       // console.log(y);
//       if (y == 0) {
//         console.log(num + ' is not a prime number.');
//         return false;
//       }
//     }
//     console.log(num + ' is a prime number.');
//     return true;
//   }
// }
//
// primeNumber(1);
// primeNumber(0);
// primeNumber(10);
// primeNumber(17);
// primeNumber(5);
// primeNumber(100);
// primeNumber(3);
// primeNumber(15);
// primeNumber(97);
// console.log([ 1, 0, 10, 17, 5, 100, 3, 15, 97 ].filter(primeNumber));//Filtro l'array con il predicato primeNumber. Possibile perchè primeNumber è un predicato che restituisce vero o falso.


//****** RETURN TYPE FUNCTION ******//
//****** 9. Write a JavaScript function which accepts an argument and returns the type. ******//
//****** Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.******//
//
// function objectType(obj) {
//   type = typeof obj;
//   console.log(obj + ' is a ' + type);
//   return type;
// }
//
// var type = undefined;
// objectType(7);
// objectType('hi');
// objectType([1,2,3]);



//****** MATRIX FUNCTION ******//
//****** 10. Write a JavaScript function which returns the n rows by n columns identity matrix. ******//

// function matrix(m) {
//   for (var i = 0; i < m; i++) {
//     for (j = 0; j < m; j++) {
//       if (i === j) {
//         console.log('1');
//       }
//       else {
//         console.log('0');
//       }
//     }
//     console.log('-----------------');
//   }
// }
//
// matrix(4);


//****** LOWER & GREATEST NUMBERS FUNCTION ******//
//****** 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. ******//

function secondMinMax(array) {

}

secondMinMax([5, 6, 7, 1, 2, 3]);
