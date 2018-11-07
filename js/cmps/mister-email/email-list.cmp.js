import emailService from '../../services/email.service.js'; 
import emailPreview from './email-preview.cmp.js';

export default {
    props: ['emails'],
    template: `

    <section>
        <email-preview v-for="currentEmail in emails" :email="currentEmail" :key="currentEmail.id"></email-preview>
    </section>
    `, 

    components: {
        emailService,
        emailPreview
    }
}