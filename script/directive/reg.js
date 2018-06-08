'use strict';
angular.module('app').directive('register',function(){
  return{
    restrict:'E',
    replace:true,
    templateUrl:'view/template/register.html'
  };
});
