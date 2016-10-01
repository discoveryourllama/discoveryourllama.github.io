var app = angular.module('llamaApp', 
    [
        'ngRoute', 
        'ngAnimate', 
        'ui.bootstrap', 
    ])

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'HomeCtrl',
        templateUrl: 'templates/home.html',
    })

    $routeProvider.when('/page1', {
        controller: 'Page1Ctrl',
        templateUrl: 'templates/page1.html',
    })

    $routeProvider.when('/page2', {
        controller: 'Page2Ctrl',
        templateUrl: 'templates/page2.html',
    })

    $routeProvider.when('/page3', {
        controller: 'Page3Ctrl',
        templateUrl: 'templates/page3.html',
    })

    $routeProvider.when('/page4', {
        controller: 'Page4Ctrl',
        templateUrl: 'templates/page4.html',
    })

    $routeProvider.when('/results', {
        controller: 'ResultsCtrl',
        templateUrl: 'templates/results.html',
    })

});