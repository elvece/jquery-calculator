$(document).on('ready', function(){

});

//globals
var calculationArray = [];
var total = [];

// *** event handlers *** //

//handle number clicks
$('span').not($('.operator')).on('click', function(){
  var $buttonClicked = $(this).html();
  addToScreen($buttonClicked);
  calculationArray.push($buttonClicked);
  // console.log(calculationArray);
});

//handle operator button
$('.operator').not($('#cancel, #calc')).on('click', function(){
  // console.log(calculationArray);
  var $operatorClicked = $(this).html();
  $('#screen').append($operatorClicked + '&nbsp;');
  total.push(calculationArray.join(''));
  total.push($operatorClicked);
  calculationArray = [];
  console.log(total);
});

//handle clear button
$('#cancel').on('click', function(){
  $('#screen').html("");
  calculationArray = [];
  total = [];
});

//handle equals button
$('#calc').on('click', function(){
  total.push(calculationArray.join(''));
  var answer = calculate(total);
  $('#screen').html(answer);
  calculationArray = [];
  total = [];
});

// *** helper functions *** //
function addToScreen(btn){
  $('#screen').append(btn + '&nbsp;');
}

