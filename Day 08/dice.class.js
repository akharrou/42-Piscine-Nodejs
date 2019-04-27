
/* Dice Class */

class Dice {
	static roll() {
		return Math.floor(Math.random() * Math.floor(max) + 1);
	}
}

module.exports = Dice;
