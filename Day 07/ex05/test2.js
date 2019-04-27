
const NightsWatch = require('./NightsWatch.class')

/* implements 'IFighter' */
class Varys {

	pretendToFight() {
		console.log("* finds someone to fight for him *");
	}
}

var varys = new Varys();
var nw = new NightsWatch();

nw.recruit(varys);
nw.fight();
