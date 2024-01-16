import React, { useState } from 'react';
import museumEmpty from '../assets/museum-empty.png';
import museumSolid from '../assets/museum-solid.png';

export const Museum = ({ handleFavoriteClick, isFavorite }) => {
  const [museum, setMuseum] = useState(isFavorite ? museumSolid : museumEmpty);

  const handleClick = () => {
    const newMuseum = museum === museumEmpty ? museumSolid : museumEmpty;
    setMuseum(newMuseum);
    handleFavoriteClick();
  };

  return (
    <img
      src={museum}
      alt="Museum icon"
      className="icon"
      onClick={handleClick}
    />
  );
};
