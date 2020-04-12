import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import App from './App';
import { Login } from './page';


const AppRoutes = () => {


    return(
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/dashboard' component={App} />
            <Route exact path='/about' component={App} />
            <Route exact path='/profile' component={App} />
            <Route exact path='/contact' component={App} />
        </Switch>
    )
}

export default withRouter(AppRoutes)