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
const guestsFile = '../database/guests.json';

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

function add2Basket_Guest(item_name) {

	var items = [];
	var guests = [];

	/* Find Item in Database */
	var item2Add = retrieveItem(item_name);

	if (item2Add == -1) {
		return (-1);
	}

	try {
		guests = (JSON.parse(fs.readFileSync(guestsFile)));
	} catch (err) { fs.openSync(guestsFile, 'a'); }

	/* Add Item to Member's Baseket */
	guests[i]['basket']['items'].unshift(item2Add);

	/* Write Guest to Database */
	fs.writeFileSync(guestsFile, JSON.stringify(guests));

	/* Return Success */
	return (0);
}

module.exports = add2Basket_Guest;
