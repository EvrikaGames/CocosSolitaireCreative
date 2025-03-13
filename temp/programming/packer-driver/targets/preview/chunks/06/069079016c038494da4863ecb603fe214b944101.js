System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ResolutionPolicy, screen, Vec3, view, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, WordConnectScreenScaler;

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
      ResolutionPolicy = _cc.ResolutionPolicy;
      screen = _cc.screen;
      Vec3 = _cc.Vec3;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49374qNI2pHO7RoTGtzxwtk", "WordConnectScreenScaler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ResolutionPolicy', 'screen', 'Vec3', 'view', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WordConnectScreenScaler", WordConnectScreenScaler = (_dec = ccclass('WordConnectScreenScaler'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec(_class = (_class2 = class WordConnectScreenScaler extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "canvas", _descriptor, this);

          _initializerDefineProperty(this, "description", _descriptor2, this);

          _initializerDefineProperty(this, "spelling", _descriptor3, this);

          _initializerDefineProperty(this, "storeButton", _descriptor4, this);

          _initializerDefineProperty(this, "redirectScreen", _descriptor5, this);

          _initializerDefineProperty(this, "redirectScreenInfo", _descriptor6, this);

          this.originalWidth = 1280;
          this.originalHeigth = 720;
          this.spellingVerticalOffset = 30;
          this.originalRatio = this.originalHeigth / this.originalWidth;
          this.horizontalState = true;
          this.originalDescriptionPosition = void 0;
          this.originalSpellingPosition = void 0;
        }

        start() {
          this.originalDescriptionPosition = this.description.getPosition();
          this.originalSpellingPosition = this.spelling.getPosition();
          this.onWindowResize(screen.windowSize.width, screen.windowSize.height);
        }

        onLoad() {
          screen.on('window-resize', this.onWindowResize, this);
        }

        onDestroy() {
          screen.off('window-resize', this.onWindowResize, this);
        }

        onWindowResize(width, height) {
          var currentHorizontalState = width >= height;

          if (currentHorizontalState != this.horizontalState) {
            this.horizontalState = currentHorizontalState;

            if (currentHorizontalState) {
              view.setDesignResolutionSize(this.originalWidth, this.originalHeigth, ResolutionPolicy.FIXED_WIDTH);
              this.description.setPosition(this.originalDescriptionPosition);
              this.spelling.setPosition(this.originalSpellingPosition);
              this.storeButton.parent = this.description;
            } else {
              view.setDesignResolutionSize(this.originalHeigth, this.originalWidth, ResolutionPolicy.FIXED_HEIGHT);
              var position = new Vec3(this.originalDescriptionPosition.y, -this.originalDescriptionPosition.x);
              this.description.setPosition(position);
              position = new Vec3(this.originalSpellingPosition.y, this.spellingVerticalOffset - this.originalSpellingPosition.x);
              this.spelling.setPosition(position);
              this.storeButton.parent = this.canvas;
            }
          }

          var ratio = currentHorizontalState ? height / width : width / height;
          var scale = ratio / this.originalRatio;
          if (scale > 1) scale = 1;
          this.description.setScale(scale, scale);
          this.spelling.setScale(scale, scale);
          this.redirectScreenInfo.setScale(scale, scale);

          if (this.horizontalState) {
            this.storeButton.setScale(1, 1);
          } else {
            this.storeButton.setScale(scale, scale);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "canvas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spelling", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "storeButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "redirectScreen", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "redirectScreenInfo", [_dec7], {
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
//# sourceMappingURL=069079016c038494da4863ecb603fe214b944101.js.map