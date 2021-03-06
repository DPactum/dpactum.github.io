var app = angular.module("dpactumWWW", ['ngRoute', 'angulartics.google.analytics']);
app.controller("StaticCtrl", ['$scope', function ($scope) {
}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'StaticCtrl'
        })
        .when('/blog', {
            templateUrl: 'partials/blog.html', /* Change this to the new html file */
            controller: 'StaticCtrl' /*  Don't change this */
        })
        .when('/about', {
            templateUrl: 'partials/about.html', /* Change this to the new html file */
            controller: 'StaticCtrl' /*  Don't change this */
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html', /* Change this to the new html file */
            controller: 'StaticCtrl' /*  Don't change this */
        })
        .when('/hiring', {
            templateUrl: 'partials/hiring.html', /* Change this to the new html file */
            controller: 'StaticCtrl' /*  Don't change this */
        })
        .when('/developer', {
            templateUrl: 'partials/developer.html', /* Change this to the new html file */
            controller: 'StaticCtrl' /*  Don't change this */
        })
        .when('/urlName', {
            templateUrl: 'partials/partial-name.html', /* Change this to the new html file */
            controller: 'StaticCtrl' /*  Don't change this */
        })
    .otherwise({
            redirectTo: '/home'
        });
}]);

