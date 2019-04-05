
function modify(userInput) {

  if (isNaN(userInput)){
    return 'Please enter a valid number';
  } else {
    return userInput;
  }
}


$(document).ready(function() {
  $('form#beepBoop').submit(function(event) {
    event.preventDefault();

  var userInput = $('input#number').val();
  var result = modify(userInput);
  $('#result').text(result);


  });
});
