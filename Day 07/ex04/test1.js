
/* test1.js */

const Lannister = require('./Lannister.class');
const Jaime = require('./Jaime.class');
const Tyrion = require('./Tyrion.class');

class Stark {
}

class Cersei extends Lannister {
}

class Sansa extends Stark {
}

let j = new Jaime();
let c = new Cersei();
let t = new Tyrion();
let s = new Sansa();

j.sleepWith(t);
j.sleepWith(s);
j.sleepWith(c);

t.sleepWith(j);
t.sleepWith(s);
t.sleepWith(c);
