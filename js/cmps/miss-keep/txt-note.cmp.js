
export default {
    props: ['data'],
    template: `
        <section class="txt-note">
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                {{data.title}}
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                {{data.content}}
                
                <br>
                <!-- <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
                </div>
            </div>
            <footer class="card-footer">
                <!-- <a href="#" class="card-footer-item">Save</a> -->
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item" @click="deleteNote">Delete</a>
            </footer>
            </div>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        editNote() {

        },
        deleteNote(){
            this.$emit('delete-note' , this.data)
            console.log(this.data)
        }
    },
    components: {
    }
}