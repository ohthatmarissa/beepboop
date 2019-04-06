
function modify(userInput) {

 if (isNaN(userInput))
    return 'Please enter a valid number';
  else
    return userInput

  if (!isNaN(userInput))
  var text = "";
  var i;
  for (i = 0; i < 10; i++)
    text += "" + i + "<br>";


    if (userInput[0-10] === '1')
      return 'Beep'
    else if (userInput[1-10] === '2')
      return 'Boop'
    else (userInput[1-10] === '3')
      return 'Im sorry Dave. Im afraid I cant do that'
}

$(document).ready(function() {
  $('form#beepBoop').submit(function(event) {
    event.preventDefault();

  var userInput = $('input#number').val();
  var result = modify(userInput);
  $('#result').text(result);

  });
});
