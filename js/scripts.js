function modify(userInput) {
  return userInput;
};


$(document).ready(function() {
  $('form#beepBoop').submit(function(event) {
    event.preventDefault();

  var userInput = $('input#number').val();
  var result = modify(userInput);
  $('#result').text(result);


  });
});
