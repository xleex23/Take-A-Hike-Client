import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  state = {
    isOpen: false
  }

  hideElements = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  renderLoggedOut() {
    return (
      <div className="header-menu">
        <Link className="header-links reg" to="/register">
          Register
        </Link>
        <Link className="header-links log" to="/login">
          Log In
        </Link>
      </div>
    )
  }

  render() {
    return (
      <header>
        <Link to='/' style={{ textDecoration: 'none' }}>
        <h1>
          Take-<span className="middle-a">A</span>-Hike
        </h1>
        </Link>
        <div className="nav">
          <div className={
            this.state.isOpen ? "nav-container change" : "nav-container"
          }>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

          <div className="full-menu">
            {this.renderLoggedOut()}
          </div>

          <div className="mobile-menu">
          </div>
        </div>
      </header>
    )
  }
};

export default Header;