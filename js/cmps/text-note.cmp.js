export default {
    props: ['data'],
    template: `
    <section>
        <h2>text note</h2>
        <label>
                {{data.label}}
                <input type="text" v-model="textTitle" @blur="reportVal" />
            </label>
    </section>
    `,
    data() {
        return {
            textTitle: '',
        }
    },
    methods: {
        reportVal() {
            this.$emit('addNewNote', this.textTitle)
        }
    }
}