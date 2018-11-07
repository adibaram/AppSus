
import emailService from '../services/email.service.js'
import emailList from '../cmps/mister-email/email-list.cmp.js'
import emailFilter from '../cmps/mister-email/email-filter.cmp.js'
import emailDetails from '../cmps/mister-email/email-details.cmp.js'



export default {
    template: `
    <section class="email-app">
        <h1>emails 📧 💌</h1>
            <!-- <email-filter @set-filter="setFilter"></email-filter> -->
            <ul class="email-list">
                <email-list :emails="emailsToShow" @selected="selectEmail"></email-list>  
            </ul>
    </section>
    `,
    data() {
        return {
            filter: null,
            emails: emailService.query()
                .then(emails => this.emails = emails),
            selectedEmail: null
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filter) return this.emails;
            console.log('filter', this.filter)
            return this.emails.filter(email => {
                
                return email.title.includes(this.filter.byTitle);
                    // && (!this.filter.fromPrice || book.listPrice.amount > this.filter.fromPrice)
                    // && (!this.filter.toPrice || book.listPrice.amount < this.filter.toPrice)
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
        emailDetails
    }
}

