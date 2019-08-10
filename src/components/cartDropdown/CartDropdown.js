import React from 'react';
import CustomButton from '../customButton/CustomButton';
import './CartDropdown.scss';
import { connect } from 'react-redux';
import CartItem from '../cartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
