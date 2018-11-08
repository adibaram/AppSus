export default {
    // props: ['value'],

    template: `

        <div class="unread-counter"></div>
    
    `,
    data(){
        return {

        }
    },
    methods: {
        toggle() {
            console.log('CLICK');
            this.isOn = !this.isOn;
            this.$emit('input', this.isOn)
        }
    },

    
}