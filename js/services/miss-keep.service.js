// import utilService from './util.service.js'

import storageService from './storage.service.js'
import utilService from './util.service.js'

const KEY = 'notesAppKey';

var notes=[];

function createInitialNotes() {
    return [ {
        type: 'textNote',
        data: {
            title: 'first',
            content: '123',
        },
        color: "#ffffff"
    }, {
        type: 'textNote',
        data: {
            title: 'second',
            content: '123',
        },
        color: "#ffffff"
    }, {
        type: 'imgNote',
        data: {
            title: 'third',
            url: 'https://www.google.co.il/search?q=img+gif&source=lnms&tbm=isch&sa=X&ved=0ahUKEwji1YSUrcTeAhUBNOwKHU_1AHIQ_AUIDigB&biw=1366&bih=626#imgrc=MHHi2uaY_TfIBM:',
        },
        color: "#ffffff"
    },]
}

/*
TODO:
show list of notes
    you will need <note-list></note-list>
    in note-list, you will neet to render dynnamic cmp

    next-step:
    delete-note
    add more kinds of notes
*/


function query(filter = null) {
    return storageService.load(KEY)
        .then(notes => {
            if (!notes || !notes.length) {
                notes = createInitialNotes();
                storageService.store(KEY, notes);
            }
            console.log('notes: ', notes);
            if (filter === null) return notes;
            else return notes.filter(note => 
                            note.title.toUpperCase().includes(filter.byTitle.toUpperCase()))
        })
}

function getById(noteId) {
    return storageService.load(KEY)
        .then(notes => {
            return notes.find(note => note.id === noteId);
        })
}

function deleteNote(noteId) {
    return storageService.load(KEY)
        .then(notes => {
            var noteIdx = notes.findIndex(note => note.id === noteId);
            notes.splice(noteIdx, 1);
            return storageService.store(KEY, notes);
        })
}

function saveNote(note) {
    return storageService.load(KEY)
        .then(notes => {
            // Update
            if (note.id) {
                var noteIdx = notes.findIndex(currNote => currNote.id === note.id)
                notes.splice(noteIdx, 1, note);
            } else {
                // Add
                note.id = utilService.makeId();
                notes.push(note);
            }
            storageService.store(KEY, notes);
            return notes 
        });
}

export default {
    query,
    getById,
    deleteNote,
    saveNote
}