var msg1 = document.getElementById("message1")
var msg2 = document.getElementById("message2")
var msg3 = document.getElementById("message3")

var answer = Math.floor(Math.random()*50) + 1;
var no_of_guesses = 0;
var guesses_num = [];

function play() {
	var user_guess = document.getElementById("guess").value;
	if (user_guess < 1 || user_guess > 50) {
		alert("Please enter a number between 1-50!");
	} else {
		guesses_num.push(user_guess);
		no_of_guesses +=1;
		if (user_guess < answer) {
			msg1.textContent = "Your guess is low!"
			msg2.textContent = "No. of guesses : " + no_of_guesses;
			msg3.textContent = "Guessed number are: " + guesses_num;
		} else if (user_guess > answer) {
			msg1.textContent = "Your guess is high!"
			msg2.textContent = "No. of guesses : " + no_of_guesses;
			msg3.textContent = "Guessed number are : " + guesses_num;
		}
		else if (user_guess == answer) {
			msg1.textContent = "Congratulations! You won it!"
			msg2.textContent = "The number was : " + answer
			msg3.textContent = "You guessed it in " + no_of_guesses + " guesses!";
		}
	}
}

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

