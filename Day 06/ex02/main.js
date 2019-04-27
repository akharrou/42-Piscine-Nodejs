
/* main.js */

const Vertex = require('./Vertex.class');
const Vector = require('./Vector.class');


Vertex.verbose = false;

process.stdout.write(Vector.doc());

Vector.verbose = true;

vtx0 = new Vertex ([0, 0, 0]);
vtxX = new Vertex ([1, 0, 0]);
vtxY = new Vertex ([0, 1, 0]);
vtxZ = new Vertex ([0, 0, 1]);

vtcXunit =  new Vector ([vtx0, vtxX]);
vtcYunit =  new Vector ([vtx0, vtxY]);
vtcZunit =  new Vector ([vtx0, vtxZ]);

console.log(`${vtcXunit}`);
console.log(`${vtcYunit}`);
console.log(`${vtcZunit}`);

dest1 = new Vertex([ -12.34, 23.45, -34.56 ]);
Vertex.verbose = true;
vtc1  = new Vector([dest1 ]);
Vertex.verbose = false;

orig2 = new Vertex([ 23.87,  -37.95, 78.34 ]);
dest2 = new Vertex([ -12.34, 23.45, -34.56 ]);
vtc2  = new Vector([ orig2, dest2 ]);

console.log('Magnitude is ' + vtc2.magnitude());

nVtc2 = vtc2.normalize();
console.log(`Normalized $vtc2 is ` + nVtc2);
console.log('Normalized vtc2 magnitude is ' + nVtc2.magnitude());

console.log('vtc1 + vtc2 is ' + vtc1.add( vtc2 ));
console.log('vtc1 - vtc2 is ' + vtc1.sub( vtc2 ));
console.log('opposite of vtc1 is ' + vtc1.opposite());
console.log('scalar product of vtc1 and 42 is ' + vtc1.scalarProduct( 42 ));
console.log('dot product of vtc1 and vtc2 is ' + vtc1.dotProduct( vtc2 ));
console.log('cross product of vtc1 and vtc2 is ' + vtc1.crossProduct( vtc2 ));
console.log('cross product of vtcXunit and vtcYunit is ' + vtcXunit.crossProduct( vtcYunit ) + 'aka vtcZunit');
console.log('cosinus of angle between vtc1 and vtc2 is ' + vtc1.cos( vtc2 ));
console.log('cosinus of angle between vtcXunit and vtcYunit is ' + vtcXunit.cos( vtcYunit ));
