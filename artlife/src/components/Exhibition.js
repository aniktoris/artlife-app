import React from 'react';
import { Link } from 'react-router-dom';

const Exhibition = ({ exhibition }) => {
  return (
    <div className="expo-container-div">
      <h2>{exhibition.title}</h2>
      <p>START DATE: {exhibition.begindate}</p>
      <p>END DATE: {exhibition.enddate}</p>
      <p>
        VENUE: {exhibition.venues[0].city}, {exhibition.venues[0].fullname}
      </p>
      <img
        className="expo-image"
        src={exhibition.primaryimageurl}
        alt={exhibition.title}
      />
      <p>
        <Link to={`/exhibitions/${exhibition.id}`}>Learn more</Link>
      </p>
    </div>
  );
};

export default Exhibition;
