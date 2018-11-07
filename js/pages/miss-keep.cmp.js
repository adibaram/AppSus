import notesFilter from '../cmps/notes-filter.cmp.js';
import notesDisplay from '../cmps/notes-display.cmp.js'
import addNewNote from '../cmps/add-new-note.cmp.js'
import editKeepModal from '../cmps/edit-keep-modal.cmp.js'

export default {
    template: `
    <section class="container"style="background:hotpink;">
        <notes-filter @setFilter="setFilter"></notes-filter>
        <add-new-note
        @newTextNote="newTextNote" @newImgNote="newImgNote" @newTodosNote="newTodosNote">
        </add-new-note>

        <notes-display></notes-display>
        <edit-keep-modal v-if="noteToEdit" :note="noteToEdit"></edit-keep-modal>
    </section>
    `,
    data() {
        return {
            filter: null,
            showModal: false,
            modalType: null,
            noteToEdit: null,
        }
    },
    created() {
    },
    computed: {
        notesToShow() {
            if (!this.filter) return this.notes;
            return this.notes
                .filter(note => note.title.includes(this.filter.byTitle))
        }
    },
    methods: {
        setFilter(filter) {
            this.filter = filter
        },
        newTextNote() {
            console.log('new text note')
            this.noteToEdit = {

                type: 'txtNote',
                data: {
                    text: {
                        title: '',
                        content: ''
                    }
                }
            }

        },
        newImgNote() {
            console.log('new img note')
            this.noteToEdit = {

                type: 'imgNote',
                data: {
                    text: {
                        title: '',
                        url: ''
                    }
                }
            }
        },
        newTodosNote(){
            this.noteToEdit = {

                type: 'todosNote',
                data: {
                    text: {
                        title: '',
                        ul: ''
                    }
                }
            }

        },
    },
    computed:{
        // isAddMode(){
        // }
    },
    components: {
        notesFilter,
        notesDisplay,
        addNewNote,
        editKeepModal
    }
}
