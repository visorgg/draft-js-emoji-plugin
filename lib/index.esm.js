import React, { Component } from 'react';
import { Map, List } from 'immutable';
import keys from 'lodash-es/keys';
import { Modifier, EditorState, genKey, SelectionState } from 'draft-js';
import clsx from 'clsx';
import findWithRegex from 'find-with-regex';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var unicodeRegexp = "\\uD83C\\uDFF4\\uDB40\\uDC67\\uDB40\\uDC62(?:\\uDB40\\uDC77\\uDB40\\uDC6C\\uDB40\\uDC73|\\uDB40\\uDC73\\uDB40\\uDC63\\uDB40\\uDC74|\\uDB40\\uDC65\\uDB40\\uDC6E\\uDB40\\uDC67)\\uDB40\\uDC7F|\\uD83D\\uDC69\u200D\\uD83D\\uDC69\u200D(?:\\uD83D\\uDC66\u200D\\uD83D\\uDC66|\\uD83D\\uDC67\u200D(?:\\uD83D[\\uDC66\\uDC67]))|\\uD83D\\uDC68(?:\\uD83C\\uDFFF\u200D(?:\\uD83E\\uDD1D\u200D\\uD83D\\uDC68(?:\\uD83C[\\uDFFB-\\uDFFE])|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFE\u200D(?:\\uD83E\\uDD1D\u200D\\uD83D\\uDC68(?:\\uD83C[\\uDFFB-\\uDFFD\\uDFFF])|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFD\u200D(?:\\uD83E\\uDD1D\u200D\\uD83D\\uDC68(?:\\uD83C[\\uDFFB\\uDFFC\\uDFFE\\uDFFF])|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFC\u200D(?:\\uD83E\\uDD1D\u200D\\uD83D\\uDC68(?:\\uD83C[\\uDFFB\\uDFFD-\\uDFFF])|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFB\u200D(?:\\uD83E\\uDD1D\u200D\\uD83D\\uDC68(?:\\uD83C[\\uDFFC-\\uDFFF])|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\u200D(?:\u2764\\uFE0F\u200D(?:\\uD83D\\uDC8B\u200D)?\\uD83D\\uDC68|(?:\\uD83D[\\uDC68\\uDC69])\u200D(?:\\uD83D\\uDC66\u200D\\uD83D\\uDC66|\\uD83D\\uDC67\u200D(?:\\uD83D[\\uDC66\\uDC67]))|\\uD83D\\uDC66\u200D\\uD83D\\uDC66|\\uD83D\\uDC67\u200D(?:\\uD83D[\\uDC66\\uDC67])|(?:\\uD83D[\\uDC68\\uDC69])\u200D(?:\\uD83D[\\uDC66\\uDC67])|[\u2695\u2696\u2708]\\uFE0F|\\uD83D[\\uDC66\\uDC67]|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|(?:\\uD83C\\uDFFF\u200D[\u2695\u2696\u2708]|\\uD83C\\uDFFE\u200D[\u2695\u2696\u2708]|\\uD83C\\uDFFD\u200D[\u2695\u2696\u2708]|\\uD83C\\uDFFC\u200D[\u2695\u2696\u2708]|\\uD83C\\uDFFB\u200D[\u2695\u2696\u2708])\\uFE0F|\\uD83C[\\uDFFB-\\uDFFF])|\\uD83E\\uDDD1(?:(?:\\uD83C[\\uDFFB-\\uDFFF])\u200D(?:\\uD83E\\uDD1D\u200D\\uD83E\\uDDD1(?:\\uD83C[\\uDFFB-\\uDFFF])|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF84\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\u200D(?:\\uD83E\\uDD1D\u200D\\uD83E\\uDDD1|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF84\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]))|\\uD83D\\uDC69(?:\u200D(?:\u2764\\uFE0F\u200D(?:\\uD83D\\uDC8B\u200D(?:\\uD83D[\\uDC68\\uDC69])|\\uD83D[\\uDC68\\uDC69])|\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFF\u200D(?:\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFE\u200D(?:\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFD\u200D(?:\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFC\u200D(?:\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD])|\\uD83C\\uDFFB\u200D(?:\\uD83C[\\uDF3E\\uDF73\\uDF7C\\uDF93\\uDFA4\\uDFA8\\uDFEB\\uDFED]|\\uD83D[\\uDCBB\\uDCBC\\uDD27\\uDD2C\\uDE80\\uDE92]|\\uD83E[\\uDDAF-\\uDDB3\\uDDBC\\uDDBD]))|\\uD83D\\uDC69\\uD83C\\uDFFF\u200D\\uD83E\\uDD1D\u200D(?:\\uD83D[\\uDC68\\uDC69])(?:\\uD83C[\\uDFFB-\\uDFFE])|\\uD83D\\uDC69\\uD83C\\uDFFE\u200D\\uD83E\\uDD1D\u200D(?:\\uD83D[\\uDC68\\uDC69])(?:\\uD83C[\\uDFFB-\\uDFFD\\uDFFF])|\\uD83D\\uDC69\\uD83C\\uDFFD\u200D\\uD83E\\uDD1D\u200D(?:\\uD83D[\\uDC68\\uDC69])(?:\\uD83C[\\uDFFB\\uDFFC\\uDFFE\\uDFFF])|\\uD83D\\uDC69\\uD83C\\uDFFC\u200D\\uD83E\\uDD1D\u200D(?:\\uD83D[\\uDC68\\uDC69])(?:\\uD83C[\\uDFFB\\uDFFD-\\uDFFF])|\\uD83D\\uDC69\\uD83C\\uDFFB\u200D\\uD83E\\uDD1D\u200D(?:\\uD83D[\\uDC68\\uDC69])(?:\\uD83C[\\uDFFC-\\uDFFF])|\\uD83D\\uDC69\u200D\\uD83D\\uDC66\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\u200D\\uD83D\\uDC69\u200D(?:\\uD83D[\\uDC66\\uDC67])|(?:\\uD83D\\uDC41\\uFE0F\u200D\\uD83D\\uDDE8|\\uD83D\\uDC69(?:\\uD83C\\uDFFF\u200D[\u2695\u2696\u2708]|\\uD83C\\uDFFE\u200D[\u2695\u2696\u2708]|\\uD83C\\uDFFD\u200D[\u2695\u2696\u2708]|\\uD83C\\uDFFC\u200D[\u2695\u2696\u2708]|\\uD83C\\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\\uD83C\\uDFF3\\uFE0F\u200D\u26A7|\\uD83E\\uDDD1(?:(?:\\uD83C[\\uDFFB-\\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\\uD83D\\uDC3B\u200D\u2744|(?:\\uD83C[\\uDFC3\\uDFC4\\uDFCA]|\\uD83D[\\uDC6E\\uDC70\\uDC71\\uDC73\\uDC77\\uDC81\\uDC82\\uDC86\\uDC87\\uDE45-\\uDE47\\uDE4B\\uDE4D\\uDE4E\\uDEA3\\uDEB4-\\uDEB6]|\\uD83E[\\uDD26\\uDD35\\uDD37-\\uDD39\\uDD3D\\uDD3E\\uDDB8\\uDDB9\\uDDCD-\\uDDCF\\uDDD6-\\uDDDD])(?:\\uD83C[\\uDFFB-\\uDFFF])\u200D[\u2640\u2642]|(?:\u26F9|\\uD83C[\\uDFCB\\uDFCC]|\\uD83D\\uDD75)(?:\\uFE0F\u200D[\u2640\u2642]|(?:\\uD83C[\\uDFFB-\\uDFFF])\u200D[\u2640\u2642])|\\uD83C\\uDFF4\u200D\u2620|(?:\\uD83C[\\uDFC3\\uDFC4\\uDFCA]|\\uD83D[\\uDC6E-\\uDC71\\uDC73\\uDC77\\uDC81\\uDC82\\uDC86\\uDC87\\uDE45-\\uDE47\\uDE4B\\uDE4D\\uDE4E\\uDEA3\\uDEB4-\\uDEB6]|\\uD83E[\\uDD26\\uDD35\\uDD37-\\uDD39\\uDD3C-\\uDD3E\\uDDB8\\uDDB9\\uDDCD-\\uDDCF\\uDDD6-\\uDDDF])\u200D[\u2640\u2642])\\uFE0F|\\uD83D\\uDC69\u200D\\uD83D\\uDC67\u200D(?:\\uD83D[\\uDC66\\uDC67])|\\uD83C\\uDFF3\\uFE0F\u200D\\uD83C\\uDF08|\\uD83D\\uDC69\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\u200D\\uD83D\\uDC66|\\uD83D\\uDC15\u200D\\uD83E\\uDDBA|\\uD83C\\uDDFD\\uD83C\\uDDF0|\\uD83C\\uDDF6\\uD83C\\uDDE6|\\uD83C\\uDDF4\\uD83C\\uDDF2|\\uD83D\\uDC08\u200D\u2B1B|\\uD83E\\uDDD1(?:\\uD83C[\\uDFFB-\\uDFFF])|\\uD83D\\uDC69(?:\\uD83C[\\uDFFB-\\uDFFF])|\\uD83C\\uDDFF(?:\\uD83C[\\uDDE6\\uDDF2\\uDDFC])|\\uD83C\\uDDFE(?:\\uD83C[\\uDDEA\\uDDF9])|\\uD83C\\uDDFC(?:\\uD83C[\\uDDEB\\uDDF8])|\\uD83C\\uDDFB(?:\\uD83C[\\uDDE6\\uDDE8\\uDDEA\\uDDEC\\uDDEE\\uDDF3\\uDDFA])|\\uD83C\\uDDFA(?:\\uD83C[\\uDDE6\\uDDEC\\uDDF2\\uDDF3\\uDDF8\\uDDFE\\uDDFF])|\\uD83C\\uDDF9(?:\\uD83C[\\uDDE6\\uDDE8\\uDDE9\\uDDEB-\\uDDED\\uDDEF-\\uDDF4\\uDDF7\\uDDF9\\uDDFB\\uDDFC\\uDDFF])|\\uD83C\\uDDF8(?:\\uD83C[\\uDDE6-\\uDDEA\\uDDEC-\\uDDF4\\uDDF7-\\uDDF9\\uDDFB\\uDDFD-\\uDDFF])|\\uD83C\\uDDF7(?:\\uD83C[\\uDDEA\\uDDF4\\uDDF8\\uDDFA\\uDDFC])|\\uD83C\\uDDF5(?:\\uD83C[\\uDDE6\\uDDEA-\\uDDED\\uDDF0-\\uDDF3\\uDDF7-\\uDDF9\\uDDFC\\uDDFE])|\\uD83C\\uDDF3(?:\\uD83C[\\uDDE6\\uDDE8\\uDDEA-\\uDDEC\\uDDEE\\uDDF1\\uDDF4\\uDDF5\\uDDF7\\uDDFA\\uDDFF])|\\uD83C\\uDDF2(?:\\uD83C[\\uDDE6\\uDDE8-\\uDDED\\uDDF0-\\uDDFF])|\\uD83C\\uDDF1(?:\\uD83C[\\uDDE6-\\uDDE8\\uDDEE\\uDDF0\\uDDF7-\\uDDFB\\uDDFE])|\\uD83C\\uDDF0(?:\\uD83C[\\uDDEA\\uDDEC-\\uDDEE\\uDDF2\\uDDF3\\uDDF5\\uDDF7\\uDDFC\\uDDFE\\uDDFF])|\\uD83C\\uDDEF(?:\\uD83C[\\uDDEA\\uDDF2\\uDDF4\\uDDF5])|\\uD83C\\uDDEE(?:\\uD83C[\\uDDE8-\\uDDEA\\uDDF1-\\uDDF4\\uDDF6-\\uDDF9])|\\uD83C\\uDDED(?:\\uD83C[\\uDDF0\\uDDF2\\uDDF3\\uDDF7\\uDDF9\\uDDFA])|\\uD83C\\uDDEC(?:\\uD83C[\\uDDE6\\uDDE7\\uDDE9-\\uDDEE\\uDDF1-\\uDDF3\\uDDF5-\\uDDFA\\uDDFC\\uDDFE])|\\uD83C\\uDDEB(?:\\uD83C[\\uDDEE-\\uDDF0\\uDDF2\\uDDF4\\uDDF7])|\\uD83C\\uDDEA(?:\\uD83C[\\uDDE6\\uDDE8\\uDDEA\\uDDEC\\uDDED\\uDDF7-\\uDDFA])|\\uD83C\\uDDE9(?:\\uD83C[\\uDDEA\\uDDEC\\uDDEF\\uDDF0\\uDDF2\\uDDF4\\uDDFF])|\\uD83C\\uDDE8(?:\\uD83C[\\uDDE6\\uDDE8\\uDDE9\\uDDEB-\\uDDEE\\uDDF0-\\uDDF5\\uDDF7\\uDDFA-\\uDDFF])|\\uD83C\\uDDE7(?:\\uD83C[\\uDDE6\\uDDE7\\uDDE9-\\uDDEF\\uDDF1-\\uDDF4\\uDDF6-\\uDDF9\\uDDFB\\uDDFC\\uDDFE\\uDDFF])|\\uD83C\\uDDE6(?:\\uD83C[\\uDDE8-\\uDDEC\\uDDEE\\uDDF1\\uDDF2\\uDDF4\\uDDF6-\\uDDFA\\uDDFC\\uDDFD\\uDDFF])|[#\\*0-9]\\uFE0F\u20E3|(?:\\uD83C[\\uDFC3\\uDFC4\\uDFCA]|\\uD83D[\\uDC6E\\uDC70\\uDC71\\uDC73\\uDC77\\uDC81\\uDC82\\uDC86\\uDC87\\uDE45-\\uDE47\\uDE4B\\uDE4D\\uDE4E\\uDEA3\\uDEB4-\\uDEB6]|\\uD83E[\\uDD26\\uDD35\\uDD37-\\uDD39\\uDD3D\\uDD3E\\uDDB8\\uDDB9\\uDDCD-\\uDDCF\\uDDD6-\\uDDDD])(?:\\uD83C[\\uDFFB-\\uDFFF])|(?:\u26F9|\\uD83C[\\uDFCB\\uDFCC]|\\uD83D\\uDD75)(?:\\uD83C[\\uDFFB-\\uDFFF])|(?:[\u261D\u270A-\u270D]|\\uD83C[\\uDF85\\uDFC2\\uDFC7]|\\uD83D[\\uDC42\\uDC43\\uDC46-\\uDC50\\uDC66\\uDC67\\uDC6B-\\uDC6D\\uDC72\\uDC74-\\uDC76\\uDC78\\uDC7C\\uDC83\\uDC85\\uDCAA\\uDD74\\uDD7A\\uDD90\\uDD95\\uDD96\\uDE4C\\uDE4F\\uDEC0\\uDECC]|\\uD83E[\\uDD0C\\uDD0F\\uDD18-\\uDD1C\\uDD1E\\uDD1F\\uDD30-\\uDD34\\uDD36\\uDD77\\uDDB5\\uDDB6\\uDDBB\\uDDD2-\\uDDD5])(?:\\uD83C[\\uDFFB-\\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\\uD83C[\\uDC04\\uDCCF\\uDD8E\\uDD91-\\uDD9A\\uDDE6-\\uDDFF\\uDE01\\uDE1A\\uDE2F\\uDE32-\\uDE36\\uDE38-\\uDE3A\\uDE50\\uDE51\\uDF00-\\uDF20\\uDF2D-\\uDF35\\uDF37-\\uDF7C\\uDF7E-\\uDF93\\uDFA0-\\uDFCA\\uDFCF-\\uDFD3\\uDFE0-\\uDFF0\\uDFF4\\uDFF8-\\uDFFF]|\\uD83D[\\uDC00-\\uDC3E\\uDC40\\uDC42-\\uDCFC\\uDCFF-\\uDD3D\\uDD4B-\\uDD4E\\uDD50-\\uDD67\\uDD7A\\uDD95\\uDD96\\uDDA4\\uDDFB-\\uDE4F\\uDE80-\\uDEC5\\uDECC\\uDED0-\\uDED2\\uDED5-\\uDED7\\uDEEB\\uDEEC\\uDEF4-\\uDEFC\\uDFE0-\\uDFEB]|\\uD83E[\\uDD0C-\\uDD3A\\uDD3C-\\uDD45\\uDD47-\\uDD78\\uDD7A-\\uDDCB\\uDDCD-\\uDDFF\\uDE70-\\uDE74\\uDE78-\\uDE7A\\uDE80-\\uDE86\\uDE90-\\uDEA8\\uDEB0-\\uDEB6\\uDEC0-\\uDEC2\\uDED0-\\uDED6])|(?:[#\\*0-9\\xA9\\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\\uD83C[\\uDC04\\uDCCF\\uDD70\\uDD71\\uDD7E\\uDD7F\\uDD8E\\uDD91-\\uDD9A\\uDDE6-\\uDDFF\\uDE01\\uDE02\\uDE1A\\uDE2F\\uDE32-\\uDE3A\\uDE50\\uDE51\\uDF00-\\uDF21\\uDF24-\\uDF93\\uDF96\\uDF97\\uDF99-\\uDF9B\\uDF9E-\\uDFF0\\uDFF3-\\uDFF5\\uDFF7-\\uDFFF]|\\uD83D[\\uDC00-\\uDCFD\\uDCFF-\\uDD3D\\uDD49-\\uDD4E\\uDD50-\\uDD67\\uDD6F\\uDD70\\uDD73-\\uDD7A\\uDD87\\uDD8A-\\uDD8D\\uDD90\\uDD95\\uDD96\\uDDA4\\uDDA5\\uDDA8\\uDDB1\\uDDB2\\uDDBC\\uDDC2-\\uDDC4\\uDDD1-\\uDDD3\\uDDDC-\\uDDDE\\uDDE1\\uDDE3\\uDDE8\\uDDEF\\uDDF3\\uDDFA-\\uDE4F\\uDE80-\\uDEC5\\uDECB-\\uDED2\\uDED5-\\uDED7\\uDEE0-\\uDEE5\\uDEE9\\uDEEB\\uDEEC\\uDEF0\\uDEF3-\\uDEFC\\uDFE0-\\uDFEB]|\\uD83E[\\uDD0C-\\uDD3A\\uDD3C-\\uDD45\\uDD47-\\uDD78\\uDD7A-\\uDDCB\\uDDCD-\\uDDFF\\uDE70-\\uDE74\\uDE78-\\uDE7A\\uDE80-\\uDE86\\uDE90-\\uDEA8\\uDEB0-\\uDEB6\\uDEC0-\\uDEC2\\uDED0-\\uDED6])\\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\\uD83C[\\uDF85\\uDFC2-\\uDFC4\\uDFC7\\uDFCA-\\uDFCC]|\\uD83D[\\uDC42\\uDC43\\uDC46-\\uDC50\\uDC66-\\uDC78\\uDC7C\\uDC81-\\uDC83\\uDC85-\\uDC87\\uDC8F\\uDC91\\uDCAA\\uDD74\\uDD75\\uDD7A\\uDD90\\uDD95\\uDD96\\uDE45-\\uDE47\\uDE4B-\\uDE4F\\uDEA3\\uDEB4-\\uDEB6\\uDEC0\\uDECC]|\\uD83E[\\uDD0C\\uDD0F\\uDD18-\\uDD1F\\uDD26\\uDD30-\\uDD39\\uDD3C-\\uDD3E\\uDD77\\uDDB5\\uDDB6\\uDDB8\\uDDB9\\uDDBB\\uDDCD-\\uDDCF\\uDDD1-\\uDDDD])";

