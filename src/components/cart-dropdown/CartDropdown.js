import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      {/* `history.push` instead of `<Link>` because using `<CustomButton>` */}
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        Go TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// Work even not writing `mapDispatchToProps` because `connect` automatically pass the `dispatch` if there is no second args in `connect`.
export default withRouter(connect(mapStateToProps)(CartDropdown));
