
export default {
    props: ['data'],
    template: `
        <section class="todos-note" >
            <div class="card">
            <header class="card-header">
                <p class="card-header-title">
                {{data.title}}
                </p>
            </header>
            <div class="card-content todos-container" >
                <div v-for="todo in data.todos">
                    <i v-if="todo.isDone"></i>
                    <i v-else></i>
                    <label class="checkbox" v-if="todo.todo">
                    <input type="checkbox">
                    <span :class="{done: todo.isDone}">{{todo.todo}}</span>
                    </label> 
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