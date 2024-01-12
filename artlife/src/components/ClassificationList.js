import React, { useContext } from 'react';
import { ClassificationItem } from './ClassificationItem';
import { MuseumContext } from '../context/GlobalState';

export const ClassificationList = ({
  classifications,
  handleClick,
  selectedClassification,
}) => {
  const { darkMode } = useContext(MuseumContext);

  return (
    <ul className={`list ${darkMode ? 'dark' : ''}`}>
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
