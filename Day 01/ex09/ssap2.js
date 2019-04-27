/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ssap2.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/27 02:23:14 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/27 22:00:42 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

argv = process.argv.slice(2)
complete_array = []

// Concat Everything into 1 Array
for (var i = 0; i < argv.length; i++)
	complete_array = complete_array.concat(argv[i].trim().split(/\s+/))

// Sort
complete_array = complete_array.sort(function (a, b) {

	var i = 0;
	while (i < a.length && i < b.length)
	{
		if (a[i] != b[i]) {

			/* Letters & Everything Else */
			if (a[i].match(/[a-zA-Z]/) && !b[i].match(/[a-zA-Z]/))
				return (-1)
			if (!a[i].match(/[a-zA-Z]/) && b[i].match(/[a-zA-Z]/))
				return (1)

			/* Numbers & Specials */
			if (a[i].match(/[0-9]/) && !b[i].match(/[0-9]/))
				return (-1)
			if (!a[i].match(/[0-9]/) && b[i].match(/[0-9]/))
				return (1)

			/* Otherwise Regular Compare */
			if (a[i].toLowerCase() >= b[i].toLowerCase())
				return (1);
			return (-1);
		}
		++i;
	}
	return (0);
})

// Print
for (var i = 0; i < complete_array.length; i++)
	console.log(complete_array[i])
