//helper functions
function calculate(arr){
console.log(arr);
  if (arr[1] === '+'){
    return parseInt(arr[0]) + parseInt(arr[2]);
  }
  else if (arr[1] === '-'){
    return parseInt(arr[0]) - parseInt(arr[2]);
  }
  else if (arr[1] === 'x'){
    return parseInt(arr[0]) * parseInt(arr[2]);
  }
  else {
    return parseInt(arr[0]) / parseInt(arr[2]);
  }
}
