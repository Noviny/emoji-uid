const emojis = require("./💯💯💯");

// 11 lists
// Emoji lists lengths [69, 66, 62, 116, 64, 96, 53, 118, 163, 16, 35];

const getEmoji = () => {
  let list = emojis[Math.floor(Math.random() * emojis.length)];

  return list[Math.floor(Math.random() * list.length)];
};

const getEmojis = (number = 3) => {
  let id = "";
  while (number > 0) {
    id = id + getEmoji();
    number--;
  }
  return id;
};

module.exports = getEmojis;
