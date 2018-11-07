export default {
    template:`
   <section class="notes-filter">
   <h1>MISS KEEP</h1>
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
            this.$emit('setFilter', this.filter);
        }
    }
};
