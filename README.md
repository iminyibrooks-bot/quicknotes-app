# QuickNotes

QuickNotes is a small note-taking web app built with HTML, CSS and JavaScript. You can add notes with a category, search them, delete them, and they stay saved in your browser after a refresh.

## Features

- Add notes with a category (Personal, Work or Study)
- Validation: empty notes and notes over 200 characters show an error message
- Delete any note
- Live search that ignores upper and lower case
- Note count that reads correctly for zero, one and many notes
- Notes saved with localStorage, so they survive a page refresh
- Responsive layout that stacks the form on small screens

## How to run it locally

1. Clone the repository: `git clone https://github.com/iminyibrooks-bot/quicknotes-app.git`
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**, or just open `index.html` in a browser.

No installation is needed.

## What I learned

- `render()` rebuilds the whole list from the notes array, so I change the array first and then call `render()` instead of editing the page directly.
- I use `textContent` instead of `innerHTML` for user text, so anything a user types shows up as plain text and can't run as code.
- `localStorage` only stores text, so I turn the notes array into text with `JSON.stringify` before saving and back into an array with `JSON.parse` when the page loads.
- `filter` does two jobs here: keeping the notes that match a search, and removing a deleted note by its `id`.
- `=` stores a value, while `===` asks whether two values are exactly the same.