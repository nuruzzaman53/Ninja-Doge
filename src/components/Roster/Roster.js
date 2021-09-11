import React from 'react'
import TopMenu from '../../header/TopMenu'
import SubMenu from '../../header/SubMenu'
import Footer from '../../footer/Footer'
import CardGallery from './CardGallery'

const Roster = () => {
    return (
        <div>
            <TopMenu />
            <SubMenu />
            <CardGallery />
            <Footer />
        </div>
    )
}

export default Roster