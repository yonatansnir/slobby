import React, { useState } from 'react';
import NoteItem from './NoteItem';

const Notes = () => {
    const [notes, setNotes] = useState([
        {id: 1, title: 'first', completed: false},
        {id: 2, title: 'first', completed: true},
        {id: 3, title: 'first', completed: false},
        {id: 4, title: 'first', completed: false},
        {id: 5, title: 'first', completed: false}
    ])
    return(
        <div className="notes">
            {notes.map(note => <NoteItem note={note} />)}
        </div>
    )
}

export default Notes;