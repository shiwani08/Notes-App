# 📁 Folder Structure

| 📂 Path                            | 📝 Description                            |
|------------------------------------|--------------------------------------------|
| `/assets/`                         | Contains styles and JavaScript files       |
| ├── `/css/`                        | CSS styles folder                          |
| │   └── `style.css`                | Main stylesheet                            |
| ├── `/js/`                         | JavaScript files folder                    |
| │   ├── `loadAssets.js`           | Dynamically loads styles and scripts       |
| │   ├── `loadNavBar.js`           | Loads the navigation bar HTML              |
| │   └── `script.js`               | Core functionality of the app              |
| └── `navBar.html`                 | HTML snippet for the navigation bar        |
|                                    |                                            |
| `/docs/`                           | Documentation folder                       |
| ├── `NOTES.md`                    | Developer notes                            |
| └── `README.md`                   | Project overview and setup instructions    |
|                                    |                                            |
| `/images/`                         | Static images directory                    |
| └── `favicon.png`                 | Favicon for the site                       |
|                                    |                                            |
| `/pages/`                          | Main app pages                             |
| ├── `index.html`                  | Page to view and add notes                 |
| └── `starred.html`                | Page to view starred notes only            |

---

## ⚠️ Problems to Address

- All the notes are getting copied to the starred page, even if not starred.
- Notes are shown as stored in `localStorage`, but it's unclear where this is located.
- It is having deployment issues, index.html page is showing status code 404.
- On refreshing the index.html page, for a very brief second, the Add Button (withou CSS) is getting shown.

> ℹ️ **Note:** `localStorage` is stored in your browser. You can inspect it via Developer Tools → Application → Local Storage.

---

## 🚀 Features / Enhancements for Future Versions

- **Categories/Tags for Notes**: Allow users to categorize or tag their notes.
- **Dark Mode**: Add a toggle for light/dark theme.
- **Note Title**: Allow setting a title for each note.
- **Search Functionality**: Add a search bar to filter notes.
- **Export/Import Notes**: Enable backing up notes in JSON or Markdown formats.

---

## ✅ To-Do List

- Improve UI responsiveness (especially on mobile).
- Add drag-and-drop to reorder notes.
- Implement an export/import feature to back up notes.
