import React from 'react';

import { Link, withRouter } from 'react-router-dom';
import { auth, db } from '../firebase';
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

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends React.Component {
  constructor(props){
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (e) => {
    const { username, email, passwordOne } = this.state;
    const { history } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });
    e.preventDefault();
  }

  render(){
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

    return (
      <form onSubmit={this.onSubmit}>
      <input
          value={username}
          onChange={e => this.setState(byPropKey('username', e.target.value))}
          type="text"
          placeholder="Full Name"
          />
          <input
            value={email}
            onChange={e => this.setState(byPropKey('email', e.target.value))}
            type="text"
            placeholder="Email Address"
          />
          <input
            value={passwordOne}
            onChange={e => this.setState(byPropKey('passwordOne', e.target.value))}
            type="password"
            placeholder="Password"
          />
          <input
            value={passwordTwo}
            onChange={e => this.setState(byPropKey('passwordTwo', e.target.value))}
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
    Don&apos;t have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>



export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
