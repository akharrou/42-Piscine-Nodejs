/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   do_op_2.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/03/27 12:15:36 by akharrou          #+#    #+#             */
/*   Updated: 2019/03/27 23:40:02 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

if (process.argv.length != 3) {
	console.log('Incorrect Parameters');
	return ;
}

expr = process.argv[2].trim();

/* Initial Error Checking */
if (expr.match(/[^+-/*%\s\d]/)) {
	console.log('Syntax Error');
	return ;
}

var tmp_expr = expr.split(/[+-/*%\s+]/);

for (var i = 0; i < tmp_expr.length; i++) {
	if (tmp_expr[i] == '') {
		tmp_expr.splice(i, 1);
		i = i - 1;
	}
}

if (tmp_expr.length != 2) {
	console.log('Syntax Error');
	return;
}

expr = expr.replace(/\s+/g, '');

var n1 = parseInt(expr);

tmp = expr.substring(n1.toString().length);
op = tmp[0];
tmp = tmp.substring(1);

var n2 = parseInt(tmp);

tmp = tmp.substring(n2.toString().length);
if (tmp.match(/[+-/*%]/)) {
	console.log('Syntax Error')
	return ;
}

if (op == '+') {
	console.log(n1 + n2);
} else if (op == '-') {
	console.log(n1 - n2);
} else if (op == '*') {
	console.log(n1 * n2);
} else if (op == '/') {
	if (n2 != 0)
		console.log(n1 / n2);
	else
		console.log('Error: division by 0')
} else if (op == '%') {
	if (n2 != 0)
		console.log(n1 % n2);
	else
		console.log('Error: modulo by 0')
} else {
	console.log('Incorrect Parameters');
}
