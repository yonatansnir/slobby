import React, { useState } from 'react';
import NotePopup from './NotePopup';

const Notes = () => {
    const [popUp, setPopup] = useState(false);

    let notes = [
        {id: '1', name: 'yoni', title: 'שלום עולם בדיקה של הודעה אחת'},
        {id: '2', name: 'Moshe', title: 'זאת ההודעה השניה שאנו בודקים כאן'},
        {id: '3', name: 'Dina', title: 'והודעה שלישית זה חובה'}
    ]
    const showNote = (id) => {
        let obj = notes.find(n => n.id === id);
        setPopup(obj);
    }
    return (
        <div className="box notes">
            <h2>הודעות</h2>
            <ul>
                {notes.map(note => (
                    <li onClick={() => showNote(note.id)} key={note.id}>{note.title.slice(0, 20)}...</li>
                ))}
            </ul>
            {popUp ? 
            <NotePopup note={popUp} closePopup={setPopup} />
            : 
            ""
            }
        </div>
    )
}

export default Notes;