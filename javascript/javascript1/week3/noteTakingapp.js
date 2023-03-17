//save a note

function saveNote(contentInput, idInput) {
const obj = {
            content: contentInput,
            id:idInput
        }
    notes.push(obj);
}
let notes = [];
console.log(notes);

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Do cleanup house", 3);
saveNote("gardening", 4);

//Get a note
function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return notes[i];
        }
    }
    return "Add a proper id";
}
const firstNote = getNote(3);
console.log(firstNote);

//Log out notes
function logOutNotesFormatted() {
for (let i = 0; i < notes.length; i++) {
console.log(`The note with id:${notes[i].id}, has the following note text:${notes[i].content}`)
 }
}
logOutNotesFormatted();