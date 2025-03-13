System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, screen, Vec2, Vec3, view, ResolutionPolicy, Widget, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ScreenScaler;

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
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      view = _cc.view;
      ResolutionPolicy = _cc.ResolutionPolicy;
      Widget = _cc.Widget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72ff5B+yjdABaqSdVPTe2xC", "ScreenScaler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'screen', 'Vec2', 'Vec3', 'view', 'ResolutionPolicy', 'Widget']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScreenScaler", ScreenScaler = (_dec = ccclass('ScreenScaler'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Widget
      }), _dec(_class = (_class2 = class ScreenScaler extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "crossword", _descriptor, this);

          _initializerDefineProperty(this, "connector", _descriptor2, this);

          _initializerDefineProperty(this, "hintWidget", _descriptor3, this);

          this.originalWidth = 1280;
          this.originalHeigth = 720;
          this.connectorVerticalOffset = 30;
          this.hintHorizontalOffset = new Vec2(50, 50);
          this.hintVerticalOffset = new Vec2(240, -120);
          this.originalRatio = this.originalHeigth / this.originalWidth;
          this.horizontalState = true;
          this.originalCrosswordPosition = void 0;
          this.originalConnectorPosition = void 0;
        }

        start() {
          this.originalCrosswordPosition = this.crossword.getPosition();
          this.originalConnectorPosition = this.connector.getPosition();
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
              this.crossword.setPosition(this.originalCrosswordPosition);
              this.connector.setPosition(this.originalConnectorPosition);
              this.hintWidget.isAlignBottom = true;
              this.hintWidget.bottom = this.hintHorizontalOffset.x;
              this.hintWidget.isAlignRight = true;
              this.hintWidget.right = this.hintHorizontalOffset.y;
            } else {
              view.setDesignResolutionSize(this.originalHeigth, this.originalWidth, ResolutionPolicy.FIXED_HEIGHT);
              let pos = new Vec3(this.originalCrosswordPosition.y, -this.originalCrosswordPosition.x);
              this.crossword.setPosition(pos);
              pos = new Vec3(this.originalConnectorPosition.y, this.connectorVerticalOffset - this.originalConnectorPosition.x);
              this.connector.setPosition(pos);
              this.hintWidget.isAlignVerticalCenter = true;
              this.hintWidget.verticalCenter = this.hintVerticalOffset.y;
            }
          }

          const ratio = currentHorizontalState ? height / width : width / height;
          let scale = ratio / this.originalRatio;
          if (scale > 1) scale = 1;
          this.crossword.setScale(scale, scale);
          this.connector.setScale(scale, scale);

          if (!currentHorizontalState) {
            this.hintWidget.isAlignHorizontalCenter = true;
            this.hintWidget.horizontalCenter = this.hintVerticalOffset.x * scale;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "crossword", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "connector", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hintWidget", [_dec4], {
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
//# sourceMappingURL=e74f331796198141052439571c8970e3c69407d8.js.map