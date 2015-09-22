var app = angular.module('calcApp', []);

app.controller('calculate', function($scope){
  var num = [];
  var expression = [];

  $scope.buttonVal = function(){
    x = event.target;
    if (angular.element(x).html() === "="){
      expression.push(num.join(""));
      console.log(expression)
      // answer = eval(num.join("").replace("x", "*"));
      answer = calculate2(expression);
      console.log(answer);
      num = [answer];
      $scope.screen = answer;
      expression = [];

    }
    else if (angular.element(x).html() === "C"){
      num = [];
      expression = [];
      $scope.screen = "";
    }
    else if (angular.element(x).html() === "+"){
      console.log(num)
      expression.push(num.join(""));
      expression.push(angular.element(x).html());
      console.log(expression);
      $scope.screen = expression;
      num = [];
      console.log(num)
    }
    else if (x.nodeName === "SPAN"){
      x = angular.element(x).html();
      num.push(x);
      $scope.screen = num;
    }
  };
});


