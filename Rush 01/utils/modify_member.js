/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   modify_member.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 18:55:11 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 21:46:04 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const sha256 = require('sha256');
const membersFile = '../database/members.json';

function existingUser(login, passwd, members) {

	/* Try to Find User */
	for (var i in memebers) {

		/* Make sure information Matches */
		if (memebers[i]['profile']['login'] == login)
			if (sha256(passwd) === memebers[i]['profile']['passwd'])
				return (true);
	}
	return (false);
}

function modifyUserPassword(login, oldpw, newpw) {

	var memebers = [];

	/* Turn Fle into Usable JS Object */
	try {
		memebers = (JSON.parse(fs.readFileSync(membersFile)));
	} catch (err) { return (-1); }

	if (existingUser(login, oldpw, memebers) == false) {
		return (-1);
	}

	/* Modify Password */
	for (var i in memebers) {
		if (memebers[i]['profile']['login'] == login) {
			memebers[i]['profile']['passwd'] = sha256(newpw);
		}
	}

	/* Write Users to Database */
	fs.writeFileSync(membersFile, JSON.stringify(members));

	return (0);
}

module.exports = modifyUserPassword;
