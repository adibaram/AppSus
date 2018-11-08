export default {
    template:`
   <section class="notes-filter">
    <form>
        search note: <input type="text" @input="setFilter" v-model="filter.byTitle" />
    </form>   
   
   </section>
   ` ,
    data() {
        return {
            filter: {
                byTitle: '',
            },
        }
    },
    methods: {
        setFilter() {
            this.$emit('set-filter', {...this.filter});
            console.log(this.filter)
        }
    }
};
