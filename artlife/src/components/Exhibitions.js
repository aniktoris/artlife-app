import React, { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import Exhibition from './Exhibition';
import { TicketDisplay } from './TicketDisplay';

export const Exhibitions = () => {
  const url = `https://api.harvardartmuseums.org/exhibition?apikey=${process.env.REACT_APP_API_KEY}&status=upcoming`;

  const { data, loading, fetchData } = useFetch(url);

  useEffect(() => {
    const fetchDataAsync = async () => {
      await fetchData();
    };

    fetchDataAsync();
  }, []);

  return loading ? (
    <p>Loading exhibition data for you...</p>
  ) : (
    <div>
      <h1 className="expo-title">UPCOMING EXHIBITIONS</h1>
      <div className="expo-container">
        {data.slice(1, 5).map((exhibition) => (
          <Exhibition exhibition={exhibition} key={exhibition.id} />
        ))}
      </div>
      <TicketDisplay />
    </div>
  );
};
