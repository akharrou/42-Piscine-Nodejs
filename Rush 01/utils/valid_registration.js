/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   valid_registration.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 17:41:18 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 21:15:06 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const membersFile = '../private/memebers.json';

function validRegistration(login, passwd) {

	if (login.length < 1 && passwd.length < 1) {
		return (false);
	}

	var memebers = [];

	/* Turn Fle into Usable JS Object */
	try {
		memebers = (JSON.parse(fs.readFileSync(membersFile)));
	} catch (err) { return (true); }

	/* Iterate Through Users */
	for (var member in memebers) {

		/* Check to Find a Matching Login & Password */
		if (memebers[member]['profile']['login'] == login)
				return (false);
	}
	return (true);
}

module.exports = validRegistration;
