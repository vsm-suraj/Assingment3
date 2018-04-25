var gitHubApp = angular.module('gitHubApp',['ngResource']);

gitHubApp.config(function ($routeProvider) {
    $routeProvider.when('/overview',{
        templateUrl: 'templates/overview.html'
    }).when('/repositories',{
        templateUrl: 'templates/repo-list.html'
    }).otherwise({
        templateUrl: 'templates/overview.html'
    })
})