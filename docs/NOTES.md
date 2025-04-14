# 📁 Folder Structure

| Path                               | Description                            |
|------------------------------------|----------------------------------------|
| `/assets/`                         | Contains styles and JavaScript files   |
| ├── `/css/`                        | CSS styles folder                      |
| │   └── `style.css`                | Main stylesheet                        |
| ├── `/js/`                         | JavaScript files folder                |
| │   ├── `loadAssets.js`           | Dynamically loads styles and scripts   |
| │   ├── `loadNavBar.js`           | Loads the navigation bar HTML          |
| │   └── `script.js`               | Core functionality of the app          |
| └── `navBar.html`                 | HTML snippet for the navigation bar    |
|                                    |                                        |
| `/docs/`                           | Documentation folder                   |
| ├── `NOTES.md`                    | Developer notes                        |
| └── `README.md`                   | Project overview and setup instructions|
|                                    |                                        |
| `/images/`                         | Static images directory                |
| └── `favicon.png`                 | Favicon for the site                   |
|                                    |                                        |
| `/pages/`                          | Main app pages                         |
| ├── `index.html`                  | Page to view and add notes             |
| └── `starred.html`                | Page to view starred notes only        |

## Problems that are to be addressed:
- All the notes are getting copied to the starred page too, irrespective of whether it is starred or not.
- It is showing that the notes are stored in localStorage, where exactly is this local storage

## Features/Enhancements for Future Versions
- **Categories/Tags for Notes**: Allow users to categorize or tag their notes for better organization.
- **Dark Mode**: Add an option for users to toggle between light and dark modes.
- **Note Title**: Add the ability to set a title for each note.
- **Search Functionality**: Implement a search bar to filter notes based on content or tags.
- **Export/Import Notes**: Allow users to export notes as JSON or Markdown files and import them back into the app.

## To-Do List
- Improve UI responsiveness for different screen sizes (especially on mobile).
- Add functionality to reorder notes (drag and drop).
- Implement an export/import feature to back up notes.