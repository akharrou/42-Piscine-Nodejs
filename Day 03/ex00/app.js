/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   app.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/28 23:40:56 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/29 09:34:02 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require('http');

function onRequest(request, response) {

	console.log('A user made a request' + request.url);
	response.writeHead(200, {"Context-Type": "text/plain"});
	response.write("Hello new user !\n");
	response.end('Bye new user !');
}

http.createServer(onRequest).listen(8080, '127.0.0.1');

console.log("Server Status: [RUNNING]");
console.log("Server listening at '127.0.0.1' on port '8080'.");

/* double request is for the website icon */
/* packages to use: nodeinfo -- urlparser -- cookies */
