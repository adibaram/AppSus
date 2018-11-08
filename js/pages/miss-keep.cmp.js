import notesFilter from '../cmps/miss-keep/notes-filter.cmp.js' 
import modalTxtNote from '../cmps/miss-keep/modal-txt-note.cmp.js'
import modalImgNote from '../cmps/miss-keep/modal-img-note.cmp.js'

import listNote from '../cmps/miss-keep/list-note.cmp.js'
import missKeepService from '../services/miss-keep.service.js'

export default {
    template: `
    <section class="container">
        <notes-filter @set-filter="setFilter"></notes-filter>
        <div class="add-note-container">
            <button v-on:click="toggelTxtModal">Add text note</button>
            <button v-on:click="toggelImgModal">add img note</button>
        </div>
        <modal-txt-note v-if ="showTxtModal" @toggelTxtModal="toggelTxtModal" @saveNote="saveNote"></modal-txt-note>
        <modal-img-note v-if ="showimgModal" @toggelImgModal="toggelImgModal" @saveNote="saveNote"></modal-img-note>

        <list-note v-if="notes" :notes="notesToShow" @edit-note="editNote" @delete-note="deleteNote"></list-note>  
    </section>
    `,
    data() {
        return {
            filter: null,
            showTxtModal: false,
            showimgModal: false,
            notes: [],
        }
    },
    created() {
        missKeepService.query()
        .then(notes => this.notes = notes) 
    },
    computed: {
        notesToShow() {
            if (!this.filter) return this.notes;
            return this.notes
                .filter(note => note.data.title.includes(this.filter.byTitle))
                
        }
    },
    methods: {
        setFilter(filter) {
            this.filter = filter
            console.log('settingFilter')
        },
        toggelTxtModal() {
            this.showTxtModal = !this.showTxtModal
        },
        toggelImgModal(){
            // console.log('new img note clicked')
            this.showimgModal = !this.showimgModal
        },
        saveNote(note){
            missKeepService.saveNote(note)
            .then(notes => this.notes = notes)
            console.log(note.type)
            if (note.type === 'textNote'){
                this.toggelTxtModal()
            } else if (note.type === 'imgNote'){
                this.toggelImgModal()
            }   
        },
        deleteNote(noteId){
            missKeepService.deleteNote(noteId)
            .then(() => missKeepService.query(this.filter))
            .then(notes => this.notes = notes)
        },
        editNote(noteId){
            missKeepService.getById(noteId)
            .then (note => {
                console.log(note);
                if (note.type === 'textNote'){
                    this.toggelTxtModal()
                    // note.data.title = 
                } else if (note.type === 'imgNote'){
                    this.toggelImgModal()
                }   

            })
            
        }
    },
    components: {
        notesFilter,
        modalTxtNote,
        modalImgNote,
        listNote,
    }
}
