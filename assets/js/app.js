
  var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);

  $("#number-to-guess").text(targetNumber);

  var counter = 0;
  var wins = 0;
  var lose = 0;
$( "#wins" ).text("Wins: " + wins)
  $( "#lose" ).text("Losses: " + lose);
  // make an array of possible numbers
  var numberChoice = [];

  // make a for loop for every numberChoice
// function makeCrystals(){
  for (var i = 0; i < 4; i++) {
    //make new rando number for each crystal bassed off of target number
    numberChoice[i] = Math.floor(Math.random() * (12 - 1) + 1)
    // console.log(Math.floor(Math.random() * 12) + 1)


    // add a crystal img
    var imageCrystal = $("<img>");

    // give each crystal a class of crystal image

    imageCrystal.addClass("crystal-image");

    imageCrystal.attr("id", "crystal-" + i)

    // add the images to the crystals
    imageCrystal.attr("src", "http://images.clipartpanda.com/crystal-clipart-crystals.png");

    // give each image crystal a data attribute and make it equal to array value
    imageCrystal.attr("data-crystalvalue", numberChoice[i]);

    // add crystal-image to the page
    $("#crystals").append(imageCrystal);
  }
// }
// makeCrystals()

  // on click function
  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    //winning and losing logic
    $('#score').text("Your current number: " + counter);

    if (counter === targetNumber) {
      console.log('this ran');
      wins++
      $("#wins").text("Wins: " + wins)
      counter = 0;
      $('#score').text("Your current number: " + counter);

        targetNumber = Math.floor(Math.random() * (120 - 19) + 19);

        $("#number-to-guess").text(targetNumber);
    }

    else if (counter >= targetNumber) {
      console.log('this ran if lose');
      lose++
        $( "#lose" ).text("Losses: " + lose);
        counter = 0;
        $('#score').text("Your current number: " + counter);

          targetNumber = Math.floor(Math.random() * (120 - 19) + 19);

          $("#number-to-guess").text(targetNumber);
    }

  });


//reset.
//probably used muti places.
//DRY don't repeat yourself.
function reset() {
  //reset the number we guessed
  // reset random number array to be new numbers
  for (var i = 0; i < 4; i++) {
    numberChoice[i] =  Math.floor(Math.random() * (12 - 1) + 1);
    //get new values for the crystals
    //grab the id of crsytal
    var imageCrystal = $('#crystal-' + i);
    imageCrystal.attr("data-crystalvalue", numberChoice[i]);
  }
  //reset wins and losses
  wins = 0;
  lose = 0;
  counter = 0;
  $( "#lose" ).html("Losses: " + lose);
  $( "#wins" ).text("wins: " + wins);
  $( "#score" ).text("Your current number: " + counter);

}
//when a button reset is clicked reset the game
$('#reset').on('click', reset);
