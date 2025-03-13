System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Label, Sprite, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, QuizVariant;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51ef1ZDcSRIhLcxv216hYDS", "QuizVariant", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'Label', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("QuizVariant", QuizVariant = (_dec = ccclass('QuizVariant'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Sprite
      }), _dec(_class = (_class2 = (_class3 = class QuizVariant extends Component {
        constructor() {
          super(...arguments);
          this.correctColor = new Color(0, 255, 0);
          this.uncorrectColor = new Color(255, 0, 0);

          _initializerDefineProperty(this, "wordLabel", _descriptor, this);

          _initializerDefineProperty(this, "checkSprite", _descriptor2, this);

          this.index = void 0;
          this.isCorrect = void 0;
          this.isClicked = void 0;
          this.isBlocked = void 0;
          this.defaultColor = void 0;
        }

        onLoad() {
          this.defaultColor = new Color(this.checkSprite.color);
        }

        set(word, index, isCorrect) {
          this.isClicked = false;
          this.block(false);
          this.index = index;
          this.isCorrect = isCorrect;
          this.wordLabel.string = word;
        }

        reset() {
          this.checkSprite.color = this.defaultColor;
          this.isClicked = false;
          this.isBlocked = false;
        }

        onButtonClicked() {
          if (this.isClicked || this.isBlocked) return;
          this.isClicked = true;
          this.checkSprite.color = this.isCorrect ? this.correctColor : this.uncorrectColor;
          this.node.emit(QuizVariant.SELECTED_EVENT, {
            index: this.index
          });
        }

        block(isBlocked) {
          this.isBlocked = isBlocked;
        }

      }, _class3.SELECTED_EVENT = "selected", _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "wordLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "checkSprite", [_dec3], {
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
//# sourceMappingURL=c8ca29c3ed65ac74579e07c4599e9c89fffe812a.js.map