import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import components
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Search from './views/Search/Search';

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/Home' component={Home} />
        <Route path='/Profile' component={Profile} />
        <Route path='/Search' component={Search} />
    </Switch>
)