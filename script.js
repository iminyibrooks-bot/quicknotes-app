const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const category = document.querySelector("#note-category");
const list = document.querySelector("#notes-list");

let notes = [];

function render() {
  list.textContent = "";
  for (const note of notes) {
    const li = document.createElement("li");
    li.classList.add(`category-${note.category}`);

    const text = document.createElement("p");
    text.textContent = note.text;

    const meta = document.createElement("small");
    meta.textContent = `${note.category} · ${note.createdAt}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.append(text, meta, deleteBtn);
    list.appendChild(li);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const note = {
    id: Date.now(),
    text: input.value.trim(),
    category: category.value,
    createdAt: new Date().toLocaleString(),
  };
  notes.push(note);
  input.value = "";
  render();
});