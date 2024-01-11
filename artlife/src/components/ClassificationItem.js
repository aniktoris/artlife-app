import React from 'react';

export const ClassificationItem = ({
  classification,
  handleClick,
  selectedClassification,
}) => {
  return (
    <li
      className={`item ${
        classification.name === selectedClassification ? 'clicked' : ''
      }`}
      onClick={() => handleClick(classification)}
    >
      {classification.name}
    </li>
  );
};
