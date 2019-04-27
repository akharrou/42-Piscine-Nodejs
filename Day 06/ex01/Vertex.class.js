/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Vertex.class.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/02 22:51:58 by akharrou          #+#    #+#             */
/*   Updated: 2019/04/03 23:08:27 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const Color = require('../ex00/Color.class');

class Vertex {

	/* Documentation */
	static doc() {
		return (fs.readFileSync('./Vertex.doc.txt').toString());
	}

	/* Class Constructor */
	constructor([x, y, z, w = 1.0, color = new Color([255, 255, 255])]) {

		/* Checking if a Color() was passed in place of a 'w' */
		if (w instanceof Color) {
			color = w;
			w = 1.0;
		}

		/* Private Class Properties */
		var _x_axis_coordinate   = x;
		var _y_axis_coordinate   = y;
		var _z_depth_coordinate  = z;
		var _w_coordinate        = w;
		var _color               = color;

		/* Public Funcs that can Access Private Vars */
		this.getX     = function()  {  return (_x_axis_coordinate);   };
		this.getY     = function()  {  return (_y_axis_coordinate);   };
		this.getZ     = function()  {  return (_z_depth_coordinate);  };
		this.getW     = function()  {  return (_w_coordinate);        };
		this.getColor = function()  {  return (_color);               };

		/* Public Funcs that can Access Private Vars */
		this.setX     = function(x)  {  _x_axis_coordinate = x;   };
		this.setY     = function(y)  {  _y_axis_coordinate = y;   };
		this.setZ     = function(z)  {  _z_depth_coordinate = z;  };
		this.setW     = function(w)  {  _w_coordinate = w;        };
		this.setColor = function(c)  {  _color = c;               };

		/* Verbose Option */
		if (Vertex.verbose != undefined && Vertex.verbose == true)
			console.log(`${this}` + ' constructed');
	};

	/* Wrappers for the Public Getter Methods*/
	get x()           {  return ( this.getX()     );  };
	get y()           {  return ( this.getY()     );  };
	get z()           {  return ( this.getZ()     );  };
	get w()           {  return ( this.getW()     );  };
	get color()       {  return ( this.getColor() );  };

	/* Wrappers for the Public Setter Methods*/
	set x(x)          {  this.setX(x)          };
	set y(y)          {  this.setY(y)          };
	set z(z)          {  this.setZ(z)          };
	set w(w)          {  this.setW(w)          };
	set color(color)  {  this.setColor(color)  };

	/* Custom Log Output for this Class */
	toString() {

		/* If the Color is undefined, i.e Defaults to White.. don't print the color field */
		if (Vertex.verbose == false) {
			return (`Vertex( x: ${this.x.toFixed(2)}, y: ${this.y.toFixed(2)}, z:${this.z.toFixed(2)}, w:${this.w.toFixed(2)} )`);
		}

		/* Else, if defined, print it */
		else {
			return (`Vertex( x: ${this.x.toFixed(2)}, y: ${this.y.toFixed(2)}, z:${this.z.toFixed(2)}, w:${this.w.toFixed(2)}, \
Color( red: ${this.color.red.toString().padStart(3, ' ')}, green: ${this.color.green.toString().padStart(3, ' ')}, \
blue: ${this.color.blue.toString().padStart(3, ' ')} ) )`);
		}
	};
};

Vertex.verbose = false;

module.exports = Vertex;
