export default {
    props: ['email'],
    template: `
        
            <li class="email">
                <h6>{{email.subject}}</h6>
            </li>
`,  

    data() {
        return {
       
        }
    },
    
    created() {
        // console.log('Email-Preview was created!', this.email);
    },

    computed: {
             

        // bookDetailsLink() {
        //     return `/book/${this.book.id}`;
        // }
    },
    methods: {
        

    }
}