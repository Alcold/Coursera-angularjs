(function () {
'use strict';

angular.module('Data')
       .service('MenuDataService',MenuDataService)
       .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath){
  var service = this;

  service.getAllCategories = function(){
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (results) {
      var categories = results.data;
      return categories;
    }).catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  service.getItemsForCategory = function(categoryShortName){
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category : categoryShortName
      }
    }).then(function (results) {
      var items = results.data.menu_items;
      return items;
    }).catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

}

})();
