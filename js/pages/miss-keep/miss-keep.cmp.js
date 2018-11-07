import noteFilter from '../cmps/notes-filter.cmp.js';

export default{
    template: `
    <note-filter @setFilter="setFilter"></note-filter>
    `
,
data() {
    return {
        filter: null,
    }
},
computed
: {
    carsToShow() {
        if (!this.filter) return this.cars;
        return this.cars
            .filter(car => car.vendor.includes(this.filter.byVendor))
            .filter(car => !this.filter.maxPrice || car.price < this.filter.maxPrice)

    }
},
methods: {
    setFilter(filter) {
        this.filter = filter
    }
},components: {
    notesFilter,
}

}