/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   NightsWatch.class.js                               :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/04 09:27:04 by akharrou          #+#    #+#             */
/*   Updated: 2019/04/04 10:24:56 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

class NightsWatch {

	constructor() {

		this.recruits = [];
	}

	recruit(new_recruit) {
		this.recruits.push(new_recruit);
	}

	fight() {
		for (var i in this.recruits) {
			if (this.recruits[i].constructor.name != 'MaesterAemon')
				this.recruits[i].fight();
		}
	};
}

module.exports = NightsWatch;
