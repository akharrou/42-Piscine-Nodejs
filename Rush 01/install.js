/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   install.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/31 12:32:51 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/31 20:37:26 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');

/* Create Database */
fs.mkdirSync('~/goinre/42shop_db');
fs.mkdirSync('~/goinre/42shop_db/users');
fs.mkdirSync('~/goinre/42shop_db/basekets');
fs.openSync('~/goinre/42shop_db/', 'a');

/* Create Password File */
fs.mkdirSync('private');
fs.openSync('private/passwd', 'a');


/* Create Admin Account w/ Special Access */
// TODO

