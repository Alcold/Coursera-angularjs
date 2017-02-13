(function () {
'use strict';

angular.module('MenuApp')
       .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
   url: '/',
   templateUrl: 'src/templates/views/home.view.template.html'
  })

  // Categories
  .state('categories', {
     url: '/categories',
     templateUrl: 'src/templates/views/categories.view.template.html',
     controller: 'CategoriesViewController as categoriesView',
     resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Items
  .state('items', {
     url: '/items/{categoryShortName}',
     templateUrl: 'src/templates/views/items.view.template.html',
     controller: 'ItemsViewController as itemsView',
     resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        var categoryShortName = $stateParams.categoryShortName;
        return MenuDataService.getItemsForCategory(categoryShortName);
      }]
     }
  })
}

})();
