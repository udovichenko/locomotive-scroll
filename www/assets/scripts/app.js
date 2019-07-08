(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _ScrollManager = _interopRequireDefault(require("./scroll/vendors/ScrollManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ==========================================================================
// App
// ==========================================================================

/* jshint esnext: true */
(function () {
  // Init Locomotive Scroll
  var smoothScroll = new _ScrollManager.default({
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
exports.default = exports.DEFAULTS = exports.EVENT = exports.EVENT_KEY = void 0;

var _Scroll2 = _interopRequireWildcard(require("./vendors/Scroll"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
}(_Scroll2.default);

exports.default = _default;

},{"./vendors/Scroll":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _SmoothScroll2 = _interopRequireDefault(require("./vendors/SmoothScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
}(_SmoothScroll2.default);

exports.default = _default;

},{"./vendors/SmoothScroll":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DEFAULTS = exports.EVENT = exports.EVENT_KEY = void 0;

var _environment = require("../../utils/environment");

var _debounce = _interopRequireDefault(require("../../utils/debounce"));

var _is = require("../../utils/is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


      _environment.$window.on(EVENT.RESIZE, (0, _debounce.default)(function () {
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

        if (!elementInViewClass) {
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
        } else {
          if (element.repeat) {
            if (element.element.classList.contains(element.inViewClass)) {
              element.element.classList.remove(element.inViewClass);
              this.triggerCallback(element, 'leave');
            }
          }
        }

        if (element.sticky) {
          var transformDistance;

          if (inView) {
            transformDistance = this.instance.scroll.y - element.offset;
          } else {
            if (this.instance.scroll.y < element.offset) {
              transformDistance = 0;
            }

            if (this.instance.scroll.y > element.limit) {
              transformDistance = element.limit - element.offset;
            }
          }

          if (element.transformDistance != transformDistance) {
            element.transformDistance = transformDistance;
            var transformValue = "translate3d(0, ".concat(transformDistance, "px, 0)");
            element.element.style.webkitTransform = transformValue;
            element.element.style.MozTransform = transformValue;
            element.element.style.msTransform = transformValue;
            element.element.style.OTransform = transformValue;
            element.element.style.transform = transformValue;
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
        $(element.element).trigger({
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

exports.default = _default;

},{"../../utils/debounce":7,"../../utils/environment":8,"../../utils/is":10}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _environment = require("../../utils/environment");

var _Scroll = _interopRequireWildcard(require("../Scroll"));

var _SmoothScroll = _interopRequireDefault(require("../SmoothScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
          return new _SmoothScroll.default(_this.options);
        } else {
          if (_this.mobileContainer) {
            _this.options.container = _this.mobileContainer;
          }

          return new _Scroll.default(_this.options);
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

exports.default = _default;

},{"../../utils/environment":8,"../Scroll":2,"../SmoothScroll":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _environment = require("../../utils/environment");

var _Scroll2 = _interopRequireWildcard(require("../Scroll"));

var _html = require("../../utils/html");

var _maths = require("../../utils/maths");

var _debounce = _interopRequireDefault(require("../../utils/debounce"));

var _virtualScroll = _interopRequireDefault(require("virtual-scroll"));

var _is = require("../../utils/is");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
      this.instance = new _virtualScroll.default({
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


      _environment.$window.on(_Scroll2.EVENT.RESIZE, (0, _debounce.default)(function () {
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

        if (this.instance.scroll.y > offset && this.instance.scroll.y < limit) {
          inView = true;
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
}(_Scroll2.default);

exports.default = _default;

},{"../../utils/debounce":7,"../../utils/environment":8,"../../utils/html":9,"../../utils/is":10,"../../utils/maths":11,"../Scroll":2,"virtual-scroll":17}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9hcHAuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvU2Nyb2xsLmpzIiwiYXNzZXRzL3NjcmlwdHMvc2Nyb2xsL1Ntb290aFNjcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbC5qcyIsImFzc2V0cy9zY3JpcHRzL3Njcm9sbC92ZW5kb3JzL1Njcm9sbE1hbmFnZXIuanMiLCJhc3NldHMvc2NyaXB0cy9zY3JvbGwvdmVuZG9ycy9TbW9vdGhTY3JvbGwuanMiLCJhc3NldHMvc2NyaXB0cy91dGlscy9kZWJvdW5jZS5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2Vudmlyb25tZW50LmpzIiwiYXNzZXRzL3NjcmlwdHMvdXRpbHMvaHRtbC5qcyIsImFzc2V0cy9zY3JpcHRzL3V0aWxzL2lzLmpzIiwiYXNzZXRzL3NjcmlwdHMvdXRpbHMvbWF0aHMuanMiLCJub2RlX21vZHVsZXMvYmluZGFsbC1zdGFuZGFsb25lL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2xldGhhcmd5L2xldGhhcmd5LmpzIiwibm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL3NyYy9jbG9uZS5qcyIsIm5vZGVfbW9kdWxlcy92aXJ0dWFsLXNjcm9sbC9zcmMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvc3JjL3N1cHBvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0lBOzs7O0FBSkE7QUFDQTtBQUNBOztBQUNBO0FBR0EsQ0FBQyxZQUFXO0FBRVI7QUFDQSxNQUFNLFlBQVksR0FBRyxJQUFJLHNCQUFKLENBQWtCO0FBQ25DLElBQUEsU0FBUyxFQUFFLENBQUMsQ0FBQyxZ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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBcHBcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgU2Nyb2xsTWFuYWdlciBmcm9tICcuL3Njcm9sbC92ZW5kb3JzL1Njcm9sbE1hbmFnZXInO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBJbml0IExvY29tb3RpdmUgU2Nyb2xsXG4gICAgY29uc3Qgc21vb3RoU2Nyb2xsID0gbmV3IFNjcm9sbE1hbmFnZXIoe1xuICAgICAgICBjb250YWluZXI6ICQoJyNqcy1zY3JvbGwnKSxcbiAgICAgICAgc2VjdGlvbnM6ICcuanMtc2VjdGlvbicsXG4gICAgICAgIHNlbGVjdG9yOiAnLmpzLWFuaW1hdGUnLFxuICAgICAgICBzbW9vdGg6IHRydWUsXG4gICAgICAgIHNtb290aE1vYmlsZTogZmFsc2UsXG4gICAgICAgIG1vYmlsZUNvbnRhaW5lcjogJChkb2N1bWVudC5ib2R5KSxcbiAgICAgICAgZ2V0RGlyZWN0aW9uOiB0cnVlLFxuICAgICAgICBnZXRTcGVlZDogdHJ1ZSxcbiAgICAgICAgaW5lcnRpYTogMSxcbiAgICAgICAgc2Nyb2xsQmFyQ2xhc3NOYW1lOiAnby1zY3JvbGxiYXInLFxuICAgICAgICBpc1Njcm9sbGluZ0NsYXNzTmFtZTogJ2lzLXNjcm9sbGluZycsXG4gICAgICAgIG9uU2Nyb2xsOiAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS5zY3JvbGwueSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoKTtcbiIsIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBFeHRlbmRlZCBMb2NvbW90aXZlIFNjcm9sbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCBTY3JvbGwsIHsgRVZFTlRfS0VZIGFzIFZFTkRPUl9FVkVOVF9LRVksIEVWRU5UIGFzIFZFTkRPUl9FVkVOVFMsIERFRkFVTFRTIGFzIFZFTkRPUl9ERUZBVUxUUyB9IGZyb20gJy4vdmVuZG9ycy9TY3JvbGwnXG5cbi8qKlxuICogVU5DT01NRU5UIE9OTFkgVEhFIExJTkVTIFlPVSBORUVEXG4gKi9cbi8vIGltcG9ydCB7ICR3aW5kb3csICRkb2N1bWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2Vudmlyb25tZW50Jztcbi8vIGltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZSc7XG4vLyBpbXBvcnQgeyBpc051bWVyaWMgfSBmcm9tICcuLi8uLi91dGlscy9pcyc7XG5cbmV4cG9ydCBjb25zdCBFVkVOVF9LRVkgPSBWRU5ET1JfRVZFTlRfS0VZO1xuXG5leHBvcnQgY29uc3QgRVZFTlQgPSBPYmplY3QuYXNzaWduKFZFTkRPUl9FVkVOVFMsIHtcbiAgICAvLyBURVNUOiBgdGVzdC4ke0VWRU5UX0tFWX1gXG59KTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRTID0gT2JqZWN0LmFzc2lnbihWRU5ET1JfREVGQVVMVFMsIHsgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEV4dGVuZGVkIExvY29tb3RpdmUgU21vb3RoIFNjcm9sbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCBTbW9vdGhTY3JvbGwgZnJvbSAnLi92ZW5kb3JzL1Ntb290aFNjcm9sbCdcblxuLyoqXG4gKiBVTkNPTU1FTlQgT05MWSBUSEUgTElORVMgWU9VIE5FRURcbiAqL1xuLy8gaW1wb3J0IHsgJHdpbmRvdywgJGRvY3VtZW50LCAkaHRtbCB9IGZyb20gJy4uL3V0aWxzL2Vudmlyb25tZW50Jztcbi8vIGltcG9ydCBTY3JvbGwsIHsgREVGQVVMVFMsIEVWRU5UIH0gZnJvbSAnLi9TY3JvbGwnO1xuXG4vLyBpbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vdXRpbHMvZGVib3VuY2UnO1xuLy8gaW1wb3J0IFNjcm9sbGJhciBmcm9tICdzbW9vdGgtc2Nyb2xsYmFyJztcbi8vIGltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4uL3V0aWxzL2lzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBTbW9vdGhTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucylcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jb21vdGl2ZSBTY3JvbGxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vKiBqc2hpbnQgZXNuZXh0OiB0cnVlICovXG5pbXBvcnQgeyAkd2luZG93LCAkZG9jdW1lbnQsICRib2R5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMnO1xuXG5leHBvcnQgY29uc3QgRVZFTlRfS0VZID0gYExvY29tb3RpdmVTY3JvbGxgO1xuXG5leHBvcnQgY29uc3QgRVZFTlQgPSB7XG4gICAgQ0xJQ0s6IGBjbGljay4ke0VWRU5UX0tFWX1gLFxuICAgIElTUkVBRFk6IGBpc1JlYWR5LiR7RVZFTlRfS0VZfWAsXG4gICAgUkVCVUlMRDogYHJlYnVpbGQuJHtFVkVOVF9LRVl9YCxcbiAgICBSRU5ERVI6IGByZW5kZXIuJHtFVkVOVF9LRVl9YCxcbiAgICBSRVNJWkU6IGByZXNpemUuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTEw6IGBzY3JvbGwuJHtFVkVOVF9LRVl9YCxcbiAgICBTQ1JPTExUTzogYHNjcm9sbFRvLiR7RVZFTlRfS0VZfWAsXG4gICAgVVBEQVRFOiBgdXBkYXRlLiR7RVZFTlRfS0VZfWBcbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUUyA9IHtcbiAgICBjb250YWluZXI6ICRib2R5LFxuICAgIHNlY3Rpb25zOiAnLmpzLXNlY3Rpb24nLFxuICAgIG1vYmlsZUNvbnRhaW5lcjogJGJvZHksXG4gICAgb25TY3JvbGw6IGZ1bmN0aW9uKCl7fSxcbiAgICBzZWxlY3RvcjogJy5qcy1hbmltYXRlJyxcbiAgICBzbW9vdGg6IGZhbHNlLFxuICAgIHNtb290aE1vYmlsZTogZmFsc2UsXG4gICAgcmV2ZXJzZWQ6IGZhbHNlLFxuICAgIGdldERpcmVjdGlvbjogZmFsc2UsXG4gICAgZ2V0U3BlZWQ6IGZhbHNlLFxuICAgIHNjcm9sbEJhckNsYXNzTmFtZTogJ28tc2Nyb2xsYmFyJyxcbiAgICBpc1Njcm9sbGluZ0NsYXNzTmFtZTogJ2lzLXNjcm9sbGluZycsXG4gICAgaXNEcmFnZ2luZ0NsYXNzTmFtZTogJ2lzLWRyYWdnaW5nJ1xufTtcblxuLyoqXG4gKiBNYW5hZ2UgYW5pbWF0aW9uIG9mIGVsZW1lbnRzIG9uIHRoZSBwYWdlIGFjY29yZGluZyB0byBzY3JvbGwgcG9zaXRpb24uXG4gKlxuICogQHRvZG8gIE1hbmFnZSBzb21lIG9wdGlvbnMgKG5vcm1hbGx5IGZyb20gZGF0YSBhdHRyaWJ1dGVzKSB3aXRoIGNvbnN0cnVjdG9yIG9wdGlvbnMgKGV4Ljogc2V0IHJlcGVhdCBmb3IgYWxsKVxuICogQHRvZG8gIE1ldGhvZCB0byBnZXQgdGhlIGRpc3RhbmNlIChhcyBwZXJjZW50YWdlKSBvZiBhbiBlbGVtZW50IGluIHRoZSB2aWV3cG9ydFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lciA9IChvcHRpb25zLmNvbnRhaW5lcikgPyBvcHRpb25zLmNvbnRhaW5lciA6IERFRkFVTFRTLmNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5zZWxlY3RvciA9IChvcHRpb25zLnNlbGVjdG9yKSA/IG9wdGlvbnMuc2VsZWN0b3IgOiBERUZBVUxUUy5zZWxlY3RvcjtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IHtcbiAgICAgICAgICAgIG9uU2Nyb2xsOiB0eXBlb2Ygb3B0aW9ucy5vblNjcm9sbCA9PT0gJ2Z1bmN0aW9uJyA/IG9wdGlvbnMub25TY3JvbGwgOiBERUZBVUxUUy5vblNjcm9sbFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSB7XG4gICAgICAgICAgICBzY3JvbGw6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xuICAgICAgICB0aGlzLndpbmRvd01pZGRsZSA9IHRoaXMud2luZG93SGVpZ2h0IC8gMjtcblxuICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMgPSBbXTtcblxuICAgICAgICB0aGlzLnJlcXVlc3RJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHNjcm9sbGluZyBhbmltYXRpb25zXG4gICAgICovXG4gICAgaW5pdCgpIHtcblxuICAgICAgICB0aGlzLmFkZEVsZW1lbnRzKCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICAvLyBPbiBzY3JvbGxcbiAgICAgICAgJGRvY3VtZW50Lm9uKEVWRU5ULlNDUk9MTCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmVidWlsZCBldmVudFxuICAgICAgICAkZG9jdW1lbnQub24oRVZFTlQuUkVCVUlMRCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGV2ZW50XG4gICAgICAgICRkb2N1bWVudC5vbihFVkVOVC5VUERBVEUsIChldmVudCwgb3B0aW9ucykgPT4gdGhpcy51cGRhdGUob3B0aW9ucykpO1xuXG4gICAgICAgIC8vIFJlbmRlciBldmVudFxuICAgICAgICAkZG9jdW1lbnQub24oRVZFTlQuUkVOREVSLCAoKSA9PiB0aGlzLnJlbmRlcigpKTtcblxuICAgICAgICAvLyBTY3JvbGx0byBidXR0b24gZXZlbnRcbiAgICAgICAgJGRvY3VtZW50Lm9uKEVWRU5ULkNMSUNLLCAnLmpzLXNjcm9sbHRvJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICBzb3VyY2VFbGVtOiBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgICAgICAgIG9mZnNldEVsZW06IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLW9mZnNldCcpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgICRkb2N1bWVudC5vbihFVkVOVC5TQ1JPTExUTywgKGV2ZW50KSA9PiB0aGlzLnNjcm9sbFRvKGV2ZW50Lm9wdGlvbnMpKTtcblxuICAgICAgICAvLyBTZXR1cCBkb25lXG4gICAgICAgICRkb2N1bWVudC50cmlnZ2VySGFuZGxlcih7XG4gICAgICAgICAgICB0eXBlOiBFVkVOVC5JU1JFQURZXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlc2l6ZSBldmVudFxuICAgICAgICAkd2luZG93Lm9uKEVWRU5ULlJFU0laRSwgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgICB9LCAyMCkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBhbGwgYW5pbWF0YWJsZSBlbGVtZW50cy5cbiAgICAgKiBDYWxsZWQgb24gcGFnZSBsb2FkIGFuZCBhbnkgc3Vic2VxdWVudCB1cGRhdGVzLlxuICAgICAqL1xuICAgIGFkZEVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMgPSBbXTtcblxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGxlbiA9IGVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpICsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYXJnZXQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50UG9zaXRpb24gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpO1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IChlbGVtZW50VGFyZ2V0ICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudFRhcmdldCkubGVuZ3RoKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudFRhcmdldCkgOiBlbGVtZW50O1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRPZmZzZXQgPSBwYXJzZUludCh0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSk7XG4gICAgICAgICAgICBsZXQgZWxlbWVudExpbWl0ID0gZWxlbWVudE9mZnNldCArIHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBsZXQgZWxlbWVudFN0aWNreSA9ICh0eXBlb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RpY2t5JykgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgICAgIGxldCBlbGVtZW50U3RpY2t5VGFyZ2V0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RpY2t5LXRhcmdldCcpO1xuXG4gICAgICAgICAgICBsZXQgZWxlbWVudFZpZXdwb3J0T2Zmc2V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS12aWV3cG9ydC1vZmZzZXQnKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgIGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXdwb3J0LW9mZnNldCcpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL01hbmFnZSBjYWxsYmFja1xuICAgICAgICAgICAgbGV0IGVsZW1lbnRDYWxsYmFja1N0cmluZyA9ICh0eXBlb2YgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKSA9PT0gJ3N0cmluZycpID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FsbGJhY2snKSA6IG51bGw7XG4gICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICAgICAgaWYoZWxlbWVudENhbGxiYWNrU3RyaW5nICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBldmVudCA9IGVsZW1lbnRDYWxsYmFja1N0cmluZy5zdWJzdHIoMCwgZWxlbWVudENhbGxiYWNrU3RyaW5nLmluZGV4T2YoJygnKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnNTdHJpbmcgPSBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuc3Vic3RyKGVsZW1lbnRDYWxsYmFja1N0cmluZy5pbmRleE9mKCcoJyksZWxlbWVudENhbGxiYWNrU3RyaW5nLmxlbmd0aCAtIGV2ZW50Lmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcoJywnJyk7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1N0cmluZyA9IG9wdGlvbnNTdHJpbmcucmVwbGFjZSgnKScsJycpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBvcHRpb25zU3RyaW5nLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge307XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9wdGlvbnMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uc1tqXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25bMF0gPSBvcHRpb25bMF0ucmVwbGFjZSgnICcsJycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWw7XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBib29sZWFuXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvblsxXSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihvcHRpb25bMV0gPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBudW1lcmljXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoL15cXGQrJC8udGVzdChvcHRpb25bMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBwYXJzZUludChvcHRpb25bMV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBTdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBvcHRpb25bMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2JqW29wdGlvblswXV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudENhbGxiYWNrID0ge2V2ZW50OmV2ZW50LCBvcHRpb25zOm9ian07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIGVsZW1lbnRzIGxvc2VzIGl0cyBhbmltYXRpb24gYWZ0ZXIgc2Nyb2xsaW5nIHBhc3QgaXRcbiAgICAgICAgICAgIGxldCBlbGVtZW50UmVwZWF0ID0gKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1yZXBlYXQnKSA9PT0gJ3N0cmluZycpO1xuXG4gICAgICAgICAgICBsZXQgZWxlbWVudEluVmlld0NsYXNzID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW52aWV3LWNsYXNzJyk7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnRJblZpZXdDbGFzcykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRJblZpZXdDbGFzcyA9ICdpcy1zaG93JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRTdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnRTdGlja3lUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gdGhpcy4kY29udGFpbmVyWzBdLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGlja3lUYXJnZXRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbWVudFN0aWNreVRhcmdldClbMF1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RpY2t5VGFyZ2V0QkNSID0gc3RpY2t5VGFyZ2V0RWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gc3RpY2t5VGFyZ2V0QkNSLnRvcCArIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIC0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgb2Zmc2V0XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnRJblZpZXdDbGFzcyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy11bnN0dWNrJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1WYWx1ZSA9ICd0cmFuc2xhdGUzZCgwLCAwLCAwKSdcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuTW96VHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuT1RyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtVmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERvbid0IGFkZCBlbGVtZW50IGlmIGl0IGFscmVhZHkgaGFzIGl0cyBpbnZpZXcgY2xhc3MgYW5kIGRvZXNuJ3QgcmVwZWF0XG4gICAgICAgICAgICBpZiAoZWxlbWVudFJlcGVhdCB8fCAhZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoZWxlbWVudEluVmlld0NsYXNzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50c1tpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQ6ICQoZWxlbWVudCksIC8vIFRFTVBPUkFSWVxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IE1hdGgucm91bmQoZWxlbWVudE9mZnNldCksXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdDogZWxlbWVudFJlcGVhdCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGVsZW1lbnRQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGVsZW1lbnRMaW1pdCxcbiAgICAgICAgICAgICAgICAgICAgaW5WaWV3Q2xhc3M6IGVsZW1lbnRJblZpZXdDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgc3RpY2t5OiBlbGVtZW50U3RpY2t5LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZWxlbWVudENhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydE9mZnNldDogZWxlbWVudFZpZXdwb3J0T2Zmc2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvb3AgdGhyb3VnaCBhbGwgYW5pbWF0YWJsZSBlbGVtZW50cyBhbmQgYXBwbHkgYW5pbWF0aW9uIG1ldGhvZChzKS5cbiAgICAgKi9cbiAgICBhbmltYXRlRWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IGxlbiA9IHRoaXMuYW5pbWF0ZWRFbGVtZW50cy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ZXMgPSBbXTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuYW5pbWF0ZWRFbGVtZW50c1tpXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQncyB2aXNpYmlsaXR5IG11c3Qgbm90IGJlIG1hbmlwdWxhdGVkIGFueSBmdXJ0aGVyLCByZW1vdmUgaXQgZnJvbSB0aGUgbGlzdFxuICAgICAgICAgICAgaWYgKHRoaXMudG9nZ2xlRWxlbWVudChlbGVtZW50LCBpKSkge1xuICAgICAgICAgICAgICAgIHJlbW92ZUluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbmltYXRlZCBlbGVtZW50cyBhZnRlciBsb29waW5nIHRocm91Z2ggZWxlbWVudHNcbiAgICAgICAgaSA9IHJlbW92ZUluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMuc3BsaWNlKHJlbW92ZUluZGV4ZXNbaV0sIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBjbGFzcyBhbmltYXRpb25zLCBhbmQgdXBkYXRlIHRoZSBnbG9iYWwgc2Nyb2xsIHBvc2l0aW9ubmluZy5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0gZWxzZSBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiAhPT0gJ3VwJykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSAhPT0gd2luZG93LnBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC54ICE9PSB3aW5kb3cucGFnZVhPZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnggPSB3aW5kb3cucGFnZVhPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhbGxiYWNrcy5vblNjcm9sbCh0aGlzLnNjcm9sbClcblxuICAgICAgICB0aGlzLmFuaW1hdGVFbGVtZW50cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRvZ2dsZSBjbGFzc2VzIG9uIGFuIGVsZW1lbnQgaWYgaXQncyB2aXNpYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgICAgIGVsZW1lbnQgQ3VycmVudCBlbGVtZW50IHRvIHRlc3RcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICAgICAgaW5kZXggICBJbmRleCBvZiB0aGUgZWxlbWVudCB3aXRoaW4gaXQncyBjb250YWluZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAgICAgICBXZXRoZXIgdGhlIGl0ZW0gbXVzdCBiZSByZW1vdmVkIGZyb20gaXRzIGNvbnRhaW5lclxuICAgICAqL1xuICAgIHRvZ2dsZUVsZW1lbnQoZWxlbWVudCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHJlbW92ZUZyb21Db250YWluZXIgPSBmYWxzZTtcblxuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBib3R0b20gZWRnZSBvZiB0aGUgc2Nyb2xsIGNvbnRhaW5lclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHNjcm9sbFRvcCArIHRoaXMud2luZG93SGVpZ2h0O1xuXG4gICAgICAgICAgICAvLyBEZWZpbmUgaWYgdGhlIGVsZW1lbnQgaXMgaW5WaWV3XG4gICAgICAgICAgICBsZXQgaW5WaWV3ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxUb3AgPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnBvc2l0aW9uID09PSAnYmVsb3cnKSB7XG4gICAgICAgICAgICAgICAgaW5WaWV3ID0gKHNjcm9sbFRvcCA+IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnN0aWNreSkge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxUb3AgPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfWVsc2UgaWYoZWxlbWVudC52aWV3cG9ydE9mZnNldCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LnZpZXdwb3J0T2Zmc2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbFZpZXdwb3J0T2Zmc2V0VG9wID0gc2Nyb2xsVG9wICsgKHRoaXMud2luZG93SGVpZ2h0ICogZWxlbWVudC52aWV3cG9ydE9mZnNldFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzY3JvbGxWaWV3cG9ydE9mZnNldEJvdHRvbSA9IHNjcm9sbEJvdHRvbSAtICh0aGlzLndpbmRvd0hlaWdodCAqIGVsZW1lbnQudmlld3BvcnRPZmZzZXRbMF0pO1xuICAgICAgICAgICAgICAgICAgICBpblZpZXcgPSAoc2Nyb2xsVmlld3BvcnRPZmZzZXRCb3R0b20gPiBlbGVtZW50Lm9mZnNldCAmJiBzY3JvbGxWaWV3cG9ydE9mZnNldFRvcCA8IGVsZW1lbnQubGltaXQpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjcm9sbFZpZXdwb3J0T2Zmc2V0ID0gc2Nyb2xsQm90dG9tIC0gKHRoaXMud2luZG93SGVpZ2h0ICogZWxlbWVudC52aWV3cG9ydE9mZnNldFswXSk7XG4gICAgICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxWaWV3cG9ydE9mZnNldCA+IGVsZW1lbnQub2Zmc2V0ICYmIHNjcm9sbFZpZXdwb3J0T2Zmc2V0IDwgZWxlbWVudC5saW1pdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGluVmlldyA9IChzY3JvbGxCb3R0b20gPj0gZWxlbWVudC5vZmZzZXQgJiYgc2Nyb2xsVG9wIDw9IGVsZW1lbnQubGltaXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID4gZWxlbWVudC5saW1pdCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtdW5zdHVjaycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy11bnN0dWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8IGVsZW1lbnQub2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGVsZW1lbnQuaW5WaWV3Q2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIGNsYXNzIGlmIGluVmlldywgcmVtb3ZlIGlmIG5vdFxuICAgICAgICAgICAgaWYgKGluVmlldykge1xuICAgICAgICAgICAgICAgIGlmKCFlbGVtZW50LmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGVsZW1lbnQuaW5WaWV3Q2xhc3MpKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50LmNsYXNzTGlzdC5hZGQoZWxlbWVudC5pblZpZXdDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckNhbGxiYWNrKGVsZW1lbnQsJ2VudGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50LnJlcGVhdCAmJiAhZWxlbWVudC5zdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRnJvbUNvbnRhaW5lciA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5yZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhlbGVtZW50LmluVmlld0NsYXNzKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShlbGVtZW50LmluVmlld0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckNhbGxiYWNrKGVsZW1lbnQsJ2xlYXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGVsZW1lbnQuc3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRyYW5zZm9ybURpc3RhbmNlXG4gICAgICAgICAgICAgICAgaWYoaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybURpc3RhbmNlID0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSAtIGVsZW1lbnQub2Zmc2V0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPCBlbGVtZW50Lm9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPiBlbGVtZW50LmxpbWl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IGVsZW1lbnQubGltaXQgLSBlbGVtZW50Lm9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudHJhbnNmb3JtRGlzdGFuY2UgIT0gdHJhbnNmb3JtRGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC50cmFuc2Zvcm1EaXN0YW5jZSA9IHRyYW5zZm9ybURpc3RhbmNlXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtVmFsdWUgPSBgdHJhbnNsYXRlM2QoMCwgJHt0cmFuc2Zvcm1EaXN0YW5jZX1weCwgMClgXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50LnN0eWxlLk1velRyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmVsZW1lbnQuc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50LnN0eWxlLk9UcmFuc2Zvcm0gPSB0cmFuc2Zvcm1WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW1vdmVGcm9tQ29udGFpbmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrIGlmIHRoZSBlbGVtZW50IGhhdmUgYSBjYWxsYmFjaywgYW5kIHRyaWdnZXIgdGhlIGV2ZW50IHNldCBpbiB0aGUgZGF0YS1jYWxsYmFja1xuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgICAgIGVsZW1lbnQgQ3VycmVudCBlbGVtZW50IHRvIHRlc3RcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICB0cmlnZ2VyQ2FsbGJhY2soZWxlbWVudCx3YXkpe1xuXG4gICAgICAgIGlmKGVsZW1lbnQuY2FsbGJhY2sgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICQoZWxlbWVudC5lbGVtZW50KS50cmlnZ2VyKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBlbGVtZW50LmNhbGxiYWNrLmV2ZW50LFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGVsZW1lbnQuY2FsbGJhY2sub3B0aW9ucyxcbiAgICAgICAgICAgICAgICB3YXk6IHdheVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL2FkZCB0aGlzIHdoZXJlIHlvdSB3YW50IGR1ZGUgKGluIHlvdXIgbW9kdWxlIGJ0dylcbiAgICAgICAgICAgIC8vICRkb2N1bWVudC5vbihldmVudC5OYW1lc3BhY2UsKGUpPT57XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZS5vcHRpb25zLCBlLndheSk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2Nyb2xsIHRvIGEgZGVzaXJlZCB0YXJnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiAgICAgIEF2YWlsYWJsZSBvcHRpb25zIDpcbiAgICAgKiAgICAgICAgICB7bm9kZX0gdGFyZ2V0RWxlbSAtIFRoZSBET00gZWxlbWVudCB3ZSB3YW50IHRvIHNjcm9sbCB0b1xuICAgICAqICAgICAgICAgIHtub2RlfSBzb3VyY2VFbGVtIC0gQW4gYDxhPmAgZWxlbWVudCB3aXRoIGFuIGhyZWYgdGFyZ2V0aW5nIHRoZSBhbmNob3Igd2Ugd2FudCB0byBzY3JvbGwgdG9cbiAgICAgKiAgICAgICAgICB7bm9kZX0gb2Zmc2V0RWxlbSAtIEEgRE9NIGVsZW1lbnQgZnJvbSB3aGljaCB3ZSBnZXQgdGhlIGhlaWdodCB0byBzdWJzdHJhY3QgZnJvbSB0aGUgdGFyZ2V0T2Zmc2V0XG4gICAgICogICAgICAgICAgICAgIChleDogdXNlIG9mZnNldEVsZW0gdG8gcGFzcyBhIG1vYmlsZSBoZWFkZXIgdGhhdCBpcyBhYm92ZSBjb250ZW50LCB0byBtYWtlIHN1cmUgdGhlIHNjcm9sbFRvIHdpbGwgYmUgYWxpZ25lZCB3aXRoIGl0KVxuICAgICAqICAgICAgICAgIHtpbnR9IHRhcmdldE9mZnNldCAtIEFuIGFic29sdXRlIHZlcnRpY2FsIHNjcm9sbCB2YWx1ZSB0byByZWFjaCwgb3IgYW4gb2Zmc2V0IHRvIGFwcGx5IG9uIHRvcCBvZiBnaXZlbiBgdGFyZ2V0RWxlbWAgb3IgYHNvdXJjZUVsZW1gJ3MgdGFyZ2V0XG4gICAgICogICAgICAgICAge2ludH0gZGVsYXkgLSBBbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmVmb3JlIHN0YXJ0aW5nIHRvIHNjcm9sbFxuICAgICAqICAgICAgICAgIHtib29sZWFufSB0b1RvcCAtIFNldCB0byB0cnVlIHRvIHNjcm9sbCBhbGwgdGhlIHdheSB0byB0aGUgdG9wXG4gICAgICogICAgICAgICAge2Jvb2xlYW59IHRvQm90dG9tIC0gU2V0IHRvIHRydWUgdG8gc2Nyb2xsIGFsbCB0aGUgd2F5IHRvIHRoZSBib3R0b21cbiAgICAgKiAgICAgICAgICB7ZmxvYXR9IHNwZWVkIC0gRHVyYXRpb24gb2YgdGhlIHNjcm9sbFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgc2Nyb2xsVG8ob3B0aW9ucykge1xuICAgICAgICBsZXQgdGFyZ2V0RWxlbSA9IG9wdGlvbnMudGFyZ2V0RWxlbTtcbiAgICAgICAgY29uc3Qgc291cmNlRWxlbSA9IG9wdGlvbnMuc291cmNlRWxlbTtcbiAgICAgICAgY29uc3Qgb2Zmc2V0RWxlbSA9IG9wdGlvbnMub2Zmc2V0RWxlbTtcbiAgICAgICAgbGV0IHRhcmdldE9mZnNldCA9IGlzTnVtZXJpYyhvcHRpb25zLnRhcmdldE9mZnNldCkgPyBwYXJzZUludChvcHRpb25zLnRhcmdldE9mZnNldCkgOiAwO1xuICAgICAgICBjb25zdCBkZWxheSA9IGlzTnVtZXJpYyhvcHRpb25zLmRlbGF5KSA/IHBhcnNlSW50KG9wdGlvbnMuZGVsYXkpIDogMDtcbiAgICAgICAgY29uc3Qgc3BlZWQgPSBpc051bWVyaWMob3B0aW9ucy5zcGVlZCkgPyBwYXJzZUludChvcHRpb25zLnNwZWVkKSA6IDgwMDtcbiAgICAgICAgY29uc3QgdG9Ub3AgPSBvcHRpb25zLnRvVG9wO1xuICAgICAgICBjb25zdCB0b0JvdHRvbSA9IG9wdGlvbnMudG9Cb3R0b207XG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhdCBsZWFzdCBvbmUgb2YgdGhlIHJlcXVpcmVkIG9wdGlvbnMgaGFzIGJlZWVuIGZpbGxlZFxuICAgICAgICBpZiAoIXRvVG9wICYmICF0b0JvdHRvbSAmJiAhaXNOdW1lcmljKG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSAmJiAhdGFyZ2V0RWxlbSAmJiAhc291cmNlRWxlbSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBZb3UgbXVzdCBzcGVjaWZ5IGF0IGxlYXN0IG9uZSBvZiB0aGVzZSBwYXJhbWV0ZXJzOmAsIFtcbiAgICAgICAgICAgICAgICAne2Jvb2xlYW59IHRvVG9wIC0gU2V0IHRvIHRydWUgdG8gc2Nyb2xsIGFsbCB0aGUgd2F5IHRvIHRoZSB0b3AnLFxuICAgICAgICAgICAgICAgICd7Ym9vbGVhbn0gdG9Cb3R0b20gLSBTZXQgdG8gdHJ1ZSB0byBzY3JvbGwgYWxsIHRoZSB3YXkgdG8gdGhlIGJvdHRvbScsXG4gICAgICAgICAgICAgICAgJ3tpbnR9IHRhcmdldE9mZnNldCAtIEFuIGFic29sdXRlIHZlcnRpY2FsIHNjcm9sbCB2YWx1ZSB0byByZWFjaCwgb3IgYW4gb2Zmc2V0IHRvIGFwcGx5IG9uIHRvcCBvZiBnaXZlbiBgdGFyZ2V0RWxlbWAgb3IgYHNvdXJjZUVsZW1gXFwncyB0YXJnZXQnLFxuICAgICAgICAgICAgICAgICd7bm9kZX0gdGFyZ2V0RWxlbSAtIFRoZSBET00gZWxlbWVudCB3ZSB3YW50IHRvIHNjcm9sbCB0bycsXG4gICAgICAgICAgICAgICAgJ3tub2RlfSBzb3VyY2VFbGVtIC0gQW4gYDxhPmAgZWxlbWVudCB3aXRoIGFuIGhyZWYgdGFyZ2V0aW5nIHRoZSBhbmNob3Igd2Ugd2FudCB0byBzY3JvbGwgdG8nXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHNvdXJjZUVsZW0gaXMgZ2l2ZW4sIGZpbmQgYW5kIHN0b3JlIHRoZSB0YXJnZXRFbGVtIGl0J3MgcmVsYXRlZCB0b1xuICAgICAgICBpZiAoc291cmNlRWxlbSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldERhdGEgPSAnJztcblxuICAgICAgICAgICAgY29uc29sZS5sb2coc291cmNlRWxlbSk7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgc2VsZWN0b3IgKGdpdmVuIHdpdGggYGRhdGEtdGFyZ2V0YCBvciBgaHJlZmAgYXR0cmlidXRlcyBvbiBzb3VyY2VFbGVtKVxuICAgICAgICAgICAgbGV0IHNvdXJjZUVsZW1UYXJnZXQgPSBzb3VyY2VFbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuICAgICAgICAgICAgdGFyZ2V0RGF0YSA9IHNvdXJjZUVsZW1UYXJnZXQgPyBzb3VyY2VFbGVtVGFyZ2V0IDogc291cmNlRWxlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgdGFyZ2V0IGZvciBsYXRlclxuICAgICAgICAgICAgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0RGF0YSlbMF1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGhhdmUgYSB0YXJnZXRFbGVtLCBnZXQgaXQncyBjb29yZGluYXRlc1xuICAgICAgICBpZiAodGFyZ2V0RWxlbSkge1xuICAgICAgICAgICAgLy8gR2V0IHRhcmdldEVsZW0gb2Zmc2V0IGZyb20gdG9wXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtQkNSID0gdGFyZ2V0RWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbU9mZnNldFRvcCA9IHRhcmdldEVsZW1CQ1IudG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCAvLyBUT0RPIC0gSW1wcm92ZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvbiBzb3VyY2UsIG1pZ2h0IG5vdCBhbHdheXMgYmUgZG9jdW1lbnRFbGVtZW50XG5cbiAgICAgICAgICAgIC8vIEZpbmFsIHZhbHVlIG9mIHNjcm9sbCBkZXN0aW5hdGlvbiA6IHRhcmdldEVsZW1PZmZzZXRUb3AgKyAob3B0aW9uYWwgb2Zmc2V0IGdpdmVuIGluIG9wdGlvbnMpXG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSB0YXJnZXRFbGVtT2Zmc2V0VG9wICsgdGFyZ2V0T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgaGF2ZSBhbiBvZmZzZXRFbGVtLCBnZXQgaXRzIGhlaWdodCBhbmQgcmVtb3ZlIGl0IGZyb20gdGFyZ2V0T2Zmc2V0IGFscmVhZHkgY29tcHV0ZWRcbiAgICAgICAgaWYgKG9mZnNldEVsZW0pIHtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBvZmZzZXRFbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IHRhcmdldE9mZnNldCAtIG9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIHdhbnQgdG8gZ28gdG8gb25lIG9mIGJvdW5kYXJpZXNcbiAgICAgICAgaWYgKHRvVG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKHRvQm90dG9tID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0YXJnZXRPZmZzZXQgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAvLyBUT0RPIC0gSW1wcm92ZSBjb250YWluZXIgaGVpZ2h0IHNvdXJjZSwgbWlnaHQgbm90IGFsd2F5cyBiZSB0aGUgYm9keVxuICAgICAgICB9XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IC8vIFRPRE8gLSBSZW1vdmUgalF1ZXJ5IGhlcmVcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldE9mZnNldFxuICAgICAgICAgICAgfSwgc3BlZWQpO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGVsZW1lbnRzIGFuZCByZWNhbGN1bGF0ZSBhbGwgdGhlIHBvc2l0aW9ucyBvbiB0aGUgcGFnZVxuICAgICAqL1xuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLmFuaW1hdGVFbGVtZW50cygpO1xuXG4gICAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gJHdpbmRvdy5oZWlnaHQoKTtcbiAgICAgICAgdGhpcy53aW5kb3dNaWRkbGUgPSB0aGlzLndpbmRvd0hlaWdodCAvIDI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveVxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICR3aW5kb3cub2ZmKGAuJHtFVkVOVF9LRVl9YCk7XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vZmYoYC4ke0VWRU5UX0tFWX1gKTtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMucmVxdWVzdElkKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0SWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50cyA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG4iLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTG9jb21vdGl2ZSBTY3JvbGwgTWFuYWdlclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7ICRkb2N1bWVudCwgJHdpbmRvdywgJGh0bWwsICRib2R5IH0gZnJvbSAnLi4vLi4vdXRpbHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IFNjcm9sbCwgeyBERUZBVUxUUywgRVZFTlQgfSBmcm9tICcuLi9TY3JvbGwnO1xuaW1wb3J0IFNtb290aFNjcm9sbCBmcm9tICcuLi9TbW9vdGhTY3JvbGwnO1xuXG4vKipcbiAqIEJhc2ljIG1vZHVsZSB0aGF0IGRldGVjdHMgd2hpY2ggc2Nyb2xsaW5nIG1vZHVsZSB3ZSdsbCBiZSB1c2luZ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnNtb290aCA9IG9wdGlvbnMuc21vb3RoIHx8IERFRkFVTFRTLnNtb290aDtcbiAgICAgICAgdGhpcy5zbW9vdGhNb2JpbGUgPSBvcHRpb25zLnNtb290aE1vYmlsZSB8fCBERUZBVUxUUy5zbW9vdGhNb2JpbGU7XG4gICAgICAgIHRoaXMubW9iaWxlQ29udGFpbmVyID0gb3B0aW9ucy5tb2JpbGVDb250YWluZXIgfHwgREVGQVVMVFMubW9iaWxlQ29udGFpbmVyO1xuICAgICAgICB0aGlzLmlzTW9iaWxlID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgJGh0bWxbMF0uc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgJGJvZHlbMF0uc2Nyb2xsVG9wID0gMDtcblxuICAgICAgICBpZiAoIXRoaXMuc21vb3RoTW9iaWxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzTW9iaWxlID0gKC9BbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlID0gKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNtb290aCA9PT0gdHJ1ZSAmJiAhdGhpcy5pc01vYmlsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU21vb3RoU2Nyb2xsKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1vYmlsZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29udGFpbmVyID0gdGhpcy5tb2JpbGVDb250YWluZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTY3JvbGwodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlLmluaXQoKTtcblxuICAgICAgICBjb25zdCAkc2Nyb2xsVG9PbkxvYWRFbCA9ICQoJy5qcy1zY3JvbGx0by1vbi1sb2FkJykuZmlyc3QoKTtcblxuICAgICAgICBpZiAoJHNjcm9sbFRvT25Mb2FkRWwubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAkZG9jdW1lbnQudHJpZ2dlckhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdFdmVudC5TQ1JPTExUTycsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRFbGVtOiAkc2Nyb2xsVG9PbkxvYWRFbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvY29tb3RpdmUgU21vb3RoIFNjcm9sbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8qIGpzaGludCBlc25leHQ6IHRydWUgKi9cbmltcG9ydCB7ICR3aW5kb3csICRkb2N1bWVudCwgJGh0bWwsIGh0bWwgfSBmcm9tICcuLi8uLi91dGlscy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgU2Nyb2xsLCB7IERFRkFVTFRTLCBFVkVOVCB9IGZyb20gJy4uL1Njcm9sbCc7XG5pbXBvcnQgeyBnZXRQYXJlbnRzLCBxdWVyeUNsb3Nlc3RQYXJlbnQgfSBmcm9tICcuLi8uLi91dGlscy9odG1sJztcbmltcG9ydCB7IGxlcnAgfSBmcm9tICcuLi8uLi91dGlscy9tYXRocydcblxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlJztcbmltcG9ydCBWaXJ0dWFsU2Nyb2xsIGZyb20gJ3ZpcnR1YWwtc2Nyb2xsJztcbmltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4uLy4uL3V0aWxzL2lzJztcblxuLyoqYC5cbiAqIEJhc2VkIG9uIGBTY3JvbGxgIGNsYXNzLCB3aGljaCBhbGxvd3MgYW5pbWF0aW9ucyBvZiBlbGVtZW50cyBvbiB0aGUgcGFnZVxuICogYWNjb3JkaW5nIHRvIHNjcm9sbCBwb3NpdGlvbi5cbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuc2VjdGlvbnNTZWxlY3RvciA9IChvcHRpb25zLnNlY3Rpb25zKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwob3B0aW9ucy5zZWN0aW9ucykgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKERFRkFVTFRTLnNlY3Rpb25zKTtcbiAgICAgICAgdGhpcy5pc1JldmVyc2VkID0gb3B0aW9ucy5yZXZlcnNlZCB8fCBERUZBVUxUUy5yZXZlcnNlZDtcbiAgICAgICAgdGhpcy5nZXREaXJlY3Rpb24gPSBvcHRpb25zLmdldERpcmVjdGlvbiB8fCBERUZBVUxUUy5nZXREaXJlY3Rpb247XG4gICAgICAgIHRoaXMuZ2V0U3BlZWQgPSBvcHRpb25zLmdldFNwZWVkIHx8IERFRkFVTFRTLmdldFNwZWVkO1xuICAgICAgICB0aGlzLmluZXJ0aWEgPSBvcHRpb25zLmluZXJ0aWEgfHwgREVGQVVMVFMuaW5lcnRpYTtcbiAgICAgICAgdGhpcy5zY3JvbGxCYXJDbGFzc05hbWUgPSBvcHRpb25zLnNjcm9sbEJhckNsYXNzTmFtZSB8fCBERUZBVUxUUy5zY3JvbGxCYXJDbGFzc05hbWU7XG4gICAgICAgIHRoaXMuaXNTY3JvbGxpbmdDbGFzc05hbWUgPSBvcHRpb25zLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lIHx8IERFRkFVTFRTLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdDbGFzc05hbWUgPSBvcHRpb25zLmlzRHJhZ2dpbmdDbGFzc05hbWUgfHwgREVGQVVMVFMuaXNEcmFnZ2luZ0NsYXNzTmFtZTtcblxuICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBzY3JvbGxpbmcgYW5pbWF0aW9uc1xuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8vIEFkZCBjbGFzcyB0byB0aGUgZG9jdW1lbnQgdG8ga25vdyBpZiBTbW9vdGhTY3JvbGwgaXMgaW5pdGlhbGl6ZWQgKHRvIG1hbmFnZSBvdmVyZmxvdyBvbiBjb250YWluZXJzKVxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGFzLXNtb290aC1zY3JvbGwnKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFZpcnR1YWxTY3JvbGwoe1xuICAgICAgICAgICAgbW91c2VNdWx0aXBsaWVyOiAobmF2aWdhdG9yLnBsYXRmb3JtLmluZGV4T2YoJ1dpbicpID4gLTEpID8gMSA6IDAuNCxcbiAgICAgICAgICAgIHRvdWNoTXVsdGlwbGllcjogNCxcbiAgICAgICAgICAgIGZpcmVmb3hNdWx0aXBsaWVyOiAzMFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluZXJ0aWEgPSB0aGlzLmluZXJ0aWEgKiAwLjE7XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwgPSB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YSA9IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmdldFNwZWVkKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC5zcGVlZCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlLm9uKChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNUaWNraW5nICYmICF0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNTY3JvbGxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja1Njcm9sbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuaXNTY3JvbGxpbmdDbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YS55IC09IGUuZGVsdGFZO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA8IDApIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA+IHRoaXMuaW5zdGFuY2UubGltaXQpIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9IHRoaXMuaW5zdGFuY2UubGltaXQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuICAgICAgICB0aGlzLmluaXRTY3JvbGxCYXIoKTtcblxuICAgICAgICB0aGlzLmFkZFNlY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudHMoKTtcblxuICAgICAgICB0aGlzLmV2ZW50cygpO1xuXG4gICAgICAgIHRoaXMucHJlbG9hZEltYWdlcygpO1xuXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogTGlzdGVuL3RyaWdnZXIgZXZlbnRzXG4gICAgKiovXG4gICAgZXZlbnRzKCkge1xuICAgICAgICAvLyBSZWJ1aWxkIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5SRUJVSUxELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgZXZlbnRcbiAgICAgICAgdGhpcy4kY29udGFpbmVyLm9uKEVWRU5ULlVQREFURSwgKGV2ZW50LCBvcHRpb25zKSA9PiB0aGlzLnVwZGF0ZShvcHRpb25zKSk7XG5cbiAgICAgICAgLy8gU2Nyb2xsdG8gYnV0dG9uIGV2ZW50XG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5DTElDSywgJy5qcy1zY3JvbGx0bycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgc291cmNlRWxlbTogZXZlbnQuY3VycmVudFRhcmdldCxcbiAgICAgICAgICAgICAgICBvZmZzZXRFbGVtOiBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vZmZzZXQnKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGNvbnRhaW5lci5vbihFVkVOVC5TQ1JPTExUTywgKGV2ZW50KSA9PiB0aGlzLnNjcm9sbFRvKGV2ZW50Lm9wdGlvbnMpKTtcblxuICAgICAgICAvLyBTZXR1cCBkb25lXG4gICAgICAgICRkb2N1bWVudC50cmlnZ2VySGFuZGxlcih7XG4gICAgICAgICAgICB0eXBlOiBFVkVOVC5JU1JFQURZXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlc2l6ZSBldmVudFxuICAgICAgICAkd2luZG93Lm9uKEVWRU5ULlJFU0laRSwgZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgfSw2MDApKTtcbiAgICB9XG5cbiAgICBpbml0U2Nyb2xsQmFyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aGlzLnNjcm9sbGJhcldyYXBwZXIuY2xhc3NMaXN0LmFkZChgJHt0aGlzLnNjcm9sbEJhckNsYXNzTmFtZX1fd3JhcHBlcmApO1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5jbGFzc0xpc3QuYWRkKGAke3RoaXMuc2Nyb2xsQmFyQ2xhc3NOYW1lfWApO1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV3JhcHBlci5hcHBlbmQodGhpcy5zY3JvbGxiYXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLnNjcm9sbGJhcldyYXBwZXIpO1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSBgJHsod2luZG93LmlubmVySGVpZ2h0ICogd2luZG93LmlubmVySGVpZ2h0KSAvIHRoaXMuaW5zdGFuY2UubGltaXR9cHhgO1xuICAgICAgICB0aGlzLnNjcm9sbEJhckxpbWl0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gdGhpcy5zY3JvbGxiYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsKGUpID0+IHRoaXMuZ2V0U2Nyb2xsQmFyKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLChlKSA9PiB0aGlzLnJlbGVhc2VTY3JvbGxCYXIoZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywoZSkgPT4gdGhpcy5tb3ZlU2Nyb2xsQmFyKGUpKTtcblxuICAgIH1cblxuICAgIHJlaW5pdFNjcm9sbEJhcigpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxiYXIuc3R5bGUuaGVpZ2h0ID0gYCR7KHdpbmRvdy5pbm5lckhlaWdodCAqIHdpbmRvdy5pbm5lckhlaWdodCkgLyB0aGlzLmluc3RhbmNlLmxpbWl0fXB4YDtcbiAgICAgICAgdGhpcy5zY3JvbGxCYXJMaW1pdCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRoaXMuc2Nyb2xsYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICB9XG5cbiAgICBkZXN0cm95U2Nyb2xsQmFyKCkge1xuICAgICAgICB0aGlzLnNjcm9sbGJhci5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLChlKSA9PiB0aGlzLmdldFNjcm9sbEJhcihlKSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywoZSkgPT4gdGhpcy5yZWxlYXNlU2Nyb2xsQmFyKGUpKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsKGUpID0+IHRoaXMubW92ZVNjcm9sbEJhcihlKSk7XG4gICAgfVxuXG4gICAgZ2V0U2Nyb2xsQmFyKGUpIHtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jaGVja1Njcm9sbCgpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5pc1Njcm9sbGluZ0NsYXNzTmFtZSk7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLmlzRHJhZ2dpbmdDbGFzc05hbWUpO1xuICAgIH1cblxuICAgIHJlbGVhc2VTY3JvbGxCYXIoZSkge1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIgPSBmYWxzZTtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QuYWRkKHRoaXMuaXNTY3JvbGxpbmdDbGFzc05hbWUpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5pc0RyYWdnaW5nQ2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBtb3ZlU2Nyb2xsQmFyKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVGlja2luZyAmJiB0aGlzLmlzRHJhZ2dpbmdTY3JvbGxCYXIpIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHkgPSAoZS5wYWdlWSAqIDEwMCAvICh3aW5kb3cuaW5uZXJIZWlnaHQpKSAqIHRoaXMuaW5zdGFuY2UubGltaXQgLyAxMDA7XG5cbiAgICAgICAgICAgICAgICBpZih5ID4gMCAmJiB5IDwgdGhpcy5pbnN0YW5jZS5saW1pdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pc1RpY2tpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNUaWNraW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgZXhpc3Rpbmcgc2VjdGlvbnMgYW5kIGZpbmQgYWxsIHNlY3Rpb25zLlxuICAgICAqIENhbGxlZCBvbiBwYWdlIGxvYWQgYW5kIGFueSBzdWJzZXF1ZW50IHVwZGF0ZXMuXG4gICAgICovXG5cbiAgICBhZGRTZWN0aW9ucygpIHtcbiAgICAgICAgdGhpcy5zZWN0aW9ucyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaSA8IHRoaXMuc2VjdGlvbnNTZWxlY3Rvci5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGxldCBzZWN0aW9uRWxlbWVudCA9IHRoaXMuc2VjdGlvbnNTZWxlY3RvcltpXTtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSBzZWN0aW9uRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSAod2luZG93LmlubmVySGVpZ2h0ICogMS41KSAtIHRoaXMuZ2V0VHJhbnNsYXRlKHNlY3Rpb25FbGVtZW50KS55O1xuICAgICAgICAgICAgbGV0IGxpbWl0ID0gb2Zmc2V0ICsgc2VjdGlvbkVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgKHdpbmRvdy5pbm5lckhlaWdodCAqIDIpO1xuICAgICAgICAgICAgbGV0IHBlcnNpc3RlbnQgPSB0eXBlb2Ygc2VjdGlvbkVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBlcnNpc3RlbnQnKSA9PT0gJ3N0cmluZydcblxuICAgICAgICAgICAgbGV0IGluVmlldyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYodGhpcy5pbnN0YW5jZS5zY3JvbGwueSA+IG9mZnNldCAmJiB0aGlzLmluc3RhbmNlLnNjcm9sbC55IDwgbGltaXQpIHtcbiAgICAgICAgICAgICAgICBpblZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uID0ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHNlY3Rpb25FbGVtZW50LFxuICAgICAgICAgICAgICAgIG9mZnNldCxcbiAgICAgICAgICAgICAgICBsaW1pdCxcbiAgICAgICAgICAgICAgICBpblZpZXcsXG4gICAgICAgICAgICAgICAgcGVyc2lzdGVudFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25zLnB1c2goc2VjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCBleGlzdGluZyBlbGVtZW50cyBhbmQgZmluZCBhbGwgYW5pbWF0YWJsZSBlbGVtZW50cy5cbiAgICAgKiBDYWxsZWQgb24gcGFnZSBsb2FkIGFuZCBhbnkgc3Vic2VxdWVudCB1cGRhdGVzLlxuICAgICAqL1xuICAgIGFkZEVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGVkRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJhbGxheEVsZW1lbnRzID0gW107XG5cblxuICAgICAgICBmb3IgKGxldCB5ID0gMCA7IHkgPCB0aGlzLnNlY3Rpb25zLmxlbmd0aDsgeSArKykge1xuXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuc2VjdGlvbnNbeV0uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2VsZWN0b3IpO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gZWxlbWVudHMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50U3BlZWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcGVlZCcpID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3BlZWQnKSAvIDEwIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRQb3NpdGlvbiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRUYXJnZXQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudEhvcml6b250YWwgPSAodHlwZW9mIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWhvcml6b250YWwnKSA9PT0gJ3N0cmluZycpO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50U3RpY2t5ID0gKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zdGlja3knKSA9PT0gJ3N0cmluZycpO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50U3RpY2t5VGFyZ2V0ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3RpY2t5LXRhcmdldCcpO1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSAoZWxlbWVudFRhcmdldCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRUYXJnZXQpLmxlbmd0aCkgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRUYXJnZXQpIDogZWxlbWVudDtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudE9mZnNldDtcbiAgICAgICAgICAgICAgICAvLyByZXNldCB0cmFuc2Zvcm0gdG8gZ2V0IHRoZSByZWFsIG9mZnNldFxuXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc2VjdGlvbnNbeV0uaW5WaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPZmZzZXQgPSBwYXJzZUludCh0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gdGhpcy5nZXRUcmFuc2xhdGUodGhpcy5zZWN0aW9uc1t5XS5lbGVtZW50KS55KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPZmZzZXQgPSBwYXJzZUludCh0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRMaW1pdCA9IGVsZW1lbnRPZmZzZXQgKyB0YXJnZXQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXdwb3J0LW9mZnNldCcpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgIGVsZW1lbnRWaWV3cG9ydE9mZnNldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXZpZXdwb3J0LW9mZnNldCcpLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9NYW5hZ2UgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrU3RyaW5nID0gKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpID09PSAnc3RyaW5nJykgPyBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jYWxsYmFjaycpIDogbnVsbDtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudENhbGxiYWNrID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnRDYWxsYmFja1N0cmluZyAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gZWxlbWVudENhbGxiYWNrU3RyaW5nLnN1YnN0cigwLCBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuaW5kZXhPZignKCcpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbnNTdHJpbmcgPSBlbGVtZW50Q2FsbGJhY2tTdHJpbmcuc3Vic3RyKGVsZW1lbnRDYWxsYmFja1N0cmluZy5pbmRleE9mKCcoJyksZWxlbWVudENhbGxiYWNrU3RyaW5nLmxlbmd0aCAtIGV2ZW50Lmxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uc1N0cmluZyA9IG9wdGlvbnNTdHJpbmcucmVwbGFjZSgnKCcsJycpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zU3RyaW5nID0gb3B0aW9uc1N0cmluZy5yZXBsYWNlKCcpJywnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSBvcHRpb25zU3RyaW5nLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb3B0aW9ucy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uID0gb3B0aW9uc1tqXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uWzBdID0gb3B0aW9uWzBdLnJlcGxhY2UoJyAnLCcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgYSBib29sZWFuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb25bMV0gPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYob3B0aW9uWzFdID09PSBcImZhbHNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFsdWUgaXMgbnVtZXJpY1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZigvXlxcZCskLy50ZXN0KG9wdGlvblsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBwYXJzZUludChvcHRpb25bMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YWx1ZSBpcyBhIFN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gb3B0aW9uWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW29wdGlvblswXV0gPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Q2FsbGJhY2sgPSB7ZXZlbnQ6ZXZlbnQsIG9wdGlvbnM6b2JqfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBlbGVtZW50cyBzdGF5cyB2aXNpYmxlIGFmdGVyIHNjcm9sbGluZyBwYXN0IGl0XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRSZXBlYXQgPSAodHlwZW9mIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlcGVhdCcpID09PSAnc3RyaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudEluVmlld0NsYXNzID0gKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbnZpZXctY2xhc3MnKSA9PT0gJ3N0cmluZycpID8gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW52aWV3LWNsYXNzJykgOiAnaXMtc2hvdyc7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnRUYXJnZXQgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNmb3JtJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9mZnNldCAtPSBwYXJzZUludChKU09OLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zZm9ybScpKS55KTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gZWxlbWVudE9mZnNldCArIHRhcmdldC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRTdGlja3kpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbGVtZW50U3RpY2t5VGFyZ2V0IHx8IHR5cGVvZiBlbGVtZW50U3RpY2t5VGFyZ2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudExpbWl0ID0gSW5maW5pdHk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50TGltaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1lbnRTdGlja3lUYXJnZXQpWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgdGhpcy5pbnN0YW5jZS5zY3JvbGwueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGluVmlld0NsYXNzOiBlbGVtZW50SW5WaWV3Q2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiBlbGVtZW50TGltaXQsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogTWF0aC5yb3VuZChlbGVtZW50T2Zmc2V0KSxcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0OiBlbGVtZW50UmVwZWF0LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZWxlbWVudENhbGxiYWNrLFxuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydE9mZnNldDogZWxlbWVudFZpZXdwb3J0T2Zmc2V0XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIEZvciBwYXJhbGxheCBhbmltYXRlZCBlbGVtZW50c1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50U3BlZWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50UG9zaXRpb24gPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudEhvcml6b250YWwgPSAodHlwZW9mIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWhvcml6b250YWwnKSA9PT0gJ3N0cmluZycpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudE1pZGRsZSA9ICgoZWxlbWVudExpbWl0IC0gZWxlbWVudE9mZnNldCkgLyAyKSArIGVsZW1lbnRPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50RGVsYXkgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1kZWxheScpO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuaG9yaXpvbnRhbCA9IGVsZW1lbnRIb3Jpem9udGFsO1xuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50Lm1pZGRsZSA9IGVsZW1lbnRNaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQub2Zmc2V0ID0gZWxlbWVudE9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5wb3NpdGlvbiA9IGVsZW1lbnRQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5zcGVlZCA9IGVsZW1lbnRTcGVlZFxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmRlbGF5ID0gZWxlbWVudERlbGF5O1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyYWxsYXhFbGVtZW50cy5wdXNoKG5ld0VsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5zdGlja3kgPSBlbGVtZW50U3RpY2t5O1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZWRFbGVtZW50cy5wdXNoKG5ld0VsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50U3RpY2t5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2xhdW5jaCB0aGUgdG9nZ2xlIGZ1bmN0aW9uIHRvIHNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHN0aWNreSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUVsZW1lbnQobmV3RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1Njcm9sbCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTY3JvbGxpbmcgfHwgdGhpcy5pc0RyYWdnaW5nU2Nyb2xsQmFyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzU2Nyb2xsVGlja2luZykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PsKgdGhpcy5jaGVja1Njcm9sbCgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1Njcm9sbFRpY2tpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IChNYXRoLmFicyh0aGlzLmluc3RhbmNlLmRlbHRhLnkgLSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSk7XG4gICAgICAgICAgICBpZiAoKGRpc3RhbmNlIDwgMSAmJiB0aGlzLmluc3RhbmNlLmRlbHRhLnkgIT0gMCkgfHwgKGRpc3RhbmNlIDwgMC41ICYmIHRoaXMuaW5zdGFuY2UuZGVsdGEueSA9PSAwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gTWF0aC5yb3VuZCh0aGlzLmluc3RhbmNlLnNjcm9sbC55KTtcbiAgICAgICAgICAgICAgICBodG1sLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5pc1Njcm9sbGluZ0NsYXNzTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXIgdGhlIGNsYXNzL3RyYW5zZm9ybSBhbmltYXRpb25zLCBhbmQgdXBkYXRlIHRoZSBnbG9iYWwgc2Nyb2xsIHBvc2l0aW9ubmluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IGlzRm9yY2VkIERldGVybWluZXMgaWYgdGhpcyBpcyBhIGZvcmNlZCByZXF1ZXN0IChmcm9tIGEgbWFudWFsIGNhbGwgdG8gdXBkYXRlIG9yIGEgcmVzaXplKVxuICAgICAqIEBwYXJhbSAge29iamVjdH0gIHN0YXR1cyAgICAgIE9wdGlvbmFsIHN0YXR1cyBvYmplY3QgcmVjZWl2ZWQgd2hlbiBtZXRob2QgaXNcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsZWQgYnkgc21vb3RoLXNjcm9sbGJhciBpbnN0YW5jZSBsaXN0ZW5lci5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHJlbmRlcihpc0ZvcmNlZCwgZSkge1xuICAgICAgICBpZih0aGlzLmlzU2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLnNjcm9sbC55ID0gbGVycCh0aGlzLmluc3RhbmNlLnNjcm9sbC55LHRoaXMuaW5zdGFuY2UuZGVsdGEueSwgdGhpcy5pbmVydGlhKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXNEcmFnZ2luZ1Njcm9sbEJhcikge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA9IGxlcnAodGhpcy5pbnN0YW5jZS5zY3JvbGwueSx0aGlzLmluc3RhbmNlLmRlbHRhLnksIDAuMik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5zZWN0aW9ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYodGhpcy5zZWN0aW9uc1tpXS5wZXJzaXN0ZW50IHx8ICh0aGlzLmluc3RhbmNlLnNjcm9sbC55ID4gdGhpcy5zZWN0aW9uc1tpXS5vZmZzZXQgJiYgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSA8IHRoaXMuc2VjdGlvbnNbaV0ubGltaXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0odGhpcy5zZWN0aW9uc1tpXS5lbGVtZW50LDAsLXRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbnNbaV0uZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25zW2ldLmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5nZXREaXJlY3Rpb24pe1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UuZGVsdGEueSA+IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uID0gJ2Rvd24nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55IDwgdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlLnNjcm9sbC5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuZGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmdldFNwZWVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZS5kZWx0YS55ICE9PSB0aGlzLmluc3RhbmNlLnNjcm9sbC55KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuc3BlZWQgPSAodGhpcy5pbnN0YW5jZS5kZWx0YS55IC0gdGhpcy5pbnN0YW5jZS5zY3JvbGwueSkgLyAoRGF0ZS5ub3coKSAtIHRoaXMudGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLmRlbHRhLnkgPSB0aGlzLmluc3RhbmNlLmRlbHRhLnk7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5zY3JvbGwuc3BlZWQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm1FbGVtZW50cyhpc0ZvcmNlZCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZUVsZW1lbnRzKCk7XG5cbiAgICAgICAgdGhpcy5jYWxsYmFja3Mub25TY3JvbGwodGhpcy5pbnN0YW5jZSk7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAvLyBzY3JvbGxiYXIgdHJhbnNsYXRpb25cbiAgICAgICAgbGV0IHNjcm9sbEJhclRyYW5zbGF0aW9uID0gKHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgLyB0aGlzLmluc3RhbmNlLmxpbWl0KSAqIHRoaXMuc2Nyb2xsQmFyTGltaXQ7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtKHRoaXMuc2Nyb2xsYmFyLDAsc2Nyb2xsQmFyVHJhbnNsYXRpb24pO1xuXG4gICAgICAgIHRoaXMuaGFzU2Nyb2xsVGlja2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjcm9sbCB0byBhIGRlc2lyZWQgdGFyZ2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zXG4gICAgICogICAgICBBdmFpbGFibGUgb3B0aW9ucyA6XG4gICAgICogICAgICAgICAge25vZGV9IHRhcmdldEVsZW0gLSBUaGUgRE9NIGVsZW1lbnQgd2Ugd2FudCB0byBzY3JvbGwgdG9cbiAgICAgKiAgICAgICAgICB7bm9kZX0gc291cmNlRWxlbSAtIEFuIGA8YT5gIGVsZW1lbnQgd2l0aCBhbiBocmVmIHRhcmdldGluZyB0aGUgYW5jaG9yIHdlIHdhbnQgdG8gc2Nyb2xsIHRvXG4gICAgICogICAgICAgICAge25vZGV9IG9mZnNldEVsZW0gLSBBIERPTSBlbGVtZW50IGZyb20gd2hpY2ggd2UgZ2V0IHRoZSBoZWlnaHQgdG8gc3Vic3RyYWN0IGZyb20gdGhlIHRhcmdldE9mZnNldFxuICAgICAqICAgICAgICAgICAgICAoZXg6IHVzZSBvZmZzZXRFbGVtIHRvIHBhc3MgYSBtb2JpbGUgaGVhZGVyIHRoYXQgaXMgYWJvdmUgY29udGVudCwgdG8gbWFrZSBzdXJlIHRoZSBzY3JvbGxUbyB3aWxsIGJlIGFsaWduZWQgd2l0aCBpdClcbiAgICAgKiAgICAgICAgICB7aW50fSB0YXJnZXRPZmZzZXQgLSBBbiBhYnNvbHV0ZSB2ZXJ0aWNhbCBzY3JvbGwgdmFsdWUgdG8gcmVhY2gsIG9yIGFuIG9mZnNldCB0byBhcHBseSBvbiB0b3Agb2YgZ2l2ZW4gYHRhcmdldEVsZW1gIG9yIGBzb3VyY2VFbGVtYCdzIHRhcmdldFxuICAgICAqICAgICAgICAgIHtpbnR9IGRlbGF5IC0gQW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJlZm9yZSBzdGFydGluZyB0byBzY3JvbGxcbiAgICAgKiAgICAgICAgICB7Ym9vbGVhbn0gdG9Ub3AgLSBTZXQgdG8gdHJ1ZSB0byBzY3JvbGwgYWxsIHRoZSB3YXkgdG8gdGhlIHRvcFxuICAgICAqICAgICAgICAgIHtib29sZWFufSB0b0JvdHRvbSAtIFNldCB0byB0cnVlIHRvIHNjcm9sbCBhbGwgdGhlIHdheSB0byB0aGUgYm90dG9tXG4gICAgICogICAgICAgICAge2Zsb2F0fSBzcGVlZCAtIER1cmF0aW9uIG9mIHRoZSBzY3JvbGwgKOKaoO+4jyBESVNBQkxFRCBzaW5jZSB2MilcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHNjcm9sbFRvKG9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHRhcmdldEVsZW0gPSBvcHRpb25zLnRhcmdldEVsZW07XG4gICAgICAgIGNvbnN0IHNvdXJjZUVsZW0gPSBvcHRpb25zLnNvdXJjZUVsZW07XG4gICAgICAgIGNvbnN0IG9mZnNldEVsZW0gPSBvcHRpb25zLm9mZnNldEVsZW07XG4gICAgICAgIGxldCB0YXJnZXRPZmZzZXQgPSBpc051bWVyaWMob3B0aW9ucy50YXJnZXRPZmZzZXQpID8gcGFyc2VJbnQob3B0aW9ucy50YXJnZXRPZmZzZXQpIDogMDtcbiAgICAgICAgY29uc3QgZGVsYXkgPSBpc051bWVyaWMob3B0aW9ucy5kZWxheSkgPyBwYXJzZUludChvcHRpb25zLmRlbGF5KSA6IDA7XG4gICAgICAgIC8vIGNvbnN0IHNwZWVkID0gaXNOdW1lcmljKG9wdGlvbnMuc3BlZWQpID8gcGFyc2VJbnQob3B0aW9ucy5zcGVlZCkgOiA5MDA7IC8vICjimqDvuI8gRElTQUJMRUQgc2luY2UgdjIpXG4gICAgICAgIGNvbnN0IHRvVG9wID0gb3B0aW9ucy50b1RvcDtcbiAgICAgICAgY29uc3QgdG9Cb3R0b20gPSBvcHRpb25zLnRvQm90dG9tO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBhdCBsZWFzdCBvbmUgb2YgdGhlIHJlcXVpcmVkIG9wdGlvbnMgaGFzIGJlZWVuIGZpbGxlZFxuICAgICAgICBpZiAoIXRvVG9wICYmICF0b0JvdHRvbSAmJiAhaXNOdW1lcmljKG9wdGlvbnMudGFyZ2V0T2Zmc2V0KSAmJiAhdGFyZ2V0RWxlbSAmJiAhc291cmNlRWxlbSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBZb3UgbXVzdCBzcGVjaWZ5IGF0IGxlYXN0IG9uZSBvZiB0aGVzZSBwYXJhbWV0ZXJzOmAsIFtcbiAgICAgICAgICAgICAgICAne2Jvb2xlYW59IHRvVG9wIC0gU2V0IHRvIHRydWUgdG8gc2Nyb2xsIGFsbCB0aGUgd2F5IHRvIHRoZSB0b3AnLFxuICAgICAgICAgICAgICAgICd7Ym9vbGVhbn0gdG9Cb3R0b20gLSBTZXQgdG8gdHJ1ZSB0byBzY3JvbGwgYWxsIHRoZSB3YXkgdG8gdGhlIGJvdHRvbScsXG4gICAgICAgICAgICAgICAgJ3tpbnR9IHRhcmdldE9mZnNldCAtIEFuIGFic29sdXRlIHZlcnRpY2FsIHNjcm9sbCB2YWx1ZSB0byByZWFjaCwgb3IgYW4gb2Zmc2V0IHRvIGFwcGx5IG9uIHRvcCBvZiBnaXZlbiBgdGFyZ2V0RWxlbWAgb3IgYHNvdXJjZUVsZW1gXFwncyB0YXJnZXQnLFxuICAgICAgICAgICAgICAgICd7bm9kZX0gdGFyZ2V0RWxlbSAtIFRoZSBET00gZWxlbWVudCB3ZSB3YW50IHRvIHNjcm9sbCB0bycsXG4gICAgICAgICAgICAgICAgJ3tub2RlfSBzb3VyY2VFbGVtIC0gQW4gYDxhPmAgZWxlbWVudCB3aXRoIGFuIGhyZWYgdGFyZ2V0aW5nIHRoZSBhbmNob3Igd2Ugd2FudCB0byBzY3JvbGwgdG8nXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHNvdXJjZUVsZW0gaXMgZ2l2ZW4sIGZpbmQgYW5kIHN0b3JlIHRoZSB0YXJnZXRFbGVtIGl0J3MgcmVsYXRlZCB0b1xuICAgICAgICBpZiAoc291cmNlRWxlbSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldERhdGEgPSAnJztcblxuICAgICAgICAgICAgY29uc29sZS5sb2coc291cmNlRWxlbSk7XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgc2VsZWN0b3IgKGdpdmVuIHdpdGggYGRhdGEtdGFyZ2V0YCBvciBgaHJlZmAgYXR0cmlidXRlcyBvbiBzb3VyY2VFbGVtKVxuICAgICAgICAgICAgbGV0IHNvdXJjZUVsZW1UYXJnZXQgPSBzb3VyY2VFbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKVxuICAgICAgICAgICAgdGFyZ2V0RGF0YSA9IHNvdXJjZUVsZW1UYXJnZXQgPyBzb3VyY2VFbGVtVGFyZ2V0IDogc291cmNlRWxlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgdGFyZ2V0IGZvciBsYXRlclxuICAgICAgICAgICAgdGFyZ2V0RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0RGF0YSlbMF1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIGhhdmUgYSB0YXJnZXRFbGVtLCBnZXQgaXQncyBjb29yZGluYXRlc1xuICAgICAgICBpZiAodGFyZ2V0RWxlbSkge1xuICAgICAgICAgICAgLy8gR2V0IHRhcmdldEVsZW0gb2Zmc2V0IGZyb20gdG9wXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtQkNSID0gdGFyZ2V0RWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RWxlbU9mZnNldFRvcCA9IHRhcmdldEVsZW1CQ1IudG9wICsgdGhpcy4kY29udGFpbmVyWzBdLnNjcm9sbFRvcFxuXG4gICAgICAgICAgICAvLyBUcnkgYW5kIGZpbmQgdGhlIHRhcmdldEVsZW0ncyBwYXJlbnQgc2VjdGlvblxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGFyZW50cyA9IGdldFBhcmVudHModGFyZ2V0RWxlbSlcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudFNlY3Rpb24gPSB0YXJnZXRQYXJlbnRzLmZpbmQoY2FuZGlkYXRlID0+IHRoaXMuc2VjdGlvbnMuZmluZChzZWN0aW9uID0+IHNlY3Rpb24uZWxlbWVudCA9PSBjYW5kaWRhdGUpKVxuICAgICAgICAgICAgbGV0IHBhcmVudFNlY3Rpb25PZmZzZXQgPSAwXG4gICAgICAgICAgICBpZihwYXJlbnRTZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50U2VjdGlvbk9mZnNldCA9IHRoaXMuZ2V0VHJhbnNsYXRlKHBhcmVudFNlY3Rpb24pLnkgLy8gV2UgZ290IGEgcGFyZW50IHNlY3Rpb24sIHN0b3JlIGl0J3MgY3VycmVudCBvZmZzZXQgdG8gcmVtb3ZlIGl0IGxhdGVyXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZpbmFsIHZhbHVlIG9mIHNjcm9sbCBkZXN0aW5hdGlvbiA6IHRhcmdldEVsZW1PZmZzZXRUb3AgKyAob3B0aW9uYWwgb2Zmc2V0IGdpdmVuIGluIG9wdGlvbnMpIC0gKHBhcmVudCdzIHNlY3Rpb24gdHJhbnNsYXRlKVxuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0RWxlbU9mZnNldFRvcCArIHRhcmdldE9mZnNldCAtIHBhcmVudFNlY3Rpb25PZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBoYXZlIGFuIG9mZnNldEVsZW0sIGdldCBpdHMgaGVpZ2h0IGFuZCByZW1vdmUgaXQgZnJvbSB0YXJnZXRPZmZzZXQgYWxyZWFkeSBjb21wdXRlZFxuICAgICAgICBpZiAob2Zmc2V0RWxlbSkge1xuICAgICAgICAgICAgbGV0IG9mZnNldCA9IG9mZnNldEVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgdGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0T2Zmc2V0IC0gb2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2Ugd2FudCB0byBnbyB0byBvbmUgb2YgYm91bmRhcmllc1xuICAgICAgICBpZiAodG9Ub3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAodG9Cb3R0b20gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldE9mZnNldCA9IHRoaXMuaW5zdGFuY2UubGltaXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXYWl0IGZvciB0aGUgYXNrZWQgZGVsYXkgaWYgbmVlZGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWx0YS55ID0gdGFyZ2V0T2Zmc2V0OyAvLyBBY3R1YWwgc2Nyb2xsVG8gKHRoZSBsZXJwIHdpbGwgZG8gdGhlIGFuaW1hdGlvbiBpdHNlbGYpXG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc2Nyb2xsLiBJZiB3ZSB3ZXJlIGluIGlkbGUgc3RhdGU6IHdlJ3JlIG5vdCBhbnltb3JlXG4gICAgICAgICAgICB0aGlzLmlzU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTY3JvbGwoKTtcbiAgICAgICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCh0aGlzLmlzU2Nyb2xsaW5nQ2xhc3NOYW1lKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgc2Nyb2xsIGJhciBsaW1pdFxuICAgICAqL1xuICAgIHNldFNjcm9sbExpbWl0KCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmxpbWl0ID0gdGhpcy4kY29udGFpbmVyWzBdLm9mZnNldEhlaWdodCAtIHRoaXMud2luZG93SGVpZ2h0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGx5IENTUyB0cmFuc2Zvcm0gcHJvcGVydGllcyBvbiBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtICB7b2JqZWN0fSAgZWxlbWVudCAgVGFyZ2V0dGVkIG5vZGVcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICB4ICAgICAgICBUcmFuc2xhdGUgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICB5ICAgICAgICBUcmFuc2xhdGUgdmFsdWVcbiAgICAgKiBAcGFyYW0gIHtpbnR9ICAgICB6ICAgICAgICBUcmFuc2xhdGUgdmFsdWVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHRyYW5zZm9ybShlbGVtZW50LCB4LCB5LCBkZWxheSkge1xuICAgICAgICAvLyBEZWZhdWx0c1xuICAgICAgICB4ID0gcGFyc2VJbnQoeCoxMDAwMCkvMTAwMDAgfHwgMDtcbiAgICAgICAgeSA9IHBhcnNlSW50KHkqMTAwMDApLzEwMDAwIHx8IDA7XG5cbiAgICAgICAgaWYoIWRlbGF5KSB7XG4gICAgICAgICAgICAvLyBUcmFuc2xhdGUgYW5kIHN0b3JlIHRoZSBwb3NpdGlvbm5pbmcgYXMgYGRhdGFgXG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBgbWF0cml4KDEsMCwwLDEsJHt4fSwke3l9KWBcblxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLk1velRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLk9UcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNmb3JtJyxge1wieFwiOiAke3BhcnNlSW50KHgpfSxcInlcIjogJHtwYXJzZUludCh5KX19YClcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBsZXQgc3RhcnQgPSB0aGlzLmdldFRyYW5zbGF0ZShlbGVtZW50KTtcbiAgICAgICAgICAgIGxldCBsZXJwWSA9IGxlcnAoc3RhcnQueSwgeSwgZGVsYXkpO1xuICAgICAgICAgICAgbGV0IGxlcnBYID0gbGVycChzdGFydC54LCB4LCBkZWxheSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IGBtYXRyaXgoMSwwLDAsMSwke2xlcnBYfSwke2xlcnBZfSlgXG5cbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5Nb3pUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5PVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zZm9ybScsYHtcInhcIjogJHtwYXJzZUludChsZXJwWCl9LFwieVwiOiAke3BhcnNlSW50KGxlcnBZKX19YCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGdldFRyYW5zbGF0ZShlbCl7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9IHt9XG4gICAgICAgIGlmKCF3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSB8fCBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gfHwgc3R5bGUubW96VHJhbnNmb3JtO1xuXG4gICAgICAgIGxldCBtYXQgPSB0cmFuc2Zvcm0ubWF0Y2goL15tYXRyaXgzZFxcKCguKylcXCkkLyk7XG4gICAgICAgIGlmKG1hdCkgcmV0dXJuIHBhcnNlRmxvYXQobWF0WzFdLnNwbGl0KCcsICcpWzEzXSk7XG4gICAgICAgIG1hdCA9IHRyYW5zZm9ybS5tYXRjaCgvXm1hdHJpeFxcKCguKylcXCkkLyk7XG4gICAgICAgIHRyYW5zbGF0ZS54ID0gbWF0ID8gcGFyc2VGbG9hdChtYXRbMV0uc3BsaXQoJywgJylbNF0pIDogMDtcbiAgICAgICAgdHJhbnNsYXRlLnkgPSBtYXQgPyBwYXJzZUZsb2F0KG1hdFsxXS5zcGxpdCgnLCAnKVs1XSkgOiAwO1xuXG4gICAgICAgIHJldHVybiB0cmFuc2xhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9vcCB0aHJvdWdoIGFsbCBwYXJhbGxheC1hYmxlIGVsZW1lbnRzIGFuZCBhcHBseSB0cmFuc2Zvcm0gbWV0aG9kKHMpLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Ym9vbGVhbn0gaXNGb3JjZWQgRGV0ZXJtaW5lcyBpZiB0aGlzIGlzIGEgZm9yY2VkIHJlcXVlc3QgKGZyb20gYSBtYW51YWwgY2FsbCB0byB1cGRhdGUgb3IgYSByZXNpemUpXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1FbGVtZW50cyhpc0ZvcmNlZCkge1xuICAgICAgICBpZiAodGhpcy5wYXJhbGxheEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEJvdHRvbSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbE1pZGRsZSA9IHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgKyB0aGlzLndpbmRvd01pZGRsZTtcblxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gdGhpcy5wYXJhbGxheEVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ZXMgPSBbXTtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJFbCA9IHRoaXMucGFyYWxsYXhFbGVtZW50c1tpXTtcblxuICAgICAgICAgICAgICAgIGxldCB0cmFuc2Zvcm1EaXN0YW5jZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy8gRGVmaW5lIGlmIHRoZSBlbGVtZW50IGlzIGluIHZpZXdcbiAgICAgICAgICAgICAgICBsZXQgaW5WaWV3ID0gKChzY3JvbGxCb3R0b20gKyB0aGlzLndpbmRvd0hlaWdodCkgPj0gY3VyRWwub2Zmc2V0ICYmIHRoaXMuaW5zdGFuY2Uuc2Nyb2xsLnkgPD0gY3VyRWwubGltaXQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVFbGVtZW50KGN1ckVsLCBpKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc0ZvcmNlZCAmJiAhaW5WaWV3ICYmIGN1ckVsLnNwZWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERpZmZlcmVudCBjYWxjdWxhdGlvbnMgaWYgaXQgaXMgdGhlIGZpcnN0IGNhbGwgYW5kIHRoZSBpdGVtIGlzIG5vdCBpbiB0aGUgdmlld1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoY3VyRWwucG9zaXRpb24gIT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZihjdXJFbC4kZWxlbWVudC5hdHRyKCdkYXRhLWxvZycpKSBjb25zb2xlLmxvZyhgKGN1ckVsLm9mZnNldCAoJHtjdXJFbC5vZmZzZXR9KSAtIHRoaXMud2luZG93TWlkZGxlICgke3RoaXMud2luZG93TWlkZGxlfSkgLSBjdXJFbC5taWRkbGUgKCR7Y3VyRWwubWlkZGxlfSkpICogY3VyRWwuc3BlZWQgKCR7Y3VyRWwuc3BlZWR9KWApO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoY3VyRWwub2Zmc2V0IC0gdGhpcy53aW5kb3dNaWRkbGUgLSBjdXJFbC5taWRkbGUpICogY3VyRWwuc3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1EaXN0YW5jZSA9IDBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBlbGVtZW50IGlzIGluIHZpZXdcbiAgICAgICAgICAgICAgICBpZiAoaW5WaWV3ICYmIGN1ckVsLnNwZWVkKSB7IC8vfHwgKGlzRm9yY2VkICYmICFpblZpZXcgJiYgY3VyRWwuc3BlZWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY3VyRWwucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSB0aGlzLmluc3RhbmNlLnNjcm9sbC55ICogLWN1ckVsLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAodGhpcy5pbnN0YW5jZS5saW1pdCAtIHNjcm9sbEJvdHRvbSArIHRoaXMud2luZG93SGVpZ2h0KSAqIGN1ckVsLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtRGlzdGFuY2UgPSAoc2Nyb2xsTWlkZGxlIC0gY3VyRWwubWlkZGxlKSAqIC1jdXJFbC5zcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVHJhbnNmb3JtIGhvcml6b250YWwgT1IgdmVydGljYWwuIERlZmF1bHRzIHRvIHZlcnRpY2FsXG4gICAgICAgICAgICAgICAgaWYgKGlzTnVtZXJpYyh0cmFuc2Zvcm1EaXN0YW5jZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgKGN1ckVsLmhvcml6b250YWwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKGN1ckVsLmVsZW1lbnQsIHRyYW5zZm9ybURpc3RhbmNlLDAsIGN1ckVsLmRlbGF5KSA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyYW5zZm9ybShjdXJFbC5lbGVtZW50LCAwLCB0cmFuc2Zvcm1EaXN0YW5jZSwgY3VyRWwuZGVsYXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBlbGVtZW50cyBhbmQgcmVjYWxjdWxhdGUgYWxsIHRoZSBwb3NpdGlvbnMgb24gdGhlIHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgdXBkYXRlKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSAkd2luZG93LmhlaWdodCgpO1xuICAgICAgICB0aGlzLndpbmRvd01pZGRsZSA9IHRoaXMud2luZG93SGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5zZXRTY3JvbGxMaW1pdCgpO1xuXG4gICAgICAgIHRoaXMuYWRkU2VjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5hZGRFbGVtZW50cygpO1xuICAgICAgICB0aGlzLnRyYW5zZm9ybUVsZW1lbnRzKHRydWUpO1xuICAgICAgICB0aGlzLnJlaW5pdFNjcm9sbEJhcigpO1xuXG4gICAgfVxuXG4gICAgcHJlbG9hZEltYWdlcygpIHtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKSlcblxuICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpbWFnZXMuc3BsaWNlKGltYWdlcy5pbmRleE9mKGltYWdlKSwgMSlcbiAgICAgICAgICAgICAgICBpbWFnZXMubGVuZ3RoID09PSAwICYmIHRoaXMudXBkYXRlKClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbWcuc3JjID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3lcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgICAgICRodG1sLnJlbW92ZUNsYXNzKCdoYXMtc21vb3RoLXNjcm9sbCcpO1xuICAgICAgICB0aGlzLnBhcmFsbGF4RWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyV3JhcHBlci5yZW1vdmUoKTtcblxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZik7XG5cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICB2YXIgdGltZW91dDtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG59XG4iLCJjb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcblxuY29uc3QgJGRvY3VtZW50ICAgID0gJChkb2N1bWVudCk7XG5jb25zdCAkd2luZG93ICAgICAgPSAkKHdpbmRvdyk7XG5jb25zdCAkaHRtbCAgICAgICAgPSAkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkucmVtb3ZlQ2xhc3MoJ2hhcy1uby1qcycpLmFkZENsYXNzKCdoYXMtanMnKTtcbmNvbnN0ICRib2R5ICAgICAgICA9ICQoZG9jdW1lbnQuYm9keSk7XG5jb25zdCBodG1sICAgICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdO1xuY29uc3QgYm9keSAgICAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcblxuY29uc3QgaXNEZWJ1ZyAgICAgID0gISEkaHRtbC5kYXRhKCdkZWJ1ZycpO1xuXG5leHBvcnQgeyBEQVRBX0FQSV9LRVksICRkb2N1bWVudCwgJHdpbmRvdywgJGh0bWwsICRib2R5LCBodG1sLCBpc0RlYnVnIH07XG4iLCIvKipcbiAqIEBzZWUgIGh0dHBzOi8vZ2l0aHViLmNvbS9yYWN0aXZlanMvcmFjdGl2ZS9ibG9iL2Rldi9zcmMvdXRpbHMvaHRtbC5qc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlSHRtbChzdHIpIHtcbiAgICByZXR1cm4gc3RyXG4gICAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAgICAgLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIEhUTUwgY29udGVudCB0aGF0IGNvbnRhaW5zIG11c3RhY2hlIGNoYXJhY3RlcnMgZm9yIHVzZSB3aXRoIFJhY3RpdmVcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmVzY2FwZUh0bWwoc3RyKSB7XG4gICAgcmV0dXJuIHN0clxuICAgICAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgICAgIC5yZXBsYWNlKC8mZ3Q7L2csICc+JylcbiAgICAgICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XG59XG5cbi8qKlxuICogR2V0IGVsZW1lbnQgZGF0YSBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0gICB7RE9NRWxlbWVudH0gIG5vZGVcbiAqIEByZXR1cm4gIHtBcnJheX0gICAgICAgZGF0YVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZURhdGEobm9kZSkge1xuICAgIC8vIEFsbCBhdHRyaWJ1dGVzXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBub2RlLmF0dHJpYnV0ZXM7XG5cbiAgICAvLyBSZWdleCBQYXR0ZXJuXG4gICAgdmFyIHBhdHRlcm4gPSAvXmRhdGFcXC0oLispJC87XG5cbiAgICAvLyBPdXRwdXRcbiAgICB2YXIgZGF0YSA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmICghYXR0cmlidXRlc1tpXSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdHRyaWJ1dGVzIG5hbWUgKGV4OiBkYXRhLW1vZHVsZSlcbiAgICAgICAgbGV0IG5hbWUgPSBhdHRyaWJ1dGVzW2ldLm5hbWU7XG5cbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zLlxuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1hdGNoID0gbmFtZS5tYXRjaChwYXR0ZXJuKTtcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGlzIHRocm93cyBhbiBlcnJvciwgeW91IGhhdmUgc29tZVxuICAgICAgICAvLyBzZXJpb3VzIHByb2JsZW1zIGluIHlvdXIgSFRNTC5cbiAgICAgICAgZGF0YVttYXRjaFsxXV0gPSBub2RlLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudHMoZWxlbSkge1xuICAgIC8vIFNldCB1cCBhIHBhcmVudCBhcnJheVxuICAgIGxldCBwYXJlbnRzID0gW107XG5cbiAgICAvLyBQdXNoIGVhY2ggcGFyZW50IGVsZW1lbnQgdG8gdGhlIGFycmF5XG4gICAgZm9yICggOyBlbGVtICYmIGVsZW0gIT09IGRvY3VtZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlICkge1xuICAgICAgICBwYXJlbnRzLnB1c2goZWxlbSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIG91ciBwYXJlbnQgYXJyYXlcbiAgICByZXR1cm4gcGFyZW50cztcbn1cblxuLy8gaHR0cHM6Ly9nb21ha2V0aGluZ3MuY29tL2hvdy10by1nZXQtdGhlLWNsb3Nlc3QtcGFyZW50LWVsZW1lbnQtd2l0aC1hLW1hdGNoaW5nLXNlbGVjdG9yLXVzaW5nLXZhbmlsbGEtamF2YXNjcmlwdC9cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUNsb3Nlc3RQYXJlbnQoZWxlbSwgc2VsZWN0b3IpIHtcblxuICAgIC8vIEVsZW1lbnQubWF0Y2hlcygpIHBvbHlmaWxsXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPVxuICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5vTWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcyA9ICh0aGlzLmRvY3VtZW50IHx8IHRoaXMub3duZXJEb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzKSxcbiAgICAgICAgICAgICAgICAgICAgaSA9IG1hdGNoZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCAmJiBtYXRjaGVzLml0ZW0oaSkgIT09IHRoaXMpIHt9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkgPiAtMTtcbiAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBjbG9zZXN0IG1hdGNoaW5nIGVsZW1lbnRcbiAgICBmb3IgKCA7IGVsZW0gJiYgZWxlbSAhPT0gZG9jdW1lbnQ7IGVsZW0gPSBlbGVtLnBhcmVudE5vZGUgKSB7XG4gICAgICAgIGlmICggZWxlbS5tYXRjaGVzKCBzZWxlY3RvciApICkgcmV0dXJuIGVsZW07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG59O1xuIiwidmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBhcnJheUxpa2VQYXR0ZXJuID0gL15cXFtvYmplY3QgKD86QXJyYXl8RmlsZUxpc3QpXFxdJC87XG5cbi8vIHRoYW5rcywgaHR0cDovL3BlcmZlY3Rpb25raWxscy5jb20vaW5zdGFuY2VvZi1jb25zaWRlcmVkLWhhcm1mdWwtb3ItaG93LXRvLXdyaXRlLWEtcm9idXN0LWlzYXJyYXkvXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSAoIHRoaW5nICkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKCB0aGluZyApID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheUxpa2UgKCBvYmogKSB7XG4gICAgcmV0dXJuIGFycmF5TGlrZVBhdHRlcm4udGVzdCggdG9TdHJpbmcuY2FsbCggb2JqICkgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRXF1YWwgKCBhLCBiICkge1xuICAgIGlmICggYSA9PT0gbnVsbCAmJiBiID09PSBudWxsICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIHR5cGVvZiBhID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgYiA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYSA9PT0gYjtcbn1cblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xODA4Mi92YWxpZGF0ZS1udW1iZXJzLWluLWphdmFzY3JpcHQtaXNudW1lcmljXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1lcmljICggdGhpbmcgKSB7XG4gICAgcmV0dXJuICFpc05hTiggcGFyc2VGbG9hdCggdGhpbmcgKSApICYmIGlzRmluaXRlKCB0aGluZyApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKCB0aGluZyApIHtcbiAgICByZXR1cm4gKCB0aGluZyAmJiB0b1N0cmluZy5jYWxsKCB0aGluZyApID09PSAnW29iamVjdCBPYmplY3RdJyApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbiggdGhpbmcgKSB7XG4gICAgdmFyIGdldFR5cGUgPSB7fTtcbiAgICByZXR1cm4gdGhpbmcgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKHRoaW5nKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsZXJwKHN0YXJ0LCBlbmQsIGFtdCl7XG4gICAgcmV0dXJuICgxIC0gYW10KSAqIHN0YXJ0ICsgYW10ICogZW5kXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmKCFvYmplY3QpIHJldHVybiBjb25zb2xlLndhcm4oJ2JpbmRBbGwgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50LicpO1xuXG4gICAgdmFyIGZ1bmN0aW9ucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICBpZiAoZnVuY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuXG4gICAgICAgIGZvciAodmFyIG1ldGhvZCBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBtZXRob2QpKSB7XG4gICAgICAgICAgICAgICAgaWYodHlwZW9mIG9iamVjdFttZXRob2RdID09ICdmdW5jdGlvbicgJiYgdG9TdHJpbmcuY2FsbChvYmplY3RbbWV0aG9kXSkgPT0gXCJbb2JqZWN0IEZ1bmN0aW9uXVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9ucy5wdXNoKG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGZ1bmN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uc1tpXTtcbiAgICAgICAgb2JqZWN0W2ZdID0gYmluZChvYmplY3RbZl0sIG9iamVjdCk7XG4gICAgfVxufTtcblxuLypcbiAgICBGYXN0ZXIgYmluZCB3aXRob3V0IHNwZWNpZmljLWNhc2UgY2hlY2tpbmcuIChzZWUgaHR0cHM6Ly9jb2RlcndhbGwuY29tL3Avb2kzajN3KS5cbiAgICBiaW5kQWxsIGlzIG9ubHkgbmVlZGVkIGZvciBldmVudHMgYmluZGluZyBzbyBubyBuZWVkIHRvIG1ha2Ugc2xvdyBmaXhlcyBmb3IgY29uc3RydWN0b3JcbiAgICBvciBwYXJ0aWFsIGFwcGxpY2F0aW9uLlxuKi9cbmZ1bmN0aW9uIGJpbmQoZnVuYywgY29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcbiAgfTtcbn0iLCIvLyBHZW5lcmF0ZWQgYnkgQ29mZmVlU2NyaXB0IDEuOS4yXG4oZnVuY3Rpb24oKSB7XG4gIHZhciByb290O1xuXG4gIHJvb3QgPSB0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBleHBvcnRzICE9PSBudWxsID8gZXhwb3J0cyA6IHRoaXM7XG5cbiAgcm9vdC5MZXRoYXJneSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBMZXRoYXJneShzdGFiaWxpdHksIHNlbnNpdGl2aXR5LCB0b2xlcmFuY2UsIGRlbGF5KSB7XG4gICAgICB0aGlzLnN0YWJpbGl0eSA9IHN0YWJpbGl0eSAhPSBudWxsID8gTWF0aC5hYnMoc3RhYmlsaXR5KSA6IDg7XG4gICAgICB0aGlzLnNlbnNpdGl2aXR5ID0gc2Vuc2l0aXZpdHkgIT0gbnVsbCA/IDEgKyBNYXRoLmFicyhzZW5zaXRpdml0eSkgOiAxMDA7XG4gICAgICB0aGlzLnRvbGVyYW5jZSA9IHRvbGVyYW5jZSAhPSBudWxsID8gMSArIE1hdGguYWJzKHRvbGVyYW5jZSkgOiAxLjE7XG4gICAgICB0aGlzLmRlbGF5ID0gZGVsYXkgIT0gbnVsbCA/IGRlbGF5IDogMTUwO1xuICAgICAgdGhpcy5sYXN0VXBEZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMubGFzdERvd25EZWx0YXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMSwgcmVmID0gdGhpcy5zdGFiaWxpdHkgKiAyOyAxIDw9IHJlZiA/IGkgPD0gcmVmIDogaSA+PSByZWY7IDEgPD0gcmVmID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgcmVmLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDEsIHJlZiA9IHRoaXMuc3RhYmlsaXR5ICogMjsgMSA8PSByZWYgPyBpIDw9IHJlZiA6IGkgPj0gcmVmOyAxIDw9IHJlZiA/IGkrKyA6IGktLSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChudWxsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgTGV0aGFyZ3kucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGxhc3REZWx0YTtcbiAgICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcbiAgICAgIGlmIChlLndoZWVsRGVsdGEgIT0gbnVsbCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLndoZWVsRGVsdGE7XG4gICAgICB9IGVsc2UgaWYgKGUuZGVsdGFZICE9IG51bGwpIHtcbiAgICAgICAgbGFzdERlbHRhID0gZS5kZWx0YVkgKiAtNDA7XG4gICAgICB9IGVsc2UgaWYgKChlLmRldGFpbCAhPSBudWxsKSB8fCBlLmRldGFpbCA9PT0gMCkge1xuICAgICAgICBsYXN0RGVsdGEgPSBlLmRldGFpbCAqIC00MDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsdGFzVGltZXN0YW1wLnB1c2goRGF0ZS5ub3coKSk7XG4gICAgICB0aGlzLmRlbHRhc1RpbWVzdGFtcC5zaGlmdCgpO1xuICAgICAgaWYgKGxhc3REZWx0YSA+IDApIHtcbiAgICAgICAgdGhpcy5sYXN0VXBEZWx0YXMucHVzaChsYXN0RGVsdGEpO1xuICAgICAgICB0aGlzLmxhc3RVcERlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxhc3REb3duRGVsdGFzLnB1c2gobGFzdERlbHRhKTtcbiAgICAgICAgdGhpcy5sYXN0RG93bkRlbHRhcy5zaGlmdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5pc0luZXJ0aWEoLTEpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuaXNJbmVydGlhID0gZnVuY3Rpb24oZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgbGFzdERlbHRhcywgbGFzdERlbHRhc05ldywgbGFzdERlbHRhc09sZCwgbmV3QXZlcmFnZSwgbmV3U3VtLCBvbGRBdmVyYWdlLCBvbGRTdW07XG4gICAgICBsYXN0RGVsdGFzID0gZGlyZWN0aW9uID09PSAtMSA/IHRoaXMubGFzdERvd25EZWx0YXMgOiB0aGlzLmxhc3RVcERlbHRhcztcbiAgICAgIGlmIChsYXN0RGVsdGFzWzBdID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5kZWx0YXNUaW1lc3RhbXBbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAyXSArIHRoaXMuZGVsYXkgPiBEYXRlLm5vdygpICYmIGxhc3REZWx0YXNbMF0gPT09IGxhc3REZWx0YXNbKHRoaXMuc3RhYmlsaXR5ICogMikgLSAxXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBsYXN0RGVsdGFzT2xkID0gbGFzdERlbHRhcy5zbGljZSgwLCB0aGlzLnN0YWJpbGl0eSk7XG4gICAgICBsYXN0RGVsdGFzTmV3ID0gbGFzdERlbHRhcy5zbGljZSh0aGlzLnN0YWJpbGl0eSwgdGhpcy5zdGFiaWxpdHkgKiAyKTtcbiAgICAgIG9sZFN1bSA9IGxhc3REZWx0YXNPbGQucmVkdWNlKGZ1bmN0aW9uKHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIHQgKyBzO1xuICAgICAgfSk7XG4gICAgICBuZXdTdW0gPSBsYXN0RGVsdGFzTmV3LnJlZHVjZShmdW5jdGlvbih0LCBzKSB7XG4gICAgICAgIHJldHVybiB0ICsgcztcbiAgICAgIH0pO1xuICAgICAgb2xkQXZlcmFnZSA9IG9sZFN1bSAvIGxhc3REZWx0YXNPbGQubGVuZ3RoO1xuICAgICAgbmV3QXZlcmFnZSA9IG5ld1N1bSAvIGxhc3REZWx0YXNOZXcubGVuZ3RoO1xuICAgICAgaWYgKE1hdGguYWJzKG9sZEF2ZXJhZ2UpIDwgTWF0aC5hYnMobmV3QXZlcmFnZSAqIHRoaXMudG9sZXJhbmNlKSAmJiAodGhpcy5zZW5zaXRpdml0eSA8IE1hdGguYWJzKG5ld0F2ZXJhZ2UpKSkge1xuICAgICAgICByZXR1cm4gZGlyZWN0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3RVcERlbHRhcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubGFzdFVwRGVsdGFzO1xuICAgIH07XG5cbiAgICBMZXRoYXJneS5wcm90b3R5cGUuc2hvd0xhc3REb3duRGVsdGFzID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXN0RG93bkRlbHRhcztcbiAgICB9O1xuXG4gICAgcmV0dXJuIExldGhhcmd5O1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFja1xuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIGxpc3RlbmVyLCBjdHgpO1xuICB9LFxuXG4gIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcblxuICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGV2dHMgJiYgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChldnRzW2ldLmZuICE9PSBjYWxsYmFjayAmJiBldnRzW2ldLmZuLl8gIT09IGNhbGxiYWNrKVxuICAgICAgICAgIGxpdmVFdmVudHMucHVzaChldnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2NvbW1pdC9jNmViZmFhOWJjOTczYjMzZDExMGE4NGEzMDc3NDJiN2NmOTRjOTUzI2NvbW1pdGNvbW1lbnQtNTAyNDkxMFxuXG4gICAgKGxpdmVFdmVudHMubGVuZ3RoKVxuICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEU7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc291cmNlKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc291cmNlKSk7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgndGlueS1lbWl0dGVyJyk7XG52YXIgTGV0aGFyZ3kgPSByZXF1aXJlKCdsZXRoYXJneScpLkxldGhhcmd5O1xudmFyIHN1cHBvcnQgPSByZXF1aXJlKCcuL3N1cHBvcnQnKTtcbnZhciBjbG9uZSA9IHJlcXVpcmUoJy4vY2xvbmUnKTtcbnZhciBiaW5kQWxsID0gcmVxdWlyZSgnYmluZGFsbC1zdGFuZGFsb25lJyk7XG52YXIgRVZUX0lEID0gJ3ZpcnR1YWxzY3JvbGwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpcnR1YWxTY3JvbGw7XG5cbnZhciBrZXlDb2RlcyA9IHtcbiAgICBMRUZUOiAzNyxcbiAgICBVUDogMzgsXG4gICAgUklHSFQ6IDM5LFxuICAgIERPV046IDQwLFxuICAgIFNQQUNFOiAzMlxufTtcblxuZnVuY3Rpb24gVmlydHVhbFNjcm9sbChvcHRpb25zKSB7XG4gICAgYmluZEFsbCh0aGlzLCAnX29uV2hlZWwnLCAnX29uTW91c2VXaGVlbCcsICdfb25Ub3VjaFN0YXJ0JywgJ19vblRvdWNoTW92ZScsICdfb25LZXlEb3duJyk7XG5cbiAgICB0aGlzLmVsID0gd2luZG93O1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZWwpIHtcbiAgICAgICAgdGhpcy5lbCA9IG9wdGlvbnMuZWw7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmVsO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMgPSBvYmplY3RBc3NpZ24oe1xuICAgICAgICBtb3VzZU11bHRpcGxpZXI6IDEsXG4gICAgICAgIHRvdWNoTXVsdGlwbGllcjogMixcbiAgICAgICAgZmlyZWZveE11bHRpcGxpZXI6IDE1LFxuICAgICAgICBrZXlTdGVwOiAxMjAsXG4gICAgICAgIHByZXZlbnRUb3VjaDogZmFsc2UsXG4gICAgICAgIHVucHJldmVudFRvdWNoQ2xhc3M6ICd2cy10b3VjaG1vdmUtYWxsb3dlZCcsXG4gICAgICAgIGxpbWl0SW5lcnRpYTogZmFsc2UsXG4gICAgICAgIHVzZUtleWJvYXJkOiB0cnVlXG4gICAgfSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW5lcnRpYSkgdGhpcy5fbGV0aGFyZ3kgPSBuZXcgTGV0aGFyZ3koKTtcblxuICAgIHRoaXMuX2VtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICAgIHRoaXMuX2V2ZW50ID0ge1xuICAgICAgICB5OiAwLFxuICAgICAgICB4OiAwLFxuICAgICAgICBkZWx0YVg6IDAsXG4gICAgICAgIGRlbHRhWTogMFxuICAgIH07XG4gICAgdGhpcy50b3VjaFN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy50b3VjaFN0YXJ0WSA9IG51bGw7XG4gICAgdGhpcy5ib2R5VG91Y2hBY3Rpb24gPSBudWxsO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYXNzaXZlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lck9wdGlvbnMgPSB7cGFzc2l2ZTogdGhpcy5vcHRpb25zLnBhc3NpdmV9O1xuICAgIH1cbn1cblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX25vdGlmeSA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgZXZ0ID0gdGhpcy5fZXZlbnQ7XG4gICAgZXZ0LnggKz0gZXZ0LmRlbHRhWDtcbiAgICBldnQueSArPSBldnQuZGVsdGFZO1xuXG4gICB0aGlzLl9lbWl0dGVyLmVtaXQoRVZUX0lELCB7XG4gICAgICAgIHg6IGV2dC54LFxuICAgICAgICB5OiBldnQueSxcbiAgICAgICAgZGVsdGFYOiBldnQuZGVsdGFYLFxuICAgICAgICBkZWx0YVk6IGV2dC5kZWx0YVksXG4gICAgICAgIG9yaWdpbmFsRXZlbnQ6IGVcbiAgIH0pO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uV2hlZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gICAgaWYgKHRoaXMuX2xldGhhcmd5ICYmIHRoaXMuX2xldGhhcmd5LmNoZWNrKGUpID09PSBmYWxzZSkgcmV0dXJuO1xuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIC8vIEluIENocm9tZSBhbmQgaW4gRmlyZWZveCAoYXQgbGVhc3QgdGhlIG5ldyBvbmUpXG4gICAgZXZ0LmRlbHRhWCA9IGUud2hlZWxEZWx0YVggfHwgZS5kZWx0YVggKiAtMTtcbiAgICBldnQuZGVsdGFZID0gZS53aGVlbERlbHRhWSB8fCBlLmRlbHRhWSAqIC0xO1xuXG4gICAgLy8gZm9yIG91ciBwdXJwb3NlIGRlbHRhbW9kZSA9IDEgbWVhbnMgdXNlciBpcyBvbiBhIHdoZWVsIG1vdXNlLCBub3QgdG91Y2ggcGFkXG4gICAgLy8gcmVhbCBtZWFuaW5nOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2hlZWxFdmVudCNEZWx0YV9tb2Rlc1xuICAgIGlmKHN1cHBvcnQuaXNGaXJlZm94ICYmIGUuZGVsdGFNb2RlID09IDEpIHtcbiAgICAgICAgZXZ0LmRlbHRhWCAqPSBvcHRpb25zLmZpcmVmb3hNdWx0aXBsaWVyO1xuICAgICAgICBldnQuZGVsdGFZICo9IG9wdGlvbnMuZmlyZWZveE11bHRpcGxpZXI7XG4gICAgfVxuXG4gICAgZXZ0LmRlbHRhWCAqPSBvcHRpb25zLm1vdXNlTXVsdGlwbGllcjtcbiAgICBldnQuZGVsdGFZICo9IG9wdGlvbnMubW91c2VNdWx0aXBsaWVyO1xuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uTW91c2VXaGVlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0SW5lcnRpYSAmJiB0aGlzLl9sZXRoYXJneS5jaGVjayhlKSA9PT0gZmFsc2UpIHJldHVybjtcblxuICAgIHZhciBldnQgPSB0aGlzLl9ldmVudDtcblxuICAgIC8vIEluIFNhZmFyaSwgSUUgYW5kIGluIENocm9tZSBpZiAnd2hlZWwnIGlzbid0IGRlZmluZWRcbiAgICBldnQuZGVsdGFYID0gKGUud2hlZWxEZWx0YVgpID8gZS53aGVlbERlbHRhWCA6IDA7XG4gICAgZXZ0LmRlbHRhWSA9IChlLndoZWVsRGVsdGFZKSA/IGUud2hlZWxEZWx0YVkgOiBlLndoZWVsRGVsdGE7XG5cbiAgICB0aGlzLl9ub3RpZnkoZSk7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5fb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciB0ID0gKGUudGFyZ2V0VG91Y2hlcykgPyBlLnRhcmdldFRvdWNoZXNbMF0gOiBlO1xuICAgIHRoaXMudG91Y2hTdGFydFggPSB0LnBhZ2VYO1xuICAgIHRoaXMudG91Y2hTdGFydFkgPSB0LnBhZ2VZO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zO1xuICAgIGlmKG9wdGlvbnMucHJldmVudFRvdWNoXG4gICAgICAgICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMob3B0aW9ucy51bnByZXZlbnRUb3VjaENsYXNzKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuXG4gICAgdmFyIHQgPSAoZS50YXJnZXRUb3VjaGVzKSA/IGUudGFyZ2V0VG91Y2hlc1swXSA6IGU7XG5cbiAgICBldnQuZGVsdGFYID0gKHQucGFnZVggLSB0aGlzLnRvdWNoU3RhcnRYKSAqIG9wdGlvbnMudG91Y2hNdWx0aXBsaWVyO1xuICAgIGV2dC5kZWx0YVkgPSAodC5wYWdlWSAtIHRoaXMudG91Y2hTdGFydFkpICogb3B0aW9ucy50b3VjaE11bHRpcGxpZXI7XG5cbiAgICB0aGlzLnRvdWNoU3RhcnRYID0gdC5wYWdlWDtcbiAgICB0aGlzLnRvdWNoU3RhcnRZID0gdC5wYWdlWTtcblxuICAgIHRoaXMuX25vdGlmeShlKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl9vbktleURvd24gPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC5kZWx0YVggPSBldnQuZGVsdGFZID0gMDtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gNDBcblxuICAgIHN3aXRjaChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5MRUZUOlxuICAgICAgICBjYXNlIGtleUNvZGVzLlVQOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IHRoaXMub3B0aW9ucy5rZXlTdGVwO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5SSUdIVDpcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5ET1dOOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IC0gdGhpcy5vcHRpb25zLmtleVN0ZXA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBrZXlDb2Rlcy5TUEFDRSAmJiBlLnNoaWZ0S2V5OlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IHdpbmRvd0hlaWdodDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGtleUNvZGVzLlNQQUNFOlxuICAgICAgICAgICAgZXZ0LmRlbHRhWSA9IC0gd2luZG93SGVpZ2h0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbm90aWZ5KGUpO1xufTtcblxuVmlydHVhbFNjcm9sbC5wcm90b3R5cGUuX2JpbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzdXBwb3J0Lmhhc1doZWVsRXZlbnQpIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vbldoZWVsLCB0aGlzLmxpc3RlbmVyT3B0aW9ucyk7XG4gICAgaWYoc3VwcG9ydC5oYXNNb3VzZVdoZWVsRXZlbnQpIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMuX29uTW91c2VXaGVlbCwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuXG4gICAgaWYoc3VwcG9ydC5oYXNUb3VjaCkge1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLl9vblRvdWNoU3RhcnQsIHRoaXMubGlzdGVuZXJPcHRpb25zKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwgdGhpcy5saXN0ZW5lck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmKHN1cHBvcnQuaGFzUG9pbnRlciAmJiBzdXBwb3J0Lmhhc1RvdWNoV2luKSB7XG4gICAgICAgIHRoaXMuYm9keVRvdWNoQWN0aW9uID0gZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24gPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyRG93bicsIHRoaXMuX29uVG91Y2hTdGFydCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc0tleURvd24gJiYgdGhpcy5vcHRpb25zLnVzZUtleWJvYXJkKSBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLl91bmJpbmQgPSBmdW5jdGlvbigpIHtcbiAgICBpZihzdXBwb3J0Lmhhc1doZWVsRXZlbnQpIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9vbldoZWVsKTtcbiAgICBpZihzdXBwb3J0Lmhhc01vdXNlV2hlZWxFdmVudCkgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5fb25Nb3VzZVdoZWVsKTtcblxuICAgIGlmKHN1cHBvcnQuaGFzVG91Y2gpIHtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5fb25Ub3VjaFN0YXJ0KTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSk7XG4gICAgfVxuXG4gICAgaWYoc3VwcG9ydC5oYXNQb2ludGVyICYmIHN1cHBvcnQuaGFzVG91Y2hXaW4pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uID0gdGhpcy5ib2R5VG91Y2hBY3Rpb247XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyRG93bicsIHRoaXMuX29uVG91Y2hTdGFydCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyTW92ZScsIHRoaXMuX29uVG91Y2hNb3ZlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBpZihzdXBwb3J0Lmhhc0tleURvd24gJiYgdGhpcy5vcHRpb25zLnVzZUtleWJvYXJkKSBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oY2IsIGN0eCkge1xuICB0aGlzLl9lbWl0dGVyLm9uKEVWVF9JRCwgY2IsIGN0eCk7XG5cbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2VtaXR0ZXIuZTtcbiAgaWYgKGV2ZW50cyAmJiBldmVudHNbRVZUX0lEXSAmJiBldmVudHNbRVZUX0lEXS5sZW5ndGggPT09IDEpIHRoaXMuX2JpbmQoKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGNiLCBjdHgpIHtcbiAgdGhpcy5fZW1pdHRlci5vZmYoRVZUX0lELCBjYiwgY3R4KTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZW1pdHRlci5lO1xuICBpZiAoIWV2ZW50c1tFVlRfSURdIHx8IGV2ZW50c1tFVlRfSURdLmxlbmd0aCA8PSAwKSB0aGlzLl91bmJpbmQoKTtcbn07XG5cblZpcnR1YWxTY3JvbGwucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGV2dCA9IHRoaXMuX2V2ZW50O1xuICAgIGV2dC54ID0gMDtcbiAgICBldnQueSA9IDA7XG59O1xuXG5WaXJ0dWFsU2Nyb2xsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW1pdHRlci5vZmYoKTtcbiAgICB0aGlzLl91bmJpbmQoKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uIGdldFN1cHBvcnQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFzV2hlZWxFdmVudDogJ29ud2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNNb3VzZVdoZWVsRXZlbnQ6ICdvbm1vdXNld2hlZWwnIGluIGRvY3VtZW50LFxuICAgICAgICBoYXNUb3VjaDogJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQsXG4gICAgICAgIGhhc1RvdWNoV2luOiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyAmJiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDEsXG4gICAgICAgIGhhc1BvaW50ZXI6ICEhd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkLFxuICAgICAgICBoYXNLZXlEb3duOiAnb25rZXlkb3duJyBpbiBkb2N1bWVudCxcbiAgICAgICAgaXNGaXJlZm94OiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0ZpcmVmb3gnKSA+IC0xXG4gICAgfTtcbn0pKCk7XG4iXX0=
