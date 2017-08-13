$(document).ready(function(){
	var Random=Math.floor(Math.random()* 19 + 100)
// selects a random number between 19-120
// random number is shown at start of the game

$('.numberValue').text(Random);
// randomNumber id in the html document 


// each crystal needs a number now between 1-20
var num1= Math.floor(Math.random()* 19 + 1)
var num2= Math.floor(Math.random()* 19 + 1)
var num3= Math.floor(Math.random()* 19 + 1)
var num4= Math.floor(Math.random()* 19 + 1)


var wins = 0;
var losses = 0;


var userTotal = 0;

// variables to score the game 

$('#win').text(wins);
$('#loss').text(losses);

// resetting the game

function reset() {
	Random=Math.floor(Math.random()*100 + 19)
	console.log(Random)
	$('.numberValue').text(Random);
	num1= Math.floor(Math.random()* 19 + 1)
	num2= Math.floor(Math.random()* 19 + 1)
	num3= Math.floor(Math.random()* 19 + 1)
	num4= Math.floor(Math.random()* 19 + 1)
	userTotal = 0;
	$('#yourScore').text(userTotal);
}

// wins to the game total

    function win() {
 	alert("You win!");
 	wins++;
 	$('#win').text(wins);
	reset();
 }

// losses to the game total 

    function lose() {
	alert("You lose!");
 	losses++;
	$('#loss').text(losses);
 	reset()
 }


// clicking for the jewels

	$('.crystal1').on('click', function() {
		userTotal = userTotal + num1;
		console.log("New userTotal= " + userTotal);
		$('#yourScore').text(userTotal);

		// win vs lose condition statement 

		if (userTotal == Random) {
			win();
		} else if (userTotal > Random) {
			lose();
		}
	})

	$('.crystal2').on('click', function() {
		userTotal = userTotal + num2;
		console.log("New userTotal= " + userTotal);
		$('#yourScore').text(userTotal);
		 

		// win vs lose condition statement 

		if (userTotal == Random) {
			win();
		} else if (userTotal > Random) {
			lose();
		}

	})

	$('.crystal3').on('click', function() {
		userTotal = userTotal + num3;
		console.log("New userTotal= " + userTotal);
		$('#yourScore').text(userTotal);

		// win vs lose condition statement 

		if (userTotal == Random) {
			win();
		} else if (userTotal > Random) {
			lose();
		}
	})

	$('.crystal4').on('click', function() {
		userTotal = userTotal + num4;
		console.log("New userTotal= " + userTotal);
		$('#yourScore').text(userTotal);

		// win vs lose condition statement 

		if (userTotal == Random) {
			win();
		} else if (userTotal > Random) {
			lose();
		}
	});
});