var MAYHEM_EMOJI = {
  unicodeRegexp: unicodeRegexp,
  toShort: function toShort(str) {
    return str;
  },
  getImagePathForEmoji: function getImagePathForEmoji() {
    return "";
  },
  emojiList: {}
};
var mergeEmojiList = function mergeEmojiList(emojiList) {
  Object.assign(MAYHEM_EMOJI, {
    emojiList: emojiList
  });
};
var clearEmojiList = function clearEmojiList() {
  Object.keys(MAYHEM_EMOJI).forEach(function (key) {
    delete object[key];
  });
};
var setShortNameGetter = function setShortNameGetter(callback) {
  Object.assign(MAYHEM_EMOJI, {
    toShort: callback
  });
};
var setEmojiImagePathGetter = function setEmojiImagePathGetter(callback) {
  Object.assign(MAYHEM_EMOJI, {
    getImagePathForEmoji: callback
  });
};

var Emoji = function Emoji(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      cacheBustParam = _ref.cacheBustParam,
      imagePath = _ref.imagePath,
      imageType = _ref.imageType,
      className = _ref.className,
      decoratedText = _ref.decoratedText,
      useNativeArt = _ref.useNativeArt,
      props = _objectWithoutProperties(_ref, ["theme", "cacheBustParam", "imagePath", "imageType", "className", "decoratedText", "useNativeArt"]);

  var shortName = MAYHEM_EMOJI.toShort(decoratedText);
  var emojiDisplay = null;

  if (useNativeArt === true) {
    emojiDisplay = /*#__PURE__*/React.createElement("span", {
      title: MAYHEM_EMOJI.toShort(decoratedText)
    }, props.children);
  } else {
    // short name to image url code steal from emojione source code
    var emojiObj = MAYHEM_EMOJI.emojiList[shortName];
    var fullImagePath = MAYHEM_EMOJI.getImagePathForEmoji(emojiObj);
    var backgroundImage = "url(".concat(fullImagePath, ")");
    var combinedClassName = clsx(theme.emoji, className);
    emojiDisplay = /*#__PURE__*/React.createElement("span", {
      className: combinedClassName,
      title: MAYHEM_EMOJI.toShort(decoratedText),
      style: {
        backgroundImage: backgroundImage
      }
    }, props.children);
  }

  return emojiDisplay;
};

