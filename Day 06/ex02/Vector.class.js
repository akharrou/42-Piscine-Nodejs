/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Vector.class.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/02 22:51:58 by akharrou          #+#    #+#             */
/*   Updated: 2019/04/03 23:37:53 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const Color = require('../ex00/Color.class');
const Vertex = require('./Vertex.class');

class Vector {

	/* Documentation */
	static doc() {
		return (fs.readFileSync('./Vector.doc.txt').toString());
	}

	/* Class Constructor */
	constructor([org = new Vertex([x = 0, y = 0, z = 0, w = 1]), dest]) {

		if (org != undefined && dest == undefined) {
			var _dest = org;
			var _org = new Vertex([0, 0, 0, 1]);
		} else {
			var _org = org;
			var _dest = dest;
		}

		/* Public Funcs that can Access Private Vars */
		this.getX = function () { return ( _dest['x'] - _org['x'] ); };
		this.getY = function () { return ( _dest['y'] - _org['y'] ); };
		this.getZ = function () { return ( _dest['z'] - _org['z'] ); };
		this.getW = function () { return ( _dest['w']             ); };

		/* Verbose Option */
		if (Vector.verbose != undefined && Vector.verbose == true)
			console.log(`${this}` + ' constructed');
	};

	/* Wrappers for the Public Getter Methods*/
	get x() { return this.getX(); };
	get y() { return this.getY(); };
	get z() { return this.getZ(); };
	get w() { return this.getW(); };

	magnitude() {
		return (parseFloat(Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z)).toPrecision(11)));
	}

	normalize() {

		var length = this.magnitude();
		if (length == 1) {
			return this;
		}
		return new Vector([new Vertex([this.x / length, this.y / length, this.z / length])]);
	}

	/* Takes a Vector Object; rhs <=> Right Hand Side */
	add(rhs) {
		return new Vector([new Vertex([this.x + rhs.x, this.y + rhs.y, this.z + rhs.z])]);
	}

	/* Takes a Vector Object; rhs <=> Right Hand Side */
	sub(rhs) {
		return new Vector([new Vertex([this.x - rhs.x, this.y - rhs.y, this.z - rhs.z])]);
	}

	opposite() {
		return new Vector([new Vertex([this.x * -1, this.y * -1, this.z * -1])]);
	}

	scalarProduct(k) {
		return new Vector([new Vertex([this.x * k, this.y * k, this.z * k])]);
	}

	/* Takes a Vector Object; rhs <=> Right Hand Side */
	dotProduct(rhs) {
		return parseFloat((((this.x * rhs.x) + (this.y * rhs.y) + (this.z * rhs.z))).toPrecision(11));
	}

	/* Takes a Vector Object; rhs <=> Right Hand Side */
	crossProduct(rhs) {
		return new Vector([new Vertex([
			this.y * rhs.z - this.z * rhs.y,
			this.z * rhs.x - this.x * rhs.z,
			this.x * rhs.y - this.y * rhs.x
		])]);
	}

	/* Takes a Vector Object; rhs <=> Right Hand Side */
	cos(rhs) {
		return parseFloat((((this.x * rhs.x) + (this.y * rhs.y) + (this.z * rhs.z)) / Math.sqrt(((this.x * this.x) + (this.y * this.y) + (this.z * this.z)) * ((rhs.x * rhs.x) + (rhs.y * rhs.y) + (rhs.z * rhs.z)))).toPrecision(14));
	}

	/* Custom Log Output for this Class */
	toString() {
		return (`Vector( x: ${this.x.toFixed(2)}, y: ${this.y.toFixed(2)}, z: ${this.z.toFixed(2)}, w: ${this.w.toFixed(2)} )`);
	};
};

Vector.verbose = false;

module.exports = Vector;
