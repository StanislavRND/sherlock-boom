export const getTextColor = (question, isSelected, isLongest, index) => {
  if (isSelected && index === question.options.length - 1) {
    return '#5A5A5A';
  }
  return isSelected ? (isLongest ? 'green' : 'red') : '#333333';
};

export const getBorderColor = (question, isSelected, isLongest, index) => {
  if (isSelected && index === question.options.length - 1) {
    return '#5A5A5A';
  }
  return isSelected ? (isLongest ? 'green' : 'red') : '#333333';
};

export const getCheckboxColor = (question, isSelected, isLongest, index) => {
  if (isSelected && index === question.options.length - 1) {
    return '#5A5A5A';
  }
  return isSelected ? (isLongest ? 'green' : 'red') : '#D9CFC0';
};
