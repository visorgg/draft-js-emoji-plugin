import React, {
  // PropTypes,
  Component,
} from 'react';
import mayhemEmoji from '../../../utils/mayhemEmoji';
import emojiList from '../../../utils/emojiList';
import convertShortNameToUnicode from '../../../utils/convertShortNameToUnicode';

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.mouseDown = false;
  }

  componentDidUpdate() {
    this.mouseDown = false;
  }

  onMouseUp = () => {
    if (this.mouseDown) {
      this.mouseDown = false;
      this.props.onEmojiSelect(this.props.emoji);
    }
  };

  onMouseDown = event => {
    // Note: important to avoid a content edit change
    event.preventDefault();

    this.mouseDown = true;
  };

  onMouseEnter = () => {
    this.props.onEmojiFocus(this.props.index);
  };

  render() {
    const {
      theme = {},
      imagePath,
      imageType,
      cacheBustParam,
      useNativeArt,
      isFocused,
      id,
    } = this.props;
    const className = isFocused
      ? theme.emojiSuggestionsEntryFocused
      : theme.emojiSuggestionsEntry;

    let emojiDisplay = null;
    if (useNativeArt === true) {
      const unicode = emojiList.list[this.props.emoji];
      emojiDisplay = convertShortNameToUnicode(unicode);
    } else {
      // short name to image url code steal from emojione source code
      const emojiObj = mayhemEmoji.emojiList[this.props.emoji];
      const fullImagePath = mayhemEmoji.getImagePathForEmoji(emojiObj);

      emojiDisplay = (
        <img
          src={fullImagePath}
          className={theme.emojiSuggestionsEntryIcon}
          role="presentation"
        />
      );
    }

    return (
      <div
        className={className}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        role="option"
        id={id}
        aria-selected={isFocused ? 'true' : null}
      >
        {emojiDisplay}
        <span className={theme.emojiSuggestionsEntryText}>
          {this.props.emoji}
        </span>
      </div>
    );
  }
}
