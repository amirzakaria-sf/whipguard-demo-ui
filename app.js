const items = [];
const list = document.getElementById("list");
const form = document.getElementById("add-form");
const input = document.getElementById("new-item");

function render() {
  list.innerHTML = "";
  items.forEach((text, index) => {
    const li = document.createElement("li");
    li.dataset.index = String(index);
    const span = document.createElement("span");
    span.textContent = text;
    const del = document.createElement("button");
    del.className = "delete";
    del.textContent = "Delete";
    del.addEventListener("click", () => deleteItem(index));
    li.append(span, del);
    list.append(li);
  });
}

function deleteItem(index) {
  items.splice(index, 1);
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  items.push(value);
  input.value = "";
  render();
});

render();
