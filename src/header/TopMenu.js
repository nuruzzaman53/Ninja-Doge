import React from 'react'
import logo from '../images/ninja_logo.png'

const TopMenu = () => {
    return (
        <div className='container-fluid'>

            <nav className="navbar navbar-expand-lg navbar-light bg-white">

                 <a className="navbar-brand" href="/"><img src={logo} alt='Ninja Logo' /></a>
                <button className="navbar-toggler"  data-toggle="collapse" data-target="#navbarNav" >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link active" href="/">Buy Now</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">How to Buy</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Reward Dashboard</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Reward Policy</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Whitepaper</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Blog</a></li>
                        <li className="nav-item">
                            <a className="nav-link btn_color" href="/">JOIN OUR TELEGRAM</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link btn_color" href="/"> CONNECT TO WALLET </a>
                        </li>
    
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default TopMenu
