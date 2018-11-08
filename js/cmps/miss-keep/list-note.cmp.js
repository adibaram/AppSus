
import textNote from './txt-note.cmp.js';
import imgNote from './img-note.cmp.js';

export default {
    props: ['notes'],
    template: `
            <section class="notes-list">
                <component class="note"
                       v-for="note in notes"
                       :is="note.type" 
                       :data="note.data"
                       @delete-note="$emit('delete-note', note.id)"
                       @edit-note="$emit('edit-note' , note.id)"
                       >
                </component>
            </section>
    `,
    components: {
        textNote,
        imgNote
    },
}