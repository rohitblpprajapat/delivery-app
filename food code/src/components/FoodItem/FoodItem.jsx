import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './FoodItem.css';
import { assets } from '../../assests/assests/assets';
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ _id, name, price, description, image }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);
  const itemCount = cartItems[_id] || 0;

  return (
    <div className='food-item'>
      <div className="food-item-image-container">
        <img className='food-item-image' src={image} alt="" />
        {!itemCount
          ? (<img className='add' onClick={() => addToCart(_id)} src={assets.add_icon_white} alt="" />)
          : (<div className='food-item-counter'>
              <img onClick={() => removeFromCart(_id)} src={assets.remove_icon_red} alt="" />
              <p>{itemCount}</p>
              <img onClick={() => addToCart(_id)} src={assets.add_icon_green} alt="" />
            </div>
          )}
      </div>
      <div className='food-item-info'>
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

FoodItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodItem;