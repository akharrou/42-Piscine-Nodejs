/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   read_img.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/29 18:24:30 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/29 18:45:27 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const http = require('http');

function onRequest(request, response) {

	if (request.url === '/favicon.ico') {
		response.writeHead(200, {'Content-Type': 'image/x-icon'} );
		response.end();
	} else {
		var img = fs.readFileSync('../img/42.png');
		response.writeHead(200, {'Content-Type': 'image/gif' });
		response.end(img, 'binary');
	   }
}

http.createServer(onRequest).listen(8080, function () {

	console.log("Server Status: [RUNNING]");
	console.log("Server can be found at 'http://127.0.0.1:8080/'");
});
