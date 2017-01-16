// The idea of this assignment is to create a "check off" shopping List application.
//
// Think of being in a store with a shopping list that allows you to "check off" the items you've already bought,
// except instead of checking them off, the bought item simply moves to the "Already Bought" list.
//
// Your HTML page should display 2 lists, one titled "To Buy" and the other "Already Bought".
//
// The "To Buy" list should be pre-populated with a list of at least 5 items.
// (Hint: Use an array of object literals, where each item will be similar to { name: "cookies", quantity: 10 })
// Each shopping list item is to have a name and quantity. It should be displayed to the user in the format of Buy item_quantity item_name.
// For example, shopping list item { name: "cookies", quantity: 10 } would be listed as Buy 10 cookies.
//
// Next to each item in the list should be a button with the label "Bought".
// When the user clicks on the "Bought" button, its associated item should be removed from the "To Buy" list and appear in the "Already Bought"
// list.
//
// The "Already Bought" list should initially be empty and display a message "Nothing bought yet".
// Make sure the message appears only when the list is empty.
// Once something is "bought" and appears on this list, the format of each item in the list should be Bought item_quantity item_name.
// For example, the bought item of 10 cookies mentioned before would appear in this list as Bought 10 cookies.
//
// Once the user "buys" every item on the "To Buy" list, i.e., clicks on the "Bought" button for every item in the "To Buy" list,
// instead of the empty "To Buy" list, display the message "Everything is bought!"
(function () {
'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.toBuyItems;

    toBuy.buy = function (index){
      ShoppingListCheckOffService.buy(index);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.boughtItems;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var item0 = {
      name : "spaghetti",
      quantity : 2
    };
    var item1 = {
      name : "pizza",
      quantity : 4
    };
    var item2 = {
      name : "coffee",
      quantity : 3
    };
    var item3 = {
      name : "cookies",
      quantity : 10
    };
    var item4 = {
      name : "vodka",
      quantity : 5
    };
    service.toBuyItems = [item0, item1, item2, item3, item4];

    service.boughtItems = [];

    service.buy = function (index) {
      var item = service.toBuyItems.splice(index, 1)[0];
      service.boughtItems.push(item);
    };
  }

})();
