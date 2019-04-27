/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   delete_item.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 18:55:11 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 21:18:46 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const itemsFile = '../database/items.json';

function deleteItem(item_name) {

	var items = [];

	try {
		items = (JSON.parse(fs.readFileSync(itemsFile)));
	} catch (err) { return (-1); }

	for (var i in items) {
		if (items[i]['item_name'] == item_name) {
			items.splice(i, 1);
			break ;
		}
	}

	/* Write Items to Database */
	fs.writeFileSync(itemsFile, JSON.stringify(items));
	return (0);
}

module.exports = deleteItem;
