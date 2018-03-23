import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import components
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/Home' component={Home} />
    </Switch>
)