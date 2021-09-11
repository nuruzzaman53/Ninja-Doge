import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Roster from './components/Roster/Roster'
import Home from './components/Home/Home'
import BuyNow from './Pages/BuyNow'
import HowToBuy from './Pages/HowToBuy'
import RewardDashboard from './Pages/RewardDashboard'
import RewardPolicy from './Pages/RewardPolicy'
import WhitePaper from './Pages/WhitePaper'
import Blog from './Pages/Blog'
import JoinTelegram from './Pages/JoinTelegram'
import AnimatedNFT from './components/AnimatedNFT/AnimatedNFT'
import Archives from './components/Archive/Archive'
import Guide from './components/Guide/Guide'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/roster' exact component={Roster}/>
                <Route path='/animatedNFT' exact component={AnimatedNFT} />
                <Route path='/archives' exact component={Archives} />
                <Route path='/guide' exact component={Guide} />
                <Route path='/buy_now' exact component={BuyNow}/>
                <Route path='/how_to_buy' exact component={HowToBuy}/>
                <Route path='/reward_dashboard' exact component={RewardDashboard}/>
                <Route path='/reward_policy' exact component={RewardPolicy}/>
                <Route path='/whitepaper' exact component={WhitePaper}/>
                <Route path='/blog' exact component={Blog}/>
                <Route path='/telegram' exact component={JoinTelegram}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes