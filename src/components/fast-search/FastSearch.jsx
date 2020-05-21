import React, { useState } from 'react';

const FastSearch = () => {
    const [search, setSearch] = useState('');
    let arr = ['יוני', 'אוה', 'משה']
    return(
        <div className="box fast-search">
            <h2>חיפוש מהיר</h2>
            <input type="texy" onChange={(e) => setSearch(e.target.value)} />
            <div className={search === "" ? "hide" : "select"}>
                {arr.filter(a => a.includes(search)).map(x => (
                    <div>{x}</div>
                ))}
            </div>
        </div>
    )
}

export default FastSearch;