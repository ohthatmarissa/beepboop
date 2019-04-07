




$(document).ready(function() {
  $('form#beepBoop').submit(function(event) {
    event.preventDefault();

  var userInput = parseInt($('input#number').val());
  var result = modify(userInput);
  $('#result').text(result);


  function modify(userInput) {
    // if (isNaN(userInput))
    //   return 'Please enter a valid number';
    // else
  // var oneTwoThree = [1, 2, 3];
    var array = [];
    for (var i = 0; i <= userInput; i++){
      array.push(userInput);

      console.log(i)
      if ((i+'').indexOf('3') > -1)
        console.log('im sorry Dave.');
      else if ((i+'').indexOf('2') > -1)
        console.log('boop');
      else if ((i+'').indexOf('1') > -1)
        console.log('beep');
      else
        console.log(i);



    }
  }


  });
});
