var app = angular.module('calcApp', []);

app.controller('calculate', function($scope){
  var num = [];
  $scope.buttonVal = function(){
    x = event.target;
    if (angular.element(x).html() === "="){
      answer = eval(num.join("").replace("x", "*"));
      $scope.screen = answer;
    }
    else if (angular.element(x).html() === "C"){
      num = [];
      $scope.screen = "";
    }
    else if (x.nodeName === "SPAN"){
      x = angular.element(x).html();
      console.log(x);
      num.push(x);
      $scope.screen = num.join("");
    }
  };
});

//clear
//calculate eval
