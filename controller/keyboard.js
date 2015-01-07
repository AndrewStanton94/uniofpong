/**

Your mission; should you accept it; is to implement a kayboard
interface to the game.

The keydown would be the obvious thing to listen for, and then either move
a bat up or down depending on the key pressed.

**/

var r, l;
r = document.querySelector("#rbat");
l = document.querySelector("#lbat");

function moveBat(bat, direction){
	var batY, newBatY, delta;
	batY = parseInt(bat.getAttribute('y'));
	console.log(batY);

	if (direction === 'up'){
		delta = -5;;
	}
	else delta = 5;
	newBatY = delta + batY;
	bat.setAttribute('y', newBatY);
	console.log("From: " + batY + " To: " + newBatY);
}

function keyPress(key){
	var keyCode = key.keyCode;
	console.log(key.keyCode + " Key Pressed");
	switch(keyCode){
		case 87:							// w
			console.log("Player1: UP");
			moveBat(l, 'up');
			break;
		case 83:							// s
			console.log("Player1: DOWN");
			moveBat(l, 'down');
			break;
		case 75:							// k
			console.log("Player2: UP");
			moveBat(r, 'up');
			break;
		case 74:							// j
			console.log("Player2: DOWN");
			moveBat(r, 'down');
			break;
	}
}

window.addEventListener("keydown", keyPress);
