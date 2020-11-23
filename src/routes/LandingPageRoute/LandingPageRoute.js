import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './LandingPageRoute.css';
import Results from '../Results/Results';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import '@reach/combobox/styles.css';

class LandingPageRoute extends Component {
  constructor(props) {
    super(props)
    this.state = { location: '' }
  }

  handleChange = location => {
    this.setState({
      location
    })
  }

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.history.push({
        pathname: '/results',
        query: latLng
      }))
      
      .catch(error => console.error('Error', error));
  };

  handleSubmit = e => {
    e.preventDefault()
    const searchQuery = {
      search: this.state.location
    }
    if(searchQuery) {
      this.props.history.push({
        pathname: '/results',
        query: searchQuery
      })
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


              <PlacesAutoComplete
                value={this.state.location}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
              >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input id="hike-search"
              {...getInputProps({
                placeholder: 'Enter a Location',
                className: 'location-search-input',
              })}
            />
            {/* <button id="search-btn" type="submit">Search</button> */}
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div className="suggestions"
                    {...getSuggestionItemProps(suggestion, {
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutoComplete>


              {/* <input 
                className="hike-search" 
                type="text" 
                placeholder="Enter a location or trail" 
                onChange={(e) => {this.handleChange(e); this.handleSearchTouch(e)}} /> */}
              {/* <button id="search-btn" type="submit">Search</button> */}
              </div>
            </form>
            {/* <button className="nearby-btn" type="submit">Nearby Trails</button> */}
          </div>
        </section>

        <section className="registration-sect">
          <div className="register">
            <p className="explore-txt">EXPLORE<br></br><span className="journey-txt">The journey is your destination.</span></p>
            Finding your solace is only a hike away.  Search for trail details, plan for future hiking trips, or keep track of your favorite trails.  Whatever you need, Take-A-Hike has you covered.
          </div>
          
          <Link to='/register' className="sign-up-btn">Sign up for free</Link>
          
        </section>
      </main>
    )
  }
};

export default LandingPageRoute;