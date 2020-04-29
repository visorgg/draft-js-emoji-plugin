import emojione from 'emojione';

import SUPPORTED_EMOJIS from "../constants/supportedEmojis";

const getMayhemEmojis = () => {
  return (
    Object.keys(emojione.emojioneList)
      .filter(key => SUPPORTED_EMOJIS.includes(emojione.toShort(key)))
      .reduce((obj, key) => {
        obj[key] = emojione.emojioneList[key];
        return obj;
      }, {})
  );
};

const MAYHEM_EMOJIS = getMayhemEmojis();

export default {
  ...emojione,
  emojioneList: MAYHEM_EMOJIS,
};
