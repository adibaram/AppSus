
import emailService from '../services/email.service.js'
import emailList from '../cmps/mister-email/email-list.cmp.js'
import emailFilter from '../cmps/mister-email/email-filter.cmp.js'
import emailDetails from '../pages/email-details.cmp.js'
import emailCompose from '../cmps/mister-email/email-compose.cmp.js'
import btnToggle from '../cmps/mister-email/toggle-btn.cmp.js'
import eventBus from '../services/event-bus.service.js'
// import storageService from '../services/storage.service.js'



export default {
    template: `
    <section class="email-app" v-if="emails">
        <!-- <h1>emails 📧 💌</h1> -->
        <email-filter @set-filter="setFilter"></email-filter>
        <a class="button is-primary is-rounded compose" @click="compose = !compose">compose +</a>
        <email-compose @emailSent="emailSent" @discard="emailSent" v-if="compose"></email-compose>
        <ul class="email-list">
            <email-list :emails="emailsToShow"></email-list>  
        </ul>
    </section>
    `,
    data() {
        return {
            filter: null,
            compose: false,
            emails: null,
            selectedEmail: null
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filter) return this.emails;
            if (this.filter.emailStatus === 'all' && !this.filter.txt) return this.emails;
            console.log('filter', this.filter)
            return this.emails.filter(email => {

                return email.subject.toLowerCase().includes(this.filter.txt.toLowerCase())
                    && (
                        (email.isRead && (this.filter.emailStatus === 'read' || this.filter.emailStatus === 'all'))
                        || (!email.isRead && (this.filter.emailStatus === 'unread' || this.filter.emailStatus === 'all'))
                    )

            })
        },
    },

    created() {
        console.count('email-app created')
        this.loadEmails();
        console.log('email-App was created!', this.emails);

        eventBus.$on('selected', this.markAsRead)


    },

    destroyed() {
        eventBus.$off('selected', this.markAsRead)
    },

    methods: {
        setFilter(filter) {
            this.filter = filter
        },

        selectEmail(email) {
            console.log('app - email selected', email);
            email.isRead = true;
            this.selectedEmail = email;

        },
        loadEmails() {
            emailService.query()
                .then(emails => {
                this.emails = emails
                    console.log({ emailsInQuery: emails })
                })
        },
        emailSent() {
            this.compose = false;
            this.loadEmails();
        },
        markAsRead(email) {
            console.log('inside email-app, bus email:', email);
            email.isRead = true;
            emailService.saveEmail(email);
        }
    },
    components: {
        emailList,
        emailFilter,
        emailDetails,
        emailCompose,
        btnToggle
    }
}

