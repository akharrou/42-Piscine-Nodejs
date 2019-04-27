
const UnholyFactory = require('./UnholyFactory.class');
const Fighter = require('./Fighter.class');

class CrippledSoldier extends Fighter {

	constructor() {
		super("crippled soldier");
	}
}

var uf = new UnholyFactory();
uf.absorb(new CrippledSoldier());

requested_fighters = [
	"crippled soldier",
	"crippled soldier",
	"crippled soldier",
	"crippled soldier",
];

actual_fighters = [];

for (var i in requested_fighters) {

	f = uf.fabricate(requested_fighters[i]);
	if (f != null) {
		actual_fighters.push(f);
	}
}

targets = ["the Hound", "Tyrion", "Podrick"];

for (var i in actual_fighters) {
	for (var i in targets) {
		f.fight(targets[t]);
	}
}
