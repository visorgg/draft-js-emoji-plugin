const MAYHEM_EMOJI = {
  unicodeRegexp: new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(?:\uD83C\uDFF3)\uFE0F?\u200D?(?:\uD83C\uDF08)|(?:\uD83D\uDC41)\uFE0F?\u200D?(?:\uD83D\uDDE8)\uFE0F?|[#-9]\uFE0F?\u20E3|(?:(?:\uD83C\uDFF4)(?:\uDB40[\uDC60-\uDCFF]){1,6})|(?:\uD83C[\uDDE0-\uDDFF]){2}|(?:(?:\uD83D[\uDC68\uDC69]))\uFE0F?(?:\uD83C[\uDFFA-\uDFFF])?\u200D?(?:[\u2695\u2696\u2708]|\uD83C[\uDF3E-\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83D[\uDC68\uDC69]|\uD83E[\uDDD0-\uDDDF])(?:\uD83C[\uDFFA-\uDFFF])?\u200D?[\u2640\u2642\u2695\u2696\u2708]?\uFE0F?|(?:(?:\u2764|\uD83D[\uDC66-\uDC69\uDC8B])[\u200D\uFE0F]{0,2}){1,3}(?:\u2764|\uD83D[\uDC66-\uDC69\uDC8B])|(?:(?:\u2764|\uD83D[\uDC66-\uDC69\uDC8B])\uFE0F?){2,4}|(?:\uD83D[\uDC68\uDC69\uDC6E\uDC71-\uDC87\uDD75\uDE45-\uDE4E]|\uD83E[\uDD26\uDD37]|\uD83C[\uDFC3-\uDFCC]|\uD83E[\uDD38-\uDD3E]|\uD83D[\uDEA3-\uDEB6]|\u26f9|\uD83D\uDC6F)\uFE0F?(?:\uD83C[\uDFFB-\uDFFF])?\u200D?[\u2640\u2642]?\uFE0F?|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85-\uDFCC]|\uD83D[\uDC42-\uDCAA\uDD74-\uDD96\uDE45-\uDE4F\uDEA3-\uDECC]|\uD83E[\uDD18-\uDD3E])\uFE0F?(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u2194-\u2199\u21a9-\u21aa]\uFE0F?|[\u0023\u002a]|[\u3030\u303d]\uFE0F?|(?:\ud83c[\udd70-\udd71]|\ud83c\udd8e|\ud83c[\udd91-\udd9a])\uFE0F?|\u24c2\uFE0F?|[\u3297\u3299]\uFE0F?|(?:\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51])\uFE0F?|[\u203c\u2049]\uFE0F?|[\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe]\uFE0F?|[\u00a9\u00ae]\uFE0F?|[\u2122\u2139]\uFE0F?|\ud83c\udc04\uFE0F?|[\u2b05-\u2b07\u2b1b-\u2b1c\u2b50\u2b55]\uFE0F?|[\u231a-\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa]\uFE0F?|\ud83c\udccf|[\u2934\u2935]\uFE0F?)|[\u2700-\u27bf]\uFE0F?|[\ud800-\udbff][\udc00-\udfff]\uFE0F?|[\u2600-\u26FF]\uFE0F?|[\u0030-\u0039]\uFE0F", "g"),
  toShort: str => str,
  getShortnameFromEmoji: () => "",
  emojiList: {},
};

export const mergeEmojiList = (emojiList) => {
  Object.assign(MAYHEM_EMOJI, { emojiList });
};

export const clearEmojiList = () => {
  Object.keys(MAYHEM_EMOJI).forEach(function(key) { delete object[key]; });
};

export const setEmojiImageNameGetter = (callback) => {
  Object.assign(MAYHEM_EMOJI, {
    getShortnameFromEmoji: callback,
  });
};

export const setShortNameGetter = (callback) => {
  Object.assign(MAYHEM_EMOJI, { toShort: callback });
};

export default MAYHEM_EMOJI;
