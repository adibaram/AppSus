import busService from '../../services/event-bus.service.js'

export default {
    props: ['email'],
    template: `
        
        <router-link :to="'/misterEmail/'+email.id" class="subject-container" @click.native="onSelected">
            <li ref="title" class="email-subject" :class="{ read: email.isRead }"
                :style="[email.isRead ? {'font-weight': '330'} : {'font-weight': '800'}]">
               {{email.subject}}
               <br><span class="subject-time">{{email.sentAt}}</span>
            </li>   
        </router-link>
    `,  



    data() {
        return {
        
        }
    },
    
    created() {

    },

    mounted() {

    },

    computed: {
             

    },
    methods: {
        onSelected() {
            busService.$emit('selected', this.email);
            console.log('selected', this.email.isRead);

        }

    }
}