var DEFAULT_UNICODE_GETTER = function DEFAULT_UNICODE_GETTER(emoji) {
  return emoji.unicode;
};

var newEmojiListWithOutPriorityList = function newEmojiListWithOutPriorityList(priorityList) {
  var unicodeGetter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_UNICODE_GETTER;
  var list = {};

  for (var key in MAYHEM_EMOJI.emojiList) {
    // eslint-disable-line no-restricted-syntax
    if (priorityList.hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      continue; // eslint-disable-line no-continue
    }

    list[key] = unicodeGetter(MAYHEM_EMOJI.emojiList[key]);
  }

  return _objectSpread2({}, priorityList, {}, list);
};

var emojiList = {
  list: {},
  unicodeGetter: DEFAULT_UNICODE_GETTER
};

emojiList.setPriorityList = function (newPriorityList) {
  // re-generate emojiList when set PriorityList
  emojiList.list = newEmojiListWithOutPriorityList(newPriorityList, emojiList.unicodeGetter);
};

emojiList.setUnicodeGetter = function (unicodeGetter) {
  emojiList.unicodeGetter = unicodeGetter;
};

/* eslint-disable */
// Original can be found here: https://github.com/Ranks/emojione
var convertShortNameToUnicode = function convertShortNameToUnicode(unicode) {
  if (unicode.indexOf('-') > -1) {
    var parts = [];
    var s = unicode.split('-');

    for (var i = 0; i < s.length; i++) {
      var part = parseInt(s[i], 16);

      if (part >= 0x10000 && part <= 0x10ffff) {
        var hi = Math.floor((part - 0x10000) / 0x400) + 0xd800;
        var lo = (part - 0x10000) % 0x400 + 0xdc00;
        part = String.fromCharCode(hi) + String.fromCharCode(lo);
      } else {
        part = String.fromCharCode(part);
      }

      parts.push(part);
    }

    return parts.join('');
  } else {
    var s = parseInt(unicode, 16);

    if (s >= 0x10000 && s <= 0x10ffff) {
      var hi = Math.floor((s - 0x10000) / 0x400) + 0xd800;
      var lo = (s - 0x10000) % 0x400 + 0xdc00;
      return String.fromCharCode(hi) + String.fromCharCode(lo);
    } else {
      return String.fromCharCode(s);
    }
  }
};

