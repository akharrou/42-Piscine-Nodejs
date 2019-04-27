/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   delete_category.js                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 18:55:11 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 21:18:54 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const categoriesFile = '../database/categories.json';

function deleteCategory(category_name) {

	var categories = [];

	try {
		categories = (JSON.parse(fs.readFileSync(categoriesFile)));
	} catch (err) { return (-1); }

	for (var i in categories) {
		if (categories[i]['category_name'] == category_name) {
			categories.splice(i, 1);
			break ;
		}
	}

	/* Write Categories to Database */
	fs.writeFileSync(categoriesFile, JSON.stringify(categories));
	return (0);
}

module.exports = deleteCategory;
