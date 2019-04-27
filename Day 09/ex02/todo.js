/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   todo.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: akharrou <akharrou@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/04/05 23:09:26 by akharrou          #+#    #+#             */
/*   Updated: 2019/04/06 19:26:00 by akharrou         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

var taskList = document.querySelector('#ft_list');
var addTaskButton = document.querySelector('#new_task_btn');

/* — — — — — — — — — — Regenerate All Tasks from Cookies — — — — — — — — — — — */

var allCookies = document.cookie.split(';');

for (var i in allCookies) {
	if (allCookies[i].trim(' ').split('=')[0] != null && allCookies[i].trim(' ').split('=')[0] != '')
		appendNewTask(allCookies[i].trim(' ').split('=')[0]);
}

/* — — — — — — — — — — — — — — — — Create Task — — — — — — — — — — — — — — — —  */

addTaskButton.addEventListener('mouseover', () => {
	addTaskButton.style.background = `#0000000a`;
});

addTaskButton.addEventListener('mouseleave', () => {
	addTaskButton.style.background = `#ffffff`;
});

addTaskButton.addEventListener('click', () => {

	var newTask = window.prompt('New task:');
	if (newTask != null && newTask != '')
		appendNewTask(newTask);
});

function appendNewTask(newTask) {

	/* Creating the HTML */
	var currentCheckPoint = document.querySelector('hw');
	var newCheckPoint = document.createElement('hw');
	var newTaskElement = document.createElement('div');
	var newTaskElementText = document.createElement('p');
	var removeTaskElement = document.createElement('div');

	/* Giving Each their ID */
	newTaskElement.id = 'task_element';
	newTaskElementText.id = 'task_text';
	removeTaskElement.id = 'remove_task_element';

	/* Assembling them Together */
	newTaskElementText.appendChild(document.createTextNode(newTask));
	removeTaskElement.appendChild(document.createTextNode('x'));
	newTaskElement.appendChild(newTaskElementText);
	newTaskElement.appendChild(removeTaskElement);

	/* Inserting them to the DOM */
	taskList.insertBefore(newTaskElement, currentCheckPoint);
	taskList.insertBefore(newCheckPoint, document.querySelector('#task_element'));

	/* Adding an Event Listener to Delete the New Task */
	removeTaskElement.addEventListener('mouseover', () => {
		removeTaskElement.style.background = `#0000000a`;
	});

	removeTaskElement.addEventListener('mouseleave', () => {
		removeTaskElement.style.background = `#ffffff`;

	});

	removeTaskElement.addEventListener('click', (e) => {
		if (window.confirm('Delete permenantly ?') == true) {
			removeTaskElement.parentNode.remove();
			document.cookie = `${e.target.previousSibling.innerHTML}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		}
	});

	setCookie(newTask.toString(), 'task', 1);
};

/* — — — — — — — — — — — — — — — Set/Get Cookie — — — — — — — — — — — — — — — —  */

function setCookie(cname, cvalue, exdays) {

	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
