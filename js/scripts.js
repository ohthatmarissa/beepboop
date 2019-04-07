




$(document).ready(function() {
  $('form#beepBoop').submit(function(event) {
    event.preventDefault();

  var userInput = parseInt($('input#number').val());
  var result = modify(userInput);
  $('#result').text(result);


  function modify(userInput) {
    if (isNaN(userInput))
      return 'Please enter a valid number';
    else
  // var oneTwoThree = [1, 2, 3];
    var resultString = '';
    for (var i = 0; i <= userInput; i++) {

      if (i.toString().indexOf('3') > -1) {
        resultString = resultString + "i'm sorry Dave, ";
      }
      else if (i.toString().indexOf('2') > -1) {
        resultString = resultString + "Boop, ";
      }
      else if (i.toString().indexOf('1') > -1) {
        resultString = resultString + "Beep, ";
      }
      else {
        resultString = resultString + i.toString() + ", ";
      }

      // if (i.toString().indexOf('3') > -1)
      //   resultString = "im sorry Dave., ";
      //   console.log('im sorry Dave.');
      // else if ((i.toString()).indexOf('2') > -1)
      //   resultString = resultString +'boop, ';
      //   console.log('boop');
      // else if ((i.toString()).indexOf('1') > -1)
      //   resultString+'beep, ';
      //   console.log('beep');
      // else
      //   resultString+i.toString();
      //   console.log(i);


    }

    return resultString;
  }


  });
});
