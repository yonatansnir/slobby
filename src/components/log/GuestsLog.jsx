import React from 'react';

const GuestsLog = () => {
    const arr = [
        {id: "1", time: "17:22", name: "דוד", carNumber: "141241433", host: "משה"},
        {id: "2", time: "17:22", name: "ניסן", carNumber: "141241433", host: "גד"},
        {id: "3", time: "17:22", name: "שמעון", carNumber: "141241433", host: "אהרון"}
    ]
    return(
        <div className="box">
            <h2>יומן אורחים</h2>
            <table className="log">
                {arr.map(e => (
                    <tr>
                        <td>{e.time}</td>
                        <td>{e.name}</td>
                        <td>{e.carNumber}</td>
                        <td>{e.host}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default GuestsLog;