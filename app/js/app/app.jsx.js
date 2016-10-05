/**
 * Main application container.
 */
import React from 'react';
import Navigation from '../navigation/navigation.jsx.js';

// App
class App extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <Navigation />
        <div class="content-main">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default App;
