import emailService from '../services/email.service.js'
import busService from '../services/event-bus.service.js'

export default {
    name:'email-details',
    template: `
    <section class="email-details" v-if="email">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">{{email.subject}}</p>
                        <button class="delete" aria-label="close" @click="returnToPreview"></button>
                    </header>
                    <section class="modal-card-body">
                            recieved at: {{email.sentAt}} <br>
                            {{email.body}}
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button is-primary">Replay</button>
                        <button class="button" @click="deleteEmail">Delete</button>
                    </footer>       
            </div>
        </div>
    </section>
    `,

    data(){
        return {
            email: null
        }
    },
    created() {
        const emailId = this.$route.params.emailId;
        emailService.getEmailById(emailId)
        .then(email => this.email = email)
        .then(email =>console.log('email details - email', email))
 
    },
    methods: {
        deleteEmail() {
            console.log('Deliting')
            emailService.deleteEmail(this.email.id)
            .then(res => {
                // busService.$emit(USR_MSG_DISPLAY, {txt: `email was deleted`, type:'success' })
                this.$router.push('/misterEmail');
            })
        },

        returnToPreview() {
            this.$router.push('/misterEmail');
        },

    },
}