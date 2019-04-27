/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   add_item.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 18:55:11 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 21:12:04 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const itemsFile = '../database/items.json';

function addItem(name, categories, price, stock) {

	var items = [];

	try {
		items = (JSON.parse(fs.readFileSync(itemsFile)));
	} catch (err) { fs.openSync(itemsFile, 'a'); }

	var new_item = {

		type: 'ITEM',

		item_name: name,
		items_name_list: items.split(','),
		price: price,
		stock: stock
	};

	items.unshift(new_item);

	/* Write Category to Database */
	fs.writeFileSync(itemsFile, JSON.stringify(items));
}

module.exports = addItem;
