import notesFilter from '../cmps/notes-filter.cmp.js';
import newNotes from '../cmps/new-note.cmp.js';
import notesDisplay from '../cmps/notes-display.cmp.js'

export default {
    template: `
    <section class="container">
        <notes-filter @setFilter="setFilter"></notes-filter>
        <new-notes></new-notes>
        <notes-display></notes-display>
        
    </section>
    `,
    data() {
        return {
            filter: null,
        }
    },
    created() {
    },
    computed: {
        notesToShow() {
            if (!this.filter) return this.notes;
            return this.notes
                .filter(note => note.title.includes(this.filter.byTitle))
        }
    },
    methods: {
        setFilter(filter) {
            this.filter = filter
        }
    }, 
    components: {
        notesFilter,
        newNotes,
        notesDisplay
    }
}
