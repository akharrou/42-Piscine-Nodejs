/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   users.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 10:46:37 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 16:47:27 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var express = require('express');
var session = require('express-session');
var router = express.Router();

/* Show Profile Info */
router.get('/profile', function(request, response, next) {

	// get user id from database and his information
	// read the user profile html file
	// fill it in with the correct info with 'replace()'
	// serve it to user

	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.end('Profile HTML File');
});

router.get('/basket', function(request, response, next) {

	// get user id from database and his item selection so far
	// read the user basket html file
	// fill it in with the correct items with 'replace()'
	// serve it to user

	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.end('Basket HTML File');
});

router.get('/logout', function(request, response, next) {

	/* If Cookie Exists */
	if (request.session.loggued_on_user != undefined) {

		/* Delete it */
		request.session.destroy(function (err) {
			if (err) throw err;
		});
	}

	/* Redirect User to Landing Page */
	response.redirect('/');
});

module.exports = router;
