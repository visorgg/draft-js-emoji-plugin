const MAYHEM_EMOJIONE = {
  toShort: str => str,
  getShortnameFromEmoji: () => "",
  emojiList: {},
};

export const mergeEmojiList = (emojiList) => {
  Object.assign(MAYHEM_EMOJIONE, { emojiList });
};

export const clearEmojiList = () => {
  Object.keys(MAYHEM_EMOJIONE).forEach(function(key) { delete object[key]; });
};

export const setEmojiImageNameGetter = (callback) => {
  Object.assign(MAYHEM_EMOJIONE, {
    getShortnameFromEmoji: callback,
  });
};

export const setShortNameGetter = (callback) => {
  Object.assign(MAYHEM_EMOJIONE, { toShort: callback });
};

export default MAYHEM_EMOJIONE;
