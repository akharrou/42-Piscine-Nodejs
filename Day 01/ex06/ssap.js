/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ssap.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/27 01:47:14 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/27 02:23:08 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

argv = process.argv.slice(2)
final_array = []

// Concat Everything into 1 Array
for (var i = 0; i < argv.length; i++)
	final_array = final_array.concat(argv[i].split(' '))

// Sort
final_array = final_array.sort()

// Print
for (var i = 0; i < final_array.length; i++)
	console.log(final_array[i])
