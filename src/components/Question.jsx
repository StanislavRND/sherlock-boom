import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import notion from '../../public/notion1.png';
import { getLongestComment } from '../libs/longestComment';
import { getBorderColor, getCheckboxColor, getTextColor } from './../libs/getStyles';

export const Question = ({ question, selectedOptions, handleSelect }) => {
  const [longestComment, setLongestComment] = useState(null);

  useEffect(() => {
    getLongestComment(question, setLongestComment);
  }, [question.options]);

  const handleCheckboxChange = (questionId, optionText, optionComment) => {
    handleSelect(questionId, optionText, optionComment);
  };

  return (
    <div className="block" style={{ position: 'relative' }}>
      <img className="notion" src={notion} alt="Notion" />
      <div className="question" style={{ position: 'relative', zIndex: 2 }}>
        <h3 className="question__title">
          <div className="question__title-margin">
            <div>{question.id}.</div>
            <div>{question.title}</div>
          </div>
        </h3>
        <div className="question__options">
          {question.options.map((option, index) => {
            const isSelected = selectedOptions[question.id]?.text === option.text;
            const isLongest = longestComment && longestComment.text === option.text;

            const textColor = getTextColor(question, isSelected, isLongest, index);
            const borderColor = getBorderColor(question, isSelected, isLongest, index);
            const checkboxColor = getCheckboxColor(question, isSelected, isLongest, index);

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
                      backgroundColor: checkboxColor,
                      borderColor: borderColor,
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
    </div>
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
