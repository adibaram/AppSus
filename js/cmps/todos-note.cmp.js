export default {
    props: ['data'],
    template: `
    <section>
        <h2>todos</h2>
        <label>
                {{data.label}}
                <input type="text" v-model="todosTitle" @blur="reportVal" />
            </label>
    </section>
    `,
    data() {
        return {
            todosTitle:'',
        }
    },
    methods: {
        reportVal() {
            this.$emit('addNewNote', this.todosTitle)
        }
    }
}