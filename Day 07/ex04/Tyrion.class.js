/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Tyrion.class.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/03 08:57:32 by akharrou          #+#    #+#             */
/*   Updated: 2019/04/04 08:58:24 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const Lannister = require('./Lannister.class');

class Tyrion extends Lannister {

	sleepWith(inst) {

		if (inst.constructor.name == 'Jaime' || inst.constructor.name == 'Cersei') {
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

module.exports = Tyrion;
