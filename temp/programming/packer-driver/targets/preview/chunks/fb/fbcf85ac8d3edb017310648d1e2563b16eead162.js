System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, screen, view, ResolutionPolicy, Widget, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, ScreenScaler;

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
      view = _cc.view;
      ResolutionPolicy = _cc.ResolutionPolicy;
      Widget = _cc.Widget;
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
      }), _dec5 = property(Node), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Node
      }), _dec11 = property({
        type: Node
      }), _dec(_class = (_class2 = class ScreenScaler extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "letterContainer", _descriptor, this);

          _initializerDefineProperty(this, "cardContainer", _descriptor2, this);

          _initializerDefineProperty(this, "completedWordsContainer", _descriptor3, this);

          _initializerDefineProperty(this, "wordsContainer", _descriptor4, this);

          _initializerDefineProperty(this, "playWidget", _descriptor5, this);

          _initializerDefineProperty(this, "iconWidget", _descriptor6, this);

          _initializerDefineProperty(this, "background", _descriptor7, this);

          _initializerDefineProperty(this, "constName", _descriptor8, this);

          _initializerDefineProperty(this, "sentences", _descriptor9, this);

          _initializerDefineProperty(this, "win", _descriptor10, this);

          this.originalWidth = 1920;
          this.originalHeigth = 1080;
          this.originalRatio = this.originalHeigth / this.originalWidth;
          this.horizontalState = true;
          this.originalLetterContainerPosition = void 0;
          this.originalCardContainerPosition = void 0;
          this.originalCompletedWordsContainerPosition = void 0;
          this.originalWordsContainerPosition = void 0;
          this.originalPlayWidgetRight = void 0;
          this.originalLetterContainerScale = void 0;
        }

        start() {
          this.originalLetterContainerPosition = this.letterContainer.getPosition();
          this.originalCardContainerPosition = this.cardContainer.getPosition();
          this.originalCompletedWordsContainerPosition = this.completedWordsContainer.getPosition();
          this.originalWordsContainerPosition = this.wordsContainer.getPosition();
          this.originalLetterContainerScale = this.letterContainer.getScale().clone();
          this.originalPlayWidgetRight = this.playWidget.getComponent(Widget).right;
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
          var ratio = currentHorizontalState ? height / width : width / height;
          var scale = ratio / this.originalRatio;
          if (scale > 1) scale = 1;

          if (currentHorizontalState != this.horizontalState) {
            this.horizontalState = currentHorizontalState;

            if (currentHorizontalState) {
              view.setDesignResolutionSize(this.originalWidth, this.originalHeigth, ResolutionPolicy.FIXED_WIDTH);
              this.letterContainer.setPosition(this.originalLetterContainerPosition.x, this.originalLetterContainerPosition.y * scale);
              this.cardContainer.setPosition(this.originalCardContainerPosition.x * scale, this.originalCardContainerPosition.y * scale);
              this.completedWordsContainer.setPosition(this.originalCompletedWordsContainerPosition.x * scale, this.originalCompletedWordsContainerPosition.y * scale);
              this.wordsContainer.setPosition(this.originalWordsContainerPosition.x * scale, this.originalWordsContainerPosition.y * scale);
              this.playWidget.getComponent(Widget).right = this.originalPlayWidgetRight;
            } else {
              view.setDesignResolutionSize(this.originalHeigth, this.originalWidth, ResolutionPolicy.FIXED_HEIGHT);
              this.letterContainer.setPosition(this.originalLetterContainerPosition.x * scale * 1.4, this.originalLetterContainerPosition.y * scale * 1.4);
              this.cardContainer.setPosition(this.originalCardContainerPosition.x * scale * 1.7, this.originalCardContainerPosition.y * scale / 1.7);
              this.completedWordsContainer.setPosition(this.originalCompletedWordsContainerPosition.x * scale * 1.5, this.originalCompletedWordsContainerPosition.y * scale * 2.2);
              this.wordsContainer.setPosition(this.originalWordsContainerPosition.x * scale * 3.1, this.originalWordsContainerPosition.y * scale * 3.1);
            }
          }

          this.letterContainer.setScale(this.originalLetterContainerScale.x * scale, this.originalLetterContainerScale.y * scale);
          this.cardContainer.setScale(scale, scale);
          this.completedWordsContainer.setScale(scale * 1.3, scale * 1.3);
          this.playWidget.setScale(scale, scale);
          this.win.setScale(scale, scale);
          this.constName.setScale(scale, scale);
          this.sentences.setScale(scale, scale);
          this.background.setScale(scale, scale);
          this.wordsContainer.setScale(scale, scale);

          if (!currentHorizontalState) {
            this.background.setScale(scale * 2, scale * 2);
            this.letterContainer.setScale(this.originalLetterContainerScale.x * 1.7 * scale, this.originalLetterContainerScale.y * 1.7 * scale);
            this.cardContainer.setScale(scale * 1.7, scale * 1.7);
            this.completedWordsContainer.setScale(scale * 2, scale * 2);
            this.sentences.setScale(scale * 1.4, scale * 1.4);
            this.wordsContainer.setScale(scale * 1.6, scale * 1.6);
          }

          console.log("Screen resized: width=" + width + ", height=" + height + ", scale=" + scale);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "letterContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "completedWordsContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "wordsContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "playWidget", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "iconWidget", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "background", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "constName", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sentences", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "win", [_dec11], {
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
//# sourceMappingURL=fbcf85ac8d3edb017310648d1e2563b16eead162.js.map