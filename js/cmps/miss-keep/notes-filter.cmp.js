export default {
    template:`
   <section class="notes-filter">
    <form>
        <div class="control field">
        <input class="input" type="text" @input="setFilter" v-model="filter.byTitle" placeholder="Search">
        </div>
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
