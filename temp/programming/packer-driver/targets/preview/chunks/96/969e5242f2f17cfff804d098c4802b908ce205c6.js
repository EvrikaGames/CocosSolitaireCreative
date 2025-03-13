System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, Label, UITransform, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, LettersLabelComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Component = _cc.Component;
      Label = _cc.Label;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44c33vdFrtDI4G5ctbQKfeg", "LettersLabelComponent", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AnimationState', 'Component', 'Label', 'Node', 'UITransform', 'Vec3', 'tween', 'Tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LettersLabelComponent", LettersLabelComponent = (_dec = ccclass('LettersLabelComponent'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Animation
      }), _dec(_class = (_class2 = class LettersLabelComponent extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "label", _descriptor, this);

          _initializerDefineProperty(this, "animation", _descriptor2, this);

          this.transform = void 0;
          this.labelTransform = void 0;
          this.text = void 0;
          this.originalPosition = void 0;
          this.playingAnimation = void 0;
        }

        start() {
          this.transform = this.getComponent(UITransform);
          this.labelTransform = this.label.getComponent(UITransform);
          this.originalPosition = this.node.getPosition();
          this.animation.on(Animation.EventType.FINISHED, this.onAnimationFinished, this);
          this.animation.on(Animation.EventType.STOP, this.onAnimationStop, this);
          this.updateText(null);
        }

        updateText(text) {
          this.text = text;

          if (text) {
            this.label.string = text.toUpperCase();
          } else {
            this.transform.width = 0;
            this.labelTransform.width = 0;
            this.label.string = '';
          }

          if (this.playingAnimation) {
            this.animation.stop();
            this.playingAnimation = false;
          }
        }

        lateUpdate() {
          if (!this.text) return;
          this.transform.width = this.labelTransform.width + 50;
        }

        wrongWordShake() {
          this.playingAnimation = true;
          this.animation.play();
        }

        onAnimationFinished(type, state) {
          this.updateText(null);
          this.playingAnimation = false;
        }

        onAnimationStop(type, state) {
          this.node.setPosition(this.originalPosition);
          this.playingAnimation = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec3], {
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
//# sourceMappingURL=969e5242f2f17cfff804d098c4802b908ce205c6.js.map