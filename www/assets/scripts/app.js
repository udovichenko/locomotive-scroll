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
  isScrollingClassName: 'is-scrolling',
  isDraggingClassName: 'is-dragging'
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

/**`.
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
    _this.isDraggingClassName = options.isDraggingClassName || _Scroll2.DEFAULTS.isDraggingClassName;
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

      _environment.html.classList.remove(this.isScrollingClassName);

      _environment.html.classList.add(this.isDraggingClassName);
    }
  }, {
    key: "releaseScrollBar",
    value: function releaseScrollBar(e) {
      this.isDraggingScrollBar = false;

      _environment.html.classList.add(this.isScrollingClassName);

      _environment.html.classList.remove(this.isDraggingClassName);
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
        limitInertia: false
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

    if(support.hasKeyDown) document.addEventListener('keydown', this._onKeyDown);
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

    if(support.hasKeyDown) document.removeEventListener('keydown', this._onKeyDown);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvU2Nyb2xsLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL1Ntb290aFNjcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbE1hbmFnZXIuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9TbW9vdGhTY3JvbGwuanMiLCJhc3NldHMvc2NyaXB0cy91dGlscy9kZWJvdW5jZS5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2Vudmlyb25tZW50LmpzIiwiYXNzZXRzL3NjcmlwdHMvdXRpbHMvaHRtbC5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2lzLmpzIiwiYXNzZXRzL3NjcmlwdHMvdXRpbHMvbWF0aHMuanMiLCJub2RlX21vZHVsZXMvYmluZGFsbC1zdGFuZGFsb25lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xldGhhcmd5L2xldGhhcmd5LmpzIiwibm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL3N1cHBvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0lBOzs7O0FBSkE7QUFDQTtBQUNBOztBQUNBO0FBR0EsQ0FBQyxZQUFXO0FBRVI7QUFDQSxNQUFNLFlBQVksR0FBRyxJQUFJLHlCQUFKLENBQWtCO0FBQ25DLElBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxZ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QUFHLEdBQWpDO0FBQ0g7OztBQ0ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBcHBcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgU2Nyb2xsTWFuYWdlciBmcm9tICcuL3Njcm9sbC92ZW5kb3JzL1Njcm9sbE1hbmFnZXInO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBJbml0IExvY29tb3RpdmUgU2Nyb2xsXG4gICAgY29uc3Qgc21vb3RoU2Nyb2xsID0gbmV3IFNjcm9sbE1hbmFnZXIoe1xuICAgICAgICBjb250YWluZXI6ICQoJyNqcy1zY3JvbGwnKSxcbiAgICAgICAgc2VjdGlvbnM6ICcuanMtc2VjdGlvbicsXG4gICAgICAgIHNlbGVjdG9yOiAnLmpzLWFuaW1hdGUnLFxuICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgIHNtb290aE1vYmlsZTogZmFsc2UsXG4gICAgICAgIG1vYmlsZUNvbnRhaW5lcjogJChkb2N1bWVudC5ib2R5KSxcbiAgICAgICAgZ2V0RGlyZWN0aW9uOiB0cnVlLFxuICAgICAgICBnZXRTcGVlZDogdHJ1ZSxcbiAgICAgICAgaW5lcnRpYTogMSxcbiAgICAgICAgc2Nyb2xsQmFyQ2xhc3NOYW1lOiAnby1zY3JvbGxiYXInLFxuICAgICAgICBpc1Njcm9sbGluZ0NsYXNzTmFtZTogJ2lzLXNjcm9sbGluZycsXG4gICAgICAgIG9uU2Nyb2xsOiAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5zY3JvbGwueSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoKTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHRlbmRlZCBMb2NvbW90aXZlIFNjcm9sbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCBTY3JvbGwsIHsgRVZFTlRfS0VZIGFzIFZFTkRPUl9FVkVOVF9LRVksIEVWRU5UIGFzIFZFTkRPUl9FVkVOVFMsIERFRkFVTFRTIGFzIFZFTkRPUl9ERUZBVUxUUyB9IGZyb20gJy4vdmVuZG9ycy9TY3JvbGwnXG5cbi8qKlxuICogVU5DT01NRU5UIE9OTFkgVEhFIExJTkVTIFlPVSBORUVEXG4gKi9cbi8vIGltcG9ydCB7ICR3aW5kb3csICRkb2N1bWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2Vudmlyb25tZW50Jztcbi8vIGltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZSc7XG4vLyBpbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuLi8uLi91dGlscy9pcyc7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9LRVkgPSBWRU5ET1JfRVZFTlRfS0VZO1xuXG5leHBvcnQgY29uc3QgRVZFTlQgPSBPYmplY3QuYXNzaWduKFZFTkRPUl9FVkVOVFMsIHtcbiAgICAvLyBURVNUOiBgdGVzdC4ke0VWRU5UX0tFWX1gXG59KTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRTID0gT2JqZWN0LmFzc2lnbihWRU5ET1JfREVGQVVMVFMsIHsgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEV4dGVuZGVkIExvY29tb3RpdmUgU21vb3RoIFNjcm9sbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCBTbW9vdGhTY3JvbGwgZnJvbSAnLi92ZW5kb3JzL1Ntb290aFNjcm9sbCdcblxuLyoqXG4gKiBVTkNPTU1FTlQgT05MWSBUSEUgTElORVMgWU9VIE5FRURcbiAqL1xuLy8gaW1wb3J0IHsgJHdpbmRvdywgJGRvY3VtZW50LCAkaHRtbCB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50Jztcbi8vIGltcG9ydCBTY3JvbGwsIHsgREVGQVVMVFMsIEVWRU5UIH0gZnJvbSAnLi9TY3JvbGwnO1xuXG4vLyBpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vdXRpbHMvZGVib3VuY2UnO1xuLy8gaW1wb3J0IFNjcm9sbGJhciBmcm9tICdzbW9vdGgtc2Nyb2xsYmFyJztcbi8vIGltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4uL3V0aWxzL2lzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBTbW9vdGhTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucylcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jb21vdGl2ZSBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkd2luZG93LCAkZG9jdW1lbnQsICRib2R5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfS0VZID0gYExvY29tb3RpdmVTY3JvbGxgO1xuXG5leHBvcnQgY29uc3QgRVZFTlQgPSB7XG4gICAgQ0xJQ0s6IGBjbGljay4ke0VWRU5UX0tFWX1gLFxuICAgIElTUkVBRFk6IGBpc1JlYWR5LiR7RVZFTlRfS0VZfWAsXG4gICAgUkVCVUlMRDogYHJlYnVpbGQuJHtFVkVOVF9LRVl9YCxcbiAgICBSRU5ERVI6IGByZW5kZXIuJHtFVkVOVF9LRVl9YCxcbiAgICBSRVNJWkU6IGByZXNpemUuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTEw6IGBzY3JvbGwuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTExUTzogYHNjcm9sbFRvLiR7RVZFTlRfS0VZfWAsXG4gICAgVVBEQVRFOiBgdXBkYXRlLiR7RVZFTlRfS0VZfWBcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IHtcbiAgICBjb250YWluZXI6ICRib2R5LFxuICAgIHNlY3Rpb25zOiAnLmpzLXNlY3Rpb24nLFxuICAgIG1vYmlsZUNvbnRhaW5lcjogJGJvZHksXG4gICAgb25TY3JvbGw6IGZ1bmN0aW9uKCl7fSxcbiAgICBzZWxlY3RvcjogJy5qcy1hbmltYXRlJyxcbiAgICBzbW9vdGg6IGZhbHNlLFxuICAgIHNtb290aE1vYmlsZTogZmFsc2UsXG4gICAgcmV2ZXJzZWQ6IGZhbHNlLFxuICAgIGdldERpcmVjdGlvbjogZmFsc2UsXG4gICAgZ2V0U3BlZWQ6IGZhbHNlLFxuICAgIHNjcm9sbEJhckNsYXNzTmFtZTogJ28tc2Nyb2xsYmFyJyxcbiAgICBpc1Njcm9sbGluZ0NsYXNzTmFtZTogJ2lzLXNjcm9sbGluZycsXG4gICAgaXNEcmFnZ2luZ0NsYXNzTmFtZTogJ2lzLWRyYWdnaW5nJ1xufTtcblxuLyoqXG4gKiBNYW5hZ2UgYW5pbWF0aW9uIG9mIGVsZW1lbnRzIG9uIHRoZSBwYWdlIGFjY29yZGluZyB0byBzY3JvbGwgcG9zaXRpb24uXG4gKlxuICogQHRvZG8gIE1hbmFnZSBzb21lIG9wdGlvbnMgKG5vcm1hbGx5IGZyb20gZGF0YSBhdHRyaWJ1dGVzKSB3aXRoIGNvbnN0cnVjdG9yIG9wdGlvbnMgKGV4Ljogc2V0IHJlcGVhdCBmb3IgYWxsKVxuICogQHRvZG8gIE1ldGhvZCB0byBnZXQgdGhlIGRpc3RhbmNlIChhcyBwZXJjZW50YWdlKSBvZiBhbiBlbGVtZW50IGluIHRoZSB2aWV3cG9ydFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lciA9IChvcHRpb25zLmNvbnRhaW5lcikgPyBvcHRpb25zLmNvbnRhaW5lciA6IERFRkFVTFRTLmNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IChvcHRpb25zLnNlbGVjdG9yKSA/IG9wdGlvbnMuc2VsZWN0b3IgOiBERUZBVUxUUy5zZWxlY3RvcjtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IHtcbiAgICAgICAgICAgIG9uU2Nyb2xsOiB0eXBlb2Ygb3B0aW9ucy5vblNjcm9sbCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMub25TY3JvbGwgOiBERUZBVUxUUy5vblNjcm9sbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSB7XG4gICAgICAgICAgICBzY3JvbGw6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xuICAgICAgICB0aGlzLndpbmRvd01pZGRsZSA9IHRoaXMud2luZG93SGVpZ2h0IC8gMjtcblxuICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMgPSBbXTtcblxuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHNjcm9sbGluZyBhbmltYXRpb25zXG4gICAgICovXG4gICAgaW5pdCgpIHtcblxuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICAvLyBPbiBzY3JvbGxcbiAgICAgICAgJGRvY3VtZW50Lm9uKEVWRU5ULlNDUk9MTCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVidWlsZCBldmVudFxuICAgICAgICAkZG9jdW1lbnQub24oRVZFTlQuUkVCVUlMRCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGV2ZW50XG4gICAgICAgICRkb2N1bWVudC5vbihFVkVOVC5VUERBVEUsIChldmVudCwgb3B0aW9ucykgPT4gdGhpcy51cGRhdGUob3B0aW9ucykpO1xuXG4gICAgICAgIC8vIFJlbmRlciBldmVudFxuICAgICAgICAkZG9jdW1lbnQub24oRVZFTlQuUkVOREVSLCAoKSA9PiB0aGlzLnJlbmRlcigpKTtcblxuICAgICAgICAvLyBTY3JvbGx0byBidXR0b24gZXZlbnRcbiAgICAgICAgJGRvY3VtZW50Lm9uKEVWRU5ULkNMSUNLLCAnLmpzLXNjcm9sbHRvJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICBzb3VyY2VFbGVtOiBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldEVsZW06IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9mZnNldCcpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgICRkb2N1bWVudC5vbihFVkVOVC5TQ1JPTExUTywgKGV2ZW50KSA9PiB0aGlzLnNjcm9sbFRvKGV2ZW50Lm9wdGlvbnMpKTtcblxuICAgICAgICAvLyBTZXR1cCBkb25lXG4gICAgICAgICRkb2N1bWVudC50cmlnZ2VySGFuZGxlcih7XG4gICAgICAgICAgICB0eXBlOiBFVkVOVC5JU1JFQURZXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlc2l6ZSBldmVudFxuICAgICAgICAkd2luZG93Lm9uKEVWRU5ULlJFU0laRSwgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICB9LCAyMCkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBhbGwgYW5pbWF0YWJsZSBlbGVtZW50cy5cbiAgICAgKiBDYWxsZWQgb24gcGFnZSBsb2FkIGFuZCBhbnkgc3Vic2VxdWVudCB1cGRhdGVzLlxuICAgICAqL1xuICAgIGFkZEVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMgPSBbXTtcblxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGxlbiA9IGVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpICsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYXJnZXQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50UG9zaXRpb24gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpO1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IChlbGVtZW50VGFyZ2V0ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudFRhcmdldCkubGVuZ3RoKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudFRhcmdldCkgOiBlbGVtZW50O1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRPZmZzZXQgPSBwYXJzZUludCh0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudExpbWl0ID0gZWxlbWVudE9mZnNldCArIHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFN0aWNreSA9ICh0eXBlb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RpY2t5JykgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50U3RpY2t5VGFyZ2V0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RpY2t5LXRhcmdldCcpO1xuXG4gICAgICAgICAgICBsZXQgZWxlbWVudFZpZXdwb3J0T2Zmc2V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3cG9ydC1vZmZzZXQnKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgIGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXdwb3J0LW9mZnNldCcpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL01hbmFnZSBjYWxsYmFja1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRDYWxsYmFja1N0cmluZyA9ICh0eXBlb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKSA9PT0gJ3N0cmluZycpID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKSA6IG51bGw7XG4gICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICAgICAgaWYoZWxlbWVudENhbGxiYWNrU3RyaW5nICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoMCwgZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnNTdHJpbmcgPSBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuc3Vic3RyKGVsZW1lbnRDYWxsYmFja1N0cmluZy5pbmRleE9mKCcoJyksZWxlbWVudENhbGxiYWNrU3RyaW5nLmxlbmd0aCAtIGV2ZW50Lmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcoJywnJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1N0cmluZyA9IG9wdGlvbnNTdHJpbmcucmVwbGFjZSgnKScsJycpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBvcHRpb25zU3RyaW5nLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge307XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uc1tqXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25bMF0gPSBvcHRpb25bMF0ucmVwbGFjZSgnICcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBib29sZWFuXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvblsxXSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihvcHRpb25bMV0gPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBudW1lcmljXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoL15cXGQrJC8udGVzdChvcHRpb25bMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBwYXJzZUludChvcHRpb25bMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBvcHRpb25bMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2JqW29wdGlvblswXV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudENhbGxiYWNrID0ge2V2ZW50OmV2ZW50LCBvcHRpb25zOm9ian07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGVsZW1lbnRzIGxvc2VzIGl0cyBhbmltYXRpb24gYWZ0ZXIgc2Nyb2xsaW5nIHBhc3QgaXRcbiAgICAgICAgICAgIGxldCBlbGVtZW50UmVwZWF0ID0gKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZXBlYXQnKSA9PT0gJ3N0cmluZycpO1xuXG4gICAgICAgICAgICBsZXQgZWxlbWVudEluVmlld0NsYXNzID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW52aWV3LWNsYXNzJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRJblZpZXdDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50SW5WaWV3Q2xhc3MgPSAnaXMtc2hvdyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50U3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50U3RpY2t5VGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9IHRoaXMuJGNvbnRhaW5lclswXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RpY2t5VGFyZ2V0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRTdGlja3lUYXJnZXQpWzBdXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0aWNreVRhcmdldEJDUiA9IHN0aWNreVRhcmdldEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9IHN0aWNreVRhcmdldEJDUi50b3AgKyBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJlc2V0IG9mZnNldFxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShlbGVtZW50SW5WaWV3Q2xhc3MpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdW5zdHVjaycpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtVmFsdWUgPSAndHJhbnNsYXRlM2QoMCwgMCwgMCknXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLk1velRyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLk9UcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEb24ndCBhZGQgZWxlbWVudCBpZiBpdCBhbHJlYWR5IGhhcyBpdHMgaW52aWV3IGNsYXNzIGFuZCBkb2Vzbid0IHJlcGVhdFxuICAgICAgICAgICAgaWYgKGVsZW1lbnRSZXBlYXQgfHwgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGVsZW1lbnRJblZpZXdDbGFzcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHNbaV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICRlbGVtZW50OiAkKGVsZW1lbnQpLCAvLyBURU1QT1JBUllcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBNYXRoLnJvdW5kKGVsZW1lbnRPZmZzZXQpLFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IGVsZW1lbnRSZXBlYXQsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBlbGVtZW50UG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBlbGVtZW50TGltaXQsXG4gICAgICAgICAgICAgICAgICAgIGluVmlld0NsYXNzOiBlbGVtZW50SW5WaWV3Q2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIHN0aWNreTogZWxlbWVudFN0aWNreSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGVsZW1lbnRDYWxsYmFjayxcbiAgICAgICAgICAgICAgICAgICAgdmlld3BvcnRPZmZzZXQ6IGVsZW1lbnRWaWV3cG9ydE9mZnNldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb29wIHRocm91Z2ggYWxsIGFuaW1hdGFibGUgZWxlbWVudHMgYW5kIGFwcGx5IGFuaW1hdGlvbiBtZXRob2QocykuXG4gICAgICovXG4gICAgYW5pbWF0ZUVsZW1lbnRzKCkge1xuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLmFuaW1hdGVkRWxlbWVudHMubGVuZ3RoO1xuICAgICAgICBjb25zdCByZW1vdmVJbmRleGVzID0gW107XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmFuaW1hdGVkRWxlbWVudHNbaV07XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50J3MgdmlzaWJpbGl0eSBtdXN0IG5vdCBiZSBtYW5pcHVsYXRlZCBhbnkgZnVydGhlciwgcmVtb3ZlIGl0IGZyb20gdGhlIGxpc3RcbiAgICAgICAgICAgIGlmICh0aGlzLnRvZ2dsZUVsZW1lbnQoZWxlbWVudCwgaSkpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVJbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYW5pbWF0ZWQgZWxlbWVudHMgYWZ0ZXIgbG9vcGluZyB0aHJvdWdoIGVsZW1lbnRzXG4gICAgICAgIGkgPSByZW1vdmVJbmRleGVzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzLnNwbGljZShyZW1vdmVJbmRleGVzW2ldLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY2xhc3MgYW5pbWF0aW9ucywgYW5kIHVwZGF0ZSB0aGUgZ2xvYmFsIHNjcm9sbCBwb3NpdGlvbm5pbmcuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ2Rvd24nKSB7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgIT09IHdpbmRvdy5wYWdlWU9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwueCAhPT0gd2luZG93LnBhZ2VYT2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC54ID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYWxsYmFja3Mub25TY3JvbGwodGhpcy5zY3JvbGwpXG5cbiAgICAgICAgdGhpcy5hbmltYXRlRWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgY2xhc3NlcyBvbiBhbiBlbGVtZW50IGlmIGl0J3MgdmlzaWJsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gICAgICBlbGVtZW50IEN1cnJlbnQgZWxlbWVudCB0byB0ZXN0XG4gICAgICogQHBhcmFtICB7aW50fSAgICAgICAgIGluZGV4ICAgSW5kZXggb2YgdGhlIGVsZW1lbnQgd2l0aGluIGl0J3MgY29udGFpbmVyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgICAgICAgV2V0aGVyIHRoZSBpdGVtIG11c3QgYmUgcmVtb3ZlZCBmcm9tIGl0cyBjb250YWluZXJcbiAgICAgKi9cbiAgICB0b2dnbGVFbGVtZW50KGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgIGxldCByZW1vdmVGcm9tQ29udGFpbmVyID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gRmluZCB0aGUgYm90dG9tIGVkZ2Ugb2YgdGhlIHNjcm9sbCBjb250YWluZXJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnk7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxCb3R0b20gPSBzY3JvbGxUb3AgKyB0aGlzLndpbmRvd0hlaWdodDtcblxuICAgICAgICAgICAgLy8gRGVmaW5lIGlmIHRoZSBlbGVtZW50IGlzIGluVmlld1xuICAgICAgICAgICAgbGV0IGluVmlldyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVG9wID49IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFRvcCA8PSBlbGVtZW50LmxpbWl0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wb3NpdGlvbiA9PT0gJ2JlbG93Jykge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxUb3AgPiBlbGVtZW50LmxpbWl0KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVG9wID49IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFRvcCA8PSBlbGVtZW50LmxpbWl0KTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGVsZW1lbnQudmlld3BvcnRPZmZzZXQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC52aWV3cG9ydE9mZnNldC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxWaWV3cG9ydE9mZnNldFRvcCA9IHNjcm9sbFRvcCArICh0aGlzLndpbmRvd0hlaWdodCAqIGVsZW1lbnQudmlld3BvcnRPZmZzZXRbMV0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2Nyb2xsVmlld3BvcnRPZmZzZXRCb3R0b20gPSBzY3JvbGxCb3R0b20gLSAodGhpcy53aW5kb3dIZWlnaHQgKiBlbGVtZW50LnZpZXdwb3J0T2Zmc2V0WzBdKTtcbiAgICAgICAgICAgICAgICAgICAgaW5WaWV3ID0gKHNjcm9sbFZpZXdwb3J0T2Zmc2V0Qm90dG9tID4gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVmlld3BvcnRPZmZzZXRUb3AgPCBlbGVtZW50LmxpbWl0KTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxWaWV3cG9ydE9mZnNldCA9IHNjcm9sbEJvdHRvbSAtICh0aGlzLndpbmRvd0hlaWdodCAqIGVsZW1lbnQudmlld3BvcnRPZmZzZXRbMF0pO1xuICAgICAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVmlld3BvcnRPZmZzZXQgPiBlbGVtZW50Lm9mZnNldCAmJiBzY3JvbGxWaWV3cG9ydE9mZnNldCA8IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsQm90dG9tID49IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFRvcCA8PSBlbGVtZW50LmxpbWl0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+IGVsZW1lbnQubGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLXVuc3R1Y2snKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtdW5zdHVjaycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPCBlbGVtZW50Lm9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShlbGVtZW50LmluVmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBjbGFzcyBpZiBpblZpZXcsIHJlbW92ZSBpZiBub3RcbiAgICAgICAgICAgIGlmIChpblZpZXcpIHtcbiAgICAgICAgICAgICAgICBpZighZWxlbWVudC5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhlbGVtZW50LmluVmlld0NsYXNzKSl7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGVsZW1lbnQuaW5WaWV3Q2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJDYWxsYmFjayhlbGVtZW50LCdlbnRlcicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5yZXBlYXQgJiYgIWVsZW1lbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUZyb21Db250YWluZXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgLSBlbGVtZW50Lm9mZnNldDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1WYWx1ZSA9IGB0cmFuc2xhdGUzZCgwLCAke3l9cHgsIDApYFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudC5zdHlsZS5Nb3pUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50LnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudC5zdHlsZS5PVHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGVsZW1lbnQuaW5WaWV3Q2xhc3MpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnQuaW5WaWV3Q2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyQ2FsbGJhY2soZWxlbWVudCwnbGVhdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW1vdmVGcm9tQ29udGFpbmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrIGlmIHRoZSBlbGVtZW50IGhhdmUgYSBjYWxsYmFjaywgYW5kIHRyaWdnZXIgdGhlIGV2ZW50IHNldCBpbiB0aGUgZGF0YS1jYWxsYmFja1xuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgICAgIGVsZW1lbnQgQ3VycmVudCBlbGVtZW50IHRvIHRlc3RcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICB0cmlnZ2VyQ2FsbGJhY2soZWxlbWVudCx3YXkpe1xuXG4gICAgICAgIGlmKGVsZW1lbnQuY2FsbGJhY2sgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgIGVsZW1lbnQuJGVsZW1lbnQudHJpZ2dlcih7XG4gICAgICAgICAgICAgICAgdHlwZTogZWxlbWVudC5jYWxsYmFjay5ldmVudCxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBlbGVtZW50LmNhbGxiYWNrLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgd2F5OiB3YXlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9hZGQgdGhpcyB3aGVyZSB5b3Ugd2FudCBkdWRlIChpbiB5b3VyIG1vZHVsZSBidHcpXG4gICAgICAgICAgICAvLyAkZG9jdW1lbnQub24oZXZlbnQuTmFtZXNwYWNlLChlKT0+e1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGUub3B0aW9ucywgZS53YXkpO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIGRlc2lyZWQgdGFyZ2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogICAgICBBdmFpbGFibGUgb3B0aW9ucyA6XG4gICAgICogICAgICAgICAge25vZGV9IHRhcmdldEVsZW0gLSBUaGUgRE9NIGVsZW1lbnQgd2Ugd2FudCB0byBzY3JvbGwgdG9cbiAgICAgKiAgICAgICAgICB7bm9kZX0gc291cmNlRWxlbSAtIEFuIGA8YT5gIGVsZW1lbnQgd2l0aCBhbiBocmVmIHRhcmdldGluZyB0aGUgYW5jaG9yIHdlIHdhbnQgdG8gc2Nyb2xsIHRvXG4gICAgICogICAgICAgICAge25vZGV9IG9mZnNldEVsZW0gLSBBIERPTSBlbGVtZW50IGZyb20gd2hpY2ggd2UgZ2V0IHRoZSBoZWlnaHQgdG8gc3Vic3RyYWN0IGZyb20gdGhlIHRhcmdldE9mZnNldFxuICAgICAqICAgICAgICAgICAgICAoZXg6IHVzZSBvZmZzZXRFbGVtIHRvIHBhc3MgYSBtb2JpbGUgaGVhZGVyIHRoYXQgaXMgYWJvdmUgY29udGVudCwgdG8gbWFrZSBzdXJlIHRoZSBzY3JvbGxUbyB3aWxsIGJlIGFsaWduZWQgd2l0aCBpdClcbiAgICAgKiAgICAgICAgICB7aW50fSB0YXJnZXRPZmZzZXQgLSBBbiBhYnNvbHV0ZSB2ZXJ0aWNhbCBzY3JvbGwgdmFsdWUgdG8gcmVhY2gsIG9yIGFuIG9mZnNldCB0byBhcHBseSBvbiB0b3Agb2YgZ2l2ZW4gYHRhcmdldEVsZW1gIG9yIGBzb3VyY2VFbGVtYCdzIHRhcmdldFxuICAgICAqICAgICAgICAgIHtpbnR9IGRlbGF5IC0gQW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBzdGFydGluZyB0byBzY3JvbGxcbiAgICAgKiAgICAgICAgICB7Ym9vbGVhbn0gdG9Ub3AgLSBTZXQgdG8gdHJ1ZSB0byBzY3JvbGwgYWxsIHRoZSB3YXkgdG8gdGhlIHRvcFxuICAgICAqICAgICAgICAgIHtib29sZWFufSB0b0JvdHRvbSAtIFNldCB0byB0cnVlIHRvIHNjcm9sbCBhbGwgdGhlIHdheSB0byB0aGUgYm90dG9tXG4gICAgICogICAgICAgICAge2Zsb2F0fSBzcGVlZCAtIER1cmF0aW9uIG9mIHRoZSBzY3JvbGxcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNjcm9sbFRvKG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHRhcmdldEVsZW0gPSBvcHRpb25zLnRhcmdldEVsZW07XG4gICAgICAgIGNvbnN0IHNvdXJjZUVsZW0gPSBvcHRpb25zLnNvdXJjZUVsZW07XG4gICAgICAgIGNvbnN0IG9mZnNldEVsZW0gPSBvcHRpb25zLm9mZnNldEVsZW07XG4gICAgICAgIGxldCB0YXJnZXRPZmZzZXQgPSBpc051bWVyaWMob3B0aW9ucy50YXJnZXRPZmZzZXQpID8gcGFyc2VJbnQob3B0aW9ucy50YXJnZXRPZmZzZXQpIDogMDtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBpc051bWVyaWMob3B0aW9ucy5kZWxheSkgPyBwYXJzZUludChvcHRpb25zLmRlbGF5KSA6IDA7XG4gICAgICAgIGNvbnN0IHNwZWVkID0gaXNOdW1lcmljKG9wdGlvbnMuc3BlZWQpID8gcGFyc2VJbnQob3B0aW9ucy5zcGVlZCkgOiA4MDA7XG4gICAgICAgIGNvbnN0IHRvVG9wID0gb3B0aW9ucy50b1RvcDtcbiAgICAgICAgY29uc3QgdG9Cb3R0b20gPSBvcHRpb25zLnRvQm90dG9tO1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgYXQgbGVhc3Qgb25lIG9mIHRoZSByZXF1aXJlZCBvcHRpb25zIGhhcyBiZWVlbiBmaWxsZWRcbiAgICAgICAgaWYgKCF0b1RvcCAmJiAhdG9Cb3R0b20gJiYgIWlzTnVtZXJpYyhvcHRpb25zLnRhcmdldE9mZnNldCkgJiYgIXRhcmdldEVsZW0gJiYgIXNvdXJjZUVsZW0pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgWW91IG11c3Qgc3BlY2lmeSBhdCBsZWFzdCBvbmUgb2YgdGhlc2UgcGFyYW1ldGVyczpgLCBbXG4gICAgICAgICAgICAgICAgJ3tib29sZWFufSB0b1RvcCAtIFNldCB0byB0cnVlIHRvIHNjcm9sbCBhbGwgdGhlIHdheSB0byB0aGUgdG9wJyxcbiAgICAgICAgICAgICAgICAne2Jvb2xlYW59IHRvQm90dG9tIC0gU2V0IHRvIHRydWUgdG8gc2Nyb2xsIGFsbCB0aGUgd2F5IHRvIHRoZSBib3R0b20nLFxuICAgICAgICAgICAgICAgICd7aW50fSB0YXJnZXRPZmZzZXQgLSBBbiBhYnNvbHV0ZSB2ZXJ0aWNhbCBzY3JvbGwgdmFsdWUgdG8gcmVhY2gsIG9yIGFuIG9mZnNldCB0byBhcHBseSBvbiB0b3Agb2YgZ2l2ZW4gYHRhcmdldEVsZW1gIG9yIGBzb3VyY2VFbGVtYFxcJ3MgdGFyZ2V0JyxcbiAgICAgICAgICAgICAgICAne25vZGV9IHRhcmdldEVsZW0gLSBUaGUgRE9NIGVsZW1lbnQgd2Ugd2FudCB0byBzY3JvbGwgdG8nLFxuICAgICAgICAgICAgICAgICd7bm9kZX0gc291cmNlRWxlbSAtIEFuIGA8YT5gIGVsZW1lbnQgd2l0aCBhbiBocmVmIHRhcmdldGluZyB0aGUgYW5jaG9yIHdlIHdhbnQgdG8gc2Nyb2xsIHRvJ1xuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBzb3VyY2VFbGVtIGlzIGdpdmVuLCBmaW5kIGFuZCBzdG9yZSB0aGUgdGFyZ2V0RWxlbSBpdCdzIHJlbGF0ZWQgdG9cbiAgICAgICAgaWYgKHNvdXJjZUVsZW0pIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXREYXRhID0gJyc7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZUVsZW0pO1xuXG4gICAgICAgICAgICAvLyBHZXQgdGhlIHNlbGVjdG9yIChnaXZlbiB3aXRoIGBkYXRhLXRhcmdldGAgb3IgYGhyZWZgIGF0dHJpYnV0ZXMgb24gc291cmNlRWxlbSlcbiAgICAgICAgICAgIGxldCBzb3VyY2VFbGVtVGFyZ2V0ID0gc291cmNlRWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JylcbiAgICAgICAgICAgIHRhcmdldERhdGEgPSBzb3VyY2VFbGVtVGFyZ2V0ID8gc291cmNlRWxlbVRhcmdldCA6IHNvdXJjZUVsZW0uZ2V0QXR0cmlidXRlKCdocmVmJylcblxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHRhcmdldCBmb3IgbGF0ZXJcbiAgICAgICAgICAgIHRhcmdldEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldERhdGEpWzBdXG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBoYXZlIGEgdGFyZ2V0RWxlbSwgZ2V0IGl0J3MgY29vcmRpbmF0ZXNcbiAgICAgICAgaWYgKHRhcmdldEVsZW0pIHtcbiAgICAgICAgICAgIC8vIEdldCB0YXJnZXRFbGVtIG9mZnNldCBmcm9tIHRvcFxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbUJDUiA9IHRhcmdldEVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW1PZmZzZXRUb3AgPSB0YXJnZXRFbGVtQkNSLnRvcCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLy8gVE9ETyAtIEltcHJvdmUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gc291cmNlLCBtaWdodCBub3QgYWx3YXlzIGJlIGRvY3VtZW50RWxlbWVudFxuXG4gICAgICAgICAgICAvLyBGaW5hbCB2YWx1ZSBvZiBzY3JvbGwgZGVzdGluYXRpb24gOiB0YXJnZXRFbGVtT2Zmc2V0VG9wICsgKG9wdGlvbmFsIG9mZnNldCBnaXZlbiBpbiBvcHRpb25zKVxuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0RWxlbU9mZnNldFRvcCArIHRhcmdldE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGhhdmUgYW4gb2Zmc2V0RWxlbSwgZ2V0IGl0cyBoZWlnaHQgYW5kIHJlbW92ZSBpdCBmcm9tIHRhcmdldE9mZnNldCBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgIGlmIChvZmZzZXRFbGVtKSB7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gb2Zmc2V0RWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0YXJnZXRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSB3YW50IHRvIGdvIHRvIG9uZSBvZiBib3VuZGFyaWVzXG4gICAgICAgIGlmICh0b1RvcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0b0JvdHRvbSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQgLy8gVE9ETyAtIEltcHJvdmUgY29udGFpbmVyIGhlaWdodCBzb3VyY2UsIG1pZ2h0IG5vdCBhbHdheXMgYmUgdGhlIGJvZHlcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyAvLyBUT0RPIC0gUmVtb3ZlIGpRdWVyeSBoZXJlXG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXRPZmZzZXRcbiAgICAgICAgICAgIH0sIHNwZWVkKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBlbGVtZW50cyBhbmQgcmVjYWxjdWxhdGUgYWxsIHRoZSBwb3NpdGlvbnMgb24gdGhlIHBhZ2VcbiAgICAgKi9cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlRWxlbWVudHMoKTtcblxuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XG4gICAgICAgIHRoaXMud2luZG93TWlkZGxlID0gdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICAkd2luZG93Lm9mZihgLiR7RVZFTlRfS0VZfWApO1xuICAgICAgICB0aGlzLiRjb250YWluZXIub2ZmKGAuJHtFVkVOVF9LRVl9YCk7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJlcXVlc3RJZCk7XG4gICAgICAgIHRoaXMucmVxdWVzdElkID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMgPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvY29tb3RpdmUgU2Nyb2xsIE1hbmFnZXJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkZG9jdW1lbnQsICR3aW5kb3csICRodG1sLCAkYm9keSB9IGZyb20gJy4uLy4uL3V0aWxzL2Vudmlyb25tZW50JztcbmltcG9ydCBTY3JvbGwsIHsgREVGQVVMVFMsIEVWRU5UIH0gZnJvbSAnLi4vU2Nyb2xsJztcbmltcG9ydCBTbW9vdGhTY3JvbGwgZnJvbSAnLi4vU21vb3RoU2Nyb2xsJztcblxuLyoqXG4gKiBCYXNpYyBtb2R1bGUgdGhhdCBkZXRlY3RzIHdoaWNoIHNjcm9sbGluZyBtb2R1bGUgd2UnbGwgYmUgdXNpbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5zbW9vdGggPSBvcHRpb25zLnNtb290aCB8fCBERUZBVUxUUy5zbW9vdGg7XG4gICAgICAgIHRoaXMuc21vb3RoTW9iaWxlID0gb3B0aW9ucy5zbW9vdGhNb2JpbGUgfHwgREVGQVVMVFMuc21vb3RoTW9iaWxlO1xuICAgICAgICB0aGlzLm1vYmlsZUNvbnRhaW5lciA9IG9wdGlvbnMubW9iaWxlQ29udGFpbmVyIHx8IERFRkFVTFRTLm1vYmlsZUNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5pc01vYmlsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgICRodG1sWzBdLnNjcm9sbFRvcCA9IDA7XG4gICAgICAgICRib2R5WzBdLnNjcm9sbFRvcCA9IDA7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNtb290aE1vYmlsZSkge1xuICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9ICgvQW5kcm9pZHxpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zbW9vdGggPT09IHRydWUgJiYgIXRoaXMuaXNNb2JpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNtb290aFNjcm9sbCh0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tb2JpbGVDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmNvbnRhaW5lciA9IHRoaXMubW9iaWxlQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2Nyb2xsKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5pbml0KCk7XG5cbiAgICAgICAgY29uc3QgJHNjcm9sbFRvT25Mb2FkRWwgPSAkKCcuanMtc2Nyb2xsdG8tb24tbG9hZCcpLmZpcnN0KCk7XG5cbiAgICAgICAgaWYgKCRzY3JvbGxUb09uTG9hZEVsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgJGRvY3VtZW50LnRyaWdnZXJIYW5kbGVyKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnRXZlbnQuU0NST0xMVE8nLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RWxlbTogJHNjcm9sbFRvT25Mb2FkRWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH1cbn1cbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBMb2NvbW90aXZlIFNtb290aCBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkd2luZG93LCAkZG9jdW1lbnQsICRodG1sLCBodG1sIH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IFNjcm9sbCwgeyBERUZBVUxUUywgRVZFTlQgfSBmcm9tICcuLi9TY3JvbGwnO1xuaW1wb3J0IHsgZ2V0UGFyZW50cywgcXVlcnlDbG9zZXN0UGFyZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvaHRtbCc7XG5pbXBvcnQgeyBsZXJwIH0gZnJvbSAnLi4vLi4vdXRpbHMvbWF0aHMnXG5cbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgVmlydHVhbFNjcm9sbCBmcm9tICd2aXJ0dWFsLXNjcm9sbCc7XG5pbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuLi8uLi91dGlscy9pcyc7XG5cbi8qKmAuXG4gKiBCYXNlZCBvbiBgU2Nyb2xsYCBjbGFzcywgd2hpY2ggYWxsb3dzIGFuaW1hdGlvbnMgb2YgZWxlbWVudHMgb24gdGhlIHBhZ2VcbiAqIGFjY29yZGluZyB0byBzY3JvbGwgcG9zaXRpb24uXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFNjcm9sbCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLnNlY3Rpb25zU2VsZWN0b3IgPSAob3B0aW9ucy5zZWN0aW9ucykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG9wdGlvbnMuc2VjdGlvbnMpIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChERUZBVUxUUy5zZWN0aW9ucyk7XG4gICAgICAgIHRoaXMuaXNSZXZlcnNlZCA9IG9wdGlvbnMucmV2ZXJzZWQgfHwgREVGQVVMVFMucmV2ZXJzZWQ7XG4gICAgICAgIHRoaXMuZ2V0RGlyZWN0aW9uID0gb3B0aW9ucy5nZXREaXJlY3Rpb24gfHwgREVGQVVMVFMuZ2V0RGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmdldFNwZWVkID0gb3B0aW9ucy5nZXRTcGVlZCB8fCBERUZBVUxUUy5nZXRTcGVlZDtcbiAgICAgICAgdGhpcy5pbmVydGlhID0gb3B0aW9ucy5pbmVydGlhIHx8IERFRkFVTFRTLmluZXJ0aWE7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmFyQ2xhc3NOYW1lID0gb3B0aW9ucy5zY3JvbGxCYXJDbGFzc05hbWUgfHwgREVGQVVMVFMuc2Nyb2xsQmFyQ2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lID0gb3B0aW9ucy5pc1Njcm9sbGluZ0NsYXNzTmFtZSB8fCBERUZBVUxUUy5pc1Njcm9sbGluZ0NsYXNzTmFtZTtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nQ2xhc3NOYW1lID0gb3B0aW9ucy5pc0RyYWdnaW5nQ2xhc3NOYW1lIHx8IERFRkFVTFRTLmlzRHJhZ2dpbmdDbGFzc05hbWU7XG5cbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbEJhciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgc2Nyb2xsaW5nIGFuaW1hdGlvbnNcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICAvLyBBZGQgY2xhc3MgdG8gdGhlIGRvY3VtZW50IHRvIGtub3cgaWYgU21vb3RoU2Nyb2xsIGlzIGluaXRpYWxpemVkICh0byBtYW5hZ2Ugb3ZlcmZsb3cgb24gY29udGFpbmVycylcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hhcy1zbW9vdGgtc2Nyb2xsJyk7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBWaXJ0dWFsU2Nyb2xsKHtcbiAgICAgICAgICAgIG1vdXNlTXVsdGlwbGllcjogKG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKCdXaW4nKSA+IC0xKSA/IDEgOiAwLjQsXG4gICAgICAgICAgICB0b3VjaE11bHRpcGxpZXI6IDQsXG4gICAgICAgICAgICBmaXJlZm94TXVsdGlwbGllcjogMzBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbmVydGlhID0gdGhpcy5pbmVydGlhICogMC4xO1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsID0ge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBkaXJlY3Rpb246IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGEgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5nZXRTcGVlZCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuc3BlZWQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5vbigoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZyAmJiAhdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGEueSAtPSBlLmRlbHRhWTtcblxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmluc3RhbmNlLmRlbHRhLnkgPCAwKSB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmluc3RhbmNlLmRlbHRhLnkgPiB0aGlzLmluc3RhbmNlLmxpbWl0KSB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB0aGlzLmluc3RhbmNlLmxpbWl0O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTGltaXQoKTtcbiAgICAgICAgdGhpcy5pbml0U2Nyb2xsQmFyKCk7XG5cbiAgICAgICAgdGhpcy5hZGRTZWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG5cbiAgICAgICAgdGhpcy5ldmVudHMoKTtcblxuICAgICAgICB0aGlzLnByZWxvYWRJbWFnZXMoKTtcblxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIExpc3Rlbi90cmlnZ2VyIGV2ZW50c1xuICAgICoqL1xuICAgIGV2ZW50cygpIHtcbiAgICAgICAgLy8gUmVidWlsZCBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuUkVCVUlMRCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5VUERBVEUsIChldmVudCwgb3B0aW9ucykgPT4gdGhpcy51cGRhdGUob3B0aW9ucykpO1xuXG4gICAgICAgIC8vIFNjcm9sbHRvIGJ1dHRvbiBldmVudFxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuQ0xJQ0ssICcuanMtc2Nyb2xsdG8nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHNvdXJjZUVsZW06IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0RWxlbTogZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb2Zmc2V0JylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRjb250YWluZXIub24oRVZFTlQuU0NST0xMVE8sIChldmVudCkgPT4gdGhpcy5zY3JvbGxUbyhldmVudC5vcHRpb25zKSk7XG5cbiAgICAgICAgLy8gU2V0dXAgZG9uZVxuICAgICAgICAkZG9jdW1lbnQudHJpZ2dlckhhbmRsZXIoe1xuICAgICAgICAgICAgdHlwZTogRVZFTlQuSVNSRUFEWVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZXNpemUgZXZlbnRcbiAgICAgICAgJHdpbmRvdy5vbihFVkVOVC5SRVNJWkUsIGRlYm91bmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICAgIH0sNjAwKSk7XG4gICAgfVxuXG4gICAgaW5pdFNjcm9sbEJhcigpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aGlzLnNjcm9sbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5zY3JvbGxCYXJDbGFzc05hbWV9X3dyYXBwZXJgKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuY2xhc3NMaXN0LmFkZChgJHt0aGlzLnNjcm9sbEJhckNsYXNzTmFtZX1gKTtcblxuICAgICAgICB0aGlzLnNjcm9sbGJhcldyYXBwZXIuYXBwZW5kKHRoaXMuc2Nyb2xsYmFyKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5zY3JvbGxiYXJXcmFwcGVyKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuc3R5bGUuaGVpZ2h0ID0gYCR7KHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyB0aGlzLmluc3RhbmNlLmxpbWl0fXB4YDtcbiAgICAgICAgdGhpcy5zY3JvbGxCYXJMaW1pdCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuc2Nyb2xsYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuICAgICAgICB0aGlzLnNjcm9sbGJhci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLChlKSA9PiB0aGlzLmdldFNjcm9sbEJhcihlKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywoZSkgPT4gdGhpcy5yZWxlYXNlU2Nyb2xsQmFyKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsKGUpID0+IHRoaXMubW92ZVNjcm9sbEJhcihlKSk7XG5cbiAgICB9XG5cbiAgICByZWluaXRTY3JvbGxCYXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLnN0eWxlLmhlaWdodCA9IGAkeyh3aW5kb3cuaW5uZXJIZWlnaHQgKiB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gdGhpcy5pbnN0YW5jZS5saW1pdH1weGA7XG4gICAgICAgIHRoaXMuc2Nyb2xsQmFyTGltaXQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLnNjcm9sbGJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgZGVzdHJveVNjcm9sbEJhcigpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywoZSkgPT4gdGhpcy5nZXRTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsKGUpID0+IHRoaXMucmVsZWFzZVNjcm9sbEJhcihlKSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLChlKSA9PiB0aGlzLm1vdmVTY3JvbGxCYXIoZSkpO1xuICAgIH1cblxuICAgIGdldFNjcm9sbEJhcihlKSB7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZ1Njcm9sbEJhciA9IHRydWU7XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuaXNTY3JvbGxpbmdDbGFzc05hbWUpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQodGhpcy5pc0RyYWdnaW5nQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICByZWxlYXNlU2Nyb2xsQmFyKGUpIHtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyID0gZmFsc2U7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lKTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuaXNEcmFnZ2luZ0NsYXNzTmFtZSk7XG4gICAgfVxuXG4gICAgbW92ZVNjcm9sbEJhcihlKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1RpY2tpbmcgJiYgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB5ID0gKGUucGFnZVkgKiAxMDAgLyAod2luZG93LmlubmVySGVpZ2h0KSkgKiB0aGlzLmluc3RhbmNlLmxpbWl0IC8gMTAwO1xuXG4gICAgICAgICAgICAgICAgaWYoeSA+IDAgJiYgeSA8IHRoaXMuaW5zdGFuY2UubGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0geTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNUaWNraW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzVGlja2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IGV4aXN0aW5nIHNlY3Rpb25zIGFuZCBmaW5kIGFsbCBzZWN0aW9ucy5cbiAgICAgKiBDYWxsZWQgb24gcGFnZSBsb2FkIGFuZCBhbnkgc3Vic2VxdWVudCB1cGRhdGVzLlxuICAgICAqL1xuXG4gICAgYWRkU2VjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuc2VjdGlvbnMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCB0aGlzLnNlY3Rpb25zU2VsZWN0b3IubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICBsZXQgc2VjdGlvbkVsZW1lbnQgPSB0aGlzLnNlY3Rpb25zU2VsZWN0b3JbaV07XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gc2VjdGlvbkVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gKHdpbmRvdy5pbm5lckhlaWdodCAqIDEuNSkgLSB0aGlzLmdldFRyYW5zbGF0ZShzZWN0aW9uRWxlbWVudCkueTtcbiAgICAgICAgICAgIGxldCBsaW1pdCA9IG9mZnNldCArIHNlY3Rpb25FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAyKTtcbiAgICAgICAgICAgIGxldCBwZXJzaXN0ZW50ID0gdHlwZW9mIHNlY3Rpb25FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wZXJzaXN0ZW50JykgPT09ICdzdHJpbmcnXG5cbiAgICAgICAgICAgIGxldCBpblZpZXcgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNlY3Rpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+IG9mZnNldCAmJiB0aGlzLmluc3RhbmNlLnNjcm9sbC55IDwgbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5WaWV3ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudDogc2VjdGlvbkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0LFxuICAgICAgICAgICAgICAgIGxpbWl0LFxuICAgICAgICAgICAgICAgIGluVmlldyxcbiAgICAgICAgICAgICAgICBwZXJzaXN0ZW50XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IGV4aXN0aW5nIGVsZW1lbnRzIGFuZCBmaW5kIGFsbCBhbmltYXRhYmxlIGVsZW1lbnRzLlxuICAgICAqIENhbGxlZCBvbiBwYWdlIGxvYWQgYW5kIGFueSBzdWJzZXF1ZW50IHVwZGF0ZXMuXG4gICAgICovXG4gICAgYWRkRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMgPSBbXTtcblxuXG4gICAgICAgIGZvciAobGV0IHkgPSAwIDsgeSA8IHRoaXMuc2VjdGlvbnMubGVuZ3RoOyB5ICsrKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5zZWN0aW9uc1t5XS5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3Rvcik7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSBlbGVtZW50cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRTcGVlZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNwZWVkJykgPyBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcGVlZCcpIC8gMTAgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFBvc2l0aW9uID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFRhcmdldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50SG9yaXpvbnRhbCA9ICh0eXBlb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaG9yaXpvbnRhbCcpID09PSAnc3RyaW5nJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRTdGlja3kgPSAodHlwZW9mIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0aWNreScpID09PSAnc3RyaW5nJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRTdGlja3lUYXJnZXQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGlja3ktdGFyZ2V0Jyk7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IChlbGVtZW50VGFyZ2V0ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudFRhcmdldCkubGVuZ3RoKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudFRhcmdldCkgOiBlbGVtZW50O1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50T2Zmc2V0O1xuICAgICAgICAgICAgICAgIC8vIHJlc2V0IHRyYW5zZm9ybSB0byBnZXQgdGhlIHJlYWwgb2Zmc2V0XG5cbiAgICAgICAgICAgICAgICBpZighdGhpcy5zZWN0aW9uc1t5XS5pblZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9mZnNldCA9IHBhcnNlSW50KHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSB0aGlzLmdldFRyYW5zbGF0ZSh0aGlzLnNlY3Rpb25zW3ldLmVsZW1lbnQpLnkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9mZnNldCA9IHBhcnNlSW50KHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudExpbWl0ID0gZWxlbWVudE9mZnNldCArIHRhcmdldC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFZpZXdwb3J0T2Zmc2V0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlld3BvcnQtb2Zmc2V0JykgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgZWxlbWVudFZpZXdwb3J0T2Zmc2V0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlld3BvcnQtb2Zmc2V0Jykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL01hbmFnZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcgPSAodHlwZW9mIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbGxiYWNrJykgPT09ICdzdHJpbmcnKSA/IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhbGxiYWNrJykgOiBudWxsO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50Q2FsbGJhY2sgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudENhbGxiYWNrU3RyaW5nICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnQgPSBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuc3Vic3RyKDAsIGVsZW1lbnRDYWxsYmFja1N0cmluZy5pbmRleE9mKCcoJykpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uc1N0cmluZyA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSxlbGVtZW50Q2FsbGJhY2tTdHJpbmcubGVuZ3RoIC0gZXZlbnQubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcoJywnJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNTdHJpbmcgPSBvcHRpb25zU3RyaW5nLnJlcGxhY2UoJyknLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG9wdGlvbnNTdHJpbmcuc3BsaXQoJ3wnKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvcHRpb25zLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gPSBvcHRpb25zW2pdLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25bMF0gPSBvcHRpb25bMF0ucmVwbGFjZSgnICcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvblsxXSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihvcHRpb25bMV0gPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBudW1lcmljXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKC9eXFxkKyQvLnRlc3Qob3B0aW9uWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHBhcnNlSW50KG9wdGlvblsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhbHVlIGlzIGEgU3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBvcHRpb25bMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbb3B0aW9uWzBdXSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRDYWxsYmFjayA9IHtldmVudDpldmVudCwgb3B0aW9uczpvYmp9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIGVsZW1lbnRzIHN0YXlzIHZpc2libGUgYWZ0ZXIgc2Nyb2xsaW5nIHBhc3QgaXRcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFJlcGVhdCA9ICh0eXBlb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVwZWF0JykgPT09ICdzdHJpbmcnKTtcblxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50SW5WaWV3Q2xhc3MgPSAodHlwZW9mIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWludmlldy1jbGFzcycpID09PSAnc3RyaW5nJykgPyBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbnZpZXctY2xhc3MnKSA6ICdpcy1zaG93JztcblxuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudFRhcmdldCAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2Zvcm0nKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T2Zmc2V0IC09IHBhcnNlSW50KEpTT04ucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNmb3JtJykpLnkpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGltaXQgPSBlbGVtZW50T2Zmc2V0ICsgdGFyZ2V0Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFN0aWNreSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnRTdGlja3lUYXJnZXQgfHwgdHlwZW9mIGVsZW1lbnRTdGlja3lUYXJnZXQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGltaXQgPSBJbmZpbml0eTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudFN0aWNreVRhcmdldClbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gZWxlbWVudC5vZmZzZXRIZWlnaHQgKyB0aGlzLmluc3RhbmNlLnNjcm9sbC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgaW5WaWV3Q2xhc3M6IGVsZW1lbnRJblZpZXdDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGVsZW1lbnRMaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBNYXRoLnJvdW5kKGVsZW1lbnRPZmZzZXQpLFxuICAgICAgICAgICAgICAgICAgICByZXBlYXQ6IGVsZW1lbnRSZXBlYXQsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBlbGVtZW50Q2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0T2Zmc2V0OiBlbGVtZW50Vmlld3BvcnRPZmZzZXRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIHBhcmFsbGF4IGFuaW1hdGVkIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRTcGVlZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50SG9yaXpvbnRhbCA9ICh0eXBlb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaG9yaXpvbnRhbCcpID09PSAnc3RyaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50TWlkZGxlID0gKChlbGVtZW50TGltaXQgLSBlbGVtZW50T2Zmc2V0KSAvIDIpICsgZWxlbWVudE9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnREZWxheSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWRlbGF5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5ob3Jpem9udGFsID0gZWxlbWVudEhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQubWlkZGxlID0gZWxlbWVudE1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5vZmZzZXQgPSBlbGVtZW50T2Zmc2V0O1xuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnNwZWVkID0gZWxlbWVudFNwZWVkXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuZGVsYXkgPSBlbGVtZW50RGVsYXk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzLnB1c2gobmV3RWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnN0aWNreSA9IGVsZW1lbnRTdGlja3k7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlZEVsZW1lbnRzLnB1c2gobmV3RWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRTdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbGF1bmNoIHRoZSB0b2dnbGUgZnVuY3Rpb24gdG8gc2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc3RpY2t5IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlRWxlbWVudChuZXdFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrU2Nyb2xsKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Njcm9sbGluZyB8fCB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5oYXNTY3JvbGxUaWNraW5nKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+wqB0aGlzLmNoZWNrU2Nyb2xsKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gKE1hdGguYWJzKHRoaXMuaW5zdGFuY2UuZGVsdGEueSAtIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpKTtcbiAgICAgICAgICAgIGlmICgoZGlzdGFuY2UgPCAxICYmIHRoaXMuaW5zdGFuY2UuZGVsdGEueSAhPSAwKSB8fCAoZGlzdGFuY2UgPCAwLjUgJiYgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID09IDApKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSBNYXRoLnJvdW5kKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpO1xuICAgICAgICAgICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlciB0aGUgY2xhc3MvdHJhbnNmb3JtIGFuaW1hdGlvbnMsIGFuZCB1cGRhdGUgdGhlIGdsb2JhbCBzY3JvbGwgcG9zaXRpb25uaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gaXNGb3JjZWQgRGV0ZXJtaW5lcyBpZiB0aGlzIGlzIGEgZm9yY2VkIHJlcXVlc3QgKGZyb20gYSBtYW51YWwgY2FsbCB0byB1cGRhdGUgb3IgYSByZXNpemUpXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgc3RhdHVzICAgICAgT3B0aW9uYWwgc3RhdHVzIG9iamVjdCByZWNlaXZlZCB3aGVuIG1ldGhvZCBpc1xuICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlZCBieSBzbW9vdGgtc2Nyb2xsYmFyIGluc3RhbmNlIGxpc3RlbmVyLlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcmVuZGVyKGlzRm9yY2VkLCBlKSB7XG4gICAgICAgIGlmKHRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPSBsZXJwKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnksdGhpcy5pbnN0YW5jZS5kZWx0YS55LCB0aGlzLmluZXJ0aWEpO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gbGVycCh0aGlzLmluc3RhbmNlLnNjcm9sbC55LHRoaXMuaW5zdGFuY2UuZGVsdGEueSwgMC4yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnNlY3Rpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZih0aGlzLnNlY3Rpb25zW2ldLnBlcnNpc3RlbnQgfHwgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPiB0aGlzLnNlY3Rpb25zW2ldLm9mZnNldCAmJiB0aGlzLmluc3RhbmNlLnNjcm9sbC55IDwgdGhpcy5zZWN0aW9uc1tpXS5saW1pdCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybSh0aGlzLnNlY3Rpb25zW2ldLmVsZW1lbnQsMCwtdGhpcy5pbnN0YW5jZS5zY3JvbGwueSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uc1tpXS5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmdldERpcmVjdGlvbil7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ID4gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgPCB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAndXAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuZ2V0U3BlZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgIT09IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5zcGVlZCA9ICh0aGlzLmluc3RhbmNlLmRlbHRhLnkgLSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSAvIChEYXRlLm5vdygpIC0gdGhpcy50aW1lc3RhbXApO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IHRoaXMuaW5zdGFuY2UuZGVsdGEueTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5zcGVlZCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKGlzRm9yY2VkKTtcbiAgICAgICAgdGhpcy5hbmltYXRlRWxlbWVudHMoKTtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vblNjcm9sbCh0aGlzLmluc3RhbmNlKTtcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIC8vIHNjcm9sbGJhciB0cmFuc2xhdGlvblxuICAgICAgICBsZXQgc2Nyb2xsQmFyVHJhbnNsYXRpb24gPSAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSAvIHRoaXMuaW5zdGFuY2UubGltaXQpICogdGhpcy5zY3JvbGxCYXJMaW1pdDtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5zY3JvbGxiYXIsMCxzY3JvbGxCYXJUcmFuc2xhdGlvbik7XG5cbiAgICAgICAgdGhpcy5oYXNTY3JvbGxUaWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgZGVzaXJlZCB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiAgICAgIEF2YWlsYWJsZSBvcHRpb25zIDpcbiAgICAgKiAgICAgICAgICB7bm9kZX0gdGFyZ2V0RWxlbSAtIFRoZSBET00gZWxlbWVudCB3ZSB3YW50IHRvIHNjcm9sbCB0b1xuICAgICAqICAgICAgICAgIHtub2RlfSBzb3VyY2VFbGVtIC0gQW4gYDxhPmAgZWxlbWVudCB3aXRoIGFuIGhyZWYgdGFyZ2V0aW5nIHRoZSBhbmNob3Igd2Ugd2FudCB0byBzY3JvbGwgdG9cbiAgICAgKiAgICAgICAgICB7bm9kZX0gb2Zmc2V0RWxlbSAtIEEgRE9NIGVsZW1lbnQgZnJvbSB3aGljaCB3ZSBnZXQgdGhlIGhlaWdodCB0byBzdWJzdHJhY3QgZnJvbSB0aGUgdGFyZ2V0T2Zmc2V0XG4gICAgICogICAgICAgICAgICAgIChleDogdXNlIG9mZnNldEVsZW0gdG8gcGFzcyBhIG1vYmlsZSBoZWFkZXIgdGhhdCBpcyBhYm92ZSBjb250ZW50LCB0byBtYWtlIHN1cmUgdGhlIHNjcm9sbFRvIHdpbGwgYmUgYWxpZ25lZCB3aXRoIGl0KVxuICAgICAqICAgICAgICAgIHtpbnR9IHRhcmdldE9mZnNldCAtIEFuIGFic29sdXRlIHZlcnRpY2FsIHNjcm9sbCB2YWx1ZSB0byByZWFjaCwgb3IgYW4gb2Zmc2V0IHRvIGFwcGx5IG9uIHRvcCBvZiBnaXZlbiBgdGFyZ2V0RWxlbWAgb3IgYHNvdXJjZUVsZW1gJ3MgdGFyZ2V0XG4gICAgICogICAgICAgICAge2ludH0gZGVsYXkgLSBBbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHN0YXJ0aW5nIHRvIHNjcm9sbFxuICAgICAqICAgICAgICAgIHtib29sZWFufSB0b1RvcCAtIFNldCB0byB0cnVlIHRvIHNjcm9sbCBhbGwgdGhlIHdheSB0byB0aGUgdG9wXG4gICAgICogICAgICAgICAge2Jvb2xlYW59IHRvQm90dG9tIC0gU2V0IHRvIHRydWUgdG8gc2Nyb2xsIGFsbCB0aGUgd2F5IHRvIHRoZSBib3R0b21cbiAgICAgKiAgICAgICAgICB7ZmxvYXR9IHNwZWVkIC0gRHVyYXRpb24gb2YgdGhlIHNjcm9sbCAo4pqg77iPIERJU0FCTEVEIHNpbmNlIHYyKVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2Nyb2xsVG8ob3B0aW9ucykge1xuICAgICAgICBsZXQgdGFyZ2V0RWxlbSA9IG9wdGlvbnMudGFyZ2V0RWxlbTtcbiAgICAgICAgY29uc3Qgc291cmNlRWxlbSA9IG9wdGlvbnMuc291cmNlRWxlbTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RWxlbSA9IG9wdGlvbnMub2Zmc2V0RWxlbTtcbiAgICAgICAgbGV0IHRhcmdldE9mZnNldCA9IGlzTnVtZXJpYyhvcHRpb25zLnRhcmdldE9mZnNldCkgPyBwYXJzZUludChvcHRpb25zLnRhcmdldE9mZnNldCkgOiAwO1xuICAgICAgICBjb25zdCBkZWxheSA9IGlzTnVtZXJpYyhvcHRpb25zLmRlbGF5KSA/IHBhcnNlSW50KG9wdGlvbnMuZGVsYXkpIDogMDtcbiAgICAgICAgLy8gY29uc3Qgc3BlZWQgPSBpc051bWVyaWMob3B0aW9ucy5zcGVlZCkgPyBwYXJzZUludChvcHRpb25zLnNwZWVkKSA6IDkwMDsgLy8gKOKaoO+4jyBESVNBQkxFRCBzaW5jZSB2MilcbiAgICAgICAgY29uc3QgdG9Ub3AgPSBvcHRpb25zLnRvVG9wO1xuICAgICAgICBjb25zdCB0b0JvdHRvbSA9IG9wdGlvbnMudG9Cb3R0b207XG5cbiAgICAgICAgLy8gTWFrZSBzdXJlIGF0IGxlYXN0IG9uZSBvZiB0aGUgcmVxdWlyZWQgb3B0aW9ucyBoYXMgYmVlZW4gZmlsbGVkXG4gICAgICAgIGlmICghdG9Ub3AgJiYgIXRvQm90dG9tICYmICFpc051bWVyaWMob3B0aW9ucy50YXJnZXRPZmZzZXQpICYmICF0YXJnZXRFbGVtICYmICFzb3VyY2VFbGVtKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFlvdSBtdXN0IHNwZWNpZnkgYXQgbGVhc3Qgb25lIG9mIHRoZXNlIHBhcmFtZXRlcnM6YCwgW1xuICAgICAgICAgICAgICAgICd7Ym9vbGVhbn0gdG9Ub3AgLSBTZXQgdG8gdHJ1ZSB0byBzY3JvbGwgYWxsIHRoZSB3YXkgdG8gdGhlIHRvcCcsXG4gICAgICAgICAgICAgICAgJ3tib29sZWFufSB0b0JvdHRvbSAtIFNldCB0byB0cnVlIHRvIHNjcm9sbCBhbGwgdGhlIHdheSB0byB0aGUgYm90dG9tJyxcbiAgICAgICAgICAgICAgICAne2ludH0gdGFyZ2V0T2Zmc2V0IC0gQW4gYWJzb2x1dGUgdmVydGljYWwgc2Nyb2xsIHZhbHVlIHRvIHJlYWNoLCBvciBhbiBvZmZzZXQgdG8gYXBwbHkgb24gdG9wIG9mIGdpdmVuIGB0YXJnZXRFbGVtYCBvciBgc291cmNlRWxlbWBcXCdzIHRhcmdldCcsXG4gICAgICAgICAgICAgICAgJ3tub2RlfSB0YXJnZXRFbGVtIC0gVGhlIERPTSBlbGVtZW50IHdlIHdhbnQgdG8gc2Nyb2xsIHRvJyxcbiAgICAgICAgICAgICAgICAne25vZGV9IHNvdXJjZUVsZW0gLSBBbiBgPGE+YCBlbGVtZW50IHdpdGggYW4gaHJlZiB0YXJnZXRpbmcgdGhlIGFuY2hvciB3ZSB3YW50IHRvIHNjcm9sbCB0bydcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgc291cmNlRWxlbSBpcyBnaXZlbiwgZmluZCBhbmQgc3RvcmUgdGhlIHRhcmdldEVsZW0gaXQncyByZWxhdGVkIHRvXG4gICAgICAgIGlmIChzb3VyY2VFbGVtKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0RGF0YSA9ICcnO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzb3VyY2VFbGVtKTtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBzZWxlY3RvciAoZ2l2ZW4gd2l0aCBgZGF0YS10YXJnZXRgIG9yIGBocmVmYCBhdHRyaWJ1dGVzIG9uIHNvdXJjZUVsZW0pXG4gICAgICAgICAgICBsZXQgc291cmNlRWxlbVRhcmdldCA9IHNvdXJjZUVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpXG4gICAgICAgICAgICB0YXJnZXREYXRhID0gc291cmNlRWxlbVRhcmdldCA/IHNvdXJjZUVsZW1UYXJnZXQgOiBzb3VyY2VFbGVtLmdldEF0dHJpYnV0ZSgnaHJlZicpXG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSB0YXJnZXQgZm9yIGxhdGVyXG4gICAgICAgICAgICB0YXJnZXRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXREYXRhKVswXVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgaGF2ZSBhIHRhcmdldEVsZW0sIGdldCBpdCdzIGNvb3JkaW5hdGVzXG4gICAgICAgIGlmICh0YXJnZXRFbGVtKSB7XG4gICAgICAgICAgICAvLyBHZXQgdGFyZ2V0RWxlbSBvZmZzZXQgZnJvbSB0b3BcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEVsZW1CQ1IgPSB0YXJnZXRFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtT2Zmc2V0VG9wID0gdGFyZ2V0RWxlbUJDUi50b3AgKyB0aGlzLiRjb250YWluZXJbMF0uc2Nyb2xsVG9wXG5cbiAgICAgICAgICAgIC8vIFRyeSBhbmQgZmluZCB0aGUgdGFyZ2V0RWxlbSdzIHBhcmVudCBzZWN0aW9uXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRQYXJlbnRzID0gZ2V0UGFyZW50cyh0YXJnZXRFbGVtKVxuICAgICAgICAgICAgY29uc3QgcGFyZW50U2VjdGlvbiA9IHRhcmdldFBhcmVudHMuZmluZChjYW5kaWRhdGUgPT4gdGhpcy5zZWN0aW9ucy5maW5kKHNlY3Rpb24gPT4gc2VjdGlvbi5lbGVtZW50ID09IGNhbmRpZGF0ZSkpXG4gICAgICAgICAgICBsZXQgcGFyZW50U2VjdGlvbk9mZnNldCA9IDBcbiAgICAgICAgICAgIGlmKHBhcmVudFNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRTZWN0aW9uT2Zmc2V0ID0gdGhpcy5nZXRUcmFuc2xhdGUocGFyZW50U2VjdGlvbikueSAvLyBXZSBnb3QgYSBwYXJlbnQgc2VjdGlvbiwgc3RvcmUgaXQncyBjdXJyZW50IG9mZnNldCB0byByZW1vdmUgaXQgbGF0ZXJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmluYWwgdmFsdWUgb2Ygc2Nyb2xsIGRlc3RpbmF0aW9uIDogdGFyZ2V0RWxlbU9mZnNldFRvcCArIChvcHRpb25hbCBvZmZzZXQgZ2l2ZW4gaW4gb3B0aW9ucykgLSAocGFyZW50J3Mgc2VjdGlvbiB0cmFuc2xhdGUpXG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0YXJnZXRFbGVtT2Zmc2V0VG9wICsgdGFyZ2V0T2Zmc2V0IC0gcGFyZW50U2VjdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGhhdmUgYW4gb2Zmc2V0RWxlbSwgZ2V0IGl0cyBoZWlnaHQgYW5kIHJlbW92ZSBpdCBmcm9tIHRhcmdldE9mZnNldCBhbHJlYWR5IGNvbXB1dGVkXG4gICAgICAgIGlmIChvZmZzZXRFbGVtKSB7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gb2Zmc2V0RWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0YXJnZXRPZmZzZXQgLSBvZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSB3YW50IHRvIGdvIHRvIG9uZSBvZiBib3VuZGFyaWVzXG4gICAgICAgIGlmICh0b1RvcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmICh0b0JvdHRvbSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gdGhpcy5pbnN0YW5jZS5saW1pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBhc2tlZCBkZWxheSBpZiBuZWVkZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB0YXJnZXRPZmZzZXQ7IC8vIEFjdHVhbCBzY3JvbGxUbyAodGhlIGxlcnAgd2lsbCBkbyB0aGUgYW5pbWF0aW9uIGl0c2VsZilcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBzY3JvbGwuIElmIHdlIHdlcmUgaW4gaWRsZSBzdGF0ZTogd2UncmUgbm90IGFueW1vcmVcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5jaGVja1Njcm9sbCgpO1xuICAgICAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuaXNTY3JvbGxpbmdDbGFzc05hbWUpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBzY3JvbGwgYmFyIGxpbWl0XG4gICAgICovXG4gICAgc2V0U2Nyb2xsTGltaXQoKSB7XG4gICAgICAgIHRoaXMuaW5zdGFuY2UubGltaXQgPSB0aGlzLiRjb250YWluZXJbMF0ub2Zmc2V0SGVpZ2h0IC0gdGhpcy53aW5kb3dIZWlnaHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgQ1NTIHRyYW5zZm9ybSBwcm9wZXJ0aWVzIG9uIGFuIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9ICBlbGVtZW50ICBUYXJnZXR0ZWQgbm9kZVxuICAgICAqIEBwYXJhbSAge2ludH0gICAgIHggICAgICAgIFRyYW5zbGF0ZSB2YWx1ZVxuICAgICAqIEBwYXJhbSAge2ludH0gICAgIHkgICAgICAgIFRyYW5zbGF0ZSB2YWx1ZVxuICAgICAqIEBwYXJhbSAge2ludH0gICAgIHogICAgICAgIFRyYW5zbGF0ZSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdHJhbnNmb3JtKGVsZW1lbnQsIHgsIHksIGRlbGF5KSB7XG4gICAgICAgIC8vIERlZmF1bHRzXG4gICAgICAgIHggPSBwYXJzZUludCh4KjEwMDAwKS8xMDAwMCB8fCAwO1xuICAgICAgICB5ID0gcGFyc2VJbnQoeSoxMDAwMCkvMTAwMDAgfHwgMDtcblxuICAgICAgICBpZighZGVsYXkpIHtcbiAgICAgICAgICAgIC8vIFRyYW5zbGF0ZSBhbmQgc3RvcmUgdGhlIHBvc2l0aW9ubmluZyBhcyBgZGF0YWBcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGBtYXRyaXgoMSwwLDAsMSwke3h9LCR7eX0pYFxuXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuTW96VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuT1RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2Zvcm0nLGB7XCJ4XCI6ICR7cGFyc2VJbnQoeCl9LFwieVwiOiAke3BhcnNlSW50KHkpfX1gKVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGxldCBzdGFydCA9IHRoaXMuZ2V0VHJhbnNsYXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgbGV0IGxlcnBZID0gbGVycChzdGFydC55LCB5LCBkZWxheSk7XG4gICAgICAgICAgICBsZXQgbGVycFggPSBsZXJwKHN0YXJ0LngsIHgsIGRlbGF5KTtcblxuICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gYG1hdHJpeCgxLDAsMCwxLCR7bGVycFh9LCR7bGVycFl9KWBcblxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLk1velRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLk9UcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNmb3JtJyxge1wieFwiOiAke3BhcnNlSW50KGxlcnBYKX0sXCJ5XCI6ICR7cGFyc2VJbnQobGVycFkpfX1gKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0VHJhbnNsYXRlKGVsKXtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlID0ge31cbiAgICAgICAgaWYoIXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtIHx8IHN0eWxlLndlYmtpdFRyYW5zZm9ybSB8fCBzdHlsZS5tb3pUcmFuc2Zvcm07XG5cbiAgICAgICAgbGV0IG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeDNkXFwoKC4rKVxcKSQvKTtcbiAgICAgICAgaWYobWF0KSByZXR1cm4gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbMTNdKTtcbiAgICAgICAgbWF0ID0gdHJhbnNmb3JtLm1hdGNoKC9ebWF0cml4XFwoKC4rKVxcKSQvKTtcbiAgICAgICAgdHJhbnNsYXRlLnggPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs0XSkgOiAwO1xuICAgICAgICB0cmFuc2xhdGUueSA9IG1hdCA/IHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzVdKSA6IDA7XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb29wIHRocm91Z2ggYWxsIHBhcmFsbGF4LWFibGUgZWxlbWVudHMgYW5kIGFwcGx5IHRyYW5zZm9ybSBtZXRob2QocykuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtib29sZWFufSBpc0ZvcmNlZCBEZXRlcm1pbmVzIGlmIHRoaXMgaXMgYSBmb3JjZWQgcmVxdWVzdCAoZnJvbSBhIG1hbnVhbCBjYWxsIHRvIHVwZGF0ZSBvciBhIHJlc2l6ZSlcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHRyYW5zZm9ybUVsZW1lbnRzKGlzRm9yY2VkKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmFsbGF4RWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQm90dG9tID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSArIHRoaXMud2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsTWlkZGxlID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSArIHRoaXMud2luZG93TWlkZGxlO1xuXG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICBjb25zdCBsZW4gPSB0aGlzLnBhcmFsbGF4RWxlbWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXhlcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1ckVsID0gdGhpcy5wYXJhbGxheEVsZW1lbnRzW2ldO1xuXG4gICAgICAgICAgICAgICAgbGV0IHRyYW5zZm9ybURpc3RhbmNlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyBEZWZpbmUgaWYgdGhlIGVsZW1lbnQgaXMgaW4gdmlld1xuICAgICAgICAgICAgICAgIGxldCBpblZpZXcgPSAoKHNjcm9sbEJvdHRvbSArIHRoaXMud2luZG93SGVpZ2h0KSA+PSBjdXJFbC5vZmZzZXQgJiYgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8PSBjdXJFbC5saW1pdCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQoY3VyRWwsIGkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzRm9yY2VkICYmICFpblZpZXcgJiYgY3VyRWwuc3BlZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGlmZmVyZW50IGNhbGN1bGF0aW9ucyBpZiBpdCBpcyB0aGUgZmlyc3QgY2FsbCBhbmQgdGhlIGl0ZW0gaXMgbm90IGluIHRoZSB2aWV3XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChjdXJFbC5wb3NpdGlvbiAhPT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmKGN1ckVsLiRlbGVtZW50LmF0dHIoJ2RhdGEtbG9nJykpIGNvbnNvbGUubG9nKGAoY3VyRWwub2Zmc2V0ICgke2N1ckVsLm9mZnNldH0pIC0gdGhpcy53aW5kb3dNaWRkbGUgKCR7dGhpcy53aW5kb3dNaWRkbGV9KSAtIGN1ckVsLm1pZGRsZSAoJHtjdXJFbC5taWRkbGV9KSkgKiBjdXJFbC5zcGVlZCAoJHtjdXJFbC5zcGVlZH0pYCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChjdXJFbC5vZmZzZXQgLSB0aGlzLndpbmRvd01pZGRsZSAtIGN1ckVsLm1pZGRsZSkgKiBjdXJFbC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gMFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIGVsZW1lbnQgaXMgaW4gdmlld1xuICAgICAgICAgICAgICAgIGlmIChpblZpZXcgJiYgY3VyRWwuc3BlZWQpIHsgLy98fCAoaXNGb3JjZWQgJiYgIWluVmlldyAmJiBjdXJFbC5zcGVlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjdXJFbC5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKiAtY3VyRWwuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9ICh0aGlzLmluc3RhbmNlLmxpbWl0IC0gc2Nyb2xsQm90dG9tICsgdGhpcy53aW5kb3dIZWlnaHQpICogY3VyRWwuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IChzY3JvbGxNaWRkbGUgLSBjdXJFbC5taWRkbGUpICogLWN1ckVsLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUcmFuc2Zvcm0gaG9yaXpvbnRhbCBPUiB2ZXJ0aWNhbC4gRGVmYXVsdHMgdG8gdmVydGljYWxcbiAgICAgICAgICAgICAgICBpZiAoaXNOdW1lcmljKHRyYW5zZm9ybURpc3RhbmNlKSkge1xuICAgICAgICAgICAgICAgICAgICAoY3VyRWwuaG9yaXpvbnRhbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oY3VyRWwuZWxlbWVudCwgdHJhbnNmb3JtRGlzdGFuY2UsMCwgY3VyRWwuZGVsYXkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKGN1ckVsLmVsZW1lbnQsIDAsIHRyYW5zZm9ybURpc3RhbmNlLCBjdXJFbC5kZWxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGVsZW1lbnRzIGFuZCByZWNhbGN1bGF0ZSBhbGwgdGhlIHBvc2l0aW9ucyBvbiB0aGUgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICB1cGRhdGUob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICB0aGlzLndpbmRvd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7XG4gICAgICAgIHRoaXMud2luZG93TWlkZGxlID0gdGhpcy53aW5kb3dIZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLnNldFNjcm9sbExpbWl0KCk7XG5cbiAgICAgICAgdGhpcy5hZGRTZWN0aW9ucygpO1xuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtRWxlbWVudHModHJ1ZSk7XG4gICAgICAgIHRoaXMucmVpbml0U2Nyb2xsQmFyKCk7XG5cbiAgICB9XG5cbiAgICBwcmVsb2FkSW1hZ2VzKCkge1xuICAgICAgICBjb25zdCBpbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpKVxuXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGltYWdlcy5zcGxpY2UoaW1hZ2VzLmluZGV4T2YoaW1hZ2UpLCAxKVxuICAgICAgICAgICAgICAgIGltYWdlcy5sZW5ndGggPT09IDAgJiYgdGhpcy51cGRhdGUoKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICAgICAgJGh0bWwucmVtb3ZlQ2xhc3MoJ2hhcy1zbW9vdGgtc2Nyb2xsJyk7XG4gICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXJXcmFwcGVyLnJlbW92ZSgpO1xuXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmFmKTtcblxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICAgIHZhciB0aW1lb3V0O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfTtcbn1cbiIsImNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuXG5jb25zdCAkZG9jdW1lbnQgICAgPSAkKGRvY3VtZW50KTtcbmNvbnN0ICR3aW5kb3cgICAgICA9ICQod2luZG93KTtcbmNvbnN0ICRodG1sICAgICAgICA9ICQoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5yZW1vdmVDbGFzcygnaGFzLW5vLWpzJykuYWRkQ2xhc3MoJ2hhcy1qcycpO1xuY29uc3QgJGJvZHkgICAgICAgID0gJChkb2N1bWVudC5ib2R5KTtcbmNvbnN0IGh0bWwgICAgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF07XG5jb25zdCBib2R5ICAgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuXG5jb25zdCBpc0RlYnVnICAgICAgPSAhISRodG1sLmRhdGEoJ2RlYnVnJyk7XG5cbmV4cG9ydCB7IERBVEFfQVBJX0tFWSwgJGRvY3VtZW50LCAkd2luZG93LCAkaHRtbCwgJGJvZHksIGh0bWwsIGlzRGVidWcgfTtcbiIsIi8qKlxuICogQHNlZSAgaHR0cHM6Ly9naXRodWIuY29tL3JhY3RpdmVqcy9yYWN0aXZlL2Jsb2IvZGV2L3NyYy91dGlscy9odG1sLmpzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVIdG1sKHN0cikge1xuICAgIHJldHVybiBzdHJcbiAgICAgICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuXG4vKipcbiAqIFByZXBhcmUgSFRNTCBjb250ZW50IHRoYXQgY29udGFpbnMgbXVzdGFjaGUgY2hhcmFjdGVycyBmb3IgdXNlIHdpdGggUmFjdGl2ZVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuZXNjYXBlSHRtbChzdHIpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKC8mbHQ7L2csICc8JylcbiAgICAgICAgLnJlcGxhY2UoLyZndDsvZywgJz4nKVxuICAgICAgICAucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcbn1cblxuLyoqXG4gKiBHZXQgZWxlbWVudCBkYXRhIGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSAgIHtET01FbGVtZW50fSAgbm9kZVxuICogQHJldHVybiAge0FycmF5fSAgICAgICBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlRGF0YShub2RlKSB7XG4gICAgLy8gQWxsIGF0dHJpYnV0ZXNcbiAgICB2YXIgYXR0cmlidXRlcyA9IG5vZGUuYXR0cmlidXRlcztcblxuICAgIC8vIFJlZ2V4IFBhdHRlcm5cbiAgICB2YXIgcGF0dGVybiA9IC9eZGF0YVxcLSguKykkLztcblxuICAgIC8vIE91dHB1dFxuICAgIHZhciBkYXRhID0ge307XG5cbiAgICBmb3IgKGxldCBpIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2ldKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dHJpYnV0ZXMgbmFtZSAoZXg6IGRhdGEtbW9kdWxlKVxuICAgICAgICBsZXQgbmFtZSA9IGF0dHJpYnV0ZXNbaV0ubmFtZTtcblxuICAgICAgICAvLyBUaGlzIGhhcHBlbnMuXG4gICAgICAgIGlmICghbmFtZSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWF0Y2ggPSBuYW1lLm1hdGNoKHBhdHRlcm4pO1xuICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoaXMgdGhyb3dzIGFuIGVycm9yLCB5b3UgaGF2ZSBzb21lXG4gICAgICAgIC8vIHNlcmlvdXMgcHJvYmxlbXMgaW4geW91ciBIVE1MLlxuICAgICAgICBkYXRhW21hdGNoWzFdXSA9IG5vZGUuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50cyhlbGVtKSB7XG4gICAgLy8gU2V0IHVwIGEgcGFyZW50IGFycmF5XG4gICAgbGV0IHBhcmVudHMgPSBbXTtcblxuICAgIC8vIFB1c2ggZWFjaCBwYXJlbnQgZWxlbWVudCB0byB0aGUgYXJyYXlcbiAgICBmb3IgKCA7IGVsZW0gJiYgZWxlbSAhPT0gZG9jdW1lbnQ7IGVsZW0gPSBlbGVtLnBhcmVudE5vZGUgKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChlbGVtKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gb3VyIHBhcmVudCBhcnJheVxuICAgIHJldHVybiBwYXJlbnRzO1xufVxuXG4vLyBodHRwczovL2dvbWFrZXRoaW5ncy5jb20vaG93LXRvLWdldC10aGUtY2xvc2VzdC1wYXJlbnQtZWxlbWVudC13aXRoLWEtbWF0Y2hpbmctc2VsZWN0b3ItdXNpbmctdmFuaWxsYS1qYXZhc2NyaXB0L1xuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5Q2xvc2VzdFBhcmVudChlbGVtLCBzZWxlY3Rvcikge1xuXG4gICAgLy8gRWxlbWVudC5tYXRjaGVzKCkgcG9seWZpbGxcbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gKHRoaXMuZG9jdW1lbnQgfHwgdGhpcy5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHMpLFxuICAgICAgICAgICAgICAgICAgICBpID0gbWF0Y2hlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwICYmIG1hdGNoZXMuaXRlbShpKSAhPT0gdGhpcykge31cbiAgICAgICAgICAgICAgICByZXR1cm4gaSA+IC0xO1xuICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBHZXQgdGhlIGNsb3Nlc3QgbWF0Y2hpbmcgZWxlbWVudFxuICAgIGZvciAoIDsgZWxlbSAmJiBlbGVtICE9PSBkb2N1bWVudDsgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApIHtcbiAgICAgICAgaWYgKCBlbGVtLm1hdGNoZXMoIHNlbGVjdG9yICkgKSByZXR1cm4gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGFycmF5TGlrZVBhdHRlcm4gPSAvXlxcW29iamVjdCAoPzpBcnJheXxGaWxlTGlzdClcXF0kLztcblxuLy8gdGhhbmtzLCBodHRwOi8vcGVyZmVjdGlvbmtpbGxzLmNvbS9pbnN0YW5jZW9mLWNvbnNpZGVyZWQtaGFybWZ1bC1vci1ob3ctdG8td3JpdGUtYS1yb2J1c3QtaXNhcnJheS9cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5ICggdGhpbmcgKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoIHRoaW5nICkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5TGlrZSAoIG9iaiApIHtcbiAgICByZXR1cm4gYXJyYXlMaWtlUGF0dGVybi50ZXN0KCB0b1N0cmluZy5jYWxsKCBvYmogKSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbCAoIGEsIGIgKSB7XG4gICAgaWYgKCBhID09PSBudWxsICYmIGIgPT09IG51bGwgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICggdHlwZW9mIGEgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBiID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBhID09PSBiO1xufVxuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4MDgyL3ZhbGlkYXRlLW51bWJlcnMtaW4tamF2YXNjcmlwdC1pc251bWVyaWNcbmV4cG9ydCBmdW5jdGlvbiBpc051bWVyaWMgKCB0aGluZyApIHtcbiAgICByZXR1cm4gIWlzTmFOKCBwYXJzZUZsb2F0KCB0aGluZyApICkgJiYgaXNGaW5pdGUoIHRoaW5nICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAoIHRoaW5nICkge1xuICAgIHJldHVybiAoIHRoaW5nICYmIHRvU3RyaW5nLmNhbGwoIHRoaW5nICkgPT09ICdbb2JqZWN0IE9iamVjdF0nICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKCB0aGluZyApIHtcbiAgICB2YXIgZ2V0VHlwZSA9IHt9O1xuICAgIHJldHVybiB0aGluZyAmJiBnZXRUeXBlLnRvU3RyaW5nLmNhbGwodGhpbmcpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxlcnAoc3RhcnQsIGVuZCwgYW10KXtcbiAgICByZXR1cm4gKDEgLSBhbXQpICogc3RhcnQgKyBhbXQgKiBlbmRcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYoIW9iamVjdCkgcmV0dXJuIGNvbnNvbGUud2FybignYmluZEFsbCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQuJyk7XG5cbiAgICB2YXIgZnVuY3Rpb25zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIGlmIChmdW5jdGlvbnMubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgZm9yICh2YXIgbWV0aG9kIGluIG9iamVjdCkge1xuICAgICAgICAgICAgaWYoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIG1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2Ygb2JqZWN0W21ldGhvZF0gPT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKG9iamVjdFttZXRob2RdKSA9PSBcIltvYmplY3QgRnVuY3Rpb25dXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25zLnB1c2gobWV0aG9kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgZnVuY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmID0gZnVuY3Rpb25zW2ldO1xuICAgICAgICBvYmplY3RbZl0gPSBiaW5kKG9iamVjdFtmXSwgb2JqZWN0KTtcbiAgICB9XG59O1xuXG4vKlxuICAgIEZhc3RlciBiaW5kIHdpdGhvdXQgc3BlY2lmaWMtY2FzZSBjaGVja2luZy4gKHNlZSBodHRwczovL2NvZGVyd2FsbC5jb20vcC9vaTNqM3cpLlxuICAgIGJpbmRBbGwgaXMgb25seSBuZWVkZWQgZm9yIGV2ZW50cyBiaW5kaW5nIHNvIG5vIG5lZWQgdG8gbWFrZSBzbG93IGZpeGVzIGZvciBjb25zdHJ1Y3RvclxuICAgIG9yIHBhcnRpYWwgYXBwbGljYXRpb24uXG4qL1xuZnVuY3Rpb24gYmluZChmdW5jLCBjb250ZXh0KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZnVuYy5hcHBseShjb250ZXh0LCBhcmd1bWVudHMpO1xuICB9O1xufSIsIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS45LjJcbihmdW5jdGlvbigpIHtcbiAgdmFyIHJvb3Q7XG5cbiAgcm9vdCA9IHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiICYmIGV4cG9ydHMgIT09IG51bGwgPyBleHBvcnRzIDogdGhpcztcblxuICByb290LkxldGhhcmd5ID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIExldGhhcmd5KHN0YWJpbGl0eSwgc2Vuc2l0aXZpdHksIHRvbGVyYW5jZSwgZGVsYXkpIHtcbiAgICAgIHRoaXMuc3RhYmlsaXR5ID0gc3RhYmlsaXR5ICE9IG51bGwgPyBNYXRoLmFicyhzdGFiaWxpdHkpIDogODtcbiAgICAgIHRoaXMuc2Vuc2l0aXZpdHkgPSBzZW5zaXRpdml0eSAhPSBudWxsID8gMSArIE1hdGguYWJzKHNlbnNpdGl2aXR5KSA6IDEwMDtcbiAgICAgIHRoaXMudG9sZXJhbmNlID0gdG9sZXJhbmNlICE9IG51bGwgPyAxICsgTWF0aC5hYnModG9sZXJhbmNlKSA6IDEuMTtcbiAgICAgIHRoaXMuZGVsYXkgPSBkZWxheSAhPSBudWxsID8gZGVsYXkgOiAxNTA7XG4gICAgICB0aGlzLmxhc3RVcERlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIHJlZiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAxLCByZWYgPSB0aGlzLnN0YWJpbGl0eSAqIDI7IDEgPD0gcmVmID8gaSA8PSByZWYgOiBpID49IHJlZjsgMSA8PSByZWYgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gobnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgbGFzdERlbHRhO1xuICAgICAgZSA9IGUub3JpZ2luYWxFdmVudCB8fCBlO1xuICAgICAgaWYgKGUud2hlZWxEZWx0YSAhPSBudWxsKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUud2hlZWxEZWx0YTtcbiAgICAgIH0gZWxzZSBpZiAoZS5kZWx0YVkgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRlbHRhWSAqIC00MDtcbiAgICAgIH0gZWxzZSBpZiAoKGUuZGV0YWlsICE9IG51bGwpIHx8IGUuZGV0YWlsID09PSAwKSB7XG4gICAgICAgIGxhc3REZWx0YSA9IGUuZGV0YWlsICogLTQwO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWx0YXNUaW1lc3RhbXAucHVzaChEYXRlLm5vdygpKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnNoaWZ0KCk7XG4gICAgICBpZiAobGFzdERlbHRhID4gMCkge1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5wdXNoKGxhc3REZWx0YSk7XG4gICAgICAgIHRoaXMubGFzdFVwRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdERvd25EZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmlzSW5lcnRpYSgtMSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5pc0luZXJ0aWEgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgIHZhciBsYXN0RGVsdGFzLCBsYXN0RGVsdGFzTmV3LCBsYXN0RGVsdGFzT2xkLCBuZXdBdmVyYWdlLCBuZXdTdW0sIG9sZEF2ZXJhZ2UsIG9sZFN1bTtcbiAgICAgIGxhc3REZWx0YXMgPSBkaXJlY3Rpb24gPT09IC0xID8gdGhpcy5sYXN0RG93bkRlbHRhcyA6IHRoaXMubGFzdFVwRGVsdGFzO1xuICAgICAgaWYgKGxhc3REZWx0YXNbMF0gPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRlbHRhc1RpbWVzdGFtcFsodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDJdICsgdGhpcy5kZWxheSA+IERhdGUubm93KCkgJiYgbGFzdERlbHRhc1swXSA9PT0gbGFzdERlbHRhc1sodGhpcy5zdGFiaWxpdHkgKiAyKSAtIDFdKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxhc3REZWx0YXNPbGQgPSBsYXN0RGVsdGFzLnNsaWNlKDAsIHRoaXMuc3RhYmlsaXR5KTtcbiAgICAgIGxhc3REZWx0YXNOZXcgPSBsYXN0RGVsdGFzLnNsaWNlKHRoaXMuc3RhYmlsaXR5LCB0aGlzLnN0YWJpbGl0eSAqIDIpO1xuICAgICAgb2xkU3VtID0gbGFzdERlbHRhc09sZC5yZWR1Y2UoZnVuY3Rpb24odCwgcykge1xuICAgICAgICByZXR1cm4gdCArIHM7XG4gICAgICB9KTtcbiAgICAgIG5ld1N1bSA9IGxhc3REZWx0YXNOZXcucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBvbGRBdmVyYWdlID0gb2xkU3VtIC8gbGFzdERlbHRhc09sZC5sZW5ndGg7XG4gICAgICBuZXdBdmVyYWdlID0gbmV3U3VtIC8gbGFzdERlbHRhc05ldy5sZW5ndGg7XG4gICAgICBpZiAoTWF0aC5hYnMob2xkQXZlcmFnZSkgPCBNYXRoLmFicyhuZXdBdmVyYWdlICogdGhpcy50b2xlcmFuY2UpICYmICh0aGlzLnNlbnNpdGl2aXR5IDwgTWF0aC5hYnMobmV3QXZlcmFnZSkpKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdFVwRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0VXBEZWx0YXM7XG4gICAgfTtcblxuICAgIExldGhhcmd5LnByb3RvdHlwZS5zaG93TGFzdERvd25EZWx0YXMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3REb3duRGVsdGFzO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGV0aGFyZ3k7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJmdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzb3VyY2UpIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzb3VyY2UpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCd0aW55LWVtaXR0ZXInKTtcbnZhciBMZXRoYXJneSA9IHJlcXVpcmUoJ2xldGhhcmd5JykuTGV0aGFyZ3k7XG52YXIgc3VwcG9ydCA9IHJlcXVpcmUoJy4vc3VwcG9ydCcpO1xudmFyIGNsb25lID0gcmVxdWlyZSgnLi9jbG9uZScpO1xudmFyIGJpbmRBbGwgPSByZXF1aXJlKCdiaW5kYWxsLXN0YW5kYWxvbmUnKTtcbnZhciBFVlRfSUQgPSAndmlydHVhbHNjcm9sbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlydHVhbFNjcm9sbDtcblxudmFyIGtleUNvZGVzID0ge1xuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG4gICAgU1BBQ0U6IDMyXG59O1xuXG5mdW5jdGlvbiBWaXJ0dWFsU2Nyb2xsKG9wdGlvbnMpIHtcbiAgICBiaW5kQWxsKHRoaXMsICdfb25XaGVlbCcsICdfb25Nb3VzZVdoZWVsJywgJ19vblRvdWNoU3RhcnQnLCAnX29uVG91Y2hNb3ZlJywgJ19vbktleURvd24nKTtcblxuICAgIHRoaXMuZWwgPSB3aW5kb3c7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5lbCkge1xuICAgICAgICB0aGlzLmVsID0gb3B0aW9ucy5lbDtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZWw7XG4gICAgfVxuICAgIHRoaXMub3B0aW9ucyA9IG9iamVjdEFzc2lnbih7XG4gICAgICAgIG1vdXNlTXVsdGlwbGllcjogMSxcbiAgICAgICAgdG91Y2hNdWx0aXBsaWVyOiAyLFxuICAgICAgICBmaXJlZm94TXVsdGlwbGllcjogMTUsXG4gICAgICAgIGtleVN0ZXA6IDEyMCxcbiAgICAgICAgcHJldmVudFRvdWNoOiBmYWxzZSxcbiAgICAgICAgdW5wcmV2ZW50VG91Y2hDbGFzczogJ3ZzLXRvdWNobW92ZS1hbGxvd2VkJyxcbiAgICAgICAgbGltaXRJbmVydGlhOiBmYWxzZVxuICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEpIHRoaXMuX2xldGhhcmd5ID0gbmV3IExldGhhcmd5KCk7XG5cbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IEVtaXR0ZXIoKTtcbiAgICB0aGlzLl9ldmVudCA9IHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgeDogMCxcbiAgICAgICAgZGVsdGFYOiAwLFxuICAgICAgICBkZWx0YVk6IDBcbiAgICB9O1xuICAgIHRoaXMudG91Y2hTdGFydFggPSBudWxsO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSBudWxsO1xuICAgIHRoaXMuYm9keVRvdWNoQWN0aW9uID0gbnVsbDtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucGFzc2l2ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJPcHRpb25zID0ge3Bhc3NpdmU6IHRoaXMub3B0aW9ucy5wYXNzaXZlfTtcbiAgICB9XG59XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9ub3RpZnkgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC54ICs9IGV2dC5kZWx0YVg7XG4gICAgZXZ0LnkgKz0gZXZ0LmRlbHRhWTtcblxuICAgdGhpcy5fZW1pdHRlci5lbWl0KEVWVF9JRCwge1xuICAgICAgICB4OiBldnQueCxcbiAgICAgICAgeTogZXZ0LnksXG4gICAgICAgIGRlbHRhWDogZXZ0LmRlbHRhWCxcbiAgICAgICAgZGVsdGFZOiBldnQuZGVsdGFZLFxuICAgICAgICBvcmlnaW5hbEV2ZW50OiBlXG4gICB9KTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbldoZWVsID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmICh0aGlzLl9sZXRoYXJneSAmJiB0aGlzLl9sZXRoYXJneS5jaGVjayhlKSA9PT0gZmFsc2UpIHJldHVybjtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICAvLyBJbiBDaHJvbWUgYW5kIGluIEZpcmVmb3ggKGF0IGxlYXN0IHRoZSBuZXcgb25lKVxuICAgIGV2dC5kZWx0YVggPSBlLndoZWVsRGVsdGFYIHx8IGUuZGVsdGFYICogLTE7XG4gICAgZXZ0LmRlbHRhWSA9IGUud2hlZWxEZWx0YVkgfHwgZS5kZWx0YVkgKiAtMTtcblxuICAgIC8vIGZvciBvdXIgcHVycG9zZSBkZWx0YW1vZGUgPSAxIG1lYW5zIHVzZXIgaXMgb24gYSB3aGVlbCBtb3VzZSwgbm90IHRvdWNoIHBhZFxuICAgIC8vIHJlYWwgbWVhbmluZzogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1doZWVsRXZlbnQjRGVsdGFfbW9kZXNcbiAgICBpZihzdXBwb3J0LmlzRmlyZWZveCAmJiBlLmRlbHRhTW9kZSA9PSAxKSB7XG4gICAgICAgIGV2dC5kZWx0YVggKj0gb3B0aW9ucy5maXJlZm94TXVsdGlwbGllcjtcbiAgICAgICAgZXZ0LmRlbHRhWSAqPSBvcHRpb25zLmZpcmVmb3hNdWx0aXBsaWVyO1xuICAgIH1cblxuICAgIGV2dC5kZWx0YVggKj0gb3B0aW9ucy5tb3VzZU11bHRpcGxpZXI7XG4gICAgZXZ0LmRlbHRhWSAqPSBvcHRpb25zLm1vdXNlTXVsdGlwbGllcjtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbk1vdXNlV2hlZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdEluZXJ0aWEgJiYgdGhpcy5fbGV0aGFyZ3kuY2hlY2soZSkgPT09IGZhbHNlKSByZXR1cm47XG5cbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG5cbiAgICAvLyBJbiBTYWZhcmksIElFIGFuZCBpbiBDaHJvbWUgaWYgJ3doZWVsJyBpc24ndCBkZWZpbmVkXG4gICAgZXZ0LmRlbHRhWCA9IChlLndoZWVsRGVsdGFYKSA/IGUud2hlZWxEZWx0YVggOiAwO1xuICAgIGV2dC5kZWx0YVkgPSAoZS53aGVlbERlbHRhWSkgPyBlLndoZWVsRGVsdGFZIDogZS53aGVlbERlbHRhO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uVG91Y2hTdGFydCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdCA9IChlLnRhcmdldFRvdWNoZXMpID8gZS50YXJnZXRUb3VjaGVzWzBdIDogZTtcbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gdC5wYWdlWDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gdC5wYWdlWTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vblRvdWNoTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICBpZihvcHRpb25zLnByZXZlbnRUb3VjaFxuICAgICAgICAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKG9wdGlvbnMudW5wcmV2ZW50VG91Y2hDbGFzcykpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIHZhciB0ID0gKGUudGFyZ2V0VG91Y2hlcykgPyBlLnRhcmdldFRvdWNoZXNbMF0gOiBlO1xuXG4gICAgZXZ0LmRlbHRhWCA9ICh0LnBhZ2VYIC0gdGhpcy50b3VjaFN0YXJ0WCkgKiBvcHRpb25zLnRvdWNoTXVsdGlwbGllcjtcbiAgICBldnQuZGVsdGFZID0gKHQucGFnZVkgLSB0aGlzLnRvdWNoU3RhcnRZKSAqIG9wdGlvbnMudG91Y2hNdWx0aXBsaWVyO1xuXG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IHQucGFnZVg7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IHQucGFnZVk7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25LZXlEb3duID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcbiAgICBldnQuZGVsdGFYID0gZXZ0LmRlbHRhWSA9IDA7XG4gICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDQwXG5cbiAgICBzd2l0Y2goZS5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuTEVGVDpcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5VUDpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSB0aGlzLm9wdGlvbnMua2V5U3RlcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Uga2V5Q29kZXMuUklHSFQ6XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuRE9XTjpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSAtIHRoaXMub3B0aW9ucy5rZXlTdGVwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2Uga2V5Q29kZXMuU1BBQ0UgJiYgZS5zaGlmdEtleTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5TUEFDRTpcbiAgICAgICAgICAgIGV2dC5kZWx0YVkgPSAtIHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9iaW5kID0gZnVuY3Rpb24oKSB7XG4gICAgaWYoc3VwcG9ydC5oYXNXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5fb25XaGVlbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgIGlmKHN1cHBvcnQuaGFzTW91c2VXaGVlbEV2ZW50KSB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLl9vbk1vdXNlV2hlZWwsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcblxuICAgIGlmKHN1cHBvcnQuaGFzVG91Y2gpIHtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0LCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc1BvaW50ZXIgJiYgc3VwcG9ydC5oYXNUb3VjaFdpbikge1xuICAgICAgICB0aGlzLmJvZHlUb3VjaEFjdGlvbiA9IGRvY3VtZW50LmJvZHkuc3R5bGUubXNUb3VjaEFjdGlvbjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckRvd24nLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRydWUpO1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlck1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNLZXlEb3duKSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl91bmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzdXBwb3J0Lmhhc1doZWVsRXZlbnQpIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vbldoZWVsKTtcbiAgICBpZihzdXBwb3J0Lmhhc01vdXNlV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5fb25Nb3VzZVdoZWVsKTtcblxuICAgIGlmKHN1cHBvcnQuaGFzVG91Y2gpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNQb2ludGVyICYmIHN1cHBvcnQuaGFzVG91Y2hXaW4pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gdGhpcy5ib2R5VG91Y2hBY3Rpb247XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyRG93bicsIHRoaXMuX29uVG91Y2hTdGFydCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc0tleURvd24pIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleURvd24pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihjYiwgY3R4KSB7XG4gIHRoaXMuX2VtaXR0ZXIub24oRVZUX0lELCBjYiwgY3R4KTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZW1pdHRlci5lO1xuICBpZiAoZXZlbnRzICYmIGV2ZW50c1tFVlRfSURdICYmIGV2ZW50c1tFVlRfSURdLmxlbmd0aCA9PT0gMSkgdGhpcy5fYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICB0aGlzLl9lbWl0dGVyLm9mZihFVlRfSUQsIGNiLCBjdHgpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9lbWl0dGVyLmU7XG4gIGlmICghZXZlbnRzW0VWVF9JRF0gfHwgZXZlbnRzW0VWVF9JRF0ubGVuZ3RoIDw9IDApIHRoaXMuX3VuYmluZCgpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LnggPSAwO1xuICAgIGV2dC55ID0gMDtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9mZigpO1xuICAgIHRoaXMuX3VuYmluZCgpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gZ2V0U3VwcG9ydCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYXNXaGVlbEV2ZW50OiAnb253aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc01vdXNlV2hlZWxFdmVudDogJ29ubW91c2V3aGVlbCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc1RvdWNoOiAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudCxcbiAgICAgICAgaGFzVG91Y2hXaW46IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzICYmIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMSxcbiAgICAgICAgaGFzUG9pbnRlcjogISF3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQsXG4gICAgICAgIGhhc0tleURvd246ICdvbmtleWRvd24nIGluIGRvY3VtZW50LFxuICAgICAgICBpc0ZpcmVmb3g6IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID4gLTFcbiAgICB9O1xufSkoKTtcbiJdfQ==
