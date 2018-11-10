
export default {
    template: ` 
     <section class="modal-img-note">
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
        <header class="modal-card-head">
        <p class="modal-card-title">{{note.id? 'Edit Your Note' : 'Add New Note'}}</p>
            <button class="delete"  aria-label="close" @click="closeModal"></button>
            </header>
            <div class="modal-card-body">
                <div class="field">
                <input class="input" type="text" v-model="note.data.title" placeholder="type title for the note">
                </div>
                <div class="field">
                <input class="input" type="text" v-model="note.data.url" placeholder="enter image url">
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

