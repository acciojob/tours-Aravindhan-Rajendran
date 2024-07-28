// Tours.js
import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, onDelete }) => {
  return (
    <div className="tours">
      {tours.map(tour => (
        <Tour
          key={tour.id}
          id={tour.id}
          name={tour.name}
          info={tour.info}
          image={tour.image}
          price={tour.price}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Tours;
