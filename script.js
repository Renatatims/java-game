var ties = 0;
var wins = 0;
var losses = 0;



confirm("Would you like to play Rock, Paper or Scissors?");




/* Win Scenarios */

function game() {
	var options = ['R', 'P', 'S']
	var random = Math.floor(Math.random() * options.length);
	var computer = options[random];
	var user = prompt("Please enter your choice: R, P or S");

	alert("Computer chose " + computer);

	if (
		(user === 'R' && computer === "S") ||
		(user === 'P' && computer === "R") ||
		(user === 'S' && computer === "P")) {
		alert("You win!");
		wins++;

	} else if (user === computer) {
		alert("It's a tie!");
		ties++;

	} else {
		alert("You loose");
		losses++;
	}

	alert("Totals: " + "\nWins: " + wins + "\nTies: " + ties + "\nLosses: " + losses)

	var again = confirm ("Do you want to play again?");
	if (again) {
		game();
	}

}


game();





/*


var playGame = confirm("Would you like to play?");
console.log(playGame);


alert("It's a tie");

var choice = prompt("Please type, R, P or S");
console.log (choice);


var options = ['R', 'P', 'S']


console.log(random);

/*
console.log(Math.floor(Math.random()*10));

console.log(Math.ceil(Math.random()*10));

*/

/* if - User wins -
* else if - "It's a tie"
* else - looses


/* confirm ("Do you want to play?")*/