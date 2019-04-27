/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   delete_member.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 18:55:11 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 21:18:35 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
const membersFile = '../database/members.json';

function deleteMember(login) {

	var members = [];

	try {
		members = (JSON.parse(fs.readFileSync(membersFile)));
	} catch (err) { return (-1); }

	for (var i in members) {
		if (members[i]['profile']['login'] == login) {
			members.splice(i, 1);
			break ;
		}
	}

	/* Write Users to Database */
	fs.writeFileSync(membersFile, JSON.stringify(members));
	return (0);
}

module.exports = deleteMember;
