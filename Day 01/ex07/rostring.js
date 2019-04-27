/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   rostring.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/27 01:58:57 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/27 21:25:13 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

if (process.argv.length < 3)
	return ;

var word_array = process.argv[2].trim().split(/\s+/)
console.log(word_array.slice(1).concat(word_array[0]).join(' '))
