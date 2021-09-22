import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    
    return (
            <div className='container-fluid'>
                <div className='row py-3'>
                    <div className='col-sm-6 col-md-5  footer_left'>
                       <p className='text-sm-center'>&copy; Ninja Doge. all right reserved</p>
                    </div>
                    <div className='col-sm-6 col-md-5  footer_right'>
                         <p className='social'>
                           <Link to='/'><i className="fa fa-twitter  social_media" ></i></Link> 
                           <Link to='/'><i class="fa fa-facebook-official  social_media"  ></i></Link> 
                           <Link to='/'><i class="fa fa-telegram social_media"></i></Link> 
                           <Link to='/'><i class="fa fa-instagram  social_media"></i></Link> 
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default Footer
