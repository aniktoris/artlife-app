import React, { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import ArtCard from './ArtCard';

export const ArtList = ({ url }) => {
  const { data, loading, error, fetchData } = useFetch(url);

  useEffect(() => {
    const fetchDataAsync = async () => {
      await fetchData();
    };

    fetchDataAsync();
  }, [url]);

  return (
    <div className="card-list">
      {loading ? (
        <p className="loading">Loading some beautiful arts for you...</p>
      ) : error ? (
        <p>Error occurred while fetching data.</p>
      ) : (
        data.map((art) => <ArtCard art={art} key={art.id} />)
      )}
    </div>
  );
};
