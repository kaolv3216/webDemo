'user strict';
angular.module('app').controller('toolCtrl', ['$http', '$scope', function($http, $scope) {
  $http({
    method: 'GET',
    url: '../../data/toolList.json'
  }).then(function successCallback(resp) {
    $scope.toollist = resp.data;
  }, function errorCallback(resp) {
    // 请求失败执行代码
  });


}]);
