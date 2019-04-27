/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Tyrion.class.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/03 08:57:32 by akharrou          #+#    #+#             */
/*   Updated: 2019/04/04 14:47:06 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const Lannister = require('./main');

class Tyrion extends Lannister {

	constructor() {
		super();
		console.log('My name is Tyrion');
	}

	getSize() {
		return "Short";
	}

	houseMotto() {
		return super.houseMotto();
	}
}

module.exports = Tyrion;
