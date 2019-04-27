/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Matrix.class.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.us.org>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/03 18:45:53 by akharrou          #+#    #+#             */
/*   Updated: 2019/04/26 18:40:05 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs     = require('fs');
const Vertex = require('../ex01/Vertex.class.js');
const Vector = require('../ex02/Vector.class.js');

class Matrix {

	static doc() {
		return (fs.readFileSync('./Matrix.doc.txt'));
	};

	/* Converts from degrees to radians */
	degrees_to_radians(degrees) {
		return degrees * Math.PI / 180;
	};

	constructor(argv) {

		if (argv[0] == Matrix.SET)
			var matrix = argv[1];


		if (argv[0] == Matrix.IDENTITY) {
			var matrix =  [
				[1, 0, 0, 0],
				[0, 1, 0, 0],
				[0, 0, 1, 0],
				[0, 0, 0, 1]
			];
		}

		if (argv[0] == Matrix.SCALE) {
			var scale = argv[1];
			var matrix = [
				[scale, 0, 0, 0],
				[0, scale, 0, 0],
				[0, 0, scale, 0],
				[0, 0, 0, 1]
			];
		}

		if (argv[0] == Matrix.RX) {
			var angle = argv[1];
			matrix  = [
				[1, 0, 0, 0],
				[0, Math.cos(angle), -(Math.sin(angle)), 0],
				[0, Math.sin(angle), Math.cos(angle), 0],
				[0, 0, 0, 1]
			];
		}

		if (argv[0] == Matrix.RY) {
			var angle = argv[1];
			var matrix  = [
				[Math.cos(angle), 0, Math.sin(angle), 0],
				[0, 1, 0, 0],
				[-(Math.sin(angle)), 0, Math.cos(angle), 0],
				[0, 0, 0, 1]
			];
		}

		if (argv[0] == Matrix.RZ) {
			var angle = argv[1];
			var matrix  = [
				[Math.cos(angle), -(Math.sin(angle)), 0, 0],
				[Math.sin(angle), Math.cos(angle), 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 1]
			];
		}

		if (argv[0] == Matrix.TRANSLATION) {
			console.log(`${argv[1]}`);

			var vtc = argv[1];
			var matrix = [
				[1, 0, 0, vtc.x],
				[0, 1, 0, vtc.y],
				[0, 0, 1, vtc.z],
				[0, 0, 0, 1]
			];
		}

		if (argv[0] == Matrix.PROJECTION) {
			var fov     = argv[1];
			var ratio   = argv[2];
			var near    = argv[3];
			var far     = argv[4];

			var matrix = [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			];

			matrix[1][1] = 1 / Math.tan(0.5 * this.degrees_to_radians(fov));
			matrix[0][0] = matrix[1][1] / ratio;
			matrix[2][2] = -1 * (-near - far) / (near - far);
			matrix[3][2] = -1;
			matrix[2][3] = (2 * near * far) / (near - far);
		}

		/* Getter Function for the Matrix Private Variable */
		this.getMatrix = function () { return (matrix); };

		if (Matrix.verbose != undefined && Matrix.verbose == true) {
			console.log(`Matrix ${argv[0]} instance constructed`);
		}
	};

	/* Wrapper of the Getter */
	get matrix() {
		return (this.getMatrix());
	}

	/* Multiplies Two Matrices; rhs <=> Right Hand Side */
	mult(rhs) {

		var new_matrix = [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		];

		var row = 0;
		var col = 0;
		var i = 0;
		for (row = 0; row < 4; ++row) {
			for (col = 0; col < 4; ++col) {
				for (i = 0; i < 4; ++i) {
					new_matrix[row][col] += this.matrix[row][i] * rhs.matrix[i][col];
				}
			}
		}
		return (new Matrix(Matrix.SET, new_matrix));
	}

	/* Takes a vertex; returns a new Vertex that is the result of the multiplication of one vertex with another */
	transformVertex(vtx) {
		return (new Vertex([
			this.matrix[0][0] * vtx.x + this.matrix[0][1] * vtx.y + this.matrix[0][2] * vtx.z + this.matrix[0][3],
			this.matrix[1][0] * vtx.x + this.matrix[1][1] * vtx.y + this.matrix[1][2] * vtx.z + this.matrix[1][3],
			this.matrix[2][0] * vtx.x + this.matrix[2][1] * vtx.y + this.matrix[2][2] * vtx.z + this.matrix[2][3],
			1
		]));
	}

	toString() {

		return (
`M | vtcX | vtcY | vtcZ | vtxO
-----------------------------
x | ${this.matrix[0][0].toFixed(2).padEnd(4, ' ')} | ${this.matrix[0][1].toFixed(2).padEnd(4, ' ')} | ${this.matrix[0][2].toFixed(2).padEnd(4, ' ')} | ${this.matrix[0][3].toFixed(2).padEnd(4, ' ')}
y | ${this.matrix[1][0].toFixed(2).padEnd(4, ' ')} | ${this.matrix[1][1].toFixed(2).padEnd(4, ' ')} | ${this.matrix[1][2].toFixed(2).padEnd(4, ' ')} | ${this.matrix[1][3].toFixed(2).padEnd(4, ' ')}
z | ${this.matrix[2][0].toFixed(2).padEnd(4, ' ')} | ${this.matrix[2][1].toFixed(2).padEnd(4, ' ')} | ${this.matrix[2][2].toFixed(2).padEnd(4, ' ')} | ${this.matrix[2][3].toFixed(2).padEnd(4, ' ')}
w | ${this.matrix[3][0].toFixed(2).padEnd(4, ' ')} | ${this.matrix[3][1].toFixed(2).padEnd(4, ' ')} | ${this.matrix[3][2].toFixed(2).padEnd(4, ' ')} | ${this.matrix[3][3].toFixed(2).padEnd(4, ' ')}`
		);
	};
};

Matrix.IDENTITY = 'IDENTITY';
Matrix.SCALE = 'SCALE preset';
Matrix.RX = 'Ox ROTATION preset';
Matrix.RY = 'Oy ROTATION preset';
Matrix.RZ = 'Oz ROTATION preset';
Matrix.TRANSLATION = 'TRANSLATION preset';
Matrix.PROJECTION = 'PROJECTION preset';
Matrix.SET = '';

Matrix.verbose = false;

module.exports = Matrix;
