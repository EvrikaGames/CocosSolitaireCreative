System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Label, Sprite, tween, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SpellingLetter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e558fptY/VBe7Vmu5rvqHSX", "SpellingLetter", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'Sprite', 'Tween', 'tween', 'Vec3', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpellingLetter", SpellingLetter = (_dec = ccclass('SpellingLetter'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Sprite
      }), _dec(_class = (_class2 = class SpellingLetter extends Component {
        constructor() {
          super(...arguments);
          this.letterColor = new Color(159, 169, 205, 255);
          this.emptyColor = new Color(175, 54, 179, 255);

          _initializerDefineProperty(this, "text", _descriptor, this);

          _initializerDefineProperty(this, "background", _descriptor2, this);
        }

        set(letter) {
          letter = letter.charAt(0);

          if (letter === ' ') {
            this.background.color = this.letterColor;
          } else {
            this.background.color = this.emptyColor;
          }

          this.text.string = letter.toUpperCase();
        }

        scaleTween(letter, startDuration) {
          return tween(this.node).delay(startDuration).call(() => {
            this.set(letter);
          }).to(0.25, {
            scale: new Vec3(1.25, 1.25, 1.25)
          }).to(0.25, {
            scale: Vec3.ONE
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec3], {
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
//# sourceMappingURL=b704bb7ddd17a40f31ebc44d6b76c165a98c3a09.js.map