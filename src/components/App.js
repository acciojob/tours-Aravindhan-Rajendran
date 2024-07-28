// App.js
import React, { useState, useEffect } from 'react';
import Tours from './Tours';
import Loading from './Loading';
import ../styles/App.css
const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://api.example.com/tours'); // Replace with your API URL
        const data = await response.json();
        setTours(data);
      } catch (error) {
        console.error('Error fetching tours:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const handleDeleteTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <div className="app">
      {loading ? (
        <Loading />
      ) : tours.length === 0 ? (
        <div className="no-tours">
          <p>No tours left</p>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      ) : (
        <Tours tours={tours} onDelete={handleDeleteTour} />
      )}
    </div>
  );
};

export default App;
