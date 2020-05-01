import findWithRegex from 'find-with-regex';
import mayhemEmoji from './utils/mayhemEmoji';

const unicodeRegex = new RegExp(mayhemEmoji.unicodeRegexp, 'g');

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(unicodeRegex, contentBlock, callback);
};
