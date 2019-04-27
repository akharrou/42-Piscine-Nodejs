/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   add_catgory.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 18:55:11 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 21:11:54 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const categoriesFile = '../database/categories.json';

function addCategory(name) {

	var categories = [];

	try {
		categories = (JSON.parse(fs.readFileSync(categoriesFile)));
	} catch (err) { fs.openSync(categoriesFile, 'a'); }

	var new_category = {

		type: 'CATEGORY',

		category_name: name,
		item_name_list: ['',],
	};

	categories.unshift(new_category);

	/* Write Category to Database */
	fs.writeFileSync(categoriesFile, JSON.stringify(categories));
}

module.exports = addCategory;
