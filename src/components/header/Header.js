import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
// {ReactComponent as Logo}: Special components as `Logo` keyword
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option'>SHOP</Link>
        <Link className='option'>CONTACT</Link>
      </div>
    </div>
  );
};

export default Header;
