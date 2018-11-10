
export default {
    template: `
    <section class="modal-txt-note">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">{{note.id? 'Edit your Note' : 'Add New Note'}}</p>
            <button class="delete"  aria-label="close" @click="closeModal"></button>
            </header>
            <div class="modal-card-body">
                <div class="field">
                    

                        <input class="input" type="text" v-model="note.data.title" placeholder="type title for the note" required/>
            
                </div>
                <div class="field">
                    <textarea class="textarea is-primary" v-model="note.data.content" placeholder="Start typing here.."rows="5" ></textarea>
                </div>
                    <div class="control field">
                    note background color:  <input type="color" v-model="note.data.color">
                </div>
            </div>
            <footer class="modal-card-foot">
            <button class="button is-primary" @click="saveNote">Save</button>
            <button class="button is-light" @click="closeModal">Cancel</button>
            </footer>
        </div>
        </div>
    </section>
    `,
    props: ['noteToEdit'],
    data() {
        return {
            note: {
                type: 'textNote',
                data: {
                    title: '',
                    content: '',
                    color: 'white'
                },
            },
        }
    },
    created() {
        if (!this.noteToEdit) return
        this.note = {
            ...this.noteToEdit,
            data: { ...this.noteToEdit.data }
        }
    },
    methods: {
        closeModal() {
            this.$emit('toggelTxtModal')
        },
        saveNote() {
            this.$emit('saveNote', this.note)
        }
    },
    components: {
    
    }
}

