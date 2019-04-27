/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   one_more_time.js                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/27 16:08:42 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/28 20:08:57 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

months = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre']

/* 0) initial format error check: number of params, legal characters, number of spaces and number of ':' */

if (process.argv.length < 3)
	return ;

var date = process.argv[2];

if (date.match(/[^A-Za-z0-9: ]/g) || date.match(/[ ]/g).length != 4 || date.match(/[:]/g).length != 2) {
	console.log('Wrong Format');
	return ;
}

/* 1) get all the fields in an array */

date		= date.split(/[: ]/);

var year	= date[3];
var month	= date[2];
var day		= date[1];
var weekday	= date[0];
var hours	= date[4];
var minutes	= date[5];
var seconds	= date[6];

/* 2) check that each field is in order and that the string was correctly formatted essentially */

if (month.toLowerCase().match(/(janvier|fevrier|mars|avril|mai|juin|juillet|aout|septembre|octobre|novembre|decembre)/) == null ||
	weekday.toLowerCase().match(/(lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)/) == null ||
	isNaN(day) || Number(day) < 0 || Number(day) > 31 ||
	isNaN(hours) || Number(hours) < 0 || Number(hours) > 23 ||
	isNaN(minutes) || Number(minutes) < 0 || Number(minutes) > 59 ||
	isNaN(seconds) || Number(seconds) < 0 || Number(seconds) > 59)
{
	console.log('Incoherent Date');
	return ;
}

if (year.length != 4 || day.length < 1 || day.length > 2 || hours.length != 2 || minutes.length != 2 || seconds.length != 2) {
	console.log('Incoherent Date');
	return ;
}

// 4) calculate the offset (in secs) from 1970

console.log(Date.UTC(Number(year), months.indexOf(month.toLowerCase()), Number(day), Number(hours) - 1, Number(minutes), Number(seconds)) / 1000);
