import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { TicketDisplay } from './TicketDisplay';

export const ExhibitionDetails = () => {
  const { id } = useParams();

  const url = `https://api.harvardartmuseums.org/exhibition/${id}/?apikey=${process.env.REACT_APP_API_KEY}`;

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
    <div className="expo-description">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <TicketDisplay />
    </div>
  );
};
