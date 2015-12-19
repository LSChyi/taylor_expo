angular.module('myApp', [])
    .controller('mainCtrl', function($scope, $http) {
        $scope.init = function() {
            angular.element(document).ready(function() {
                $('#name').focus();
            });
        }

        $scope.send = function() {
            if($scope.name == "" || !$scope.name) {
                $scope.name = "匿名";
            }
            if($scope.content == "" || !$scope.content) {
                $.growl.error({ 
                    title: "",
                    message: "你沒填留言喔 =3="
                })
                return;
            }
            else {
                $http.post("/message", {
                    name: $scope.name,
                    content: $scope.content
                })
                    .success(function() {
                        $.growl.notice({
                            title: "",
                            message: "存進server囉~松錡感謝你 <3"
                        })
                        $scope.content = "";
                        $scope.name = "";
                        $('#name').focus();
                    })
                    .error(function() {
                        $.growl.error({
                            title: "",
                            message: "糟糕，server好像怪怪的。先去逛逛再來留言吧~(或者呼叫松錡來修QQ)"
                        })
                    })
            }
        }
    })