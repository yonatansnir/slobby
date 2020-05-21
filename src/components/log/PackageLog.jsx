import React from 'react';

const PackageLog = () => {
    const arr = [
        {id: "1", time: "17:22", title: "חבילה עבור ביתלתום", status: "בדלפק | ארון"},
        {id: "2", time: "14:22", title: "חבילה עבור ביתלתום", status: "בדלפק | ארון"},
        {id: "3", time: "17:22", title: "חבילה עבור ביתלתום", status: "בדלפק | ארון"}
    ]
    return(
        <div className="box">
            <h2>יומן חבילות</h2>
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

export default PackageLog;