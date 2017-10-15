import React, { Component } from 'react';
import {DefaultRouteConfig} from './settings/RouteConfig';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import './App.css';

class App extends Component { 
  render() {
    return (
        <DefaultRouteConfig/>
    );
  }
}

export default App;
