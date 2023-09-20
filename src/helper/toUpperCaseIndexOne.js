const toUpperCaseIndexOne = (text) => {
  let newTitle = "";
  for (let i = 0; i < text.length; i++) {
    if (i === 0) {
      newTitle += text[i].toUpperCase();
    } else newTitle += text[i].toLowerCase();
  }
  return newTitle;
};
export { toUpperCaseIndexOne };
