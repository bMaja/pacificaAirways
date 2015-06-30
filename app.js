angular.module('PacificaAirways', []);

angular.module('PacificaAirways').controller('MainController', function($scope) {
	
	$scope.cityFrom = [
		{
			name: 'Ljubljana',
			price: 100
		},
		{
			name: 'Maribor',
			price: 200
		},
		{
			name: 'Gradec',
			price: 300
		}
	];
	
	$scope.cityTo = [
		{
			name: 'Gatwick',
			price: 100
		},
		{
			name: 'Heathrow',
			price: 200
		}
	];
	
	$scope.calculatePrice = function () {
		$scope.validation = true;
		$scope.totalPrice = $scope.selectedCityFrom.price + $scope.selectedCityTo.price;
	};

});