var Entry = /*#__PURE__*/function (_Component) {
  _inherits(Entry, _Component);

  var _super = _createSuper(Entry);

  function Entry(props) {
    var _this;

    _classCallCheck(this, Entry);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function () {
      if (_this.mouseDown) {
        _this.mouseDown = false;

        _this.props.onEmojiSelect(_this.props.emoji);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (event) {
      // Note: important to avoid a content edit change
      event.preventDefault();
      _this.mouseDown = true;
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function () {
      _this.props.onEmojiFocus(_this.props.index);
    });

    _this.mouseDown = false;
    return _this;
  }

  _createClass(Entry, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.mouseDown = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          cacheBustParam = _this$props.cacheBustParam,
          useNativeArt = _this$props.useNativeArt,
          isFocused = _this$props.isFocused,
          id = _this$props.id;
      var className = isFocused ? theme.emojiSuggestionsEntryFocused : theme.emojiSuggestionsEntry;
      var emojiDisplay = null;

      if (useNativeArt === true) {
        var unicode = emojiList.list[this.props.emoji];
        emojiDisplay = convertShortNameToUnicode(unicode);
      } else {
        // short name to image url code steal from emojione source code
        var emojiObj = MAYHEM_EMOJI.emojiList[this.props.emoji];
        var fullImagePath = MAYHEM_EMOJI.getImagePathForEmoji(emojiObj);
        emojiDisplay = /*#__PURE__*/React.createElement("img", {
          src: fullImagePath,
          className: theme.emojiSuggestionsEntryIcon,
          role: "presentation"
        });
      }

      return /*#__PURE__*/React.createElement("div", {
        className: className,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseEnter: this.onMouseEnter,
        role: "option",
        id: id,
        "aria-selected": isFocused ? 'true' : null
      }, emojiDisplay, /*#__PURE__*/React.createElement("span", {
        className: theme.emojiSuggestionsEntryText
      }, this.props.emoji));
    }
  }]);

  return Entry;
}(Component);

var getWordAt = function getWordAt(string, position) {
  // Perform type conversions.
  var str = String(string); // eslint-disable-next-line no-bitwise

  var pos = Number(position) >>> 0; // Search for the word's beginning and end.

  var left = str.slice(0, pos + 1).search(/\S+$/);
  var right = str.slice(pos).search(/\s/); // The last word in the string is a special case.

  if (right < 0) {
    return {
      word: str.slice(left),
      begin: left,
      end: str.length
    };
  } // Return the word, using the located bounds to extract it from the string.


  return {
    word: str.slice(left, right + pos),
    begin: left,
    end: right + pos
  };
};

var getSearchText = function getSearchText(editorState, selection) {
  var anchorKey = selection.getAnchorKey();
  var anchorOffset = selection.getAnchorOffset() - 1;
  var currentContent = editorState.getCurrentContent();
  var currentBlock = currentContent.getBlockForKey(anchorKey);
  var blockText = currentBlock.getText();
  return getWordAt(blockText, anchorOffset);
};

// or replaced emoji shortname like ":thumbsup:". Behavior determined by `Mode` parameter.

var Mode = {
  INSERT: 'INSERT',
  // insert emoji to current cursor position
  REPLACE: 'REPLACE' // replace emoji shortname

};

