import busService from '../../services/event-bus.service.js'

export default {
    props: ['email'],
    template: `
        
        <router-link :to="'/misterEmail/'+email.id" class="subject-container" @click.native="onSelected">
            <li class="email-subject">
                <!-- <h6>{{email.subject}}</h6> -->
               {{email.subject}}
            </li>   
        </router-link>
`,  



    data() {
        return {
       
        }
    },
    
    created() {
        // console.log('Email-Preview was created!', this.email);

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