export default {
    template: `
    <section class="add-note-container">
        <button v-on:click="newTextNote">Add text note</button>
        <button v-on:click="newImgNote">Add list note</button>
        <button v-on:click="newTodosNote">Add img note</button>
    </section>
    `,
    data() {
        return {
        }
    },
    methods: {
        newTextNote() {
            this.$emit('newTextNote')
        },
        newImgNote() {
            this.$emit('newImgNote')
        },
        newTodosNote() {
            this.$emit('newTodosNote')
        }
    },
    computed: {
    }
}