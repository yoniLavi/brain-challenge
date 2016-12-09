angular.module('RouteControllers', ['ui.bootstrap'])

    .controller('HomeController', function($scope) {
    })
    .controller('ModalController', function($scope, $uibModalInstance) {
        $scope.goback = $uibModalInstance.close;
    })
    .controller('MemoryController', function($scope, $uibModal) {
        $scope.scoreBox = "Memory Score";
        $scope.modalBody = [
            "Copy the sequence by clicking on the coloured boxes in the same order you're shown.",
            "The number of boxes in the sequence will increase by 1 every time.",
            "Try and beat your high score!",
        ];
        $scope.openInstructionsModal = function() {
            $uibModal.open({scope: $scope, controller: 'ModalController', templateUrl: 'templates/modal.html'});
        }
    })
    .controller('ConundrumController', function($scope, $uibModal) {
        $scope.scoreBox = "Conundrum Score";
        $scope.modalBody = [
            "You have 30 seconds to solve the conundrum to make a real word.",
            "Type your answer in the box before the time is up!",
        ];
        $scope.openInstructionsModal = function() {
            $uibModal.open({scope: $scope, controller: 'ModalController', templateUrl: 'templates/modal.html'});
        }
    })
    .controller('BoardController', function($scope, $uibModal) {
        $scope.scoreBox = "BoardSwap Score";
        $scope.modalBody = [
            "Swap the red and black pieces in the fewest moves possible by moving into the empty space.",
            "You can only move a piece within 2 spaces into the empty space.",
        ];
        $scope.openInstructionsModal = function() {
            $uibModal.open({scope: $scope, controller: 'ModalController', templateUrl: 'templates/modal.html'});
        }
    });
