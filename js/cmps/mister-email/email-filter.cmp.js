import unreadCounter from './unread-counter.cmp.js'

export default {
    template: `
    <section class="filter-container">
        <div class="field">
            <p class="control has-icons-left"> 
        <!-- <form @submit.prevent="setFilter"> -->
            <input type="email" @input="setFilter" v-model="filter.txt" class="input" placeholder="Search"/>
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
            </p>       <!-- <button @click="setFilter">Filter</button> -->
        <!-- </form> -->
        </div>
        <div class="control control-radio">
            <label class="radio">
                <input type="radio" name="status" value="all" v-model="filter.emailStatus" @input="setFilter"> 
                All
            </label>
            <label class="radio">
                <input type="radio" name="status" value="read" v-model="filter.emailStatus" @input="setFilter">
                Read
            </label>
            <label class="radio">
                <input type="radio" name="status" value="unread" v-model="filter.emailStatus" @input="setFilter">
                Unread
            </label>
            <unread-counter></unread-counter>
        </div>
        <!-- {{filter.emailStatus}} -->
    </section>
    `,
    data() {
        return {
            filter: {
                txt: '',
                emailStatus: 'all'

            },
        }
    },
    methods: {
        setFilter() {
            console.log('The Filter Is:', this.filter);
            this.$emit('set-filter', this.filter);

        }
    },
    components: {
        unreadCounter
    }
}
