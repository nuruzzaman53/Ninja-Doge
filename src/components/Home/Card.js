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
                            <Link to='/'><img src={cp1} className='card-img-top' alt="..." /></Link>
                            <div class="card-body text-center my-3">
                                <h5 class="card-title">1 Card</h5>
                                <p class="card-text">0.4 BNB</p>

                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-2'>
                        <div class="card"  >
                        <Link to='/'><img src={p5}  className='card-img-top'  alt="..." /></Link>
                            <div class="card-body text-center my-3">
                                <h5 class="card-title">5 Pack</h5>
                                <p class="card-text">1.7 BNB(0.34 EACH)</p>

                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4 col-lg-2'>
                        <div class="card"  >
                        <Link to='/'> <img src={p10}  className='card-img-top' alt="..." /></Link>
                            <div class="card-body text-center my-3">
                                <h5 class="card-title">10 Pack</h5>
                                <p class="card-text">3.33 BNB(0.33 EACH)</p>

                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4 col-lg-2'>
                        <div class="card"  >
                        <Link to='/'><img src={p15}  className='card-img-top'  alt="..." /></Link>
                            <div class="card-body text-center my-3">
                                <h5 class="card-title">15 Pack</h5>
                                <p class="card-text"> 4.8 BNB(0.32 EACH) </p>

                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4 col-lg-2'>
                        <div class="card"  >
                        <Link to='/'><img src={p25}  className='card-img-top' alt="..." /></Link>
                            <div class="card-body text-center my-3">
                                <h5 class="card-title">25 Pack</h5>
                                <p class="card-text">7.5 BNB(0.30 EACH)</p>

                            </div>
                        </div>
                    </div>

                </div> { /* ending row */}

            </div> { /* ending container */}
        </div> 
    )
}

export default Card
