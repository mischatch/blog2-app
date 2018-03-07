import React from 'react';

import { Link, WithRouter } from 'react-router-dom';
import * as routes from '../constants/routes';


const SignUpPage = ({ history }) => {
    return (
      <div>
        <h1>Sign-up Page</h1>
        <SignUpForm history={history} />
      </div>
    )
}

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props){
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (e) => {
    const { username, email, passwordOne } = this.state;
    const { history } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    e.preventDefault();
  }

  const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
  });


  render(){
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

    return (
      <form onSubmit={this.onSubmit}>
      <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
          />
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value
            type="text"
            placeholder="Email Address"
          />
          <input
            value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            type="password"
            placeholder="Password"
          />
          <input
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm Password"
          />
        <button disabled={isInvalid} type="submit">    Sign Up     </button>

        { error && <p>{error.message}</p> }

      </form>
    )
  }
}




const SignUpLink = () =>
  <p>
    Don`'`t have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>



export default SignUpPage;

export { SignUpForm, SignUpLink };
