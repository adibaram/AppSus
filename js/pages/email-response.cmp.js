import emailService from '../services/email.service.js'
import emailCompose from '../cmps/mister-email/email-compose.cmp.js'   
import busService from '../services/event-bus.service.js'

export default {
    name:'email-response',
    template: `
    <section class="email-response">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                    <header class="modal-card-head">
                        <!-- <p class="modal-card-title">{{email}}</p> -->
                        <button class="delete" aria-label="close" @click="returnToPreview" ></button>
                    </header>
                <section class="modal-card-body">
                        <email-compose :email="emailId" v-if="emailId"></email-compose>
                </section>
            </div>
        </div>
    </section>
    `,

    data(){
        return {
            email:{
                body:'',
            },
            emailId: null
        }
    },
    created() {
        // debugger;
        console.log('email response created')
        this.emailId = this.$route.params.emailId;
 
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
    components: {
        emailCompose
    }
}