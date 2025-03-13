System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, tween, Animation, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CorrectLabelComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      Animation = _cc.Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f1898naNYZF4phowfHdLfDE", "CorrectLabelComponent", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'Node', 'Sprite', 'Tween', 'tween', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CorrectLabelComponent", CorrectLabelComponent = (_dec = ccclass('CorrectLabelComponent'), _dec2 = property({
        type: Sprite
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Animation
      }), _dec(_class = (_class2 = class CorrectLabelComponent extends Component {
        constructor(...args) {
          super(...args);
          //private readonly possibleLabelText = ['Отлично!', 'Хорошо!', 'Прекрасно!'];
          this.possibleLabelText = ['Nice!', 'Awesome!', 'Perfect!'];
          this.showClipName = "showCorrect";

          _initializerDefineProperty(this, "sprite", _descriptor, this);

          _initializerDefineProperty(this, "label", _descriptor2, this);

          _initializerDefineProperty(this, "animation", _descriptor3, this);
        }

        start() {
          this.sprite.color = this.getColorWithZeroA(this.sprite.color);
        }

        show() {
          this.label.string = this.possibleLabelText[Math.floor(Math.random() * this.possibleLabelText.length)];
          this.animation.play(this.showClipName);
          return tween(this.node).delay(this.animation.getState(this.showClipName).clip.duration);
        }

        getColorWithZeroA(color) {
          color.a = 0;
          return color;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e8111bd36fd556c919776bb4b52e82f80a0643fe.js.map