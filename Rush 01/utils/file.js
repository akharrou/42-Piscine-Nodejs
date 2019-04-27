/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   file.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 11:03:44 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 11:08:56 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');

/*
	NAME
		file -- get file content

	PARAMETERS
		path       Path to a file, absolute or relative to current working
		           directory.

	RETURN VALUES
		Returns content of the file as a string.
*/
function file(path) {
	return (fs.readFileSync(path, 'utf-8').toString());
}

module.exports = file;
