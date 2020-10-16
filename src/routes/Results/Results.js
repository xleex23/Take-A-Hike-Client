import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Results extends Component {
  
  componentDidMount() {
    console.log(this.props.query)
  }
  render() {
    return (
      <div>
      {this.props.query}
      </div>
    )
  }
};

export default Results;