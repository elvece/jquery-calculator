//javaScript calculator functions

function calculateValue(resultsArray){
  //variables
  firstNum = parseInt(resultsArray[0]);
  operatorInput = resultsArray[1];
  secondNum = parseInt(resultsArray[2]);

  switch(operatorInput){
    case '+':
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
