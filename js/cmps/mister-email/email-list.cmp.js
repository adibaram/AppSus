import emailService from '../../services/email.service.js'; 
import emailPreview from './email-preview.cmp.js';

export default {
    name: 'email-list',
    props: ['emails'],
    template: `

    <section class="emails-container">
        <email-preview  v-for="currentEmail in emails" :email="currentEmail" :key="currentEmail.id"></email-preview>
    </section>
    `, 
    methods: {
        // onSelected() {
        //     console.log('selected', this.email);
        // }
    }, 

    components: {
        emailService,
        emailPreview
    }
}