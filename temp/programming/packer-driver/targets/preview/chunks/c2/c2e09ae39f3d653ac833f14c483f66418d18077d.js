System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Sprite, tween, Vec3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Letter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "./Card", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce94bbZQhBHZoK7wFA/SRaQ", "Letter", undefined);

      __checkObsolete__(['_decorator', 'color', 'Color', 'Component', 'Node', 'Sprite', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Letter", Letter = (_dec = ccclass('Letter'), _dec2 = property({
        type: Sprite
      }), _dec(_class = (_class2 = class Letter extends Component {
        constructor() {
          super(...arguments);
          this.correctColor = new Color(0, 255, 0, 255);
          this.uncorrectColor = new Color(255, 0, 0, 255);
          this.letter = void 0;
          this.isRight = false;
          this.isOccupied = false;
          this.card = null;

          _initializerDefineProperty(this, "checkSprite", _descriptor, this);

          this.defaultColor = void 0;
          this.targetColor = void 0;
        }

        onLoad() {
          this.defaultColor = new Color(this.checkSprite.color);
        }

        CompareLetters(card) {
          if (card.getLetter() == this.letter) {
            this.isRight = true;
            this.targetColor = this.correctColor;
          } else {
            this.isRight = false;
            this.targetColor = this.uncorrectColor;
          }

          this.repeatWordAnimation();
        }

        init(letter) {
          this.letter = letter;
          this.isRight = false;
          this.isOccupied = false;
        }

        setCard(card) {
          this.card = card;
          this.isOccupied = true;
          this.CompareLetters(card);
          card.isSelected = true;
          card.moveTo(this.node.getWorldPosition());
        }

        remove() {
          this.card = null;
          this.node.destroy();
        }

        getCard() {
          return this.card;
        }

        repeatWordAnimation() {
          tween(this.node).delay(0.2).call(() => {
            this.checkSprite.color = this.targetColor;
          }).to(0.1, {
            scale: new Vec3(this.node.scale.x + 0.2, this.node.scale.y + 0.2, 0)
          }).delay(1).to(0.1, {
            scale: new Vec3(1, 1, 0)
          }).call(() => {
            this.checkSprite.color = this.defaultColor;
          }).start();
        }

        toDefaultColor() {
          this.checkSprite.color = this.defaultColor;
        }

        toRightColor() {
          this.targetColor = this.correctColor;
        }

        toWrongColor() {
          this.targetColor = this.uncorrectColor;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "checkSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c2e09ae39f3d653ac833f14c483f66418d18077d.js.map