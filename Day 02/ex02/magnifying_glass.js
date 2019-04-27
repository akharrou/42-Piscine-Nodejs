/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   magnifying_glass.js                                :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/28 00:59:01 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/28 21:10:40 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');

if (process.argv < 3)
	return ;

infile = process.argv[2];

fs.readFile(`${process.cwd()}/${infile}`, 'utf-8', function (err, data) {

	var submatch;
	var ankor_match;

	var replacement;
	var submatch_replacement;
	var ankor_match_replacement;

	if (err) {
		console.log(err);
		return ;
	}
	ankor_match = data.match(/<a.*>.*<\/a>/g);
	if (ankor_match != null)
	{
		for (var i = 0; i < ankor_match.length; i++) {

			ankor_match_replacement = ankor_match[i];

			/* -- -- --  Handles: title="*"  -- -- -- */
			submatch = ankor_match_replacement.match(/title=".+"/g);
			if (submatch) {
				replacement = submatch.toString().split('"')[1];
				submatch_replacement = submatch.toString().replace(replacement, replacement.toUpperCase());
				ankor_match_replacement = ankor_match_replacement.replace(submatch, submatch_replacement);
			}

			/* -- -- --  Handles: > * <  -- -- -- */
			submatch = ankor_match_replacement.match(/>[^><]+</g);
			if (submatch) {
				replacement = submatch.toString();
				submatch_replacement = submatch.toString().replace(replacement, replacement.toUpperCase());
				ankor_match_replacement = ankor_match_replacement.replace(submatch, submatch_replacement);
			}

			data = data.replace(ankor_match[i], ankor_match_replacement);
		}
	}
	process.stdout.write(data);
});
