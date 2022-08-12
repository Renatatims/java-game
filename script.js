var ties = 0;
var wins = 0;
var losses = 0;


confirm("Would you like to play Rock, Paper or Scissors?");


function game() {
	var options = ['R', 'P', 'S']
	var random = Math.floor(Math.random() * options.length);
	var computer = options[random];
	var user = prompt("Please enter your choice: R, P or S");

	alert("Computer chose " + computer);

	/* If - Win Scenarios */
	if (
		(user === 'R' && computer === "S") ||
		(user === 'P' && computer === "R") ||
		(user === 'S' && computer === "P")) {
		alert("You win!");
		wins++;

	/*else if - Tie*/
	} else if (user === computer) {
		alert("It's a tie!");
		ties++;
	
	/*else - Loss*/

	} else {
		alert("You loose");
		losses++;
	}

	alert("Totals: " + "\nWins: " + wins + "\nTies: " + ties + "\nLosses: " + losses)

	/*Run the game again*/

	var again = confirm ("Do you want to play again?");
	if (again) {
		game();
	}

}

game();
