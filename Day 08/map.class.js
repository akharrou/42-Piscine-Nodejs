
/* Map */

const canvas = document.getElementById("myCanvas");

function displayMap(canvas) {

	var w = 5;
	var width = 30;

	for (i = 0; i < 15; i++)
	{
		for (j = 0; j < 15; j++)
		{
			var ctx = canvas.getContext("2d");
			ctx.rect((w + width) * (i + 1), (w + width) * (j + 1), width, width);
			ctx.stroke();
		}
	}
}

displayMap(canvas);
