(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _ScrollManager = _interopRequireDefault(require("./scroll/vendors/ScrollManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ==========================================================================
// App
// ==========================================================================

/* jshint esnext: true */
(function () {
  // Init Locomotive Scroll
  var smoothScroll = new _ScrollManager["default"]({
    container: $('#js-scroll'),
    sections: '.js-section',
    selector: '.js-animate',
    smooth: true,
    smoothMobile: false,
    mobileContainer: $(document.body),
    getDirection: true,
    getSpeed: true,
    inertia: 1,
    scrollBarClassName: 'o-scrollbar',
    isScrollingClassName: 'is-scrolling',
    onScroll: function onScroll(e) {// console.log(e.scroll.y);
    }
  });
})();

},{"./scroll/vendors/ScrollManager":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DEFAULTS = exports.EVENT = exports.EVENT_KEY = void 0;

var _Scroll2 = _interopRequireWildcard(require("./vendors/Scroll"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * UNCOMMENT ONLY THE LINES YOU NEED
 */
// import { $window, $document } from '../../utils/environment';
// import debounce from '../../utils/debounce';
// import { isNumeric } from '../../utils/is';
var EVENT_KEY = _Scroll2.EVENT_KEY;
exports.EVENT_KEY = EVENT_KEY;
var EVENT = Object.assign(_Scroll2.EVENT, {// TEST: `test.${EVENT_KEY}`
});
exports.EVENT = EVENT;
var DEFAULTS = Object.assign(_Scroll2.DEFAULTS, {});
exports.DEFAULTS = DEFAULTS;

var _default =
/*#__PURE__*/
function (_Scroll) {
  _inherits(_default, _Scroll);

  function _default(options) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, options));
  }

  return _default;
}(_Scroll2["default"]);

exports["default"] = _default;

},{"./vendors/Scroll":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SmoothScroll2 = _interopRequireDefault(require("./vendors/SmoothScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * UNCOMMENT ONLY THE LINES YOU NEED
 */
// import { $window, $document, $html } from '../utils/environment';
// import Scroll, { DEFAULTS, EVENT } from './Scroll';
// import debounce from '../utils/debounce';
// import Scrollbar from 'smooth-scrollbar';
// import { isNumeric } from '../utils/is';
var _default =
/*#__PURE__*/
function (_SmoothScroll) {
  _inherits(_default, _SmoothScroll);

  function _default(options) {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, options));
  }

  return _default;
}(_SmoothScroll2["default"]);

exports["default"] = _default;

},{"./vendors/SmoothScroll":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DEFAULTS = exports.EVENT = exports.EVENT_KEY = void 0;

var _environment = require("../../utils/environment");

var _debounce = _interopRequireDefault(require("../../utils/debounce"));

var _is = require("../../utils/is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EVENT_KEY = "LocomotiveScroll";
exports.EVENT_KEY = EVENT_KEY;
var EVENT = {
  CLICK: "click.".concat(EVENT_KEY),
  ISREADY: "isReady.".concat(EVENT_KEY),
  REBUILD: "rebuild.".concat(EVENT_KEY),
  RENDER: "render.".concat(EVENT_KEY),
  RESIZE: "resize.".concat(EVENT_KEY),
  SCROLL: "scroll.".concat(EVENT_KEY),
  SCROLLTO: "scrollTo.".concat(EVENT_KEY),
  UPDATE: "update.".concat(EVENT_KEY)
};
exports.EVENT = EVENT;
var DEFAULTS = {
  container: _environment.$body,
  sections: '.js-section',
  mobileContainer: _environment.$body,
  onScroll: function onScroll() {},
  selector: '.js-animate',
  smooth: false,
  smoothMobile: false,
  reversed: false,
  getDirection: false,
  getSpeed: false,
  scrollBarClassName: 'o-scrollbar',
  isScrollingClassName: 'is-scrolling'
};
/**
 * Manage animation of elements on the page according to scroll position.
 *
 * @todo  Manage some options (normally from data attributes) with constructor options (ex.: set repeat for all)
 * @todo  Method to get the distance (as percentage) of an element in the viewport
 */

exports.DEFAULTS = DEFAULTS;

var _default =
/*#__PURE__*/
function () {
  function _default(options) {
    _classCallCheck(this, _default);

    this.$container = options.container ? options.container : DEFAULTS.container;
    this.selector = options.selector ? options.selector : DEFAULTS.selector;
    this.callbacks = {
      onScroll: typeof options.onScroll === 'function' ? options.onScroll : DEFAULTS.onScroll
    };
    this.instance = {
      scroll: {
        x: 0,
        y: 0,
        direction: ''
      }
    };
    this.windowHeight = _environment.$window.height();
    this.windowMiddle = this.windowHeight / 2;
    this.animatedElements = [];
    this.requestId = undefined;
  }
  /**
   * Initialize scrolling animations
   */


  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.addElements();
      this.render(); // On scroll

      _environment.$document.on(EVENT.SCROLL, function () {
        _this.render();
      }); // Rebuild event


      _environment.$document.on(EVENT.REBUILD, function () {
        _this.update();
      }); // Update event


      _environment.$document.on(EVENT.UPDATE, function (event, options) {
        return _this.update(options);
      }); // Render event


      _environment.$document.on(EVENT.RENDER, function () {
        return _this.render();
      }); // Scrollto button event


      _environment.$document.on(EVENT.CLICK, '.js-scrollto', function (event) {
        event.preventDefault();

        _this.scrollTo({
          sourceElem: event.currentTarget,
          offsetElem: event.currentTarget.getAttribute('data-offset')
        });
      });

      _environment.$document.on(EVENT.SCROLLTO, function (event) {
        return _this.scrollTo(event.options);
      }); // Setup done


      _environment.$document.triggerHandler({
        type: EVENT.ISREADY
      }); // Resize event


      _environment.$window.on(EVENT.RESIZE, (0, _debounce["default"])(function () {
        _this.update();
      }, 20));
    }
    /**
     * Find all animatable elements.
     * Called on page load and any subsequent updates.
     */

  }, {
    key: "addElements",
    value: function addElements() {
      this.animatedElements = [];
      var elements = document.querySelectorAll(this.selector);
      var len = elements.length;
      var i = 0;

      for (; i < len; i++) {
        var element = elements[i];
        var elementTarget = element.getAttribute('data-target');
        var elementPosition = element.getAttribute('data-position');
        var target = elementTarget && document.querySelectorAll(elementTarget).length ? document.querySelectorAll(elementTarget) : element;
        var elementOffset = parseInt(target.getBoundingClientRect().top + this.instance.scroll.y);
        var elementLimit = elementOffset + target.offsetHeight;
        var elementSticky = typeof element.getAttribute('data-sticky') === 'string';
        var elementStickyTarget = element.getAttribute('data-sticky-target');
        var elementViewportOffset = null;

        if (typeof element.getAttribute('data-viewport-offset') === 'string') {
          elementViewportOffset = element.getAttribute('data-viewport-offset').split(',');
        } //Manage callback


        var elementCallbackString = typeof element.getAttribute('data-callback') === 'string' ? element.getAttribute('data-callback') : null;
        var elementCallback = null;

        if (elementCallbackString != null) {
          var event = elementCallbackString.substr(0, elementCallbackString.indexOf('('));
          var optionsString = elementCallbackString.substr(elementCallbackString.indexOf('('), elementCallbackString.length - event.length);
          optionsString = optionsString.replace('(', '');
          optionsString = optionsString.replace(')', '');
          var options = optionsString.split('|');
          var obj = {};

          for (var j = 0; j < options.length; j++) {
            var option = options[j].split(':');
            option[0] = option[0].replace(' ', '');
            var val = void 0; //check if value is a boolean

            if (option[1] === "true") {
              val = true;
            } else if (option[1] === "false") {
              val = false;
            } //check if value is numeric
            else if (/^\d+$/.test(option[1])) {
                val = parseInt(option[1]);
              } //check if value is a String
              else {
                  val = option[1];
                }

            obj[option[0]] = val;
          }

          elementCallback = {
            event: event,
            options: obj
          };
        } // If elements loses its animation after scrolling past it


        var elementRepeat = typeof element.getAttribute('data-repeat') === 'string';
        var elementInViewClass = element.getAttribute('data-inview-class');

        if (typeof elementInViewClass === 'undefined') {
          elementInViewClass = 'is-show';
        }

        if (elementSticky) {
          if (!elementStickyTarget) {
            elementLimit = this.$container[0].offsetHeight;
          } else {
            var stickyTargetEl = document.querySelectorAll(elementStickyTarget)[0];
            var stickyTargetBCR = stickyTargetEl.getBoundingClientRect();
            elementLimit = stickyTargetBCR.top + document.body.scrollTop - element.offsetHeight;
          } // Reset offset


          element.classList.remove(elementInViewClass);
          element.classList.remove('is-unstuck');
          var transformValue = 'translate3d(0, 0, 0)';
          element.style.webkitTransform = transformValue;
          element.style.MozTransform = transformValue;
          element.style.msTransform = transformValue;
          element.style.OTransform = transformValue;
          element.style.transform = transformValue;
        } // Don't add element if it already has its inview class and doesn't repeat


        if (elementRepeat || !element.classList.contains(elementInViewClass)) {
          this.animatedElements[i] = {
            element: element,
            $element: $(element),
            // TEMPORARY
            offset: Math.round(elementOffset),
            repeat: elementRepeat,
            position: elementPosition,
            limit: elementLimit,
            inViewClass: elementInViewClass,
            sticky: elementSticky,
            callback: elementCallback,
            viewportOffset: elementViewportOffset
          };
        }
      }

      ;
    }
    /**
     * Loop through all animatable elements and apply animation method(s).
     */

  }, {
    key: "animateElements",
    value: function animateElements() {
      var len = this.animatedElements.length;
      var removeIndexes = [];
      var i = 0;

      for (; i < len; i++) {
        var element = this.animatedElements[i]; // If the element's visibility must not be manipulated any further, remove it from the list

        if (this.toggleElement(element, i)) {
          removeIndexes.push(i);
        }
      } // Remove animated elements after looping through elements


      i = removeIndexes.length;

      while (i--) {
        this.animatedElements.splice(removeIndexes[i], 1);
      }
    }
    /**
     * Render the class animations, and update the global scroll positionning.
     */

  }, {
    key: "render",
    value: function render() {
      // if (window.pageYOffset > this.instance.scroll.y) {
      //     if (this.instance.scroll.direction !== 'down') {
      //         this.instance.scroll.direction = 'down';
      //     }
      // } else if (window.pageYOffset < this.instance.scroll.y) {
      //     if (this.instance.scroll.direction !== 'up') {
      //         this.instance.scroll.direction = 'up';
      //     }
      // }
      if (this.instance.scroll.y !== window.pageYOffset) {
        this.instance.scroll.y = window.pageYOffset;
      }

      if (this.instance.scroll.x !== window.pageXOffset) {
        this.instance.scroll.x = window.pageXOffset;
      }

      this.callbacks.onScroll(this.scroll);
      this.animateElements();
    }
    /**
     * Toggle classes on an element if it's visible.
     *
     * @param  {object}      element Current element to test
     * @param  {int}         index   Index of the element within it's container
     * @return {boolean}             Wether the item must be removed from its container
     */

  }, {
    key: "toggleElement",
    value: function toggleElement(element, index) {
      var removeFromContainer = false;

      if (typeof element !== 'undefined') {
        // Find the bottom edge of the scroll container
        var scrollTop = this.instance.scroll.y;
        var scrollBottom = scrollTop + this.windowHeight; // Define if the element is inView

        var inView = false;

        if (element.position === 'top') {
          inView = scrollTop >= element.offset && scrollTop <= element.limit;
        } else if (element.position === 'below') {
          inView = scrollTop > element.limit;
        } else if (element.sticky) {
          inView = scrollTop >= element.offset && scrollTop <= element.limit;
        } else if (element.viewportOffset != undefined) {
          if (element.viewportOffset.length > 1) {
            var scrollViewportOffsetTop = scrollTop + this.windowHeight * element.viewportOffset[1];
            var scrollViewportOffsetBottom = scrollBottom - this.windowHeight * element.viewportOffset[0];
            inView = scrollViewportOffsetBottom > element.offset && scrollViewportOffsetTop < element.limit;
          } else {
            var scrollViewportOffset = scrollBottom - this.windowHeight * element.viewportOffset[0];
            inView = scrollViewportOffset > element.offset && scrollViewportOffset < element.limit;
          }
        } else {
          inView = scrollBottom >= element.offset && scrollTop <= element.limit;
        }

        if (element.sticky) {
          if (scrollTop > element.limit) {
            element.element.classList.add('is-unstuck');
          } else {
            element.element.classList.remove('is-unstuck');
          }

          if (scrollTop < element.offset) {
            element.element.classList.remove(element.inViewClass);
          }
        } // Add class if inView, remove if not


        if (inView) {
          if (!element.element.classList.contains(element.inViewClass)) {
            element.element.classList.add(element.inViewClass);
            this.triggerCallback(element, 'enter');
          }

          if (!element.repeat && !element.sticky) {
            removeFromContainer = true;
          }

          if (element.sticky) {
            var y = this.instance.scroll.y - element.offset;
            var transformValue = "translate3d(0, ".concat(y, "px, 0)");
            element.element.style.webkitTransform = transformValue;
            element.element.style.MozTransform = transformValue;
            element.element.style.msTransform = transformValue;
            element.element.style.OTransform = transformValue;
            element.element.style.transform = transformValue;
          }
        } else {
          if (element.repeat) {
            if (element.element.classList.contains(element.inViewClass)) {
              element.element.classList.remove(element.inViewClass);
              this.triggerCallback(element, 'leave');
            }
          }
        }
      }

      return removeFromContainer;
    }
    /**
     * check if the element have a callback, and trigger the event set in the data-callback
     *
     * @param  {object}      element Current element to test
     * @return void
     */

  }, {
    key: "triggerCallback",
    value: function triggerCallback(element, way) {
      if (element.callback != undefined) {
        element.$element.trigger({
          type: element.callback.event,
          options: element.callback.options,
          way: way
        }); //add this where you want dude (in your module btw)
        // $document.on(event.Namespace,(e)=>{
        //     console.log(e.options, e.way);
        // });
        /////////////////////////////////////////////
      }
    }
    /**
     * Scroll to a desired target.
     *
     * @param  {object} options
     *      Available options :
     *          {node} targetElem - The DOM element we want to scroll to
     *          {node} sourceElem - An `<a>` element with an href targeting the anchor we want to scroll to
     *          {node} offsetElem - A DOM element from which we get the height to substract from the targetOffset
     *              (ex: use offsetElem to pass a mobile header that is above content, to make sure the scrollTo will be aligned with it)
     *          {int} targetOffset - An absolute vertical scroll value to reach, or an offset to apply on top of given `targetElem` or `sourceElem`'s target
     *          {int} delay - Amount of milliseconds to wait before starting to scroll
     *          {boolean} toTop - Set to true to scroll all the way to the top
     *          {boolean} toBottom - Set to true to scroll all the way to the bottom
     *          {float} speed - Duration of the scroll
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(options) {
      var targetElem = options.targetElem;
      var sourceElem = options.sourceElem;
      var offsetElem = options.offsetElem;
      var targetOffset = (0, _is.isNumeric)(options.targetOffset) ? parseInt(options.targetOffset) : 0;
      var delay = (0, _is.isNumeric)(options.delay) ? parseInt(options.delay) : 0;
      var speed = (0, _is.isNumeric)(options.speed) ? parseInt(options.speed) : 800;
      var toTop = options.toTop;
      var toBottom = options.toBottom;
      var offset = 0; // Make sure at least one of the required options has beeen filled

      if (!toTop && !toBottom && !(0, _is.isNumeric)(options.targetOffset) && !targetElem && !sourceElem) {
        console.warn("You must specify at least one of these parameters:", ['{boolean} toTop - Set to true to scroll all the way to the top', '{boolean} toBottom - Set to true to scroll all the way to the bottom', '{int} targetOffset - An absolute vertical scroll value to reach, or an offset to apply on top of given `targetElem` or `sourceElem`\'s target', '{node} targetElem - The DOM element we want to scroll to', '{node} sourceElem - An `<a>` element with an href targeting the anchor we want to scroll to']);
        return false;
      } // If sourceElem is given, find and store the targetElem it's related to


      if (sourceElem) {
        var targetData = '';
        console.log(sourceElem); // Get the selector (given with `data-target` or `href` attributes on sourceElem)

        var sourceElemTarget = sourceElem.getAttribute('data-target');
        targetData = sourceElemTarget ? sourceElemTarget : sourceElem.getAttribute('href'); // Store the target for later

        targetElem = document.querySelectorAll(targetData)[0];
      } // We have a targetElem, get it's coordinates


      if (targetElem) {
        // Get targetElem offset from top
        var targetElemBCR = targetElem.getBoundingClientRect();
        var targetElemOffsetTop = targetElemBCR.top + document.documentElement.scrollTop; // TODO - Improve current scroll position source, might not always be documentElement
        // Final value of scroll destination : targetElemOffsetTop + (optional offset given in options)

        targetOffset = targetElemOffsetTop + targetOffset;
      } // We have an offsetElem, get its height and remove it from targetOffset already computed


      if (offsetElem) {
        var _offset = offsetElem.offsetHeight;
        targetOffset = targetOffset - _offset;
      } // If we want to go to one of boundaries


      if (toTop === true) {
        targetOffset = 0;
      } else if (toBottom === true) {
        targetOffset = document.body.offsetHeight; // TODO - Improve container height source, might not always be the body
      }

      setTimeout(function () {
        $('html, body').animate({
          // TODO - Remove jQuery here
          scrollTop: targetOffset
        }, speed);
      }, delay);
    }
    /**
     * Update elements and recalculate all the positions on the page
     */

  }, {
    key: "update",
    value: function update() {
      this.addElements();
      this.animateElements();
      this.windowHeight = _environment.$window.height();
      this.windowMiddle = this.windowHeight / 2;
    }
    /**
     * Destroy
     */

  }, {
    key: "destroy",
    value: function destroy() {
      _environment.$window.off(".".concat(EVENT_KEY));

      this.$container.off(".".concat(EVENT_KEY));
      window.cancelAnimationFrame(this.requestId);
      this.requestId = undefined;
      this.animatedElements = undefined;
    }
  }]);

  return _default;
}();

exports["default"] = _default;

},{"../../utils/debounce":7,"../../utils/environment":8,"../../utils/is":10}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _environment = require("../../utils/environment");

var _Scroll = _interopRequireWildcard(require("../Scroll"));

var _SmoothScroll = _interopRequireDefault(require("../SmoothScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Basic module that detects which scrolling module we'll be using
 */
var _default =
/*#__PURE__*/
function () {
  function _default(options) {
    _classCallCheck(this, _default);

    this.options = options;
    this.smooth = options.smooth || _Scroll.DEFAULTS.smooth;
    this.smoothMobile = options.smoothMobile || _Scroll.DEFAULTS.smoothMobile;
    this.mobileContainer = options.mobileContainer || _Scroll.DEFAULTS.mobileContainer;
    this.isMobile = false;
    this.init();
  }

  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this = this;

      _environment.$html[0].scrollTop = 0;
      _environment.$body[0].scrollTop = 0;

      if (!this.smoothMobile) {
        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      }

      this.instance = function () {
        if (_this.smooth === true && !_this.isMobile) {
          return new _SmoothScroll["default"](_this.options);
        } else {
          if (_this.mobileContainer) {
            _this.options.container = _this.mobileContainer;
          }

          return new _Scroll["default"](_this.options);
        }
      }();

      this.instance.init();
      var $scrollToOnLoadEl = $('.js-scrollto-on-load').first();

      if ($scrollToOnLoadEl.length === 1) {
        _environment.$document.triggerHandler({
          type: 'Event.SCROLLTO',
          options: {
            targetElem: $scrollToOnLoadEl
          }
        });
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.instance.destroy();
    }
  }]);

  return _default;
}();

