'use strict';

// Declare app level module which depends on views, and components
angular.module('mctApp', [
    'ngRoute',
    'mctApp.project-detail',
    'mctApp.project-list',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/project-list'});
}]);
