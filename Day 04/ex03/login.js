/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   login.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/30 21:50:18 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/30 23:13:23 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const lib = require('./auth');
const express = require('express');
const params_parser = require('urlparser');
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 8080;

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

/* Init App */
const app = express();

/* Add Middleware */
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

/* Start Server */
app.listen(PORT, () => {
	console.log("Server Status: [RUNNING]");
	console.log(`Server running at 'http://localhost:${PORT}/'`);
});

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

/* Home Base Route */
app.get(['/', 'login'], (request, response) => {

	var login_form = `
	<h2 style="float: left; margin: 0px 0px 0px 100px">Login</h2>
	<br>
	<br>
	<hr>
	<br>
	<form name="index.js" method="POST" action="/">
		<div style="float: left; margin: 0px 0px 200px 100px">
			<label for="login"><b>Login: </b></label>
			<input type="text" placeholder="Enter Login" name="login" value="" required>
			<br>
			<label for="passwd"><b>Password: </b></label>
			<input type="password" placeholder="Enter Passwd" name="passwd" value="" required>
			<br>
			<button type="submit" name="submit" value="OK">Submit</button>
		</div>
	</form>`;

	response.writeHead(200, { "Content-Type": "text/html" });
	response.end(login_form);
})

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

/* Login Form */
app.post(['/', '/login'], (request, response) => {

	/* Capture Variables */
	var submit = request.body.submit;
	var login = request.body.login;
	var passwd = request.body.passwd;

	/* Authenticate User ; If Authentic... */
	if (lib.auth(request.body.login, request.body.passwd) == true) {

		/* Set 'loggued_on_user' Cookie */
		response.cookie('loggued_on_user', login, { maxAge: 1000 * 60 * 15 });

		/* Display Message Accordingly */
		response.writeHead(200, { "Content-Type": "text/html" });
		response.end(`<h1>OK ! WELCOME ${request.body.login.toString().toUpperCase()} !</h1>`);
	}

	/* If Not Authentic User */
	else {

		/* Set 'loggued_on_user' Cookie to Empty String */
		response.cookie('loggued_on_user', '', { maxAge: 1000 * 60 * 15 });

		/* Display Message Accordingly */
		response.writeHead(401, { "Content-Type": "text/html" });
		response.end(`ERROR\n`);
	}
});

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

app.get('/whoami', (request, response) => {

	/* If the 'loggued_on_user' variable is set to a login */
	if (request.cookies['loggued_on_user'] != undefined && request.cookies['loggued_on_user'] != '') {

		/* Display it */
		response.writeHead(200, { "Content-Type": "text/html" });
		response.end(request.cookies['loggued_on_user'] + '\n');
	}

	/* Else, Display 'ERROR\n' */
	else {
		response.writeHead(200, { "Content-Type": "text/html" });
		response.end('ERROR\n');
	}
});

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */

app.get('/logout', (request, response) => {

	/* If Cookie Exists, Remove It */
	if (request.cookies['loggued_on_user']) {
		response.clearCookie('loggued_on_user');
	}

	/* Display Nothing */
	response.writeHead(200, { "Content-Type": "text/html" });
	response.end();
});

/* — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —  */
