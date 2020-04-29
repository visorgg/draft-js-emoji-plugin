import findWithRegex from 'find-with-regex';
import mayhemEmojione from './utils/mayhemEmojione';

const unicodeRegex = new RegExp(mayhemEmojione.unicodeRegexp, 'g');

export default (contentBlock: Object, callback: Function) => {
  findWithRegex(unicodeRegex, contentBlock, callback);
};
