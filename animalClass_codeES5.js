"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
  function Animal(age, numberOfLegs) {
    _classCallCheck(this, Animal);

    this.age = age;
    this.numberOfLegs = numberOfLegs;
  }

  _createClass(Animal, [{
    key: "move",
    value: function move() {
      return "WALKING.....";
    }
  }]);

  return Animal;
}();

var Mammal = function (_Animal) {
  _inherits(Mammal, _Animal);

  function Mammal(age, furColor) {
    _classCallCheck(this, Mammal);

    var _this = _possibleConstructorReturn(this, (Mammal.__proto__ || Object.getPrototypeOf(Mammal)).call(this, age));

    _this.furColor = furColor;
    return _this;
  }

  _createClass(Mammal, [{
    key: "giveBirth",
    value: function giveBirth(sex, pregnant, gestPeriod) {
      if (sex != "female") {
        return;
      } else if (pregnant === true && gestPeriod === "elapsed") {
        return "congrats, youre now a mother";
      }

      return "you have to wait a while longer";
    }
  }]);

  return Mammal;
}(Animal);

var Human = function (_Mammal) {
  _inherits(Human, _Mammal);

  function Human(age, furColor, languageSpoken) {
    _classCallCheck(this, Human);

    var _this2 = _possibleConstructorReturn(this, (Human.__proto__ || Object.getPrototypeOf(Human)).call(this, age, furColor));

    _this2.languageSpoken = languageSpoken;
    return _this2;
  }

  _createClass(Human, [{
    key: "speak",
    value: function speak() {
      switch (this.languageSpoken) {
        case "English":
          return "How are you?";
          break;
        case "French":
          return "comment ca va?";
          break;
      }
    }
  }]);

  return Human;
}(Mammal);