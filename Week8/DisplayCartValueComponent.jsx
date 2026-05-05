import { useState } from 'react';

function DisplayCartValueComponent({cartvalue}) {

  return (
    <div>
        <p>Cart Value: {cartvalue}</p>
    </div>
  );
}

export default AddToCartComponent;