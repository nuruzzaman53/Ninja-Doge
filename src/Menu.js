import React from 'react'
import {Link,withRouter} from 'react-router-dom'

const isActive = (history,path) => {
    if(history.location.pathname === path){
        return { color:'orange',borderBottom:'solid'}
    }else {
        return { color:'black'}
    }
}

const Menu = ({history}) => {
    return(
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <Link className="navbar-brand" to='/'><h2 className='display-4'>WorldInfo</h2>  </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="navbar-nav">
                    <li className='nav-item'><Link style={isActive(history,'/')} className='nav-link' to='/'>Home</Link></li> 
                    <li className='nav-item'><Link style={isActive(history,'/about')} className='nav-link' to='/about'>About Us</Link></li> 
                </ul>
        </nav>
       </div>

    )
}

export default withRouter(Menu)