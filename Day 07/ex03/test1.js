
/* test1.js */

const House = require('./House.class.js');

class HouseStark extends House {

	getHouseName() {
		return "Stark";
	}

	getHouseMotto() {
		return "Winter is coming";
	}

	getHouseSeat() {
		return "Winterfell";
	}
}

class HouseMartell extends House {

	getHouseName() {
		return "Martell";
	}

	getHouseMotto() {
		return "Unbowed, Unbent, Unbroken";
	}

	getHouseSeat() {
		return "Sunspear";
	}
}

let houses = Array(new HouseStark(), new HouseMartell());

for (var house in houses) {
	houses[house].introduce();
}

/* Output:

House Stark of Winterfell : "Winter is coming"
House Martell of Sunspear : "Unbowed, Unbent, Unbroken"

*/
