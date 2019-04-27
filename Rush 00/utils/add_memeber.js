/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   addMember.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 18:55:11 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 20:06:04 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const sha256 = require('sha256');
const membersFile = '../database/members.json';

function addMember(login, passwd, firstname, lastname) {

	var accounts = [];

	try {
		accounts = (JSON.parse(fs.readFileSync(membersFile)));
	} catch (err) { fs.openSync(membersFile, 'a'); }

	var new_account = {

		/* ACCOUNT TYPE */
		type: 'MEMBER',

		/* USER PROFILE */
		profile: {
			login: login,
			passwd: sha256(passwd),
			first_name: firstname,
			last_name: lasttname
		},

		/* USER BASEKET */
		basket: {
			items: [],
			total_items: 0,
			total_cost: 0,
		},
	};

	accounts.unshift(new_account);

	/* Write Users to Database */
	fs.writeFileSync(membersFile, JSON.stringify(accounts));
}

module.exports = addMember;
