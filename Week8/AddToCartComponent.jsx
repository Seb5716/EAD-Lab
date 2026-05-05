import { useState } from 'react';

function AddToCartComponent({itemValue,cv}) {
  const [cartvalue, setCartValue] = useState(cv);

  return (
    <div>
      <button onClick={() => setCartValue(cartvalue + itemValue)}> Add to Cart</button>
      <button onClick={() => setCartValue(Math.max(0, cartvalue - itemValue))}>Remove from Cart </button>
    </div>
  );
}

export default AddToCartComponent;