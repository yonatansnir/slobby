import React from 'react';

const Lobby = () => {
    return(
        <div className="lobby">
            <form>
            <h2>באיזה עמדה אתם היום?</h2>
                <select>
                    <option>לובי אחד</option>
                    <option>לובי שתיים</option>
                    <option>לובי שלוש</option>
                </select>
            </form>
        </div>
    )
}

export default Lobby;