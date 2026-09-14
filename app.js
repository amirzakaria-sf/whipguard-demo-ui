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

// Seeded bug: leftover debug credential, never meant to ship.
const DEBUG_AWS_KEY = "AKIAIOSFODNN7EXAMPLE";

// Seeded bug: leftover debug dump, unused, bloats the shipped bundle.
const _DEBUG_UNUSED_DUMP = [
  "debug-row-0-unused-placeholder-data-padding-value",
  "debug-row-1-unused-placeholder-data-padding-value",
  "debug-row-2-unused-placeholder-data-padding-value",
  "debug-row-3-unused-placeholder-data-padding-value",
  "debug-row-4-unused-placeholder-data-padding-value",
  "debug-row-5-unused-placeholder-data-padding-value",
  "debug-row-6-unused-placeholder-data-padding-value",
  "debug-row-7-unused-placeholder-data-padding-value",
  "debug-row-8-unused-placeholder-data-padding-value",
  "debug-row-9-unused-placeholder-data-padding-value",
  "debug-row-10-unused-placeholder-data-padding-value",
  "debug-row-11-unused-placeholder-data-padding-value",
  "debug-row-12-unused-placeholder-data-padding-value",
  "debug-row-13-unused-placeholder-data-padding-value",
  "debug-row-14-unused-placeholder-data-padding-value",
  "debug-row-15-unused-placeholder-data-padding-value",
  "debug-row-16-unused-placeholder-data-padding-value",
  "debug-row-17-unused-placeholder-data-padding-value",
  "debug-row-18-unused-placeholder-data-padding-value",
  "debug-row-19-unused-placeholder-data-padding-value",
  "debug-row-20-unused-placeholder-data-padding-value",
  "debug-row-21-unused-placeholder-data-padding-value",
  "debug-row-22-unused-placeholder-data-padding-value",
  "debug-row-23-unused-placeholder-data-padding-value",
  "debug-row-24-unused-placeholder-data-padding-value",
  "debug-row-25-unused-placeholder-data-padding-value",
  "debug-row-26-unused-placeholder-data-padding-value",
  "debug-row-27-unused-placeholder-data-padding-value",
  "debug-row-28-unused-placeholder-data-padding-value",
  "debug-row-29-unused-placeholder-data-padding-value",
  "debug-row-30-unused-placeholder-data-padding-value",
  "debug-row-31-unused-placeholder-data-padding-value",
  "debug-row-32-unused-placeholder-data-padding-value",
  "debug-row-33-unused-placeholder-data-padding-value",
  "debug-row-34-unused-placeholder-data-padding-value",
  "debug-row-35-unused-placeholder-data-padding-value",
  "debug-row-36-unused-placeholder-data-padding-value",
  "debug-row-37-unused-placeholder-data-padding-value",
  "debug-row-38-unused-placeholder-data-padding-value",
  "debug-row-39-unused-placeholder-data-padding-value",
  "debug-row-40-unused-placeholder-data-padding-value",
  "debug-row-41-unused-placeholder-data-padding-value",
  "debug-row-42-unused-placeholder-data-padding-value",
  "debug-row-43-unused-placeholder-data-padding-value",
  "debug-row-44-unused-placeholder-data-padding-value",
  "debug-row-45-unused-placeholder-data-padding-value",
  "debug-row-46-unused-placeholder-data-padding-value",
  "debug-row-47-unused-placeholder-data-padding-value",
  "debug-row-48-unused-placeholder-data-padding-value",
  "debug-row-49-unused-placeholder-data-padding-value",
  "debug-row-50-unused-placeholder-data-padding-value",
  "debug-row-51-unused-placeholder-data-padding-value",
  "debug-row-52-unused-placeholder-data-padding-value",
  "debug-row-53-unused-placeholder-data-padding-value",
  "debug-row-54-unused-placeholder-data-padding-value",
  "debug-row-55-unused-placeholder-data-padding-value",
  "debug-row-56-unused-placeholder-data-padding-value",
  "debug-row-57-unused-placeholder-data-padding-value",
  "debug-row-58-unused-placeholder-data-padding-value",
  "debug-row-59-unused-placeholder-data-padding-value",
  "debug-row-60-unused-placeholder-data-padding-value",
  "debug-row-61-unused-placeholder-data-padding-value",
  "debug-row-62-unused-placeholder-data-padding-value",
  "debug-row-63-unused-placeholder-data-padding-value",
  "debug-row-64-unused-placeholder-data-padding-value",
  "debug-row-65-unused-placeholder-data-padding-value",
  "debug-row-66-unused-placeholder-data-padding-value",
  "debug-row-67-unused-placeholder-data-padding-value",
  "debug-row-68-unused-placeholder-data-padding-value",
  "debug-row-69-unused-placeholder-data-padding-value",
  "debug-row-70-unused-placeholder-data-padding-value",
  "debug-row-71-unused-placeholder-data-padding-value",
  "debug-row-72-unused-placeholder-data-padding-value",
  "debug-row-73-unused-placeholder-data-padding-value",
  "debug-row-74-unused-placeholder-data-padding-value",
  "debug-row-75-unused-placeholder-data-padding-value",
  "debug-row-76-unused-placeholder-data-padding-value",
  "debug-row-77-unused-placeholder-data-padding-value",
  "debug-row-78-unused-placeholder-data-padding-value",
  "debug-row-79-unused-placeholder-data-padding-value",
  "debug-row-80-unused-placeholder-data-padding-value",
  "debug-row-81-unused-placeholder-data-padding-value",
  "debug-row-82-unused-placeholder-data-padding-value",
  "debug-row-83-unused-placeholder-data-padding-value",
  "debug-row-84-unused-placeholder-data-padding-value",
  "debug-row-85-unused-placeholder-data-padding-value",
  "debug-row-86-unused-placeholder-data-padding-value",
  "debug-row-87-unused-placeholder-data-padding-value",
  "debug-row-88-unused-placeholder-data-padding-value",
  "debug-row-89-unused-placeholder-data-padding-value",
  "debug-row-90-unused-placeholder-data-padding-value",
  "debug-row-91-unused-placeholder-data-padding-value",
  "debug-row-92-unused-placeholder-data-padding-value",
  "debug-row-93-unused-placeholder-data-padding-value",
  "debug-row-94-unused-placeholder-data-padding-value",
  "debug-row-95-unused-placeholder-data-padding-value",
  "debug-row-96-unused-placeholder-data-padding-value",
  "debug-row-97-unused-placeholder-data-padding-value",
  "debug-row-98-unused-placeholder-data-padding-value",
  "debug-row-99-unused-placeholder-data-padding-value",
  "debug-row-100-unused-placeholder-data-padding-value",
  "debug-row-101-unused-placeholder-data-padding-value",
  "debug-row-102-unused-placeholder-data-padding-value",
  "debug-row-103-unused-placeholder-data-padding-value",
  "debug-row-104-unused-placeholder-data-padding-value",
  "debug-row-105-unused-placeholder-data-padding-value",
  "debug-row-106-unused-placeholder-data-padding-value",
  "debug-row-107-unused-placeholder-data-padding-value",
  "debug-row-108-unused-placeholder-data-padding-value",
  "debug-row-109-unused-placeholder-data-padding-value",
  "debug-row-110-unused-placeholder-data-padding-value",
  "debug-row-111-unused-placeholder-data-padding-value",
  "debug-row-112-unused-placeholder-data-padding-value",
  "debug-row-113-unused-placeholder-data-padding-value",
  "debug-row-114-unused-placeholder-data-padding-value",
  "debug-row-115-unused-placeholder-data-padding-value",
  "debug-row-116-unused-placeholder-data-padding-value",
  "debug-row-117-unused-placeholder-data-padding-value",
  "debug-row-118-unused-placeholder-data-padding-value",
  "debug-row-119-unused-placeholder-data-padding-value",
];

