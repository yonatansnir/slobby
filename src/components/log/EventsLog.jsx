import React from 'react';

const EventsLog = () => {
    const arr = [
        {id: "1", time: "17:22", name: "משה", title: "חבילה עבור ביתלתום", status: "בדלפק | ארון"},
        {id: "2", time: "14:22", title: "חבילה עבור ביתלתום", status: "בדלפק | ארון"},
        {id: "3", time: "17:22", title: "חבילה עבור ביתלתום", status: "בדלפק | ארון"}
    ]
    return(
        <div className="box event-log">
            <h2>יומן אירועים</h2>
            <form>
                <select>
                    <option>חבילה</option>
                    <option>מפתח</option>
                </select>
                <input type="text" placeholder="הוסף אירוע" />
            </form>
            <table className="log">
                {arr.map(e => (
                    <tr>
                        <td>{e.time}</td>
                        <td>{e.title}</td>
                        <td className="status">{e.status}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default EventsLog;