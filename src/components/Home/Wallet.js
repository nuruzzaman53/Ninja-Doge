import React from 'react'
import cp1 from '../../images/cp1.png'

const Wallet = () => {
    return (
        <div className='wallet  text-center p-5 '>
            <div class="container">
                <div class="row">
                    <div className='col-lg-6 col-sm-12 offset-lg-3 nft_card'>
                        <div className='row justify-content-center bg_black_radius'>
                            <div class="col-lg-5 col-sm-8"><img src={cp1} alt='' className='card-img-top' /></div>
                            <div class="col-lg-7 col-sm-4">
                            <h2 className='text-primary text-left font-weight-bold'>Get Your Ninja !</h2>
                            <p style={{fontSize:'11px'}} className='text-left text-white'>Select The Ninja Package You Want to Purchase</p>
                            <select className='form-control custom_select'>
                                <option className='text-primary'>25 Pack</option>.
                                <option className='text-primary'>15 Pack</option>
                                <option className='text-primary'>10 Pack</option>
                                <option className='text-primary'>05 Pack</option>
                                <option className='text-primary'>1 Card</option>
                            </select>
                            <br/>
                            <p className='mt-2 text-center text-white'>Total 7.5 BNB</p>
                            <p className='card_price text-center'>(0.35 EACH)</p>
                            
                            <button className='btn btn-block btn_color'>BUY NOW</button>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Wallet