exports["default"] = _default;

},{"../../utils/environment":8,"../Scroll":2,"../SmoothScroll":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _environment = require("../../utils/environment");

var _Scroll2 = _interopRequireWildcard(require("../Scroll"));

var _html = require("../../utils/html");

var _maths = require("../../utils/maths");

var _debounce = _interopRequireDefault(require("../../utils/debounce"));

var _virtualScroll = _interopRequireDefault(require("virtual-scroll"));

var _is = require("../../utils/is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Smooth scrolling using `smooth-scrollbar`.
 * Based on `Scroll` class, which allows animations of elements on the page
 * according to scroll position.
 *
 */
var _default =
/*#__PURE__*/
function (_Scroll) {
  _inherits(_default, _Scroll);

  function _default(options) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, options));
    _this.sectionsSelector = options.sections ? document.querySelectorAll(options.sections) : document.querySelectorAll(_Scroll2.DEFAULTS.sections);
    _this.isReversed = options.reversed || _Scroll2.DEFAULTS.reversed;
    _this.getDirection = options.getDirection || _Scroll2.DEFAULTS.getDirection;
    _this.getSpeed = options.getSpeed || _Scroll2.DEFAULTS.getSpeed;
    _this.inertia = options.inertia || _Scroll2.DEFAULTS.inertia;
    _this.scrollBarClassName = options.scrollBarClassName || _Scroll2.DEFAULTS.scrollBarClassName;
    _this.isScrollingClassName = options.isScrollingClassName || _Scroll2.DEFAULTS.isScrollingClassName;
    _this.parallaxElements = [];
    _this.isDraggingScrollBar = false;
    _this.isTicking = false;
    _this.hasScrollTicking = false;
    _this.isScrolling = false;
    return _this;
  }
  /**
   * Initialize scrolling animations
   */


  _createClass(_default, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      // Add class to the document to know if SmoothScroll is initialized (to manage overflow on containers)
      document.documentElement.classList.add('has-smooth-scroll');
      this.instance = new _virtualScroll["default"]({
        mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
        touchMultiplier: 4,
        firefoxMultiplier: 30
      });
      this.inertia = this.inertia * 0.1;
      this.instance.scroll = {
        x: 0,
        y: 0,
        direction: null
      };
      this.instance.delta = {
        x: 0,
        y: 0
      };

      if (this.getSpeed) {
        this.instance.scroll.speed = 0;
      }

      this.instance.on(function (e) {
        if (!_this2.isTicking && !_this2.isDraggingScrollBar) {
          requestAnimationFrame(function () {
            if (!_this2.isScrolling) {
              _this2.isScrolling = true;

              _this2.checkScroll();

              _environment.html.classList.add(_this2.isScrollingClassName);
            }

            _this2.instance.delta.y -= e.deltaY;
            if (_this2.instance.delta.y < 0) _this2.instance.delta.y = 0;
            if (_this2.instance.delta.y > _this2.instance.limit) _this2.instance.delta.y = _this2.instance.limit;
          });
          _this2.isTicking = true;
        }

        _this2.isTicking = false;
      });
      this.setScrollLimit();
      this.initScrollBar();
      this.addSections();
      this.addElements();
      this.events();
      this.preloadImages();
      this.timestamp = Date.now();
      this.render();
    }
    /**
    * Listen/trigger events
    **/

  }, {
    key: "events",
    value: function events() {
      var _this3 = this;

      // Rebuild event
      this.$container.on(_Scroll2.EVENT.REBUILD, function () {
        _this3.update();
      }); // Update event

      this.$container.on(_Scroll2.EVENT.UPDATE, function (event, options) {
        return _this3.update(options);
      }); // Scrollto button event

      this.$container.on(_Scroll2.EVENT.CLICK, '.js-scrollto', function (event) {
        event.preventDefault();

        _this3.scrollTo({
          sourceElem: event.currentTarget,
          offsetElem: event.currentTarget.getAttribute('data-offset')
        });
      });
      this.$container.on(_Scroll2.EVENT.SCROLLTO, function (event) {
        return _this3.scrollTo(event.options);
      }); // Setup done

      _environment.$document.triggerHandler({
        type: _Scroll2.EVENT.ISREADY
      }); // Resize event


      _environment.$window.on(_Scroll2.EVENT.RESIZE, (0, _debounce["default"])(function () {
        _this3.update();
      }, 600));
    }
  }, {
    key: "initScrollBar",
    value: function initScrollBar() {
      var _this4 = this;

      this.scrollbarWrapper = document.createElement('span');
      this.scrollbar = document.createElement('span');
      this.scrollbarWrapper.classList.add("".concat(this.scrollBarClassName, "_wrapper"));
      this.scrollbar.classList.add("".concat(this.scrollBarClassName));
      this.scrollbarWrapper.append(this.scrollbar);
      document.body.append(this.scrollbarWrapper);
      this.scrollbar.style.height = "".concat(window.innerHeight * window.innerHeight / this.instance.limit, "px");
      this.scrollBarLimit = window.innerHeight - this.scrollbar.getBoundingClientRect().height;
      this.scrollbar.addEventListener('mousedown', function (e) {
        return _this4.getScrollBar(e);
      });
      window.addEventListener('mouseup', function (e) {
        return _this4.releaseScrollBar(e);
      });
      window.addEventListener('mousemove', function (e) {
        return _this4.moveScrollBar(e);
      });
    }
  }, {
    key: "reinitScrollBar",
    value: function reinitScrollBar() {
      this.scrollbar.style.height = "".concat(window.innerHeight * window.innerHeight / this.instance.limit, "px");
      this.scrollBarLimit = window.innerHeight - this.scrollbar.getBoundingClientRect().height;
    }
  }, {
    key: "destroyScrollBar",
    value: function destroyScrollBar() {
      var _this5 = this;

      this.scrollbar.removeEventListener('mousedown', function (e) {
        return _this5.getScrollBar(e);
      });
      window.removeEventListener('mouseup', function (e) {
        return _this5.releaseScrollBar(e);
      });
      window.removeEventListener('mousemove', function (e) {
        return _this5.moveScrollBar(e);
      });
    }
  }, {
    key: "getScrollBar",
    value: function getScrollBar(e) {
      this.isDraggingScrollBar = true;
      this.checkScroll();

      _environment.html.classList.add(this.isScrollingClassName);
    }
  }, {
    key: "releaseScrollBar",
    value: function releaseScrollBar(e) {
      this.isDraggingScrollBar = false;

      _environment.html.classList.remove(this.isScrollingClassName);
    }
  }, {
    key: "moveScrollBar",
    value: function moveScrollBar(e) {
      var _this6 = this;

      if (!this.isTicking && this.isDraggingScrollBar) {
        requestAnimationFrame(function () {
          var y = e.pageY * 100 / window.innerHeight * _this6.instance.limit / 100;

          if (y > 0 && y < _this6.instance.limit) {
            _this6.instance.delta.y = y;
          }
        });
        this.isTicking = true;
      }

      this.isTicking = false;
    }
    /**
     * Reset existing sections and find all sections.
     * Called on page load and any subsequent updates.
     */

  }, {
    key: "addSections",
    value: function addSections() {
      this.sections = [];

      for (var i = 0; i < this.sectionsSelector.length; i++) {
        var sectionElement = this.sectionsSelector[i];
        var offset = sectionElement.getBoundingClientRect().top - window.innerHeight * 1.5 - this.getTranslate(sectionElement).y;
        var limit = offset + sectionElement.getBoundingClientRect().height + window.innerHeight * 2;
        var persistent = typeof sectionElement.getAttribute('data-persistent') === 'string';
        var inView = false;

        for (var _i = this.sections.length - 1; _i >= 0; _i--) {
          if (this.instance.scroll.y > offset && this.instance.scroll.y < limit) {
            inView = true;
          }
        }

        var section = {
          element: sectionElement,
          offset: offset,
          limit: limit,
          inView: inView,
          persistent: persistent
        };
        this.sections.push(section);
      }
    }
    /**
     * Reset existing elements and find all animatable elements.
     * Called on page load and any subsequent updates.
     */

  }, {
    key: "addElements",
    value: function addElements() {
      this.animatedElements = [];
      this.parallaxElements = [];

      for (var y = 0; y < this.sections.length; y++) {
        var elements = this.sections[y].element.querySelectorAll(this.selector);
        var len = elements.length;

        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          var elementSpeed = element.getAttribute('data-speed') ? element.getAttribute('data-speed') / 10 : false;
          var elementPosition = element.getAttribute('data-position');
          var elementTarget = element.getAttribute('data-target');
          var elementHorizontal = typeof element.getAttribute('data-horizontal') === 'string';
          var elementSticky = typeof element.getAttribute('data-sticky') === 'string';
          var elementStickyTarget = element.getAttribute('data-sticky-target');
          var target = elementTarget && document.querySelectorAll(elementTarget).length ? document.querySelectorAll(elementTarget) : element;
          var elementOffset = void 0; // reset transform to get the real offset

          if (!this.sections[y].inView) {
            elementOffset = parseInt(target.getBoundingClientRect().top - this.getTranslate(this.sections[y].element).y);
          } else {
            elementOffset = parseInt(target.getBoundingClientRect().top + this.instance.scroll.y);
          }

          var elementLimit = elementOffset + target.offsetHeight;
          var elementViewportOffset = null;

          if (typeof element.getAttribute('data-viewport-offset') === 'string') {
            elementViewportOffset = element.getAttribute('data-viewport-offset').split(',');
          } //Manage callback


          var elementCallbackString = typeof element.getAttribute('data-callback') === 'string' ? element.getAttribute('data-callback') : null;
          var elementCallback = null;

          if (elementCallbackString != null) {
            var event = elementCallbackString.substr(0, elementCallbackString.indexOf('('));
            var optionsString = elementCallbackString.substr(elementCallbackString.indexOf('('), elementCallbackString.length - event.length);
            optionsString = optionsString.replace('(', '');
            optionsString = optionsString.replace(')', '');
            var options = optionsString.split('|');
            var obj = {};

            for (var j = 0; j < options.length; j++) {
              var option = options[j].split(':');
              option[0] = option[0].replace(' ', '');
              var val = void 0; //check if value is a boolean

              if (option[1] === "true") {
                val = true;
              } else if (option[1] === "false") {
                val = false;
              } //check if value is numeric
              else if (/^\d+$/.test(option[1])) {
                  val = parseInt(option[1]);
                } //check if value is a String
                else {
                    val = option[1];
                  }

              obj[option[0]] = val;
            }

            elementCallback = {
              event: event,
              options: obj
            };
          } // If elements stays visible after scrolling past it


          var elementRepeat = typeof element.getAttribute('data-repeat') === 'string';
          var elementInViewClass = typeof element.getAttribute('data-inview-class') === 'string' ? element.getAttribute('data-inview-class') : 'is-show';

          if (!elementTarget && element.getAttribute('data-transform')) {
            elementOffset -= parseInt(JSON.parse(element.getAttribute('data-transform')).y);
            elementLimit = elementOffset + target.offsetHeight;
          }

          if (elementSticky) {
            if (!elementStickyTarget || typeof elementStickyTarget === 'undefined') {
              elementLimit = Infinity;
            } else {
              elementLimit = document.querySelectorAll(elementStickyTarget)[0].getBoundingClientRect().top - element.offsetHeight + this.instance.scroll.y;
            }
          }

          var newElement = {
            element: element,
            inViewClass: elementInViewClass,
            limit: elementLimit,
            offset: Math.round(elementOffset),
            repeat: elementRepeat,
            callback: elementCallback,
            viewportOffset: elementViewportOffset
          }; // For parallax animated elements

          if (elementSpeed !== false) {
            var _elementPosition = element.getAttribute('data-position');

            var _elementHorizontal = typeof element.getAttribute('data-horizontal') === 'string';

            var elementMiddle = (elementLimit - elementOffset) / 2 + elementOffset;
            var elementDelay = element.getAttribute('data-delay');
            newElement.horizontal = _elementHorizontal;
            newElement.middle = elementMiddle;
            newElement.offset = elementOffset;
            newElement.position = _elementPosition;
            newElement.speed = elementSpeed;
            newElement.delay = elementDelay;
            this.parallaxElements.push(newElement);
          } else {
            newElement.sticky = elementSticky;
            this.animatedElements.push(newElement);

            if (elementSticky) {
              //launch the toggle function to set the position of the sticky element
              this.toggleElement(newElement);
            }
          }
        }
      }
    }
  }, {
    key: "checkScroll",
    value: function checkScroll() {
      var _this7 = this;

      if (this.isScrolling || this.isDraggingScrollBar) {
        if (!this.hasScrollTicking) {
          requestAnimationFrame(function () {
            return _this7.checkScroll();
          });
          this.hasScrollTicking = true;
        }

        var distance = Math.abs(this.instance.delta.y - this.instance.scroll.y);

        if (distance < 1 && this.instance.delta.y != 0 || distance < 0.5 && this.instance.delta.y == 0) {
          this.isScrolling = false;
          this.instance.scroll.y = Math.round(this.instance.scroll.y);

          _environment.html.classList.remove(this.isScrollingClassName);
        }

        this.render();
      }
    }
    /**
     * Render the class/transform animations, and update the global scroll positionning.
     *
     * @param  {boolean} isForced Determines if this is a forced request (from a manual call to update or a resize)
     * @param  {object}  status      Optional status object received when method is
     *                               called by smooth-scrollbar instance listener.
     * @return {void}
     */

  }, {
    key: "render",
    value: function render(isForced, e) {
      if (this.isScrolling) {
        this.instance.scroll.y = (0, _maths.lerp)(this.instance.scroll.y, this.instance.delta.y, this.inertia);
      } else if (this.isDraggingScrollBar) {
        this.instance.scroll.y = (0, _maths.lerp)(this.instance.scroll.y, this.instance.delta.y, 0.2);
      }

      for (var i = this.sections.length - 1; i >= 0; i--) {
        if (this.sections[i].persistent || this.instance.scroll.y > this.sections[i].offset && this.instance.scroll.y < this.sections[i].limit) {
          this.transform(this.sections[i].element, 0, -this.instance.scroll.y);
          this.sections[i].element.style.visibility = 'visible';
        } else {
          this.sections[i].element.style.visibility = 'hidden';
        }
      }

      if (this.getDirection) {
        if (this.instance.delta.y > this.instance.scroll.y) {
          if (this.instance.scroll.direction !== 'down') {
            this.instance.scroll.direction = 'down';
          }
        } else if (this.instance.delta.y < this.instance.scroll.y) {
          if (this.instance.scroll.direction !== 'up') {
            this.instance.scroll.direction = 'up';
          }
        }
      }

      if (this.getSpeed) {
        if (this.instance.delta.y !== this.instance.scroll.y) {
          this.instance.scroll.speed = (this.instance.delta.y - this.instance.scroll.y) / (Date.now() - this.timestamp);
          this.instance.delta.y = this.instance.delta.y;
        } else {
          this.instance.scroll.speed = 0;
        }
      }

      this.transformElements(isForced);
      this.animateElements();
      this.callbacks.onScroll(this.instance);
      this.timestamp = Date.now(); // scrollbar translation

      var scrollBarTranslation = this.instance.scroll.y / this.instance.limit * this.scrollBarLimit;
      this.transform(this.scrollbar, 0, scrollBarTranslation);
      this.hasScrollTicking = false;
    }
    /**
     * Scroll to a desired target.
     *
     * @param  {object} options
     *      Available options :
     *          {node} targetElem - The DOM element we want to scroll to
     *          {node} sourceElem - An `<a>` element with an href targeting the anchor we want to scroll to
     *          {node} offsetElem - A DOM element from which we get the height to substract from the targetOffset
     *              (ex: use offsetElem to pass a mobile header that is above content, to make sure the scrollTo will be aligned with it)
     *          {int} targetOffset - An absolute vertical scroll value to reach, or an offset to apply on top of given `targetElem` or `sourceElem`'s target
     *          {int} delay - Amount of milliseconds to wait before starting to scroll
     *          {boolean} toTop - Set to true to scroll all the way to the top
     *          {boolean} toBottom - Set to true to scroll all the way to the bottom
     *          {float} speed - Duration of the scroll (⚠️ DISABLED since v2)
     * @return {void}
     */

  }, {
    key: "scrollTo",
    value: function scrollTo(options) {
      var _this8 = this;

      var targetElem = options.targetElem;
      var sourceElem = options.sourceElem;
      var offsetElem = options.offsetElem;
      var targetOffset = (0, _is.isNumeric)(options.targetOffset) ? parseInt(options.targetOffset) : 0;
      var delay = (0, _is.isNumeric)(options.delay) ? parseInt(options.delay) : 0; // const speed = isNumeric(options.speed) ? parseInt(options.speed) : 900; // (⚠️ DISABLED since v2)

      var toTop = options.toTop;
      var toBottom = options.toBottom; // Make sure at least one of the required options has beeen filled

      if (!toTop && !toBottom && !(0, _is.isNumeric)(options.targetOffset) && !targetElem && !sourceElem) {
        console.warn("You must specify at least one of these parameters:", ['{boolean} toTop - Set to true to scroll all the way to the top', '{boolean} toBottom - Set to true to scroll all the way to the bottom', '{int} targetOffset - An absolute vertical scroll value to reach, or an offset to apply on top of given `targetElem` or `sourceElem`\'s target', '{node} targetElem - The DOM element we want to scroll to', '{node} sourceElem - An `<a>` element with an href targeting the anchor we want to scroll to']);
        return false;
      } // If sourceElem is given, find and store the targetElem it's related to


      if (sourceElem) {
        var targetData = '';
        console.log(sourceElem); // Get the selector (given with `data-target` or `href` attributes on sourceElem)

        var sourceElemTarget = sourceElem.getAttribute('data-target');
        targetData = sourceElemTarget ? sourceElemTarget : sourceElem.getAttribute('href'); // Store the target for later

        targetElem = document.querySelectorAll(targetData)[0];
      } // We have a targetElem, get it's coordinates


      if (targetElem) {
        // Get targetElem offset from top
        var targetElemBCR = targetElem.getBoundingClientRect();
        var targetElemOffsetTop = targetElemBCR.top + this.$container[0].scrollTop; // Try and find the targetElem's parent section

        var targetParents = (0, _html.getParents)(targetElem);
        var parentSection = targetParents.find(function (candidate) {
          return _this8.sections.find(function (section) {
            return section.element == candidate;
          });
        });
        var parentSectionOffset = 0;

        if (parentSection) {
          parentSectionOffset = this.getTranslate(parentSection).y; // We got a parent section, store it's current offset to remove it later
        } // Final value of scroll destination : targetElemOffsetTop + (optional offset given in options) - (parent's section translate)


        targetOffset = targetElemOffsetTop + targetOffset - parentSectionOffset;
      } // We have an offsetElem, get its height and remove it from targetOffset already computed


      if (offsetElem) {
        var offset = offsetElem.offsetHeight;
        targetOffset = targetOffset - offset;
      } // If we want to go to one of boundaries


      if (toTop === true) {
        targetOffset = 0;
      } else if (toBottom === true) {
        targetOffset = this.instance.limit;
      } // Wait for the asked delay if needed


      setTimeout(function () {
        _this8.instance.delta.y = targetOffset; // Actual scrollTo (the lerp will do the animation itself)
        // Update the scroll. If we were in idle state: we're not anymore

        _this8.isScrolling = true;

        _this8.checkScroll();

        _environment.html.classList.add(_this8.isScrollingClassName);
      }, delay);
    }
    /**
     * Set the scroll bar limit
     */

  }, {
    key: "setScrollLimit",
    value: function setScrollLimit() {
      this.instance.limit = this.$container[0].offsetHeight - this.windowHeight;
    }
    /**
     * Apply CSS transform properties on an element.
     *
     * @param  {object}  element  Targetted node
     * @param  {int}     x        Translate value
     * @param  {int}     y        Translate value
     * @param  {int}     z        Translate value
     * @return {void}
     */

  }, {
    key: "transform",
    value: function transform(element, x, y, delay) {
      // Defaults
      x = parseInt(x * 10000) / 10000 || 0;
      y = parseInt(y * 10000) / 10000 || 0;

      if (!delay) {
        // Translate and store the positionning as `data`
        var transform = "matrix(1,0,0,1,".concat(x, ",").concat(y, ")");
        element.style.webkitTransform = transform;
        element.style.MozTransform = transform;
        element.style.msTransform = transform;
        element.style.OTransform = transform;
        element.style.transform = transform;
        element.setAttribute('data-transform', "{\"x\": ".concat(parseInt(x), ",\"y\": ").concat(parseInt(y), "}"));
      } else {
        var start = this.getTranslate(element);
        var lerpY = (0, _maths.lerp)(start.y, y, delay);
        var lerpX = (0, _maths.lerp)(start.x, x, delay);

        var _transform = "matrix(1,0,0,1,".concat(lerpX, ",").concat(lerpY, ")");

        element.style.webkitTransform = _transform;
        element.style.MozTransform = _transform;
        element.style.msTransform = _transform;
        element.style.OTransform = _transform;
        element.style.transform = _transform;
        element.setAttribute('data-transform', "{\"x\": ".concat(parseInt(lerpX), ",\"y\": ").concat(parseInt(lerpY), "}"));
      }
    }
  }, {
    key: "getTranslate",
    value: function getTranslate(el) {
      var translate = {};
      if (!window.getComputedStyle) return;
      var style = getComputedStyle(el);
      var transform = style.transform || style.webkitTransform || style.mozTransform;
      var mat = transform.match(/^matrix3d\((.+)\)$/);
      if (mat) return parseFloat(mat[1].split(', ')[13]);
      mat = transform.match(/^matrix\((.+)\)$/);
      translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
      return translate;
    }
    /**
     * Loop through all parallax-able elements and apply transform method(s).
     *
     * @param  {boolean} isForced Determines if this is a forced request (from a manual call to update or a resize)
     * @return {void}
     */

  }, {
    key: "transformElements",
    value: function transformElements(isForced) {
      if (this.parallaxElements.length > 0) {
        var scrollBottom = this.instance.scroll.y + this.windowHeight;
        var scrollMiddle = this.instance.scroll.y + this.windowMiddle;
        var i = 0;
        var len = this.parallaxElements.length;
        var removeIndexes = [];

        for (; i < len; i++) {
          var curEl = this.parallaxElements[i];
          var transformDistance = false; // Define if the element is in view

          var inView = scrollBottom + this.windowHeight >= curEl.offset && this.instance.scroll.y <= curEl.limit;
          this.toggleElement(curEl, i);

          if (isForced && !inView && curEl.speed) {
            // Different calculations if it is the first call and the item is not in the view
            // if (curEl.position !== 'top') {
            //     if(curEl.$element.attr('data-log')) console.log(`(curEl.offset (${curEl.offset}) - this.windowMiddle (${this.windowMiddle}) - curEl.middle (${curEl.middle})) * curEl.speed (${curEl.speed})`);
            //     transformDistance = (curEl.offset - this.windowMiddle - curEl.middle) * curEl.speed;
            // }
            transformDistance = 0;
          } // If element is in view


          if (inView && curEl.speed) {
            //|| (isForced && !inView && curEl.speed)) {
            switch (curEl.position) {
              case 'top':
                transformDistance = this.instance.scroll.y * -curEl.speed;
                break;

              case 'bottom':
                transformDistance = (this.instance.limit - scrollBottom + this.windowHeight) * curEl.speed;
                break;

              default:
                transformDistance = (scrollMiddle - curEl.middle) * -curEl.speed;
                break;
            }
          } // Transform horizontal OR vertical. Defaults to vertical


          if ((0, _is.isNumeric)(transformDistance)) {
            curEl.horizontal ? this.transform(curEl.element, transformDistance, 0, curEl.delay) : this.transform(curEl.element, 0, transformDistance, curEl.delay);
          }
        }
      }
    }
    /**
     * Update elements and recalculate all the positions on the page
     *
     * @param {object} options
     */

  }, {
    key: "update",
    value: function update(options) {
      options = options || {};
      this.windowHeight = _environment.$window.height();
      this.windowMiddle = this.windowHeight / 2;
      this.setScrollLimit();
      this.addSections();
      this.addElements();
      this.transformElements(true);
      this.reinitScrollBar();
    }
  }, {
    key: "preloadImages",
    value: function preloadImages() {
      var _this9 = this;

      var images = Array.from(document.querySelectorAll('img'));
      images.forEach(function (image) {
        var img = document.createElement('img');
        img.addEventListener('load', function () {
          images.splice(images.indexOf(image), 1);
          images.length === 0 && _this9.update();
        });
        img.src = image.getAttribute('src');
      });
    }
    /**
     * Destroy
     */

  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

      _environment.$html.removeClass('has-smooth-scroll');

      this.parallaxElements = [];
      this.instance.destroy();
      this.scrollbarWrapper.remove();
      cancelAnimationFrame(this.raf);
    }
  }]);

  return _default;
}(_Scroll2["default"]);

