import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LandingPageRoute.css';

class LandingPageRoute extends Component {
  state = {
    search: '',
    searchTouch: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSearchTouch = e => {
    this.setState({
      searchTouch = true
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const searchQuery = {
      search: this.state.search
    }
    
  }

  render() {
    return (
      <main>
        <section className="showcase">
          <div className="hike-img"></div>
          <div className="intro">
            <div className="title">
              Find your next journey
            </div>

            <form className='hike-search-form'>
              <div>
              <input id="hike-search" type="text" placehoder='Enter a location or trail' />
              <button id="search-btn" type="submit">Search</button>
              </div>
            </form>

          </div>
        </section>

        <section className="registration-sect">
          <div className="register">
            <p>Powered by Hiking Project</p>
            Finding your solace is only a hike away.  Search for trail details, plan for future hiking trips, or keep track of your favorite trails.  Whatever you need, Take-A-Hike has you covered.
          </div>
          
          <Link to='/register' className="sign-up-btn">Sign up for free</Link>
          
        </section>
      </main>
    )
  }
};

export default LandingPageRoute;