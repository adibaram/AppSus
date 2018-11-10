
export default {
    props:['data'],
    template: `
    <section class="img-note">

        <div class="card" :style="'background-color:' + data.color">
        <div class="card-image">
            <figure class="image is-4by3">
            <img :src="data.url">
            </figure>
        </div>
        <header class="card-header">
                <p class="card-header-title">
                {{data.title}}
                </p>
            </header>
            
            <footer class="card-footer">
                        <a href="#" class="card-footer-item" @click="editNote">Edit</a>
                        <a href="#" class="card-footer-item" @click="deleteNote">Delete</a>
                    </footer>
            </div>
        </div>
        </div>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        editNote(){
            this.$emit('edit-note' , this.data)
            console.log(this.data)
        },
        deleteNote(){
            this.$emit('delete-note' , this.data)
        }
    },
    components:{
    }
}