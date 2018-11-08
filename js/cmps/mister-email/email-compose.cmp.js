import utilService from '../../services/util.service.js'
import emailService from '../../services/email.service.js'
import storageService from '../../services/storage.service.js'

export default {
    template: `
    <section class="email-compose">

        <div class="field">
            <label class="label">Subject</label>
            <div class="control">
                 <input v-model="form.subject" class="input" type="text" placeholder="Text input">
            </div>
        </div>
        <div class="field">
        <label class="label">To</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
            </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
        </div>

        <div class="field">
        <label class="label">Message</label>
        <div class="control">
            <textarea v-model="form.body" class="textarea" placeholder="Textarea"></textarea>
        </div>
        </div>

        <div class="field is-grouped">
        <div class="control">
            <button @click="onSend" class="button is-link">Send</button>
        </div>
        <div class="control">
            <button @click="onDiscard" class="button is-text">Discard</button>
        </div>
        </div>
    </section>
    `,

    data() {
        return {
            form: {
                id: '',
                subject: '',
                body: '',
                isRead: false,
                sentAt: new Date(),
            }
        }
    },

    methods: {

        onSend() {

            this.form.sentAt = new Date();
            let email = this.form;
            console.log('SEND');
            console.log(this.form)
            emailService.saveEmail(email)
            .then(()=> {
                this.$emit('emailSent')
                this.$router.push('/misterEmail');
            })

            // this.isOn = !this.isOn;

        },

        onDiscard() {
            this.$emit('discard')
            this.$router.push('/misterEmail');
        }
    },


}