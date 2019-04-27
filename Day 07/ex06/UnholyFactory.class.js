/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   UnholyFactory.class.js                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/04 11:30:12 by akharrou          #+#    #+#             */
/*   Updated: 2019/04/04 12:43:33 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

class UnholyFactory {

	absorb(fighter_type) {

		/* Check Duplicates */
		if (this.isAlreadyAbsorbed(fighter_type)) {
			console.log(`(Factory already absorbed a fighter of type ${fighter_type.type})`);
		} else {

			/* Check Legitimacy of Fighter */
			if (this.isFighter(fighter_type.constructor.name) == true) {

				/* If it a legitimate fighter, we add it to our absorbed fighters array */
				UnholyFactory.absorbed_fighters.push(fighter_type);
				console.log(`(Factory absorbed a fighter of type ${fighter_type.type})`);
			} else {
				console.log(`(Factory can't absorb this, it's not a fighter)`);
			}
		}
	};

	fabricate(requested_fighter) {

		for (var i in UnholyFactory.absorbed_fighters) {

			/* Check if request_fighter was absorbed; then take actions accordingly */
			if (UnholyFactory.absorbed_fighters[i].type == requested_fighter) {

				console.log(`(Factory fabricates a fighter of type ${requested_fighter})`);
				return UnholyFactory.absorbed_fighters[i];
			}
		}
		console.log(`(Factory hasn't absorbed any fighter of type ${requested_fighter})`);
		return (null);
	}

	isAlreadyAbsorbed(fighter_type) {

		for (var i in UnholyFactory.absorbed_fighters) {
			if (UnholyFactory.absorbed_fighters[i].constructor.name == fighter_type.constructor.name)
				return (true);
		}
		return (false);
	};

	isFighter(fighter_type_name) {

		if (fighter_type_name == 'Footsoldier' ||
			fighter_type_name == 'Archer' ||
			fighter_type_name == 'Assassin') {
			return (true);
		} else {
			return (false);
		}
	};

};

UnholyFactory.absorbed_fighters = [];

module.exports = UnholyFactory;
