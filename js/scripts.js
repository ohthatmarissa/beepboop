$(document).ready(function() {
  $('form#beepBoop').submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($('input#number').val());
    var result = modify(userInput);
    $('#result').text(result);

    function modify(userInput) {
      if (isNaN(userInput)) {
        return 'Please enter a valid number';
      }
      else {
        var resultArray = [];
        for (var i = 0; i <= userInput; i++) {
          var counterString = i.toString();
          if (counterString.includes('3')) {
            resultArray.push("Im sorry Dave");
          }
          else if (counterString.includes('2')) {
            resultArray.push("Boop");
          }
          else if (counterString.includes('1')) {
            resultArray.push("Beep");
          }
          else {
            resultArray.push(counterString);
          }
        }
        return resultArray.join(", ");
      }
    }
  });
});
