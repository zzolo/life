/**
 * Main navigation.
 */
import React from 'react';
import { Link } from 'react-router';

// Navigation
class Navigation extends React.Component {
  render() {
    return (
      <nav class="main">
        <ul>
          <li title="Settings">
            <Link to={`/settings`} activeClassName="active"><i class="fa fa-gear"></i></Link>
          </li>
          <li title="Add">
            <Link to={`/add`} activeClassName="active"><i class="fa fa-upload"></i></Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
