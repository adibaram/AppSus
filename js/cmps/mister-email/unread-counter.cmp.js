var count = 0;
import emailService from '../../services/email.service.js'

export default {
    // props: ['value'],

    template: `

        <div class="unread-counter"><span>{{this.count}}</span></div>
    
    `,
    created() {
        this.counter();
    },

    data() {
        return {
            count: count,
        }
    },
    methods: {
        toggle() {
            console.log('CLICK');
            this.isOn = !this.isOn;
            this.$emit('input', this.isOn)
        },
        counter() {
            emailService.query()
                .then(emails => this.count = emails.filter(email => !email.isRead).length)
        }

    },

}
