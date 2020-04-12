import React from 'react';
import Input from '../../components/form-element/Input';
import Button from '../../components/form-element/Button';
import { useState } from 'react';

const Log = () => {
    const [log, setLog] = useState([])

    const createTime = () => {
        let data = new Date();
        let string = `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}`;
        return string;
    }
    
    const handleClick = () => {
        setLog([...log, createTime()]);

    }
    return(
        <div className="page">
            <h2>Log</h2>
            <form onSubmit={(e) => e.preventDefault()} style={{display: "flex", padding: "10px", background: "white"}}>
                <Button text="add" styleClass="btn btn-blue" handleClick={handleClick} />
            </form>
            <ul>
                {log.map(l => <li key={l}>{l}</li>)}
            </ul>
        </div>
    )
}

export default Log;