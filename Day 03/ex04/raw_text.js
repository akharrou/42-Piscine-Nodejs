/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   raw_text.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/29 18:05:30 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/29 18:21:13 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require('http');

function onRequest(request, response) {

	if (request.url === '/favicon.ico') {
		response.writeHead(200, {'Content-Type': 'image/x-icon'} );
		response.end();
	} else {
		response.writeHead(200, { "Content-Type": "text/plain" });
		response.end('<html><body>Hello</body></html>');
	}
}

http.createServer(onRequest).listen(8080, function () {

	console.log("Server Status: [RUNNING]");
	console.log("Server can be found at 'http://127.0.0.1:8080/'");
});
