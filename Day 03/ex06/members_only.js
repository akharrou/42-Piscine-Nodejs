/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   members_only.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/29 18:49:15 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/29 22:00:59 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const http = require('http');
const auth = require('basic-auth')

function onRequest(request, response) {

	if (request.url === '/favicon.ico') {
		response.writeHead(200, {'Content-Type': 'image/x-icon'} );
		response.end();
	} else {

		/* When user first encouters website, ask him for credentials */
		if (auth(request) === undefined) {
			response.setHeader('WWW-Authenticate', 'Basic realm="example"');
		}

		/* Check credentials */
		if (auth(request) && auth(request).name == 'zaz' && auth(request).pass == 'jaimelespetitsponeys') {

			var msg = `<html><body>
			Hello Zaz<br />
			<img src='data:image/png;base64,` +
			base64_encode('../img/42.png') +
				`'>
			</body></html>
			`;
			response.writeHead(200, {"Content-Type": "text/html"});
			response.end(msg);
		} else {
			response.statusCode = 401;
			response.setHeader('Content-Type', 'Basic realm="Member area"');
			response.end('<html><body>That area is accessible for members only</body></html>');
		}
	}
}

http.createServer(onRequest).listen(8080, function () {

	console.log("Server Status: [RUNNING]");
	console.log("Server can be found at 'http://127.0.0.1:8080/'");
});

function base64_encode(file) {
	var bitmap = fs.readFileSync(file);
	return Buffer.from(bitmap).toString('base64');
}
