
const Color = require('./Color.class');

/* Main — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

process.stdout.write(Color.doc());

Color.verbose = true;

let red = new Color([0xff, 0, 0]);
let green = new Color([255 << 8]);
let blue = new Color([0, 0, 0xff]);

let yellow = red.add(green);
let cyan = green.add(blue);
let magenta = blue.add(red);

let white = red.add(green).add(blue);

console.log(`${red}`);
console.log(`${green}`);
console.log(`${blue}`);
console.log(`${yellow}`);
console.log(`${cyan}`);
console.log(`${magenta}`);
console.log(`${white}`);

Color.verbose = false;

let black = white.sub(red).sub(green).sub(blue);
console.log('Black: ' + black);

Color.verbose = true;

let darkgrey = new Color([(10 << 16) + (10 << 8) + 10]);
console.log('darkgrey: ' + darkgrey);

let lightgrey = darkgrey.mult(22.5);
console.log('lightgrey: ' + lightgrey);

let random = new Color([12.3, 31.2, 23.1]);
console.log('random: ' + random);

/* Main — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */
