import React from "react";
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';


const Header =({currentUser})=>(
    <div className='header'>
        <Link to='/'>
            <img className="icon" src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png' alt="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to='/'>MAIN</Link>
            <Link className="option" to='/shop'>SHOP</Link>
            
            
                {currentUser ?
                (<div className='option' onClick={()=>auth.signOut()}>LOGOUT</div>)
                 :
                 (<Link className='option' to='/signin'>SIGN IN</Link>)
                 }
           
        </div>
 
    </div> 

    
)


export default Header;