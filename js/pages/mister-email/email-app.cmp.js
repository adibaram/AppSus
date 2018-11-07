
import emailService from '../services/email.service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailFilter from '../cmps/email-filter.cmp.js'
import emailDetails from '../pages/email-details.cmp.js'



export default {
    template: `
    <section>
            <email-filter @set-filter="setFilter"></email-filter>
            <ul class="book-list">
                <email-list v-bind:books="booksToShow" @selected="selectBook"></email-list>  
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

        selectBook(book) {
            console.log('app - book selected', book);
            this.selectedEmail = email;
        },
    },
    components: {
        emailList,
        emailFilter,
        emailDetails
    }
}

