const inputField = document.querySelector("input");
const addButton = document.querySelector(".addButton");
const todoList = document.querySelector(".todoList");

addButton.addEventListener("click", addTodo);
inputField.addEventListener("keypress", (event) => {
    if (event.key === "Enter") addTodo();
});

function addTodo() {
    const inputValue = inputField.value;
    
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
        <input type="checkbox" class="todo-checkbox">
        <span class="task-text">${inputValue}</span>
    `;

    li.querySelector(".todo-checkbox").addEventListener("change", function() {
        li.classList.toggle("done");
    });

    todoList.appendChild(li);
    inputField.value = "";
    inputField.focus();
}
