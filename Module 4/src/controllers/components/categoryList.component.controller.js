(function () {
'use strict';

angular.module('Data')
       .component('categoryList', {
          templateUrl: 'src/templates/components/categoryList.component.template.html',
          bindings: {
            categories: '<'
          }
        });

})();
