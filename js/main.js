// //attempt with my own logic
// //jQuery

$(document).ready(function(){

//   //variables for easier access
//   var screenView = $('#screen');
//   var numButtons = $('span:not([class]');
//   var operatorButtons = $('.operator');
//   var clearButton = $('#cancel');

// //operator function
//   operatorButtons.on('click', function(event){
//     sum(); ///each needs to have two inputs
//     subtract();
//     multiply();
//     divide();
//   });

// //clear function
//   clearButton.on('click', function(event){
//     // event.preventDefault();
//     // screenView.val('');
//   });

// //equals funciton ie calculate
//   $('#calc').on('click', function(event){
//     //do stuff
//   });

// //number buttons click function
//   numButtons.on('click', function(event){
//     var value = $(this).innerHTML;
//     screenView.innerHTML = screenView.innerHTML + value;
//   });


// //reset calculator function
//   function resetCalculator(){
//     //same as clear button?
//   }

// });

//FROM CLASS

//global variables
  var arthimeticArray = [];
  var operator = null;
  var screenView = $('#screen');

 //appends values to the calcualtor screen
  $('.buttons span').not('#calc').on('click', function(){
    var keyPress = $(this).html();
    screenView.append(keyPress);
  });

//grabs first number and operator and adds to arthmeticArray (essentially grabs everything to left of operator)
  $('.operator').not('#cancel').not('#calc').on('click', function(){
    var keyPresss = $(this).html();
    var calcScreenArray = screenView.html().split('');
    operator = calcScreenArray.pop();
    arthimeticArray.push(calcScreenArray.join(''));
    arthimeticArray.push(operator);
  });

//grabs second number and operator and adds it to the arithmeticArray, then calls calculateValue() function and appends answer to the DOM
  $('#calc').on('click', function(){
    var calcScreen = screenView.html();
    var number2 = calcScreen.split(operator)[1];
    arthimeticArray.push(number2);
    screenView.html(calculateValue(arthimeticArray));
  });

//cancel or clear button to empty the screen
  $('#cancel').on('click', function(){
    screenView.empty();
  });

});


