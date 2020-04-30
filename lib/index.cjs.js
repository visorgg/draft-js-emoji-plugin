'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var immutable = require('immutable');
var keys = _interopDefault(require('lodash/keys'));
var draftJs = require('draft-js');
var clsx = _interopDefault(require('clsx'));
var findWithRegex = _interopDefault(require('find-with-regex'));

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

var unicodeRegexp = "(\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC8B\\u200D\\uD83D\\uDC69|\\uD83D\\uDC68\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC8B\\u200D\\uD83D\\uDC68|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC69|\\uD83D\\uDC68\\uD83D\\uDC69\\uD83D\\uDC67\\uD83D\\uDC66|\\uD83D\\uDC68\\uD83D\\uDC69\\uD83D\\uDC66\\uD83D\\uDC66|\\uD83D\\uDC69\\uD83D\\uDC69\\uD83D\\uDC66\\uD83D\\uDC66|\\uD83D\\uDC68\\uD83D\\uDC68\\uD83D\\uDC67\\uD83D\\uDC67|\\uD83D\\uDC69\\uD83D\\uDC69\\uD83D\\uDC67\\uD83D\\uDC66|\\uD83D\\uDC68\\uD83D\\uDC68\\uD83D\\uDC67\\uD83D\\uDC66|\\uD83D\\uDC69\\uD83D\\uDC69\\uD83D\\uDC67\\uD83D\\uDC67|\\uD83D\\uDC68\\uD83D\\uDC69\\uD83D\\uDC67\\uD83D\\uDC67|\\uD83D\\uDC68\\uD83D\\uDC68\\uD83D\\uDC66\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC68|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u2764\\uD83D\\uDC8B\\uD83D\\uDC69|\\uD83D\\uDC68\\u2764\\uD83D\\uDC8B\\uD83D\\uDC68|\\uD83D\\uDC68\\uD83D\\uDC68\\uD83D\\uDC67|\\uD83D\\uDC68\\uD83D\\uDC68\\uD83D\\uDC66|\\uD83D\\uDC69\\uD83D\\uDC69\\uD83D\\uDC66|\\uD83D\\uDC69\\uD83D\\uDC69\\uD83D\\uDC67|\\uD83C\\uDFF3\\uFE0F\\u200D\\uD83C\\uDF08|\\uD83D\\uDC68\\uD83D\\uDC69\\uD83D\\uDC67|\\uD83D\\uDC68\\u2764\\uD83D\\uDC68|\\uD83D\\uDC41\\u200D\\uD83D\\uDDE8|\\uD83D\\uDC69\\u2764\\uD83D\\uDC69|\\uD83D\\uDC41\\uD83D\\uDDE8|\\uD83C\\uDDE6\\uD83C\\uDDE8|\\uD83C\\uDDE6\\uD83C\\uDDE9|\\uD83C\\uDDE6\\uD83C\\uDDEA|\\uD83C\\uDDE6\\uD83C\\uDDEB|\\uD83C\\uDDE6\\uD83C\\uDDEC|\\uD83C\\uDDE6\\uD83C\\uDDEE|\\uD83C\\uDDE6\\uD83C\\uDDF1|\\uD83C\\uDDE6\\uD83C\\uDDF2|\\uD83C\\uDDE6\\uD83C\\uDDF4|\\uD83C\\uDDE6\\uD83C\\uDDF6|\\uD83C\\uDDE6\\uD83C\\uDDF7|\\uD83C\\uDDE6\\uD83C\\uDDF8|\\uD83E\\uDD3E\\uD83C\\uDFFF|\\uD83E\\uDD3E\\uD83C\\uDFFE|\\uD83E\\uDD3E\\uD83C\\uDFFD|\\uD83E\\uDD3E\\uD83C\\uDFFC|\\uD83E\\uDD3E\\uD83C\\uDFFB|\\uD83E\\uDD3D\\uD83C\\uDFFF|\\uD83E\\uDD3D\\uD83C\\uDFFE|\\uD83E\\uDD3D\\uD83C\\uDFFD|\\uD83E\\uDD3D\\uD83C\\uDFFC|\\uD83E\\uDD3D\\uD83C\\uDFFB|\\uD83E\\uDD3C\\uD83C\\uDFFF|\\uD83E\\uDD3C\\uD83C\\uDFFE|\\uD83E\\uDD3C\\uD83C\\uDFFD|\\uD83E\\uDD3C\\uD83C\\uDFFC|\\uD83E\\uDD3C\\uD83C\\uDFFB|\\uD83E\\uDD39\\uD83C\\uDFFF|\\uD83E\\uDD39\\uD83C\\uDFFE|\\uD83E\\uDD39\\uD83C\\uDFFD|\\uD83E\\uDD39\\uD83C\\uDFFC|\\uD83E\\uDD39\\uD83C\\uDFFB|\\uD83E\\uDD38\\uD83C\\uDFFF|\\uD83E\\uDD38\\uD83C\\uDFFE|\\uD83E\\uDD38\\uD83C\\uDFFD|\\uD83E\\uDD38\\uD83C\\uDFFC|\\uD83E\\uDD38\\uD83C\\uDFFB|\\uD83E\\uDD37\\uD83C\\uDFFF|\\uD83E\\uDD37\\uD83C\\uDFFE|\\uD83E\\uDD37\\uD83C\\uDFFD|\\uD83E\\uDD37\\uD83C\\uDFFC|\\uD83E\\uDD37\\uD83C\\uDFFB|\\uD83E\\uDD36\\uD83C\\uDFFF|\\uD83E\\uDD36\\uD83C\\uDFFE|\\uD83E\\uDD36\\uD83C\\uDFFD|\\uD83E\\uDD36\\uD83C\\uDFFC|\\uD83E\\uDD36\\uD83C\\uDFFB|\\uD83E\\uDD35\\uD83C\\uDFFF|\\uD83E\\uDD35\\uD83C\\uDFFE|\\uD83E\\uDD35\\uD83C\\uDFFD|\\uD83E\\uDD35\\uD83C\\uDFFC|\\uD83E\\uDD35\\uD83C\\uDFFB|\\uD83E\\uDD34\\uD83C\\uDFFF|\\uD83E\\uDD34\\uD83C\\uDFFE|\\uD83E\\uDD34\\uD83C\\uDFFD|\\uD83E\\uDD34\\uD83C\\uDFFC|\\uD83E\\uDD34\\uD83C\\uDFFB|\\uD83E\\uDD33\\uD83C\\uDFFF|\\uD83E\\uDD33\\uD83C\\uDFFE|\\uD83E\\uDD33\\uD83C\\uDFFD|\\uD83E\\uDD33\\uD83C\\uDFFC|\\uD83E\\uDD33\\uD83C\\uDFFB|\\uD83E\\uDD30\\uD83C\\uDFFF|\\uD83E\\uDD30\\uD83C\\uDFFE|\\uD83E\\uDD30\\uD83C\\uDFFD|\\uD83E\\uDD30\\uD83C\\uDFFC|\\uD83E\\uDD30\\uD83C\\uDFFB|\\uD83E\\uDD26\\uD83C\\uDFFF|\\uD83E\\uDD26\\uD83C\\uDFFE|\\uD83E\\uDD26\\uD83C\\uDFFD|\\uD83E\\uDD26\\uD83C\\uDFFC|\\uD83E\\uDD26\\uD83C\\uDFFB|\\uD83E\\uDD1E\\uD83C\\uDFFF|\\uD83E\\uDD1E\\uD83C\\uDFFE|\\uD83E\\uDD1E\\uD83C\\uDFFD|\\uD83E\\uDD1E\\uD83C\\uDFFC|\\uD83E\\uDD1E\\uD83C\\uDFFB|\\uD83E\\uDD1D\\uD83C\\uDFFF|\\uD83E\\uDD1D\\uD83C\\uDFFE|\\uD83E\\uDD1D\\uD83C\\uDFFD|\\uD83E\\uDD1D\\uD83C\\uDFFC|\\uD83E\\uDD1D\\uD83C\\uDFFB|\\uD83E\\uDD1C\\uD83C\\uDFFF|\\uD83E\\uDD1C\\uD83C\\uDFFE|\\uD83E\\uDD1C\\uD83C\\uDFFD|\\uD83E\\uDD1C\\uD83C\\uDFFC|\\uD83E\\uDD1C\\uD83C\\uDFFB|\\uD83E\\uDD1B\\uD83C\\uDFFF|\\uD83E\\uDD1B\\uD83C\\uDFFE|\\uD83E\\uDD1B\\uD83C\\uDFFD|\\uD83E\\uDD1B\\uD83C\\uDFFC|\\uD83E\\uDD1B\\uD83C\\uDFFB|\\uD83E\\uDD1A\\uD83C\\uDFFF|\\uD83E\\uDD1A\\uD83C\\uDFFE|\\uD83E\\uDD1A\\uD83C\\uDFFD|\\uD83E\\uDD1A\\uD83C\\uDFFC|\\uD83E\\uDD1A\\uD83C\\uDFFB|\\uD83E\\uDD19\\uD83C\\uDFFF|\\uD83E\\uDD19\\uD83C\\uDFFE|\\uD83E\\uDD19\\uD83C\\uDFFD|\\uD83E\\uDD19\\uD83C\\uDFFC|\\uD83E\\uDD19\\uD83C\\uDFFB|\\uD83E\\uDD18\\uD83C\\uDFFF|\\uD83E\\uDD18\\uD83C\\uDFFE|\\uD83E\\uDD18\\uD83C\\uDFFD|\\uD83E\\uDD18\\uD83C\\uDFFC|\\uD83E\\uDD18\\uD83C\\uDFFB|\\uD83D\\uDEC0\\uD83C\\uDFFF|\\uD83D\\uDEC0\\uD83C\\uDFFE|\\uD83D\\uDEC0\\uD83C\\uDFFD|\\uD83D\\uDEC0\\uD83C\\uDFFC|\\uD83D\\uDEC0\\uD83C\\uDFFB|\\uD83D\\uDEB6\\uD83C\\uDFFF|\\uD83D\\uDEB6\\uD83C\\uDFFE|\\uD83D\\uDEB6\\uD83C\\uDFFD|\\uD83D\\uDEB6\\uD83C\\uDFFC|\\uD83D\\uDEB6\\uD83C\\uDFFB|\\uD83D\\uDEB5\\uD83C\\uDFFF|\\uD83D\\uDEB5\\uD83C\\uDFFE|\\uD83D\\uDEB5\\uD83C\\uDFFD|\\uD83D\\uDEB5\\uD83C\\uDFFC|\\uD83D\\uDEB5\\uD83C\\uDFFB|\\uD83D\\uDEB4\\uD83C\\uDFFF|\\uD83D\\uDEB4\\uD83C\\uDFFE|\\uD83D\\uDEB4\\uD83C\\uDFFD|\\uD83D\\uDEB4\\uD83C\\uDFFC|\\uD83D\\uDEB4\\uD83C\\uDFFB|\\uD83D\\uDEA3\\uD83C\\uDFFF|\\uD83D\\uDEA3\\uD83C\\uDFFE|\\uD83D\\uDEA3\\uD83C\\uDFFD|\\uD83D\\uDEA3\\uD83C\\uDFFC|\\uD83D\\uDEA3\\uD83C\\uDFFB|\\uD83D\\uDE4F\\uD83C\\uDFFF|\\uD83D\\uDE4F\\uD83C\\uDFFE|\\uD83D\\uDE4F\\uD83C\\uDFFD|\\uD83D\\uDE4F\\uD83C\\uDFFC|\\uD83D\\uDE4F\\uD83C\\uDFFB|\\uD83D\\uDE4E\\uD83C\\uDFFF|\\uD83D\\uDE4E\\uD83C\\uDFFE|\\uD83D\\uDE4E\\uD83C\\uDFFD|\\uD83D\\uDE4E\\uD83C\\uDFFC|\\uD83D\\uDE4E\\uD83C\\uDFFB|\\uD83D\\uDE4D\\uD83C\\uDFFF|\\uD83D\\uDE4D\\uD83C\\uDFFE|\\uD83D\\uDE4D\\uD83C\\uDFFD|\\uD83D\\uDE4D\\uD83C\\uDFFC|\\uD83D\\uDE4D\\uD83C\\uDFFB|\\uD83D\\uDE4C\\uD83C\\uDFFF|\\uD83D\\uDE4C\\uD83C\\uDFFE|\\uD83D\\uDE4C\\uD83C\\uDFFD|\\uD83D\\uDE4C\\uD83C\\uDFFC|\\uD83D\\uDE4C\\uD83C\\uDFFB|\\uD83D\\uDE4B\\uD83C\\uDFFF|\\uD83D\\uDE4B\\uD83C\\uDFFE|\\uD83D\\uDE4B\\uD83C\\uDFFD|\\uD83D\\uDE4B\\uD83C\\uDFFC|\\uD83D\\uDE4B\\uD83C\\uDFFB|\\uD83D\\uDE47\\uD83C\\uDFFF|\\uD83D\\uDE47\\uD83C\\uDFFE|\\uD83D\\uDE47\\uD83C\\uDFFD|\\uD83D\\uDE47\\uD83C\\uDFFC|\\uD83D\\uDE47\\uD83C\\uDFFB|\\uD83D\\uDE46\\uD83C\\uDFFF|\\uD83D\\uDE46\\uD83C\\uDFFE|\\uD83D\\uDE46\\uD83C\\uDFFD|\\uD83D\\uDE46\\uD83C\\uDFFC|\\uD83D\\uDE46\\uD83C\\uDFFB|\\uD83D\\uDE45\\uD83C\\uDFFF|\\uD83D\\uDE45\\uD83C\\uDFFE|\\uD83D\\uDE45\\uD83C\\uDFFD|\\uD83D\\uDE45\\uD83C\\uDFFC|\\uD83D\\uDE45\\uD83C\\uDFFB|\\uD83D\\uDD96\\uD83C\\uDFFF|\\uD83D\\uDD96\\uD83C\\uDFFE|\\uD83D\\uDD96\\uD83C\\uDFFD|\\uD83D\\uDD96\\uD83C\\uDFFC|\\uD83D\\uDD96\\uD83C\\uDFFB|\\uD83D\\uDD95\\uD83C\\uDFFF|\\uD83D\\uDD95\\uD83C\\uDFFE|\\uD83D\\uDD95\\uD83C\\uDFFD|\\uD83D\\uDD95\\uD83C\\uDFFC|\\uD83D\\uDD95\\uD83C\\uDFFB|\\uD83D\\uDD90\\uD83C\\uDFFF|\\uD83D\\uDD90\\uD83C\\uDFFE|\\uD83D\\uDD90\\uD83C\\uDFFD|\\uD83D\\uDD90\\uD83C\\uDFFC|\\uD83D\\uDD90\\uD83C\\uDFFB|\\uD83D\\uDD7A\\uD83C\\uDFFF|\\uD83D\\uDD7A\\uD83C\\uDFFE|\\uD83D\\uDD7A\\uD83C\\uDFFD|\\uD83D\\uDD7A\\uD83C\\uDFFC|\\uD83D\\uDD7A\\uD83C\\uDFFB|\\uD83D\\uDD75\\uD83C\\uDFFF|\\uD83D\\uDD75\\uD83C\\uDFFE|\\uD83D\\uDD75\\uD83C\\uDFFD|\\uD83D\\uDD75\\uD83C\\uDFFC|\\uD83D\\uDD75\\uD83C\\uDFFB|\\uD83D\\uDCAA\\uD83C\\uDFFF|\\uD83D\\uDCAA\\uD83C\\uDFFE|\\uD83D\\uDCAA\\uD83C\\uDFFD|\\uD83D\\uDCAA\\uD83C\\uDFFC|\\uD83D\\uDCAA\\uD83C\\uDFFB|\\uD83D\\uDC87\\uD83C\\uDFFF|\\uD83D\\uDC87\\uD83C\\uDFFE|\\uD83D\\uDC87\\uD83C\\uDFFD|\\uD83D\\uDC87\\uD83C\\uDFFC|\\uD83D\\uDC87\\uD83C\\uDFFB|\\uD83D\\uDC86\\uD83C\\uDFFF|\\uD83D\\uDC86\\uD83C\\uDFFE|\\uD83D\\uDC86\\uD83C\\uDFFD|\\uD83D\\uDC86\\uD83C\\uDFFC|\\uD83D\\uDC86\\uD83C\\uDFFB|\\uD83D\\uDC85\\uD83C\\uDFFF|\\uD83D\\uDC85\\uD83C\\uDFFE|\\uD83D\\uDC85\\uD83C\\uDFFD|\\uD83D\\uDC85\\uD83C\\uDFFC|\\uD83D\\uDC85\\uD83C\\uDFFB|\\uD83D\\uDC83\\uD83C\\uDFFF|\\uD83D\\uDC83\\uD83C\\uDFFE|\\uD83D\\uDC83\\uD83C\\uDFFD|\\uD83D\\uDC83\\uD83C\\uDFFC|\\uD83D\\uDC83\\uD83C\\uDFFB|\\uD83D\\uDC82\\uD83C\\uDFFF|\\uD83D\\uDC82\\uD83C\\uDFFE|\\uD83D\\uDC82\\uD83C\\uDFFD|\\uD83D\\uDC82\\uD83C\\uDFFC|\\uD83D\\uDC82\\uD83C\\uDFFB|\\uD83D\\uDC81\\uD83C\\uDFFF|\\uD83D\\uDC81\\uD83C\\uDFFE|\\uD83D\\uDC81\\uD83C\\uDFFD|\\uD83D\\uDC81\\uD83C\\uDFFC|\\uD83D\\uDC81\\uD83C\\uDFFB|\\uD83D\\uDC7C\\uD83C\\uDFFF|\\uD83D\\uDC7C\\uD83C\\uDFFE|\\uD83D\\uDC7C\\uD83C\\uDFFD|\\uD83D\\uDC7C\\uD83C\\uDFFC|\\uD83D\\uDC7C\\uD83C\\uDFFB|\\uD83D\\uDC78\\uD83C\\uDFFF|\\uD83D\\uDC78\\uD83C\\uDFFE|\\uD83D\\uDC78\\uD83C\\uDFFD|\\uD83D\\uDC78\\uD83C\\uDFFC|\\uD83D\\uDC78\\uD83C\\uDFFB|\\uD83D\\uDC77\\uD83C\\uDFFF|\\uD83D\\uDC77\\uD83C\\uDFFE|\\uD83D\\uDC77\\uD83C\\uDFFD|\\uD83D\\uDC77\\uD83C\\uDFFC|\\uD83D\\uDC77\\uD83C\\uDFFB|\\uD83D\\uDC76\\uD83C\\uDFFF|\\uD83D\\uDC76\\uD83C\\uDFFE|\\uD83D\\uDC76\\uD83C\\uDFFD|\\uD83D\\uDC76\\uD83C\\uDFFC|\\uD83D\\uDC76\\uD83C\\uDFFB|\\uD83D\\uDC75\\uD83C\\uDFFF|\\uD83D\\uDC75\\uD83C\\uDFFE|\\uD83D\\uDC75\\uD83C\\uDFFD|\\uD83D\\uDC75\\uD83C\\uDFFC|\\uD83D\\uDC75\\uD83C\\uDFFB|\\uD83D\\uDC74\\uD83C\\uDFFF|\\uD83D\\uDC74\\uD83C\\uDFFE|\\uD83D\\uDC74\\uD83C\\uDFFD|\\uD83D\\uDC74\\uD83C\\uDFFC|\\uD83D\\uDC74\\uD83C\\uDFFB|\\uD83D\\uDC73\\uD83C\\uDFFF|\\uD83D\\uDC73\\uD83C\\uDFFE|\\uD83D\\uDC73\\uD83C\\uDFFD|\\uD83D\\uDC73\\uD83C\\uDFFC|\\uD83D\\uDC73\\uD83C\\uDFFB|\\uD83D\\uDC72\\uD83C\\uDFFF|\\uD83D\\uDC72\\uD83C\\uDFFE|\\uD83D\\uDC72\\uD83C\\uDFFD|\\uD83D\\uDC72\\uD83C\\uDFFC|\\uD83D\\uDC72\\uD83C\\uDFFB|\\uD83D\\uDC71\\uD83C\\uDFFF|\\uD83D\\uDC71\\uD83C\\uDFFE|\\uD83D\\uDC71\\uD83C\\uDFFD|\\uD83D\\uDC71\\uD83C\\uDFFC|\\uD83D\\uDC71\\uD83C\\uDFFB|\\uD83D\\uDC70\\uD83C\\uDFFF|\\uD83D\\uDC70\\uD83C\\uDFFE|\\uD83D\\uDC70\\uD83C\\uDFFD|\\uD83D\\uDC70\\uD83C\\uDFFC|\\uD83D\\uDC70\\uD83C\\uDFFB|\\uD83D\\uDC6E\\uD83C\\uDFFF|\\uD83D\\uDC6E\\uD83C\\uDFFE|\\uD83D\\uDC6E\\uD83C\\uDFFD|\\uD83D\\uDC6E\\uD83C\\uDFFC|\\uD83D\\uDC6E\\uD83C\\uDFFB|\\uD83D\\uDC69\\uD83C\\uDFFF|\\uD83D\\uDC69\\uD83C\\uDFFE|\\uD83D\\uDC69\\uD83C\\uDFFD|\\uD83D\\uDC69\\uD83C\\uDFFC|\\uD83D\\uDC69\\uD83C\\uDFFB|\\uD83D\\uDC68\\uD83C\\uDFFF|\\uD83D\\uDC68\\uD83C\\uDFFE|\\uD83D\\uDC68\\uD83C\\uDFFD|\\uD83D\\uDC68\\uD83C\\uDFFC|\\uD83D\\uDC68\\uD83C\\uDFFB|\\uD83D\\uDC67\\uD83C\\uDFFF|\\uD83D\\uDC67\\uD83C\\uDFFE|\\uD83D\\uDC67\\uD83C\\uDFFD|\\uD83D\\uDC67\\uD83C\\uDFFC|\\uD83D\\uDC67\\uD83C\\uDFFB|\\uD83D\\uDC66\\uD83C\\uDFFF|\\uD83D\\uDC66\\uD83C\\uDFFE|\\uD83D\\uDC66\\uD83C\\uDFFD|\\uD83D\\uDC66\\uD83C\\uDFFC|\\uD83D\\uDC66\\uD83C\\uDFFB|\\uD83D\\uDC50\\uD83C\\uDFFF|\\uD83D\\uDC50\\uD83C\\uDFFE|\\uD83D\\uDC50\\uD83C\\uDFFD|\\uD83D\\uDC50\\uD83C\\uDFFC|\\uD83D\\uDC50\\uD83C\\uDFFB|\\uD83D\\uDC4F\\uD83C\\uDFFF|\\uD83D\\uDC4F\\uD83C\\uDFFE|\\uD83D\\uDC4F\\uD83C\\uDFFD|\\uD83D\\uDC4F\\uD83C\\uDFFC|\\uD83D\\uDC4F\\uD83C\\uDFFB|\\uD83D\\uDC4E\\uD83C\\uDFFF|\\uD83D\\uDC4E\\uD83C\\uDFFE|\\uD83D\\uDC4E\\uD83C\\uDFFD|\\uD83D\\uDC4E\\uD83C\\uDFFC|\\uD83D\\uDC4E\\uD83C\\uDFFB|\\uD83D\\uDC4D\\uD83C\\uDFFF|\\uD83D\\uDC4D\\uD83C\\uDFFE|\\uD83D\\uDC4D\\uD83C\\uDFFD|\\uD83D\\uDC4D\\uD83C\\uDFFC|\\uD83D\\uDC4D\\uD83C\\uDFFB|\\uD83D\\uDC4C\\uD83C\\uDFFF|\\uD83D\\uDC4C\\uD83C\\uDFFE|\\uD83D\\uDC4C\\uD83C\\uDFFD|\\uD83D\\uDC4C\\uD83C\\uDFFC|\\uD83D\\uDC4C\\uD83C\\uDFFB|\\uD83D\\uDC4B\\uD83C\\uDFFF|\\uD83D\\uDC4B\\uD83C\\uDFFE|\\uD83D\\uDC4B\\uD83C\\uDFFD|\\uD83D\\uDC4B\\uD83C\\uDFFC|\\uD83D\\uDC4B\\uD83C\\uDFFB|\\uD83D\\uDC4A\\uD83C\\uDFFF|\\uD83D\\uDC4A\\uD83C\\uDFFE|\\uD83D\\uDC4A\\uD83C\\uDFFD|\\uD83D\\uDC4A\\uD83C\\uDFFC|\\uD83D\\uDC4A\\uD83C\\uDFFB|\\uD83D\\uDC49\\uD83C\\uDFFF|\\uD83D\\uDC49\\uD83C\\uDFFE|\\uD83D\\uDC49\\uD83C\\uDFFD|\\uD83D\\uDC49\\uD83C\\uDFFC|\\uD83D\\uDC49\\uD83C\\uDFFB|\\uD83D\\uDC48\\uD83C\\uDFFF|\\uD83D\\uDC48\\uD83C\\uDFFE|\\uD83D\\uDC48\\uD83C\\uDFFD|\\uD83D\\uDC48\\uD83C\\uDFFC|\\uD83D\\uDC48\\uD83C\\uDFFB|\\uD83D\\uDC47\\uD83C\\uDFFF|\\uD83D\\uDC47\\uD83C\\uDFFE|\\uD83D\\uDC47\\uD83C\\uDFFD|\\uD83D\\uDC47\\uD83C\\uDFFC|\\uD83D\\uDC47\\uD83C\\uDFFB|\\uD83D\\uDC46\\uD83C\\uDFFF|\\uD83D\\uDC46\\uD83C\\uDFFE|\\uD83D\\uDC46\\uD83C\\uDFFD|\\uD83D\\uDC46\\uD83C\\uDFFC|\\uD83D\\uDC46\\uD83C\\uDFFB|\\uD83D\\uDC43\\uD83C\\uDFFF|\\uD83D\\uDC43\\uD83C\\uDFFE|\\uD83D\\uDC43\\uD83C\\uDFFD|\\uD83D\\uDC43\\uD83C\\uDFFC|\\uD83D\\uDC43\\uD83C\\uDFFB|\\uD83D\\uDC42\\uD83C\\uDFFF|\\uD83D\\uDC42\\uD83C\\uDFFE|\\uD83D\\uDC42\\uD83C\\uDFFD|\\uD83D\\uDC42\\uD83C\\uDFFC|\\uD83D\\uDC42\\uD83C\\uDFFB|\\uD83C\\uDFCB\\uD83C\\uDFFF|\\uD83C\\uDFCB\\uD83C\\uDFFE|\\uD83C\\uDFF3\\uD83C\\uDF08|\\uD83C\\uDFCB\\uD83C\\uDFFC|\\uD83C\\uDFCB\\uD83C\\uDFFB|\\uD83C\\uDFCA\\uD83C\\uDFFF|\\uD83C\\uDFCA\\uD83C\\uDFFE|\\uD83C\\uDFCA\\uD83C\\uDFFD|\\uD83C\\uDFCA\\uD83C\\uDFFC|\\uD83C\\uDFCA\\uD83C\\uDFFB|\\uD83C\\uDFC7\\uD83C\\uDFFF|\\uD83C\\uDFC7\\uD83C\\uDFFE|\\uD83C\\uDFC7\\uD83C\\uDFFD|\\uD83C\\uDFC7\\uD83C\\uDFFC|\\uD83C\\uDFC7\\uD83C\\uDFFB|\\uD83C\\uDFC4\\uD83C\\uDFFF|\\uD83C\\uDFCB\\uD83C\\uDFFD|\\uD83C\\uDFC4\\uD83C\\uDFFD|\\uD83C\\uDFC4\\uD83C\\uDFFC|\\uD83C\\uDFC4\\uD83C\\uDFFB|\\uD83C\\uDFC3\\uD83C\\uDFFF|\\uD83C\\uDFC3\\uD83C\\uDFFE|\\uD83C\\uDFC3\\uD83C\\uDFFD|\\uD83C\\uDFC3\\uD83C\\uDFFC|\\uD83C\\uDFC3\\uD83C\\uDFFB|\\uD83C\\uDF85\\uD83C\\uDFFF|\\uD83C\\uDF85\\uD83C\\uDFFE|\\uD83C\\uDF85\\uD83C\\uDFFD|\\uD83C\\uDF85\\uD83C\\uDFFC|\\uD83C\\uDF85\\uD83C\\uDFFB|\\uD83C\\uDDFF\\uD83C\\uDDFC|\\uD83C\\uDDFF\\uD83C\\uDDF2|\\uD83C\\uDDFF\\uD83C\\uDDE6|\\uD83C\\uDDFE\\uD83C\\uDDF9|\\uD83C\\uDDFE\\uD83C\\uDDEA|\\uD83C\\uDDFD\\uD83C\\uDDF0|\\uD83C\\uDDFC\\uD83C\\uDDF8|\\uD83C\\uDDFC\\uD83C\\uDDEB|\\uD83C\\uDDFB\\uD83C\\uDDFA|\\uD83C\\uDDFB\\uD83C\\uDDF3|\\uD83C\\uDDFB\\uD83C\\uDDEE|\\uD83C\\uDDFB\\uD83C\\uDDEC|\\uD83C\\uDDFB\\uD83C\\uDDEA|\\uD83C\\uDDFB\\uD83C\\uDDE8|\\uD83C\\uDDFB\\uD83C\\uDDE6|\\uD83C\\uDDFA\\uD83C\\uDDFF|\\uD83C\\uDDFA\\uD83C\\uDDFE|\\uD83C\\uDDFA\\uD83C\\uDDF8|\\uD83C\\uDDFA\\uD83C\\uDDF2|\\uD83C\\uDDFA\\uD83C\\uDDEC|\\uD83C\\uDDFA\\uD83C\\uDDE6|\\uD83C\\uDDF9\\uD83C\\uDDFF|\\uD83C\\uDDF9\\uD83C\\uDDFC|\\uD83C\\uDDF9\\uD83C\\uDDFB|\\uD83C\\uDDF9\\uD83C\\uDDF9|\\uD83C\\uDDF9\\uD83C\\uDDF7|\\uD83C\\uDDF9\\uD83C\\uDDF4|\\uD83C\\uDDF9\\uD83C\\uDDF3|\\uD83C\\uDDF9\\uD83C\\uDDF2|\\uD83C\\uDDF9\\uD83C\\uDDF1|\\uD83C\\uDDF9\\uD83C\\uDDF0|\\uD83C\\uDDF9\\uD83C\\uDDEF|\\uD83C\\uDDF9\\uD83C\\uDDED|\\uD83C\\uDDF9\\uD83C\\uDDEC|\\uD83C\\uDDF9\\uD83C\\uDDEB|\\uD83C\\uDDF9\\uD83C\\uDDE9|\\uD83C\\uDDF9\\uD83C\\uDDE8|\\uD83C\\uDDF9\\uD83C\\uDDE6|\\uD83C\\uDDF8\\uD83C\\uDDFF|\\uD83C\\uDDF8\\uD83C\\uDDFE|\\uD83C\\uDDF8\\uD83C\\uDDFD|\\uD83C\\uDDF8\\uD83C\\uDDFB|\\uD83C\\uDDF8\\uD83C\\uDDF9|\\uD83C\\uDDF8\\uD83C\\uDDF8|\\uD83C\\uDDF8\\uD83C\\uDDF7|\\uD83C\\uDDF8\\uD83C\\uDDF4|\\uD83C\\uDDF8\\uD83C\\uDDF3|\\uD83C\\uDDF8\\uD83C\\uDDF2|\\uD83C\\uDDF8\\uD83C\\uDDF1|\\uD83C\\uDDF8\\uD83C\\uDDF0|\\uD83C\\uDDF8\\uD83C\\uDDEF|\\uD83C\\uDDF8\\uD83C\\uDDEE|\\uD83C\\uDDF8\\uD83C\\uDDED|\\uD83C\\uDDF8\\uD83C\\uDDEC|\\uD83C\\uDDF8\\uD83C\\uDDEA|\\uD83C\\uDDF8\\uD83C\\uDDE9|\\uD83C\\uDDF8\\uD83C\\uDDE8|\\uD83C\\uDDF8\\uD83C\\uDDE7|\\uD83C\\uDDF8\\uD83C\\uDDE6|\\uD83C\\uDDF7\\uD83C\\uDDFC|\\uD83C\\uDDF7\\uD83C\\uDDFA|\\uD83C\\uDDF7\\uD83C\\uDDF8|\\uD83C\\uDDF7\\uD83C\\uDDF4|\\uD83C\\uDDF7\\uD83C\\uDDEA|\\uD83C\\uDDF6\\uD83C\\uDDE6|\\uD83C\\uDDF5\\uD83C\\uDDFE|\\uD83C\\uDDF5\\uD83C\\uDDFC|\\uD83C\\uDDF5\\uD83C\\uDDF9|\\uD83C\\uDDF5\\uD83C\\uDDF8|\\uD83C\\uDDF5\\uD83C\\uDDF7|\\uD83C\\uDDF5\\uD83C\\uDDF3|\\uD83C\\uDDF5\\uD83C\\uDDF2|\\uD83C\\uDDF5\\uD83C\\uDDF1|\\uD83C\\uDDF5\\uD83C\\uDDF0|\\uD83C\\uDDF5\\uD83C\\uDDED|\\uD83C\\uDDF5\\uD83C\\uDDEC|\\uD83C\\uDDF5\\uD83C\\uDDEB|\\uD83C\\uDDF5\\uD83C\\uDDEA|\\uD83C\\uDDF5\\uD83C\\uDDE6|\\uD83C\\uDDF4\\uD83C\\uDDF2|\\uD83C\\uDDF3\\uD83C\\uDDFF|\\uD83C\\uDDF3\\uD83C\\uDDFA|\\uD83C\\uDDF3\\uD83C\\uDDF7|\\uD83C\\uDDF3\\uD83C\\uDDF5|\\uD83C\\uDDF3\\uD83C\\uDDF4|\\uD83C\\uDDF3\\uD83C\\uDDF1|\\uD83C\\uDDF3\\uD83C\\uDDEE|\\uD83C\\uDDF3\\uD83C\\uDDEC|\\uD83C\\uDDF3\\uD83C\\uDDEB|\\uD83C\\uDDF3\\uD83C\\uDDEA|\\uD83C\\uDDF3\\uD83C\\uDDE8|\\uD83C\\uDDF3\\uD83C\\uDDE6|\\uD83C\\uDDF2\\uD83C\\uDDFF|\\uD83C\\uDDF2\\uD83C\\uDDFE|\\uD83C\\uDDF2\\uD83C\\uDDFD|\\uD83C\\uDDF2\\uD83C\\uDDFC|\\uD83C\\uDDF2\\uD83C\\uDDFB|\\uD83C\\uDDF2\\uD83C\\uDDFA|\\uD83C\\uDDF2\\uD83C\\uDDF9|\\uD83C\\uDDF2\\uD83C\\uDDF8|\\uD83C\\uDDF2\\uD83C\\uDDF7|\\uD83C\\uDDF2\\uD83C\\uDDF6|\\uD83C\\uDDF2\\uD83C\\uDDF5|\\uD83C\\uDDF2\\uD83C\\uDDF4|\\uD83C\\uDDF2\\uD83C\\uDDF3|\\uD83C\\uDDF2\\uD83C\\uDDF2|\\uD83C\\uDDF2\\uD83C\\uDDF1|\\uD83C\\uDDF2\\uD83C\\uDDF0|\\uD83C\\uDDF2\\uD83C\\uDDED|\\uD83C\\uDDF2\\uD83C\\uDDEC|\\uD83C\\uDDF2\\uD83C\\uDDEB|\\uD83C\\uDDF2\\uD83C\\uDDEA|\\uD83C\\uDDF2\\uD83C\\uDDE9|\\uD83C\\uDDF2\\uD83C\\uDDE8|\\uD83C\\uDDF2\\uD83C\\uDDE6|\\uD83C\\uDDF1\\uD83C\\uDDFE|\\uD83C\\uDDF1\\uD83C\\uDDFB|\\uD83C\\uDDF1\\uD83C\\uDDFA|\\uD83C\\uDDF1\\uD83C\\uDDF9|\\uD83C\\uDDF1\\uD83C\\uDDF8|\\uD83C\\uDDF1\\uD83C\\uDDF7|\\uD83C\\uDDF1\\uD83C\\uDDF0|\\uD83C\\uDDF1\\uD83C\\uDDEE|\\uD83C\\uDDF1\\uD83C\\uDDE8|\\uD83C\\uDDF1\\uD83C\\uDDE7|\\uD83C\\uDDF1\\uD83C\\uDDE6|\\uD83C\\uDDF0\\uD83C\\uDDFF|\\uD83C\\uDDF0\\uD83C\\uDDFE|\\uD83C\\uDDF0\\uD83C\\uDDFC|\\uD83C\\uDDF0\\uD83C\\uDDF7|\\uD83C\\uDDF0\\uD83C\\uDDF5|\\uD83C\\uDDF0\\uD83C\\uDDF3|\\uD83C\\uDDF0\\uD83C\\uDDF2|\\uD83C\\uDDF0\\uD83C\\uDDEE|\\uD83C\\uDDF0\\uD83C\\uDDED|\\uD83C\\uDDF0\\uD83C\\uDDEC|\\uD83C\\uDDF0\\uD83C\\uDDEA|\\uD83C\\uDDEF\\uD83C\\uDDF5|\\uD83C\\uDDEF\\uD83C\\uDDF4|\\uD83C\\uDDEF\\uD83C\\uDDF2|\\uD83C\\uDDEF\\uD83C\\uDDEA|\\uD83C\\uDDEE\\uD83C\\uDDF9|\\uD83C\\uDDEE\\uD83C\\uDDF8|\\uD83C\\uDDEE\\uD83C\\uDDF7|\\uD83C\\uDDEE\\uD83C\\uDDF6|\\uD83C\\uDDEE\\uD83C\\uDDF4|\\uD83C\\uDDEE\\uD83C\\uDDF3|\\uD83C\\uDDEE\\uD83C\\uDDF2|\\uD83C\\uDDEE\\uD83C\\uDDF1|\\uD83C\\uDDEE\\uD83C\\uDDEA|\\uD83C\\uDDEE\\uD83C\\uDDE9|\\uD83C\\uDDEE\\uD83C\\uDDE8|\\uD83C\\uDDED\\uD83C\\uDDFA|\\uD83C\\uDDED\\uD83C\\uDDF9|\\uD83C\\uDDED\\uD83C\\uDDF7|\\uD83C\\uDDED\\uD83C\\uDDF3|\\uD83C\\uDDED\\uD83C\\uDDF2|\\uD83C\\uDDED\\uD83C\\uDDF0|\\uD83C\\uDDEC\\uD83C\\uDDFE|\\uD83C\\uDDEC\\uD83C\\uDDFC|\\uD83C\\uDDEC\\uD83C\\uDDFA|\\uD83C\\uDDEC\\uD83C\\uDDF9|\\uD83C\\uDDEC\\uD83C\\uDDF8|\\uD83C\\uDDEC\\uD83C\\uDDF7|\\uD83C\\uDDEC\\uD83C\\uDDF6|\\uD83C\\uDDEC\\uD83C\\uDDF5|\\uD83C\\uDDEC\\uD83C\\uDDF3|\\uD83C\\uDDEC\\uD83C\\uDDF2|\\uD83C\\uDDEC\\uD83C\\uDDF1|\\uD83C\\uDDEC\\uD83C\\uDDEE|\\uD83C\\uDDEC\\uD83C\\uDDED|\\uD83C\\uDDEC\\uD83C\\uDDEC|\\uD83C\\uDDEC\\uD83C\\uDDEB|\\uD83C\\uDDEC\\uD83C\\uDDEA|\\uD83C\\uDDEC\\uD83C\\uDDE9|\\uD83C\\uDDEC\\uD83C\\uDDE7|\\uD83C\\uDDEC\\uD83C\\uDDE6|\\uD83C\\uDDEB\\uD83C\\uDDF7|\\uD83C\\uDDEB\\uD83C\\uDDF4|\\uD83C\\uDDEB\\uD83C\\uDDF2|\\uD83C\\uDDEB\\uD83C\\uDDF0|\\uD83C\\uDDEB\\uD83C\\uDDEF|\\uD83C\\uDDEB\\uD83C\\uDDEE|\\uD83C\\uDDEA\\uD83C\\uDDFA|\\uD83C\\uDDEA\\uD83C\\uDDF9|\\uD83C\\uDDEA\\uD83C\\uDDF8|\\uD83C\\uDDEA\\uD83C\\uDDF7|\\uD83C\\uDDEA\\uD83C\\uDDED|\\uD83C\\uDDEA\\uD83C\\uDDEC|\\uD83C\\uDDEA\\uD83C\\uDDEA|\\uD83C\\uDDEA\\uD83C\\uDDE8|\\uD83C\\uDDEA\\uD83C\\uDDE6|\\uD83C\\uDDE9\\uD83C\\uDDFF|\\uD83C\\uDDE9\\uD83C\\uDDF4|\\uD83C\\uDDE9\\uD83C\\uDDF2|\\uD83C\\uDDE9\\uD83C\\uDDF0|\\uD83C\\uDDE9\\uD83C\\uDDEF|\\uD83C\\uDDE9\\uD83C\\uDDEC|\\uD83C\\uDDE9\\uD83C\\uDDEA|\\uD83C\\uDDE8\\uD83C\\uDDFF|\\uD83C\\uDDE8\\uD83C\\uDDFE|\\uD83C\\uDDE8\\uD83C\\uDDFD|\\uD83C\\uDDE8\\uD83C\\uDDFC|\\uD83C\\uDDE8\\uD83C\\uDDFB|\\uD83C\\uDDE8\\uD83C\\uDDFA|\\uD83C\\uDDE8\\uD83C\\uDDF7|\\uD83C\\uDDE8\\uD83C\\uDDF5|\\uD83C\\uDDE8\\uD83C\\uDDF4|\\uD83C\\uDDE8\\uD83C\\uDDF3|\\uD83C\\uDDE8\\uD83C\\uDDF2|\\uD83C\\uDDE8\\uD83C\\uDDF1|\\uD83C\\uDDE8\\uD83C\\uDDF0|\\uD83C\\uDDE8\\uD83C\\uDDEE|\\uD83C\\uDDE8\\uD83C\\uDDED|\\uD83C\\uDDE8\\uD83C\\uDDEC|\\uD83C\\uDDE8\\uD83C\\uDDEB|\\uD83C\\uDDE8\\uD83C\\uDDE9|\\uD83C\\uDDE8\\uD83C\\uDDE8|\\uD83C\\uDDE8\\uD83C\\uDDE6|\\uD83C\\uDDE7\\uD83C\\uDDFF|\\uD83C\\uDDE7\\uD83C\\uDDFE|\\uD83C\\uDDE7\\uD83C\\uDDFC|\\uD83C\\uDDE7\\uD83C\\uDDFB|\\uD83C\\uDDE7\\uD83C\\uDDF9|\\uD83C\\uDDE7\\uD83C\\uDDF8|\\uD83C\\uDDE7\\uD83C\\uDDF7|\\uD83C\\uDDE7\\uD83C\\uDDF6|\\uD83C\\uDDE7\\uD83C\\uDDF4|\\uD83C\\uDDE7\\uD83C\\uDDF3|\\uD83C\\uDDE7\\uD83C\\uDDF2|\\uD83C\\uDDE7\\uD83C\\uDDF1|\\uD83C\\uDDE7\\uD83C\\uDDEF|\\uD83C\\uDDE7\\uD83C\\uDDEE|\\uD83C\\uDDE7\\uD83C\\uDDED|\\uD83C\\uDDE7\\uD83C\\uDDEC|\\uD83C\\uDDE7\\uD83C\\uDDEB|\\uD83C\\uDDE7\\uD83C\\uDDEA|\\uD83C\\uDDE7\\uD83C\\uDDE9|\\uD83C\\uDDE7\\uD83C\\uDDE7|\\uD83C\\uDDE7\\uD83C\\uDDE6|\\uD83C\\uDDE6\\uD83C\\uDDFF|\\uD83C\\uDDE6\\uD83C\\uDDFD|\\uD83C\\uDDE6\\uD83C\\uDDFC|\\uD83C\\uDDE6\\uD83C\\uDDFA|\\uD83C\\uDDE6\\uD83C\\uDDF9|\\uD83C\\uDFC4\\uD83C\\uDFFE|\\uD83D\\uDDE3\\uFE0F|\\u26F9\\uD83C\\uDFFF|\\u26F9\\uD83C\\uDFFE|\\u26F9\\uD83C\\uDFFD|\\u26F9\\uD83C\\uDFFC|\\u26F9\\uD83C\\uDFFB|\\u270D\\uD83C\\uDFFF|\\u270D\\uD83C\\uDFFE|\\u270D\\uD83C\\uDFFD|\\u270D\\uD83C\\uDFFC|\\u270D\\uD83C\\uDFFB|\\uD83C\\uDC04\\uFE0F|\\uD83C\\uDD7F\\uFE0F|\\uD83C\\uDE02\\uFE0F|\\uD83C\\uDE1A\\uFE0F|\\uD83C\\uDE2F\\uFE0F|\\uD83C\\uDE37\\uFE0F|\\uD83C\\uDF9E\\uFE0F|\\uD83C\\uDF9F\\uFE0F|\\uD83C\\uDFCB\\uFE0F|\\uD83C\\uDFCC\\uFE0F|\\uD83C\\uDFCD\\uFE0F|\\uD83C\\uDFCE\\uFE0F|\\uD83C\\uDF96\\uFE0F|\\uD83C\\uDF97\\uFE0F|\\uD83C\\uDF36\\uFE0F|\\uD83C\\uDF27\\uFE0F|\\uD83C\\uDF28\\uFE0F|\\uD83C\\uDF29\\uFE0F|\\uD83C\\uDF2A\\uFE0F|\\uD83C\\uDF2B\\uFE0F|\\uD83C\\uDF2C\\uFE0F|\\uD83D\\uDC3F\\uFE0F|\\uD83D\\uDD77\\uFE0F|\\uD83D\\uDD78\\uFE0F|\\uD83C\\uDF21\\uFE0F|\\uD83C\\uDF99\\uFE0F|\\uD83C\\uDF9A\\uFE0F|\\uD83C\\uDF9B\\uFE0F|\\uD83C\\uDFF3\\uFE0F|\\uD83C\\uDFF5\\uFE0F|\\uD83C\\uDFF7\\uFE0F|\\uD83D\\uDCFD\\uFE0F|\\uD83D\\uDD49\\uFE0F|\\uD83D\\uDD4A\\uFE0F|\\uD83D\\uDD6F\\uFE0F|\\uD83D\\uDD70\\uFE0F|\\uD83D\\uDD73\\uFE0F|\\uD83D\\uDD76\\uFE0F|\\uD83D\\uDD79\\uFE0F|\\uD83D\\uDD87\\uFE0F|\\uD83D\\uDD8A\\uFE0F|\\uD83D\\uDD8B\\uFE0F|\\uD83D\\uDD8C\\uFE0F|\\uD83D\\uDD8D\\uFE0F|\\uD83D\\uDDA5\\uFE0F|\\uD83D\\uDDA8\\uFE0F|\\uD83D\\uDDB2\\uFE0F|\\uD83D\\uDDBC\\uFE0F|\\uD83D\\uDDC2\\uFE0F|\\uD83D\\uDDC3\\uFE0F|\\uD83D\\uDDC4\\uFE0F|\\uD83D\\uDDD1\\uFE0F|\\uD83D\\uDDD2\\uFE0F|\\uD83D\\uDDD3\\uFE0F|\\uD83D\\uDDDC\\uFE0F|\\uD83D\\uDDDD\\uFE0F|\\uD83D\\uDDDE\\uFE0F|\\uD83D\\uDDE1\\uFE0F|\\u270B\\uD83C\\uDFFF|\\uD83D\\uDDE8\\uFE0F|\\uD83D\\uDDEF\\uFE0F|\\uD83D\\uDDF3\\uFE0F|\\uD83D\\uDDFA\\uFE0F|\\uD83D\\uDEE0\\uFE0F|\\uD83D\\uDEE1\\uFE0F|\\uD83D\\uDEE2\\uFE0F|\\uD83D\\uDEF0\\uFE0F|\\uD83C\\uDF7D\\uFE0F|\\uD83D\\uDC41\\uFE0F|\\uD83D\\uDD74\\uFE0F|\\uD83D\\uDD75\\uFE0F|\\uD83D\\uDD90\\uFE0F|\\uD83C\\uDFD4\\uFE0F|\\uD83C\\uDFD5\\uFE0F|\\uD83C\\uDFD6\\uFE0F|\\uD83C\\uDFD7\\uFE0F|\\uD83C\\uDFD8\\uFE0F|\\uD83C\\uDFD9\\uFE0F|\\uD83C\\uDFDA\\uFE0F|\\uD83C\\uDFDB\\uFE0F|\\uD83C\\uDFDC\\uFE0F|\\uD83C\\uDFDD\\uFE0F|\\uD83C\\uDFDE\\uFE0F|\\uD83C\\uDFDF\\uFE0F|\\uD83D\\uDECB\\uFE0F|\\uD83D\\uDECD\\uFE0F|\\uD83D\\uDECE\\uFE0F|\\uD83D\\uDECF\\uFE0F|\\uD83D\\uDEE3\\uFE0F|\\uD83D\\uDEE4\\uFE0F|\\uD83D\\uDEE5\\uFE0F|\\uD83D\\uDEE9\\uFE0F|\\uD83D\\uDEF3\\uFE0F|\\uD83C\\uDF24\\uFE0F|\\uD83C\\uDF25\\uFE0F|\\uD83C\\uDF26\\uFE0F|\\uD83D\\uDDB1\\uFE0F|\\u261D\\uD83C\\uDFFB|\\u261D\\uD83C\\uDFFC|\\u261D\\uD83C\\uDFFD|\\u261D\\uD83C\\uDFFE|\\u261D\\uD83C\\uDFFF|\\u270C\\uD83C\\uDFFB|\\u270C\\uD83C\\uDFFC|\\u270C\\uD83C\\uDFFD|\\u270C\\uD83C\\uDFFE|\\u270C\\uD83C\\uDFFF|\\u270A\\uD83C\\uDFFB|\\u270A\\uD83C\\uDFFC|\\u270A\\uD83C\\uDFFD|\\u270A\\uD83C\\uDFFE|\\u270A\\uD83C\\uDFFF|\\u270B\\uD83C\\uDFFB|\\u270B\\uD83C\\uDFFC|\\u270B\\uD83C\\uDFFD|\\u270B\\uD83C\\uDFFE|\\4\\uFE0F\\u20E3|\\9\\uFE0F\\u20E3|\\0\\uFE0F\\u20E3|\\1\\uFE0F\\u20E3|\\2\\uFE0F\\u20E3|\\3\\uFE0F\\u20E3|\\#\\uFE0F\\u20E3|\\5\\uFE0F\\u20E3|\\6\\uFE0F\\u20E3|\\7\\uFE0F\\u20E3|\\8\\uFE0F\\u20E3|\\*\\uFE0F\\u20E3|\\uD83D\\uDDE1|\\uD83D\\uDD77|\\uD83D\\uDDE3|\\uD83D\\uDEE4|\\uD83D\\uDDE8|\\uD83D\\uDD78|\\uD83D\\uDDEF|\\uD83C\\uDE37|\\uD83D\\uDDF3|\\uD83C\\uDF21|\\uD83D\\uDDFA|\\uD83D\\uDDB1|\\uD83D\\uDEE0|\\uD83C\\uDF99|\\uD83D\\uDEE1|\\uD83C\\uDF9E|\\uD83D\\uDEE2|\\uD83C\\uDF9A|\\uD83D\\uDEF0|\\uD83D\\uDEE3|\\uD83C\\uDF7D|\\uD83C\\uDF9B|\\uD83D\\uDC41|\\uD83C\\uDF9F|\\uD83D\\uDD74|\\uD83C\\uDFF3|\\uD83D\\uDD75|\\uD83D\\uDEF3|\\uD83D\\uDD90|\\uD83C\\uDFF5|\\uD83C\\uDFD4|\\uD83C\\uDFCB|\\uD83C\\uDFD5|\\uD83C\\uDFF7|\\uD83C\\uDFD6|\\uD83D\\uDECF|\\uD83C\\uDFD7|\\uD83D\\uDCFD|\\uD83C\\uDFD8|\\uD83C\\uDFCC|\\uD83C\\uDFD9|\\uD83D\\uDD49|\\uD83C\\uDFDA|\\uD83C\\uDF25|\\uD83C\\uDFDB|\\uD83D\\uDD4A|\\uD83C\\uDFDC|\\uD83C\\uDFCD|\\uD83C\\uDFDD|\\uD83D\\uDD6F|\\uD83C\\uDFDE|\\uD83D\\uDECE|\\uD83C\\uDFDF|\\uD83D\\uDD70|\\uD83D\\uDECB|\\uD83C\\uDFCE|\\uD83D\\uDECD|\\uD83D\\uDD73|\\uD83D\\uDECE|\\uD83D\\uDEE9|\\uD83D\\uDECF|\\uD83D\\uDD76|\\uD83D\\uDEE3|\\uD83C\\uDF96|\\uD83D\\uDEE4|\\uD83D\\uDD79|\\uD83D\\uDEE5|\\uD83D\\uDECD|\\uD83D\\uDEE9|\\uD83D\\uDD87|\\uD83D\\uDEF3|\\uD83C\\uDF97|\\uD83C\\uDF24|\\uD83D\\uDD8A|\\uD83C\\uDF25|\\uD83C\\uDC04|\\uD83C\\uDF26|\\uD83D\\uDD8B|\\uD83D\\uDDB1|\\uD83C\\uDF36|\\uD83D\\uDD8C|\\uD83C\\uDF26|\\uD83D\\uDD8D|\\uD83C\\uDF27|\\uD83D\\uDDA5|\\uD83C\\uDD7F|\\uD83D\\uDDA8|\\uD83C\\uDF28|\\uD83D\\uDDB2|\\uD83D\\uDECB|\\uD83D\\uDDBC|\\uD83C\\uDF29|\\uD83D\\uDDC2|\\uD83C\\uDE02|\\uD83D\\uDDC3|\\uD83C\\uDF2A|\\uD83D\\uDDC4|\\uD83D\\uDEE5|\\uD83D\\uDDD1|\\uD83C\\uDF2B|\\uD83D\\uDDD2|\\uD83C\\uDE1A|\\uD83D\\uDDD3|\\uD83C\\uDF2C|\\uD83D\\uDDDC|\\uD83C\\uDF24|\\uD83D\\uDDDD|\\uD83D\\uDC3F|\\uD83D\\uDDDE|\\u00A9\\uFE0F|\\uD83C\\uDFDF|\\u00AE\\uFE0F|\\uD83C\\uDFDE|\\u203C\\uFE0F|\\uD83C\\uDFDD|\\u2049\\uFE0F|\\uD83C\\uDFDC|\\u2122\\uFE0F|\\uD83C\\uDFDB|\\u2139\\uFE0F|\\uD83C\\uDFDA|\\u2194\\uFE0F|\\uD83C\\uDFD9|\\u2195\\uFE0F|\\uD83C\\uDFD8|\\u2196\\uFE0F|\\uD83C\\uDFD7|\\u2197\\uFE0F|\\uD83C\\uDFD6|\\u2198\\uFE0F|\\uD83C\\uDFD5|\\u2199\\uFE0F|\\uD83C\\uDFD4|\\u21A9\\uFE0F|\\uD83D\\uDD90|\\u21AA\\uFE0F|\\uD83D\\uDD75|\\u231A\\uFE0F|\\uD83D\\uDD74|\\u231B\\uFE0F|\\uD83D\\uDC41|\\u24C2\\uFE0F|\\uD83C\\uDF7D|\\u25AA\\uFE0F|\\uD83D\\uDEF0|\\u25AB\\uFE0F|\\uD83D\\uDEE2|\\u25B6\\uFE0F|\\uD83D\\uDEE1|\\u25C0\\uFE0F|\\uD83D\\uDEE0|\\u25FB\\uFE0F|\\uD83D\\uDDFA|\\u25FC\\uFE0F|\\uD83D\\uDDF3|\\u25FD\\uFE0F|\\uD83D\\uDDEF|\\u25FE\\uFE0F|\\uD83D\\uDDE8|\\u2600\\uFE0F|\\uD83D\\uDDE3|\\u2601\\uFE0F|\\uD83D\\uDDE1|\\u260E\\uFE0F|\\uD83D\\uDDDE|\\u2611\\uFE0F|\\uD83D\\uDDDD|\\u2614\\uFE0F|\\uD83D\\uDDDC|\\u2615\\uFE0F|\\uD83D\\uDDD3|\\u261D\\uFE0F|\\uD83D\\uDDD2|\\u263A\\uFE0F|\\uD83D\\uDDD1|\\u2648\\uFE0F|\\uD83D\\uDDC4|\\u2649\\uFE0F|\\uD83D\\uDDC3|\\u264A\\uFE0F|\\uD83D\\uDDC2|\\u264B\\uFE0F|\\uD83D\\uDDBC|\\u264C\\uFE0F|\\uD83D\\uDDB2|\\u264D\\uFE0F|\\uD83D\\uDDA8|\\u264E\\uFE0F|\\uD83D\\uDDA5|\\u264F\\uFE0F|\\uD83D\\uDD8D|\\u2650\\uFE0F|\\uD83D\\uDD8C|\\u2651\\uFE0F|\\uD83D\\uDD8B|\\u2652\\uFE0F|\\uD83D\\uDD8A|\\u2653\\uFE0F|\\uD83D\\uDD87|\\u2660\\uFE0F|\\uD83D\\uDD79|\\u2663\\uFE0F|\\uD83D\\uDD76|\\u2665\\uFE0F|\\uD83D\\uDD73|\\u2666\\uFE0F|\\uD83D\\uDD70|\\u2668\\uFE0F|\\uD83D\\uDD6F|\\u267B\\uFE0F|\\uD83D\\uDD4A|\\u267F\\uFE0F|\\uD83D\\uDD49|\\u2693\\uFE0F|\\uD83D\\uDCFD|\\u26A0\\uFE0F|\\uD83C\\uDFF7|\\u26A1\\uFE0F|\\uD83C\\uDFF5|\\u26AA\\uFE0F|\\uD83C\\uDFF3|\\u26AB\\uFE0F|\\uD83C\\uDF9B|\\u26BD\\uFE0F|\\uD83C\\uDF9A|\\u26BE\\uFE0F|\\uD83C\\uDF99|\\u26C4\\uFE0F|\\uD83C\\uDF21|\\u26C5\\uFE0F|\\uD83D\\uDD78|\\u26D4\\uFE0F|\\uD83D\\uDD77|\\u26EA\\uFE0F|\\uD83D\\uDC3F|\\uD83C\\uDE2F|\\uD83C\\uDF2C|\\u26F3\\uFE0F|\\uD83C\\uDF2B|\\u26F5\\uFE0F|\\uD83C\\uDF2A|\\u26FA\\uFE0F|\\uD83C\\uDF29|\\u26FD\\uFE0F|\\uD83C\\uDF28|\\u2702\\uFE0F|\\uD83C\\uDF27|\\u2708\\uFE0F|\\uD83C\\uDF36|\\u2709\\uFE0F|\\uD83C\\uDF97|\\u270C\\uFE0F|\\uD83C\\uDF96|\\u270F\\uFE0F|\\uD83C\\uDFCE|\\u2712\\uFE0F|\\uD83C\\uDFCD|\\u2714\\uFE0F|\\uD83C\\uDFCC|\\u2716\\uFE0F|\\uD83C\\uDFCB|\\u2733\\uFE0F|\\uD83C\\uDF9F|\\u2734\\uFE0F|\\uD83C\\uDF9E|\\u2744\\uFE0F|\\uD83C\\uDE37|\\u2747\\uFE0F|\\uD83C\\uDE2F|\\u2757\\uFE0F|\\uD83C\\uDE1A|\\u2764\\uFE0F|\\uD83C\\uDE02|\\u27A1\\uFE0F|\\uD83C\\uDD7F|\\u2934\\uFE0F|\\uD83C\\uDC04|\\u2935\\uFE0F|\\uD83C\\uDDE6|\\u2B05\\uFE0F|\\uD83C\\uDDE7|\\u2B06\\uFE0F|\\uD83C\\uDDE8|\\u2B07\\uFE0F|\\uD83C\\uDDE9|\\u2B1B\\uFE0F|\\uD83C\\uDDEA|\\u2B1C\\uFE0F|\\uD83C\\uDDEB|\\u2B50\\uFE0F|\\uD83C\\uDDEC|\\u2B55\\uFE0F|\\uD83C\\uDDED|\\u3030\\uFE0F|\\uD83C\\uDDEE|\\u303D\\uFE0F|\\uD83C\\uDDEF|\\u3297\\uFE0F|\\uD83C\\uDDF0|\\u3299\\uFE0F|\\uD83C\\uDDF1|\\u271D\\uFE0F|\\uD83C\\uDDF2|\\u2328\\uFE0F|\\uD83C\\uDDF3|\\u270D\\uFE0F|\\uD83C\\uDDF4|\\u23CF\\uFE0F|\\uD83C\\uDDF5|\\u23ED\\uFE0F|\\uD83C\\uDDF6|\\u23EE\\uFE0F|\\uD83C\\uDDF7|\\u23EF\\uFE0F|\\uD83C\\uDDF8|\\u23F1\\uFE0F|\\uD83C\\uDDF9|\\u23F2\\uFE0F|\\uD83C\\uDDFA|\\u23F8\\uFE0F|\\uD83C\\uDDFB|\\u23F9\\uFE0F|\\uD83C\\uDDFC|\\u23FA\\uFE0F|\\uD83E\\uDD5E|\\u2602\\uFE0F|\\uD83E\\uDD5D|\\u2603\\uFE0F|\\uD83E\\uDD5C|\\u2604\\uFE0F|\\uD83E\\uDD5B|\\u2618\\uFE0F|\\uD83E\\uDD5A|\\u2620\\uFE0F|\\uD83E\\uDD91|\\u2622\\uFE0F|\\uD83E\\uDD90|\\u2623\\uFE0F|\\uD83E\\uDD41|\\u2626\\uFE0F|\\uD83C\\uDFF8|\\u262A\\uFE0F|\\uD83C\\uDFD3|\\u262E\\uFE0F|\\uD83C\\uDFD2|\\u262F\\uFE0F|\\uD83C\\uDFD1|\\u2638\\uFE0F|\\uD83C\\uDFD0|\\u2639\\uFE0F|\\uD83C\\uDFCF|\\u2692\\uFE0F|\\uD83D\\uDCFF|\\u2694\\uFE0F|\\uD83D\\uDD4E|\\u2696\\uFE0F|\\uD83D\\uDD4D|\\u2697\\uFE0F|\\uD83D\\uDD4C|\\u2699\\uFE0F|\\uD83D\\uDD4B|\\u269B\\uFE0F|\\uD83D\\uDED0|\\u269C\\uFE0F|\\uD83C\\uDFFA|\\u26B0\\uFE0F|\\uD83C\\uDFF9|\\u26B1\\uFE0F|\\uD83C\\uDF7E|\\u26C8\\uFE0F|\\uD83C\\uDF7F|\\u26CF\\uFE0F|\\uD83C\\uDF2F|\\u26D1\\uFE0F|\\uD83C\\uDF2E|\\u26D3\\uFE0F|\\uD83C\\uDF2D|\\u26E9\\uFE0F|\\uD83E\\uDDC0|\\u26F0\\uFE0F|\\uD83E\\uDD83|\\u26F1\\uFE0F|\\uD83E\\uDD80|\\u26F4\\uFE0F|\\uD83E\\uDD82|\\u26F7\\uFE0F|\\uD83E\\uDD84|\\u26F8\\uFE0F|\\uD83E\\uDD81|\\u26F9\\uFE0F|\\uD83E\\uDD16|\\u2721\\uFE0F|\\uD83E\\uDD15|\\u2763\\uFE0F|\\uD83E\\uDD12|\\uD83E\\uDD49|\\uD83E\\uDD48|\\uD83E\\uDD47|\\uD83E\\uDD3A|\\uD83E\\uDD45|\\uD83E\\uDD3E|\\uD83C\\uDDFF|\\uD83E\\uDD3D|\\uD83E\\uDD4B|\\uD83E\\uDD4A|\\uD83E\\uDD3C|\\uD83E\\uDD39|\\uD83E\\uDD38|\\uD83D\\uDEF6|\\uD83D\\uDEF5|\\uD83D\\uDEF4|\\uD83D\\uDED2|\\uD83C\\uDCCF|\\uD83C\\uDD70|\\uD83C\\uDD71|\\uD83C\\uDD7E|\\uD83D\\uDED1|\\uD83C\\uDD8E|\\uD83C\\uDD91|\\uD83C\\uDDFE|\\uD83C\\uDD92|\\uD83C\\uDD93|\\uD83C\\uDD94|\\uD83C\\uDD95|\\uD83C\\uDD96|\\uD83C\\uDD97|\\uD83C\\uDD98|\\uD83E\\uDD44|\\uD83C\\uDD99|\\uD83C\\uDD9A|\\uD83E\\uDD42|\\uD83E\\uDD43|\\uD83C\\uDE01|\\uD83E\\uDD59|\\uD83C\\uDE32|\\uD83C\\uDE33|\\uD83C\\uDE34|\\uD83C\\uDE35|\\uD83C\\uDE36|\\uD83E\\uDD58|\\uD83C\\uDE38|\\uD83C\\uDE39|\\uD83E\\uDD57|\\uD83C\\uDE3A|\\uD83C\\uDE50|\\uD83C\\uDE51|\\uD83C\\uDF00|\\uD83E\\uDD56|\\uD83C\\uDF01|\\uD83C\\uDF02|\\uD83C\\uDF03|\\uD83C\\uDF04|\\uD83C\\uDF05|\\uD83C\\uDF06|\\uD83E\\uDD55|\\uD83C\\uDF07|\\uD83C\\uDF08|\\uD83E\\uDD54|\\uD83C\\uDF09|\\uD83C\\uDF0A|\\uD83C\\uDF0B|\\uD83C\\uDF0C|\\uD83C\\uDF0F|\\uD83C\\uDF11|\\uD83E\\uDD53|\\uD83C\\uDF13|\\uD83C\\uDF14|\\uD83C\\uDF15|\\uD83C\\uDF19|\\uD83C\\uDF1B|\\uD83C\\uDF1F|\\uD83E\\uDD52|\\uD83C\\uDF20|\\uD83C\\uDF30|\\uD83E\\uDD51|\\uD83C\\uDF31|\\uD83C\\uDF34|\\uD83C\\uDF35|\\uD83C\\uDF37|\\uD83C\\uDF38|\\uD83C\\uDF39|\\uD83C\\uDF3A|\\uD83C\\uDF3B|\\uD83C\\uDF3C|\\uD83C\\uDF3D|\\uD83E\\uDD50|\\uD83C\\uDF3E|\\uD83C\\uDF3F|\\uD83C\\uDF40|\\uD83C\\uDF41|\\uD83C\\uDF42|\\uD83C\\uDF43|\\uD83C\\uDF44|\\uD83C\\uDF45|\\uD83C\\uDF46|\\uD83C\\uDF47|\\uD83C\\uDF48|\\uD83C\\uDF49|\\uD83C\\uDF4A|\\uD83E\\uDD40|\\uD83C\\uDF4C|\\uD83C\\uDF4D|\\uD83C\\uDF4E|\\uD83C\\uDF4F|\\uD83C\\uDF51|\\uD83C\\uDF52|\\uD83C\\uDF53|\\uD83E\\uDD8F|\\uD83C\\uDF54|\\uD83C\\uDF55|\\uD83C\\uDF56|\\uD83E\\uDD8E|\\uD83C\\uDF57|\\uD83C\\uDF58|\\uD83C\\uDF59|\\uD83E\\uDD8D|\\uD83C\\uDF5A|\\uD83C\\uDF5B|\\uD83E\\uDD8C|\\uD83C\\uDF5C|\\uD83C\\uDF5D|\\uD83C\\uDF5E|\\uD83C\\uDF5F|\\uD83E\\uDD8B|\\uD83C\\uDF60|\\uD83C\\uDF61|\\uD83E\\uDD8A|\\uD83C\\uDF62|\\uD83C\\uDF63|\\uD83E\\uDD89|\\uD83C\\uDF64|\\uD83C\\uDF65|\\uD83E\\uDD88|\\uD83C\\uDF66|\\uD83E\\uDD87|\\uD83C\\uDF67|\\uD83C\\uDDFD|\\uD83C\\uDF68|\\uD83E\\uDD86|\\uD83C\\uDF69|\\uD83E\\uDD85|\\uD83C\\uDF6A|\\uD83D\\uDDA4|\\uD83C\\uDF6B|\\uD83C\\uDF6C|\\uD83C\\uDF6D|\\uD83C\\uDF6E|\\uD83C\\uDF6F|\\uD83E\\uDD1E|\\uD83C\\uDF70|\\uD83C\\uDF71|\\uD83C\\uDF72|\\uD83E\\uDD1D|\\uD83C\\uDF73|\\uD83C\\uDF74|\\uD83C\\uDF75|\\uD83C\\uDF76|\\uD83C\\uDF77|\\uD83C\\uDF78|\\uD83C\\uDF79|\\uD83C\\uDF7A|\\uD83C\\uDF7B|\\uD83C\\uDF80|\\uD83C\\uDF81|\\uD83C\\uDF82|\\uD83C\\uDF83|\\uD83E\\uDD1B|\\uD83E\\uDD1C|\\uD83C\\uDF84|\\uD83C\\uDF85|\\uD83C\\uDF86|\\uD83E\\uDD1A|\\uD83C\\uDF87|\\uD83C\\uDF88|\\uD83C\\uDF89|\\uD83C\\uDF8A|\\uD83C\\uDF8B|\\uD83C\\uDF8C|\\uD83E\\uDD19|\\uD83C\\uDF8D|\\uD83D\\uDD7A|\\uD83C\\uDF8E|\\uD83E\\uDD33|\\uD83C\\uDF8F|\\uD83E\\uDD30|\\uD83C\\uDF90|\\uD83E\\uDD26|\\uD83E\\uDD37|\\uD83C\\uDF91|\\uD83C\\uDF92|\\uD83C\\uDF93|\\uD83C\\uDFA0|\\uD83C\\uDFA1|\\uD83C\\uDFA2|\\uD83C\\uDFA3|\\uD83C\\uDFA4|\\uD83C\\uDFA5|\\uD83C\\uDFA6|\\uD83C\\uDFA7|\\uD83E\\uDD36|\\uD83C\\uDFA8|\\uD83E\\uDD35|\\uD83C\\uDFA9|\\uD83C\\uDFAA|\\uD83E\\uDD34|\\uD83C\\uDFAB|\\uD83C\\uDFAC|\\uD83C\\uDFAD|\\uD83E\\uDD27|\\uD83C\\uDFAE|\\uD83C\\uDFAF|\\uD83C\\uDFB0|\\uD83C\\uDFB1|\\uD83C\\uDFB2|\\uD83C\\uDFB3|\\uD83C\\uDFB4|\\uD83E\\uDD25|\\uD83C\\uDFB5|\\uD83C\\uDFB6|\\uD83C\\uDFB7|\\uD83E\\uDD24|\\uD83C\\uDFB8|\\uD83C\\uDFB9|\\uD83C\\uDFBA|\\uD83E\\uDD23|\\uD83C\\uDFBB|\\uD83C\\uDFBC|\\uD83C\\uDFBD|\\uD83E\\uDD22|\\uD83C\\uDFBE|\\uD83C\\uDFBF|\\uD83C\\uDFC0|\\uD83C\\uDFC1|\\uD83E\\uDD21|\\uD83C\\uDFC2|\\uD83C\\uDFC3|\\uD83C\\uDFC4|\\uD83C\\uDFC6|\\uD83C\\uDFC8|\\uD83C\\uDFCA|\\uD83C\\uDFE0|\\uD83C\\uDFE1|\\uD83C\\uDFE2|\\uD83C\\uDFE3|\\uD83C\\uDFE5|\\uD83C\\uDFE6|\\uD83C\\uDFE7|\\uD83C\\uDFE8|\\uD83C\\uDFE9|\\uD83C\\uDFEA|\\uD83C\\uDFEB|\\uD83C\\uDFEC|\\uD83E\\uDD20|\\uD83C\\uDFED|\\uD83C\\uDFEE|\\uD83C\\uDFEF|\\uD83C\\uDFF0|\\uD83D\\uDC0C|\\uD83D\\uDC0D|\\uD83D\\uDC0E|\\uD83D\\uDC11|\\uD83D\\uDC12|\\uD83D\\uDC14|\\uD83D\\uDC17|\\uD83D\\uDC18|\\uD83D\\uDC19|\\uD83D\\uDC1A|\\uD83D\\uDC1B|\\uD83D\\uDC1C|\\uD83D\\uDC1D|\\uD83D\\uDC1E|\\uD83D\\uDC1F|\\uD83D\\uDC20|\\uD83D\\uDC21|\\uD83D\\uDC22|\\uD83D\\uDC23|\\uD83D\\uDC24|\\uD83D\\uDC25|\\uD83D\\uDC26|\\uD83D\\uDC27|\\uD83D\\uDC28|\\uD83D\\uDC29|\\uD83D\\uDC2B|\\uD83D\\uDC2C|\\uD83D\\uDC2D|\\uD83D\\uDC2E|\\uD83D\\uDC2F|\\uD83D\\uDC30|\\uD83D\\uDC31|\\uD83D\\uDC32|\\uD83D\\uDC33|\\uD83D\\uDC34|\\uD83D\\uDC35|\\uD83D\\uDC36|\\uD83D\\uDC37|\\uD83D\\uDC38|\\uD83D\\uDC39|\\uD83D\\uDC3A|\\uD83D\\uDC3B|\\uD83D\\uDC3C|\\uD83D\\uDC3D|\\uD83D\\uDC3E|\\uD83D\\uDC40|\\uD83D\\uDC42|\\uD83D\\uDC43|\\uD83D\\uDC44|\\uD83D\\uDC45|\\uD83D\\uDC46|\\uD83D\\uDC47|\\uD83D\\uDC48|\\uD83D\\uDC49|\\uD83D\\uDC4A|\\uD83D\\uDC4B|\\uD83D\\uDC4C|\\uD83D\\uDC4D|\\uD83D\\uDC4E|\\uD83D\\uDC4F|\\uD83D\\uDC50|\\uD83D\\uDC51|\\uD83D\\uDC52|\\uD83D\\uDC53|\\uD83D\\uDC54|\\uD83D\\uDC55|\\uD83D\\uDC56|\\uD83D\\uDC57|\\uD83D\\uDC58|\\uD83D\\uDC59|\\uD83D\\uDC5A|\\uD83D\\uDC5B|\\uD83D\\uDC5C|\\uD83D\\uDC5D|\\uD83D\\uDC5E|\\uD83D\\uDC5F|\\uD83D\\uDC60|\\uD83D\\uDC61|\\uD83D\\uDC62|\\uD83D\\uDC63|\\uD83D\\uDC64|\\uD83D\\uDC66|\\uD83D\\uDC67|\\uD83D\\uDC68|\\uD83D\\uDC69|\\uD83D\\uDC6A|\\uD83D\\uDC6B|\\uD83D\\uDC6E|\\uD83D\\uDC6F|\\uD83D\\uDC70|\\uD83D\\uDC71|\\uD83D\\uDC72|\\uD83D\\uDC73|\\uD83D\\uDC74|\\uD83D\\uDC75|\\uD83D\\uDC76|\\uD83D\\uDC77|\\uD83D\\uDC78|\\uD83D\\uDC79|\\uD83D\\uDC7A|\\uD83D\\uDC7B|\\uD83D\\uDC7C|\\uD83D\\uDC7D|\\uD83D\\uDC7E|\\uD83D\\uDC7F|\\uD83D\\uDC80|\\uD83D\\uDCC7|\\uD83D\\uDC81|\\uD83D\\uDC82|\\uD83D\\uDC83|\\uD83D\\uDC84|\\uD83D\\uDC85|\\uD83D\\uDCD2|\\uD83D\\uDC86|\\uD83D\\uDCD3|\\uD83D\\uDC87|\\uD83D\\uDCD4|\\uD83D\\uDC88|\\uD83D\\uDCD5|\\uD83D\\uDC89|\\uD83D\\uDCD6|\\uD83D\\uDC8A|\\uD83D\\uDCD7|\\uD83D\\uDC8B|\\uD83D\\uDCD8|\\uD83D\\uDC8C|\\uD83D\\uDCD9|\\uD83D\\uDC8D|\\uD83D\\uDCDA|\\uD83D\\uDC8E|\\uD83D\\uDCDB|\\uD83D\\uDC8F|\\uD83D\\uDCDC|\\uD83D\\uDC90|\\uD83D\\uDCDD|\\uD83D\\uDC91|\\uD83D\\uDCDE|\\uD83D\\uDC92|\\uD83D\\uDCDF|\\uD83D\\uDCE0|\\uD83D\\uDC93|\\uD83D\\uDCE1|\\uD83D\\uDCE2|\\uD83D\\uDC94|\\uD83D\\uDCE3|\\uD83D\\uDCE4|\\uD83D\\uDC95|\\uD83D\\uDCE5|\\uD83D\\uDCE6|\\uD83D\\uDC96|\\uD83D\\uDCE7|\\uD83D\\uDCE8|\\uD83D\\uDC97|\\uD83D\\uDCE9|\\uD83D\\uDCEA|\\uD83D\\uDC98|\\uD83D\\uDCEB|\\uD83D\\uDCEE|\\uD83D\\uDC99|\\uD83D\\uDCF0|\\uD83D\\uDCF1|\\uD83D\\uDC9A|\\uD83D\\uDCF2|\\uD83D\\uDCF3|\\uD83D\\uDC9B|\\uD83D\\uDCF4|\\uD83D\\uDCF6|\\uD83D\\uDC9C|\\uD83D\\uDCF7|\\uD83D\\uDCF9|\\uD83D\\uDC9D|\\uD83D\\uDCFA|\\uD83D\\uDCFB|\\uD83D\\uDC9E|\\uD83D\\uDCFC|\\uD83D\\uDD03|\\uD83D\\uDC9F|\\uD83D\\uDD0A|\\uD83D\\uDD0B|\\uD83D\\uDCA0|\\uD83D\\uDD0C|\\uD83D\\uDD0D|\\uD83D\\uDCA1|\\uD83D\\uDD0E|\\uD83D\\uDD0F|\\uD83D\\uDCA2|\\uD83D\\uDD10|\\uD83D\\uDD11|\\uD83D\\uDCA3|\\uD83D\\uDD12|\\uD83D\\uDD13|\\uD83D\\uDCA4|\\uD83D\\uDD14|\\uD83D\\uDD16|\\uD83D\\uDCA5|\\uD83D\\uDD17|\\uD83D\\uDD18|\\uD83D\\uDCA6|\\uD83D\\uDD19|\\uD83D\\uDD1A|\\uD83D\\uDCA7|\\uD83D\\uDD1B|\\uD83D\\uDD1C|\\uD83D\\uDCA8|\\uD83D\\uDD1D|\\uD83D\\uDD1E|\\uD83D\\uDCA9|\\uD83D\\uDD1F|\\uD83D\\uDCAA|\\uD83D\\uDD20|\\uD83D\\uDD21|\\uD83D\\uDCAB|\\uD83D\\uDD22|\\uD83D\\uDD23|\\uD83D\\uDCAC|\\uD83D\\uDD24|\\uD83D\\uDD25|\\uD83D\\uDCAE|\\uD83D\\uDD26|\\uD83D\\uDD27|\\uD83D\\uDCAF|\\uD83D\\uDD28|\\uD83D\\uDD29|\\uD83D\\uDCB0|\\uD83D\\uDD2A|\\uD83D\\uDD2B|\\uD83D\\uDCB1|\\uD83D\\uDD2E|\\uD83D\\uDCB2|\\uD83D\\uDD2F|\\uD83D\\uDCB3|\\uD83D\\uDD30|\\uD83D\\uDD31|\\uD83D\\uDCB4|\\uD83D\\uDD32|\\uD83D\\uDD33|\\uD83D\\uDCB5|\\uD83D\\uDD34|\\uD83D\\uDD35|\\uD83D\\uDCB8|\\uD83D\\uDD36|\\uD83D\\uDD37|\\uD83D\\uDCB9|\\uD83D\\uDD38|\\uD83D\\uDD39|\\uD83D\\uDCBA|\\uD83D\\uDD3A|\\uD83D\\uDD3B|\\uD83D\\uDCBB|\\uD83D\\uDD3C|\\uD83D\\uDCBC|\\uD83D\\uDD3D|\\uD83D\\uDD50|\\uD83D\\uDCBD|\\uD83D\\uDD51|\\uD83D\\uDCBE|\\uD83D\\uDD52|\\uD83D\\uDCBF|\\uD83D\\uDD53|\\uD83D\\uDCC0|\\uD83D\\uDD54|\\uD83D\\uDD55|\\uD83D\\uDCC1|\\uD83D\\uDD56|\\uD83D\\uDD57|\\uD83D\\uDCC2|\\uD83D\\uDD58|\\uD83D\\uDD59|\\uD83D\\uDCC3|\\uD83D\\uDD5A|\\uD83D\\uDD5B|\\uD83D\\uDCC4|\\uD83D\\uDDFB|\\uD83D\\uDDFC|\\uD83D\\uDCC5|\\uD83D\\uDDFD|\\uD83D\\uDDFE|\\uD83D\\uDCC6|\\uD83D\\uDDFF|\\uD83D\\uDE01|\\uD83D\\uDE02|\\uD83D\\uDE03|\\uD83D\\uDCC8|\\uD83D\\uDE04|\\uD83D\\uDE05|\\uD83D\\uDCC9|\\uD83D\\uDE06|\\uD83D\\uDE09|\\uD83D\\uDCCA|\\uD83D\\uDE0A|\\uD83D\\uDE0B|\\uD83D\\uDCCB|\\uD83D\\uDE0C|\\uD83D\\uDE0D|\\uD83D\\uDCCC|\\uD83D\\uDE0F|\\uD83D\\uDE12|\\uD83D\\uDCCD|\\uD83D\\uDE13|\\uD83D\\uDE14|\\uD83D\\uDCCE|\\uD83D\\uDE16|\\uD83D\\uDE18|\\uD83D\\uDCCF|\\uD83D\\uDE1A|\\uD83D\\uDE1C|\\uD83D\\uDCD0|\\uD83D\\uDE1D|\\uD83D\\uDE1E|\\uD83D\\uDCD1|\\uD83D\\uDE20|\\uD83D\\uDE21|\\uD83D\\uDE22|\\uD83D\\uDE23|\\uD83D\\uDE24|\\uD83D\\uDE25|\\uD83D\\uDE28|\\uD83D\\uDE29|\\uD83D\\uDE2A|\\uD83D\\uDE2B|\\uD83D\\uDE2D|\\uD83D\\uDE30|\\uD83D\\uDE31|\\uD83D\\uDE32|\\uD83D\\uDE33|\\uD83D\\uDE35|\\uD83D\\uDE37|\\uD83D\\uDE38|\\uD83D\\uDE39|\\uD83D\\uDE3A|\\uD83D\\uDE3B|\\uD83D\\uDE3C|\\uD83D\\uDE3D|\\uD83D\\uDE3E|\\uD83D\\uDE3F|\\uD83D\\uDE40|\\uD83D\\uDE45|\\uD83D\\uDE46|\\uD83D\\uDE47|\\uD83D\\uDE48|\\uD83D\\uDE49|\\uD83D\\uDE4A|\\uD83D\\uDE4B|\\uD83D\\uDE4C|\\uD83D\\uDE4D|\\uD83D\\uDE4E|\\uD83D\\uDE4F|\\uD83D\\uDE80|\\uD83D\\uDE83|\\uD83D\\uDE84|\\uD83D\\uDE85|\\uD83D\\uDE87|\\uD83D\\uDE89|\\uD83D\\uDE8C|\\uD83D\\uDE8F|\\uD83D\\uDE91|\\uD83D\\uDE92|\\uD83D\\uDE93|\\uD83D\\uDE95|\\uD83D\\uDE97|\\uD83D\\uDE99|\\uD83D\\uDE9A|\\uD83D\\uDEA2|\\uD83D\\uDEA4|\\uD83D\\uDEA5|\\uD83D\\uDEA7|\\uD83D\\uDEA8|\\uD83D\\uDEA9|\\uD83D\\uDEAA|\\uD83D\\uDEAB|\\uD83D\\uDEAC|\\uD83D\\uDEAD|\\uD83D\\uDEB2|\\uD83D\\uDEB6|\\uD83D\\uDEB9|\\uD83D\\uDEBA|\\uD83D\\uDEBB|\\uD83D\\uDEBC|\\uD83D\\uDEBD|\\uD83D\\uDEBE|\\uD83D\\uDEC0|\\uD83E\\uDD18|\\uD83D\\uDE00|\\uD83D\\uDE07|\\uD83D\\uDE08|\\uD83D\\uDE0E|\\uD83D\\uDE10|\\uD83D\\uDE11|\\uD83D\\uDE15|\\uD83D\\uDE17|\\uD83D\\uDE19|\\uD83D\\uDE1B|\\uD83D\\uDE1F|\\uD83D\\uDE26|\\uD83D\\uDE27|\\uD83D\\uDE2C|\\uD83D\\uDE2E|\\uD83D\\uDE2F|\\uD83D\\uDE34|\\uD83D\\uDE36|\\uD83D\\uDE81|\\uD83D\\uDE82|\\uD83D\\uDE86|\\uD83D\\uDE88|\\uD83D\\uDE8A|\\uD83D\\uDE8D|\\uD83D\\uDE8E|\\uD83D\\uDE90|\\uD83D\\uDE94|\\uD83D\\uDE96|\\uD83D\\uDE98|\\uD83D\\uDE9B|\\uD83D\\uDE9C|\\uD83D\\uDE9D|\\uD83D\\uDE9E|\\uD83D\\uDE9F|\\uD83D\\uDEA0|\\uD83D\\uDEA1|\\uD83D\\uDEA3|\\uD83D\\uDEA6|\\uD83D\\uDEAE|\\uD83D\\uDEAF|\\uD83D\\uDEB0|\\uD83D\\uDEB1|\\uD83D\\uDEB3|\\uD83D\\uDEB4|\\uD83D\\uDEB5|\\uD83D\\uDEB7|\\uD83D\\uDEB8|\\uD83D\\uDEBF|\\uD83D\\uDEC1|\\uD83D\\uDEC2|\\uD83D\\uDEC3|\\uD83D\\uDEC4|\\uD83D\\uDEC5|\\uD83C\\uDF0D|\\uD83C\\uDF0E|\\uD83C\\uDF10|\\uD83C\\uDF12|\\uD83C\\uDF16|\\uD83C\\uDF17|\\uD83C\\uDF18|\\uD83C\\uDF1A|\\uD83C\\uDF1C|\\uD83C\\uDF1D|\\uD83C\\uDF1E|\\uD83C\\uDF32|\\uD83C\\uDF33|\\uD83C\\uDF4B|\\uD83C\\uDF50|\\uD83C\\uDF7C|\\uD83C\\uDFC7|\\uD83C\\uDFC9|\\uD83C\\uDFE4|\\uD83D\\uDC00|\\uD83D\\uDC01|\\uD83D\\uDC02|\\uD83D\\uDC03|\\uD83D\\uDC04|\\uD83D\\uDC05|\\uD83D\\uDC06|\\uD83D\\uDC07|\\uD83D\\uDC08|\\uD83D\\uDC09|\\uD83D\\uDC0A|\\uD83D\\uDC0B|\\uD83D\\uDC0F|\\uD83D\\uDC10|\\uD83D\\uDC13|\\uD83D\\uDC15|\\uD83D\\uDC16|\\uD83D\\uDC2A|\\uD83D\\uDC65|\\uD83D\\uDC6C|\\uD83D\\uDC6D|\\uD83D\\uDCAD|\\uD83D\\uDCB6|\\uD83D\\uDCB7|\\uD83D\\uDCEC|\\uD83D\\uDCED|\\uD83D\\uDCEF|\\uD83D\\uDCF5|\\uD83D\\uDD00|\\uD83D\\uDD01|\\uD83D\\uDD02|\\uD83D\\uDD04|\\uD83D\\uDD05|\\uD83D\\uDD06|\\uD83D\\uDD07|\\uD83D\\uDD09|\\uD83D\\uDD15|\\uD83D\\uDD2C|\\uD83D\\uDD2D|\\uD83D\\uDD5C|\\uD83D\\uDD5D|\\uD83D\\uDD5E|\\uD83D\\uDD5F|\\uD83D\\uDD60|\\uD83D\\uDD61|\\uD83D\\uDD62|\\uD83D\\uDD63|\\uD83D\\uDD64|\\uD83D\\uDD65|\\uD83D\\uDD66|\\uD83D\\uDD67|\\uD83D\\uDD08|\\uD83D\\uDE8B|\\uD83C\\uDFC5|\\uD83C\\uDFF4|\\uD83D\\uDCF8|\\uD83D\\uDECC|\\uD83D\\uDD95|\\uD83D\\uDD96|\\uD83D\\uDE41|\\uD83D\\uDE42|\\uD83D\\uDEEB|\\uD83D\\uDEEC|\\uD83C\\uDFFB|\\uD83C\\uDFFC|\\uD83C\\uDFFD|\\uD83C\\uDFFE|\\uD83C\\uDFFF|\\uD83D\\uDE43|\\uD83E\\uDD11|\\uD83E\\uDD13|\\uD83E\\uDD17|\\uD83D\\uDE44|\\uD83E\\uDD14|\\uD83E\\uDD10|\\u26F2\\uFE0F|\\#\\u20E3|\\9\\u20E3|\\8\\u20E3|\\7\\u20E3|\\6\\u20E3|\\*\\u20E3|\\4\\u20E3|\\3\\u20E3|\\2\\u20E3|\\1\\u20E3|\\0\\u20E3|\\5\\u20E3|\\u26B1|\\u26B0|\\u269C|\\u269B|\\u2699|\\u2697|\\u2696|\\u2694|\\u2692|\\u2639|\\u2638|\\u262F|\\u262E|\\u262A|\\u2626|\\u2623|\\u2622|\\u2620|\\u2618|\\u2604|\\u2603|\\u2602|\\u23FA|\\u23F9|\\u23F8|\\u23F2|\\u23F1|\\u23EF|\\u23EE|\\u23ED|\\u23CF|\\u270D|\\u2328|\\u271D|\\u3299|\\u3297|\\u303D|\\u3030|\\u2B55|\\u2B50|\\u2B1C|\\u2B1B|\\u2B07|\\u2B06|\\u2B05|\\u2935|\\u23E9|\\u23EA|\\u23EB|\\u23EC|\\u23F0|\\u23F3|\\u26CE|\\u2705|\\u270A|\\u270B|\\u2728|\\u274C|\\u274E|\\u2753|\\u2754|\\u2755|\\u2795|\\u2796|\\u2797|\\u27B0|\\u27BF|\\u00A9|\\u00AE|\\u203C|\\u2049|\\u2122|\\u2139|\\u2194|\\u2195|\\u2196|\\u2197|\\u2198|\\u2199|\\u21A9|\\u21AA|\\u231A|\\u231B|\\u24C2|\\u25AA|\\u25AB|\\u25B6|\\u25C0|\\u25FB|\\u25FC|\\u25FD|\\u25FE|\\u2600|\\u2601|\\u260E|\\u2611|\\u2614|\\u2615|\\u261D|\\u263A|\\u2648|\\u2649|\\u264A|\\u264B|\\u264C|\\u264D|\\u264E|\\u264F|\\u2650|\\u2651|\\u2652|\\u2653|\\u2660|\\u2663|\\u2665|\\u2666|\\u2668|\\u267B|\\u267F|\\u2693|\\u26A0|\\u26A1|\\u26AA|\\u26AB|\\u26BD|\\u26BE|\\u26C4|\\u26C5|\\u26D4|\\u26EA|\\u26F2|\\u26F3|\\u26F5|\\u26FA|\\u26FD|\\u2702|\\u2708|\\u2709|\\u270C|\\u270F|\\u2712|\\u2714|\\u2716|\\u2733|\\u2734|\\u2744|\\u2747|\\u2721|\\u2764|\\u27A1|\\u2934|\\u2935|\\u2B05|\\u2B06|\\u2B07|\\u2B1B|\\u2B1C|\\u2B50|\\u2B55|\\u3030|\\u303D|\\u3297|\\u3299|\\u2934|\\u27A1|\\u2764|\\u2757|\\u2747|\\u2744|\\u2734|\\u2733|\\u2716|\\u2714|\\u2712|\\u270F|\\u270C|\\u2709|\\u2708|\\u2702|\\u26FD|\\u26FA|\\u26F5|\\u26F3|\\u26F2|\\u26EA|\\u26D4|\\u26C5|\\u26C4|\\u26BE|\\u26BD|\\u26AB|\\u26AA|\\u26A1|\\u26A0|\\u2693|\\u271D|\\u267F|\\u267B|\\u2668|\\u2666|\\u2665|\\u2663|\\u2660|\\u2653|\\u2652|\\u2651|\\u2650|\\u264F|\\u264E|\\u264D|\\u2328|\\u264C|\\u264B|\\u264A|\\u2649|\\u2648|\\u263A|\\u261D|\\u2615|\\u2614|\\u2611|\\u260E|\\u2601|\\u2600|\\u25FE|\\u25FD|\\u25FC|\\u25FB|\\u25C0|\\u25B6|\\u25AB|\\u25AA|\\u24C2|\\u231B|\\u231A|\\u21AA|\\u270D|\\u21A9|\\u2199|\\u2198|\\u2197|\\u2196|\\u2195|\\u2194|\\u2139|\\u2122|\\u2049|\\u203C|\\u00AE|\\u00A9|\\u2763|\\u26F9|\\u26F8|\\u26F7|\\u26F4|\\u26F1|\\u26F0|\\u26E9|\\u26D3|\\u23CF|\\u23ED|\\u23EE|\\u23EF|\\u23F1|\\u23F2|\\u23F8|\\u23F9|\\u23FA|\\u2602|\\u2603|\\u2604|\\u2618|\\u2620|\\u2622|\\u2623|\\u2626|\\u262A|\\u262E|\\u262F|\\u2638|\\u2639|\\u2692|\\u2694|\\u2696|\\u2697|\\u2699|\\u269B|\\u269C|\\u26B0|\\u26B1|\\u26C8|\\u26CF|\\u26D1|\\u26D3|\\u26E9|\\u26F0|\\u26F1|\\u26F4|\\u26F7|\\u26F8|\\u26F9|\\u2721|\\u2763|\\u26D1|\\u26CF|\\u26C8|\\u2757)";

