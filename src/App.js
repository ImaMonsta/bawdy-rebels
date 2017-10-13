import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider } from 'material-ui/styles';
import {theme} from  './settings/ThemeConfig'
import Login from './components/login/Login'



class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Login/>
      </MuiThemeProvider>
    );
  }
}

export default App;
