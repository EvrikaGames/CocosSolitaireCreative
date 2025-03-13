System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Color, Component, Sprite, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, HintComponent;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      Color = _cc.Color;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5bb4m44X9Kxoab0cAKLthP", "HintComponent", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Color', 'Component', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HintComponent", HintComponent = (_dec = ccclass('HintComponent'), _dec2 = property({
        type: Sprite
      }), _dec(_class = (_class2 = (_class3 = class HintComponent extends Component {
        constructor(...args) {
          super(...args);
          this.originalColor = Color.WHITE;
          this.inactiveColor = new Color(255, 255, 255, 100);

          _initializerDefineProperty(this, "hintButton", _descriptor, this);

          this.isHintButtonActive = true;
        }

        onLoad() {
          this.updateHintColor();
          this.node.on(Button.EventType.CLICK, this.onButtonCliecke, this);
        }

        onDestroy() {
          this.node.off(Button.EventType.CLICK, this.onButtonCliecke, this);
        }

        onButtonCliecke(button) {
          if (!this.isHintButtonActive) return;
          this.isHintButtonActive = false;
          this.updateHintColor();
          this.node.emit(HintComponent.ON_HINT_CLICKED, {});
        }

        updateHintColor() {
          this.hintButton.color = this.isHintButtonActive ? this.originalColor : this.inactiveColor;
        }

      }, _class3.ON_HINT_CLICKED = "hint_clicked", _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hintButton", [_dec2], {
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
//# sourceMappingURL=affd8d19674c73a16984343a560430f7a0ded53c.js.map