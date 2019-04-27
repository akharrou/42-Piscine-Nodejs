
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   print_get.js                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/29 08:23:27 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/29 08:46:59 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require('http');
const urlparser = require('urlparser');

function onRequest(request, response) {

	if (request.url === '/favicon.ico') {
		response.writeHead(200, {'Content-Type': 'image/x-icon'} );
		response.end();
	} else {
		response.writeHead(200, { "Context-Type": "text/plain" });
		try {
			var params = urlparser.parse(request.url).query.params;
			for (var key in params) {
				if (params.hasOwnProperty(key))
					response.write(`${key}: ${params[key]}\n`);
			}
			response.end();
		} catch (err) {
			response.end('Forgot params ?');
		}
	}
}

http.createServer(onRequest).listen(8080);

console.log("Server Status: [RUNNING]");
console.log("Server listening at '127.0.0.1' on port '8080'.");
