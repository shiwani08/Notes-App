const addBtn = document.getElementById('addNote')

// parse converts json string to js
// const notes = JSON.parse(localStorage.getItem('notes')) || []

// if(notes) {
//     notes.forEach(note => addNewNote(note))
// }

fetch('../assets/js/notes.json')
  .then(res => res.json())
  .then(notes => {
    notes.forEach(note => addNewNote(note));
  })
  .catch(err => console.error('Failed to load notes:', err));

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(noteData = {text: '', starred: false}) {
    let noteText = noteData.text;
    let isStarred = noteData.starred;
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit edit-icon"></i></button>
            <button class="delete"><i class="fas fa-trash trash-icon"></i></button>
            <button class="star"><i class="fas fa-star star-icon ${isStarred ? 'yellow' : ''}"></i></button>
        </div>

        <div class="main ${noteText ? '' : 'hidden'}"></div>
        <textarea class="textarea ${noteText ? 'hidden' : ''}"></textarea>
    `;

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const starBtn = note.querySelector('.star');
    const starIcon = note.querySelector('.star-icon');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('.textarea');

    textArea.value = noteText;
    main.innerHTML = marked.parse(noteText);

    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    });

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    starBtn.addEventListener('click', () => {
        starIcon.classList.toggle('yellow');
        updateLS();
    });

    main.addEventListener('click', () => {
        main.classList.add('hidden');
        textArea.classList.remove('hidden');
    });

    textArea.addEventListener('input', (e) => {
        const { value } = e.target;
        main.innerHTML = marked.parse(value);
        updateLS();
    });

    const container = document.querySelector('.notesContainer');
    container.appendChild(note);
}

function updateLS() {
    const allNotes= []

    document.querySelectorAll('.note').forEach(noteE1 => {
        const textarea = noteE1.querySelector('textarea')
        const starIcon = noteE1.querySelector('.star-icon')
        const isStarred = starIcon.classList.contains('yellow')

        allNotes.push({
            text: textarea.value,
            starred: isStarred
        })
    })

    // stringify converts JS to json string
    localStorage.setItem('notes', JSON.stringify(allNotes))

    const starred = allNotes.filter(note => note.starred)
    localStorage.setItem('starredNotes', JSON.stringify(starred))
}