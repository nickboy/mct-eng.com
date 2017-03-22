'use strict';

angular.module('mctApp.project-detail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/project-detail', {
        templateUrl: 'project-detail/project-detail.template.html',
        controller: 'ProjectDetailCtrl'
    });
}])

.controller('ProjectDetailCtrl', [function() {

}]);