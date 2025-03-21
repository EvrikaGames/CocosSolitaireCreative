System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, StoreButtonComponent, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Blocker;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfStoreButtonComponent(extras) {
    _reporterNs.report("StoreButtonComponent", "../ui/StoreButtonComponent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      StoreButtonComponent = _unresolved_2.StoreButtonComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7e6ezrqRhBt7pIH001LpJv", "Blocker", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform', 'Color', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Blocker", Blocker = (_dec = ccclass('Blocker'), _dec2 = property(Node), _dec3 = property(_crd && StoreButtonComponent === void 0 ? (_reportPossibleCrUseOfStoreButtonComponent({
        error: Error()
      }), StoreButtonComponent) : StoreButtonComponent), _dec(_class = (_class2 = class Blocker extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "blocker", _descriptor, this);

          _initializerDefineProperty(this, "button", _descriptor2, this);
        }

        onLoad() {
          const uiTransform = this.blocker.getComponent(UITransform);

          if (uiTransform) {
            uiTransform.setContentSize(this.node.parent.getComponent(UITransform).contentSize);
            this.blocker.setPosition(0, 0, 0);
          }

          this.blocker.active = false;
        }

        showBlocker() {
          this.blocker.active = true;
        }

        hideBlocker() {
          this.blocker.active = false;
        }

        activateButtonStore() {
          this.button.enabled = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blocker", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec3], {
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
//# sourceMappingURL=0e55dff55ab1bf34b7b940a388d8e903e00b4778.js.map