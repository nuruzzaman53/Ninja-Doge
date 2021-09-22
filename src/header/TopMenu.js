import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from '../images/ninja_logo.png'

const TopMenu = () => {

    return (
        <div className='container-fluid'>
        <div className='row justify-content-lg-center'>
            <nav className="navbar navbar-expand-md navbar-light bg-white">
 
                <Link className="navbar-brand" to="/"><img src={logo} alt='Ninja Logo'  width='100%'/></Link>
                <button className="navbar-toggler border-0"  data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item"><NavLink className="nav-link"  to="/buy_now">Buy Now</NavLink> </li>
                        <li className="nav-item"><NavLink className="nav-link"  to="/">How to Buy</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link"  to="/">Reward Dashboard</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link"  to="/">Reward Policy</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link"  to="/">Whitepaper</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link"  to="/">Blog</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link btn_color text-white" exact activeClassName='active' to="/">JOIN OUR TELEGRAM</NavLink></li>                      
                       
                    </ul>

                    </div>
                    <li className="nav-item wallet_button"><NavLink className="nav-link btn_color text-white" exact activeClassName='active' to="/"> CONNECT TO WALLET </NavLink></li>    

                
            </nav>
        </div>
        </div>
    )
}

export default TopMenu
