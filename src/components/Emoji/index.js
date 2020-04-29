import React from 'react';
import clsx from 'clsx';
import mayhemEmojione from '../../utils/mayhemEmojione';

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
  const shortName = mayhemEmojione.toShort(decoratedText);

  let emojiDisplay = null;
  if (useNativeArt === true) {
    emojiDisplay = (
      <span title={mayhemEmojione.toShort(decoratedText)}>{props.children}</span>
    );
  } else {
    // short name to image url code steal from emojione source code
    const shortNameForImage =
      mayhemEmojione.emojioneList[shortName].unicode[
      mayhemEmojione.emojioneList[shortName].unicode.length - 1
      ];
    const backgroundImage = `url(${imagePath}${shortNameForImage}.${imageType}${cacheBustParam})`;
    const combinedClassName = clsx(theme.emoji, className);

    emojiDisplay = (
      <span
        className={combinedClassName}
        title={mayhemEmojione.toShort(decoratedText)}
        style={{ backgroundImage }}
      >
        {props.children}
      </span>
    );
  }

  return emojiDisplay;
};

export default Emoji;