var addEmoji = function addEmoji(editorState, emojiShortName) {
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Mode.INSERT;
  var unicode = emojiList.list[emojiShortName];
  var emoji = convertShortNameToUnicode(unicode);
  var contentState = editorState.getCurrentContent();
  var contentStateWithEntity = contentState.createEntity('emoji', 'IMMUTABLE', {
    emojiUnicode: emoji
  });
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  var currentSelectionState = editorState.getSelection();
  var emojiAddedContent;
  var emojiEndPos = 0;
  var blockSize = 0;

  switch (mode) {
    case Mode.INSERT:
      {
        // in case text is selected it is removed and then the emoji is added
        var afterRemovalContentState = Modifier.removeRange(contentState, currentSelectionState, 'backward'); // deciding on the position to insert emoji

        var targetSelection = afterRemovalContentState.getSelectionAfter();
        emojiAddedContent = Modifier.insertText(afterRemovalContentState, targetSelection, emoji, null, entityKey);
        emojiEndPos = targetSelection.getAnchorOffset();
        var blockKey = targetSelection.getAnchorKey();
        blockSize = contentState.getBlockForKey(blockKey).getLength();
        break;
      }

    case Mode.REPLACE:
      {
        var _getSearchText = getSearchText(editorState, currentSelectionState),
            begin = _getSearchText.begin,
            end = _getSearchText.end; // Get the selection of the :emoji: search text


        var emojiTextSelection = currentSelectionState.merge({
          anchorOffset: begin,
          focusOffset: end
        });
        emojiAddedContent = Modifier.replaceText(contentState, emojiTextSelection, emoji, null, entityKey);
        emojiEndPos = end;

        var _blockKey = emojiTextSelection.getAnchorKey();

        blockSize = contentState.getBlockForKey(_blockKey).getLength();
        break;
      }

    default:
      throw new Error('Unidentified value of "mode"');
  } // If the emoji is inserted at the end, a space is appended right after for
  // a smooth writing experience.


  if (emojiEndPos === blockSize) {
    emojiAddedContent = Modifier.insertText(emojiAddedContent, emojiAddedContent.getSelectionAfter(), ' ');
  }

  var newEditorState = EditorState.push(editorState, emojiAddedContent, 'insert-emoji');
  return EditorState.forceSelection(newEditorState, emojiAddedContent.getSelectionAfter());
};

var decodeOffsetKey = function decodeOffsetKey(offsetKey) {
  var _offsetKey$split = offsetKey.split('-'),
      _offsetKey$split2 = _slicedToArray(_offsetKey$split, 3),
      blockKey = _offsetKey$split2[0],
      decoratorKey = _offsetKey$split2[1],
      leafKey = _offsetKey$split2[2];

  return {
    blockKey: blockKey,
    decoratorKey: parseInt(decoratorKey, 10),
    leafKey: parseInt(leafKey, 10)
  };
};

