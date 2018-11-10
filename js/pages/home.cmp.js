
export default{
    template: `

            <section class="main-links-btns">
                <div class="keep-button" @click="onSelectKeep">
                    Miss Keep <br>
                    <i class="fas fa-thumbtack keep-sign"></i>
                </div>
                <div class="email-button" @click="onSelectMail">
                    Mister email <br>
                    <i class="fas fa-at email-sign"></i>
                </div>
            </section>
    `,

    data() {
        return {

        }
    },

    methods: {
        onSelectMail() {
        this.$router.push('/misterEmail');
        },

        onSelectKeep() {
            this.$router.push('/missKeep');
        }
    
    },


    



}