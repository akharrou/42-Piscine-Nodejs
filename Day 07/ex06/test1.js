
const UnholyFactory = require('./UnholyFactory.class');
const Fighter = require('./Fighter.class');

class Footsoldier extends Fighter {

	constructor() {
		super("foot soldier");
	}

	fight(target) {
		console.log("* draws his sword and runs towards " + target + " *");
	}
}

class Archer extends Fighter {

	constructor() {
		super("archer");
	}

	fight(target) {
		console.log("* shoots arrows at " + target + " *");
	}
}

class Assassin extends Fighter {

	constructor() {
		super("assassin");
	}

	fight(target) {
		console.log("* creeps behind " + target + " and stabs at it *");
	}
}

class Llama {

	fight(target) {
		console.log("* spits at " + target + " *");
	}
}

uf = new UnholyFactory();
uf.absorb(new Footsoldier());
uf.absorb(new Footsoldier());
uf.absorb(new Archer());
uf.absorb(new Assassin());
uf.absorb(new Llama());

var requested_fighters = [
	"foot soldier",
	"llama",
	"foot soldier",
	"archer",
	"foot soldier",
	"assassin",
	"foot soldier",
	"archer"
];

var actual_fighters = [];
for (var i in requested_fighters) {
	f = uf.fabricate(requested_fighters[i]);
	if (f != null) {
		actual_fighters.push(f);
	}
}

var targets = ["the Hound", "Tyrion", "Podrick"];

for (var i in actual_fighters) {
	for (var t in targets) {
		actual_fighters[i].fight(targets[t]);
	}
}
