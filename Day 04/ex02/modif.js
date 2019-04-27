/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   modif.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/30 11:45:23 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/30 21:46:45 by akharrou         ###   ########.fr       */
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
	response.redirect('/account');
})

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

/* Registration Page */
app.get('/account', (request, response) => {
	response.end(fs.readFileSync('index.html'));
})

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

/* Registration Form Reception */
app.post('/account', (request, response) => {

	/* Get the Login & Password & New Password */
	const login = request.body.login;
	const oldpass = request.body.oldpw;
	const newpass = request.body.newpw;

	/* Checks both the validaty of the strings and that the user doesn't
	already exist in the DB */

	try {
		var accounts = (JSON.parse(fs.readFileSync(passwordFile)));
	} catch (err) { response.end('ERROR\n'); }

	if (request.body.submit == 'OK' && accounts != undefined && existingUser(login, oldpass, accounts)) {

		accounts = modifyUser(login, newpass, accounts);

		/* Write Users to Database */
		fs.writeFileSync(passwordFile, JSON.stringify(accounts));
		response.end('OK\n');
	} else {
		response.end('ERROR\n');
	}
});

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

function existingUser(login, oldpass, accounts) {

	/* Try to Find User */
	for (var key in accounts) {

		/* Make sure information Matches */
		if (accounts[key]['login'] == login)
			if (hash(oldpass) === accounts[key]['passwd'])
				return (true);
	}
	return (false);
}

function modifyUser(login, newpass, accounts) {

	/* Get Hashed Password */
	newpass = hash(newpass);

	/* Modify Password */
	for (var key in accounts) {
		if (accounts[key]['login'] == login) {
			accounts[key]['passwd'] = newpass;
		}
	}

	return (accounts);
}

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */
