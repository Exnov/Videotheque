"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

//Le provider SizeProvider aide à maj et distribuer les classes Bootstrap des tailles de video à travers les differents composants : de Button (modification) à Video (recuperation)
var SizeContext = React.createContext({
  update: function update() {},
  //fn de mise à jour des tailles de video
  sizeBtp: 'videos col-md-3 col-sm-4 card' //par défaut

});
/**
 * la classe SizeProvider fera office de... Provider (!)
 * en englobant son enfant direct
 * dans le composant éponyme. De cette façon, ses values
 * seront accessibles de manière globale via le `Consumer`
 */

var SizeProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(SizeProvider, _React$Component);

  var _super = _createSuper(SizeProvider);

  function SizeProvider() {
    var _this;

    _classCallCheck(this, SizeProvider);

    _this = _super.call(this);
    _this.update = _this.update.bind(_assertThisInitialized(_this));
    _this.state = {
      update: _this.update,
      sizeBtp: 'videos col-md-3 col-sm-4 card' //par défaut

    };
    return _this;
  }

  _createClass(SizeProvider, [{
    key: "update",
    value: function update(sizeScreen) {
      var classNameValues = '';

      switch (sizeScreen) {
        case 1:
          classNameValues = 'col-md-3 col-sm-4';
          break;

        case 2:
          //classNameValues='col-md-6 col-sm-3'
          classNameValues = 'col-md-6 col-sm-3';
          break;

        case 3:
          classNameValues = 'col-md-12 col-sm-6';
          break;

        default: // code block

      }

      classNameValues = 'videos ' + classNameValues + ' card';
      console.log('classNameValues : ' + classNameValues);
      this.setState({
        sizeBtp: classNameValues
      });
    }
  }, {
    key: "setSizeBtp",
    value: function setSizeBtp(sizeBtp) {
      this.setState({
        sizeBtp: sizeBtp
      });
    }
  }, {
    key: "render",
    value: function render() {
      return (
        /*#__PURE__*/

        /**
         * la propriété value est très importante ici, elle rend
         * le contenu du state disponible aux `Consumers` de l'application
         */
        React.createElement(SizeContext.Provider, {
          value: this.state
        }, this.props.children)
      );
    }
  }]);

  return SizeProvider;
}(React.Component);