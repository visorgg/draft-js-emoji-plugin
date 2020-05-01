import mayhemEmoji from './mayhemEmoji';

const DEFAULT_UNICODE_GETTER = emoji => emoji.unicode;

const newEmojiListWithOutPriorityList = (priorityList, unicodeGetter = DEFAULT_UNICODE_GETTER) => {
  const list = {};

  for (const key in mayhemEmoji.emojiList) {
    // eslint-disable-line no-restricted-syntax
    if (priorityList.hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      continue; // eslint-disable-line no-continue
    }
    list[key] = unicodeGetter(mayhemEmoji.emojiList[key]);
  }

  return { ...priorityList, ...list };
};

const emojiList = {
  list: {},
  unicodeGetter: DEFAULT_UNICODE_GETTER,
};

emojiList.setPriorityList = newPriorityList => {
  // re-generate emojiList when set PriorityList
  emojiList.list = newEmojiListWithOutPriorityList(newPriorityList, emojiList.unicodeGetter);
};

emojiList.setUnicodeGetter = unicodeGetter => {
  emojiList.unicodeGetter = unicodeGetter;
};

export default emojiList;
