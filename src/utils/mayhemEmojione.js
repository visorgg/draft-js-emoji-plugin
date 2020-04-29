import emojione from 'emojione';

export const MAYHEM_EMOJI_CONFIG = {
  getShortnameFromEmoji: () => "",
};

const MAYHEM_EMOJIS = {};

export const mergeEmojiList = (emojiList) => {
  Object.assign(MAYHEM_EMOJIS, emojiList);
};

export const clearEmojiList = () => {
  Object.keys(MAYHEM_EMOJIS).forEach(function(key) { delete object[key]; });
};

export const setEmojiImageNameGetter = (callback) => {
  MAYHEM_EMOJI_CONFIG.getShortnameFromEmoji = callback;
};

export default {
  ...emojione,
  emojioneList: MAYHEM_EMOJIS,
};
