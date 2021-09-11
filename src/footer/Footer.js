import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 text-left'>
                        <p> &copy; Ninja Doge. all right reserved</p>
                    </div>
                    <div className='col-md-6 text-right'>
                        <p className='social'>
                           <Link to='/'><i className="fa fa-twitter fa-2x social_media" ></i></Link> 
                           <Link to='/'><i class="fa fa-facebook-official fa-2x social_media"  ></i></Link> 
                           <Link to='/'><i class="fa fa-telegram fa-2x social_media"></i></Link> 
                           <Link to='/'><i class="fa fa-instagram fa-2x social_media"></i></Link> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
