
export default {
    template: `
    <section class="modal-todos-note">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">{{note.id? 'Edit Your Note' : 'Add New Note'}}</p>
            <button class="delete"  aria-label="close" @click="closeModal"></button>
            </header>
            <input type="text" v-model="note.data.title" placeholder="type title for the note" required>
            <section class="modal-card-body">
            <input type="text" v-model="note.data.url" placeholder="type image url"/>
            <div class=btn-continer>
            <input type="color" v-model="note.color">
            </div>
             </section>
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
                type: 'imgNote',
                data: {
                    title: '',
                    url: '',
                    color: "#ffffff"
                },
            },
        }
    },
    methods: {
        closeModal(){
            this.$emit('toggelImgModal')
        },
        saveNote(){
            this.$emit('saveNote' , this.note)
        }
    },
    components: {
              
    }
}

