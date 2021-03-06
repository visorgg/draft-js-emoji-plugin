import React from 'react';
import { Map, List } from 'immutable';
import keys from 'lodash/keys';
import Emoji from './components/Emoji';
import EmojiSuggestions from './components/EmojiSuggestions';
import EmojiSuggestionsPortal from './components/EmojiSuggestionsPortal';
import emojiStrategy from './emojiStrategy';
import emojiSuggestionsStrategy from './emojiSuggestionsStrategy';
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
    priorityList,
    useNativeArt,
    customEmojiMap = {},
    customEmojiHandler,
    emojiListOverride,
    getImagePathForEmoji,
    shortNameGetter,
    unicodeGetter,
    expose,
    customEntryComponent,
  } = config;

  const theme = config.theme ? { ...defaultTheme, ...config.theme } : defaultTheme;

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
  setCustomEmojiMap(customEmojiMap);

  // Expose some of this plugins state to the invoker so that they can control some core pieces
  if (expose) {
    expose({
      modifiers: {
        addEmoji: addEmoji,
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
    callbacks,
    theme,
    store,
    shortNames: List(keys(emojiList.list)),
    useNativeArt,
    customEntryComponent,
  };

  const DecoratedEmojiSuggestions = props => (
    <EmojiSuggestions {...props} {...suggestionsProps} />
  );
  const DecoratedEmoji = props => (
    <Emoji
      {...props}
      theme={theme}
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
      if (callbacks.onChange) return callbacks.onChange(editorState);

      return editorState;
    },
  };
};
