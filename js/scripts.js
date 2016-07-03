var aa;

var ringboxApp_ng = angular.module('app', []);
ringboxApp_ng.controller('appCtrl', function($scope) {
	$scope.title="標題";
	$scope.bc="#a81013";
	$scope.fb="2em";
	$scope.fs="1em";
	
	$scope.data=[
			{
				l1:[{j:"ヒー"},{j:"ロー"}],
				l2:[{j:"hi"},{j:"ro"}],
				r1:[{j:"英雄"}],
				r2:[{j:"hero"}]
			}
	];
	$scope.editCell=function(m,i,d){
		switch(m)
		{	case('+'):
			switch(d){
				case('l'): $scope.data[i].l1.push({j:""});$scope.data[i].l2.push({j:""});break;
				case('r'): $scope.data[i].r1.push({j:""});$scope.data[i].r2.push({j:""});break;
				default:;
			}break;
			case('-'):
			switch(d){
				case('l'):
					if ($scope.data[i].l1.length>=2) {$scope.data[i].l1.pop();$scope.data[i].l2.pop();}break;
				case('r'):
					if ($scope.data[i].r1.length>=2) {$scope.data[i].r1.pop();$scope.data[i].r2.pop();}break;
				default:;
			}break;
			default:;
		}
	}
	$scope.appendRow=function(){
		$scope.data.push({l1:[{j:""}],l2:[{j:""}],r1:[{j:""}],r2:[{j:""}]});
	}
	$scope.deleteRow=function(){
		if ($scope.data.length>=2) $scope.data.pop();
	}
});