var EmojiSuggestions = /*#__PURE__*/function (_Component) {
  _inherits(EmojiSuggestions, _Component);

  var _super = _createSuper(EmojiSuggestions);

  function EmojiSuggestions() {
    var _this;

    _classCallCheck(this, EmojiSuggestions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isActive: false,
      focusedOptionIndex: 0
    });

    _defineProperty(_assertThisInitialized(_this), "onEditorStateChange", function (editorState) {
      var searches = _this.props.store.getAllSearches(); // if no search portal is active there is no need to show the popover


      if (searches.size === 0) {
        return editorState;
      }

      var removeList = function removeList() {
        _this.props.store.resetEscapedSearch();

        _this.closeDropdown();

        return editorState;
      }; // get the current selection


      var selection = editorState.getSelection();
      var anchorKey = selection.getAnchorKey();
      var anchorOffset = selection.getAnchorOffset(); // the list should not be visible if a range is selected or the editor has no focus

      if (!selection.isCollapsed() || !selection.getHasFocus()) return removeList(); // identify the start & end positon of each search-text

      var offsetDetails = searches.map(function (offsetKey) {
        return decodeOffsetKey(offsetKey);
      }); // a leave can be empty when it is removed due e.g. using backspace

      var leaves = offsetDetails.filter(function (_ref) {
        var blockKey = _ref.blockKey;
        return blockKey === anchorKey;
      }).map(function (_ref2) {
        var blockKey = _ref2.blockKey,
            decoratorKey = _ref2.decoratorKey,
            leafKey = _ref2.leafKey;
        return editorState.getBlockTree(blockKey).getIn([decoratorKey, 'leaves', leafKey]);
      }); // if all leaves are undefined the popover should be removed

      if (leaves.every(function (leave) {
        return leave === undefined;
      })) {
        return removeList();
      } // Checks that the cursor is after the @ character but still somewhere in
      // the word (search term). Setting it to allow the cursor to be left of
      // the @ causes troubles due selection confusion.


      var plainText = editorState.getCurrentContent().getPlainText();
      var selectionIsInsideWord = leaves.filter(function (leave) {
        return leave !== undefined;
      }).map(function (_ref3) {
        var start = _ref3.start,
            end = _ref3.end;
        return start === 0 && anchorOffset === 1 && plainText.charAt(anchorOffset) !== ':' && /(\s|^):[\w]*/.test(plainText) && anchorOffset <= end || // : is the first character
        anchorOffset > start + 1 && anchorOffset <= end
        /*: is in the text or at the end*/
        ;
      });
      if (selectionIsInsideWord.every(function (isInside) {
        return isInside === false;
      })) return removeList();
      _this.activeOffsetKey = selectionIsInsideWord.filter(function (value) {
        return value === true;
      }).keySeq().first();

      _this.onSearchChange(editorState, selection); // make sure the escaped search is reseted in the cursor since the user
      // already switched to another emoji search


      if (!_this.props.store.isEscaped(_this.activeOffsetKey)) {
        _this.props.store.resetEscapedSearch();
      } // If none of the above triggered to close the window, it's safe to assume
      // the dropdown should be open. This is useful when a user focuses on another
      // input field and then comes back: the dropdown will again.


      if (!_this.state.isActive && !_this.props.store.isEscaped(_this.activeOffsetKey)) {
        _this.openDropdown();
      } // makes sure the focused index is reseted every time a new selection opens
      // or the selection was moved to another emoji search


      if (_this.lastSelectionIsInsideWord === undefined || !selectionIsInsideWord.equals(_this.lastSelectionIsInsideWord)) {
        _this.setState({
          focusedOptionIndex: 0
        });
      }

      _this.lastSelectionIsInsideWord = selectionIsInsideWord;
      return editorState;
    });

    _defineProperty(_assertThisInitialized(_this), "onSearchChange", function (editorState, selection) {
      var _getSearchText = getSearchText(editorState, selection),
          word = _getSearchText.word;

      var searchValue = word.substring(1, word.length);

      if (_this.lastSearchValue !== searchValue && typeof _this.props.onSearchChange === 'function') {
        _this.lastSearchValue = searchValue;

        _this.props.onSearchChange({
          value: searchValue
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDownArrow", function (keyboardEvent) {
      keyboardEvent.preventDefault();
      var newIndex = _this.state.focusedOptionIndex + 1;

      _this.onEmojiFocus(newIndex >= _this.filteredEmojis.size ? 0 : newIndex);
    });

    _defineProperty(_assertThisInitialized(_this), "onTab", function (keyboardEvent) {
      keyboardEvent.preventDefault();

      _this.commitSelection();
    });

    _defineProperty(_assertThisInitialized(_this), "onUpArrow", function (keyboardEvent) {
      keyboardEvent.preventDefault();

      if (_this.filteredEmojis.size > 0) {
        var newIndex = _this.state.focusedOptionIndex - 1;

        _this.onEmojiFocus(Math.max(newIndex, 0));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEscape", function (keyboardEvent) {
      keyboardEvent.preventDefault();

      var activeOffsetKey = _this.lastSelectionIsInsideWord.filter(function (value) {
        return value === true;
      }).keySeq().first();

      _this.props.store.escapeSearch(activeOffsetKey);

      _this.closeDropdown(); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    });

    _defineProperty(_assertThisInitialized(_this), "onEmojiSelect", function (emoji) {
      _this.closeDropdown();

      var newEditorState = addEmoji(_this.props.store.getEditorState(), emoji, Mode.REPLACE);

      _this.props.store.setEditorState(newEditorState);
    });

    _defineProperty(_assertThisInitialized(_this), "onEmojiFocus", function (index) {
      var descendant = "emoji-option-".concat(_this.key, "-").concat(index);
      _this.props.ariaProps.ariaActiveDescendantID = descendant;

      _this.setState({
        focusedOptionIndex: index
      }); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    });

    _defineProperty(_assertThisInitialized(_this), "getEmojisForFilter", function () {
      var selection = _this.props.store.getEditorState().getSelection();

      var _getSearchText2 = getSearchText(_this.props.store.getEditorState(), selection),
          word = _getSearchText2.word;

      var emojiValue = word.substring(1, word.length).toLowerCase();

      var filteredValues = _this.props.shortNames.filter(function (emojiShortName) {
        return !emojiValue || emojiShortName.indexOf(emojiValue) > -1;
      });

      var size = filteredValues.size < 9 ? filteredValues.size : 9;
      return filteredValues.setSize(size);
    });

    _defineProperty(_assertThisInitialized(_this), "commitSelection", function () {
      _this.onEmojiSelect(_this.filteredEmojis.get(_this.state.focusedOptionIndex));

      return 'handled';
    });

    _defineProperty(_assertThisInitialized(_this), "openDropdown", function () {
      // This is a really nasty way of attaching & releasing the key related functions.
      // It assumes that the keyFunctions object will not loose its reference and
      // by this we can replace inner parameters spread over different modules.
      // This better be some registering & unregistering logic. PRs are welcome :)
      _this.props.callbacks.handleReturn = _this.commitSelection;

      _this.props.callbacks.keyBindingFn = function (keyboardEvent) {
        // arrow down
        if (keyboardEvent.keyCode === 40) {
          _this.onDownArrow(keyboardEvent);
        } // arrow up


        if (keyboardEvent.keyCode === 38) {
          _this.onUpArrow(keyboardEvent);
        } // escape


        if (keyboardEvent.keyCode === 27) {
          _this.onEscape(keyboardEvent);
        } // tab


        if (keyboardEvent.keyCode === 9) {
          _this.onTab(keyboardEvent);
        }
      };

      var descendant = "emoji-option-".concat(_this.key, "-").concat(_this.state.focusedOptionIndex);
      _this.props.ariaProps.ariaActiveDescendantID = descendant;
      _this.props.ariaProps.ariaOwneeID = "emojis-list-".concat(_this.key);
      _this.props.ariaProps.ariaHasPopup = 'true';
      _this.props.ariaProps.ariaExpanded = true;

      _this.setState({
        isActive: true
      });

      if (_this.props.onOpen) {
        _this.props.onOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeDropdown", function () {
      // make sure none of these callbacks are triggered
      _this.props.callbacks.keyBindingFn = undefined;
      _this.props.callbacks.handleReturn = undefined;
      _this.props.ariaProps.ariaHasPopup = 'false';
      _this.props.ariaProps.ariaExpanded = false;
      _this.props.ariaProps.ariaActiveDescendantID = undefined;
      _this.props.ariaProps.ariaOwneeID = undefined;

      _this.setState({
        isActive: false
      });

      if (_this.props.onClose) {
        _this.props.onClose();
      }
    });

    return _this;
  }

  _createClass(EmojiSuggestions, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.key = genKey();
      this.props.callbacks.onChange = this.onEditorStateChange;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.popover) {
        // In case the list shrinks there should be still an option focused.
        // Note: this might run multiple times and deduct 1 until the condition is
        // not fullfilled anymore.
        var size = this.filteredEmojis.size;

        if (size > 0 && this.state.focusedOptionIndex >= size) {
          this.setState({
            focusedOptionIndex: size - 1
          });
        }

        if (size <= 0) {
          this.closeDropdown();
        }

        var decoratorRect = this.props.store.getPortalClientRect(this.activeOffsetKey);
        var newStyles = this.props.positionSuggestions({
          decoratorRect: decoratorRect,
          prevProps: prevProps,
          prevState: prevState,
          props: this.props,
          state: this.state,
          filteredEmojis: this.filteredEmojis,
          popover: this.popover
        });
        Object.keys(newStyles).forEach(function (key) {
          _this2.popover.style[key] = newStyles[key];
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.callbacks.onChange = undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (!this.state.isActive) {
        return null;
      }

      this.filteredEmojis = this.getEmojisForFilter();

      var _this$props = this.props,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          cacheBustParam = _this$props.cacheBustParam,
          imagePath = _this$props.imagePath,
          imageType = _this$props.imageType,
          ariaProps = _this$props.ariaProps,
          callbacks = _this$props.callbacks,
          onClose = _this$props.onClose,
          onOpen = _this$props.onOpen,
          onSearchChange = _this$props.onSearchChange,
          positionSuggestions = _this$props.positionSuggestions,
          shortNames = _this$props.shortNames,
          store = _this$props.store,
          useNativeArt = _this$props.useNativeArt,
          restProps = _objectWithoutProperties(_this$props, ["theme", "cacheBustParam", "imagePath", "imageType", "ariaProps", "callbacks", "onClose", "onOpen", "onSearchChange", "positionSuggestions", "shortNames", "store", "useNativeArt"]);

      return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
        className: theme.emojiSuggestions,
        role: "listbox",
        id: "emojis-list-".concat(this.key),
        ref: function ref(element) {
          _this3.popover = element;
        }
      }), this.filteredEmojis.map(function (emoji, index) {
        return /*#__PURE__*/React.createElement(Entry, {
          key: emoji,
          onEmojiSelect: _this3.onEmojiSelect,
          onEmojiFocus: _this3.onEmojiFocus,
          isFocused: _this3.state.focusedOptionIndex === index,
          emoji: emoji,
          index: index,
          id: "emoji-option-".concat(_this3.key, "-").concat(index),
          theme: theme,
          imagePath: imagePath,
          imageType: imageType,
          cacheBustParam: cacheBustParam,
          useNativeArt: useNativeArt
        });
      }).toJS());
    }
  }]);

  return EmojiSuggestions;
}(Component);

