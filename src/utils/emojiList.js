import mayhemEmoji from './mayhemEmoji';

const newEmojiListWithOutPriorityList = priorityList => {
  const list = {};
  for (const key in mayhemEmoji.emojiList) {
    // eslint-disable-line no-restricted-syntax
    if (priorityList.hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      continue; // eslint-disable-line no-continue
    }
    list[key] = mayhemEmoji.emojiList[key].unicode;
  }

  return { ...priorityList, ...list };
};

const emojiList = {};

emojiList.setPriorityList = newPriorityList => {
  // re-generate emojiList when set PriorityList
  emojiList.list = newEmojiListWithOutPriorityList(newPriorityList);
};

export default emojiList;
