import React from "react";
import {Link} from 'react-router-dom'

import './header.styles.scss';


const Header =()=>(
    <div className='header'>
        <Link to='/'>
            <img className="icon" src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png' />
        </Link>
        <div className="options">
            <Link className="option" to='/'>MAIN</Link>
            <Link className="option" to='/shop'>SHOP</Link>
        </div>

    </div>

    
)


export default Header;