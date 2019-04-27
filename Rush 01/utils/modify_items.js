/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   modify_items.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 18:55:11 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 21:43:16 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const itemsFile = '../database/items.json';

function modifyItems(item_name, price, stock) {

	var items = [];

	try {
		items = (JSON.parse(fs.readFileSync(itemsFile)));
	} catch (err) { return (-1); }

	for (var i in items) {
		if (item[i]['item_name'] = item_name) {

			if (isNaN(price) == false) {
				item[i]['price'] = price;
			}
			if (isNaN(stock) == false) {
				item[i]['stock'] = stock;
			}
		}
	}

	/* Write Guest to Database */
	fs.writeFileSync(itemsFile, JSON.stringify(items));

	return (0);
}

module.exports = modifyItems;
