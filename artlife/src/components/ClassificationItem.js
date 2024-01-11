import React from 'react';

export const ClassificationItem = ({ classification, handleClick }) => {
  return (
    <li className="item" onClick={() => handleClick(classification)}>
      {classification.name}
    </li>
  );
};
