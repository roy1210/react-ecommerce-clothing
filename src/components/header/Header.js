import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

// {ReactComponent as Logo}: Special components as `Logo` keyword
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';

const Header = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// args: complex destructuring
// Redux: Json format
// ({ user: { currentUser }, cart: { hidden } }): Way to connect nested value.
// user => currentUser, cart => hidden
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  // currentUser: state.user.currentUser // If args only `state`
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
