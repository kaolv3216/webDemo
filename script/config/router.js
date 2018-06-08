'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'view/main.html',
    controller: 'mainCtrl'
  }).state('login', {
    url: '/login',
    templateUrl: 'view/login.html'
    // controller: 'loginCtrl'
  }).state('toolrecord', {
    url: '/toolrecord',
    templateUrl: 'view/main.html'
    // controller: 'toolrecordCtrl'
  }).state('toolrecord.tool', {
    url: '/tool',
    templateUrl: 'view/template/toolList.html',
    controller: 'toolCtrl'
  }).state('toolrecord.tool.add', {
    url: '/add',
    templateUrl: 'view/template/addTool.html',
    // controller: 'toolCtrl'
  }).state('toolrecord.tooloption', {
    url: '/tooloption',
    templateUrl: 'view/template/tooloptionList.html'
    // controller: 'tooloptCtrl'
  }).state('toolrecord.expiretool', {
    url: '/expiretool',
    templateUrl: 'view/template/expireTool.html'
    // controller: 'expiretoolCtrl'
  }).state('toolrecord.addapply', {
    url: '/addapply',
    templateUrl: 'view/template/addApply.html'
    // controller: 'addapplyCtrl'
  }).state('toolrecord.applylist', {
    url: '/applylist',
    templateUrl: 'view/template/applylist.html'
    // controller: 'applylistCtrl'
  }).state('toolrecord.toolalllist', {
    url: '/toolalllist',
    templateUrl: 'view/template/toolallList.html'
    // controller: 'toolalllistCtrl'
  }).state('toolrecord.tooloptalllist', {
    url: '/tooloptalllist',
    templateUrl: 'view/template/tooloptallList.html'
    // controller: 'tooloptallListCtrl'
  }).state('register',{
    url:'/register',
    templateUrl: 'view/template/register.html'
    //controller: 'regCtrl'
  });
  $urlRouterProvider.otherwise('login');
}])
