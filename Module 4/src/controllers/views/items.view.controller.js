(function () {
'use strict';

angular.module('Data')
       .controller('ItemsViewController', ItemsViewController);

ItemsViewController.$inject = ['items'];
function ItemsViewController(items) {
  var itemsView = this;
  itemsView.items = items;
}

})();
