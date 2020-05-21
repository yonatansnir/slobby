import React from 'react';

const Popup = ({ note, closePopup }) => (
    <>
    <div className="popup-background" onClick={() => closePopup(false)}></div>
    <div className="popup">
        {note.title}
    </div>
    </>
)

export default Popup;