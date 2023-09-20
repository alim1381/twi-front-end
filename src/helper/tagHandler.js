const tagHandler = (text) => {
  const words = text.split(" ");
  let finalText = "";
  words.map((w) => {
    if (w.search("#") === 0) {
      const tag = ` <a href="/tag/${
        w.split("#")[1]
      }" class="text-blue-400">${w}</a> `;
      finalText += tag;
    } else {
      finalText += ` ${w} `;
    }
  });
  return finalText;
};
export { tagHandler };
