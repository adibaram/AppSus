
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
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item" @click="editNote">Edit</a>
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
            this.$emit('edit-note', this.data)
        },
        deleteNote() {
            this.$emit('delete-note', this.data)
        }
    },
    components: {
    }
}