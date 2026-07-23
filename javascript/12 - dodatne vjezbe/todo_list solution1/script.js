(function () {
	'use strict';

	function Todo() {
		var input = document.querySelector('input'),
			addButton = document.querySelector('.addButton'),
			list = document.querySelector('ul');

		function markDown(event) {
			var item = event.target;
			item.parentNode.classList.toggle('done');
		}

		function removeItem(event) {
			var removebutton = event.target;
			removebutton.parentNode.remove();
		}

		function addRemoveButton(item) {
			var removeButton = document.createElement('div');

			removeButton.className = 'removeButton';
			removeButton.addEventListener('click', removeItem);
			item.appendChild(removeButton);
		}

		function addCheckbox(item) {
			var checkbox = document.createElement('input');

			checkbox.setAttribute('type', 'checkbox');
			checkbox.addEventListener('click', markDown);
			item.insertBefore(checkbox, item.firstChild);
		}

		function createItem(text) {
			var item = document.createElement('li');
			
			item.innerText = text;
			addCheckbox(item);
			addRemoveButton(item);

			return item;
		}

		function addItem(event) {
			var text = input.value;

			var item = createItem(text);
			list.appendChild(item);
			input.value = '';
		}

		this.addListener = function () {
			addButton.addEventListener('click', addItem);
		}
	}

	Todo.prototype.init = function() {
		this.addListener();
	}

	var todo = new Todo();
	window.addEventListener('load', todo.init.bind(todo));
})();