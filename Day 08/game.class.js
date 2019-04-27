
/* Game Class */

class Game {

	constructor() {

		var p1_coords = [
			[12, 1],
			[13, 1],
			[14, 1]
		];

		var p2_coords = [
			[0, 13],
			[1, 13],
			[2, 13]
		];

		this.player2 = new Player("Gie", "#0000FF", "UP", p1_coords);
		this.player1 = new Player("Mav", "#FF0000", "DOWN", p2_coords);
		this.state = 0;
	}

	// startGame() {

	// 	for (; ;) {
	// 		playTurn(player1);
	// 		playTurn(player2);
	// 	}
	// };


	playTurn(player) {

		orderPhase(player1);
		if (movementPhase(player) == -1 || shootPhase(player) == -1) {
			endGame();
		}
	}

	orderPhase(player) {

	};

	movementPhase(player) {

	};

	shootPhase(player) {

	};

	endGame() {

	};

}
