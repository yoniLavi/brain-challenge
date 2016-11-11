angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To Brain Challenge - Brainiacs' Heaven!";
    })
    .controller('MemoryController', function($scope) {
        $scope.title = "MemoryBox";
    })
    .controller('ConundrumController', function($scope) {
        $scope.title = "Conundrum";
    })
    .controller('BoardController', function($scope) {
        $scope.title = "BoardSwap";
    });