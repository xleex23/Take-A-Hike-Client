import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LandingPageRoute.css';
import Results from '../Results/Results';

class LandingPageRoute extends Component {
  state = {
    search: '',
    searchTouch: false,
    redirect: false
  }

  handleChange = e => {
    this.setState({
      search: e.target.value
    })
  }

  handleSearchTouch = e => {
    this.setState({
      searchTouch: true
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const searchQuery = {
      search: this.state.search
    }
    if(searchQuery) {
      this.props.history.push('results')
      return <Results query={searchQuery} />
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

            <form className='hike-search-form' onSubmit={this.handleSubmit}>
              <div>
              <input 
                id="hike-search" 
                type="text" 
                placeholder="Enter a location or trail" 
                onChange={(e) => {this.handleChange(e); this.handleSearchTouch(e)}} />
              <button id="search-btn" type="submit">Search</button>
              </div>
            </form>
            {/* <button className="nearby-btn" type="submit">Nearby Trails</button> */}
          </div>
        </section>

        <section className="registration-sect">
          <div className="register">
            <p>"Anywhere is within walking distance."</p>
            Finding your solace is only a hike away.  Search for trail details, plan for future hiking trips, or keep track of your favorite trails.  Whatever you need, Take-A-Hike has you covered.
          </div>
          
          <Link to='/register' className="sign-up-btn">Sign up for free</Link>
          
        </section>
      </main>
    )
  }
};

export default LandingPageRoute;