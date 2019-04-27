/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/30 00:33:27 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/30 20:41:54 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express');
const cookieParser = require('cookie-parser')
const params_parser = require('urlparser');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser())

app.listen(PORT, () => {
	console.log("Server Status: [RUNNING]");
	console.log(`Server running at 'http://localhost:${PORT}/'`);
});

app.get('*', (request, response) => {

	var login_form = `
	<h2 style="float: left; margin: 0px 0px 0px 100px">Login</h2>
	<br>
	<br>
	<hr>
	<br>
	<form name="index.js" method="GET" action="/">
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

	try {

		var params = params_parser.parse(request.url).query.params;

		if (params.submit == 'OK') {

			/* Set Cookies */
			response.cookie('login', params['login'], { maxAge: 1000 * 60 * 15 });
			response.cookie('passwd', params['passwd'], { maxAge: 1000 * 60 * 15 });

		}

		response.writeHead(200, { "Content-Type": "text/html" });
		response.end('<h1 style="color: green">Access Granted.</h1>');

	} catch (err) {

		/* Set Login form */
		if (request.cookies['login'] != undefined) {
			login_form = login_form.replace(/(?<=name="login" )value=""/g, `value="${request.cookies['login']}"`);
		}
		if (request.cookies['passwd'] != undefined) {
			login_form = login_form.replace(/(?<=name="passwd" )value=""/g, `value="${request.cookies['passwd']}"`);
		}

		response.writeHead(200, { "Content-Type": "text/html" });
		response.end(login_form);

	}
});
