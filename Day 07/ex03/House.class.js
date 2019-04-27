/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   House.class.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/03 10:15:49 by akharrou          #+#    #+#             */
/*   Updated: 2019/04/03 10:30:25 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

class House {

	introduce() {
		console.log(`House ${this.getHouseName()} of ${this.getHouseSeat()} : "${this.getHouseMotto()}"`);
	};
};

module.exports = House;
