const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const searchInput = document.querySelector("#search-input");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");

let notes = [];

function render() {
  notesList.textContent = "";

  notes.forEach((note) => {
    const listItem = document.createElement("li");
    listItem.classList.add("note-card", `category-${note.category}`);

    const text = document.createElement("p");
    text.textContent = note.text;

    const meta = document.createElement("div");
    meta.classList.add("note-meta");

    const category = document.createElement("span");
    category.classList.add("note-category");
    category.textContent = note.category.charAt(0).toUpperCase() + note.category.slice(1);

    const date = document.createElement("small");
    date.textContent = note.createdAt;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.classList.add("delete-btn");
    deleteButton.dataset.id = note.id;
    deleteButton.textContent = "Delete";

    meta.append(category, date, deleteButton);
    listItem.append(text, meta);
    notesList.appendChild(listItem);
  });
}

function updateCount() {
  if (notes.length === 0) {
    noteCount.textContent = "You have no notes yet.";
  } else if (notes.length === 1) {
    noteCount.textContent = "You have 1 note.";
  } else {
    noteCount.textContent = `You have ${notes.length} notes.`;
  }
}

function addNote(event) {
  event.preventDefault();

  const text = noteInput.value.trim();
  const category = noteCategory.value;

  if (text.length === 0) {
    errorMessage.textContent = "Please type a note first.";
    return;
  }

  if (text.length > 200) {
    errorMessage.textContent = "Notes must be 200 characters or fewer.";
    return;
  }

  errorMessage.textContent = "";

  const newNote = {
    id: Date.now().toString(),
    text,
    category,
    createdAt: new Date().toLocaleString()
  };

  notes.push(newNote);
  render();
  updateCount();
  noteInput.value = "";
}

noteForm.addEventListener("submit", addNote);

notesList.addEventListener("click", (event) => {
  if (!event.target.classList.contains("delete-btn")) {
    return;
  }

  const id = event.target.dataset.id;
  notes = notes.filter((note) => note.id !== id);
  render();
  updateCount();
});

render();
updateCount();
