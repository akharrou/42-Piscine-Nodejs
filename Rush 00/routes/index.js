/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 10:10:05 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 23:15:17 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var fs = require('fs');
var path = require('path');
var express = require('express');
const session = require('express-session');
var router = express.Router();

var file = require('../utils/file');
var auth = require('../utils/auth');


// GETS
// ==================================================================================

/* Landing Page ~ GET */
router.get('/', function(request, response, next) {

	var sess = request.session;

	var shopPage = file(path.join(__dirname, '../public/html/main_loggedout.html'));

	// /* If logged in, logged in shop response */
	// if (sess.loggued_on_user != undefined && sess.loggued_on_user != '') {
	// 	shopPage = file(path.join(__dirname, '../public/html/shop_loggedin.html'));
	// }

	// var items = [];

	// try {
	// 	items = (JSON.parse(fs.readFileSync(itemsFile)));
	// } catch (err) {}

	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.end(shopPage);
});

/* Login Page ~ GET */
router.get('/login', function(request, response, next) {

	var sess = request.session;
	var login_form = file(path.join(__dirname, '../public/html/login.html'));

	/* Prefill Fields */
	if (sess.loggued_on_user != undefined && sess.loggued_on_user != '') {
		login_form = login_form.replace(/(?<=name="login" )value=""/g, `value="${sess.loggued_on_user}"`);
		login_form = login_form.replace(/(?<=name="passwd" )value=""/g, `value="${sess.loggued_on_user}"`);
	}

	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.end(login_form);
});

/* Registration Page ~ GET */
router.get('/registration', function(request, response, next) {

	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.end(file(path.join(__dirname, '../public/html/registration.html')));
});



// POSTS
// ==================================================================================

/* Login Form ~ POST */
router.post('/login', (request, response) => {

	/* Create Session Cookies */
	var sess = request.session;

	/* Grab POST Parameters */
	var login = request.body.login;
	var password = request.body.passwd;
	var submit = request.body.submit;

	/* Authenticate User ; If Authenticated do... */
	if (submit == 'OK' && auth(login, password) == true) {

		/* Set 'loggued_on_user' Cookie */
		sess.loggued_on_user = login;
		sess.loggued_on_user_passwd = password;

		/* Display Message Accordingly */
		response.redirect('/');
	}

	/* If Not Authentic User */
	else {

		/* Set 'loggued_on_user' Cookie to Empty String */
		sess.loggued_on_user = '';
		sess.loggued_on_user_passwd = '';

		/* Login Failed */
		var failed_login_form = file(path.join(__dirname, '../public/html/failed_login.html'));

		/* Replace Sections to Display Invalid User (with replace) */
		failed_login_form.replace(/<!-- failed_login_placeholder -->/g, '<h1 style="color: red">Incorrect username or password.</h1>')

		/* Display Message Accordingly */
		response.writeHead(200, { "Content-Type": "text/html" });
		response.end(failed_login_form);
	}
});

/* Registration Form ~ POST */
router.post('/registration', (request, response) => {

	/* Create Session Cookies */
	var sess = request.session;

	/* Grab POST Parameters */
	var login = request.body.login;
	var password = request.body.passwd;
	var firstname = request.body.firstname;
	var lastname = request.body.lastname;
	var submit = request.body.submit;

	/* Authenticate User ; If Authenticated do... */
	if (submit == 'OK' && auth(login, password) == true) {

		/* Add User to Database */
		addMember(login, password, firstname, lastname);

		/* Display Message Accordingly */
		response.redirect('/login');
	}

	/* If Not Valid Registration */
	else {

		/* Login Failed */
		var failed_registration_form = file(path.join(__dirname, '../public/html/registration.html'));

		/* Replace Sections to Display Invalid User (with replace) */
		failed_registration_form.replace(/<-- failed_registration_placeholder -->/g, '<h1 style="color: red">Incorrect username or password.</h1>')

		/* Display Message Accordingly */
		response.writeHead(200, { "Content-Type": "text/html" });
		response.end(failed_login_form);
	}
});

module.exports = router;