var EmojiSuggestionsPortal = /*#__PURE__*/function (_Component) {
  _inherits(EmojiSuggestionsPortal, _Component);

  var _super = _createSuper(EmojiSuggestionsPortal);

  function EmojiSuggestionsPortal(props) {
    var _this;

    _classCallCheck(this, EmojiSuggestionsPortal);

    _this = _super.call(this, props);

    _this.searchPortalRef = function (element) {
      _this.searchPortal = element;
    };

    return _this;
  }

  _createClass(EmojiSuggestionsPortal, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.props.store.register(this.props.offsetKey);
      this.updatePortalClientRect(this.props); // trigger a re-render so the EmojiSuggestions becomes active

      this.props.setEditorState(this.props.getEditorState());
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.updatePortalClientRect(nextProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.store.unregister(this.props.offsetKey);
    }
  }, {
    key: "updatePortalClientRect",
    value: function updatePortalClientRect(props) {
      var _this2 = this;

      this.props.store.updatePortalClientRect(props.offsetKey, function () {
        return _this2.searchPortal.getBoundingClientRect();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("span", {
        className: this.key,
        ref: this.searchPortalRef
      }, this.props.children);
    }
  }]);

  return EmojiSuggestionsPortal;
}(Component);

var unicodeRegex = new RegExp(MAYHEM_EMOJI.unicodeRegexp, 'g');
var emojiStrategy = (function (contentBlock, callback) {
  findWithRegex(unicodeRegex, contentBlock, callback);
});

var EMOJI_REGEX = /(\s|^):[\w-+]*/g;
var emojiSuggestionsStrategy = (function (contentBlock, callback) {
  findWithRegex(EMOJI_REGEX, contentBlock, callback);
});

var unicodeRegex$1 = new RegExp(MAYHEM_EMOJI.unicodeRegexp, 'g');
/*
 * Attaches Immutable DraftJS Entities to the Emoji text.
 *
 * This is necessary as emojis consist of 2 characters (unicode). By making them
 * immutable the whole Emoji is removed when hitting backspace.
 */

function attachImmutableEntitiesToEmojis(editorState) {
  var contentState = editorState.getCurrentContent();
  var blocks = contentState.getBlockMap();
  var newContentState = contentState;
  blocks.forEach(function (block) {
    var plainText = block.getText();

    var addEntityToEmoji = function addEntityToEmoji(start, end) {
      var existingEntityKey = block.getEntityAt(start);

      if (existingEntityKey) {
        // avoid manipulation in case the emoji already has an entity
        var entity = newContentState.getEntity(existingEntityKey);

        if (entity && entity.get('type') === 'emoji') {
          return;
        }
      }

      var selection = SelectionState.createEmpty(block.getKey()).set('anchorOffset', start).set('focusOffset', end);
      var emojiText = plainText.substring(start, end);
      var contentStateWithEntity = newContentState.createEntity('emoji', 'IMMUTABLE', {
        emojiUnicode: emojiText
      });
      var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      newContentState = Modifier.replaceText(newContentState, selection, emojiText, null, entityKey);
    };

    findWithRegex(unicodeRegex$1, block, addEntityToEmoji);
  });

  if (!newContentState.equals(contentState)) {
    return EditorState.push(editorState, newContentState, 'convert-to-immutable-emojis');
  }

  return editorState;
}

var getRelativeParent = function getRelativeParent(element) {
  if (!element) {
    return null;
  }

  var position = window.getComputedStyle(element).getPropertyValue('position');

  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
};

