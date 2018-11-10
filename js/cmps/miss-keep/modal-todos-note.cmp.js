import utilService from '../../services/util.service.js'

export default {
    
    template: `
     <section class="modal-todos-note">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">{{note.id? 'Edit your Note' : 'Add New Note'}}</p>
            <button class="delete" aria-label="close" @click="closeModal"></button>
            </header>
            <div class="modal-card-body">
                <div class="field">
                    <input class="input" type="text" v-model="note.data.title" placeholder="type title for the note" required/>
                </div>

                <div class="content">
                    <ul>
                        <li v-for="(todo, idx) in note.data.todos" v-if="(todo, idx)" style="list-style-type: none;">
                            <div :class="{done: todo.isDone}">                        
                                <div class="block" >
                                    <span class="tag is-success" style="background-color: white; color: black;">
                                    {{todo.todo}}
                                    <button class="delete is-small" @click="deleteTodo(idx)"></button>
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                    <div class="field has-addons">
                    <div class="control">
                        <input class="input" type="text" v-model="note.textTodo" placeholder="Add todo...">
                    </div>
                    
                    <div class="control add-todo">
                        <a class="button is-primary" @click="addTodo">
                        Add
                        </a>
                    </div>
                    </div>
                    <div class="control field">
                    note background color:  <input type="color" v-model="note.color">
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
                textTodo: null,
                type: 'todosNote',
                data: {
                    title: '',
                    todos: [
                        {
                        todoId: null,    
                        todo: '',
                        isDone: false,
                        }
                    ],
                },
                color: "#ffffff"
            },
        }
    },
    methods: {
        closeModal(){
            this.$emit('toggelTodosModal')
        },
        saveNote(){
            this.$emit('saveNote' , this.note)
        },
        addTodo(){
            this.note.data.todos.push({
                todoId: utilService.makeId(),    
                todo: this.note.textTodo,
                isDone: false,
            })
            this.note.textTodo = '';
        }
        ,deleteTodo(todoIdx){
        this.note.data.todos.splice(todoIdx, 1)
        }
    },
    computed:{

    },
    components: {
        utilService
    }
}

