'use strict';
angular.module('app').directive('appMenu',[function(){
  return{
    restrict:'E',
    replace:true,
    templateUrl:'view/template/menu.html'
  };
}]);
