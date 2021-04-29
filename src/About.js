import React from 'react'
import Menu from './Menu'
import profilePhoto from './my_profile.jpg'
import Project1 from './project-1.jpg'
import Project2 from './project-2.png'

const About = () => {
    return (
        <div className='container'>

            <Menu />

            <div className='row mt-5'>

            <div className='col-4'>
                    <img src={profilePhoto} alt={profilePhoto} width='90%' className='rounded img-fluid' />
                </div>
                <div className='col-8 '>
                <h1 className='display-4'>Full stack developer</h1>
                <i>A full stack developer is an engineer who can handle all the work of databases, 
                    servers, systems engineering, and clients. Depending on the project,
                     what customers need may be a mobile stack, a Web stack, 
                     or a native application stack
                </i><br/><br/>
                <h2 className='display-6'>My Skills</h2><br/>
                <div className='btn-group'>
                <button className='btn btn-outline-info'>Node JS</button>
                <button className='btn btn-outline-info'>React JS</button>
                <button className='btn btn-outline-info'>MongoDb</button>
                <button className='btn btn-outline-info'>Express JS</button>
                <button className='btn btn-outline-info'>Git Profile</button>
                <button className='btn btn-outline-info'>Github Link</button>
                
                </div><br/><br/>
                <div className='btn-group'>
                <button className='btn btn-outline-info'>API Integration</button>
                <button className='btn btn-outline-info'>Google Maps API</button>
                <button className='btn btn-outline-info'>CSS3 Animation</button>
                <button className='btn btn-outline-info'>Bootstrap</button>
                <button className='btn btn-outline-info'>Responsive design</button>
                <button className='btn btn-outline-info'>UI/UX Design</button>
                
                </div><br/><br/>

                <h2 className='display-6'>How to connect ??</h2>
                <ul className='list-group'>
                    <li className='list-group-item col-4'>Github Profile</li>
                    <li className='list-group-item col-4'>Gmail </li>
                </ul>
                


                </div>
            </div>
            <br/>
            <div className='row'>
                 <h2 className='display-5'>My Portfolio</h2>
                <div className='col-5 mt-5'>
                    <img src={Project1} alt={Project1} width='90%' />
                </div>
                <div className='col-7 mt-5'>
                    <h2>Ecommerce Website </h2>
                    <i>
                    E-Commerce websites are online portals that facilitate online transactions of goods
                     and services through means of the transfer of information and funds over the Internet.
                     .eCommerce is nothing but a type of commerce. Its functioning style is quite similar to that of the physical retail industry. The only difference it has with a brick and mortar store is that here, the entire process takes place online.

                        The journey of an eCommerce firm begins with setting up an eCommerce website. It is usually done with plugins like WooCommerce.
                    </i><br/><br/>
                    <button className='btn btn-outline-danger'>
                    <i class="fa fa-arrow-circle-right"></i>  Click here to visit the site
                    </button>
                </div>

                <div className='col-7 mt-5'>
                    <h2>Restaurent Website </h2>
                    <i>
                    A restaurant (French: [ʁɛstoʁɑ̃] ( listen)), or an eatery, is a business that 
                    prepares and serves food and drinks to customers. Meals are generally served and eaten 
                    on the premises, but many restaurants also offer take-out and food delivery services.
                    </i><br/><br/>
                    <button className='btn btn-outline-danger'>
                    <i class="fa fa-arrow-circle-right"></i>  Click here to visit the site
                    </button>
                </div>

                
                <div className='col-5 mt-5'>
                    <img src={Project2} alt={Project1} width='90%' />
                </div>


            </div>  
        </div>
    )
}

export default About
