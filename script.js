const form = document.querySelector("#note-form");
const input = document.querySelector("#note-input");
const category = document.querySelector("#note-category");
const list = document.querySelector("#notes-list");
const errorMessage = document.querySelector("#error-message");
const noteCount = document.querySelector("#note-count");

let notes = [];

function updateCount() {
  if (notes.length === 0) {
    noteCount.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    noteCount.textContent = "You have 1 note.";
  } else {
    noteCount.textContent = `You have ${notes.length} notes.`;
  }
}

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
    deleteBtn.addEventListener("click", () => {
      notes = notes.filter((n) => n.id !== note.id);
      render();
    });

    li.append(text, meta, deleteBtn);
    list.appendChild(li);
  }
  updateCount();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (text === "") {
    errorMessage.textContent = "Please type a note first.";
    return;
  }
  if (text.length > 200) {
    errorMessage.textContent = "Notes must be 200 characters or fewer.";
    return;
  }

  errorMessage.textContent = "";
  notes.push({
    id: Date.now(),
    text: text,
    category: category.value,
    createdAt: new Date().toLocaleString(),
  });
  input.value = "";
  render();
});

render();