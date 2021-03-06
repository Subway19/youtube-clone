//this is the starting point of our app
//implements material design which will be available for all of our components app
//entry level material-ui configuration to be done in this file

import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/index';

import mui from 'material-ui';

import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {red600,teal700} from 'material-ui/styles/colors';



const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red600,
    accent1Color:teal700


  },
  appBar: {
    height: 50,
    width:10
  },
});



const MaterialApp = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <MaterialApp />,
  document.querySelector('.container')
);