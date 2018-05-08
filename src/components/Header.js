import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';


export class Header extends Component {
  render() {
    return (
      <div className="header">
        <AppBar
          title="Add Your Todos"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          titleStyle={{ textAlign: 'center' }}
        />

      </div>
    );
  }
}

export default Header;
