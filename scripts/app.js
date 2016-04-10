var app = angular.module("dpactumWWW", ['ngRoute']);
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
        .when('/urlName', {
            templateUrl: 'partials/partial-name.html', /* Change this to the new html file */
            controller: 'StaticCtrl' /*  Don't change this */
        })
    .otherwise({
            redirectTo: '/home'
        });
}]);

