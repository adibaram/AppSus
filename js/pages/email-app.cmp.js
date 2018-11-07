
import emailService from '../services/email.service.js'
import emailList from '../cmps/mister-email/email-list.cmp.js'
import emailFilter from '../cmps/mister-email/email-filter.cmp.js'
import emailDetails from '../cmps/mister-email/email-details.cmp.js'
import emailCompose from '../cmps/mister-email/email-compose.cmp.js'
import btnToggle from '../cmps/mister-email/toggle-btn.cmp.js'



export default {
    template: `
    <section class="email-app">
        <h1>emails 📧 💌</h1>
            <email-filter @set-filter="setFilter"></email-filter>
            <!-- <btn-toggle v-model="compose"></btn-toggle> -->
            <a class="button is-primary is-rounded compose" @click="compose = !compose">compose +</a>
            <email-compose v-if="compose"></email-compose>
            <ul class="email-list">
                <email-list :emails="emailsToShow" @selected="selectEmail"></email-list>  
            </ul>
    </section>
    `,
    data() {
        return {
            filter: null,
            compose: false,
            emails: emailService.query()
                .then(emails => this.emails = emails),
            selectedEmail: null
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filter) return this.emails;
            if (this.filter.emailStatus === 'all' && !this.filter.txt) return this.emails;
            console.log('filter', this.filter)
            return this.emails.filter(email => {
                
                return email.subject.includes(this.filter.txt)
                        && (
                            (email.isRead && (this.filter.emailStatus === 'read' || this.filter.emailStatus === 'all'))
                            || (!email.isRead && (this.filter.emailStatus === 'unread' || this.filter.emailStatus === 'all'))
                        )

            })
        }
    },
    created() {
        console.log('email-App was created!', this.emails);
    },
    methods: {
        setFilter(filter) {
            this.filter = filter
        },

        selectEmail(email) {
            console.log('app - email selected', email);
            this.selectedEmail = email;
        },
    },
    components: {
        emailList,
        emailFilter,
        emailDetails,
        emailCompose,
        btnToggle
    }
}

