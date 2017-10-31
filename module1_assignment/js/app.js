( function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishesText = "";

  // $scope.parseDishes = function () {
  //   var dishes = $scope.dishesText.split(',');
  // };
   function isBlank (str) {
     return str.trim()==""; };

  var countDishes = function (str) {
    var dishes = str.split(",");// $scope.dishesText.split(',');
    var nonEmptyDishNamesCount
      = dishes.filter(function (d) { return isBlank(d) == false; }).length;
    return nonEmptyDishNamesCount;
   };

  //$scope.Message="";

  $scope.setMessage = function () {
    if(countDishes($scope.dishesText)==0)
        $scope.Message = "Please enter data first";
      else if (countDishes($scope.dishesText)<=3)
        $scope.Message = "Enjoy!";
      else
        $scope.Message = "Too much!";
    }

}




})();