var MAYHEM_EMOJI = {
  unicodeRegexp: unicodeRegexp,
  toShort: function toShort(str) {
    return str;
  },
  getShortnameFromEmoji: function getShortnameFromEmoji() {
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
var setEmojiImageNameGetter = function setEmojiImageNameGetter(callback) {
  Object.assign(MAYHEM_EMOJI, {
    getShortnameFromEmoji: callback
  });
};
var setShortNameGetter = function setShortNameGetter(callback) {
  Object.assign(MAYHEM_EMOJI, {
    toShort: callback
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
    emojiDisplay = /*#__PURE__*/React__default.createElement("span", {
      title: MAYHEM_EMOJI.toShort(decoratedText)
    }, props.children);
  } else {
    // short name to image url code steal from emojione source code
    var emojiObj = MAYHEM_EMOJI.emojiList[shortName];
    var shortNameForImage = MAYHEM_EMOJI.getShortnameFromEmoji(emojiObj);
    var backgroundImage = "url(".concat(imagePath).concat(shortNameForImage, ".").concat(imageType).concat(cacheBustParam, ")");
    var combinedClassName = clsx(theme.emoji, className);
    emojiDisplay = /*#__PURE__*/React__default.createElement("span", {
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
        var unicode = emojiList.list[this.props.emoji][0];
        emojiDisplay = convertShortNameToUnicode(unicode);
      } else {
        // short name to image url code steal from emojione source code
        var emojiObj = MAYHEM_EMOJI.emojiList[this.props.emoji];
        var shortNameForImage = MAYHEM_EMOJI.getShortnameFromEmoji(emojiObj);
        var fullImagePath = "".concat(imagePath).concat(shortNameForImage, ".").concat(imageType).concat(cacheBustParam);
        emojiDisplay = /*#__PURE__*/React__default.createElement("img", {
          src: fullImagePath,
          className: theme.emojiSuggestionsEntryIcon,
          role: "presentation"
        });
      }

      return /*#__PURE__*/React__default.createElement("div", {
        className: className,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseEnter: this.onMouseEnter,
        role: "option",
        id: id,
        "aria-selected": isFocused ? 'true' : null
      }, emojiDisplay, /*#__PURE__*/React__default.createElement("span", {
        className: theme.emojiSuggestionsEntryText
      }, this.props.emoji));
    }
  }]);

  return Entry;
}(React.Component);

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
  var unicode = emojiList.list[emojiShortName][0];
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
        var afterRemovalContentState = draftJs.Modifier.removeRange(contentState, currentSelectionState, 'backward'); // deciding on the position to insert emoji

        var targetSelection = afterRemovalContentState.getSelectionAfter();
        emojiAddedContent = draftJs.Modifier.insertText(afterRemovalContentState, targetSelection, emoji, null, entityKey);
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
        emojiAddedContent = draftJs.Modifier.replaceText(contentState, emojiTextSelection, emoji, null, entityKey);
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
    emojiAddedContent = draftJs.Modifier.insertText(emojiAddedContent, emojiAddedContent.getSelectionAfter(), ' ');
  }

  var newEditorState = draftJs.EditorState.push(editorState, emojiAddedContent, 'insert-emoji');
  return draftJs.EditorState.forceSelection(newEditorState, emojiAddedContent.getSelectionAfter());
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
      this.key = draftJs.genKey();
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

      return /*#__PURE__*/React__default.createElement("div", _extends({}, restProps, {
        className: theme.emojiSuggestions,
        role: "listbox",
        id: "emojis-list-".concat(this.key),
        ref: function ref(element) {
          _this3.popover = element;
        }
      }), this.filteredEmojis.map(function (emoji, index) {
        return /*#__PURE__*/React__default.createElement(Entry, {
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
}(React.Component);

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
      return /*#__PURE__*/React__default.createElement("span", {
        className: this.key,
        ref: this.searchPortalRef
      }, this.props.children);
    }
  }]);

  return EmojiSuggestionsPortal;
}(React.Component);

