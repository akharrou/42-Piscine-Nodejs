/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Color.class.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/02 19:35:48 by akharrou          #+#    #+#             */
/*   Updated: 2019/04/03 23:08:39 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');

class Color {

	/* Doc String */
	static doc() {
		return(fs.readFileSync('./Color.doc.txt').toString());
	}

	/* Constructor */
	constructor([red, green, blue]) {

		if (green == undefined || blue == undefined) {

			/* Individual Components */
			this.red = Math.floor((red >> 16) % 256);
			this.green = Math.floor((red >> 8) % 256);
			this.blue = Math.floor(red % 256);

			/* RGB Key */
			this.rgb = [this.red, this.blue, this.green];

		} else {

			/* RGB Key */
			this.rgb = [Math.floor(red), Math.floor(green), Math.floor(blue)];

			/* Individual Components */
			this.red = Math.floor(red);
			this.green = Math.floor(green);
			this.blue = Math.floor(blue);
		}

		if (Color.verbose != undefined && Color.verbose == true) {
			console.log(`${this}` + ' constructed.');
		}
	};

	/* Adds the the components of the current instance to the components of another
	instance argument. The resulting color is a new instance. */
	add (inst) {
		return (new Color([this.red + inst.red, this.green + inst.green, this.blue +  inst.blue]));
	};

	/* Substracts the components of the current instance to the components of another
	instance argument. The resulting color is a new instance. */
	sub(inst) {
		return (new Color([this.red - inst.red, this.green - inst.green, this.blue - inst.blue]));
	};

	/* Multiplies the components of the current instance to the components of of another
	instance argument. The resulting color is a new instance. */
	mult (rgb) {
		return (new Color([this.red * rgb, this.green * rgb, this.blue * rgb]));
	};

	/* Custom Log Output for this Class */
	toString () {
		return (`Color( red: ${this.red.toString().padStart(3, ' ')}, green: ${this.green.toString().padStart(3, ' ')}, blue: ${this.blue.toString().padStart(3, ' ')} )`);
	}

};

Color.verbose = false;

module.exports = Color;
