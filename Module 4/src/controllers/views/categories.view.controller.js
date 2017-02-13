(function () {
'use strict';

angular.module('Data')
       .controller('CategoriesViewController', CategoriesViewController);

CategoriesViewController.$inject = ['categories'];
function CategoriesViewController(categories) {
  var categoriesView = this;
  categoriesView.categories = categories;
}

})();
