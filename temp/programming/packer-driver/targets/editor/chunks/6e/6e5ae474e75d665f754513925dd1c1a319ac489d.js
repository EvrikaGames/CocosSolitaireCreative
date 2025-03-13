System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, screen, Vec3, view, ResolutionPolicy, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, QuizScaler;

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
      Node = _cc.Node;
      screen = _cc.screen;
      Vec3 = _cc.Vec3;
      view = _cc.view;
      ResolutionPolicy = _cc.ResolutionPolicy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9ccbb8uqxVF/6WmMiZEPUxL", "QuizScaler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'screen', 'Vec2', 'Vec3', 'view', 'ResolutionPolicy', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("QuizScaler", QuizScaler = (_dec = ccclass('QuizScaler'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class QuizScaler extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "description", _descriptor, this);

          _initializerDefineProperty(this, "variants", _descriptor2, this);

          this.originalWidth = 1280;
          this.originalHeigth = 720;
          this.variantsVerticalOffset = 30;
          this.originalRatio = this.originalHeigth / this.originalWidth;
          this.horizontalState = true;
          this.originalDescriptionPosition = void 0;
          this.originalVariantsPosition = void 0;
        }

        start() {
          this.originalDescriptionPosition = this.description.getPosition();
          this.originalVariantsPosition = this.variants.getPosition();
          this.onWindowResize(screen.windowSize.width, screen.windowSize.height);
        }

        onLoad() {
          screen.on('window-resize', this.onWindowResize, this);
        }

        onDestroy() {
          screen.off('window-resize', this.onWindowResize, this);
        }

        onWindowResize(width, height) {
          const currentHorizontalState = width >= height;

          if (currentHorizontalState != this.horizontalState) {
            this.horizontalState = currentHorizontalState;

            if (currentHorizontalState) {
              view.setDesignResolutionSize(this.originalWidth, this.originalHeigth, ResolutionPolicy.FIXED_WIDTH);
              this.description.setPosition(this.originalDescriptionPosition);
              this.variants.setPosition(this.originalVariantsPosition);
            } else {
              view.setDesignResolutionSize(this.originalHeigth, this.originalWidth, ResolutionPolicy.FIXED_HEIGHT);
              let pos = new Vec3(this.originalDescriptionPosition.y, -this.originalDescriptionPosition.x);
              this.description.setPosition(pos);
              pos = new Vec3(0, this.variantsVerticalOffset - this.originalVariantsPosition.x);
              this.variants.setPosition(pos);
            }
          }

          const ratio = currentHorizontalState ? height / width : width / height;
          let scale = ratio / this.originalRatio;
          if (scale > 1) scale = 1;
          this.description.setScale(scale, scale);
          this.variants.setScale(scale, scale);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "variants", [_dec3], {
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
//# sourceMappingURL=6e5ae474e75d665f754513925dd1c1a319ac489d.js.map