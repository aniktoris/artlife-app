import React, { useContext, useState, useEffect } from 'react';
import { MuseumContext } from '../context/GlobalState';
import ArtCard from './ArtCard';

export const FavArtList = () => {
  const { favorites } = useContext(MuseumContext);
  const [favoritesArts, setFavoriteArts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchArts = async () => {
      setLoading(true);
      try {
        const fetches = favorites.map(async (favoriteId) => {
          const res = await fetch(
            `https://api.harvardartmuseums.org/object/${favoriteId}/?apikey=${process.env.REACT_APP_API_KEY}`,
          );
          if (!res.ok) {
            throw new Error(`Failed to fetch. Status code: ${res.status}`);
          }
          const data = await res.json();
          return data;
        });

        const artData = await Promise.all(fetches);
        setFavoriteArts(artData);
      } catch (err) {
        setError(true);
        console.error(`Error fetching arts: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchArts();
  }, [favorites]);

  return (
    <div className="card-list">
      {loading ? (
        <p className="loading">Loading some beautiful arts for you...</p>
      ) : error ? (
        <p>Error occurred while fetching data.</p>
      ) : (
        favoritesArts.map((art) => <ArtCard art={art} key={art.id} />)
      )}
    </div>
  );
};
