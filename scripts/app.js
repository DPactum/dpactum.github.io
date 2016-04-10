var app = angular.module("dpactumWWW", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'StaticCtrl'
        })
        .when('/urlName', {
            templateUrl: 'partials/home.html', /* Change this to the new html file */
            controller: 'StaticCtrl' /*  Don't change this */
        })
    .otherwise({
            redirectTo: '/home'
        });
}]);

app.controller("HomeCtrl", ['$scope', function ($scope) {

}]);
app.controller("StaticCtrl", ['$scope', function ($scope) {

}]);