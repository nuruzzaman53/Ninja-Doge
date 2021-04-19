import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Country from './loadAPI'
import Details from './Country'

const Routes = () => {

    return(

        <BrowserRouter>

            <Switch>
                <Route path='/'  exact component={Country} />
                <Route path='/country/:countryId' exact  component={Details} />
            </Switch>

        </BrowserRouter>
    )

}

export default Routes