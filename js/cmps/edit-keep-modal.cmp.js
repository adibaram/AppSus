import txtNoteModal from './text-note-modal.cmp.js'

export default {
    props: ['note'],
    template: `
    <section class="edit-keep-modal">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                    <pre></pre>
            <header class="modal-card-head">
            <p class="modal-card-title">{{note.id? 'Edit your Note' : 'Add New Note'}}</p>
            <button class="delete"  aria-label="close"></button>
            </header>
          
            <section class="modal-card-body">

                <component :is="note.type + 'Modal'"
                        v-if="text"
                        :text="text"
                        @change="setChanges"></component>
         
            </section>
            <footer class="modal-card-foot">
            <button class="button is-success" @click="saveNote">Save</button>
            <button class="button" >Cancel</button>
            </footer>
        </div>
        </div>
    </section>
    `,
    data() {
        return {
          text: null,
          notes:[],
        }
    },
    created() {
        this.text = {...this.note.data.text}
        console.log(this.note.data.text)
    },
    methods: {
        
        setChanges(newText) {
            this.text = newText;
            console.log(this.newText);
            
        },
        saveNote(){
            this.notes[0] = this.newText
            console.log('saved', this.notes)

        },
    },
    components: {
        txtNoteModal
    }
}