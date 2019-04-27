/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   auth.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/30 21:50:20 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/30 22:30:22 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const hash = require('object-hash');

const passwordFile = '../passwd';

module.exports = {

	auth: function (login, passwd) {

		try {
			var accounts = (JSON.parse(fs.readFileSync(passwordFile)));
		} catch (err) { return (false); }

		/* Iterate Through Users */
		for (var key in accounts) {

			/* Check to Find a Matching Login & Password */
			if (accounts[key]['login'] == login)
				if (hash(passwd) === accounts[key]['passwd'])
					return (true);
		}
		return (false);
	}

}
