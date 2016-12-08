var myApp = angular.module('BrainApp', ['ngRoute', 'RouteControllers', 'ui.bootstrap', 'ngSanitize'])

/* controllers to pass the game instructions a modal box.
*  I suspect this could be done in a much cleaner way that wouldn't 
*  necessitate 3 separate templates
*/
myApp.controller('demo1Controller', function($scope, $uibModal) {
    this.uibModal = function() {
        var uibModalInstance = $uibModal.open({
            controller: 'ModalController',
            templateUrl: 'templates/modal1.html'
        })
    }
});

myApp.controller('demo2Controller', function($scope, $uibModal) {
    this.uibModal = function() {
        var uibModalInstance = $uibModal.open({
            controller: 'ModalController',
            templateUrl: 'templates/modal2.html'
        })
    }
});

myApp.controller('demo3Controller', function($scope, $uibModal) {
    this.uibModal = function() {
        var uibModalInstance = $uibModal.open({
            controller: 'ModalController',
            templateUrl: 'templates/modal3.html'
        })
    }
});
// routing configuration
myApp.config(function($routeProvider) {
 
    $routeProvider.when('/', {
        title: 'Welcome To Brain Challenge!',
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/memorybox', {
        title: 'MemoryBox',
        templateUrl: 'templates/memorybox.html',
        controller: 'MemoryController'
    })
    .when('/conundrum', {
        title: 'Conundrum',
        templateUrl: 'templates/conundrum.html',
        controller: 'ConundrumController'
    })
    .when('/boardswap', {
        title: 'BoardSwap',
        templateUrl: 'templates/boardswap.html',
        controller: 'BoardController'
    })
    .when('/accounts/register', {
        title: 'Register/Login',
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
});

// show route title on each page
myApp.run(['$rootScope', function($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);