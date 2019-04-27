/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   oddeven.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/26 23:22:07 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/26 23:22:08 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Set input character encoding.
process.stdin.setEncoding('utf-8');

// Initial Prompt
process.stdout.write('Enter a number: ');

// Respond Accordingly
process.stdin.on('data', function (data)
{
	if (isNaN(data.toString().trim()) || data.toString().trim() == '')
		console.log(`'${data.toString().trim()}' is not a number`);
	else if (Number(data) % 2 == 0)
		console.log(`The number ${data.trim()} is even`);
	else
		console.log(`The number ${data.trim()} is odd`);

	// Prompt Again
	process.stdout.write('Enter a number: ');
});
