var app = angular.module('calc', []);

app.controller('MainCtrl',['$scope', function($scope){
	$scope.result = function(){
		if($scope.op == "+"){
			return $scope.num1 + $scope.num2;
		}
		if($scope.op == "-"){
			return $scope.num1 - $scope.num2;
		}
		if($scope.op == "/"){
			return $scope.num1 / $scope.num2;
		}
		if($scope.op == "*"){
			return $scope.num1 * $scope.num2;
		}

	};
}]);