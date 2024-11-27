export const getLongestComment = (question, setLongestComment) => {
  let longest = null;
  let maxLength = 0;
  question.options.forEach((option) => {
    if (option.comment && option.comment.length > maxLength) {
      maxLength = option.comment.length;
      longest = option;
    }
  });
  setLongestComment(longest);
};
