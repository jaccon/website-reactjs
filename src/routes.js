import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Radio from './pages/Radio';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}  />
            <Route path="/radio" component={Radio}  />
        </Switch>
    </BrowserRouter>
);

export default Routes;