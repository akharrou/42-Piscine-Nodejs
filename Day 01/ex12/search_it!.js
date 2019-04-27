/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   search_it!.js                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/27 14:12:06 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/27 15:51:21 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

if (process.argv.length < 4)
	return ;

var key = process.argv[2];
argv = process.argv.slice(3);

for (var i = 0; i < argv.length; i++)
	if (key == argv[i].split(':')[0])
		console.log (argv[i].split(':')[1])
