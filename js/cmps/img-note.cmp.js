

export default {
    props: ['data'],
    template: `
    <section>
        <button>img mote</button>
    </section>
    `,
    data() {
        return {
            imgTitle: '',
            backgroundColor: white,
            isSelected: fales,

        }
    },
    methods: {
        reportVal() {
            this.$emit('addNewNote', this.imgTitle)
        }
    }
}