angular.module('BrainApp', ['ngRoute', 'RouteControllers', 'ui.bootstrap'])
    
    //controller for modal
    .controller('demoController', function($uibModal) {
        this.uibModal = function() {
            var uibModalInstance = $uibModal.open({
                controller: 'ModalController',
                templateUrl: 'modal.html'
            })
        }
    });
 
angular.module('BrainApp').config(function($routeProvider) {
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/memorybox', {
        templateUrl: 'templates/memorybox.html',
        controller: 'MemoryController'
    })
    .when('/conundrum', {
        templateUrl: 'templates/conundrum.html',
        controller: 'ConundrumController'
    })
    .when('/boardswap', {
        templateUrl: 'templates/boardswap.html',
        controller: 'BoardController'
    })
    .when('/accounts/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
});