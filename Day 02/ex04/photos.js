/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   photos.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/28 11:40:41 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/28 22:40:51 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

if (process.argv.length < 2)
	return ;

const fs = require('fs');
const needle = require('needle');
const cheerio = require('cheerio');
const request = require('request');

const URL = process.argv[2].toString();
const pre = 'https://'
const domain = dirName = URL.replace(/(https?:\/\/)?/, '').split('/')[0];

needle.get(URL, function (err, res) {
	if (err)
		console.log(err);
	var source = cheerio.load(res.body);
	var images = source('html').html().match(/<img[^>]+src="([^">]+)"/g);
	if (images) {

		try { fs.mkdirSync(dirName); } catch (error) {}
		for (var i = 0; i < images.length; i++) {
			full_path = images[i].split('src=')[1].replace(/"/g, '');
			if (full_path.match(/https?:\/\//) == null) {
				if (full_path[0] != '/')
					full_path = `/${full_path}`;
				full_path = `${pre}${domain}${full_path}`;
			}
			name = full_path.replace(pre, '').replace(domain, '').replace(/\//g, '-');
			console.log(`Downloading ...   ${full_path}`);
			download(full_path, `./${dirName}/${name}`, function() {
				return ;
			});
		}
	}
});

function download(uri, filename, callback) {
	request.head(uri, function(err, res, body) {
		request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	});
};
