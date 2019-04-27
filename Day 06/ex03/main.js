
const Vertex   = require('../ex01/Vertex.class.js');
const Vector   = require('../ex02/Vector.class.js');
const Matrix   = require('./Matrix.class.js');

const M_PI_4   = 0.78539816339744830962;
const M_PI_2   = 1.57079632679489661923;
const M_PI     = 3.14159265358979323846;

Vertex.verbose = false;
Vector.verbose = false;

// process.stdout.write(Matrix.doc());

Matrix.verbose = true;

I = new Matrix( new Array(Matrix.IDENTITY));
console.log(`${I}`);

let vtx = new Vertex( new Array(20.0, 20.0, 0.0));
let vtc = new Vector(new Array(vtx));
let T  = new Matrix( new Array(Matrix.TRANSLATION, vtc) );
console.log(`${T}`);

S  = new Matrix( new Array(Matrix.SCALE,10.0));
console.log(`${S}`);

RX = new Matrix( new Array(Matrix.RX, M_PI_4));
console.log(`${RX}`);

RY = new Matrix( new Array(Matrix.RY,M_PI_2));
console.log(`${RY}`);

RZ = new Matrix( new Array(Matrix.RZ,2 * M_PI));
console.log(`${RZ}`);

P = new Matrix( new Array(Matrix.PROJECTION, 60, 640/480, 1.0, -50.0));
console.log(`${P}`);

M = T.mult(RX).mult(RY).mult(S);
console.log(`${M}`);

vtxA = new Vertex( new Array(1.0, 1.0, 0.0));
console.log(`${vtxA}`);
console.log(`${M}`);

vtxB = M.transformVertex(vtxA);
console.log(`${vtxB}`);
