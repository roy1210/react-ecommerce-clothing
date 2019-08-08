import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
// import {auth} from

import './Header.scss';
// {ReactComponent as Logo}: Special components as `Logo` keyword
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option'>SHOP</Link>
        <Link className='option'>CONTACT</Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
