import React, { useContext, useState } from 'react';
import ArtCard from './ArtCard';
import { useFetch } from '../hooks/useFetch';
import { MuseumContext } from '../context/GlobalState';

export const SearchArts = () => {
  const [query, setQuery] = useState('');

  const url = `https://api.harvardartmuseums.org/object/?apikey=${process.env.REACT_APP_API_KEY}&size=9&hasimage=1&person=any&sort=random&q=classification:'${query}'`;

  const { data, loading, error, fetchData } = useFetch(url);
  const { darkMode } = useContext(MuseumContext);

  const searchArts = async (e) => {
    e.preventDefault();
    await fetchData();
  };

  return (
    <>
      <form className="form" onSubmit={searchArts}>
        <label className={darkMode ? 'dark' : ''} htmlFor="query">
          Art Classification
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. paintings"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className={darkMode ? 'dark' : ''} type="submit">
          SEARCH
        </button>
      </form>
      <div className="card-list">
        {loading ? (
          <p className="loading">Loading some beautiful arts for you...</p>
        ) : error ? (
          <p>Error occurred while fetching data.</p>
        ) : (
          data.map((art) => <ArtCard art={art} key={art.id} />)
        )}
      </div>
    </>
  );
};
