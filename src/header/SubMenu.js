import React from 'react'

function SubMenu() {
    return (
        <div className='custom_bg'>
            <div className='container py-2'>
                <nav class="nav nav-pills nav-fill">
                    <a className="nav-link active" href="/">Purchase</a>
                    <a className="nav-link" href="/roster">My Roster</a>
                    <a className="nav-link" href="/archives">Archive</a>
                    <a className="nav-link" href="/">Marketplace</a>
                    <a className="nav-link" href="/guide">Guide</a>
                    <a className="nav-link" href="/animatedNFT">Animated NFT Series</a>
                </nav>
            </div>
        </div>
    )
}

export default SubMenu
