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
            url: 'http://www.jquery-az.com/html/images/banana.jpg',
        },
        color: "#ffffff",
        id: 1
    },]
}

function query(filter = null) {
    return storageService.load(KEY)
        .then(notes => {
            if (!notes || !notes.length) {
                notes = createInitialNotes();
                storageService.store(KEY, notes);
            }
            if (filter === null) return notes;
            else return notes.filter(note => {
                            return note.data.title.toUpperCase().includes(filter.byTitle.toUpperCase())
            })
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
