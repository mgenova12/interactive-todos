import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './components/form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <h1>The Coolest Todo App!</h1>
        <MuiThemeProvider>
          <Form />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
