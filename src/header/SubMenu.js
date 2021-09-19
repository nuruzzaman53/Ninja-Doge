import React from 'react'
import { NavLink } from 'react-router-dom'

const SubMenu = () => {
    return (
        <div className='custom_bg'>
            <div className='container py-2'>
                <div className='row justify-content-center'>
                    <div className='col-lg-8  p-2 d-none d-sm-block'> {/* Hidden only on xs */ }

                        <ul class="nav nav-pills nav-fill" id="navbarPills">
                         <li className='nav-item'><NavLink exact className='nav-link' activeClassName='active'  to="/">Purchase</NavLink></li>
                         <li className='nav-item'><NavLink exact className='nav-link' activeClassName='active'   to="/roster">My Roster</NavLink></li>
                         <li className='nav-item'><NavLink exact className='nav-link' activeClassName='active'  to="/archives">Archive</NavLink></li>

                        <li class="nav-item dropdown">
                            <NavLink class="nav-link dropdown-toggle" data-toggle="dropdown" to="#subMenu" role="button" aria-haspopup="true" 
                            aria-expanded="false">Marketplace</NavLink>
                            <div class="dropdown-menu" id='subMenu'>
                            <NavLink class="dropdown-item text-primary" to="/">Marketplace</NavLink>
                            <NavLink class="dropdown-item text-primary" to="/">Portfolio</NavLink>
                            <NavLink class="dropdown-item text-primary" to="/">Earn</NavLink>
                            <NavLink class="dropdown-item text-primary" to="/">Gatcha</NavLink>

                            <div class="dropdown-divider"></div>
                                <NavLink class="dropdown-item text-primary" to="/">Defi Vault Ranking</NavLink>
                                <NavLink class="dropdown-item text-primary" to="/">NFT Viewer</NavLink>
                                <NavLink class="dropdown-item text-primary" to="/">SCV Bridge</NavLink>
                                <NavLink class="dropdown-item text-primary" to="/">Doodle</NavLink>
                            </div>
                        </li>

                        <li className='nav-item'><NavLink exact className='nav-link' activeClassName='active'  to="/guide">Guide</NavLink></li>
                        <li className='nav-item'><NavLink exact className='nav-link' activeClassName='active'  to="/animatedNFT">Animated NFT Series</NavLink></li>
                      </ul>
          
                    </div>

                    

                    <div class="dropdown px-5 d-block d-sm-none"> {/* Visible only on xs */}
                        <button class="btn btn-primary btn-block py-2 px-5 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select The Options
                        </button>
                        <div class="dropdown-menu align-items-center" aria-labelledby="dropdownMenuButton">
                            <NavLink class="dropdown-item nav-link" to="/">Purchase</NavLink>
                            <NavLink class="dropdown-item nav-link" to="/roster">My Roster</NavLink>

                            <NavLink class="nav-link dropdown-toggle" data-toggle="dropdown" to="#subMenu" role="button" aria-haspopup="true" 
                            aria-expanded="false">Marketplace</NavLink>
                            <div class="dropdown-menu" id='subMenu'>
                            <NavLink class="dropdown-item text-primary" to="/">Marketplace</NavLink>
                            <NavLink class="dropdown-item text-primary" to="/">Portfolio</NavLink>
                            <NavLink class="dropdown-item text-primary" to="/">Earn</NavLink>
                            <NavLink class="dropdown-item text-primary" to="/">Gatcha</NavLink>

                            <div class="dropdown-divider"></div>
                                <NavLink class="dropdown-item text-primary" to="/">Defi Vault Ranking</NavLink>
                                <NavLink class="dropdown-item text-primary" to="/">NFT Viewer</NavLink>
                                <NavLink class="dropdown-item text-primary" to="/">SCV Bridge</NavLink>
                                <NavLink class="dropdown-item text-primary" to="/">Doodle</NavLink>
                            </div>

                            <NavLink class="dropdown-item nav-link" to="/archives">Archive</NavLink>
                            <NavLink class="dropdown-item nav-link" to="/guide">Guide</NavLink>
                            <NavLink class="dropdown-item nav-link" to="/animatedNFT">Animated NFT Series</NavLink>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default SubMenu


