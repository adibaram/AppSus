

export default {
    props: ['data'],
    template: `
    <section>
        <!-- <button v-on:click="newImgNote">img mote</button> -->
    </section>
    `,
    data() {
        return {
            imgTitle: '',
            backgroundColor: 'white',
            isSelected: false,
        }
    },
    methods: {
        reportVal() {
            this.$emit('newImgNote')
        }
    }
}