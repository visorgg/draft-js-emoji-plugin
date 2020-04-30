import findWithRegex from 'find-with-regex';
import mayhemEmoji from './utils/mayhemEmoji';

const unicodeRegex = mayhemEmoji.unicodeRegexp;

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(unicodeRegex, contentBlock, callback);
};
