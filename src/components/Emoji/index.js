import React from 'react';
import clsx from 'clsx';
import mayhemEmoji from '../../utils/mayhemEmoji';

const Emoji = ({
  theme = {},
  cacheBustParam,
  imagePath,
  imageType,
  className,
  decoratedText,
  useNativeArt,
  ...props
}) => {
  const shortName = mayhemEmoji.toShort(decoratedText);

  let emojiDisplay = null;
  if (useNativeArt === true) {
    emojiDisplay = (
      <span title={mayhemEmoji.toShort(decoratedText)}>{props.children}</span>
    );
  } else {
    // short name to image url code steal from emojione source code
    const emojiObj = mayhemEmoji.emojiList[shortName];
    const shortNameForImage = mayhemEmoji.getShortnameFromEmoji(emojiObj);
    const backgroundImage = `url(${imagePath}${shortNameForImage}.${imageType}${cacheBustParam})`;
    const combinedClassName = clsx(theme.emoji, className);

    emojiDisplay = (
      <span
        className={combinedClassName}
        title={mayhemEmoji.toShort(decoratedText)}
        style={{ backgroundImage }}
      >
        {props.children}
      </span>
    );
  }

  return emojiDisplay;
};

export default Emoji;
