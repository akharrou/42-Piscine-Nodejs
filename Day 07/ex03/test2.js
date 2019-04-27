
/* test2.js */

const House = require('./House.class.js');

class DrHouse extends House {

	diagnose() {
		console.log("It's not lupus !");
	}
}

let house = new DrHouse();
house.introduce();


/* Output:

-- produces a fatal error --

*/
