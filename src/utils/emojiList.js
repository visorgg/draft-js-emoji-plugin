import mayhemEmojione from './mayhemEmojione';

const newEmojiListWithOutPriorityList = priorityList => {
  const list = {};
  for (const key in mayhemEmojione.emojioneList) {
    // eslint-disable-line no-restricted-syntax
    if (priorityList.hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      continue; // eslint-disable-line no-continue
    }
    list[key] = mayhemEmojione.emojioneList[key].unicode;
  }

  return { ...priorityList, ...list };
};

const emojiList = {};

emojiList.setPriorityList = newPriorityList => {
  // re-generate emojiList when set PriorityList
  emojiList.list = newEmojiListWithOutPriorityList(newPriorityList);
};

export default emojiList;
