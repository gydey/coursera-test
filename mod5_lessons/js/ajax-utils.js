
/****** Lecture 57 - AJAX - ******/
// (function (global){
//
// //Setup a namespace for our utility
// var ajaxUtils = {};
//
// //Returns an HTTP request object
// function getRequestObject() {
//   if (global.XMLHttpRequest) {
//     return (new XMLHttpRequest());
//   }
//   else if (global.ActiveObject){
//     //For very old IE browser (optional)
//     return (new ActiveObject("Microsoft.XMLHTTP"));
//   }
//   else {
//     global.alert("Ajax is not supported!");
//     return (null);
//   }
// }
//
// //Makes an Ajax GET request to 'requestUrl'
// ajaxUtils.sendGetRequest =
//   function (requestUrl, responseHandler) {
//     var request = getRequestObject();
//     request.onreadystatechange =
//       function() {
//         handleResponse(request, responseHandler);
//       };
//     request.open("GET", requestUrl, true); //Really important to pass true
//     request.send(null);//For POST only
//   };
//
// //Only calls user provided 'responseHandler'
// //function if response is ready
// //an not an erro
// function handleResponse(request, responseHandler) {
//   if ((request.readyState == 4) && (request.status == 200)) {
//     responseHandler(request);
//   }
// }
//
// //Expose utility to the global object
// global.$ajaxUtils = ajaxUtils;//the global object = the local object
//
// })(window);



/****** Lecture 58 - JSON - ******/
(function (global){

//Setup a namespace for our utility
var ajaxUtils = {};

//Returns an HTTP request object
function getRequestObject() {
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  }
  else if (global.ActiveObject){
    //For very old IE browser (optional)
    return (new ActiveObject("Microsoft.XMLHTTP"));
  }
  else {
    global.alert("Ajax is not supported!");
    return (null);
  }
}

//Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest =
  function (requestUrl, responseHandler, isJsonResponse) {
    var request = getRequestObject();
    request.onreadystatechange =
      function() {
        handleResponse(request, responseHandler, isJsonResponse);
      };
    request.open("GET", requestUrl, true); //Really important to pass true
    request.send(null);//For POST only
  };

//Only calls user provided 'responseHandler'
//function if response is ready
//an not an erro
function handleResponse(request, responseHandler, isJsonResponse) {
  if ((request.readyState == 4) && (request.status == 200)) {
    // Default to isJsonResponse = true
    if (isJsonResponse == undefined) {
      isJsonResponse = true;
    }
    if (isJsonResponse) {
      responseHandler(JSON.parse(request.responseText))
    }
    else {
      responseHandler(request.responseText);
    }
  }
}

//Expose utility to the global object
global.$ajaxUtils = ajaxUtils;//the global object = the local object

})(window);
