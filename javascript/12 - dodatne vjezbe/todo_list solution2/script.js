(() => {
	'use strict';

	class Todo {
		constructor() {
			this.input = document.querySelector('input');
			this.addButton = document.querySelector('.addButton');
			this.list = document.querySelector('ul');

			this.addItem = this.addItem.bind(this);
		}

		markDown(event) {
			const item = event.target.parentNode;
			item.classList.toggle('done');
		}

		removeItem(event) {
			const removeButton = event.target.parentNode;
			removeButton.remove();
		}

		addRemoveButton(item) {
			const removeButton = document.createElement('div');

			removeButton.className = 'removeButton';
			removeButton.addEventListener('click', this.removeItem);
			item.appendChild(removeButton);
		}

		addCheckbox(item) {
			const checkbox = document.createElement('input');

			checkbox.type = 'checkbox';
			checkbox.addEventListener('click', this.markDown);
			item.insertBefore(checkbox, item.firstChild);
		}

		createItem(text) {
			const item = document.createElement('li');

			item.innerText = text;
			this.addCheckbox(item);
			this.addRemoveButton(item);

			return item;
		}

		addItem(event) {
			const text = this.input.value.trim();

			if (!text) {
				return;
			}

			const item = this.createItem(text);
			this.list.appendChild(item);
			this.input.value = '';
		}

		addListener() {
			this.addButton.addEventListener('click', this.addItem);
		}

		init() {
			this.addListener();
		}
	}

	window.addEventListener('load', () => {
		const todo = new Todo();
		todo.init();
	});
})();