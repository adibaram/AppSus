
export default {
    // props: ['note'],
    template: `
    <section class="modal-todos-note">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">{{note.id? 'Edit your Note' : 'Add New Note'}}</p>
            <button class="delete"  aria-label="close" @click="closeModal"></button>
            </header>
            <input type="text" v-model="note.data.title" placeholder="type title for the note"/>
            <section class="modal-card-body"> </section>
            <img src="note.data.url"/>
            <div class=btn-continer>
            <input type="color" v-modal="note.color" @change="changeBgcColor">
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
                type: 'imgNote',
                data: {
                    title: '',
                    url: '',
                },
                color: "#ffffff"
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
        changeBgcColor(){
            // note.color = this.note.color;
            // this.$emit('changeBgnColor' , this.note.color)

        }
        
    }
}

