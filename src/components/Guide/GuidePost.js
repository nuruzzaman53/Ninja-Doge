import React from 'react'
import postImage from '../../images/guideImage.jpg'
import postImage2 from '../../images/post2.jpg'

const GuidePost = () => {

    return (

        <div className='ninja_card'>

            <div className='container-fluid'>

                <div className='row justify-content-center filter_options'>
                   <div className='col-md-2 offset-md-1' id="searchButton">
                        <div class="input-icons">
                            <i class="fa fa-search icon"></i>
                            <input type='search' value='Search' placeholder='Search' 
                            className='form-control  search_box' />
                        </div>
                    
                    </div>
                    <div className='col-md-2 offset-md-1 ml-auto mr-5' id='filter'>
                        <form class="form-inline">
                            <select className="custom-select  mr-sm-2" id="inlineFormCustomSelectPref">
                                <option value="1">Most Recent</option>
                                <option value="2">Favourite</option>
                                <option value="3">NinjaDose</option>
                            </select>
                        </form>
                    </div>

               </div> <br/>

                <div className='row justify-content-center'>
                    <div className='col-10 post_style'>
                        <div class="card p-5 bg-white">
                            <h2 className='font-weight-bold'>Introduction of Ninja Dose BlockChain</h2>
                            <h6 class="card-subtitle mb-2 text-muted">Unique NFT's That will take over the Binance Smart Chain </h6><br/>
                            <img src={postImage} class="card-img-top" alt="..." /> <br/>
                                <p className='text-muted'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in. Viverra tellus in hac habitasse platea. At risus viverra adipiscing at in tellus integer. Sodales ut eu sem integer vitae justo eget magna fermentum. Nec dui nunc mattis enim ut. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Euismod elementum nisi quis eleifend quam. Volutpat commodo sed egestas egestas fringilla phasellus. Vel pharetra vel turpis nunc eget lorem dolor sed. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Neque sodales ut etiam sit amet. Pretium viverra suspendisse potenti nullam ac.
                                </p>
                                <p className='text-muted'>
                                Turpis cursus in hac habitasse platea. Quis lectus nulla at volutpat. Tortor dignissim convallis aenean et tortor at. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Turpis nunc eget lorem dolor sed. Odio euismod lacinia at quis risus sed vulputate odio. Sit amet purus gravida quis blandit turpis cursus. Donec adipiscing tristique risus nec feugiat. Massa placerat duis ultricies lacus sed turpis tincidunt id. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Tortor at risus viverra adipiscing at. In massa tempor nec feugiat nisl pretium fusce id velit. Vitae aliquet nec ullamcorper sit amet risus.
                                </p>
                                <p className='text-muted'>
                                Turpis cursus in hac habitasse platea. Quis lectus nulla at volutpat. Tortor dignissim convallis aenean et tortor at. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Turpis nunc eget lorem dolor sed. Odio euismod lacinia at quis risus sed vulputate odio. Sit amet purus gravida quis blandit turpis cursus. Donec adipiscing tristique risus nec feugiat. Massa placerat duis ultricies lacus sed turpis tincidunt id. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Tortor at risus viverra adipiscing at. In massa tempor nec feugiat nisl pretium fusce id velit. Vitae aliquet nec ullamcorper sit amet risus.
                                </p>
                           
                        </div>
                    </div>
                </div>  { /* Ending Row class */} <br/><br/>

                <div className='row justify-content-center'>
                    <div className='col-10 post_style'>
                        <div class="card p-5 bg-white">
                            <h2 className='font-weight-bold'>Introduction of Ninja Dose BlockChain</h2>
                            <h6 class="card-subtitle mb-2 text-muted">Unique NFT's That will take over the Binance Smart Chain </h6><br/>
                            <img src={postImage2} class="card-img-top" alt="..." /> <br/>
                                <p className='text-muted'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in. Viverra tellus in hac habitasse platea. At risus viverra adipiscing at in tellus integer. Sodales ut eu sem integer vitae justo eget magna fermentum. Nec dui nunc mattis enim ut. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Euismod elementum nisi quis eleifend quam. Volutpat commodo sed egestas egestas fringilla phasellus. Vel pharetra vel turpis nunc eget lorem dolor sed. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Neque sodales ut etiam sit amet. Pretium viverra suspendisse potenti nullam ac.
                                </p>
                                <p className='text-muted'>
                                Turpis cursus in hac habitasse platea. Quis lectus nulla at volutpat. Tortor dignissim convallis aenean et tortor at. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Turpis nunc eget lorem dolor sed. Odio euismod lacinia at quis risus sed vulputate odio. Sit amet purus gravida quis blandit turpis cursus. Donec adipiscing tristique risus nec feugiat. Massa placerat duis ultricies lacus sed turpis tincidunt id. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Tortor at risus viverra adipiscing at. In massa tempor nec feugiat nisl pretium fusce id velit. Vitae aliquet nec ullamcorper sit amet risus.
                                </p>
                                <p className='text-muted'>
                                Turpis cursus in hac habitasse platea. Quis lectus nulla at volutpat. Tortor dignissim convallis aenean et tortor at. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Turpis nunc eget lorem dolor sed. Odio euismod lacinia at quis risus sed vulputate odio. Sit amet purus gravida quis blandit turpis cursus. Donec adipiscing tristique risus nec feugiat. Massa placerat duis ultricies lacus sed turpis tincidunt id. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Tortor at risus viverra adipiscing at. In massa tempor nec feugiat nisl pretium fusce id velit. Vitae aliquet nec ullamcorper sit amet risus.
                                </p>
                           
                        </div>
                    </div>
                </div>  { /* Ending Row class */}

                <br/>

            </div> { /* Ending Container class */}
        </div>   /* Ending ninja_card class */
    )
}

export default GuidePost
