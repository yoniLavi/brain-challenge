angular.module('RouteControllers', [])
    .controller('HomeController', function($scope) {
        $scope.title = "Welcome To Brain Challenge - Brainiacs' Heaven!";
    })
    .controller('ModalController', function($scope, $uibModalInstance) {
        $scope.goback = function() {
            $uibModalInstance.close('goback');
        }
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