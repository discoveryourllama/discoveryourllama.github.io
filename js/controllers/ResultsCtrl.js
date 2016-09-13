angular.module('llamaApp')

.controller('ResultsCtrl', function($scope, $http, $location, choice) {

    console.log("On results page");

    $scope.isCrazy, $scope.isHip, $scope.isSoph, $scope.isWork, $scope.isFun, $scope.isAth, $scope.isEmpty = false;

    $scope.choiceObj = choice.sharedObject;

    console.log($scope.choiceObj);
    console.log($scope.choiceObj.crazy);

    if($scope.choiceObj.crazy >= 12){
        console.log("llama is crazy");
        $scope.isCrazy = true;
    }
    else if ($scope.choiceObj.hipster >= 11){
        console.log("llama is hip");
        $scope.isHip = true;
    }
    else if ($scope.choiceObj.athletic >= 12){
        console.log("llama is athletic");
        $scope.isAth = true;
    }
    else if ($scope.choiceObj.soph >= 12){
        console.log("llama is soph");
        $scope.isSoph = true;
    }
    else if ($scope.choiceObj.fun >= 10){
        console.log("llama is fun");
        $scope.isFun = true;
    }
    else if ($scope.choiceObj.work >= 9){
        console.log("llama is work");
        $scope.isWork = true;
    }
    else {
        $scope.isFun = true;
    }

    $scope.begin = function(){
        console.log("back");
        $scope.choiceObj.work = 0;
        $scope.choiceObj.soph = 0;
        $scope.choiceObj.fun = 0;
        $scope.choiceObj.hipster = 0;
        $scope.choiceObj.athletic = 0;
        $scope.choiceObj.crazy = 0;
        $location.path("/page1");
    }
});