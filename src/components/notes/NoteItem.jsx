import React from 'react';

const NoteItem = ({ note }) => (
    <div className="note-item">
        {note.title}
    </div>
)

export default NoteItem;