//****** Lecture 59 - Collapsable menu on loose focus ******//
$(function() {// The name of the function is the $ sign. Same as document.addEventListener("DOMContentLoaded"...), so it execute after the page is loaded, but before everything else.

//Same as document.querySelector("#navbarToggle").addEventListener("blur",...)
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');//Collapse function is defined in bootstrap.js(plugin to jquery)
    }
  });
  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
  $(event.target).focus();
  });
});

//****** Lecture 60 ******//

(function (global) {

  var dc = {};

  var homeHtml = "snippets/home-snippet.html";//URL where the snippet is sitting
  var allCategoriesUrl = "https://davids-restaurant.herokuapp.com/categories.json";//L61
  var categoriesTitleHtml = "snippets/categories-title-snippet.html";//L61
  var categoryHtml = "snippets/category-snippet.html";//L61
  var menuItemsUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";//L62
  var menuItemsTitleHtml = "snippets/menu-items-title.html";//L62
  var menuItemHtml = "snippets/menu-item.html";//L62


  //Convinence function for inserting innerHTML for 'select'//
  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  //Show loading icon inside element identified by 'selector'
  var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";//found for free on www.ajaxload.info
    insertHtml(selector, html);
  };

  //L61
  //Return substitute of '{{propName}}'
  //with propValue in given string
  var insertProperty = function (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    string = string.replace(new RegExp(propToReplace, "g"), propValue);//use "g" to substitute every occurrence of the element, not only the first onreadystatechangereturn string;
    return string;
  }
  //L61

  //L63
  // Remove the class 'active' from home and switch to Menu button
  var switchMenuToActive = function () {
    // Remove 'active' from home button
    var classes = document.querySelector("#navHomeButton").className;
    classes = classes.replace(new RegExp("active", "g"), "");
    document.querySelector("#navHomeButton").className = classes;


    // Add 'active' to menu button if not already there
    classes = document.querySelector("#navMenuButton").className;
    if (classes.indexOf("active") == -1) {
      classes += " active";
      document.querySelector("#navMenuButton").className = classes;
    }
  };
  //L63

  // On page load (before images or CSS)
  document.addEventListener("DOMContentLoaded", function (event) {//Waiting till the DOM content ihas been loaded

    //On first load, show home view
    showLoading("#main-content");//Insert the rotating element(gif) set in the showLoading function
    $ajaxUtils.sendGetRequest(
      homeHtml,//Give the home.html URL defined previously
      function (responseText) {
        document.querySelector("#main-content").innerHTML = responseText;
      },
      false);//Means: I don't want to pre-process as json. It's only a Html snippet
  });


  //L61
  //Load the menu categories view
  dc.loadMenuCategories = function () {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      allCategoriesUrl,
      buildAndShowCategoriesHTML);//No need to set true, it's default
  };

  //L62
  //Load the menu items view
  //'categoryShort' is a short_name for a category
  dc.loadMenuItems = function (categoryShort) {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      menuItemsUrl + categoryShort,
      buildAndShowMenuItemsHTML);//Process the results of this ajax request
  };
  //L62


  //Build HTML for the categories page based on the data from the server
  function buildAndShowCategoriesHTML (categories) {
    //Load title snippet of categories page
    $ajaxUtils.sendGetRequest(
      categoriesTitleHtml,
      function (categoriesTitleHtml) {
        //Retrive single category snippet
        $ajaxUtils.sendGetRequest(
          categoryHtml,
          function (categoryHtml) {
            switchMenuToActive();
            var categoriesViewHtml = buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml);
            insertHtml("#main-content", categoriesViewHtml);
          },
          false);//Don't want the ajax utility to process the snippet as Json
    },
    false);//Don't want the ajax utility to process the snippet as Json
  }

  //Using categories data and snippets html
  //build categories view HTML to be inserted into page
  function buildCategoriesViewHtml(categories, categoriesTitleHtml, categoryHtml) {
      var finalHtml = categoriesTitleHtml;
      finalHtml += "<section class='row'>";

      //Loop over categories
      for (var i = 0; i < categories.length; i++) {
        //Insert category value
        var html = categoryHtml;
        var name = "" + categories[i].name;
        var short_name = categories[i].short_name;
        html = insertProperty(html, "name", name);
        html = insertProperty(html, "short_name", short_name);
        finalHtml += html;
      }
      finalHtml+= "</section>";
      return finalHtml;
    }

  //L62
  //Build HTML for the single category page based on the data from the server
  function buildAndShowMenuItemsHTML (categoryMenuItems) {
    //Load title snippet of categories page
    $ajaxUtils.sendGetRequest(
      menuItemsTitleHtml,
      function (menuItemsTitleHtml) {
        //Retrive single category snippet
        $ajaxUtils.sendGetRequest(
          menuItemHtml,
          function (menuItemHtml) {
            switchMenuToActive();
            var menuItemsViewHtml = buildMenuItemsViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml);
            insertHtml("#main-content", menuItemsViewHtml);
          },
          false);//Don't want the ajax utility to process the snippet as Json
      },
      false);//Don't want the ajax utility to process the snippet as Json
    }


  //Using category and menu items data and snippets html
  //build menu items view HTML to be inserted into page
  function buildMenuItemsViewHtml(categoryMenuItems, menuItemsTitleHtml, menuItemHtml) {

    menuItemsTitleHtml = insertProperty(menuItemsTitleHtml, "name", categoryMenuItems.category.name);
    menuItemsTitleHtml = insertProperty(menuItemsTitleHtml, "special_instructions", categoryMenuItems.category.special_instructions);

    var finalHtml = menuItemsTitleHtml;
    finalHtml += "<section class='row'>";

    //Loop over menu items
    var menuItems = categoryMenuItems.menu_items;
    var catShortName = categoryMenuItems.category.short_name;
    for (var i = 0; i < menuItems.length; i++) {
      //Insert menu item value
      var html = menuItemHtml;
      html = insertProperty(html, "short_name", menuItems[i].short_name);
      html = insertProperty(html, "catShortName", catShortName);
      html = insertItemPrice(html, "price_small", menuItems[i].price_small);
      html = insertItemPortionName(html, "small_portion_name", menuItems[i].small_portion_name);
      html = insertItemPrice(html, "price_large", menuItems[i].price_large);
      html = insertItemPortionName(html, "large_portion_name", menuItems[i].large_portion_name);
      html = insertProperty(html, "name", menuItems[i].name);
      html = insertProperty(html, "description", menuItems[i].description);

      //Add clearfix after every second menu item
      if ( i % 2 !== 0) {
        html += "<div class='clearfix visible-lg-block visible-md-block'></div>";
      }

      finalHtml += html;
    }
    finalHtml += "</section>";
    return finalHtml;
  }

  //Appends price with '$' if price exist
  function insertItemPrice(html, pricePropName, priceValue) {
    // If not specified, replace with empty string
    if (!priceValue) {
      return insertProperty(html, pricePropName, "");
    }

    priceValue = "$" + priceValue.toFixed(2);//3.00 dollars


    html = insertProperty(html, pricePropName, priceValue);
    return html;
  }


  // Appends portion name in parens if it exists
  function insertItemPortionName(html,
                                 portionPropName,
                                 portionValue) {
    // If not specified, return original string
    if (!portionValue) {
      return insertProperty(html, portionPropName, "");
    }

    portionValue = "(" + portionValue + ")";
    html = insertProperty(html, portionPropName, portionValue);
    return html;
  }
  //L62

  //L61


  global.$dc = dc;//dc is the internal namespace. global.$dc expose it at the global obj in order to use it in other pages or scripts
})(window);