var positionSuggestions = function positionSuggestions(_ref) {
  var decoratorRect = _ref.decoratorRect,
      popover = _ref.popover,
      state = _ref.state,
      filteredEmojis = _ref.filteredEmojis;
  var relativeParent = getRelativeParent(popover.parentElement);
  var relativeRect = {};

  if (relativeParent) {
    relativeRect.scrollLeft = relativeParent.scrollLeft;
    relativeRect.scrollTop = relativeParent.scrollTop;
    var relativeParentRect = relativeParent.getBoundingClientRect();
    relativeRect.left = decoratorRect.left - relativeParentRect.left;
    relativeRect.top = decoratorRect.top - relativeParentRect.top;
  } else {
    relativeRect.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    relativeRect.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    relativeRect.top = decoratorRect.top;
    relativeRect.left = decoratorRect.left;
  }

  var left = relativeRect.left + relativeRect.scrollLeft;
  var top = relativeRect.top + relativeRect.scrollTop;
  var transform;
  var transition;

  if (state.isActive) {
    if (filteredEmojis.size > 0) {
      transform = 'scale(1)';
      transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else {
      transform = 'scale(0)';
      transition = 'all 0.35s cubic-bezier(.3,1,.2,1)';
    }
  }

  return {
    left: "".concat(left, "px"),
    top: "".concat(top, "px"),
    transform: transform,
    transformOrigin: '1em 0%',
    transition: transition
  };
};

var emojiSelectPopoverScrollbar = "e1tbkpvz";
var emojiSelectPopoverGroupTitle = "elv743z";
var defaultTheme = {
  emoji: "e12q5piw",
  emojiSuggestions: "e14tyxfe",
  emojiSuggestionsEntry: "e8c948t",
  emojiSuggestionsEntryFocused: "e1p2dfmq",
  emojiSuggestionsEntryText: "egz6d8p",
  emojiSuggestionsEntryIcon: "ezpritq",
  emojiSelect: "eoqyfbi",
  emojiSelectButton: "e1a4bmxh",
  emojiSelectButtonPressed: "e1dawnwp",
  emojiSelectPopover: "e14wzft9",
  emojiSelectPopoverClosed: "e1y0dmik",
  emojiSelectPopoverTitle: "e115ln0i",
  emojiSelectPopoverGroups: "e4apto0",
  emojiSelectPopoverGroup: "eujihyd",
  emojiSelectPopoverGroupTitle: emojiSelectPopoverGroupTitle,
  emojiSelectPopoverGroupList: "eve87w6",
  emojiSelectPopoverGroupItem: "e7y6n3z",
  emojiSelectPopoverToneSelect: "e95dnq1",
  emojiSelectPopoverToneSelectList: "e184iueo",
  emojiSelectPopoverToneSelectItem: "edlz1v2",
  emojiSelectPopoverEntry: "e20avme",
  emojiSelectPopoverEntryFocused: "eqdko5g",
  emojiSelectPopoverEntryIcon: "ees7jd",
  emojiSelectPopoverNav: "emfot0t",
  emojiSelectPopoverNavItem: "e9wbvx0",
  emojiSelectPopoverNavEntry: "e1s1l8v8",
  emojiSelectPopoverNavEntryActive: "e8wc4bj",
  emojiSelectPopoverScrollbar: emojiSelectPopoverScrollbar,
  emojiSelectPopoverScrollbarThumb: "e1dnlg2i"
};

var defaultImagePath = '//twemoji.maxcdn.com/svg/'; // Update to point to twitter emoji by default

var defaultImageType = 'svg';
var defaultCacheBustParam = '?v=1.0.0'; // We are now on version 1.0.0 of our emojis.
// TODO activate/deactivate different the conversion or search part

var index = (function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var callbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    handleReturn: undefined,
    onChange: undefined
  };
  var ariaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: false,
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined
  };
  var searches = Map();
  var escapedSearch;
  var clientRectFunctions = Map();
  var store = {
    getEditorState: undefined,
    setEditorState: undefined,
    getPortalClientRect: function getPortalClientRect(offsetKey) {
      return clientRectFunctions.get(offsetKey)();
    },
    getAllSearches: function getAllSearches() {
      return searches;
    },
    isEscaped: function isEscaped(offsetKey) {
      return escapedSearch === offsetKey;
    },
    escapeSearch: function escapeSearch(offsetKey) {
      escapedSearch = offsetKey;
    },
    resetEscapedSearch: function resetEscapedSearch() {
      escapedSearch = undefined;
    },
    register: function register(offsetKey) {
      searches = searches.set(offsetKey, offsetKey);
    },
    updatePortalClientRect: function updatePortalClientRect(offsetKey, func) {
      clientRectFunctions = clientRectFunctions.set(offsetKey, func);
    },
    unregister: function unregister(offsetKey) {
      searches = searches["delete"](offsetKey);
      clientRectFunctions = clientRectFunctions["delete"](offsetKey);
    }
  }; // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.

  var _config$theme = config.theme,
      theme = _config$theme === void 0 ? defaultTheme : _config$theme,
      _config$imagePath = config.imagePath,
      imagePath = _config$imagePath === void 0 ? defaultImagePath : _config$imagePath,
      _config$imageType = config.imageType,
      imageType = _config$imageType === void 0 ? defaultImageType : _config$imageType,
      allowImageCache = config.allowImageCache,
      _config$positionSugge = config.positionSuggestions,
      positionSuggestions$1 = _config$positionSugge === void 0 ? positionSuggestions : _config$positionSugge,
      priorityList = config.priorityList,
      selectGroups = config.selectGroups,
      selectButtonContent = config.selectButtonContent,
      toneSelectOpenDelay = config.toneSelectOpenDelay,
      useNativeArt = config.useNativeArt,
      emojiListOverride = config.emojiListOverride,
      getImagePathForEmoji = config.getImagePathForEmoji,
      shortNameGetter = config.shortNameGetter,
      unicodeGetter = config.unicodeGetter,
      expose = config.expose;
  var cacheBustParam = allowImageCache ? '' : defaultCacheBustParam; // Update the name getter if possible, this allows us to define what name to use for this image.

  if (getImagePathForEmoji) {
    setEmojiImagePathGetter(getImagePathForEmoji);
  }

  if (shortNameGetter) {
    setShortNameGetter(shortNameGetter);
  } // Adjust the plugin to accept an emoji list to merge.


  if (emojiListOverride) {
    mergeEmojiList(emojiListOverride);
  }

  if (unicodeGetter) emojiList.setUnicodeGetter(unicodeGetter); // Populate the emojiList

  emojiList.setPriorityList(priorityList || {}); // Expose some of this plugins state to the invoker so that they can control some core pieces

  if (expose) {
    expose({
      modifiers: {
        addEmoji: addEmoji,
        attachImmutableEntitiesToEmojis: attachImmutableEntitiesToEmojis
      },
      setPriorityList: emojiList.setPriorityList,
      setEmojiImageNameGetter: setEmojiImageNameGetter,
      setShortNameGetter: setShortNameGetter,
      clearEmojiList: clearEmojiList,
      mergeEmojiList: mergeEmojiList
    });
  }

  var suggestionsProps = {
    ariaProps: ariaProps,
    cacheBustParam: cacheBustParam,
    callbacks: callbacks,
    imagePath: imagePath,
    imageType: imageType,
    theme: theme,
    store: store,
    positionSuggestions: positionSuggestions$1,
    shortNames: List(keys(emojiList.list)),
    useNativeArt: useNativeArt
  };

  var DecoratedEmojiSuggestions = function DecoratedEmojiSuggestions(props) {
    return /*#__PURE__*/React.createElement(EmojiSuggestions, _extends({}, props, suggestionsProps));
  };

  var DecoratedEmoji = function DecoratedEmoji(props) {
    return /*#__PURE__*/React.createElement(Emoji, _extends({}, props, {
      theme: theme,
      imagePath: imagePath,
      imageType: imageType,
      cacheBustParam: cacheBustParam,
      useNativeArt: useNativeArt
    }));
  };

  var DecoratedEmojiSuggestionsPortal = function DecoratedEmojiSuggestionsPortal(props) {
    return /*#__PURE__*/React.createElement(EmojiSuggestionsPortal, _extends({}, props, {
      store: store
    }));
  };

  return {
    EmojiSuggestions: DecoratedEmojiSuggestions,
    decorators: [{
      strategy: emojiStrategy,
      component: DecoratedEmoji
    }, {
      strategy: emojiSuggestionsStrategy,
      component: DecoratedEmojiSuggestionsPortal
    }],
    getAccessibilityProps: function getAccessibilityProps() {
      return {
        role: 'combobox',
        ariaAutoComplete: 'list',
        ariaHasPopup: ariaProps.ariaHasPopup,
        ariaExpanded: ariaProps.ariaExpanded,
        ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
        ariaOwneeID: ariaProps.ariaOwneeID
      };
    },
    initialize: function initialize(_ref) {
      var getEditorState = _ref.getEditorState,
          setEditorState = _ref.setEditorState;
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    keyBindingFn: function keyBindingFn(keyboardEvent) {
      return callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent);
    },
    handleReturn: function handleReturn(keyboardEvent) {
      return callbacks.handleReturn && callbacks.handleReturn(keyboardEvent);
    },
    onChange: function onChange(editorState) {
      var newEditorState = attachImmutableEntitiesToEmojis(editorState);

      if (!newEditorState.getCurrentContent().equals(editorState.getCurrentContent())) {
        // Forcing the current selection ensures that it will be at it's right place.
        // This solves the issue where inserting an Emoji on OSX with Apple's Emoji
        // selector led to the right selection the data, but wrong position in
        // the contenteditable.
        newEditorState = EditorState.forceSelection(newEditorState, newEditorState.getSelection());
      }

      if (callbacks.onChange) return callbacks.onChange(newEditorState);
      return newEditorState;
    }
  };
});

export default index;
export { defaultTheme };
