import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  // Stripe is using cent as default value to taking. So to convert USD to Cent for submit to strip
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_kdSBWbM5ft6YxONntH1A1g0k00MItiq3Js';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <div>
      <StripeCheckout
        label='Place your order'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel={`Process payment $${price}`}
        // submit callback
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeButton;
