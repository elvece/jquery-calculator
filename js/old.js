//attempt from online tutorial


$(document).ready(function(){
  //variables for easier access
  var view = $('#screen');
  var buttons = $('span:not([class]');
  var operator = $('.operator');

//operator function
  $('.operator').on('click', function(){
    //do stuff
  });

  //clear function
  $('#cancel').on('click', function(){
    //do stuff
  });

  //equals funciton ie calculate
  $('#calc').on('click', function(){
    //do stuff
  });

  //number buttons click function
  buttons.on('click', function(){
    //if the screen shows any text from a previous function, reset this text
    if (view.data('from previous') === true){
      resetCalculator($(this).text());
    }
    //if the screen has a pending operator function and the first value entered is not locked...
    else if ((view.data("isPendingFunction") === true) && (view.data('valueOneLocked') === false)){
      //make valueOne display as a value on the screen
      view.data('valueOne', view.val());
      //turn the locked value to true so it stays on the screen
      view.data('valueOneLocked', true);
      //the value of the screen should be the text of value one at this point
      view.val($(this).text());
      //now valueTwo can be entered and displayed on the screen
      view.data('valueTwo', view.val());
      //turn the locked value to true, so it stays on the screen
      view.data('valueTwoLocked', true);
    }
    //clicking a number again, after the first number is locked in place and already a value for the second number
    else if ((view.data('isPendingFunction') === true) && (view.data('valueOneLocked') === true)){
      var currentValue = view.val();
      var toAdd = ($this).text();
      var newValue = currentValue +toAdd;
      view.val(newValue);
      view.data(valueTwo, )


      }
  });



//reset calculator function
  function resetCalculator(currentValue){

    //gets the current value on the screen
    $view.val(currentValue);
    //assuming a previous class was installed to the function that was going to be used in the calculation(aka the pending function)
    operator.removeClass('pending function');
    view.data('isPendingFunction', false);
    view.data('thePendingFunction', "");
    view.data('valueOneLocked', false);
    view.data('valueTwoLocked', false);
    view.data('valueOne', currentValue);
    view.data('valueTwo', 0);
    view.data('fromPrevious', false);
  }



});

//.eval()
