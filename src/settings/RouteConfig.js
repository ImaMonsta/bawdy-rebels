import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Rooms from '../components/Rooms';
import NotFound from '../components/NotFound';

export const DefaultRouteConfig = () =>  (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/rooms" component={Rooms}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
