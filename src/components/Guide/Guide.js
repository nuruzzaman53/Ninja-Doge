import React from 'react'
import TopMenu from '../../header/TopMenu'
import SubMenu from '../../header/SubMenu'
import Footer from '../../footer/Footer'
import GuidePost from './GuidePost'


const Guide = () => {
    return (
        <div>
            <TopMenu />
            <SubMenu />
            <GuidePost />
            <Footer />
        </div>
    )
}

export default Guide