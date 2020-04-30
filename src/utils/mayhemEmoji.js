import unicodeRegexp from "../constants/unicodeRegexp";

const MAYHEM_EMOJI = {
  unicodeRegexp: unicodeRegexp,
  toShort: str => str,
  getImagePathForEmoji: () => "",
  emojiList: {},
};

export const mergeEmojiList = (emojiList) => {
  Object.assign(MAYHEM_EMOJI, { emojiList });
};

export const clearEmojiList = () => {
  Object.keys(MAYHEM_EMOJI).forEach(function(key) { delete object[key]; });
};

export const setShortNameGetter = (callback) => {
  Object.assign(MAYHEM_EMOJI, { toShort: callback });
};

export const setEmojiImagePathGetter = (callback) => {
  Object.assign(MAYHEM_EMOJI, { getImagePathForEmoji: callback });
};

export default MAYHEM_EMOJI;
