/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   addItem2Basket.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 21:33:21 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 21:45:49 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const itemsFile = '../database/items.json';
const membersFile = '../database/members.json';

function retrieveItem(item_name) {

	var items = [];

	try {
		items = (JSON.parse(fs.readFileSync(itemsFile)));
	} catch (err) { return (-1); }

	for (var i in items) {
		if (items[i]['item_name'] == item_name) {
			return (items[i]);
		}
	}
	return (-1);
}

function add2Basket_Member(login, item_name) {

	var items = [];
	var members = [];

	/* Find Item in Database */
	var item2Add = retrieveItem(item_name);

	if (item2Add == -1) {
		return (-1);
	}

	try {
		members = (JSON.parse(fs.readFileSync(membersFile)));
	} catch (err) { fs.openSync(membersFile, 'a'); }

	for (var i in memebers) {
		if (memebers[i]['profile']['login'] == login) {

			/* Add Item to Member's Baseket */
			memebers[i]['basket']['items'].unshift(item2Add);

			/* Write Users to Database */
			fs.writeFileSync(membersFile, JSON.stringify(members));

			/* Return Success */
			return (0);
		}
	}

	/* Return Failure */
	return (-1);
}

module.exports = add2Basket_Member;
