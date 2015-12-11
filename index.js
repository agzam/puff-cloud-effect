var app = angular.module('app',['ngAnimate']);

app.controller('ctrl', function($scope) {
    $scope.boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    $scope.remove = (box)=> {
        $scope.boxes = $scope.boxes.filter(b=> b !== box);
    };
});
