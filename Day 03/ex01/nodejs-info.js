/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   nodejs-info.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/29 00:01:03 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/29 00:07:47 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http     = require('http');
const nodeinfo = require('nodejs-info');

function onRequest(request, response) {

	response.writeHead(200, { "Content-Type": "text/html" });
	response.end(nodeinfo(request));
}

http.createServer(onRequest).listen(8080);

console.log('Server Status: [RUNNING]');
console.log('Server listening on port \'8080\'.');
