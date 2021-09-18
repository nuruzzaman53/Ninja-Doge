import React from 'react'
import { Link } from 'react-router-dom'
import ninja1 from '../../images/ninja1.png'
import ninja2 from '../../images/ninja2.png'
import ninja3 from '../../images/ninja3.png'
import ninja4 from '../../images/ninja4.png'
import ninja5 from '../../images/ninja5.png'


const ArchiveGallery = () => {
    return (
        <div className='ninja_card'>
            <div className='container-fluid'>

                <h1>Public Archive</h1>
                <p className='text-white text-center'>Recently Trained Ninja</p>
                <br/> <br/>
                
                <div className='row justify-content-center'>

                    <div className='col-md-2 offset-md-1'>
                        <div class="input-icons">
                            <i class="fa fa-search icon"></i>
                            <input type='search' value='Search' placeholder='Search' 
                              className='form-control  search_box' />
                        </div>
                       
                    </div>

                    <div className='col-md-3  ml-auto mr-3'>
                        <form class="form-inline">
                            <select className="custom-select  mr-sm-2" id="inlineFormCustomSelectPref">
                                <option value="1">Most Recent</option>
                                <option value="2">Favourite</option>
                                <option value="3">NinjaDose</option>
                            </select>
                            <select className="custom-select  mr-sm-2" id="inlineFormCustomSelectPref">
                                <option value="1">Tier 3</option>
                                <option value="2">Tier 4</option>
                                <option value="3">Tier 5</option>
                            </select>

                        </form>
                    </div>

                </div>

                <div className='row justify-content-center my-3'>

                    <div className='col-lg-2 archieve_card'>
                        <div className="card"  >
                            <img src={ninja1} className='card-img-top' alt="..." />
                            <div class="card-body text-center my-3">
                                <h5 class="card-title text-white">Card Name</h5>
                                <Link to='/'> <p class="card-text text-primary">
                                    CARD DETAILS <i class="fa fa-arrow-circle-right"></i>
                                </p>
                                </Link>
                            </div>
                        </div>
   
                    </div>
                    <div className='col-lg-2 archieve_card'>
                        <div class="card"   >
                            <img src={ninja2} className='card-img-top' alt="..." />
                            <div class="card-body text-center my-3">
                                <h5 class="card-title text-white">Card Name</h5>
                                <Link to='/'><p class="card-text text-primary">
                                    CARD DETAILS <i class="fa fa-arrow-circle-right"></i></p>
                                </Link>

                            </div>
                        </div>
   
                    </div>
                    <div className='col-lg-2 archieve_card'>
                        <div class="card"  >
                            <img src={ninja3} className='card-img-top' alt="..." />
                            <div class="card-body text-center my-3">
                                <h5 class="card-title text-white">Card Name</h5>
                                <Link to='/'><p class="card-text text-primary">
                                    CARD DETAILS <i class="fa fa-arrow-circle-right"></i>
                                    </p>
                                </Link>

                            </div>
                        </div>
   
                    </div>
                    <div className='col-lg-2 archieve_card'>
                        <div class="card"  >
                            <img src={ninja4} className='card-img-top' alt="..." />
                            <div class="card-body text-center my-3">
                                <h5 class="card-title text-white">Card Name</h5>
                                <Link to='/'><p class="card-text text-primary">
                                    CARD DETAILS <i class="fa fa-arrow-circle-right"></i></p>
                                </Link>
                            </div>
                        </div>
   
                    </div>
                    <div className='col-lg-2 archieve_card'>
                        <div class="card"  >
                            <img src={ninja5} className='card-img-top' alt="..." />
                            <div class="card-body text-center my-3">
                                <h5 class="card-title text-white">Card Name</h5>
                                <Link to='/'> <p class="card-text text-primary">
                                    CARD DETAILS <i class="fa fa-arrow-circle-right"></i></p>
                                </Link>
                            </div>
                        </div>
   
                    </div>

                </div> { /* ending row */}

                <div className='row justify-content-center my-3'>

                <div className='col-lg-2 archieve_card'>
                    <div class="card"  >
                        <img src={ninja1} className='card-img-top' alt="..." />
                        <div class="card-body text-center my-3">
                            <h5 class="card-title text-white">Card Name</h5>
                            <Link to='/'><p class="card-text text-primary">CARD DETAILS <i class="fa fa-arrow-circle-right"></i></p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='col-lg-2 archieve_card'>
                    <div class="card"  >
                        <img src={ninja2} className='card-img-top' alt="..." />
                        <div class="card-body text-center my-3">
                            <h5 class="card-title text-white">Card Name</h5>
                            <Link to='/'><p class="card-text text-primary">CARD DETAILS <i class="fa fa-arrow-circle-right"></i></p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className=' col-lg-2 archieve_card'>
                    <div class="card"  >
                        <img src={ninja3} className='card-img-top' alt="..." />
                        <div class="card-body text-center my-3">
                            <h5 class="card-title text-white">Card Name</h5>
                            <Link to='/'><p class="card-text text-primary">CARD DETAILS <i class="fa fa-arrow-circle-right"></i></p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='col-lg-2 archieve_card'>
                    <div class="card"  >
                        <img src={ninja4} className='card-img-top' alt="..." />
                        <div class="card-body text-center my-3">
                            <h5 class="card-title text-white">Card Name</h5>
                            <Link to='/'><p class="card-text text-primary">CARD DETAILS <i class="fa fa-arrow-circle-right"></i></p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='col-lg-2 archieve_card'>
                    <div class="card"  >
                        <img src={ninja5} className='card-img-top' alt="..." />
                        <div class="card-body text-center my-3">
                            <h5 class="card-title text-white">Card Name</h5>
                            <Link to='/'><p class="card-text text-primary">CARD DETAILS <i class="fa fa-arrow-circle-right"></i></p>
                            </Link>
                        </div>
                    </div>

                </div>


                </div> { /* ending row */}

                <div className='row justify-content-center my-3'>

                <div className='col-lg-2 archieve_card'>
                    <div class="card"  >
                        <img src={ninja1} className='card-img-top' alt="..." />
                        <div class="card-body text-center my-3">
                            <h5 class="card-title text-white">Card Name</h5>
                            <Link to='/'><p class="card-text text-primary">CARD DETAILS <i class="fa fa-arrow-circle-right"></i></p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='col-lg-2 archieve_card'>
                    <div class="card"  >
                        <img src={ninja2} className='card-img-top' alt="..." />
                        <div class="card-body text-center my-3">
                            <h5 class="card-title text-white">Card Name</h5>
                            <Link to='/'> <p class="card-text text-primary">CARD DETAILS <i class="fa fa-arrow-circle-right"></i></p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='col-lg-2 archieve_card'>
                    <div class="card"  >
                       <img src={ninja3} className='card-img-top' alt="..." />
                        <div class="card-body text-center my-3">
                            <h5 class="card-title text-white">Card Name</h5>
                            <Link to='/'> <p class="card-text text-primary">CARD DETAILS <i class="fa fa-arrow-circle-right"></i></p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='col-lg-2 archieve_card'>
                    <div class="card"  >
                        <img src={ninja4} className='card-img-top' alt="..." />
                        <div class="card-body text-center my-3">
                            <h5 class="card-title text-white">Card Name</h5>
                            <Link to='/'><p class="card-text text-primary">CARD DETAILS <i class="fa fa-arrow-circle-right"></i></p>
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='col-lg-2 archieve_card'>
                    <div class="card"  >
                        <img src={ninja5} className='card-img-top' alt="..." />
                        <div class="card-body text-center my-3">
                            <h5 class="card-title text-white">Card Name</h5>
                            <Link to='/'> <p class="card-text text-primary">CARD DETAILS <i class="fa fa-arrow-circle-right"></i></p>
                            </Link>
                        </div>
                    </div>

                </div>


                </div> { /* ending row */}
                

                <div className='row justify-content-center paginated'>
                    <nav aria-label="...">
                        <ul class="pagination pagination-md">
                            <li class="page-item active" aria-current="page">
                            <span class="page-link">01</span>
                            </li>
                            <li class="page-item"><a class="page-link" href="/">02</a></li>
                            <li class="page-item"><a class="page-link" href="/">03</a></li>
                        </ul>
                    </nav>
                </div>

            </div> { /* ending container */}
        </div> 
    )
}

export default ArchiveGallery
