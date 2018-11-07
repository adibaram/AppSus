export default {
    template: `
    <section class="filter-container">
        <form @submit.prevent="setFilter">
            Search: <input type="text" @input="setFilter" v-model="filter.bySubject"/>
                    <!-- <button @click="setFilter">Filter</button> -->
        </form>
    </section>
    `,
    data() {
        return {
            filter: {
                bySubject: '',

            },
        }
    },
    methods: {
        setFilter() {
            console.log('The Filter Is:' , this.filter);
            this.$emit('set-filter', this.filter);
            
        }
    }  
}