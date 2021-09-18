import React from 'react'
import TopMenu from '../../header/TopMenu'
import SubMenu from '../../header/SubMenu'
import Footer from '../../footer/Footer'
import Card from './Card'
import Reward from './Reward'
import Mint from './Mint'
import Wallet from './Wallet'

const Home = () => {
    return (
        <div>
            <TopMenu />
            <SubMenu />
            <Card />
            <Mint />
            <Wallet />
            <Reward />
            <Footer />
        </div>
    )
}

export default Home
