
/* main.js */

/* — — – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – –  */

class Lannister {

	constructor() {
		console.log("A Lannister is born !");
	}

	getSize() {
		return "Average";
	}

	houseMotto() {
		return "Hear me roar!";
	}
}

module.exports = Lannister;

/* — — – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – –  */

const Tyrion = require('./Tyrion.class');

var tyrion = new Tyrion();

console.log(tyrion.getSize());
console.log(tyrion.houseMotto());
