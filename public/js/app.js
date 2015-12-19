angular.module('myApp', [])
    .controller('mainCtrl', function($scope, $http) {
        $scope.init = function() {
            angular.element(document).ready(function() {
                $('#name').focus();
            });
        }

        $scope.send = function() {
            if($scope.content == "" || !$scope.content) {
                $.growl.error({ 
                    title: "",
                    message: "你沒填留言喔 =3="
                })
                return;
            }
            else {
                $.growl.notice({
                    title: "",
                    message: "存進server囉~松錡感謝你 <3"
                })
                $scope.content = "";
                $scope.name = "";
                $('#name').focus();
            }
        }
    })