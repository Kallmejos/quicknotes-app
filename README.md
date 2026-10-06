# QuickNotes

QuickNotes is a simple note-taking web app that lets you create, organize, search and delete personal, work and study notes directly in the browser. Notes are stored in the browser so they remain available after a page refresh.

## Features

- Add notes with Personal, Work or Study categories
- Validate empty notes and notes longer than 200 characters
- Display notes as category-styled cards
- Delete individual notes
- Show accurate note counts
- Search notes as you type
- Persist notes with browser localStorage
- Responsive layout for small screens

## How to Run Locally

1. Clone or download this repository.
2. Open the `quicknotes-app` folder in VS Code.
3. Open `index.html` with VS Code Live Server or another local web server.
4. Use the form to add notes and test search, delete, validation and persistence.

No external packages or build tools are required.

## What I Learned

- How to structure a small web app with semantic HTML.
- How to use CSS Flexbox, cards, category classes and responsive media queries.
- How to manage arrays of objects and update the DOM safely with `createElement()` and `textContent`.
- How to validate form input and handle button and search events.
- How to save and restore application data with `localStorage`, `JSON.stringify()` and `JSON.parse()`.
