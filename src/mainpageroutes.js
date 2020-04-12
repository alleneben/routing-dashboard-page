import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { About, DashboardPage,Profile } from './page';


const MainPageRoutes = () => {


    return(
        <Switch>
            <Route exact path='/dashboard' component={DashboardPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/profile' component={Profile} />
            {/* <Route exact path='/contact' component={Contact} /> */}
        </Switch>
    )
}

export default withRouter(MainPageRoutes)