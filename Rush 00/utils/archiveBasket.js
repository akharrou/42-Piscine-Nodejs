/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   archiveBasket.js                                  :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 21:47:50 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 21:49:23 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const itemsFile = '../database/items.json';
const membersFile = '../database/members.json';
const archivesFile = '../database/archives.json';

function checkoutBasket(basket) {

	var items = [];

	try {
		items = (JSON.parse(fs.readFileSync(itemsFile)));
	} catch (err) { return (-1); }

	/* update Items DB to decrement stock */
	while (basket['total_items'] > 0) {

		/* For every item in the basket item list */
		for (var item in basket['item_name_list']) {

			/* find item in items db */
			for (var i in items) {

				/* if matching item name */
				if (basket['item_name_list'][item]['item_name'] == item[i]['item_name']) {

					/* decrement stock */
					item[i]['stock'] -= 1;
				}
			}
		}

		basket['total_items'] -= 1;
	}

	/* update item db */
	fs.writeFileSync(itemsFile, JSON.stringify(items));

	return (0);
}

function resetMemberBasket(login) {

	var memebers = [];

	try {
		memebers = (JSON.parse(fs.readFileSync(memebersFile)));
	} catch (err) { return (-1); }

	/* find member */
	for (var i in memebers) {

		/* reset member's basket to empty */
		if (memebers[i]['profile']['login'] == login) {
			memebers[i]['basket']['items'] = [];
			memebers[i]['basket']['total_items'] = 0;
			memebers[i]['basket']['total_cost'] = 0;
		}
	}

	fs.writeFileSync(memebersFile, JSON.stringify(memebers));

	return (0);
}

function archiveBasket(login, basket) {

	/* update database stock */
	if (checkoutBasket(basket) == -1) {
		return (-1);
	}

	var archivedBaskets = [];

	try {
		archivedBaskets = (JSON.parse(fs.readFileSync(archivesFile)));
	} catch (err) { return (-1); }

	archivedBaskets.unshift(basket);

	/* reset member basket */
	if (resetMemberBasket(login) == -1) {
		return (-1);
	}

	/* Write ArchivedBaskets to archive db */
	fs.writeFileSync(archivesFile, JSON.stringify(archivedBaskets));

	return (0);
}

module.exports = archiveBasket;
