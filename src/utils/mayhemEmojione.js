import emojione from 'emojione';

import SUPPORTED_EMOJIS from "../constants/supportedEmojis";

const getMayhemEmojis = () => {
  return (
    Object.keys(emojione.emojioneList)
      .filter(key => SUPPORTED_EMOJIS.includes(key))
      .reduce((obj, key) => {
        obj[key] = emojione.emojioneList[key];
        return obj;
      }, {})
  );
};

const MAYHEM_EMOJIS = getMayhemEmojis();

export default {
  emojioneList: MAYHEM_EMOJIS,
  ...emojione,
};
