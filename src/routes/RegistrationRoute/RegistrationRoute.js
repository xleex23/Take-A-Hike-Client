import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Registration from '../../components/Registration/Registration';
import './RegistrationRoute.css'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  handleSignUpSuccess = user => {
    const {history} = this.props
    history.push('/login')
  };

  render() {
    return (
      <section className="box">
        <Registration onSignUpSuccess={this.handleSignUpSuccess} />
        <div className="routeToLogin">
          <Link to="/login" className="subtext">Already have an account?  Sign-in!</Link>
        </div>
        <img className="pine-tree" src={require('../../components/img/pinetree.jpg')} />
      </section>
    )
  }
}

export default RegistrationRoute;