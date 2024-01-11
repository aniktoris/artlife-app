import React from 'react';
import { ClassificationItem } from './ClassificationItem';

export const ClassificationList = ({
  classifications,
  handleClick,
  selectedClassification,
}) => {
  return (
    <ul className="list">
      {classifications.slice(0, 10).map((classification, index) => {
        return (
          <ClassificationItem
            key={index}
            classification={classification}
            selectedClassification={selectedClassification}
            handleClick={handleClick}
          />
        );
      })}
    </ul>
  );
};
