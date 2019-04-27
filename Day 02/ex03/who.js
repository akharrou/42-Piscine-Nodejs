/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   who.js                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/28 10:40:13 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/28 20:51:15 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var spawn = require('child_process').spawn

var w  = spawn('w', ['-h']);
var date = spawn('date');

date.stdout.on('data', function (data) {
	date = data.toString().split(' ');
	w.stdout.on('data', function (data) {
		var users = data.toString().split('\n').sort();
		for (var i = 0; i < users.length; i++) {
			if (users[i].length > 0) {
				var user_info = users[i].toString().split(/\s+/g);
				time = user_info[3].split(':');
				if (Number(time[0]) < 10)
					time[0] = `0${time[0]}`;
				if (user_info[1] != 'console')
					user_info[1] = 'tty' + user_info[1];
				console.log(`${user_info[0]} ${user_info[1]}  ${date[1]} ${date[2]} ${time[0]}:${time[1]}`);
			}
		}
	});
});
