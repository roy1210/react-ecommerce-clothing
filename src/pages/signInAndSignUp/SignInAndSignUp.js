import React from 'react';
import './SignInAndSignUp.scss';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';

const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
