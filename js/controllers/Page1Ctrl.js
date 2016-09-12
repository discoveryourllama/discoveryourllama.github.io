angular.module('llamaApp')

.factory('choice', function () {
    return {sharedObject: {work: 0, soph: 0, hipster: 0, fun: 0, athletic: 0, crazy: 0}};
})

.controller('Page1Ctrl', function($scope, $http, $location, choice) {

    console.log("On page 1");

    $scope.choiceObj = choice.sharedObject;

    $scope.select = function(x){
    	console.log("selected option: " + x);
    	if ( x === 1 ){
    		$scope.choiceObj.work += 4;
    		$scope.choiceObj.soph += 2;
            $scope.choiceObj.fun += 1;
    	}
    	else if ( x === 2 ){
            $scope.choiceObj.work += 1;
    		$scope.choiceObj.soph += 4;
    		$scope.choiceObj.crazy += 1;
            $scope.choiceObj.fun += 3;
    	}
    	else if ( x === 3 ){
    		$scope.choiceObj.hipster += 4;
            $scope.choiceObj.fun += 2;
            $scope.choiceObj.crazy += 1;
            $scope.choiceObj.soph += 1;
    	}
    	else if ( x === 4 ){
    		$scope.choiceObj.fun += 4;
            $scope.choiceObj.hipster += 3;
            $scope.choiceObj.soph += 1;
    	}
    	else if ( x === 5 ){
    		$scope.choiceObj.athletic += 4;
    	}
    	else if ( x === 6 ){
    		$scope.choiceObj.crazy += 4;
            $scope.choiceObj.soph += 1;
            $scope.choiceObj.hipster += 1;
            $scope.choiceObj.fun += 1;
    	}

        $location.path("/page2");
    }

    console.log($scope.choiceObj);

});