System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, screen, Vec2, view, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, ScreenScaler;

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
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c4a9pK7ctNWJ1ta1zhUtgE", "ScreenScaler", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'screen', 'Vec2', 'Vec3', 'view', 'ResolutionPolicy', 'Widget', 'Canvas']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScreenScaler", ScreenScaler = (_dec = ccclass('ScreenScaler'), _dec2 = property({
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
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec(_class = (_class2 = class ScreenScaler extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "letterContainer", _descriptor, this);

          _initializerDefineProperty(this, "cardContainer", _descriptor2, this);

          _initializerDefineProperty(this, "completedWordsContainer", _descriptor3, this);

          _initializerDefineProperty(this, "playWidget", _descriptor4, this);

          _initializerDefineProperty(this, "iconWidget", _descriptor5, this);

          _initializerDefineProperty(this, "background", _descriptor6, this);

          _initializerDefineProperty(this, "constName", _descriptor7, this);

          _initializerDefineProperty(this, "sentences", _descriptor8, this);

          _initializerDefineProperty(this, "win", _descriptor9, this);

          this.originalWidth = 1920;
          this.originalHeigth = 1080;
          this.lettersVerticalOffset = 110;
          this.cardsVerticalOffset = 100;
          this.wordsVerticalOffset = 100;
          this.playHorizontalOffset = new Vec2(50, 50);
          this.playVerticalOffset = new Vec2(240, -120);
          this.iconHorizontalOffset = new Vec2(50, 50);
          this.iconVerticalOffset = new Vec2(240, -120);
          this.originalRatio = this.originalHeigth / this.originalWidth;
          this.horizontalState = true;
          this.originalLetterContainerPosition = void 0;
          this.originalCardContainerPosition = void 0;
          this.originalCompletedWordsContainerPosition = void 0;
          this.originalPlayWidgetPosition = void 0;
          this.originalWinPosition = void 0;
          this.originalLetterContainerScale = void 0;
          this.originalCardContainerScale = void 0;
          this.originalCompletedWordsContainerScale = void 0;
          this.originalBackgroundScale = void 0;
          this.originalPlayWidgetScale = void 0;
          this.originalWinScale = void 0;
        }

        start() {
          this.originalLetterContainerPosition = this.letterContainer.getPosition();
          this.originalCardContainerPosition = this.cardContainer.getPosition();
          this.originalCompletedWordsContainerPosition = this.completedWordsContainer.getPosition();
          this.originalPlayWidgetPosition = this.playWidget.getPosition();
          this.originalWinPosition = this.win.getPosition();
          this.originalLetterContainerScale = this.letterContainer.getScale().clone();
          this.originalCardContainerScale = this.cardContainer.getScale().clone();
          this.originalCompletedWordsContainerScale = this.completedWordsContainer.getScale().clone();
          this.originalBackgroundScale = this.background.getScale().clone();
          this.originalPlayWidgetScale = this.playWidget.getScale().clone();
          this.originalWinScale = this.win.getScale().clone();
          this.onWindowResize();
        }

        onLoad() {
          screen.on('window-resize', this.onWindowResize, this);
        }

        onDestroy() {
          screen.off('window-resize', this.onWindowResize, this);
        }

        onWindowResize() {
          const visibleSize = view.getVisibleSize();
          const width = visibleSize.width;
          const height = visibleSize.height;
          const heightRatio = height / this.originalHeigth;
          const widthRatio = width / this.originalWidth;
          const scale = Math.max(heightRatio, widthRatio);
          this.letterContainer.setScale(this.originalLetterContainerScale.x * scale, this.originalLetterContainerScale.y * scale);
          this.cardContainer.setScale(this.originalCardContainerScale.x * scale, this.originalCardContainerScale.y * scale);
          this.completedWordsContainer.setScale(this.originalCompletedWordsContainerScale.x * scale, this.originalCompletedWordsContainerScale.y * scale);
          this.background.setScale(this.originalBackgroundScale.x * scale, this.originalBackgroundScale.y * scale);
          this.background.setPosition(this.background.position.x, this.background.position.y);
          this.playWidget.setScale(this.originalPlayWidgetScale.x * scale / 1.5, this.originalPlayWidgetScale.y * scale / 1.5);
          this.win.setScale(this.originalWinScale.x * scale, this.originalWinScale.y * scale);
          const currentHorizontalState = width >= height;

          if (currentHorizontalState !== this.horizontalState) {
            this.horizontalState = currentHorizontalState;

            if (currentHorizontalState) {
              this.playWidget.setPosition(this.originalPlayWidgetPosition.x * width / height, this.originalPlayWidgetPosition.y);
              this.win.setPosition(this.originalWinPosition.x * width / height, this.originalWinPosition.y);
            } else {
              this.letterContainer.setPosition(this.originalLetterContainerPosition.x * scale, (this.originalLetterContainerPosition.y + this.lettersVerticalOffset) * scale);
              this.cardContainer.setPosition(this.originalCardContainerPosition.x * scale, (this.originalCardContainerPosition.y + this.cardsVerticalOffset) * scale);
              this.completedWordsContainer.setPosition(this.originalCompletedWordsContainerPosition.x * scale, (this.originalCompletedWordsContainerPosition.y + this.wordsVerticalOffset) * scale);
              this.playWidget.setPosition(this.originalPlayWidgetPosition.x, this.originalPlayWidgetPosition.y);
              this.win.setPosition(this.originalWinPosition.x, this.originalWinPosition.y);
            }
          }

          console.log(`Screen resized: width=${width}, height=${height}, scale=${scale}`);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "letterContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "completedWordsContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "playWidget", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "iconWidget", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "constName", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "sentences", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "win", [_dec10], {
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
//# sourceMappingURL=fbcf85ac8d3edb017310648d1e2563b16eead162.js.map