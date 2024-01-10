import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ArtCard({ art }) {
  const [imageLoaded, setImageLoaded] = useState(false);

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

  return (
    <div className="card">
      <Link to={`/${art.id}`}>
        {imageLoaded ? (
          <img
            className="card--image"
            src={art.primaryimageurl}
            alt={art.title}
          />
        ) : null}
        <h3 className="card--title">{art.title}</h3>
      </Link>
      <p>
        <small>DATED: {art.dated}</small>
      </p>
      <p>
        <small>ARTIST: {art.people[0].name}</small>
      </p>
    </div>
  );
}
