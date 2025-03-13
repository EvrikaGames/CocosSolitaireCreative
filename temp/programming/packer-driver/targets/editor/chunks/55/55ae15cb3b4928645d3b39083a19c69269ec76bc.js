System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Sprite, tween, UITransform, Vec3, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CrosswordLetterComponent;

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
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dae46fLK31AE703gClqjJaI", "CrosswordLetterComponent", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite', 'tween', 'UITransform', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CrosswordLetterComponent", CrosswordLetterComponent = (_dec = ccclass('CrosswordLetterComponent'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Sprite
      }), _dec4 = property({
        type: Sprite
      }), _dec(_class = (_class2 = class CrosswordLetterComponent extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "label", _descriptor, this);

          _initializerDefineProperty(this, "spriteClose", _descriptor2, this);

          _initializerDefineProperty(this, "spriteOpen", _descriptor3, this);

          this.letter = void 0;
          this.opened = void 0;
        }

        start() {
          this.changeState(false);
        }

        setLetter(letter) {
          this.letter = letter;
          this.label.string = this.letter.toUpperCase();
        }

        setSize(size) {
          let transform = this.getComponent(UITransform);
          transform.height = size;
          transform.width = size;
          transform = this.label.getComponent(UITransform);
          transform.height = size;
          transform.width = size;
          transform = this.spriteClose.getComponent(UITransform);
          transform.height = size;
          transform.width = size;
          transform = this.spriteOpen.getComponent(UITransform);
          transform.height = size;
          transform.width = size;
        }

        changeState(opened) {
          this.opened = opened;

          if (!opened) {
            this.updateUI(opened);
            return;
          }

          tween(this.node).to(0.1, {
            scale: new Vec3(0.8, 0.8, 0.8)
          }).to(0.2, {
            scale: new Vec3(1, 1, 1)
          }).call(() => this.updateUI(opened)).start();
        }

        updateUI(opened) {
          this.spriteClose.node.active = !opened;
          this.spriteOpen.node.active = opened;
          this.label.node.active = opened;
        }

        repeatWordAnimation() {
          tween(this.node).by(0.05, {
            position: new Vec3(10, 0)
          }).by(0.1, {
            position: new Vec3(-20, 0)
          }).by(0.1, {
            position: new Vec3(20, 0)
          }).by(0.05, {
            position: new Vec3(-10, 0)
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteClose", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spriteOpen", [_dec4], {
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
//# sourceMappingURL=55ae15cb3b4928645d3b39083a19c69269ec76bc.js.map