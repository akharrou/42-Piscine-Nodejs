
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   cookie_crisp.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/29 10:44:56 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/29 11:25:51 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const http = require('http');
const Cookies = require('cookies');
const url_parser = require('url-parse');
const params_parser = require('urlparser');

function onRequest(request, response) {

	if (request.url !== '/favicon.ico') {

		/* Get Parsed URL Request & Params */
		var parsed_url = url_parser(request.url);
		try {
			var parsed_params = params_parser.parse(request.url).query.params;
		} catch (error) { response.writeHead(200, {'Content-Type': 'text/plain'}); response.end('Forgot to pass arguments ?'); }

		/* Cookie Handler */
		try {

			/* Create Cookies Object */
			var cookies_obj = new Cookies(request, response);

			/* Set Cookie */
			if (parsed_params['action'] == 'set')
			{
				cookies_obj.set(parsed_params['name'], parsed_params['value'], { maxAge: 600000 });
				response.writeHead(200, {'Content-Type': 'text/plain'});
				response.end();
			}

			/* Get Cookie */
			else if (parsed_params['action'] == 'get')
			{
				lastVisit = cookies_obj.get(parsed_params['name']);
				response.writeHead(200, {'Content-Type': 'text/plain'});
				response.end(lastVisit);
			}

			/* Delete Cookie */
			else if (parsed_params['action'] == 'del')
			{
				if (cookies_obj.get(parsed_params['name']) == undefined) {
					console.log('Cookie value non-existant!');
				} else {
					cookies_obj.set(parsed_params['name'], null);
				}
				response.writeHead(200, {'Content-Type': 'text/plain'});
				response.end();
			}

			else {
				response.writeHead(200, {'Content-Type': 'text/plain'});
				response.end();
			}
		}

		catch (error) { response.writeHead(200, {'Content-Type': 'text/plain'}); response.end(); }
	}

	/* Ignore Favicon Requests */
	else {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end();
	}
}

http.createServer(onRequest).listen(8080, function () {
	console.log("Server Status: [RUNNING]");
	console.log("Server can be found at 'http://127.0.0.1:8080/'");
});
