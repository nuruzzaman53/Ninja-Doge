import React from 'react'
import { Link } from 'react-router-dom'
import cp1 from '../../images/cp1.png'
import p5 from '../../images/P5.png'
import p10 from '../../images/P10.png'
import p15 from '../../images/P15.png'
import p25 from '../../images/P25.png'

function Card() {
    return (
        <div className='ninja_card'>
            <div className='container-fluid'>

                <h1>Get Your Ninja !</h1>
                <p className='text-white text-center'>Biggest rewards reflection in NFT History</p>
                <br/> <br/>

                <div className='row justify-content-center my-3'>
                    <div className='col-sm-6 col-md-4 col-lg-2'>
                        <div class="card"  >
                            <img src={cp1} className='card-img-top' style={{cursor:'pointer'}} data-toggle="modal" data-target="#exampleModal" alt="..." />
                            <div class="card-body text-center my-3">
                                <h5 class="card-title">1 Card</h5>
                                <p class="card-text">0.4 BNB</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-2'>
                        <div class="card"  >
                        <Link to='/'><img src={p5}  className='card-img-top'data-toggle="modal" data-target="#exampleModal"  alt="..." /></Link>
                            <div class="card-body text-center my-3">
                                <h5 class="card-title">5 Pack</h5>
                                <p class="card-text">1.7 BNB(0.34 EACH)</p>

                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4 col-lg-2'>
                        <div class="card"  >
                        <Link to='/'> <img src={p10}  className='card-img-top'data-toggle="modal" data-target="#exampleModal" alt="..." /></Link>
                            <div class="card-body text-center my-3">
                                <h5 class="card-title">10 Pack</h5>
                                <p class="card-text">3.33 BNB(0.33 EACH)</p>

                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4 col-lg-2'>
                        <div class="card"  >
                        <Link to='/'><img src={p15}  className='card-img-top' data-toggle="modal" data-target="#exampleModal"  alt="..." /></Link>
                            <div class="card-body text-center my-3">
                                <h5 class="card-title">15 Pack</h5>
                                <p class="card-text"> 4.8 BNB(0.32 EACH) </p>

                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4 col-lg-2'>
                        <div class="card"  >
                        <Link to='/'><img src={p25}  className='card-img-top' data-toggle="modal" data-target="#exampleModal" alt="..." /></Link>
                            <div class="card-body text-center my-3">
                                <h5 class="card-title">25 Pack</h5>
                                <p class="card-text">7.5 BNB(0.30 EACH)</p>

                            </div>
                        </div>
                    </div>

                </div> { /* ending row */}

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header border-0">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true" className='close_btn'>
                                <i class="fa fa-times"></i></span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-4"><img src={cp1} alt='' className='card-img-top' /></div>
                                        <div class="col-md-8">
                                            <h2 className='text-primary font-weight-bold'>Get Your Ninja !</h2>
                                            <p style={{fontSize:'11px'}}>Select The Ninja Package You Want to Purchase</p>
                                            <select className='form-control custom-select'>
                                                <option>25 Pack</option>.
                                                <option>15 Pack</option>
                                                <option>10 Pack</option>
                                                <option>05 Pack</option>
                                                <option>1 Card</option>
                                            </select>
                                            <br/>
                                            <p className='mt-2 text-center'>Total 7.5 BNB</p>
                                            <p className='card-text text-center'><small>(0.35 EACH)</small></p>
                                            
                                            <button className='btn btn-block btn_color'>BUY NOW</button>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* ending modal */}
            </div> { /* ending container */}
        </div> 
    )
}

export default Card
