import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';

export const Question = ({ question, selectedOptions, handleSelect }) => {
  const [longestComment, setLongestComment] = useState(null);

  useEffect(() => {
    let longest = null;
    let maxLength = 0;
    question.options.forEach((option) => {
      if (option.comment && option.comment.length > maxLength) {
        maxLength = option.comment.length;
        longest = option;
      }
    });
    setLongestComment(longest);
  }, [question.options]);

  const handleCheckboxChange = (questionId, optionText, optionComment) => {
    handleSelect(questionId, optionText, optionComment);
  };

  return (
    <>
      <div key={question.id} className="question">
        <h3 className="question__title">
          <span style={{ marginRight: '10px' }}>{question.id}.</span> {question.title}
        </h3>
        <div className="question__options">
          {question.options.map((option) => {
            const isSelected = selectedOptions[question.id]?.text === option.text;
            const isLongest = longestComment && longestComment.text === option.text;
            const textColor = isSelected ? (isLongest ? 'green' : 'red') : '#333333';
            const borderColor = isSelected ? (isLongest ? 'green' : 'red') : '#333333';

            return (
              <div key={option.id} className="question__option">
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => handleCheckboxChange(question.id, option.text, option.comment)}
                    className="question__checkbox-input"
                    id={option.text}
                  />
                  <label
                    htmlFor={option.text}
                    className="question__custom-checkbox"
                    style={{
                      backgroundColor: isSelected ? (isLongest ? 'green' : 'red') : '#f3e4d4',
                      borderColor: isSelected ? (isLongest ? 'green' : 'red') : 'black',
                    }}></label>
                  <div className="question__label" style={{ color: textColor }}>
                    {option.text}
                  </div>
                </div>

                {isSelected && option.comment && (
                  <div
                    className="question__comment"
                    style={{ color: textColor, border: `3px solid ${borderColor}` }}>
                    {option.comment}
                    {question.id === 2 && option.id === 3 && (
                      <div className="questions__convert">Вы можете открыть конверт № 1!</div>
                    )}
                    {question.id === 4 && option.id === 1 && (
                      <div className="questions__convert">Вы можете открыть конверт № 2!</div>
                    )}
										{question.id === 5 && option.id === 4 && (
                      <div className="questions__convert">Вы можете открыть конверт № 3!</div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        comment: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
  selectedOptions: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
};
