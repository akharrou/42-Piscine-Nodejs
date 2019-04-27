
/* Ship Class */

const SHIP_MAX_HP         = 5;
const SHIP_MAX_SPEED      = 10;
const SHIP_MAX_POWER_PTS  = 8;
const SHIP_WIDTH          = 1;
const SHIP_HEIGHT         = 3;
const padding = 5;
const square_size = 30;

class Ship {

	constructor(name, color, facing, coords) {

		this.name           = name;
		this.color          = color;
		this.width          = SHIP_WIDTH;
		this.height         = SHIP_HEIGHT;

		this.hp             = SHIP_MAX_HP;
		this.sheild         = 0;

		this.power_pts      = SHIP_MAX_POWER_PTS;

		this.weapon         = [];

		this.speed          = SHIP_MAX_SPEED;
		this.handling       = 4;

		this.stationary     = 0;
		this.facing         = facing;

		this.coordinates    = coords;

	}

	repair(power_pts) {

		for (var i = 0; power_pts > i; i++)
			if (Dice.roll() == 6)
				if (this.hp < SHIP_MAX_HP)
					this.hp++;
	}

	eraseShip() {

		/* Get Canvas */
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");

		/* Clear ship */
		for (i = 0; i < 3; i++) {
			ctx.fillRect((padding + square_size) * (this.coordinates[i][1] + 1),
						 (padding + square_size) * (this.coordinates[i][0] + 1),
						 square_size, square_size);
			ctx.stroke();
		}
	}

	drawShip() {

		/* Get Canvas */
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");

		/* Get color */
		ctx.fillStyle = this.color;

		/* Fills in the rectangle with color */
		for (var i in this.coordinates) {
			ctx.fillRect((padding + square_size) * (this.coordinates[i][1] + 1),
				(padding + square_size) * (this.coordinates[i][0] + 1),
				square_size, square_size);
		}
	};

	move_forward(amount) {

		this.eraseShip();

		for (i = 0; i < 3; i++)
		{
			if (this.facing == "UP")
			{
				this.coordinates[i][0] -= amount;
			}
			else if (this.facing == "DOWN")
			{
				this.coordinates[i][0] += amount;
			}
			else if (this.facing == "LEFT")
			{
				this.coordinates[i][1] += amount;
			}
			else if (this.facing == "RIGHT")
			{
				this.coordinates[i][0] += amount;
			}
		}

		this.drawShip();
	}

	// turn(direction) {

	// 	switch (direction) {

	// 		case 'LEFT':

	// 			if () {

	// 			}

	// 			break;

	// 		case 'RIGHT':

	// 			if () {

	// 			}

	// 			break;

	// 		default:
	// 			break;
	// 	}

	// }

	// 	if (direction == "TURN_LEFT" && (this.facing == "UP" || this.facing == "DOWN") ) {
	// 		this.coordinates[0][0] = this.coordinates[1][0];
	// 		this.coordinates[2][0] = this.coordinates[1][0];
	// 		this.coordinates[0][1] = this.coordinates[1][1] + 1;
	// 		this.coordinates[2][1] = this.coordinates[1][1] - 1;
	// 	}
	// 	if (direction == "TURN_RIGHT" && (this.facing == "UP" || this.facing == "DOWN")) {
	// 		this.coordinates[0][0] = this.coordinates[1][0];
	// 		this.coordinates[2][0] = this.coordinates[1][0];
	// 		this.coordinates[0][1] = this.coordinates[1][1] - 1;
	// 		this.coordinates[2][1] = this.coordinates[1][1] + 1;
	// 	}
	// 	if (direction == "TURN_LEFT" && (this.facing == "UP" || this.facing == "DOWN") ) {
	// 		this.coordinates[0][0] = this.coordinates[1][0];
	// 		this.coordinates[2][0] = this.coordinates[1][0];
	// 		this.coordinates[0][1] = this.coordinates[1][1] + 1;
	// 		this.coordinates[2][1] = this.coordinates[1][1] - 1;
	// 	}
	// 	if (direction == "TURN_RIGHT" && (this.facing == "UP" || this.facing == "DOWN")) {
	// 		this.coordinates[0][0] = this.coordinates[1][0];
	// 		this.coordinates[2][0] = this.coordinates[1][0];
	// 		this.coordinates[0][1] = this.coordinates[1][1] - 1;
	// 		this.coordinates[2][1] = this.coordinates[1][1] + 1;
	// 	}

	// 	if (this.facing == "UP" && direction == "TURN_RIGHT") {
	// 		this.facing = "LEFT";
	// 	}
	// 	else if (this.facing == "LEFT" && diection == "TURN_RIGHT"){
	// 		this.facing = "UP";
	// 	}
	// 	else if (this.facing == "RIGHT" && diection == "TURN_RIGHT"){
	// 		this.facing = "DOWN";
	// 	}
	// 	else if (this.facing == "DOWN" && diection == "TURN_RIGHT"){
	// 		this.facing = "RIGHT";
	// 	}

	// 	if (this.facing == "UP" && direction == "TURN_LEFT") {
	// 		this.facing = "RIGHT";
	// 	}
	// 	else if (this.facing == "LEFT" && diection == "TURN_LEFT"){
	// 		this.facing = "DOWN";
	// 	}
	// 		this.facing = "UP";
	// 	}
	// 			else if (this.facing == "RIGHT" && diection == "TURN_LEFT"){
	// 	else if (this.facing == "DOWN" && diection == "TURN_LEFT"){
	// 		this.facing = "LEFT";
	// 	}

	// }


	// 	fire_weapon() {

	// }

}

var p1_coords = [
	[12, 0],
	[13, 0],
	[14, 0]
];

var p2_coords = [
	[0, 14],
	[1, 14],
	[2, 14]
];


const shipA = new Ship("Gie", "#0000FF", "UP", p1_coords);
const shipB = new Ship("Mav", "#FF0000", "DOWN", p2_coords);

shipA.drawShip();
shipB.drawShip();


// shipA.draw_ship();

// shipA.turn("TURN_LEFT");


// // shipA.move_forward(-5);

// shipA.draw_ship();

// shipB.draw_ship();

// // shipA.turn("TURN_LEFT");

// shipA.draw_ship();

// // shipB.move_forward(5);

// // shipB.draw_ship();



































	// draw_ship() {
	// 	var c = document.getElementById("myCanvas");
	// 	var ctx = c.getContext("2d");
	// 	ctx.fillStyle = this.color;

	// 	for (i = 0; i < 3; i++) {
	// 		ctx.fillRect((padding + square_size) * (this.coordinates[i][1] + 1),
	// 					 (padding + square_size) * (this.coordinates[i][0] + 1),
	// 					 square_size, square_size);
	// 		ctx.stroke();
	// 	}
	// }





	// clear_ship() {
	// 	var c = document.getElementById("myCanvas");
	// 	var ctx = c.getContext("2d");
	// 	ctx.fillStyle = "#FFFFFF";

	// 	for (i = 0; i < 3; i++) {
	// 		ctx.fillRect((padding + square_size) * (this.coordinates[i][1] + 1),
	// 					 (padding + square_size) * (this.coordinates[i][0] + 1),
	// 					 square_size, square_size);
	// 		ctx.stroke();
	// 	}

	// }