exports["default"] = _default;

},{"../../utils/debounce":7,"../../utils/environment":8,"../../utils/html":9,"../../utils/is":10,"../../utils/maths":11,"../Scroll":2,"virtual-scroll":17}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDebug = exports.html = exports.$body = exports.$html = exports.$window = exports.$document = exports.DATA_API_KEY = void 0;
var DATA_API_KEY = '.data-api';
exports.DATA_API_KEY = DATA_API_KEY;
var $document = $(document);
exports.$document = $document;
var $window = $(window);
exports.$window = $window;
var $html = $(document.documentElement).removeClass('has-no-js').addClass('has-js');
exports.$html = $html;
var $body = $(document.body);
exports.$body = $body;
var html = document.getElementsByTagName('html')[0];
exports.html = html;
var body = document.getElementsByTagName('body')[0];
var isDebug = !!$html.data('debug');
exports.isDebug = isDebug;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeHtml = escapeHtml;
exports.unescapeHtml = unescapeHtml;
exports.getNodeData = getNodeData;
exports.getParents = getParents;
exports.queryClosestParent = queryClosestParent;

/**
 * @see  https://github.com/ractivejs/ractive/blob/dev/src/utils/html.js
 */
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
/**
 * Prepare HTML content that contains mustache characters for use with Ractive
 * @param  {string} str
 * @return {string}
 */


function unescapeHtml(str) {
  return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
}
/**
 * Get element data attributes
 * @param   {DOMElement}  node
 * @return  {Array}       data
 */


function getNodeData(node) {
  // All attributes
  var attributes = node.attributes; // Regex Pattern

  var pattern = /^data\-(.+)$/; // Output

  var data = {};

  for (var i in attributes) {
    if (!attributes[i]) {
      continue;
    } // Attributes name (ex: data-module)


    var name = attributes[i].name; // This happens.

    if (!name) {
      continue;
    }

    var match = name.match(pattern);

    if (!match) {
      continue;
    } // If this throws an error, you have some
    // serious problems in your HTML.


    data[match[1]] = node.getAttribute(name);
  }

  return data;
}

function getParents(elem) {
  // Set up a parent array
  var parents = []; // Push each parent element to the array

  for (; elem && elem !== document; elem = elem.parentNode) {
    parents.push(elem);
  } // Return our parent array


  return parents;
} // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/


function queryClosestParent(elem, selector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  } // Get the closest matching element


  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }

  return null;
}

;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = isArray;
exports.isArrayLike = isArrayLike;
exports.isEqual = isEqual;
exports.isNumeric = isNumeric;
exports.isObject = isObject;
exports.isFunction = isFunction;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var toString = Object.prototype.toString,
    arrayLikePattern = /^\[object (?:Array|FileList)\]$/; // thanks, http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/

function isArray(thing) {
  return toString.call(thing) === '[object Array]';
}

function isArrayLike(obj) {
  return arrayLikePattern.test(toString.call(obj));
}

function isEqual(a, b) {
  if (a === null && b === null) {
    return true;
  }

  if (_typeof(a) === 'object' || _typeof(b) === 'object') {
    return false;
  }

  return a === b;
} // http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric


function isNumeric(thing) {
  return !isNaN(parseFloat(thing)) && isFinite(thing);
}

function isObject(thing) {
  return thing && toString.call(thing) === '[object Object]';
}

function isFunction(thing) {
  var getType = {};
  return thing && getType.toString.call(thing) === '[object Function]';
}

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lerp = lerp;

