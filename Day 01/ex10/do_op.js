/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   do_op.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/27 12:02:48 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/27 12:14:12 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

if (process.argv.length != 5) {
	console.log('Incorrect Parameters');
	return ;
}

n1 = Number.parseInt(process.argv[2]);
op = process.argv[3].trim();
n2 = Number.parseInt(process.argv[4]);

if (op == '+') {
	console.log(n1 + n2);
} else if (op == '-') {
	console.log(n1 - n2);
} else if (op == '*') {
	console.log(n1 * n2);
} else if (op == '/') {
	if (n2 != 0)
		console.log(n1 / n2);
} else if (op == '%') {
	if (n2 != 0)
		console.log(n1 % n2);
} else {
	console.log('Incorrect Parameters');
}
