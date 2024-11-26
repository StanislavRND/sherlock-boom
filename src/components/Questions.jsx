import React from 'react';
import data from '../data.json';
import { Question } from './Question';

export const Questions = () => {
  const [selectedOptions, setSelectedOptions] = React.useState({});

  const handleSelect = (questionId, optionText, optionComment) => {
    setSelectedOptions((prevSelected) => ({
      ...prevSelected,
      [questionId]: { text: optionText, comment: optionComment },
    }));
  };

  return (
    <div className="questions">
      {data.map((question) => (
        <Question
          key={question.id}
          question={question}
          handleSelect={handleSelect}
          selectedOptions={selectedOptions}
        />
      ))}
    </div>
  );
};
