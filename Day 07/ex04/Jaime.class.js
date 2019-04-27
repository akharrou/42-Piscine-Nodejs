/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Jaime.class.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/03 10:37:49 by akharrou          #+#    #+#             */
/*   Updated: 2019/04/04 08:59:24 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

class Jamie {

	sleepWith(inst) {

		if (inst.constructor.name == 'Tyrion') {
			console.log(`Not even if I'm drunk !`);
		} else if (inst.constructor.name == 'Sansa') {
			console.log(`Let's do this.`);
		} else if (inst.constructor.name == 'Cersei') {
			console.log(`With pleasure, but only in a tower in Winterfell, then.`);
		} else {
			console.log(`Not even if I'm drunk !`);
		}
	}
}

module.exports = Jamie;
