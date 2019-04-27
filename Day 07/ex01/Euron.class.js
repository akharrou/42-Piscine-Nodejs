
/* Euron.class.php */

const Greyjoy = require('./Greyjoy.class');

class Euron extends Greyjoy {

	announceMotto() {
		console.log(this.familyMotto);
	}
}

module.exports = Euron;
