var myApp = angular.module('BrainApp', ['ngRoute', 'RouteControllers', 'ui.bootstrap', 'ngSanitize'])
    
//controller for modal
myApp.controller('demoController', function($uibModal) {
    this.uibModal = function() {
        var uibModalInstance = $uibModal.open({
            controller: 'ModalController',
            templateUrl: 'templates/modal.html'
        })
    }
});
 
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

myApp.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);