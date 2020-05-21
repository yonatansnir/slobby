import React from 'react';

const NotePopup = ({ note, closePopup }) => (
    <>
    <div className="popup-background" onClick={() => closePopup(false)}></div>
    <div className="popup">
        {note.title}
    </div>
    </>
)

export default NotePopup;