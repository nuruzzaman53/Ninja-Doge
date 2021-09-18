import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import logo from '../images/ninja_logo.png'

const TopMenu = () => {

    return (

            <nav className="navbar navbar-expand-lg navbar-light bg-white">

                <div className='container-fluid'>

                    <div className='row inline-block'>

                    <Link className="navbar-brand" to="/"><img src={logo} alt='Ninja Logo' /></Link>
                    <button className="navbar-toggler border-0"  data-toggle="collapse" data-target="#navbarNav" >
                        <span className="navbar-toggler-icon ml-4"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarNav">

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><NavLink className="nav-link" exact activeClassName='active' to="/buy_now">Buy Now</NavLink> </li>
                            <li className="nav-item"><NavLink className="nav-link" exact activeClassName='active' to="/">How to Buy</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" exact activeClassName='active' to="/">Reward Dashboard</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" exact activeClassName='active' to="/">Reward Policy</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" exact activeClassName='active' to="/">Whitepaper</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" exact activeClassName='active' to="/">Blog</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link btn_color text-white" exact activeClassName='active' to="/">JOIN OUR TELEGRAM</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link btn_color text-white" exact activeClassName='active' to="/"> CONNECT TO WALLET </NavLink></li>
        
                        </ul>
                        
                    </div>
                    
                    </div>   

                    </div>    
            </nav>
    )
}

export default TopMenu
