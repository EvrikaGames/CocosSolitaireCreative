System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, Label, Node, Vec3, tween, UITransform, Quat, Prefab, instantiate, GameController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, Card;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfICardData(extras) {
    _reporterNs.report("ICardData", "./ICardData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameController(extras) {
    _reporterNs.report("GameController", "./GameController", _context.meta, extras);
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
      find = _cc.find;
      Label = _cc.Label;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      Quat = _cc.Quat;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      GameController = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "afa4clDUxxMI5SUp4d7V3+y", "Card", undefined);

      __checkObsolete__(['_decorator', 'Component', 'find', 'Label', 'Node', 'Vec3', 'Event', 'EventTouch', 'Canvas', 'tween', 'UITransform', 'Quat', 'Sprite', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", Card = (_dec = property(Label), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Prefab), ccclass(_class = (_class2 = class Card extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "label", _descriptor, this);

          _initializerDefineProperty(this, "back", _descriptor2, this);

          _initializerDefineProperty(this, "backYellow", _descriptor3, this);

          _initializerDefineProperty(this, "circle", _descriptor4, this);

          this.num = void 0;
          this.cardData = void 0;
          this.initialPosition = void 0;
          this.isSelected = false;
          this.isRevealed = false;

          _initializerDefineProperty(this, "rotationAngle", _descriptor5, this);

          this.canTouch = true;
        }

        init(cardData) {
          this.cardData = cardData;
          this.label.string = cardData.letter;
          this.back.active = !cardData.revealed;
          this.isRevealed = cardData.revealed;
          this.initialPosition = new Vec3(this.node.position);
          this.backYellow.active = false;
        }

        reveal() {
          this.back.active = false;
          this.isRevealed = true;
        }

        hide() {
          this.back.active = true;
          this.isRevealed = false;
        }

        onEnable() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this); //this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }

        onDisable() {
          this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this); //this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);

          this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }

        onTouchStart(event) {}

        onTouchEnd(event) {
          if (!this.canTouch) {
            return;
          }

          if (this.isRevealed) {
            this.canTouch = false;
            var index = event.index;
            this.node.emit((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
              error: Error()
            }), GameController) : GameController).VARIANTS_UPDATED, {
              index: index
            });
            var game = find('Canvas').getComponentInChildren('GameController');
            var closestSlot = game.moveCardToWord(this.node.getComponent(Card));
            setTimeout(() => {
              this.canTouch = true;
            }, 500);
          }
        }

        moveTo(targetWorldPos) {
          var parentUI = this.node.parent.getComponent(UITransform);

          if (!parentUI) {
            console.warn("Родительский узел не содержит UITransform");
            return;
          }

          var localTarget = parentUI.convertToNodeSpaceAR(targetWorldPos);
          tween(this.node).to(0.2, {
            position: localTarget,
            eulerAngles: new Vec3(0, 0, -this.rotationAngle)
          }).start();
          this.backYellow.active = false;
        }

        moveToCompleteWord(worldPos) {
          var localPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          tween(this.node).to(0.5, {
            position: localPos
          }).call(() => {
            this.unschedule(this.createCircle);
          }).to(0.5, {
            scale: Vec3.ZERO
          }).call(() => {
            this.removeCard();
          }).start();
          this.schedule(this.createCircle.bind(this), 0.005, Math.ceil(0.1 / 0.005));
        }

        createCircle() {
          var newCircle = instantiate(this.circle);
          newCircle.parent = this.node.parent;
          var worldPos = this.node.getWorldPosition();
          var localPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
          newCircle.setPosition(localPos);
          newCircle.setSiblingIndex(this.node.getSiblingIndex());
          newCircle.setScale(this.node.getScale().clone());
          tween(newCircle).to(0.3, {
            scale: new Vec3(0, 0, 0)
          }).call(() => {
            newCircle.destroy();
          }).start();
        }

        removeCard() {
          this.node.destroy();
        }

        returnCardToPosition() {
          this.node.setRotation(new Quat(0, 0, 0));
          tween(this.node).to(0.2, {
            position: this.initialPosition
          }).start();
          this.backYellow.active = false;
        }

        getLetter() {
          return this.cardData.letter;
        }

        setNum(num) {
          this.num = num;
        }

        getNumber() {
          return this.num;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "back", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "backYellow", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "circle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rotationAngle", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 360;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=da5cbf94118edc9df073e29647c8c46970f50b83.js.map