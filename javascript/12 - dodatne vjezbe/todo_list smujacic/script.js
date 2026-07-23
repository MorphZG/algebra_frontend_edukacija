const inputField = document.querySelector("input");
const list = document.querySelector(".todoList");
let todo = JSON.parse(localStorage.getItem("todoItems")) || [];

const createListItem = function (item, index) {
  const listItem = document.createElement("li");
  listItem.classList.toggle("done", item.status);

  const check = document.createElement("input");
  check.type = "checkbox";
  check.className = "done";
  check.checked = item.status;
  check.dataset.index = index;

  const label = document.createElement("span");
  label.textContent = item.name;

  const removeButton = document.createElement("div");
  removeButton.className = "removeButton";
  removeButton.dataset.index = index;

  listItem.append(check);
  listItem.append(label);
  listItem.append(removeButton);

  return listItem;
};

const renderList = function () {
  list.innerHTML = "";
  todo.forEach((item, index) => {
    list.append(createListItem(item, index));
  });
};

document.addEventListener("click", (event) => {
  if (event.target.closest(".addButton")) {
    const getItemContent = inputField.value;

    if (!getItemContent) {
      return;
    }

    const newItem = { name: getItemContent, status: false };
    todo.push(newItem);
    localStorage.setItem("todoItems", JSON.stringify(todo));

    renderList();
    inputField.value = "";
  }

  if (event.target.closest(".done")) {
    const index = event.target.dataset.index;
    todo[index].status = !todo[index].status;
    localStorage.setItem("todoItems", JSON.stringify(todo));

    event.target.closest("li").classList.toggle("done", todo[index].status);
  }

  if (event.target.closest(".removeButton")) {
    const index = event.target.dataset.index;
    todo.splice(index, 1);
    localStorage.setItem("todoItems", JSON.stringify(todo));

    renderList();
  }
});

renderList();
