/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   modify_category.js                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 18:55:11 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 21:28:56 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const itemsFile = '../database/items.json';
const categoriesFile = '../database/categories.json';

function modifyCategory(category_name, new_category_name) {

	var items = [];
	var categories = [];

	try {
		categories = (JSON.parse(fs.readFileSync(categoriesFile)));
	} catch (err) { return (-1); }

	try {
		items = (JSON.parse(fs.readFileSync(itemsFile)));
	} catch (err) { return (-1); }

	for (var i in categories) {
		if (categories[i]['category_name'] == category_name) {
			categories[i]['category_name'] = new_category_name;
		}
	}

	for (var i in items) {
		for (var j in items[i]['categories_name_list']) {
			if (items[i]['categories_name_list'][j] == category_name) {
				items[i]['categories_name_list'][j] = new_category_name;
			}
		}
	}

	/* Write Categories to Database */
	fs.writeFileSync(categoriesFile, JSON.stringify(categories));

	/* Write Items to Database */
	fs.writeFileSync(itemsFile, JSON.stringify(items));

	return (0);
}

module.exports = modifyCategory;
