
// import textNote from './edit-keep-modal.cmp.js';
import imgNote from './img-note.cmp.js';
import todosNote from './todos-note.cmp.js';

export default {
    template: `
    <section class="new-note-container">
        <h1>notes to display </h1>
        
        <component v-for="(currCmp, idx) in cmps" 
                        :is="currCmp.type" 
                        :data="currCmp.data" 
                        @addNewNote="addNewNote($event, idx)">
        </component>
    </section>
    
    `,
    data(){
        return {
            cmps: [
                // {
                //     type: 'textNote',
                //     data: {
                //         lable: 'Note title:',
                //     }
                // }, 
                {
                    type: 'imgNote',
                    data: {
                        lable: 'Note title:',
                    }
                },
                {
                    type: 'todosNote',
                    data: {
                        lable: 'Note title:',
                        
                    }
                }

            ],
            notes : []
        
        }

    },
    methods: {
        addNewNote(ev, inputIdx) {
            this.notes[inputIdx] = ev;
            console.log('add new note got clicked', ev);
        },
        // save() {
        //     console.log('notes', this.notes);
        // }
    },
    components: {
        // textNote,
        imgNote,
        todosNote
    }
}



  
 
