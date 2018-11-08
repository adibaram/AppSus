
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
            <input type="text" v-model="note.data.title" placeholder="type title for the note"/>
            <section class="modal-card-body"> </section>
            <input type="text" v-model="note.data.content" placeholder="start here..."/>
            <div class=btn-continer>
            <input type="color" v-model="note.color">
            </div>
            <footer class="modal-card-foot">
            <button class="button is-success" @click="saveNote">Save</button>
            <button class="button" @click="closeModal">Cancel</button>
            </footer>
        </div>
        </div>
    </section>
    `,
    data() {
        return {
            note: {
                type: 'textNote',
                data: {
                    title: '',
                    content: '',
                },
                color: "#ffffff"
            },
        }
    },
    methods: {
        closeModal(){
            this.$emit('toggelTxtModal')
        },
        saveNote(){
            this.$emit('saveNote' , this.note)
        }
    },
    components: {
            // note.color = this.note.color;
            // this.$emit('changeBgnColor' , this.note.color)
    }
}
