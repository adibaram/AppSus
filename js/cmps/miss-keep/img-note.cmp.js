
export default {
    props:['data'],
    template: `
    <section class="img-note">

        <div class="card">
        <div class="card-image">
            <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
        </div>
        <header class="card-header">
                <p class="card-header-title">
                {{data.title}}
                </p>
            </header>
            
            <footer class="card-footer">
                        <!-- <a href="#" class="card-footer-item">Save</a> -->
                        <a href="#" class="card-footer-item">Edit</a>
                        <a href="#" class="card-footer-item" @click="deleteNote">Delete</a>
                    </footer>
            <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
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

        },deleteNote(){
            this.$emit('delete-note' , this.data)
            console.log(this.data)
        }
    },
    components:{
    }
}