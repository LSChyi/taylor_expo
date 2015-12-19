angular.module('myApp', [])
    .controller('mainCtrl', function($scope) {
        $scope.init = function() {
            angular.element(document).ready(function() {
                $('#name').focus();
            });
        }
    })