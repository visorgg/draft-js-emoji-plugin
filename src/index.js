import React from 'react';
import { Map, List } from 'immutable';
import keys from 'lodash/keys';
import { EditorState } from 'draft-js';
import Emoji from './components/Emoji';
import EmojiSuggestions from './components/EmojiSuggestions';
import EmojiSuggestionsPortal from './components/EmojiSuggestionsPortal';
import emojiStrategy from './emojiStrategy';
import emojiSuggestionsStrategy from './emojiSuggestionsStrategy';
import attachImmutableEntitiesToEmojis from './modifiers/attachImmutableEntitiesToEmojis';
import defaultPositionSuggestions from './utils/positionSuggestions';
import emojiList from './utils/emojiList';
import addEmoji from './modifiers/addEmoji';

import { defaultTheme } from './theme.js';

import {
  clearEmojiList,
  mergeEmojiList,
  setCustomEmojiMap,
  setCustomEmojiHandler,
  setEmojiImagePathGetter,
  setShortNameGetter,
} from "./utils/mayhemEmoji";

export { defaultTheme };

const defaultImagePath = '//twemoji.maxcdn.com/svg/'; // Update to point to twitter emoji by default
const defaultImageType = 'svg';
const defaultCacheBustParam = '?v=1.0.0'; // We are now on version 1.0.0 of our emojis.

// TODO activate/deactivate different the conversion or search part

export default (config = {}) => {
  const callbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    handleReturn: undefined,
    onChange: undefined,
  };

  const ariaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: false,
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined,
  };

  let searches = Map();
  let escapedSearch;
  let clientRectFunctions = Map();

  const store = {
    getEditorState: undefined,
    setEditorState: undefined,
    getPortalClientRect: offsetKey => clientRectFunctions.get(offsetKey)(),
    getAllSearches: () => searches,
    isEscaped: offsetKey => escapedSearch === offsetKey,
    escapeSearch: offsetKey => {
      escapedSearch = offsetKey;
    },

    resetEscapedSearch: () => {
      escapedSearch = undefined;
    },

    register: offsetKey => {
      searches = searches.set(offsetKey, offsetKey);
    },

    updatePortalClientRect: (offsetKey, func) => {
      clientRectFunctions = clientRectFunctions.set(offsetKey, func);
    },

    unregister: offsetKey => {
      searches = searches.delete(offsetKey);
      clientRectFunctions = clientRectFunctions.delete(offsetKey);
    },
  };

  // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.
  const {
    theme = defaultTheme,
    imagePath = defaultImagePath,
    imageType = defaultImageType,
    allowImageCache,
    positionSuggestions = defaultPositionSuggestions,
    priorityList,
    selectGroups,
    selectButtonContent,
    toneSelectOpenDelay,
    useNativeArt,
    customEmojiMap = {},
    customEmojiHandler,
    emojiListOverride,
    getImagePathForEmoji,
    shortNameGetter,
    unicodeGetter,
    expose,
  } = config;

  const cacheBustParam = allowImageCache ? '' : defaultCacheBustParam;

  // Update the name getter if possible, this allows us to define what name to use for this image.
  if (getImagePathForEmoji) {
    setEmojiImagePathGetter(getImagePathForEmoji);
  }

  if (shortNameGetter) {
    setShortNameGetter(shortNameGetter);
  }

  // Adjust the plugin to accept an emoji list to merge.
  if (emojiListOverride) {
    mergeEmojiList(emojiListOverride);
  }

  if (customEmojiHandler) {
    setCustomEmojiHandler(customEmojiHandler);
  }

  if (unicodeGetter) emojiList.setUnicodeGetter(unicodeGetter);

  // Populate the emojiList
  emojiList.setPriorityList(priorityList || {});

  // Expose some of this plugins state to the invoker so that they can control some core pieces
  if (expose) {
    expose({
      modifiers: {
        addEmoji: addEmoji,
        attachImmutableEntitiesToEmojis: attachImmutableEntitiesToEmojis,
      },
      setCustomEmojiMap: setCustomEmojiMap,
      setPriorityList: emojiList.setPriorityList,
      setShortNameGetter: setShortNameGetter,
      clearEmojiList: clearEmojiList,
      mergeEmojiList: mergeEmojiList,
    });
  }

  const suggestionsProps = {
    ariaProps,
    cacheBustParam,
    callbacks,
    imagePath,
    imageType,
    theme,
    store,
    positionSuggestions,
    shortNames: List(keys(emojiList.list)),
    useNativeArt,
  };
  const selectProps = {
    cacheBustParam,
    imagePath,
    imageType,
    theme,
    store,
    selectGroups,
    selectButtonContent,
    toneSelectOpenDelay,
    useNativeArt,
  };
  const DecoratedEmojiSuggestions = props => (
    <EmojiSuggestions {...props} {...suggestionsProps} />
  );
  const DecoratedEmoji = props => (
    <Emoji
      {...props}
      theme={theme}
      imagePath={imagePath}
      imageType={imageType}
      cacheBustParam={cacheBustParam}
      useNativeArt={useNativeArt}
    />
  );
  const DecoratedEmojiSuggestionsPortal = props => (
    <EmojiSuggestionsPortal {...props} store={store} />
  );
  return {
    EmojiSuggestions: DecoratedEmojiSuggestions,
    decorators: [
      {
        strategy: emojiStrategy,
        component: DecoratedEmoji,
      },
      {
        strategy: emojiSuggestionsStrategy,
        component: DecoratedEmojiSuggestionsPortal,
      },
    ],
    getAccessibilityProps: () => ({
      role: 'combobox',
      ariaAutoComplete: 'list',
      ariaHasPopup: ariaProps.ariaHasPopup,
      ariaExpanded: ariaProps.ariaExpanded,
      ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
      ariaOwneeID: ariaProps.ariaOwneeID,
    }),

    initialize: ({ getEditorState, setEditorState }) => {
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },

    keyBindingFn: keyboardEvent =>
      callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent),
    handleReturn: keyboardEvent =>
      callbacks.handleReturn && callbacks.handleReturn(keyboardEvent),
    onChange: editorState => {
      let newEditorState = attachImmutableEntitiesToEmojis(editorState);

      if (
        !newEditorState
          .getCurrentContent()
          .equals(editorState.getCurrentContent())
      ) {
        // Forcing the current selection ensures that it will be at it's right place.
        // This solves the issue where inserting an Emoji on OSX with Apple's Emoji
        // selector led to the right selection the data, but wrong position in
        // the contenteditable.
        newEditorState = EditorState.forceSelection(
          newEditorState,
          newEditorState.getSelection()
        );
      }

      if (callbacks.onChange) return callbacks.onChange(newEditorState);
      return newEditorState;
    },
  };
};
