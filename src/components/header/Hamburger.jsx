import React, {useState} from 'react';

const Hamburger = () => {
    const [clickMenu, setClickMenu] = useState(true)

    return(
        <div 
            className={clickMenu ? 'hamburger close' : 'hamburger open' } 
            onClick={()=> setClickMenu(!clickMenu)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default Hamburger;