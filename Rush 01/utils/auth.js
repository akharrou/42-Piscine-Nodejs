/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   auth.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 10:12:03 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 21:34:04 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const sha256 = require('sha256');
const membersFile = '../database/memebers.json';

/*
	NAME
		auth -- check authenticity of user

	PARAMETERS
		login       User provided login.
		passwd      User provided password.

	RETURN VALUES
		Returns 'true' if user exists and has correct login/passwd; otherwise 'false'
*/
function auth(login, passwd) {

	/* Read Fle to Usable JS Object */
	try {
		var memebers = (JSON.parse(fs.readFileSync(membersFile)));
	} catch (err) { return (false); }

	/* Iterate Through Users */
	for (var member in memebers) {

		/* Check to Find a Matching Login & Password */
		if (memebers[member]['profile']['login'] == login)
			if (sha256(passwd) === memebers[member]['profile']['passwd'])
				return (true);
	}
	return (false);
}

module.exports = auth;
