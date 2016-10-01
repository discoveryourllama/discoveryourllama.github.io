angular.module('llamaApp')

.controller('Page4Ctrl', function($scope, $http, $location, choice) {

    console.log("On page 4");

    $scope.choiceObj = choice.sharedObject;

    $scope.select = function(x){
    	console.log("selected option: " + x);
    	if ( x === 1 ){
    		$scope.choiceObj.crazy += 4;
            $scope.choiceObj.hipster += 1;
            $scope.choiceObj.fun += 1;
    	}
    	else if ( x === 2 ){
            $scope.choiceObj.fun += 4;
            $scope.choiceObj.work += 1;
            $scope.choiceObj.soph += 2;
    	}
    	else if ( x === 3 ){
    		$scope.choiceObj.athletic += 4;
    	}
    	else if ( x === 4 ){
    		$scope.choiceObj.work += 4;
            $scope.choiceObj.soph += 3;
            $scope.choiceObj.fun += 1;
    	}
    	else if ( x === 5 ){
    		$scope.choiceObj.hipster += 4;
            $scope.choiceObj.fun += 1;
            $scope.choiceObj.crazy += 3;
    	}
    	else if ( x === 6 ){
    		$scope.choiceObj.soph += 4;
            $scope.choiceObj.fun += 1;
            $scope.choiceObj.work += 2;
    	}
        $location.path('/results');
    }

    console.log($scope.choiceObj);

});