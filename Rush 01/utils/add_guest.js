/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   addGuest.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 18:55:11 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 20:06:04 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const guestsFile = '../database/guests.json';

function addGuest() {

	var guest_accounts = [];

	try {
		guest_accounts = (JSON.parse(fs.readFileSync(guestsFile)));
	} catch (err) { fs.openSync(guestsFile, 'a'); }

	var new_guest = {

		type: 'GUEST',

		basket: {
			items: [],
			total_items: 0,
			total_cost: 0,
		},
	};

	guest_accounts.unshift(new_guest);

	/* Write Guest to Database */
	fs.writeFileSync(guestsFile, JSON.stringify(guest_accounts));
}

module.exports = addGuest;
