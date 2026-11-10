
import { useState } from 'react';

const DiscountCalculator = ({ productName, price }) => {

  const [discount, setDiscount] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(null);

  const calculateDiscount = () => {
    const finalPrice =
      Number(price) - (Number(price) * Number(discount) / 100);

    setDiscountedPrice(finalPrice.toFixed(2));
  };

  return (
    <div>
      <h2>{productName}</h2>

      <p>Original Price: £{price}</p>

      <label>Enter Discount Percentage (%): </label>

      <input
        type="number"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateDiscount}>
        Calculate Discount
      </button>

      {discountedPrice !== null && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          Discounted Price: £{discountedPrice}
        </p>
      )}
    </div>
  );
};

export default DiscountCalculator;
