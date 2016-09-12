angular.module('llamaApp')

.controller('HomeCtrl', function($scope, $http, $location) {
    
	$scope.play = function(){
		console.log("I clicked play");
		$location.path('/page1');
	}

});