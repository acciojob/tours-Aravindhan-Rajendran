// src/Tour.js
import React, { useState } from 'react';

const Tour = ({ tour, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="tour">
      <h2>{tour.name}</h2>
      <img src={tour.image} alt={tour.name} />
      <p>
        {isExpanded ? tour.info : `${tour.info.substring(0, 200)}...`}
        <button onClick={handleToggle}>
          {isExpanded ? 'See less' : 'Show more'}
        </button>
      </p>
      <p>Price: ${tour.price}</p>
      <button onClick={() => onDelete(tour.id)} className="delete-button">Delete</button>
    </div>
  );
};

export default Tour;
