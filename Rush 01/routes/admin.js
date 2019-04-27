/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   admin.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 14:00:36 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 23:40:41 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var path = require('path');
var express = require('express');
var session = require('express-session');
var router = express.Router();

var file = require('../utils/file');

/* Admin Page ~ GET */
router.get('/', function(request, response) {

	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.end(file(path.join(__dirname, '../public/html/admin.html')));
});

// /* Admin Page ~ POST */
router.post('/', function(request, response) {

	switch (true) {
		case addMember == 'OK':
			// run respective functions
			response.end();
			break;
		case deleteMember == 'OK':
			// run respective functions
			response.end();
			break;
		case addItem == 'OK':
			// run respective functions
			response.end();
			break;
		case deleteItem == 'OK':
			// run respective functions
			response.end();
			break;
		case addCategory == 'OK':
			// run respective functions
			response.end();
			break;
		case modifyUserPassword == 'OK':
			// run respective functions
			response.end();
			break;
		case modifyItems == 'OK':
			// run respective functions
			response.end();
			break;
		case modifyCategory == 'OK':

			break;

		default:
			response.redirect('/');
	}


	var sess = request.session;

	console.log(request.body.deleteMember);
	console.log(request.body.addMember);
	console.log(request.body.login);
	console.log(request.body.passwd);
	console.log(request.body.firstname);
	console.log(request.body.lastname);

	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.end('Admin Page');
});

module.exports = router;
