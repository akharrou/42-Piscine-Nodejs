
const NightsWatch = require('./NightsWatch.class');

/* implements 'IFighter' */
class JonSnow {

  fight() {
		console.log("* looses his wolf on the enemy, and charges with courage *");
	}

  isABastard() {
		return true;
	}
}

class MaesterAemon {

	sendRavens() {
		console.log("* sends a raven carrying an important message *");
	}
}

/* implements 'IFighter' */
class SamwellTarly {

  fight() {
		console.log("* flees, finds a girl, grows a spine, and defends her to the bitter end *");
	}

  makeHisFatherProud() {
		return false;
	}
}

let jon = new JonSnow();
let aemon = new MaesterAemon();
let sam = new SamwellTarly();
let nw = new NightsWatch();

nw.recruit(jon);
nw.recruit(aemon);
nw.recruit(sam);

nw.fight();


/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

'implements' ommitted because it does not exist in
JavaScript.

'implements' means that the class must implement the
methods (all-be-it differently) of a specified class,
in this case of the class 'IFighter'.

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — —

As for why it should error out in the test2; I believe it
it is because the class 'Varys' does not 'implement' the
IFighter class when it in fact should since the implement
keyword is used on it.

And in test1 it does not error because the 'MaesterAemon'
does not 'implement' the IFighter class; and the classes
that do 'implement' the IFighter class, do in fact implement
it (they all have a 'fight()' method).

— — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */
