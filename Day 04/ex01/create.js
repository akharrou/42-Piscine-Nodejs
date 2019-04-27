/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   create.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/30 11:45:23 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/30 21:31:22 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const hash = require('object-hash');
const express = require('express');

const PORT = process.env.PORT || 8080;
const passwordFile = '../passwd';

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

/* Init App */
const app = express();

/* Add Middleware to Help Parse Responses */
app.use(express.json());
app.use(express.urlencoded());

/* Start Server */
app.listen(PORT, () => {
	console.log("Server Status: [RUNNING]");
	console.log(`Server running at 'http://localhost:${PORT}/'`);
});

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

/* Home Route */
app.get('/', (request, response) => {
	response.redirect('/registration');
})

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

/* Registration Page */
app.get('/registration', (request, response) => {
	response.end(fs.readFileSync('index.html'));
})

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

/* Registration Form Reception */
app.post('/registration', (request, response) => {

	const login = request.body.login;
	const password = request.body.passwd;

	/* Checks both the validaty of the strings and that the user doesn't
	already exist in the DB */

	try {
		var accounts = (JSON.parse(fs.readFileSync(passwordFile)));
	} catch (err) { fs.openSync(passwordFile, 'a'); }

	if (request.body.submit == 'OK' && (accounts == undefined || validRegistration(login, password, accounts))) {

		accounts = addUser(login, password, accounts);

		/* Write Users to Database */
		fs.writeFileSync(passwordFile, JSON.stringify(accounts));
		response.end('OK\n');
	} else {
		response.end('ERROR\n');
	}
});

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

function validRegistration(login, passwd, accounts) {

	if (login.length > 0 && passwd.length > 0) {

		for (var key in accounts) {
			if (accounts[key]['login'] == login)
				return (false);
		}
		return (true);
	}
	return (false);
}

function addUser(login, password, accounts) {

	/* Get Hashed Password */
	password = hash(password);

	/* Create & Save New User */
	if (accounts == undefined) {
		accounts = [{ login: login, passwd: password }];
	} else {
		accounts.unshift({ login: login, passwd: password });
	}

	return (accounts);
}

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */
