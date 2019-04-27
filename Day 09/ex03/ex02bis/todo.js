/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   todo.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/05 23:09:26 by akharrou          #+#    #+#             */
/*   Updated: 2019/04/06 19:51:15 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var taskList = $('#ft_list');
var addTaskButton = $('#new_task_btn');

/* — — — — — — — — — — Regenerate All Tasks from Cookies — — — — — — — — — — — */

var allCookies = Object.keys($.cookie());

for (var i in allCookies) {
	console.log(allCookies[i]);
	appendNewTask(allCookies[i]);
}

/* — — — — — — — — — — — — — — — — Create Task — — — — — — — — — — — — — — — —  */

addTaskButton.on('mouseover', () => {
	addTaskButton.css('background', `#0000000a`);
});

addTaskButton.on('mouseleave', () => {
	addTaskButton.css('background', `#ffffff`);
});

addTaskButton.on('click', () => {

	var newTask = window.prompt('New task:');
	if (newTask != null && newTask != '')
		appendNewTask(newTask);
});

function appendNewTask(newTask) {

	/* Create and Prepend the newly created HTML Task */
	var newAddedTask = $(`<div id="task_element"><p id="task_text">${newTask}</p><div id="remove_task_element">x</div></div>`);
	var removeBtn = newAddedTask.children('#remove_task_element');
	newAddedTask.prependTo("#ft_list");

	// /* Adding an Event Listener to Delete the New Task */
	removeBtn.on('mouseover', () => {
		removeBtn.css('background', `#0000000a`);
	});

	removeBtn.on('mouseleave', () => {
		removeBtn.css('background', `#ffffff`);
	});

	removeBtn.on('click', (e) => {
		if (window.confirm('Delete permenantly ?') == true) {
			$.removeCookie(e.target.previousSibling.innerHTML, { expires: 0 });
			e.target.parentNode.remove();
		}
	});

	$.cookie(newTask.toString(), 'task', { expires: 1 });
};
