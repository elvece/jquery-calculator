//attempt with my own logic
//jQuery

$(document).ready(function(){

  //variables for easier access
  var screenView = $('#screen');
  var numButtons = $('span:not([class]');
  var operatorButtons = $('.operator');
  var clearButton = $('#cancel');

//operator function
  operatorButtons.on('click', function(event){
    sum(); ///each needs to have two inputs
    subtract();
    multiply();
    divide();
  });

//clear function
  clearButton.on('click', function(event){
    // event.preventDefault();
    // screenView.val('');
  });

//equals funciton ie calculate
  $('#calc').on('click', function(event){
    //do stuff
  });

//number buttons click function
  numButtons.on('click', function(event){
    var value = $(this).innerHTML;
    screenView.innerHTML = screenView.innerHTML + value;
  });


//reset calculator function
  function resetCalculator(){
    //same as clear button?
  }

});

//FROM CLASS

//global variables
 var arthimeticArray = [];
 var operator = null;

 //appends values to the calcualtor screen
 $('.buttons span').not('#calc').on('click', function(){
  var keyPress = $(this).html();
  $('#screen').append(keyPress);
 })


//calculate button
$('#calc').on('click', function(){
  var calcScreen = $('screen').html();
  // console.log(calcScreen);
  var resultsArray = calcScreen.split("");
  // console.log(resultsArray);
  // $('#screen').html(normalizeData(resultsArray));
})


//appends values to calculator scren
$('.button span').not('#calc').on('click', function(){
  var keyPress = $(this).html();
  console.log(keyPress);
  $('screen').append(keyPress);
});


//grabs first number and operator and adds to arthmeticArray
$('.operator').not('#cancel').not('#calc').on('click', function(){

  var keyPresss = $(this).html();
  var tempNumbers = $('#screen').html().split('');
  operator = tempNumbers.pop();
  console.log(keyPress);
  arthimeticArray.push(tempNumbers.join(''));
  arthimeticArray.push(operator);
  console.log(arthimeticArray);

});

//grabs second number and operator and its it to the arithmeticArray, then calls calculateValue() function and appends answer to the DOM
$('.#calc').on('click', function(){
  var calcScreen = $('#screen').html();
  var number2 = calcScreen.split(operator)[1];
  arthimeticArray.push(number2);
  $('#screen').html(calculateValue(resultsArray));
});

//cancel or clear button to empty the screen
$('#cancel').on('click', function(){
  $('#screen').empty();
});

function calculateValue(resultsArray){
  //variables
  firstNum = parseInt(resultsArray[0]);
  operatorInput = resultsArray[1];
  secondNum = parseInt(resultsArray[2]);

}