function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
}

},{}],12:[function(require,module,exports){
'use strict';

var toString = Object.prototype.toString,
    hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function(object) {
    if(!object) return console.warn('bindAll requires at least one argument.');

    var functions = Array.prototype.slice.call(arguments, 1);

    if (functions.length === 0) {

        for (var method in object) {
            if(hasOwnProperty.call(object, method)) {
                if(typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") {
                    functions.push(method);
                }
            }
        }
    }

    for(var i = 0; i < functions.length; i++) {
        var f = functions[i];
        object[f] = bind(object[f], object);
    }
};

/*
    Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
    bindAll is only needed for events binding so no need to make slow fixes for constructor
    or partial application.
*/
function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}
},{}],13:[function(require,module,exports){
// Generated by CoffeeScript 1.9.2
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Lethargy = (function() {
    function Lethargy(stability, sensitivity, tolerance, delay) {
      this.stability = stability != null ? Math.abs(stability) : 8;
      this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
      this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
      this.delay = delay != null ? delay : 150;
      this.lastUpDeltas = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
      this.lastDownDeltas = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
      this.deltasTimestamp = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
    }

    Lethargy.prototype.check = function(e) {
      var lastDelta;
      e = e.originalEvent || e;
      if (e.wheelDelta != null) {
        lastDelta = e.wheelDelta;
      } else if (e.deltaY != null) {
        lastDelta = e.deltaY * -40;
      } else if ((e.detail != null) || e.detail === 0) {
        lastDelta = e.detail * -40;
      }
      this.deltasTimestamp.push(Date.now());
      this.deltasTimestamp.shift();
      if (lastDelta > 0) {
        this.lastUpDeltas.push(lastDelta);
        this.lastUpDeltas.shift();
        return this.isInertia(1);
      } else {
        this.lastDownDeltas.push(lastDelta);
        this.lastDownDeltas.shift();
        return this.isInertia(-1);
      }
      return false;
    };

    Lethargy.prototype.isInertia = function(direction) {
      var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
      lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
      if (lastDeltas[0] === null) {
        return direction;
      }
      if (this.deltasTimestamp[(this.stability * 2) - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[(this.stability * 2) - 1]) {
        return false;
      }
      lastDeltasOld = lastDeltas.slice(0, this.stability);
      lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
      oldSum = lastDeltasOld.reduce(function(t, s) {
        return t + s;
      });
      newSum = lastDeltasNew.reduce(function(t, s) {
        return t + s;
      });
      oldAverage = oldSum / lastDeltasOld.length;
      newAverage = newSum / lastDeltasNew.length;
      if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && (this.sensitivity < Math.abs(newAverage))) {
        return direction;
      } else {
        return false;
      }
    };

    Lethargy.prototype.showLastUpDeltas = function() {
      return this.lastUpDeltas;
    };

    Lethargy.prototype.showLastDownDeltas = function() {
      return this.lastDownDeltas;
    };

    return Lethargy;

  })();

}).call(this);

},{}],14:[function(require,module,exports){
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

'use strict';
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

},{}],15:[function(require,module,exports){
function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;

},{}],16:[function(require,module,exports){
'use strict';

module.exports = function(source) {
    return JSON.parse(JSON.stringify(source));
};
},{}],17:[function(require,module,exports){
'use strict';

var objectAssign = require('object-assign');
var Emitter = require('tiny-emitter');
var Lethargy = require('lethargy').Lethargy;
var support = require('./support');
var clone = require('./clone');
var bindAll = require('bindall-standalone');
var EVT_ID = 'virtualscroll';

module.exports = VirtualScroll;

var keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};

function VirtualScroll(options) {
    bindAll(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');

    this.el = window;
    if (options && options.el) {
        this.el = options.el;
        delete options.el;
    }
    this.options = objectAssign({
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: false,
        unpreventTouchClass: 'vs-touchmove-allowed',
        limitInertia: false,
        useKeyboard: true
    }, options);

    if (this.options.limitInertia) this._lethargy = new Lethargy();

    this._emitter = new Emitter();
    this._event = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0
    };
    this.touchStartX = null;
    this.touchStartY = null;
    this.bodyTouchAction = null;

    if (this.options.passive !== undefined) {
        this.listenerOptions = {passive: this.options.passive};
    }
}

VirtualScroll.prototype._notify = function(e) {
    var evt = this._event;
    evt.x += evt.deltaX;
    evt.y += evt.deltaY;

   this._emitter.emit(EVT_ID, {
        x: evt.x,
        y: evt.y,
        deltaX: evt.deltaX,
        deltaY: evt.deltaY,
        originalEvent: e
   });
};

VirtualScroll.prototype._onWheel = function(e) {
    var options = this.options;
    if (this._lethargy && this._lethargy.check(e) === false) return;
    var evt = this._event;

    // In Chrome and in Firefox (at least the new one)
    evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
    evt.deltaY = e.wheelDeltaY || e.deltaY * -1;

    // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
    // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
    if(support.isFirefox && e.deltaMode == 1) {
        evt.deltaX *= options.firefoxMultiplier;
        evt.deltaY *= options.firefoxMultiplier;
    }

    evt.deltaX *= options.mouseMultiplier;
    evt.deltaY *= options.mouseMultiplier;

    this._notify(e);
};

VirtualScroll.prototype._onMouseWheel = function(e) {
    if (this.options.limitInertia && this._lethargy.check(e) === false) return;

    var evt = this._event;

    // In Safari, IE and in Chrome if 'wheel' isn't defined
    evt.deltaX = (e.wheelDeltaX) ? e.wheelDeltaX : 0;
    evt.deltaY = (e.wheelDeltaY) ? e.wheelDeltaY : e.wheelDelta;

    this._notify(e);
};

VirtualScroll.prototype._onTouchStart = function(e) {
    var t = (e.targetTouches) ? e.targetTouches[0] : e;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
};

VirtualScroll.prototype._onTouchMove = function(e) {
    var options = this.options;
    if(options.preventTouch
        && !e.target.classList.contains(options.unpreventTouchClass)) {
        e.preventDefault();
    }

    var evt = this._event;

    var t = (e.targetTouches) ? e.targetTouches[0] : e;

    evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
    evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;

    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;

    this._notify(e);
};

VirtualScroll.prototype._onKeyDown = function(e) {
    var evt = this._event;
    evt.deltaX = evt.deltaY = 0;
    var windowHeight = window.innerHeight - 40

    switch(e.keyCode) {
        case keyCodes.LEFT:
        case keyCodes.UP:
            evt.deltaY = this.options.keyStep;
            break;

        case keyCodes.RIGHT:
        case keyCodes.DOWN:
            evt.deltaY = - this.options.keyStep;
            break;
        case keyCodes.SPACE && e.shiftKey:
            evt.deltaY = windowHeight;
            break;
        case keyCodes.SPACE:
            evt.deltaY = - windowHeight;
            break;
        default:
            return;
    }

    this._notify(e);
};

VirtualScroll.prototype._bind = function() {
    if(support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
    if(support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);

    if(support.hasTouch) {
        this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
        this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
    }

    if(support.hasPointer && support.hasTouchWin) {
        this.bodyTouchAction = document.body.style.msTouchAction;
        document.body.style.msTouchAction = 'none';
        this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
    }

    if(support.hasKeyDown && this.options.useKeyboard) document.addEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype._unbind = function() {
    if(support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
    if(support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);

    if(support.hasTouch) {
        this.el.removeEventListener('touchstart', this._onTouchStart);
        this.el.removeEventListener('touchmove', this._onTouchMove);
    }

    if(support.hasPointer && support.hasTouchWin) {
        document.body.style.msTouchAction = this.bodyTouchAction;
        this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
    }

    if(support.hasKeyDown && this.options.useKeyboard) document.removeEventListener('keydown', this._onKeyDown);
};

VirtualScroll.prototype.on = function(cb, ctx) {
  this._emitter.on(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
};

VirtualScroll.prototype.off = function(cb, ctx) {
  this._emitter.off(EVT_ID, cb, ctx);

  var events = this._emitter.e;
  if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
};

VirtualScroll.prototype.reset = function() {
    var evt = this._event;
    evt.x = 0;
    evt.y = 0;
};

VirtualScroll.prototype.destroy = function() {
    this._emitter.off();
    this._unbind();
};

},{"./clone":16,"./support":18,"bindall-standalone":12,"lethargy":13,"object-assign":14,"tiny-emitter":15}],18:[function(require,module,exports){
'use strict';

module.exports = (function getSupport() {
    return {
        hasWheelEvent: 'onwheel' in document,
        hasMouseWheelEvent: 'onmousewheel' in document,
        hasTouch: 'ontouchstart' in document,
        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: 'onkeydown' in document,
        isFirefox: navigator.userAgent.indexOf('Firefox') > -1
    };
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvU2Nyb2xsLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL1Ntb290aFNjcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbE1hbmFnZXIuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9TbW9vdGhTY3JvbGwuanMiLCJhc3NldHMvc2NyaXB0cy91dGlscy9kZWJvdW5jZS5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2Vudmlyb25tZW50LmpzIiwiYXNzZXRzL3NjcmlwdHMvdXRpbHMvaHRtbC5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2lzLmpzIiwiYXNzZXRzL3NjcmlwdHMvdXRpbHMvbWF0aHMuanMiLCJub2RlX21vZHVsZXMvYmluZGFsbC1zdGFuZGFsb25lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xldGhhcmd5L2xldGhhcmd5LmpzIiwibm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL3N1cHBvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0lBOzs7O0FBSkE7QUFDQTtBQUNBOztBQUNBO0FBR0EsQ0FBQyxZQUFXO0FBRVI7QUFDQSxNQUFNLFlBQVksR0FBRyxJQUFJLHlCQUFKLENBQWtCO0FBQ25DLElBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxZ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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBcHBcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgU2Nyb2xsTWFuYWdlciBmcm9tICcuL3Njcm9sbC92ZW5kb3JzL1Njcm9sbE1hbmFnZXInO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBJbml0IExvY29tb3RpdmUgU2Nyb2xsXG4gICAgY29uc3Qgc21vb3RoU2Nyb2xsID0gbmV3IFNjcm9sbE1hbmFnZXIoe1xuICAgICAgICBjb250YWluZXI6ICQoJyNqcy1zY3JvbGwnKSxcbiAgICAgICAgc2VjdGlvbnM6ICcuanMtc2VjdGlvbicsXG4gICAgICAgIHNlbGVjdG9yOiAnLmpzLWFuaW1hdGUnLFxuICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgIHNtb290aE1vYmlsZTogZmFsc2UsXG4gICAgICAgIG1vYmlsZUNvbnRhaW5lcjogJChkb2N1bWVudC5ib2R5KSxcbiAgICAgICAgZ2V0RGlyZWN0aW9uOiB0cnVlLFxuICAgICAgICBnZXRTcGVlZDogdHJ1ZSxcbiAgICAgICAgaW5lcnRpYTogMSxcbiAgICAgICAgc2Nyb2xsQmFyQ2xhc3NOYW1lOiAnby1zY3JvbGxiYXInLFxuICAgICAgICBpc1Njcm9sbGluZ0NsYXNzTmFtZTogJ2lzLXNjcm9sbGluZycsXG4gICAgICAgIG9uU2Nyb2xsOiAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5zY3JvbGwueSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoKTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHRlbmRlZCBMb2NvbW90aXZlIFNjcm9sbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCBTY3JvbGwsIHsgRVZFTlRfS0VZIGFzIFZFTkRPUl9FVkVOVF9LRVksIEVWRU5UIGFzIFZFTkRPUl9FVkVOVFMsIERFRkFVTFRTIGFzIFZFTkRPUl9ERUZBVUxUUyB9IGZyb20gJy4vdmVuZG9ycy9TY3JvbGwnXG5cbi8qKlxuICogVU5DT01NRU5UIE9OTFkgVEhFIExJTkVTIFlPVSBORUVEXG4gKi9cbi8vIGltcG9ydCB7ICR3aW5kb3csICRkb2N1bWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2Vudmlyb25tZW50Jztcbi8vIGltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZSc7XG4vLyBpbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuLi8uLi91dGlscy9pcyc7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9LRVkgPSBWRU5ET1JfRVZFTlRfS0VZO1xuXG5leHBvcnQgY29uc3QgRVZFTlQgPSBPYmplY3QuYXNzaWduKFZFTkRPUl9FVkVOVFMsIHtcbiAgICAvLyBURVNUOiBgdGVzdC4ke0VWRU5UX0tFWX1gXG59KTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRTID0gT2JqZWN0LmFzc2lnbihWRU5ET1JfREVGQVVMVFMsIHsgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEV4dGVuZGVkIExvY29tb3RpdmUgU21vb3RoIFNjcm9sbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCBTbW9vdGhTY3JvbGwgZnJvbSAnLi92ZW5kb3JzL1Ntb290aFNjcm9sbCdcblxuLyoqXG4gKiBVTkNPTU1FTlQgT05MWSBUSEUgTElORVMgWU9VIE5FRURcbiAqL1xuLy8gaW1wb3J0IHsgJHdpbmRvdywgJGRvY3VtZW50LCAkaHRtbCB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50Jztcbi8vIGltcG9ydCBTY3JvbGwsIHsgREVGQVVMVFMsIEVWRU5UIH0gZnJvbSAnLi9TY3JvbGwnO1xuXG4vLyBpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vdXRpbHMvZGVib3VuY2UnO1xuLy8gaW1wb3J0IFNjcm9sbGJhciBmcm9tICdzbW9vdGgtc2Nyb2xsYmFyJztcbi8vIGltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4uL3V0aWxzL2lzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBTbW9vdGhTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucylcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jb21vdGl2ZSBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkd2luZG93LCAkZG9jdW1lbnQsICRib2R5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfS0VZID0gYExvY29tb3RpdmVTY3JvbGxgO1xuXG5leHBvcnQgY29uc3QgRVZFTlQgPSB7XG4gICAgQ0xJQ0s6IGBjbGljay4ke0VWRU5UX0tFWX1gLFxuICAgIElTUkVBRFk6IGBpc1JlYWR5LiR7RVZFTlRfS0VZfWAsXG4gICAgUkVCVUlMRDogYHJlYnVpbGQuJHtFVkVOVF9LRVl9YCxcbiAgICBSRU5ERVI6IGByZW5kZXIuJHtFVkVOVF9LRVl9YCxcbiAgICBSRVNJWkU6IGByZXNpemUuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTEw6IGBzY3JvbGwuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTExUTzogYHNjcm9sbFRvLiR7RVZFTlRfS0VZfWAsXG4gICAgVVBEQVRFOiBgdXBkYXRlLiR7RVZFTlRfS0VZfWBcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IHtcbiAgICBjb250YWluZXI6ICRib2R5LFxuICAgIHNlY3Rpb25zOiAnLmpzLXNlY3Rpb24nLFxuICAgIG1vYmlsZUNvbnRhaW5lcjogJGJvZHksXG4gICAgb25TY3JvbGw6IGZ1bmN0aW9uKCl7fSxcbiAgICBzZWxlY3RvcjogJy5qcy1hbmltYXRlJyxcbiAgICBzbW9vdGg6IGZhbHNlLFxuICAgIHNtb290aE1vYmlsZTogZmFsc2UsXG4gICAgcmV2ZXJzZWQ6IGZhbHNlLFxuICAgIGdldERpcmVjdGlvbjogZmFsc2UsXG4gICAgZ2V0U3BlZWQ6IGZhbHNlLFxuICAgIHNjcm9sbEJhckNsYXNzTmFtZTogJ28tc2Nyb2xsYmFyJyxcbiAgICBpc1Njcm9sbGluZ0NsYXNzTmFtZTogJ2lzLXNjcm9sbGluZycsXG59O1xuXG4vKipcbiAqIE1hbmFnZSBhbmltYXRpb24gb2YgZWxlbWVudHMgb24gdGhlIHBhZ2UgYWNjb3JkaW5nIHRvIHNjcm9sbCBwb3NpdGlvbi5cbiAqXG4gKiBAdG9kbyAgTWFuYWdlIHNvbWUgb3B0aW9ucyAobm9ybWFsbHkgZnJvbSBkYXRhIGF0dHJpYnV0ZXMpIHdpdGggY29uc3RydWN0b3Igb3B0aW9ucyAoZXguOiBzZXQgcmVwZWF0IGZvciBhbGwpXG4gKiBAdG9kbyAgTWV0aG9kIHRvIGdldCB0aGUgZGlzdGFuY2UgKGFzIHBlcmNlbnRhZ2UpIG9mIGFuIGVsZW1lbnQgaW4gdGhlIHZpZXdwb3J0XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cbiAgICAgICAgdGhpcy4kY29udGFpbmVyID0gKG9wdGlvbnMuY29udGFpbmVyKSA/IG9wdGlvbnMuY29udGFpbmVyIDogREVGQVVMVFMuY29udGFpbmVyO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gKG9wdGlvbnMuc2VsZWN0b3IpID8gb3B0aW9ucy5zZWxlY3RvciA6IERFRkFVTFRTLnNlbGVjdG9yO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0ge1xuICAgICAgICAgICAgb25TY3JvbGw6IHR5cGVvZiBvcHRpb25zLm9uU2Nyb2xsID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy5vblNjcm9sbCA6IERFRkFVTFRTLm9uU2Nyb2xsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IHtcbiAgICAgICAgICAgIHNjcm9sbDoge1xuICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XG4gICAgICAgIHRoaXMud2luZG93TWlkZGxlID0gdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuXG4gICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50cyA9IFtdO1xuXG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgc2Nyb2xsaW5nIGFuaW1hdGlvbnNcbiAgICAgKi9cbiAgICBpbml0KCkge1xuXG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIC8vIE9uIHNjcm9sbFxuICAgICAgICAkZG9jdW1lbnQub24oRVZFTlQuU0NST0xMLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZWJ1aWxkIGV2ZW50XG4gICAgICAgICRkb2N1bWVudC5vbihFVkVOVC5SRUJVSUxELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgZXZlbnRcbiAgICAgICAgJGRvY3VtZW50Lm9uKEVWRU5ULlVQREFURSwgKGV2ZW50LCBvcHRpb25zKSA9PiB0aGlzLnVwZGF0ZShvcHRpb25zKSk7XG5cbiAgICAgICAgLy8gUmVuZGVyIGV2ZW50XG4gICAgICAgICRkb2N1bWVudC5vbihFVkVOVC5SRU5ERVIsICgpID0+IHRoaXMucmVuZGVyKCkpO1xuXG4gICAgICAgIC8vIFNjcm9sbHRvIGJ1dHRvbiBldmVudFxuICAgICAgICAkZG9jdW1lbnQub24oRVZFTlQuQ0xJQ0ssICcuanMtc2Nyb2xsdG8nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHNvdXJjZUVsZW06IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0RWxlbTogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2Zmc2V0JylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJGRvY3VtZW50Lm9uKEVWRU5ULlNDUk9MTFRPLCAoZXZlbnQpID0+IHRoaXMuc2Nyb2xsVG8oZXZlbnQub3B0aW9ucykpO1xuXG4gICAgICAgIC8vIFNldHVwIGRvbmVcbiAgICAgICAgJGRvY3VtZW50LnRyaWdnZXJIYW5kbGVyKHtcbiAgICAgICAgICAgIHR5cGU6IEVWRU5ULklTUkVBRFlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVzaXplIGV2ZW50XG4gICAgICAgICR3aW5kb3cub24oRVZFTlQuUkVTSVpFLCBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXG4gICAgICAgIH0sIDIwKSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGFsbCBhbmltYXRhYmxlIGVsZW1lbnRzLlxuICAgICAqIENhbGxlZCBvbiBwYWdlIGxvYWQgYW5kIGFueSBzdWJzZXF1ZW50IHVwZGF0ZXMuXG4gICAgICovXG4gICAgYWRkRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50cyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgbGVuID0gZWxlbWVudHMubGVuZ3RoO1xuICAgICAgICBsZXQgaSA9IDA7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkgKyspIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhcmdldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gKGVsZW1lbnRUYXJnZXQgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50VGFyZ2V0KS5sZW5ndGgpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50VGFyZ2V0KSA6IGVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgZWxlbWVudE9mZnNldCA9IHBhcnNlSW50KHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55KTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50TGltaXQgPSBlbGVtZW50T2Zmc2V0ICsgdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50U3RpY2t5ID0gKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGlja3knKSA9PT0gJ3N0cmluZycpO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRTdGlja3lUYXJnZXQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGlja3ktdGFyZ2V0Jyk7XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50Vmlld3BvcnRPZmZzZXQgPSBudWxsO1xuICAgICAgICAgICAgaWYodHlwZW9mIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXdwb3J0LW9mZnNldCcpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgZWxlbWVudFZpZXdwb3J0T2Zmc2V0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlld3BvcnQtb2Zmc2V0Jykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vTWFuYWdlIGNhbGxiYWNrXG4gICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrU3RyaW5nID0gKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpID09PSAnc3RyaW5nJykgPyBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpIDogbnVsbDtcbiAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgICAgICBpZihlbGVtZW50Q2FsbGJhY2tTdHJpbmcgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gZWxlbWVudENhbGxiYWNrU3RyaW5nLnN1YnN0cigwLCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuaW5kZXhPZignKCcpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uc1N0cmluZyA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSxlbGVtZW50Q2FsbGJhY2tTdHJpbmcubGVuZ3RoIC0gZXZlbnQubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoJygnLCcnKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcpJywnJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG9wdGlvbnNTdHJpbmcuc3BsaXQoJ3wnKTtcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zW2pdLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblswXSA9IG9wdGlvblswXS5yZXBsYWNlKCcgJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uWzFdID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9wdGlvblsxXSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIG51bWVyaWNcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigvXlxcZCskLy50ZXN0KG9wdGlvblsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHBhcnNlSW50KG9wdGlvblsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIFN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IG9wdGlvblsxXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvYmpbb3B0aW9uWzBdXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50Q2FsbGJhY2sgPSB7ZXZlbnQ6ZXZlbnQsIG9wdGlvbnM6b2JqfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgZWxlbWVudHMgbG9zZXMgaXRzIGFuaW1hdGlvbiBhZnRlciBzY3JvbGxpbmcgcGFzdCBpdFxuICAgICAgICAgICAgbGV0IGVsZW1lbnRSZXBlYXQgPSAodHlwZW9mIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlcGVhdCcpID09PSAnc3RyaW5nJyk7XG5cbiAgICAgICAgICAgIGxldCBlbGVtZW50SW5WaWV3Q2xhc3MgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbnZpZXctY2xhc3MnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbWVudEluVmlld0NsYXNzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRJblZpZXdDbGFzcyA9ICdpcy1zaG93JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRTdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnRTdGlja3lUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gdGhpcy4kY29udGFpbmVyWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGlja3lUYXJnZXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudFN0aWNreVRhcmdldClbMF1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RpY2t5VGFyZ2V0QkNSID0gc3RpY2t5VGFyZ2V0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gc3RpY2t5VGFyZ2V0QkNSLnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIC0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgb2Zmc2V0XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnRJblZpZXdDbGFzcyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy11bnN0dWNrJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1WYWx1ZSA9ICd0cmFuc2xhdGUzZCgwLCAwLCAwKSdcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuTW96VHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuT1RyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERvbid0IGFkZCBlbGVtZW50IGlmIGl0IGFscmVhZHkgaGFzIGl0cyBpbnZpZXcgY2xhc3MgYW5kIGRvZXNuJ3QgcmVwZWF0XG4gICAgICAgICAgICBpZiAoZWxlbWVudFJlcGVhdCB8fCAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoZWxlbWVudEluVmlld0NsYXNzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50c1tpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6ICQoZWxlbWVudCksIC8vIFRFTVBPUkFSWVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IE1hdGgucm91bmQoZWxlbWVudE9mZnNldCksXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdDogZWxlbWVudFJlcGVhdCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGVsZW1lbnRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGVsZW1lbnRMaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgaW5WaWV3Q2xhc3M6IGVsZW1lbnRJblZpZXdDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgc3RpY2t5OiBlbGVtZW50U3RpY2t5LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZWxlbWVudENhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydE9mZnNldDogZWxlbWVudFZpZXdwb3J0T2Zmc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvb3AgdGhyb3VnaCBhbGwgYW5pbWF0YWJsZSBlbGVtZW50cyBhbmQgYXBwbHkgYW5pbWF0aW9uIG1ldGhvZChzKS5cbiAgICAgKi9cbiAgICBhbmltYXRlRWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuYW5pbWF0ZWRFbGVtZW50cy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ZXMgPSBbXTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuYW5pbWF0ZWRFbGVtZW50c1tpXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQncyB2aXNpYmlsaXR5IG11c3Qgbm90IGJlIG1hbmlwdWxhdGVkIGFueSBmdXJ0aGVyLCByZW1vdmUgaXQgZnJvbSB0aGUgbGlzdFxuICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlRWxlbWVudChlbGVtZW50LCBpKSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbmltYXRlZCBlbGVtZW50cyBhZnRlciBsb29waW5nIHRocm91Z2ggZWxlbWVudHNcbiAgICAgICAgaSA9IHJlbW92ZUluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMuc3BsaWNlKHJlbW92ZUluZGV4ZXNbaV0sIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjbGFzcyBhbmltYXRpb25zLCBhbmQgdXBkYXRlIHRoZSBnbG9iYWwgc2Nyb2xsIHBvc2l0aW9ubmluZy5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSAhPT0gd2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC54ICE9PSB3aW5kb3cucGFnZVhPZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnggPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vblNjcm9sbCh0aGlzLnNjcm9sbClcblxuICAgICAgICB0aGlzLmFuaW1hdGVFbGVtZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBjbGFzc2VzIG9uIGFuIGVsZW1lbnQgaWYgaXQncyB2aXNpYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgICAgIGVsZW1lbnQgQ3VycmVudCBlbGVtZW50IHRvIHRlc3RcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICAgICAgaW5kZXggICBJbmRleCBvZiB0aGUgZWxlbWVudCB3aXRoaW4gaXQncyBjb250YWluZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgICBXZXRoZXIgdGhlIGl0ZW0gbXVzdCBiZSByZW1vdmVkIGZyb20gaXRzIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHRvZ2dsZUVsZW1lbnQoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHJlbW92ZUZyb21Db250YWluZXIgPSBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBib3R0b20gZWRnZSBvZiB0aGUgc2Nyb2xsIGNvbnRhaW5lclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRvcCArIHRoaXMud2luZG93SGVpZ2h0O1xuXG4gICAgICAgICAgICAvLyBEZWZpbmUgaWYgdGhlIGVsZW1lbnQgaXMgaW5WaWV3XG4gICAgICAgICAgICBsZXQgaW5WaWV3ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxUb3AgPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnBvc2l0aW9uID09PSAnYmVsb3cnKSB7XG4gICAgICAgICAgICAgICAgaW5WaWV3ID0gKHNjcm9sbFRvcCA+IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnN0aWNreSkge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxUb3AgPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfWVsc2UgaWYoZWxlbWVudC52aWV3cG9ydE9mZnNldCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZpZXdwb3J0T2Zmc2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbFZpZXdwb3J0T2Zmc2V0VG9wID0gc2Nyb2xsVG9wICsgKHRoaXMud2luZG93SGVpZ2h0ICogZWxlbWVudC52aWV3cG9ydE9mZnNldFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxWaWV3cG9ydE9mZnNldEJvdHRvbSA9IHNjcm9sbEJvdHRvbSAtICh0aGlzLndpbmRvd0hlaWdodCAqIGVsZW1lbnQudmlld3BvcnRPZmZzZXRbMF0pO1xuICAgICAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVmlld3BvcnRPZmZzZXRCb3R0b20gPiBlbGVtZW50Lm9mZnNldCAmJiBzY3JvbGxWaWV3cG9ydE9mZnNldFRvcCA8IGVsZW1lbnQubGltaXQpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbFZpZXdwb3J0T2Zmc2V0ID0gc2Nyb2xsQm90dG9tIC0gKHRoaXMud2luZG93SGVpZ2h0ICogZWxlbWVudC52aWV3cG9ydE9mZnNldFswXSk7XG4gICAgICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxWaWV3cG9ydE9mZnNldCA+IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFZpZXdwb3J0T2Zmc2V0IDwgZWxlbWVudC5saW1pdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxCb3R0b20gPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID4gZWxlbWVudC5saW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtdW5zdHVjaycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy11bnN0dWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8IGVsZW1lbnQub2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnQuaW5WaWV3Q2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGNsYXNzIGlmIGluVmlldywgcmVtb3ZlIGlmIG5vdFxuICAgICAgICAgICAgaWYgKGluVmlldykge1xuICAgICAgICAgICAgICAgIGlmKCFlbGVtZW50LmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGVsZW1lbnQuaW5WaWV3Q2xhc3MpKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudC5pblZpZXdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckNhbGxiYWNrKGVsZW1lbnQsJ2VudGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50LnJlcGVhdCAmJiAhZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUNvbnRhaW5lciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAtIGVsZW1lbnQub2Zmc2V0O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybVZhbHVlID0gYHRyYW5zbGF0ZTNkKDAsICR7eX1weCwgMClgXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50LnN0eWxlLk1velRyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVsZW1lbnQuc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50LnN0eWxlLk9UcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoZWxlbWVudC5pblZpZXdDbGFzcykpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZWxlbWVudC5pblZpZXdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJDYWxsYmFjayhlbGVtZW50LCdsZWF2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbW92ZUZyb21Db250YWluZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY2hlY2sgaWYgdGhlIGVsZW1lbnQgaGF2ZSBhIGNhbGxiYWNrLCBhbmQgdHJpZ2dlciB0aGUgZXZlbnQgc2V0IGluIHRoZSBkYXRhLWNhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICAgICAgZWxlbWVudCBDdXJyZW50IGVsZW1lbnQgdG8gdGVzdFxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIHRyaWdnZXJDYWxsYmFjayhlbGVtZW50LHdheSl7XG5cbiAgICAgICAgaWYoZWxlbWVudC5jYWxsYmFjayAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgZWxlbWVudC4kZWxlbWVudC50cmlnZ2VyKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBlbGVtZW50LmNhbGxiYWNrLmV2ZW50LFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGVsZW1lbnQuY2FsbGJhY2sub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB3YXk6IHdheVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2FkZCB0aGlzIHdoZXJlIHlvdSB3YW50IGR1ZGUgKGluIHlvdXIgbW9kdWxlIGJ0dylcbiAgICAgICAgICAgIC8vICRkb2N1bWVudC5vbihldmVudC5OYW1lc3BhY2UsKGUpPT57XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZS5vcHRpb25zLCBlLndheSk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgZGVzaXJlZCB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiAgICAgIEF2YWlsYWJsZSBvcHRpb25zIDpcbiAgICAgKiAgICAgICAgICB7bm9kZX0gdGFyZ2V0RWxlbSAtIFRoZSBET00gZWxlbWVudCB3ZSB3YW50IHRvIHNjcm9sbCB0b1xuICAgICAqICAgICAgICAgIHtub2RlfSBzb3VyY2VFbGVtIC0gQW4gYDxhPmAgZWxlbWVudCB3aXRoIGFuIGhyZWYgdGFyZ2V0aW5nIHRoZSBhbmNob3Igd2Ugd2FudCB0byBzY3JvbGwgdG9cbiAgICAgKiAgICAgICAgICB7bm9kZX0gb2Zmc2V0RWxlbSAtIEEgRE9NIGVsZW1lbnQgZnJvbSB3aGljaCB3ZSBnZXQgdGhlIGhlaWdodCB0byBzdWJzdHJhY3QgZnJvbSB0aGUgdGFyZ2V0T2Zmc2V0XG4gICAgICogICAgICAgICAgICAgIChleDogdXNlIG9mZnNldEVsZW0gdG8gcGFzcyBhIG1vYmlsZSBoZWFkZXIgdGhhdCBpcyBhYm92ZSBjb250ZW50LCB0byBtYWtlIHN1cmUgdGhlIHNjcm9sbFRvIHdpbGwgYmUgYWxpZ25lZCB3aXRoIGl0KVxuICAgICAqICAgICAgICAgIHtpbnR9IHRhcmdldE9mZnNldCAtIEFuIGFic29sdXRlIHZlcnRpY2FsIHNjcm9sbCB2YWx1ZSB0byByZWFjaCwgb3IgYW4gb2Zmc2V0IHRvIGFwcGx5IG9uIHRvcCBvZiBnaXZlbiBgdGFyZ2V0RWxlbWAgb3IgYHNvdXJjZUVsZW1gJ3MgdGFyZ2V0XG4gICAgICogICAgICAgICAge2ludH0gZGVsYXkgLSBBbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHN0YXJ0aW5nIHRvIHNjcm9sbFxuICAgICAqICAgICAgICAgIHtib29sZWFufSB0b1RvcCAtIFNldCB0byB0cnVlIHRvIHNjcm9sbCBhbGwgdGhlIHdheSB0byB0aGUgdG9wXG4gICAgICogICAgICAgICAge2Jvb2xlYW59IHRvQm90dG9tIC0gU2V0IHRvIHRydWUgdG8gc2Nyb2xsIGFsbCB0aGUgd2F5IHRvIHRoZSBib3R0b21cbiAgICAgKiAgICAgICAgICB7ZmxvYXR9IHNwZWVkIC0gRHVyYXRpb24gb2YgdGhlIHNjcm9sbFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2Nyb2xsVG8ob3B0aW9ucykge1xuICAgICAgICBsZXQgdGFyZ2V0RWxlbSA9IG9wdGlvbnMudGFyZ2V0RWxlbTtcbiAgICAgICAgY29uc3Qgc291cmNlRWxlbSA9IG9wdGlvbnMuc291cmNlRWxlbTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RWxlbSA9IG9wdGlvbnMub2Zmc2V0RWxlbTtcbiAgICAgICAgbGV0IHRhcmdldE9mZnNldCA9IGlzTnVtZXJpYyhvcHRpb25zLnRhcmdldE9mZnNldCkgPyBwYXJzZUludChvcHRpb25zLnRhcmdldE9mZnNldCkgOiAwO1xuICAgICAgICBjb25zdCBkZWxheSA9IGlzTnVtZXJpYyhvcHRpb25zLmRlbGF5KSA/IHBhcnNlSW50KG9wdGlvbnMuZGVsYXkpIDogMDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBpc051bWVyaWMob3B0aW9ucy5zcGVlZCkgPyBwYXJzZUludChvcHRpb25zLnNwZWVkKSA6IDgwMDtcbiAgICAgICAgY29uc3QgdG9Ub3AgPSBvcHRpb25zLnRvVG9wO1xuICAgICAgICBjb25zdCB0b0JvdHRvbSA9IG9wdGlvbnMudG9Cb3R0b207XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhdCBsZWFzdCBvbmUgb2YgdGhlIHJlcXVpcmVkIG9wdGlvbnMgaGFzIGJlZWVuIGZpbGxlZFxuICAgICAgICBpZiAoIXRvVG9wICYmICF0b0JvdHRvbSAmJiAhaXNOdW1lcmljKG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSAmJiAhdGFyZ2V0RWxlbSAmJiAhc291cmNlRWxlbSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBZb3UgbXVzdCBzcGVjaWZ5IGF0IGxlYXN0IG9uZSBvZiB0aGVzZSBwYXJhbWV0ZXJzOmAsIFtcbiAgICAgICAgICAgICAgICAne2Jvb2xlYW59IHRvVG9wIC0gU2V0IHRvIHRydWUgdG8gc2Nyb2xsIGFsbCB0aGUgd2F5IHRvIHRoZSB0b3AnLFxuICAgICAgICAgICAgICAgICd7Ym9vbGVhbn0gdG9Cb3R0b20gLSBTZXQgdG8gdHJ1ZSB0byBzY3JvbGwgYWxsIHRoZSB3YXkgdG8gdGhlIGJvdHRvbScsXG4gICAgICAgICAgICAgICAgJ3tpbnR9IHRhcmdldE9mZnNldCAtIEFuIGFic29sdXRlIHZlcnRpY2FsIHNjcm9sbCB2YWx1ZSB0byByZWFjaCwgb3IgYW4gb2Zmc2V0IHRvIGFwcGx5IG9uIHRvcCBvZiBnaXZlbiBgdGFyZ2V0RWxlbWAgb3IgYHNvdXJjZUVsZW1gXFwncyB0YXJnZXQnLFxuICAgICAgICAgICAgICAgICd7bm9kZX0gdGFyZ2V0RWxlbSAtIFRoZSBET00gZWxlbWVudCB3ZSB3YW50IHRvIHNjcm9sbCB0bycsXG4gICAgICAgICAgICAgICAgJ3tub2RlfSBzb3VyY2VFbGVtIC0gQW4gYDxhPmAgZWxlbWVudCB3aXRoIGFuIGhyZWYgdGFyZ2V0aW5nIHRoZSBhbmNob3Igd2Ugd2FudCB0byBzY3JvbGwgdG8nXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHNvdXJjZUVsZW0gaXMgZ2l2ZW4sIGZpbmQgYW5kIHN0b3JlIHRoZSB0YXJnZXRFbGVtIGl0J3MgcmVsYXRlZCB0b1xuICAgICAgICBpZiAoc291cmNlRWxlbSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldERhdGEgPSAnJztcblxuICAgICAgICAgICAgY29uc29sZS5sb2coc291cmNlRWxlbSk7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgc2VsZWN0b3IgKGdpdmVuIHdpdGggYGRhdGEtdGFyZ2V0YCBvciBgaHJlZmAgYXR0cmlidXRlcyBvbiBzb3VyY2VFbGVtKVxuICAgICAgICAgICAgbGV0IHNvdXJjZUVsZW1UYXJnZXQgPSBzb3VyY2VFbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuICAgICAgICAgICAgdGFyZ2V0RGF0YSA9IHNvdXJjZUVsZW1UYXJnZXQgPyBzb3VyY2VFbGVtVGFyZ2V0IDogc291cmNlRWxlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgdGFyZ2V0IGZvciBsYXRlclxuICAgICAgICAgICAgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0RGF0YSlbMF1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGhhdmUgYSB0YXJnZXRFbGVtLCBnZXQgaXQncyBjb29yZGluYXRlc1xuICAgICAgICBpZiAodGFyZ2V0RWxlbSkge1xuICAgICAgICAgICAgLy8gR2V0IHRhcmdldEVsZW0gb2Zmc2V0IGZyb20gdG9wXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtQkNSID0gdGFyZ2V0RWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbU9mZnNldFRvcCA9IHRhcmdldEVsZW1CQ1IudG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAvLyBUT0RPIC0gSW1wcm92ZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBzb3VyY2UsIG1pZ2h0IG5vdCBhbHdheXMgYmUgZG9jdW1lbnRFbGVtZW50XG5cbiAgICAgICAgICAgIC8vIEZpbmFsIHZhbHVlIG9mIHNjcm9sbCBkZXN0aW5hdGlvbiA6IHRhcmdldEVsZW1PZmZzZXRUb3AgKyAob3B0aW9uYWwgb2Zmc2V0IGdpdmVuIGluIG9wdGlvbnMpXG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0YXJnZXRFbGVtT2Zmc2V0VG9wICsgdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgaGF2ZSBhbiBvZmZzZXRFbGVtLCBnZXQgaXRzIGhlaWdodCBhbmQgcmVtb3ZlIGl0IGZyb20gdGFyZ2V0T2Zmc2V0IGFscmVhZHkgY29tcHV0ZWRcbiAgICAgICAgaWYgKG9mZnNldEVsZW0pIHtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBvZmZzZXRFbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IHRhcmdldE9mZnNldCAtIG9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIHdhbnQgdG8gZ28gdG8gb25lIG9mIGJvdW5kYXJpZXNcbiAgICAgICAgaWYgKHRvVG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRvQm90dG9tID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAvLyBUT0RPIC0gSW1wcm92ZSBjb250YWluZXIgaGVpZ2h0IHNvdXJjZSwgbWlnaHQgbm90IGFsd2F5cyBiZSB0aGUgYm9keVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IC8vIFRPRE8gLSBSZW1vdmUgalF1ZXJ5IGhlcmVcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldE9mZnNldFxuICAgICAgICAgICAgfSwgc3BlZWQpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGVsZW1lbnRzIGFuZCByZWNhbGN1bGF0ZSBhbGwgdGhlIHBvc2l0aW9ucyBvbiB0aGUgcGFnZVxuICAgICAqL1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmFuaW1hdGVFbGVtZW50cygpO1xuXG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICR3aW5kb3cub2ZmKGAuJHtFVkVOVF9LRVl9YCk7XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vZmYoYC4ke0VWRU5UX0tFWX1gKTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElkKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50cyA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jb21vdGl2ZSBTY3JvbGwgTWFuYWdlclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7ICRkb2N1bWVudCwgJHdpbmRvdywgJGh0bWwsICRib2R5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IFNjcm9sbCwgeyBERUZBVUxUUywgRVZFTlQgfSBmcm9tICcuLi9TY3JvbGwnO1xuaW1wb3J0IFNtb290aFNjcm9sbCBmcm9tICcuLi9TbW9vdGhTY3JvbGwnO1xuXG4vKipcbiAqIEJhc2ljIG1vZHVsZSB0aGF0IGRldGVjdHMgd2hpY2ggc2Nyb2xsaW5nIG1vZHVsZSB3ZSdsbCBiZSB1c2luZ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnNtb290aCA9IG9wdGlvbnMuc21vb3RoIHx8IERFRkFVTFRTLnNtb290aDtcbiAgICAgICAgdGhpcy5zbW9vdGhNb2JpbGUgPSBvcHRpb25zLnNtb290aE1vYmlsZSB8fCBERUZBVUxUUy5zbW9vdGhNb2JpbGU7XG4gICAgICAgIHRoaXMubW9iaWxlQ29udGFpbmVyID0gb3B0aW9ucy5tb2JpbGVDb250YWluZXIgfHwgREVGQVVMVFMubW9iaWxlQ29udGFpbmVyO1xuICAgICAgICB0aGlzLmlzTW9iaWxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgJGh0bWxbMF0uc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgJGJvZHlbMF0uc2Nyb2xsVG9wID0gMDtcblxuICAgICAgICBpZiAoIXRoaXMuc21vb3RoTW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTW9iaWxlID0gKC9BbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlID0gKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNtb290aCA9PT0gdHJ1ZSAmJiAhdGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU21vb3RoU2Nyb2xsKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vYmlsZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyID0gdGhpcy5tb2JpbGVDb250YWluZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTY3JvbGwodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlLmluaXQoKTtcblxuICAgICAgICBjb25zdCAkc2Nyb2xsVG9PbkxvYWRFbCA9ICQoJy5qcy1zY3JvbGx0by1vbi1sb2FkJykuZmlyc3QoKTtcblxuICAgICAgICBpZiAoJHNjcm9sbFRvT25Mb2FkRWwubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAkZG9jdW1lbnQudHJpZ2dlckhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdFdmVudC5TQ1JPTExUTycsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtOiAkc2Nyb2xsVG9PbkxvYWRFbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvY29tb3RpdmUgU21vb3RoIFNjcm9sbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7ICR3aW5kb3csICRkb2N1bWVudCwgJGh0bWwsIGh0bWwgfSBmcm9tICcuLi8uLi91dGlscy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgU2Nyb2xsLCB7IERFRkFVTFRTLCBFVkVOVCB9IGZyb20gJy4uL1Njcm9sbCc7XG5pbXBvcnQgeyBnZXRQYXJlbnRzLCBxdWVyeUNsb3Nlc3RQYXJlbnQgfSBmcm9tICcuLi8uLi91dGlscy9odG1sJztcbmltcG9ydCB7IGxlcnAgfSBmcm9tICcuLi8uLi91dGlscy9tYXRocydcblxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCBWaXJ0dWFsU2Nyb2xsIGZyb20gJ3ZpcnR1YWwtc2Nyb2xsJztcbmltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4uLy4uL3V0aWxzL2lzJztcblxuLyoqXG4gKiBTbW9vdGggc2Nyb2xsaW5nIHVzaW5nIGBzbW9vdGgtc2Nyb2xsYmFyYC5cbiAqIEJhc2VkIG9uIGBTY3JvbGxgIGNsYXNzLCB3aGljaCBhbGxvd3MgYW5pbWF0aW9ucyBvZiBlbGVtZW50cyBvbiB0aGUgcGFnZVxuICogYWNjb3JkaW5nIHRvIHNjcm9sbCBwb3NpdGlvbi5cbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuc2VjdGlvbnNTZWxlY3RvciA9IChvcHRpb25zLnNlY3Rpb25zKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5zZWN0aW9ucykgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKERFRkFVTFRTLnNlY3Rpb25zKTtcbiAgICAgICAgdGhpcy5pc1JldmVyc2VkID0gb3B0aW9ucy5yZXZlcnNlZCB8fCBERUZBVUxUUy5yZXZlcnNlZDtcbiAgICAgICAgdGhpcy5nZXREaXJlY3Rpb24gPSBvcHRpb25zLmdldERpcmVjdGlvbiB8fCBERUZBVUxUUy5nZXREaXJlY3Rpb247XG4gICAgICAgIHRoaXMuZ2V0U3BlZWQgPSBvcHRpb25zLmdldFNwZWVkIHx8IERFRkFVTFRTLmdldFNwZWVkO1xuICAgICAgICB0aGlzLmluZXJ0aWEgPSBvcHRpb25zLmluZXJ0aWEgfHwgREVGQVVMVFMuaW5lcnRpYTtcbiAgICAgICAgdGhpcy5zY3JvbGxCYXJDbGFzc05hbWUgPSBvcHRpb25zLnNjcm9sbEJhckNsYXNzTmFtZSB8fCBERUZBVUxUUy5zY3JvbGxCYXJDbGFzc05hbWU7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmdDbGFzc05hbWUgPSBvcHRpb25zLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lIHx8IERFRkFVTFRTLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lO1xuXG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHNjcm9sbGluZyBhbmltYXRpb25zXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy8gQWRkIGNsYXNzIHRvIHRoZSBkb2N1bWVudCB0byBrbm93IGlmIFNtb290aFNjcm9sbCBpcyBpbml0aWFsaXplZCAodG8gbWFuYWdlIG92ZXJmbG93IG9uIGNvbnRhaW5lcnMpXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoYXMtc21vb3RoLXNjcm9sbCcpO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVmlydHVhbFNjcm9sbCh7XG4gICAgICAgICAgICBtb3VzZU11bHRpcGxpZXI6IChuYXZpZ2F0b3IucGxhdGZvcm0uaW5kZXhPZignV2luJykgPiAtMSkgPyAxIDogMC40LFxuICAgICAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiA0LFxuICAgICAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IDMwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW5lcnRpYSA9IHRoaXMuaW5lcnRpYSAqIDAuMTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbCA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDBcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnNwZWVkID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uub24oKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1RpY2tpbmcgJiYgIXRoaXMuaXNEcmFnZ2luZ1Njcm9sbEJhcikge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1Njcm9sbGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQodGhpcy5pc1Njcm9sbGluZ0NsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgLT0gZS5kZWx0YVk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5kZWx0YS55IDwgMCkgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5kZWx0YS55ID4gdGhpcy5pbnN0YW5jZS5saW1pdCkgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gdGhpcy5pbnN0YW5jZS5saW1pdDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFNjcm9sbExpbWl0KCk7XG4gICAgICAgIHRoaXMuaW5pdFNjcm9sbEJhcigpO1xuXG4gICAgICAgIHRoaXMuYWRkU2VjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuXG4gICAgICAgIHRoaXMuZXZlbnRzKCk7XG5cbiAgICAgICAgdGhpcy5wcmVsb2FkSW1hZ2VzKCk7XG5cbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBMaXN0ZW4vdHJpZ2dlciBldmVudHNcbiAgICAqKi9cbiAgICBldmVudHMoKSB7XG4gICAgICAgIC8vIFJlYnVpbGQgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlJFQlVJTEQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuVVBEQVRFLCAoZXZlbnQsIG9wdGlvbnMpID0+IHRoaXMudXBkYXRlKG9wdGlvbnMpKTtcblxuICAgICAgICAvLyBTY3JvbGx0byBidXR0b24gZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULkNMSUNLLCAnLmpzLXNjcm9sbHRvJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICBzb3VyY2VFbGVtOiBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldEVsZW06IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9mZnNldCcpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlNDUk9MTFRPLCAoZXZlbnQpID0+IHRoaXMuc2Nyb2xsVG8oZXZlbnQub3B0aW9ucykpO1xuXG4gICAgICAgIC8vIFNldHVwIGRvbmVcbiAgICAgICAgJGRvY3VtZW50LnRyaWdnZXJIYW5kbGVyKHtcbiAgICAgICAgICAgIHR5cGU6IEVWRU5ULklTUkVBRFlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVzaXplIGV2ZW50XG4gICAgICAgICR3aW5kb3cub24oRVZFTlQuUkVTSVpFLCBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9LDYwMCkpO1xuICAgIH1cblxuICAgIGluaXRTY3JvbGxCYXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV3JhcHBlci5jbGFzc0xpc3QuYWRkKGAke3RoaXMuc2Nyb2xsQmFyQ2xhc3NOYW1lfV93cmFwcGVyYCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5zY3JvbGxCYXJDbGFzc05hbWV9YCk7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxiYXJXcmFwcGVyLmFwcGVuZCh0aGlzLnNjcm9sbGJhcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuc2Nyb2xsYmFyV3JhcHBlcik7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLnN0eWxlLmhlaWdodCA9IGAkeyh3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gdGhpcy5pbnN0YW5jZS5saW1pdH1weGA7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmFyTGltaXQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLnNjcm9sbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywoZSkgPT4gdGhpcy5nZXRTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsKGUpID0+IHRoaXMucmVsZWFzZVNjcm9sbEJhcihlKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLChlKSA9PiB0aGlzLm1vdmVTY3JvbGxCYXIoZSkpO1xuXG4gICAgfVxuXG4gICAgcmVpbml0U2Nyb2xsQmFyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSBgJHsod2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmlubmVySGVpZ2h0KSAvIHRoaXMuaW5zdGFuY2UubGltaXR9cHhgO1xuICAgICAgICB0aGlzLnNjcm9sbEJhckxpbWl0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cblxuICAgIGRlc3Ryb3lTY3JvbGxCYXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsKGUpID0+IHRoaXMuZ2V0U2Nyb2xsQmFyKGUpKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLChlKSA9PiB0aGlzLnJlbGVhc2VTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywoZSkgPT4gdGhpcy5tb3ZlU2Nyb2xsQmFyKGUpKTtcbiAgICB9XG5cbiAgICBnZXRTY3JvbGxCYXIoZSkge1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICByZWxlYXNlU2Nyb2xsQmFyKGUpIHtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyID0gZmFsc2U7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBtb3ZlU2Nyb2xsQmFyKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZyAmJiB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSAoZS5wYWdlWSAqIDEwMCAvICh3aW5kb3cuaW5uZXJIZWlnaHQpKSAqIHRoaXMuaW5zdGFuY2UubGltaXQgLyAxMDA7XG5cbiAgICAgICAgICAgICAgICBpZih5ID4gMCAmJiB5IDwgdGhpcy5pbnN0YW5jZS5saW1pdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgZXhpc3Rpbmcgc2VjdGlvbnMgYW5kIGZpbmQgYWxsIHNlY3Rpb25zLlxuICAgICAqIENhbGxlZCBvbiBwYWdlIGxvYWQgYW5kIGFueSBzdWJzZXF1ZW50IHVwZGF0ZXMuXG4gICAgICovXG5cbiAgICBhZGRTZWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5zZWN0aW9ucyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMuc2VjdGlvbnNTZWxlY3Rvci5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGxldCBzZWN0aW9uRWxlbWVudCA9IHRoaXMuc2VjdGlvbnNTZWxlY3RvcltpXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBzZWN0aW9uRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSAod2luZG93LmlubmVySGVpZ2h0ICogMS41KSAtIHRoaXMuZ2V0VHJhbnNsYXRlKHNlY3Rpb25FbGVtZW50KS55O1xuICAgICAgICAgICAgbGV0IGxpbWl0ID0gb2Zmc2V0ICsgc2VjdGlvbkVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgKHdpbmRvdy5pbm5lckhlaWdodCAqIDIpO1xuICAgICAgICAgICAgbGV0IHBlcnNpc3RlbnQgPSB0eXBlb2Ygc2VjdGlvbkVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBlcnNpc3RlbnQnKSA9PT0gJ3N0cmluZydcblxuICAgICAgICAgICAgbGV0IGluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc2VjdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluc3RhbmNlLnNjcm9sbC55ID4gb2Zmc2V0ICYmIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPCBsaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBpblZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBzZWN0aW9uRWxlbWVudCxcbiAgICAgICAgICAgICAgICBvZmZzZXQsXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICAgICAgaW5WaWV3LFxuICAgICAgICAgICAgICAgIHBlcnNpc3RlbnRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZWN0aW9ucy5wdXNoKHNlY3Rpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgZXhpc3RpbmcgZWxlbWVudHMgYW5kIGZpbmQgYWxsIGFuaW1hdGFibGUgZWxlbWVudHMuXG4gICAgICogQ2FsbGVkIG9uIHBhZ2UgbG9hZCBhbmQgYW55IHN1YnNlcXVlbnQgdXBkYXRlcy5cbiAgICAgKi9cbiAgICBhZGRFbGVtZW50cygpIHtcbiAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IFtdO1xuXG5cbiAgICAgICAgZm9yIChsZXQgeSA9IDAgOyB5IDwgdGhpcy5zZWN0aW9ucy5sZW5ndGg7IHkgKyspIHtcblxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLnNlY3Rpb25zW3ldLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNlbGVjdG9yKTtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IGVsZW1lbnRzLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFNwZWVkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3BlZWQnKSA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNwZWVkJykgLyAxMCA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UG9zaXRpb24gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50VGFyZ2V0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRIb3Jpem9udGFsID0gKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1ob3Jpem9udGFsJykgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFN0aWNreSA9ICh0eXBlb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RpY2t5JykgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFN0aWNreVRhcmdldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0aWNreS10YXJnZXQnKTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gKGVsZW1lbnRUYXJnZXQgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50VGFyZ2V0KS5sZW5ndGgpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50VGFyZ2V0KSA6IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRPZmZzZXQ7XG4gICAgICAgICAgICAgICAgLy8gcmVzZXQgdHJhbnNmb3JtIHRvIGdldCB0aGUgcmVhbCBvZmZzZXRcblxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnNlY3Rpb25zW3ldLmluVmlldykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T2Zmc2V0ID0gcGFyc2VJbnQodGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRoaXMuZ2V0VHJhbnNsYXRlKHRoaXMuc2VjdGlvbnNbeV0uZWxlbWVudCkueSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T2Zmc2V0ID0gcGFyc2VJbnQodGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50TGltaXQgPSBlbGVtZW50T2Zmc2V0ICsgdGFyZ2V0Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50Vmlld3BvcnRPZmZzZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3cG9ydC1vZmZzZXQnKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICBlbGVtZW50Vmlld3BvcnRPZmZzZXQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3cG9ydC1vZmZzZXQnKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vTWFuYWdlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRDYWxsYmFja1N0cmluZyA9ICh0eXBlb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKSA9PT0gJ3N0cmluZycpID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRDYWxsYmFjayA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZihlbGVtZW50Q2FsbGJhY2tTdHJpbmcgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBldmVudCA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoMCwgZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25zU3RyaW5nID0gZWxlbWVudENhbGxiYWNrU3RyaW5nLnN1YnN0cihlbGVtZW50Q2FsbGJhY2tTdHJpbmcuaW5kZXhPZignKCcpLGVsZW1lbnRDYWxsYmFja1N0cmluZy5sZW5ndGggLSBldmVudC5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoJygnLCcnKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1N0cmluZyA9IG9wdGlvbnNTdHJpbmcucmVwbGFjZSgnKScsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gb3B0aW9uc1N0cmluZy5zcGxpdCgnfCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiA9IG9wdGlvbnNbal0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblswXSA9IG9wdGlvblswXS5yZXBsYWNlKCcgJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIGEgYm9vbGVhblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uWzFdID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKG9wdGlvblsxXSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIG51bWVyaWNcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoL15cXGQrJC8udGVzdChvcHRpb25bMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gcGFyc2VJbnQob3B0aW9uWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IG9wdGlvblsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtvcHRpb25bMF1dID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudENhbGxiYWNrID0ge2V2ZW50OmV2ZW50LCBvcHRpb25zOm9ian07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgZWxlbWVudHMgc3RheXMgdmlzaWJsZSBhZnRlciBzY3JvbGxpbmcgcGFzdCBpdFxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UmVwZWF0ID0gKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZXBlYXQnKSA9PT0gJ3N0cmluZycpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRJblZpZXdDbGFzcyA9ICh0eXBlb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW52aWV3LWNsYXNzJykgPT09ICdzdHJpbmcnKSA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWludmlldy1jbGFzcycpIDogJ2lzLXNob3cnO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50VGFyZ2V0ICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zZm9ybScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPZmZzZXQgLT0gcGFyc2VJbnQoSlNPTi5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2Zvcm0nKSkueSk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9IGVsZW1lbnRPZmZzZXQgKyB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50U3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudFN0aWNreVRhcmdldCB8fCB0eXBlb2YgZWxlbWVudFN0aWNreVRhcmdldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9IEluZmluaXR5O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50U3RpY2t5VGFyZ2V0KVswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBlbGVtZW50Lm9mZnNldEhlaWdodCArIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICBpblZpZXdDbGFzczogZWxlbWVudEluVmlld0NsYXNzLFxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogZWxlbWVudExpbWl0LFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IE1hdGgucm91bmQoZWxlbWVudE9mZnNldCksXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdDogZWxlbWVudFJlcGVhdCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGVsZW1lbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnRPZmZzZXQ6IGVsZW1lbnRWaWV3cG9ydE9mZnNldFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgcGFyYWxsYXggYW5pbWF0ZWQgZWxlbWVudHNcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFNwZWVkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFBvc2l0aW9uID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRIb3Jpem9udGFsID0gKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1ob3Jpem9udGFsJykgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRNaWRkbGUgPSAoKGVsZW1lbnRMaW1pdCAtIGVsZW1lbnRPZmZzZXQpIC8gMikgKyBlbGVtZW50T2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudERlbGF5ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVsYXknKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50Lmhvcml6b250YWwgPSBlbGVtZW50SG9yaXpvbnRhbDtcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5taWRkbGUgPSBlbGVtZW50TWlkZGxlO1xuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50Lm9mZnNldCA9IGVsZW1lbnRPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQucG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc3BlZWQgPSBlbGVtZW50U3BlZWRcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5kZWxheSA9IGVsZW1lbnREZWxheTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuc3RpY2t5ID0gZWxlbWVudFN0aWNreTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9sYXVuY2ggdGhlIHRvZ2dsZSBmdW5jdGlvbiB0byBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzdGlja3kgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50KG5ld0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tTY3JvbGwoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2Nyb2xsaW5nIHx8IHRoaXMuaXNEcmFnZ2luZ1Njcm9sbEJhcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc1Njcm9sbFRpY2tpbmcpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT7CoHRoaXMuY2hlY2tTY3JvbGwoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSAoTWF0aC5hYnModGhpcy5pbnN0YW5jZS5kZWx0YS55IC0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkpO1xuICAgICAgICAgICAgaWYgKChkaXN0YW5jZSA8IDEgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YS55ICE9IDApIHx8IChkaXN0YW5jZSA8IDAuNSAmJiB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPT0gMCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IE1hdGgucm91bmQodGhpcy5pbnN0YW5jZS5zY3JvbGwueSk7XG4gICAgICAgICAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuaXNTY3JvbGxpbmdDbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjbGFzcy90cmFuc2Zvcm0gYW5pbWF0aW9ucywgYW5kIHVwZGF0ZSB0aGUgZ2xvYmFsIHNjcm9sbCBwb3NpdGlvbm5pbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBpc0ZvcmNlZCBEZXRlcm1pbmVzIGlmIHRoaXMgaXMgYSBmb3JjZWQgcmVxdWVzdCAoZnJvbSBhIG1hbnVhbCBjYWxsIHRvIHVwZGF0ZSBvciBhIHJlc2l6ZSlcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICBzdGF0dXMgICAgICBPcHRpb25hbCBzdGF0dXMgb2JqZWN0IHJlY2VpdmVkIHdoZW4gbWV0aG9kIGlzXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGVkIGJ5IHNtb290aC1zY3JvbGxiYXIgaW5zdGFuY2UgbGlzdGVuZXIuXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICByZW5kZXIoaXNGb3JjZWQsIGUpIHtcbiAgICAgICAgaWYodGhpcy5pc1Njcm9sbGluZykge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IGxlcnAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSx0aGlzLmluc3RhbmNlLmRlbHRhLnksIHRoaXMuaW5lcnRpYSk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSBsZXJwKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnksdGhpcy5pbnN0YW5jZS5kZWx0YS55LCAwLjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuc2VjdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmKHRoaXMuc2VjdGlvbnNbaV0ucGVyc2lzdGVudCB8fCAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+IHRoaXMuc2VjdGlvbnNbaV0ub2Zmc2V0ICYmIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPCB0aGlzLnNlY3Rpb25zW2ldLmxpbWl0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuc2VjdGlvbnNbaV0uZWxlbWVudCwwLC10aGlzLmluc3RhbmNlLnNjcm9sbC55KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldLmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuZ2V0RGlyZWN0aW9uKXtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPiB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA8IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uICE9PSAndXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5nZXRTcGVlZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSAhPT0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnNwZWVkID0gKHRoaXMuaW5zdGFuY2UuZGVsdGEueSAtIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIC8gKERhdGUubm93KCkgLSB0aGlzLnRpbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gdGhpcy5pbnN0YW5jZS5kZWx0YS55O1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnNwZWVkID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudHMoaXNGb3JjZWQpO1xuICAgICAgICB0aGlzLmFuaW1hdGVFbGVtZW50cygpO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLm9uU2Nyb2xsKHRoaXMuaW5zdGFuY2UpO1xuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgICAgLy8gc2Nyb2xsYmFyIHRyYW5zbGF0aW9uXG4gICAgICAgIGxldCBzY3JvbGxCYXJUcmFuc2xhdGlvbiA9ICh0aGlzLmluc3RhbmNlLnNjcm9sbC55IC8gdGhpcy5pbnN0YW5jZS5saW1pdCkgKiB0aGlzLnNjcm9sbEJhckxpbWl0O1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLnNjcm9sbGJhciwwLHNjcm9sbEJhclRyYW5zbGF0aW9uKTtcblxuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTY3JvbGwgdG8gYSBkZXNpcmVkIHRhcmdldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9uc1xuICAgICAqICAgICAgQXZhaWxhYmxlIG9wdGlvbnMgOlxuICAgICAqICAgICAgICAgIHtub2RlfSB0YXJnZXRFbGVtIC0gVGhlIERPTSBlbGVtZW50IHdlIHdhbnQgdG8gc2Nyb2xsIHRvXG4gICAgICogICAgICAgICAge25vZGV9IHNvdXJjZUVsZW0gLSBBbiBgPGE+YCBlbGVtZW50IHdpdGggYW4gaHJlZiB0YXJnZXRpbmcgdGhlIGFuY2hvciB3ZSB3YW50IHRvIHNjcm9sbCB0b1xuICAgICAqICAgICAgICAgIHtub2RlfSBvZmZzZXRFbGVtIC0gQSBET00gZWxlbWVudCBmcm9tIHdoaWNoIHdlIGdldCB0aGUgaGVpZ2h0IHRvIHN1YnN0cmFjdCBmcm9tIHRoZSB0YXJnZXRPZmZzZXRcbiAgICAgKiAgICAgICAgICAgICAgKGV4OiB1c2Ugb2Zmc2V0RWxlbSB0byBwYXNzIGEgbW9iaWxlIGhlYWRlciB0aGF0IGlzIGFib3ZlIGNvbnRlbnQsIHRvIG1ha2Ugc3VyZSB0aGUgc2Nyb2xsVG8gd2lsbCBiZSBhbGlnbmVkIHdpdGggaXQpXG4gICAgICogICAgICAgICAge2ludH0gdGFyZ2V0T2Zmc2V0IC0gQW4gYWJzb2x1dGUgdmVydGljYWwgc2Nyb2xsIHZhbHVlIHRvIHJlYWNoLCBvciBhbiBvZmZzZXQgdG8gYXBwbHkgb24gdG9wIG9mIGdpdmVuIGB0YXJnZXRFbGVtYCBvciBgc291cmNlRWxlbWAncyB0YXJnZXRcbiAgICAgKiAgICAgICAgICB7aW50fSBkZWxheSAtIEFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZWZvcmUgc3RhcnRpbmcgdG8gc2Nyb2xsXG4gICAgICogICAgICAgICAge2Jvb2xlYW59IHRvVG9wIC0gU2V0IHRvIHRydWUgdG8gc2Nyb2xsIGFsbCB0aGUgd2F5IHRvIHRoZSB0b3BcbiAgICAgKiAgICAgICAgICB7Ym9vbGVhbn0gdG9Cb3R0b20gLSBTZXQgdG8gdHJ1ZSB0byBzY3JvbGwgYWxsIHRoZSB3YXkgdG8gdGhlIGJvdHRvbVxuICAgICAqICAgICAgICAgIHtmbG9hdH0gc3BlZWQgLSBEdXJhdGlvbiBvZiB0aGUgc2Nyb2xsICjimqDvuI8gRElTQUJMRUQgc2luY2UgdjIpXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICBzY3JvbGxUbyhvcHRpb25zKSB7XG4gICAgICAgIGxldCB0YXJnZXRFbGVtID0gb3B0aW9ucy50YXJnZXRFbGVtO1xuICAgICAgICBjb25zdCBzb3VyY2VFbGVtID0gb3B0aW9ucy5zb3VyY2VFbGVtO1xuICAgICAgICBjb25zdCBvZmZzZXRFbGVtID0gb3B0aW9ucy5vZmZzZXRFbGVtO1xuICAgICAgICBsZXQgdGFyZ2V0T2Zmc2V0ID0gaXNOdW1lcmljKG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSA/IHBhcnNlSW50KG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSA6IDA7XG4gICAgICAgIGNvbnN0IGRlbGF5ID0gaXNOdW1lcmljKG9wdGlvbnMuZGVsYXkpID8gcGFyc2VJbnQob3B0aW9ucy5kZWxheSkgOiAwO1xuICAgICAgICAvLyBjb25zdCBzcGVlZCA9IGlzTnVtZXJpYyhvcHRpb25zLnNwZWVkKSA/IHBhcnNlSW50KG9wdGlvbnMuc3BlZWQpIDogOTAwOyAvLyAo4pqg77iPIERJU0FCTEVEIHNpbmNlIHYyKVxuICAgICAgICBjb25zdCB0b1RvcCA9IG9wdGlvbnMudG9Ub3A7XG4gICAgICAgIGNvbnN0IHRvQm90dG9tID0gb3B0aW9ucy50b0JvdHRvbTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgYXQgbGVhc3Qgb25lIG9mIHRoZSByZXF1aXJlZCBvcHRpb25zIGhhcyBiZWVlbiBmaWxsZWRcbiAgICAgICAgaWYgKCF0b1RvcCAmJiAhdG9Cb3R0b20gJiYgIWlzTnVtZXJpYyhvcHRpb25zLnRhcmdldE9mZnNldCkgJiYgIXRhcmdldEVsZW0gJiYgIXNvdXJjZUVsZW0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgWW91IG11c3Qgc3BlY2lmeSBhdCBsZWFzdCBvbmUgb2YgdGhlc2UgcGFyYW1ldGVyczpgLCBbXG4gICAgICAgICAgICAgICAgJ3tib29sZWFufSB0b1RvcCAtIFNldCB0byB0cnVlIHRvIHNjcm9sbCBhbGwgdGhlIHdheSB0byB0aGUgdG9wJyxcbiAgICAgICAgICAgICAgICAne2Jvb2xlYW59IHRvQm90dG9tIC0gU2V0IHRvIHRydWUgdG8gc2Nyb2xsIGFsbCB0aGUgd2F5IHRvIHRoZSBib3R0b20nLFxuICAgICAgICAgICAgICAgICd7aW50fSB0YXJnZXRPZmZzZXQgLSBBbiBhYnNvbHV0ZSB2ZXJ0aWNhbCBzY3JvbGwgdmFsdWUgdG8gcmVhY2gsIG9yIGFuIG9mZnNldCB0byBhcHBseSBvbiB0b3Agb2YgZ2l2ZW4gYHRhcmdldEVsZW1gIG9yIGBzb3VyY2VFbGVtYFxcJ3MgdGFyZ2V0JyxcbiAgICAgICAgICAgICAgICAne25vZGV9IHRhcmdldEVsZW0gLSBUaGUgRE9NIGVsZW1lbnQgd2Ugd2FudCB0byBzY3JvbGwgdG8nLFxuICAgICAgICAgICAgICAgICd7bm9kZX0gc291cmNlRWxlbSAtIEFuIGA8YT5gIGVsZW1lbnQgd2l0aCBhbiBocmVmIHRhcmdldGluZyB0aGUgYW5jaG9yIHdlIHdhbnQgdG8gc2Nyb2xsIHRvJ1xuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBzb3VyY2VFbGVtIGlzIGdpdmVuLCBmaW5kIGFuZCBzdG9yZSB0aGUgdGFyZ2V0RWxlbSBpdCdzIHJlbGF0ZWQgdG9cbiAgICAgICAgaWYgKHNvdXJjZUVsZW0pIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXREYXRhID0gJyc7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZUVsZW0pO1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHNlbGVjdG9yIChnaXZlbiB3aXRoIGBkYXRhLXRhcmdldGAgb3IgYGhyZWZgIGF0dHJpYnV0ZXMgb24gc291cmNlRWxlbSlcbiAgICAgICAgICAgIGxldCBzb3VyY2VFbGVtVGFyZ2V0ID0gc291cmNlRWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JylcbiAgICAgICAgICAgIHRhcmdldERhdGEgPSBzb3VyY2VFbGVtVGFyZ2V0ID8gc291cmNlRWxlbVRhcmdldCA6IHNvdXJjZUVsZW0uZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHRhcmdldCBmb3IgbGF0ZXJcbiAgICAgICAgICAgIHRhcmdldEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldERhdGEpWzBdXG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBoYXZlIGEgdGFyZ2V0RWxlbSwgZ2V0IGl0J3MgY29vcmRpbmF0ZXNcbiAgICAgICAgaWYgKHRhcmdldEVsZW0pIHtcbiAgICAgICAgICAgIC8vIEdldCB0YXJnZXRFbGVtIG9mZnNldCBmcm9tIHRvcFxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbUJDUiA9IHRhcmdldEVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW1PZmZzZXRUb3AgPSB0YXJnZXRFbGVtQkNSLnRvcCArIHRoaXMuJGNvbnRhaW5lclswXS5zY3JvbGxUb3BcblxuICAgICAgICAgICAgLy8gVHJ5IGFuZCBmaW5kIHRoZSB0YXJnZXRFbGVtJ3MgcGFyZW50IHNlY3Rpb25cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFBhcmVudHMgPSBnZXRQYXJlbnRzKHRhcmdldEVsZW0pXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRTZWN0aW9uID0gdGFyZ2V0UGFyZW50cy5maW5kKGNhbmRpZGF0ZSA9PiB0aGlzLnNlY3Rpb25zLmZpbmQoc2VjdGlvbiA9PiBzZWN0aW9uLmVsZW1lbnQgPT0gY2FuZGlkYXRlKSlcbiAgICAgICAgICAgIGxldCBwYXJlbnRTZWN0aW9uT2Zmc2V0ID0gMFxuICAgICAgICAgICAgaWYocGFyZW50U2VjdGlvbikge1xuICAgICAgICAgICAgICAgIHBhcmVudFNlY3Rpb25PZmZzZXQgPSB0aGlzLmdldFRyYW5zbGF0ZShwYXJlbnRTZWN0aW9uKS55IC8vIFdlIGdvdCBhIHBhcmVudCBzZWN0aW9uLCBzdG9yZSBpdCdzIGN1cnJlbnQgb2Zmc2V0IHRvIHJlbW92ZSBpdCBsYXRlclxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGaW5hbCB2YWx1ZSBvZiBzY3JvbGwgZGVzdGluYXRpb24gOiB0YXJnZXRFbGVtT2Zmc2V0VG9wICsgKG9wdGlvbmFsIG9mZnNldCBnaXZlbiBpbiBvcHRpb25zKSAtIChwYXJlbnQncyBzZWN0aW9uIHRyYW5zbGF0ZSlcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IHRhcmdldEVsZW1PZmZzZXRUb3AgKyB0YXJnZXRPZmZzZXQgLSBwYXJlbnRTZWN0aW9uT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgaGF2ZSBhbiBvZmZzZXRFbGVtLCBnZXQgaXRzIGhlaWdodCBhbmQgcmVtb3ZlIGl0IGZyb20gdGFyZ2V0T2Zmc2V0IGFscmVhZHkgY29tcHV0ZWRcbiAgICAgICAgaWYgKG9mZnNldEVsZW0pIHtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBvZmZzZXRFbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IHRhcmdldE9mZnNldCAtIG9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIHdhbnQgdG8gZ28gdG8gb25lIG9mIGJvdW5kYXJpZXNcbiAgICAgICAgaWYgKHRvVG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRvQm90dG9tID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0aGlzLmluc3RhbmNlLmxpbWl0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2FpdCBmb3IgdGhlIGFza2VkIGRlbGF5IGlmIG5lZWRlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IHRhcmdldE9mZnNldDsgLy8gQWN0dWFsIHNjcm9sbFRvICh0aGUgbGVycCB3aWxsIGRvIHRoZSBhbmltYXRpb24gaXRzZWxmKVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIHNjcm9sbC4gSWYgd2Ugd2VyZSBpbiBpZGxlIHN0YXRlOiB3ZSdyZSBub3QgYW55bW9yZVxuICAgICAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmNoZWNrU2Nyb2xsKCk7XG4gICAgICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQodGhpcy5pc1Njcm9sbGluZ0NsYXNzTmFtZSk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIHNjcm9sbCBiYXIgbGltaXRcbiAgICAgKi9cbiAgICBzZXRTY3JvbGxMaW1pdCgpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5saW1pdCA9IHRoaXMuJGNvbnRhaW5lclswXS5vZmZzZXRIZWlnaHQgLSB0aGlzLndpbmRvd0hlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBDU1MgdHJhbnNmb3JtIHByb3BlcnRpZXMgb24gYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gIGVsZW1lbnQgIFRhcmdldHRlZCBub2RlXG4gICAgICogQHBhcmFtICB7aW50fSAgICAgeCAgICAgICAgVHJhbnNsYXRlIHZhbHVlXG4gICAgICogQHBhcmFtICB7aW50fSAgICAgeSAgICAgICAgVHJhbnNsYXRlIHZhbHVlXG4gICAgICogQHBhcmFtICB7aW50fSAgICAgeiAgICAgICAgVHJhbnNsYXRlIHZhbHVlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0cmFuc2Zvcm0oZWxlbWVudCwgeCwgeSwgZGVsYXkpIHtcbiAgICAgICAgLy8gRGVmYXVsdHNcbiAgICAgICAgeCA9IHBhcnNlSW50KHgqMTAwMDApLzEwMDAwIHx8IDA7XG4gICAgICAgIHkgPSBwYXJzZUludCh5KjEwMDAwKS8xMDAwMCB8fCAwO1xuXG4gICAgICAgIGlmKCFkZWxheSkge1xuICAgICAgICAgICAgLy8gVHJhbnNsYXRlIGFuZCBzdG9yZSB0aGUgcG9zaXRpb25uaW5nIGFzIGBkYXRhYFxuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gYG1hdHJpeCgxLDAsMCwxLCR7eH0sJHt5fSlgXG5cbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5Nb3pUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5PVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zZm9ybScsYHtcInhcIjogJHtwYXJzZUludCh4KX0sXCJ5XCI6ICR7cGFyc2VJbnQoeSl9fWApXG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gdGhpcy5nZXRUcmFuc2xhdGUoZWxlbWVudCk7XG4gICAgICAgICAgICBsZXQgbGVycFkgPSBsZXJwKHN0YXJ0LnksIHksIGRlbGF5KTtcbiAgICAgICAgICAgIGxldCBsZXJwWCA9IGxlcnAoc3RhcnQueCwgeCwgZGVsYXkpO1xuXG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgbWF0cml4KDEsMCwwLDEsJHtsZXJwWH0sJHtsZXJwWX0pYFxuXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuTW96VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuT1RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2Zvcm0nLGB7XCJ4XCI6ICR7cGFyc2VJbnQobGVycFgpfSxcInlcIjogJHtwYXJzZUludChsZXJwWSl9fWApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBnZXRUcmFuc2xhdGUoZWwpe1xuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSB7fVxuICAgICAgICBpZighd2luZG93LmdldENvbXB1dGVkU3R5bGUpIHJldHVybjtcblxuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gfHwgc3R5bGUud2Via2l0VHJhbnNmb3JtIHx8IHN0eWxlLm1velRyYW5zZm9ybTtcblxuICAgICAgICBsZXQgbWF0ID0gdHJhbnNmb3JtLm1hdGNoKC9ebWF0cml4M2RcXCgoLispXFwpJC8pO1xuICAgICAgICBpZihtYXQpIHJldHVybiBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVsxM10pO1xuICAgICAgICBtYXQgPSB0cmFuc2Zvcm0ubWF0Y2goL15tYXRyaXhcXCgoLispXFwpJC8pO1xuICAgICAgICB0cmFuc2xhdGUueCA9IG1hdCA/IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzRdKSA6IDA7XG4gICAgICAgIHRyYW5zbGF0ZS55ID0gbWF0ID8gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbNV0pIDogMDtcblxuICAgICAgICByZXR1cm4gdHJhbnNsYXRlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvb3AgdGhyb3VnaCBhbGwgcGFyYWxsYXgtYWJsZSBlbGVtZW50cyBhbmQgYXBwbHkgdHJhbnNmb3JtIG1ldGhvZChzKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGlzRm9yY2VkIERldGVybWluZXMgaWYgdGhpcyBpcyBhIGZvcmNlZCByZXF1ZXN0IChmcm9tIGEgbWFudWFsIGNhbGwgdG8gdXBkYXRlIG9yIGEgcmVzaXplKVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdHJhbnNmb3JtRWxlbWVudHMoaXNGb3JjZWQpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyYWxsYXhFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxCb3R0b20gPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGhpcy53aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxNaWRkbGUgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICsgdGhpcy53aW5kb3dNaWRkbGU7XG5cbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IHRoaXMucGFyYWxsYXhFbGVtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCByZW1vdmVJbmRleGVzID0gW107XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyRWwgPSB0aGlzLnBhcmFsbGF4RWxlbWVudHNbaV07XG5cbiAgICAgICAgICAgICAgICBsZXQgdHJhbnNmb3JtRGlzdGFuY2UgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIERlZmluZSBpZiB0aGUgZWxlbWVudCBpcyBpbiB2aWV3XG4gICAgICAgICAgICAgICAgbGV0IGluVmlldyA9ICgoc2Nyb2xsQm90dG9tICsgdGhpcy53aW5kb3dIZWlnaHQpID49IGN1ckVsLm9mZnNldCAmJiB0aGlzLmluc3RhbmNlLnNjcm9sbC55IDw9IGN1ckVsLmxpbWl0KTtcblxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRWxlbWVudChjdXJFbCwgaSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNGb3JjZWQgJiYgIWluVmlldyAmJiBjdXJFbC5zcGVlZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBEaWZmZXJlbnQgY2FsY3VsYXRpb25zIGlmIGl0IGlzIHRoZSBmaXJzdCBjYWxsIGFuZCB0aGUgaXRlbSBpcyBub3QgaW4gdGhlIHZpZXdcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGN1ckVsLnBvc2l0aW9uICE9PSAndG9wJykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYoY3VyRWwuJGVsZW1lbnQuYXR0cignZGF0YS1sb2cnKSkgY29uc29sZS5sb2coYChjdXJFbC5vZmZzZXQgKCR7Y3VyRWwub2Zmc2V0fSkgLSB0aGlzLndpbmRvd01pZGRsZSAoJHt0aGlzLndpbmRvd01pZGRsZX0pIC0gY3VyRWwubWlkZGxlICgke2N1ckVsLm1pZGRsZX0pKSAqIGN1ckVsLnNwZWVkICgke2N1ckVsLnNwZWVkfSlgKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKGN1ckVsLm9mZnNldCAtIHRoaXMud2luZG93TWlkZGxlIC0gY3VyRWwubWlkZGxlKSAqIGN1ckVsLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAwXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgZWxlbWVudCBpcyBpbiB2aWV3XG4gICAgICAgICAgICAgICAgaWYgKGluVmlldyAmJiBjdXJFbC5zcGVlZCkgeyAvL3x8IChpc0ZvcmNlZCAmJiAhaW5WaWV3ICYmIGN1ckVsLnNwZWVkKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGN1ckVsLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAqIC1jdXJFbC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHRoaXMuaW5zdGFuY2UubGltaXQgLSBzY3JvbGxCb3R0b20gKyB0aGlzLndpbmRvd0hlaWdodCkgKiBjdXJFbC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gKHNjcm9sbE1pZGRsZSAtIGN1ckVsLm1pZGRsZSkgKiAtY3VyRWwuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRyYW5zZm9ybSBob3Jpem9udGFsIE9SIHZlcnRpY2FsLiBEZWZhdWx0cyB0byB2ZXJ0aWNhbFxuICAgICAgICAgICAgICAgIGlmIChpc051bWVyaWModHJhbnNmb3JtRGlzdGFuY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIChjdXJFbC5ob3Jpem9udGFsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShjdXJFbC5lbGVtZW50LCB0cmFuc2Zvcm1EaXN0YW5jZSwwLCBjdXJFbC5kZWxheSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oY3VyRWwuZWxlbWVudCwgMCwgdHJhbnNmb3JtRGlzdGFuY2UsIGN1ckVsLmRlbGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgZWxlbWVudHMgYW5kIHJlY2FsY3VsYXRlIGFsbCB0aGUgcG9zaXRpb25zIG9uIHRoZSBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuICAgIHVwZGF0ZShvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcblxuICAgICAgICB0aGlzLmFkZFNlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cyh0cnVlKTtcbiAgICAgICAgdGhpcy5yZWluaXRTY3JvbGxCYXIoKTtcblxuICAgIH1cblxuICAgIHByZWxvYWRJbWFnZXMoKSB7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJykpXG5cbiAgICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzLnNwbGljZShpbWFnZXMuaW5kZXhPZihpbWFnZSksIDEpXG4gICAgICAgICAgICAgICAgaW1hZ2VzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLnVwZGF0ZSgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW1nLnNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95XG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgICAgICAkaHRtbC5yZW1vdmVDbGFzcygnaGFzLXNtb290aC1zY3JvbGwnKTtcbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnNjcm9sbGJhcldyYXBwZXIucmVtb3ZlKCk7XG5cbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpO1xuXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgdmFyIHRpbWVvdXQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xufVxuIiwiY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG5cbmNvbnN0ICRkb2N1bWVudCAgICA9ICQoZG9jdW1lbnQpO1xuY29uc3QgJHdpbmRvdyAgICAgID0gJCh3aW5kb3cpO1xuY29uc3QgJGh0bWwgICAgICAgID0gJChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLnJlbW92ZUNsYXNzKCdoYXMtbm8tanMnKS5hZGRDbGFzcygnaGFzLWpzJyk7XG5jb25zdCAkYm9keSAgICAgICAgPSAkKGRvY3VtZW50LmJvZHkpO1xuY29uc3QgaHRtbCAgICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2h0bWwnKVswXTtcbmNvbnN0IGJvZHkgICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG5cbmNvbnN0IGlzRGVidWcgICAgICA9ICEhJGh0bWwuZGF0YSgnZGVidWcnKTtcblxuZXhwb3J0IHsgREFUQV9BUElfS0VZLCAkZG9jdW1lbnQsICR3aW5kb3csICRodG1sLCAkYm9keSwgaHRtbCwgaXNEZWJ1ZyB9O1xuIiwiLyoqXG4gKiBAc2VlICBodHRwczovL2dpdGh1Yi5jb20vcmFjdGl2ZWpzL3JhY3RpdmUvYmxvYi9kZXYvc3JjL3V0aWxzL2h0bWwuanNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyKSB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgICAgICAucmVwbGFjZSgvPC9nLCAnJmx0OycpXG4gICAgICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbi8qKlxuICogUHJlcGFyZSBIVE1MIGNvbnRlbnQgdGhhdCBjb250YWlucyBtdXN0YWNoZSBjaGFyYWN0ZXJzIGZvciB1c2Ugd2l0aCBSYWN0aXZlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5lc2NhcGVIdG1sKHN0cikge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgICAgICAucmVwbGFjZSgvJmd0Oy9nLCAnPicpXG4gICAgICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xufVxuXG4vKipcbiAqIEdldCBlbGVtZW50IGRhdGEgYXR0cmlidXRlc1xuICogQHBhcmFtICAge0RPTUVsZW1lbnR9ICBub2RlXG4gKiBAcmV0dXJuICB7QXJyYXl9ICAgICAgIGRhdGFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVEYXRhKG5vZGUpIHtcbiAgICAvLyBBbGwgYXR0cmlidXRlc1xuICAgIHZhciBhdHRyaWJ1dGVzID0gbm9kZS5hdHRyaWJ1dGVzO1xuXG4gICAgLy8gUmVnZXggUGF0dGVyblxuICAgIHZhciBwYXR0ZXJuID0gL15kYXRhXFwtKC4rKSQvO1xuXG4gICAgLy8gT3V0cHV0XG4gICAgdmFyIGRhdGEgPSB7fTtcblxuICAgIGZvciAobGV0IGkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZXNbaV0pIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXR0cmlidXRlcyBuYW1lIChleDogZGF0YS1tb2R1bGUpXG4gICAgICAgIGxldCBuYW1lID0gYXR0cmlidXRlc1tpXS5uYW1lO1xuXG4gICAgICAgIC8vIFRoaXMgaGFwcGVucy5cbiAgICAgICAgaWYgKCFuYW1lKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtYXRjaCA9IG5hbWUubWF0Y2gocGF0dGVybik7XG4gICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhpcyB0aHJvd3MgYW4gZXJyb3IsIHlvdSBoYXZlIHNvbWVcbiAgICAgICAgLy8gc2VyaW91cyBwcm9ibGVtcyBpbiB5b3VyIEhUTUwuXG4gICAgICAgIGRhdGFbbWF0Y2hbMV1dID0gbm9kZS5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRzKGVsZW0pIHtcbiAgICAvLyBTZXQgdXAgYSBwYXJlbnQgYXJyYXlcbiAgICBsZXQgcGFyZW50cyA9IFtdO1xuXG4gICAgLy8gUHVzaCBlYWNoIHBhcmVudCBlbGVtZW50IHRvIHRoZSBhcnJheVxuICAgIGZvciAoIDsgZWxlbSAmJiBlbGVtICE9PSBkb2N1bWVudDsgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKGVsZW0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiBvdXIgcGFyZW50IGFycmF5XG4gICAgcmV0dXJuIHBhcmVudHM7XG59XG5cbi8vIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbS9ob3ctdG8tZ2V0LXRoZS1jbG9zZXN0LXBhcmVudC1lbGVtZW50LXdpdGgtYS1tYXRjaGluZy1zZWxlY3Rvci11c2luZy12YW5pbGxhLWphdmFzY3JpcHQvXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlDbG9zZXN0UGFyZW50KGVsZW0sIHNlbGVjdG9yKSB7XG5cbiAgICAvLyBFbGVtZW50Lm1hdGNoZXMoKSBwb2x5ZmlsbFxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID1cbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICBmdW5jdGlvbihzKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSAodGhpcy5kb2N1bWVudCB8fCB0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocyksXG4gICAgICAgICAgICAgICAgICAgIGkgPSBtYXRjaGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoLS1pID49IDAgJiYgbWF0Y2hlcy5pdGVtKGkpICE9PSB0aGlzKSB7fVxuICAgICAgICAgICAgICAgIHJldHVybiBpID4gLTE7XG4gICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgY2xvc2VzdCBtYXRjaGluZyBlbGVtZW50XG4gICAgZm9yICggOyBlbGVtICYmIGVsZW0gIT09IGRvY3VtZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlICkge1xuICAgICAgICBpZiAoIGVsZW0ubWF0Y2hlcyggc2VsZWN0b3IgKSApIHJldHVybiBlbGVtO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcblxufTtcbiIsInZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgYXJyYXlMaWtlUGF0dGVybiA9IC9eXFxbb2JqZWN0ICg/OkFycmF5fEZpbGVMaXN0KVxcXSQvO1xuXG4vLyB0aGFua3MsIGh0dHA6Ly9wZXJmZWN0aW9ua2lsbHMuY29tL2luc3RhbmNlb2YtY29uc2lkZXJlZC1oYXJtZnVsLW9yLWhvdy10by13cml0ZS1hLXJvYnVzdC1pc2FycmF5L1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkgKCB0aGluZyApIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCggdGhpbmcgKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlMaWtlICggb2JqICkge1xuICAgIHJldHVybiBhcnJheUxpa2VQYXR0ZXJuLnRlc3QoIHRvU3RyaW5nLmNhbGwoIG9iaiApICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VxdWFsICggYSwgYiApIHtcbiAgICBpZiAoIGEgPT09IG51bGwgJiYgYiA9PT0gbnVsbCApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCB0eXBlb2YgYSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGIgPT09ICdvYmplY3QnICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIGEgPT09IGI7XG59XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTgwODIvdmFsaWRhdGUtbnVtYmVycy1pbi1qYXZhc2NyaXB0LWlzbnVtZXJpY1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtZXJpYyAoIHRoaW5nICkge1xuICAgIHJldHVybiAhaXNOYU4oIHBhcnNlRmxvYXQoIHRoaW5nICkgKSAmJiBpc0Zpbml0ZSggdGhpbmcgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0ICggdGhpbmcgKSB7XG4gICAgcmV0dXJuICggdGhpbmcgJiYgdG9TdHJpbmcuY2FsbCggdGhpbmcgKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oIHRoaW5nICkge1xuICAgIHZhciBnZXRUeXBlID0ge307XG4gICAgcmV0dXJuIHRoaW5nICYmIGdldFR5cGUudG9TdHJpbmcuY2FsbCh0aGluZykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbGVycChzdGFydCwgZW5kLCBhbXQpe1xuICAgIHJldHVybiAoMSAtIGFtdCkgKiBzdGFydCArIGFtdCAqIGVuZFxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZighb2JqZWN0KSByZXR1cm4gY29uc29sZS53YXJuKCdiaW5kQWxsIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudC4nKTtcblxuICAgIHZhciBmdW5jdGlvbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgaWYgKGZ1bmN0aW9ucy5sZW5ndGggPT09IDApIHtcblxuICAgICAgICBmb3IgKHZhciBtZXRob2QgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICBpZihoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgbWV0aG9kKSkge1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBvYmplY3RbbWV0aG9kXSA9PSAnZnVuY3Rpb24nICYmIHRvU3RyaW5nLmNhbGwob2JqZWN0W21ldGhvZF0pID09IFwiW29iamVjdCBGdW5jdGlvbl1cIikge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbnMucHVzaChtZXRob2QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmdW5jdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGYgPSBmdW5jdGlvbnNbaV07XG4gICAgICAgIG9iamVjdFtmXSA9IGJpbmQob2JqZWN0W2ZdLCBvYmplY3QpO1xuICAgIH1cbn07XG5cbi8qXG4gICAgRmFzdGVyIGJpbmQgd2l0aG91dCBzcGVjaWZpYy1jYXNlIGNoZWNraW5nLiAoc2VlIGh0dHBzOi8vY29kZXJ3YWxsLmNvbS9wL29pM2ozdykuXG4gICAgYmluZEFsbCBpcyBvbmx5IG5lZWRlZCBmb3IgZXZlbnRzIGJpbmRpbmcgc28gbm8gbmVlZCB0byBtYWtlIHNsb3cgZml4ZXMgZm9yIGNvbnN0cnVjdG9yXG4gICAgb3IgcGFydGlhbCBhcHBsaWNhdGlvbi5cbiovXG5mdW5jdGlvbiBiaW5kKGZ1bmMsIGNvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XG4gIH07XG59IiwiLy8gR2VuZXJhdGVkIGJ5IENvZmZlZVNjcmlwdCAxLjkuMlxuKGZ1bmN0aW9uKCkge1xuICB2YXIgcm9vdDtcblxuICByb290ID0gdHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIgJiYgZXhwb3J0cyAhPT0gbnVsbCA/IGV4cG9ydHMgOiB0aGlzO1xuXG4gIHJvb3QuTGV0aGFyZ3kgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gTGV0aGFyZ3koc3RhYmlsaXR5LCBzZW5zaXRpdml0eSwgdG9sZXJhbmNlLCBkZWxheSkge1xuICAgICAgdGhpcy5zdGFiaWxpdHkgPSBzdGFiaWxpdHkgIT0gbnVsbCA/IE1hdGguYWJzKHN0YWJpbGl0eSkgOiA4O1xuICAgICAgdGhpcy5zZW5zaXRpdml0eSA9IHNlbnNpdGl2aXR5ICE9IG51bGwgPyAxICsgTWF0aC5hYnMoc2Vuc2l0aXZpdHkpIDogMTAwO1xuICAgICAgdGhpcy50b2xlcmFuY2UgPSB0b2xlcmFuY2UgIT0gbnVsbCA/IDEgKyBNYXRoLmFicyh0b2xlcmFuY2UpIDogMS4xO1xuICAgICAgdGhpcy5kZWxheSA9IGRlbGF5ICE9IG51bGwgPyBkZWxheSA6IDE1MDtcbiAgICAgIHRoaXMubGFzdFVwRGVsdGFzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmxhc3REb3duRGVsdGFzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBsYXN0RGVsdGE7XG4gICAgICBlID0gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG4gICAgICBpZiAoZS53aGVlbERlbHRhICE9IG51bGwpIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS53aGVlbERlbHRhO1xuICAgICAgfSBlbHNlIGlmIChlLmRlbHRhWSAhPSBudWxsKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUuZGVsdGFZICogLTQwO1xuICAgICAgfSBlbHNlIGlmICgoZS5kZXRhaWwgIT0gbnVsbCkgfHwgZS5kZXRhaWwgPT09IDApIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS5kZXRhaWwgKiAtNDA7XG4gICAgICB9XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcC5wdXNoKERhdGUubm93KCkpO1xuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAuc2hpZnQoKTtcbiAgICAgIGlmIChsYXN0RGVsdGEgPiAwKSB7XG4gICAgICAgIHRoaXMubGFzdFVwRGVsdGFzLnB1c2gobGFzdERlbHRhKTtcbiAgICAgICAgdGhpcy5sYXN0VXBEZWx0YXMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmVydGlhKDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcy5wdXNoKGxhc3REZWx0YSk7XG4gICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMuc2hpZnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNJbmVydGlhKC0xKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLmlzSW5lcnRpYSA9IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xuICAgICAgdmFyIGxhc3REZWx0YXMsIGxhc3REZWx0YXNOZXcsIGxhc3REZWx0YXNPbGQsIG5ld0F2ZXJhZ2UsIG5ld1N1bSwgb2xkQXZlcmFnZSwgb2xkU3VtO1xuICAgICAgbGFzdERlbHRhcyA9IGRpcmVjdGlvbiA9PT0gLTEgPyB0aGlzLmxhc3REb3duRGVsdGFzIDogdGhpcy5sYXN0VXBEZWx0YXM7XG4gICAgICBpZiAobGFzdERlbHRhc1swXSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGVsdGFzVGltZXN0YW1wWyh0aGlzLnN0YWJpbGl0eSAqIDIpIC0gMl0gKyB0aGlzLmRlbGF5ID4gRGF0ZS5ub3coKSAmJiBsYXN0RGVsdGFzWzBdID09PSBsYXN0RGVsdGFzWyh0aGlzLnN0YWJpbGl0eSAqIDIpIC0gMV0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGFzdERlbHRhc09sZCA9IGxhc3REZWx0YXMuc2xpY2UoMCwgdGhpcy5zdGFiaWxpdHkpO1xuICAgICAgbGFzdERlbHRhc05ldyA9IGxhc3REZWx0YXMuc2xpY2UodGhpcy5zdGFiaWxpdHksIHRoaXMuc3RhYmlsaXR5ICogMik7XG4gICAgICBvbGRTdW0gPSBsYXN0RGVsdGFzT2xkLnJlZHVjZShmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgIHJldHVybiB0ICsgcztcbiAgICAgIH0pO1xuICAgICAgbmV3U3VtID0gbGFzdERlbHRhc05ldy5yZWR1Y2UoZnVuY3Rpb24odCwgcykge1xuICAgICAgICByZXR1cm4gdCArIHM7XG4gICAgICB9KTtcbiAgICAgIG9sZEF2ZXJhZ2UgPSBvbGRTdW0gLyBsYXN0RGVsdGFzT2xkLmxlbmd0aDtcbiAgICAgIG5ld0F2ZXJhZ2UgPSBuZXdTdW0gLyBsYXN0RGVsdGFzTmV3Lmxlbmd0aDtcbiAgICAgIGlmIChNYXRoLmFicyhvbGRBdmVyYWdlKSA8IE1hdGguYWJzKG5ld0F2ZXJhZ2UgKiB0aGlzLnRvbGVyYW5jZSkgJiYgKHRoaXMuc2Vuc2l0aXZpdHkgPCBNYXRoLmFicyhuZXdBdmVyYWdlKSkpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLnNob3dMYXN0VXBEZWx0YXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3RVcERlbHRhcztcbiAgICB9O1xuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLnNob3dMYXN0RG93bkRlbHRhcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdERvd25EZWx0YXM7XG4gICAgfTtcblxuICAgIHJldHVybiBMZXRoYXJneTtcblxuICB9KSgpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiIsImZ1bmN0aW9uIEUgKCkge1xuICAvLyBLZWVwIHRoaXMgZW1wdHkgc28gaXQncyBlYXNpZXIgdG8gaW5oZXJpdCBmcm9tXG4gIC8vICh2aWEgaHR0cHM6Ly9naXRodWIuY29tL2xpcHNtYWNrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9pc3N1ZXMvMylcbn1cblxuRS5wcm90b3R5cGUgPSB7XG4gIG9uOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG5cbiAgICAoZVtuYW1lXSB8fCAoZVtuYW1lXSA9IFtdKSkucHVzaCh7XG4gICAgICBmbjogY2FsbGJhY2ssXG4gICAgICBjdHg6IGN0eFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gbGlzdGVuZXIgKCkge1xuICAgICAgc2VsZi5vZmYobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lci5fID0gY2FsbGJhY2tcbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBsaXN0ZW5lciwgY3R4KTtcbiAgfSxcblxuICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBkYXRhID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBldnRBcnIgPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVtuYW1lXSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbiA9IGV2dEFyci5sZW5ndGg7XG5cbiAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgZXZ0QXJyW2ldLmZuLmFwcGx5KGV2dEFycltpXS5jdHgsIGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICB2YXIgZXZ0cyA9IGVbbmFtZV07XG4gICAgdmFyIGxpdmVFdmVudHMgPSBbXTtcblxuICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXZ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZXZ0c1tpXS5mbiAhPT0gY2FsbGJhY2sgJiYgZXZ0c1tpXS5mbi5fICE9PSBjYWxsYmFjaylcbiAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGZyb20gcXVldWUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgIC8vIFN1Z2dlc3RlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbGF6ZFxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcblxuICAgIChsaXZlRXZlbnRzLmxlbmd0aClcbiAgICAgID8gZVtuYW1lXSA9IGxpdmVFdmVudHNcbiAgICAgIDogZGVsZXRlIGVbbmFtZV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNvdXJjZSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHNvdXJjZSkpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ3RpbnktZW1pdHRlcicpO1xudmFyIExldGhhcmd5ID0gcmVxdWlyZSgnbGV0aGFyZ3knKS5MZXRoYXJneTtcbnZhciBzdXBwb3J0ID0gcmVxdWlyZSgnLi9zdXBwb3J0Jyk7XG52YXIgY2xvbmUgPSByZXF1aXJlKCcuL2Nsb25lJyk7XG52YXIgYmluZEFsbCA9IHJlcXVpcmUoJ2JpbmRhbGwtc3RhbmRhbG9uZScpO1xudmFyIEVWVF9JRCA9ICd2aXJ0dWFsc2Nyb2xsJztcblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsU2Nyb2xsO1xuXG52YXIga2V5Q29kZXMgPSB7XG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbiAgICBTUEFDRTogMzJcbn07XG5cbmZ1bmN0aW9uIFZpcnR1YWxTY3JvbGwob3B0aW9ucykge1xuICAgIGJpbmRBbGwodGhpcywgJ19vbldoZWVsJywgJ19vbk1vdXNlV2hlZWwnLCAnX29uVG91Y2hTdGFydCcsICdfb25Ub3VjaE1vdmUnLCAnX29uS2V5RG93bicpO1xuXG4gICAgdGhpcy5lbCA9IHdpbmRvdztcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmVsKSB7XG4gICAgICAgIHRoaXMuZWwgPSBvcHRpb25zLmVsO1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5lbDtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gb2JqZWN0QXNzaWduKHtcbiAgICAgICAgbW91c2VNdWx0aXBsaWVyOiAxLFxuICAgICAgICB0b3VjaE11bHRpcGxpZXI6IDIsXG4gICAgICAgIGZpcmVmb3hNdWx0aXBsaWVyOiAxNSxcbiAgICAgICAga2V5U3RlcDogMTIwLFxuICAgICAgICBwcmV2ZW50VG91Y2g6IGZhbHNlLFxuICAgICAgICB1bnByZXZlbnRUb3VjaENsYXNzOiAndnMtdG91Y2htb3ZlLWFsbG93ZWQnLFxuICAgICAgICBsaW1pdEluZXJ0aWE6IGZhbHNlLFxuICAgICAgICB1c2VLZXlib2FyZDogdHJ1ZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEpIHRoaXMuX2xldGhhcmd5ID0gbmV3IExldGhhcmd5KCk7XG5cbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcbiAgICB0aGlzLl9ldmVudCA9IHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgeDogMCxcbiAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICBkZWx0YVk6IDBcbiAgICB9O1xuICAgIHRoaXMudG91Y2hTdGFydFggPSBudWxsO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSBudWxsO1xuICAgIHRoaXMuYm9keVRvdWNoQWN0aW9uID0gbnVsbDtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucGFzc2l2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJPcHRpb25zID0ge3Bhc3NpdmU6IHRoaXMub3B0aW9ucy5wYXNzaXZlfTtcbiAgICB9XG59XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9ub3RpZnkgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC54ICs9IGV2dC5kZWx0YVg7XG4gICAgZXZ0LnkgKz0gZXZ0LmRlbHRhWTtcblxuICAgdGhpcy5fZW1pdHRlci5lbWl0KEVWVF9JRCwge1xuICAgICAgICB4OiBldnQueCxcbiAgICAgICAgeTogZXZ0LnksXG4gICAgICAgIGRlbHRhWDogZXZ0LmRlbHRhWCxcbiAgICAgICAgZGVsdGFZOiBldnQuZGVsdGFZLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBlXG4gICB9KTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbldoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICh0aGlzLl9sZXRoYXJneSAmJiB0aGlzLl9sZXRoYXJneS5jaGVjayhlKSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICAvLyBJbiBDaHJvbWUgYW5kIGluIEZpcmVmb3ggKGF0IGxlYXN0IHRoZSBuZXcgb25lKVxuICAgIGV2dC5kZWx0YVggPSBlLndoZWVsRGVsdGFYIHx8IGUuZGVsdGFYICogLTE7XG4gICAgZXZ0LmRlbHRhWSA9IGUud2hlZWxEZWx0YVkgfHwgZS5kZWx0YVkgKiAtMTtcblxuICAgIC8vIGZvciBvdXIgcHVycG9zZSBkZWx0YW1vZGUgPSAxIG1lYW5zIHVzZXIgaXMgb24gYSB3aGVlbCBtb3VzZSwgbm90IHRvdWNoIHBhZFxuICAgIC8vIHJlYWwgbWVhbmluZzogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1doZWVsRXZlbnQjRGVsdGFfbW9kZXNcbiAgICBpZihzdXBwb3J0LmlzRmlyZWZveCAmJiBlLmRlbHRhTW9kZSA9PSAxKSB7XG4gICAgICAgIGV2dC5kZWx0YVggKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICAgICAgZXZ0LmRlbHRhWSAqPSBvcHRpb25zLmZpcmVmb3hNdWx0aXBsaWVyO1xuICAgIH1cblxuICAgIGV2dC5kZWx0YVggKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG4gICAgZXZ0LmRlbHRhWSAqPSBvcHRpb25zLm1vdXNlTXVsdGlwbGllcjtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbk1vdXNlV2hlZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICAvLyBJbiBTYWZhcmksIElFIGFuZCBpbiBDaHJvbWUgaWYgJ3doZWVsJyBpc24ndCBkZWZpbmVkXG4gICAgZXZ0LmRlbHRhWCA9IChlLndoZWVsRGVsdGFYKSA/IGUud2hlZWxEZWx0YVggOiAwO1xuICAgIGV2dC5kZWx0YVkgPSAoZS53aGVlbERlbHRhWSkgPyBlLndoZWVsRGVsdGFZIDogZS53aGVlbERlbHRhO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdCA9IChlLnRhcmdldFRvdWNoZXMpID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gdC5wYWdlWDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gdC5wYWdlWTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZihvcHRpb25zLnByZXZlbnRUb3VjaFxuICAgICAgICAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKG9wdGlvbnMudW5wcmV2ZW50VG91Y2hDbGFzcykpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIHZhciB0ID0gKGUudGFyZ2V0VG91Y2hlcykgPyBlLnRhcmdldFRvdWNoZXNbMF0gOiBlO1xuXG4gICAgZXZ0LmRlbHRhWCA9ICh0LnBhZ2VYIC0gdGhpcy50b3VjaFN0YXJ0WCkgKiBvcHRpb25zLnRvdWNoTXVsdGlwbGllcjtcbiAgICBldnQuZGVsdGFZID0gKHQucGFnZVkgLSB0aGlzLnRvdWNoU3RhcnRZKSAqIG9wdGlvbnMudG91Y2hNdWx0aXBsaWVyO1xuXG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHQucGFnZVg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHQucGFnZVk7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25LZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQuZGVsdGFYID0gZXZ0LmRlbHRhWSA9IDA7XG4gICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDQwXG5cbiAgICBzd2l0Y2goZS5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuTEVGVDpcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5VUDpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSB0aGlzLm9wdGlvbnMua2V5U3RlcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Uga2V5Q29kZXMuUklHSFQ6XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuRE9XTjpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSAtIHRoaXMub3B0aW9ucy5rZXlTdGVwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuU1BBQ0UgJiYgZS5zaGlmdEtleTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5TUEFDRTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSAtIHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc3VwcG9ydC5oYXNXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25XaGVlbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcblxuICAgIGlmKHN1cHBvcnQuaGFzVG91Y2gpIHtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICB0aGlzLmJvZHlUb3VjaEFjdGlvbiA9IGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckRvd24nLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlck1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNLZXlEb3duICYmIHRoaXMub3B0aW9ucy51c2VLZXlib2FyZCkgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bik7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fdW5iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc3VwcG9ydC5oYXNXaGVlbEV2ZW50KSB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25XaGVlbCk7XG4gICAgaWYoc3VwcG9ydC5oYXNNb3VzZVdoZWVsRXZlbnQpIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuX29uTW91c2VXaGVlbCk7XG5cbiAgICBpZihzdXBwb3J0Lmhhc1RvdWNoKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuX29uVG91Y2hTdGFydCk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzUG9pbnRlciAmJiBzdXBwb3J0Lmhhc1RvdWNoV2luKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbiA9IHRoaXMuYm9keVRvdWNoQWN0aW9uO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckRvd24nLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlck1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNLZXlEb3duICYmIHRoaXMub3B0aW9ucy51c2VLZXlib2FyZCkgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bik7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGNiLCBjdHgpIHtcbiAgdGhpcy5fZW1pdHRlci5vbihFVlRfSUQsIGNiLCBjdHgpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gIGlmIChldmVudHMgJiYgZXZlbnRzW0VWVF9JRF0gJiYgZXZlbnRzW0VWVF9JRF0ubGVuZ3RoID09PSAxKSB0aGlzLl9iaW5kKCk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gIHRoaXMuX2VtaXR0ZXIub2ZmKEVWVF9JRCwgY2IsIGN0eCk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2VtaXR0ZXIuZTtcbiAgaWYgKCFldmVudHNbRVZUX0lEXSB8fCBldmVudHNbRVZUX0lEXS5sZW5ndGggPD0gMCkgdGhpcy5fdW5iaW5kKCk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQueCA9IDA7XG4gICAgZXZ0LnkgPSAwO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2VtaXR0ZXIub2ZmKCk7XG4gICAgdGhpcy5fdW5iaW5kKCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiBnZXRTdXBwb3J0KCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGhhc1doZWVsRXZlbnQ6ICdvbndoZWVsJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzTW91c2VXaGVlbEV2ZW50OiAnb25tb3VzZXdoZWVsJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzVG91Y2g6ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNUb3VjaFdpbjogbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgJiYgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAxLFxuICAgICAgICBoYXNQb2ludGVyOiAhIXdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCxcbiAgICAgICAgaGFzS2V5RG93bjogJ29ua2V5ZG93bicgaW4gZG9jdW1lbnQsXG4gICAgICAgIGlzRmlyZWZveDogbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMVxuICAgIH07XG59KSgpO1xuIl19
