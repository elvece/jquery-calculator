//javaScript calculator functions

//FROM CLASS
function calculateValue(resultsArray){
  //variables
  firstNum = parseInt(resultsArray[0]);
  operatorInput = resultsArray[1];
  secondNum = parseInt(resultsArray[2]);

  switch(operatorInput){
    case '':
      return (firstNum + secondNum);
    case '-':
      return (firstNum - secondNum);
    case '*':
      return (firstNum * secondNum);
    case '/':
      return (firstNum / secondNum);
    default:
      return 'wrong';
  }

}

module.exports = {
  calculateValue: calculateValue
};



//old attempt
// function sum (num1, num2){
//   var answer = num1 + num2;
//   return answer;
// }

// function subtract (num1, num2){
//   var answer = num1 - num2;
//   return answer;
// }

// function multiply (num1, num2){
//   var answer = num1 * num2;
//   return answer;
// }

// function divide (num1, num2){
//   var answer = num1 / num2;
//   return answer;
// }
