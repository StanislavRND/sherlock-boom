import { useState } from 'react';
import question from '../lastquestion.json';

export const LastQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (optionId) => {
    const selected = question.options.find((option) => option.id === optionId);
    setSelectedOption(selected);
  };

  return (
    <div style={{ marginTop: '70px', display: 'flex', justifyContent: 'center' }}>
      <div className="question">
        <h1
          style={{ textAlign: 'center', fontWeight: '800', color: '#cb1d1d' }}
          className="question__title">
          {question.title}
        </h1>
        <div className="question__options">
          {question.options.map((option) => {
            const isSelected = selectedOption?.id === option.id;
            const isCorrect = option.id === question.correctAnswerId;
            const textColor = isSelected ? (isCorrect ? 'green' : 'red') : '#333333';
            const borderColor = isSelected ? (isCorrect ? 'green' : 'red') : '#333333';

            return (
              <div key={option.id} className="question__option-1">
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <input
                    type="radio"
                    checked={isSelected}
                    onChange={() => handleSelect(option.id)}
                    className="question__checkbox-input"
                    id={`option-${option.id}`}
                    name="killer"
                  />
                  <label
                    htmlFor={`option-${option.id}`}
                    className="question__custom-checkbox"
                    style={{
                      backgroundColor: isSelected ? (isCorrect ? 'green' : 'red') : '#e3ceb8',
                      borderColor: isSelected ? (isCorrect ? 'green' : 'red') : 'black',
                    }}></label>
                  <span className="question__label" style={{ color: textColor }}>
                    {option.text}
                  </span>
                </div>

                {isSelected && option.comment && (
                  <div
                    className="question__comment"
                    style={{ color: textColor, border: `3px solid ${borderColor}` }}>
                    {option.comment}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
