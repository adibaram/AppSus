import utilService from '../../services/util.service.js'
import emailService from '../../services/email.service.js'

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
            <button class="button is-text">Discard</button>
        </div>
        </div>
    </section>
    `, 

    data() {
        return {
            form: {
                id: utilService.makeId(),
                subject: '',
                body: '',
                isRead: false,
                sentAt: Date.now(), 
            }    
        }
    },

    methods: {
        onSend() {

            this.form.sentAt = Date.now()
            let email = this.form; 
            emailService.saveEmail(email);

            console.log('SEND');
            console.log(this.form)
            // this.isOn = !this.isOn;

        }
    },

    
}