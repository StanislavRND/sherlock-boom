import { useState } from 'react';
import notion from '../../public/notion1.png';
import question from '../lastquestion.json';

export const LastQuestion = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (optionId) => {
    const selected = question.options.find((option) => option.id === optionId);
    setSelectedOption(selected);
  };

  const getTextColor = (isSelected, isCorrect) => {
    if (isSelected) {
      return isCorrect ? 'green' : 'red';
    }
    return '#333333';
  };

  const getBorderColor = (isSelected, isCorrect) => {
    if (isSelected) {
      return isCorrect ? 'green' : 'red';
    }
    return '#333333';
  };

  return (
    <div style={{ position: 'relative', marginTop: '70px' }}>
      <img src={notion} alt="Notion" className="notion" />
      <div style={{ marginTop: '30px', position: 'relative', zIndex: 2 }}>
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

              const textColor = getTextColor(isSelected, isCorrect);
              const borderColor = getBorderColor(isSelected, isCorrect);

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
                        backgroundColor: isSelected ? (isCorrect ? 'green' : 'red') : '#D9CFC0',
                        borderColor: borderColor,
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
                      {question.id === 4 && option.id === 7 && (
                        <div className="questions__convert-black">
                          Пришло время открыть <span>ЧЁРНЫЙ КОНВЕРТ!</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
