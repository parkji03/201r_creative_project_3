var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/home", {
        // templateUrl : 'home.html'
        // controller : 'mainCtrl'
    })
    .when("/spring", {
        templateUrl : 'spring.html',
        controller : 'springCtrl'

    })
    .when("/summer", {
        templateUrl : 'summer.html',
        controller : 'summerCtrl'
    })
    .when("/fall", {
        templateUrl : 'fall.html',
        controller : 'fallCtrl'
    })
    .when("/winter", {
        templateUrl : 'winter.html',
        controller : 'winterCtrl'
    })
    .otherwise({
        //redirectTo: '/'
    });
});

// app.controller('mainCtrl', function($scope){
//     $scope.season = "Welcome!";
// })

app.controller('springCtrl', function($scope){
    $scope.season = "Spring (Vernal)";
});

app.controller('summerCtrl', function($scope) {
    $scope.season = "Summer (Estival)";
});

app.controller('fallCtrl', function($scope) {
    $scope.season = "Fall (Autumnal)";
});

app.controller('winterCtrl', function($scope) {
    $scope.season = "Winter (Hibernal)";
});