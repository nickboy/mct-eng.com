'use strict';

angular.module('mctApp.project-list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/project-list', {
        templateUrl: 'project-list/project-list.template.html',
        controller: 'ProjectListCtrl'
    });
}])

.controller('ProjectListCtrl', [function() {

}]);