var unicodeRegex = new RegExp(MAYHEM_EMOJI.unicodeRegexp, 'g');
var emojiStrategy = (function (contentBlock, callback) {
  findWithRegex(unicodeRegex, contentBlock, callback);
});

var EMOJI_REGEX = /(\s|^):[\w]*/g;
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

      var selection = draftJs.SelectionState.createEmpty(block.getKey()).set('anchorOffset', start).set('focusOffset', end);
      var emojiText = plainText.substring(start, end);
      var contentStateWithEntity = newContentState.createEntity('emoji', 'IMMUTABLE', {
        emojiUnicode: emojiText
      });
      var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      newContentState = draftJs.Modifier.replaceText(newContentState, selection, emojiText, null, entityKey);
    };

    findWithRegex(unicodeRegex$1, block, addEntityToEmoji);
  });

  if (!newContentState.equals(contentState)) {
    return draftJs.EditorState.push(editorState, newContentState, 'convert-to-immutable-emojis');
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
  var searches = immutable.Map();
  var escapedSearch;
  var clientRectFunctions = immutable.Map();
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
      emojiImageNameGetter = config.emojiImageNameGetter,
      shortNameGetter = config.shortNameGetter,
      unicodeGetter = config.unicodeGetter,
      expose = config.expose;
  var cacheBustParam = allowImageCache ? '' : defaultCacheBustParam; // Update the name getter if possible, this allows us to define what name to use for this image.

  if (emojiImageNameGetter) {
    setEmojiImageNameGetter(emojiImageNameGetter);
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
    shortNames: immutable.List(keys(emojiList.list)),
    useNativeArt: useNativeArt
  };

  var DecoratedEmojiSuggestions = function DecoratedEmojiSuggestions(props) {
    return /*#__PURE__*/React__default.createElement(EmojiSuggestions, _extends({}, props, suggestionsProps));
  };

  var DecoratedEmoji = function DecoratedEmoji(props) {
    return /*#__PURE__*/React__default.createElement(Emoji, _extends({}, props, {
      theme: theme,
      imagePath: imagePath,
      imageType: imageType,
      cacheBustParam: cacheBustParam,
      useNativeArt: useNativeArt
    }));
  };

  var DecoratedEmojiSuggestionsPortal = function DecoratedEmojiSuggestionsPortal(props) {
    return /*#__PURE__*/React__default.createElement(EmojiSuggestionsPortal, _extends({}, props, {
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
        newEditorState = draftJs.EditorState.forceSelection(newEditorState, newEditorState.getSelection());
      }

      if (callbacks.onChange) return callbacks.onChange(newEditorState);
      return newEditorState;
    }
  };
});

exports.default = index;
exports.defaultTheme = defaultTheme;
