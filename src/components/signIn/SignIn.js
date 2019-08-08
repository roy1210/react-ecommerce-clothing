import React, { Component } from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    // [name] : if `name = password/email`, then [name] is password/email. Dynamic change
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Email'
            required
          />

          <FormInput
            name='password'
            type='password'
            handleChange={this.handleChange}
            value={this.state.password}
            label='Password'
            required
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
