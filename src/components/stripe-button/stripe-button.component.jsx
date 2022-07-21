import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51LMmkiSBniLzHPbBryTFq7PY2eVx2bjBDHYzD3Mllb2pP7bGhSEOk8hzRner20UES0tHxuGSQ3JxqBBKVFtm1G6Q00y43xAuL8";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token = {onToken}
      stripeKey = {publishableKey}
    />
  );
};

export default StripeCheckoutButton;
