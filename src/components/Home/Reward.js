import React from 'react'

const Reward = () => {
    return (
        <div className='reward'>

            <div className='container'>

                <div className='row justify-content-center py-2'>
                        <h1 className='text-primary'>Reward Structure</h1>
                        <p className='px-5 text-white'>
                            Holders of a rare card will earn more rewards per cycle depending on the rarity.You are 
                            ableto stack as many rare cards as possible-with a potential to earn up to 640%(6.4x)
                            your rewards for 3-day cycle and 64% more for 30-days reward cycle.
                        </p>
                </div> <br/>

                <div className='row justify-content-center'>
                    
                    <div className='col-sm-6 col-md-5 reward_cycle p-3 m-1'>
                        <h2 className='text-white text-center'>3-Day Reward Cycle</h2>
                        <div className="list-group text-center">
                            <a href="/" className="list-group-item list-group-item-action">
                                <div class="w-100">
                                <h5 class="mb-1">Tier 3</h5>
                                </div>
                                <small className='text-muted'>3% more rewards</small>
                            </a><br/>
                            <a href="/" class="list-group-item list-group-item-action">
                                <div class="w-100">
                                <h5 class="mb-1">Tier 4</h5>
                                </div>
                                <small class="text-muted">30% more rewards</small>
                            </a><br/>
                            <a href="/" class="list-group-item list-group-item-action">
                                <div class="w-100">
                                <h5 class="mb-1">Tier 5</h5>
                                </div>
                                <small class="text-muted">100% more rewards</small>
                            </a>
                        </div> <br/>

                        <h4 className='text-white text-center'><span style={{color:'#38ff23'}}>735%(7.35x)</span> Potential More Rewards</h4>

                    </div>

                    <div className='col-sm-6 col-md-5 reward_cycle p-3 m-1'>
                        <h2 className='text-white text-center'>30-Day Reward Cycle</h2>
                        <div className="list-group text-center">
                            <a href="/" className="list-group-item list-group-item-action">
                                <div class="w-100">
                                <h5 class="mb-1">Tier 3</h5>
                                </div>
                                <small className='text-muted'>0.5% more rewards</small>
                            </a><br/>
                            <a href="/" class="list-group-item list-group-item-action">
                                <div class="w-100">
                                <h5 class="mb-1">Tier 4</h5>
                                </div>
                                <small class="text-muted">3% more rewards</small>
                            </a><br/>
                            <a href="/" class="list-group-item list-group-item-action">
                                <div class="w-100">
                                <h5 class="mb-1">Tier 5</h5>
                                </div>
                                <small class="text-muted">10% more rewards</small>
                            </a>
                        </div> <br/>

                        <h4 className='text-white text-center'><span style={{color:'#38ff23'}}>64%</span>(0.64x) Potential More Rewards</h4>

                    </div>
                    
                </div>

            </div>

        </div>
    )
}

export default Reward
