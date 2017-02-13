(function () {
'use strict';

angular.module('Data')
       .component('itemList', {
          templateUrl: 'src/templates/components/itemList.component.template.html',
          bindings: {
            items: '<'
          }
        });

})();
