/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Targaryen.class.js                                 :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/03 09:57:39 by akharrou          #+#    #+#             */
/*   Updated: 2019/04/03 10:15:12 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

class Targaryen {

	constructor() {
	}

	getBurned() {
		if (this.resistsFire && this.resistsFire() == true) {
			return ('emerges naked but unharmed');
		} else {
			return ('burns alive');
		}
	}
}

module.exports = Targaryen;
