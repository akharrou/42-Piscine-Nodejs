
const Color = require('../ex00/Color.class');
const Vertex = require('./Vertex.class');

/* Main — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

Color.verbose = false;

process.stdout.write(Vertex.doc());

Vertex.verbose = true;

const vertex0 = new Vertex([0.0, 0.0, 0.0]);

console.log(`${vertex0}`);

red = new Color ([255, 0, 0]);
green = new Color ([0, 255, 0]);
blue = new Color ([0, 0, 255]);

unitX = new Vertex([1.0, 0.0, 0.0, green ]);
unitY = new Vertex([0.0, 1.0, 0.0, red   ]);
unitZ = new Vertex([0.0, 0.0, 1.0, blue  ]);

console.log(`${unitX}`);
console.log(`${unitY}`);
console.log(`${unitZ}`);

Vertex.verbose = false;

sqrA = new Vertex([0.0, 0.0, 0.0]);
sqrB = new Vertex([4.2, 0.0, 0.0]);
sqrC = new Vertex([4.2, 4.2, 0.0]);
sqrD = new Vertex([0.0, 4.2, 0.0]);

console.log(`${sqrA}`);
console.log(`${sqrB}`);
console.log(`${sqrC}`);
console.log(`${sqrD}`);

A = new Vertex([3.0, 3.0, 3.0] );
console.log(`${A}`);
equA = new Vertex([9.0, 9.0, 9.0, 3.0 ]);
console.log(`${equA}`);

Vertex.verbose = true;

/* Main — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */
