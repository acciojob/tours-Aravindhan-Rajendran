// src/Tour.js
import React, { useState } from 'react';

const Tour = ({ tour, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="tour-item">
      <h2>{tour.name}</h2>
      <img src={tour.image} alt={tour.name} />
      <p id={`tour-item-para-${tour.id}`}>
        {isExpanded ? tour.info : `${tour.info.substring(0, 200)}...`}
      </p>
      <button
        id={`see-more-${tour.id}`}
        onClick={handleToggle}
      >
        {isExpanded ? 'Show less' : 'See more'}
      </button>
      <button
        id={`delete-btn-${tour.id}`}
        onClick={() => onDelete(tour.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Tour;
