import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Museum } from './Museum';
import { useContext } from 'react';
import { MuseumContext } from '../context/GlobalState';

export default function ArtCard({ art }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { pathname } = useLocation();
  const id = art.id.toString();

  const renderMuseum = pathname === '/arts' || pathname === '/artlist';

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      setImageLoaded(false);
    };
    img.src = art.primaryimageurl;
  }, [art.primaryimageurl]);

  const { favorites, addFavorites, deleteFavorites } =
    useContext(MuseumContext);

  const isFavorite = favorites.includes(id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      deleteFavorites(id);
    } else {
      addFavorites(id);
    }
  };

  return (
    <div className="card">
      {renderMuseum && (
        <Museum
          handleFavoriteClick={handleFavoriteClick}
          isFavorite={isFavorite}
        />
      )}
      <NavLink className="card-container" to={`/${art.id}`}>
        {imageLoaded ? (
          <img
            className="card--image"
            src={art.primaryimageurl}
            alt={art.title}
          />
        ) : null}
        <h3 className="card--title">{art.title}</h3>
      </NavLink>
      <p>
        <small>DATED: {art.dated}</small>
      </p>
      <p>
        <small>ARTIST: {art.people[0].name}</small>
      </p>
    </div>
  );
}
