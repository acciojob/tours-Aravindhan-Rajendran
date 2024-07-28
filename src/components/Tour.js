// Tour.js
import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, onDelete }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="tour">
      <img src={image} alt={name} className="tour-image" />
      <h2 className="tour-name">{name}</h2>
      <p className="tour-info">
        {showMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={handleToggle} className="show-more-button">
          {showMore ? 'See less' : 'Show more'}
        </button>
      </p>
      <p className="tour-price">${price}</p>
      <button onClick={() => onDelete(id)} className="delete-button">Delete</button>
    </div>
  );
};

export default Tour;
