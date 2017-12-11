( function () {
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  // initialization of dishesText 
  $scope.dishesText = "";

  // A function to count dishes in a comma separated string
  // ... blank dishes are not taken into account...
  var countDishes = function (str) {
    var dishes = str.split(",");
    var nonEmptyDishNamesCount
      = dishes.filter(function (d) { return isBlank(d) == false; }).length;
    return nonEmptyDishNamesCount;
  };

  // The function used by the UI to set the message depending on
  // ... dish count. When data is not present, output is red.
  // ... In all other cases output is green.
  $scope.setMessage = function () {
    if(countDishes($scope.dishesText)==0)
    {
      $scope.Message = "Please enter data first";
      $scope.msgStyle = { "color" : "red",
                          "border" : "2px solid",
                          "padding" : "4px" };
    }
    else
    {
      $scope.msgStyle={"color" : "green",
                        "border" : "2px solid",
                        "padding" : "4px"
                      };
      if (countDishes($scope.dishesText)<=2)
        $scope.Message = "Enjoy!";
      else
        $scope.Message = "Too much!";
    }
  }
}
 // A helper function that tests whether a string
 // ... is blank (empty string or whitespace).
  function isBlank (str) {
    return str.trim()=="";
  }

})();
