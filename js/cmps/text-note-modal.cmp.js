export default {
    props: ['text'],
    template: `
    <section>
            <input type="text" v-model="textTitle" placeholder="type title for the note"
                @input="emitChange"/>
            <input type="text" v-model="textContent" placeholder="start here..."
                @input="emitChange"/>
    </section>
    `,
    data() {
        return {
            textTitle: '',
            textContent: '',
        }
    },
    created() {
        this.textTitle = this.text.title;
        this.textContent = this.text.content;
    },
    methods: {
        emitChange() {
            this.$emit('change', {
                title: this.textTitle,
                content: this.textContent
            })
        }
    }
}