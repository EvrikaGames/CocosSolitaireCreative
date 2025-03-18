System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Quat, tween, Vec3, GameController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, TutorialHandMover;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      Node = _cc.Node;
      Quat = _cc.Quat;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameController = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ee23BvJg9CMqxCsxlBIxqb", "TutorialHandMover", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Quat', 'tween', 'Tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TutorialHandMover", TutorialHandMover = (_dec = ccclass('TutorialHandMover'), _dec2 = property({
        type: _crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
          error: Error()
        }), GameController) : GameController
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = class TutorialHandMover extends Component {
        constructor(...args) {
          super(...args);
          this.timeToActivate = 4;

          _initializerDefineProperty(this, "game", _descriptor, this);

          _initializerDefineProperty(this, "hand", _descriptor2, this);

          _initializerDefineProperty(this, "firstTarget", _descriptor3, this);

          this.shouldActivate = void 0;
          this.remainingTime = void 0;
          this.to = void 0;
          this.toScaleTween = void 0;
          this.rotationTween = void 0;
          this.toScaleYellowTween = void 0;
          this.backYellow = void 0;
        }

        onLoad() {
          this.game.node.on((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).VARIANTS_UPDATED, this.shouldShowHand, this);
          this.game.node.on((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).VARIANT_SELECTED, this.hideHand, this);
        }

        onDestroy() {
          this.game.node.off((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).VARIANTS_UPDATED, this.shouldShowHand, this);
          this.game.node.off((_crd && GameController === void 0 ? (_reportPossibleCrUseOfGameController({
            error: Error()
          }), GameController) : GameController).VARIANT_SELECTED, this.hideHand, this);
        }

        start() {
          this.hand.active = false;
          this.shouldActivate = false;
          this.to = this.firstTarget;
        }

        update(deltaTime) {
          if (!this.shouldActivate) return;
          this.remainingTime -= deltaTime;
          if (this.remainingTime > 0) return;
          this.shouldActivate = false;
          this.moveHand();
        }

        moveHand() {
          this.hand.active = true;
          const moveDelay = 0.5;
          const scaleToNormal = 0.5;
          let correctVariant = this.game.getCorrectVariant();

          if (correctVariant) {
            this.to = correctVariant.node;
            this.to.eulerAngles = new Vec3(0, 0, 0);
            this.backYellow = correctVariant.backYellow;
            this.backYellow.active = true;
            this.hand.setWorldPosition(this.firstTarget.getWorldPosition());
            this.hand.setWorldPosition(this.to.getWorldPosition());
            /*tween(this.hand)
                .to(0.2, { worldPosition: this.to.getWorldPosition() })
                .start();*/

            tween(this.hand).to(0.5, {
              scale: new Vec3(0.8, 0.8)
            }).to(0.5, {
              scale: new Vec3(0.7, 0.7)
            }).union().repeatForever().start();
            this.toScaleTween = tween(this.to).to(moveDelay, {
              scale: new Vec3(1.1, 1.1)
            }).to(scaleToNormal, {
              scale: Vec3.ONE
            }).union().repeatForever().start();
            this.rotationTween = tween(this.to).to(0.3, {
              eulerAngles: new Vec3(0, 0, this.to.eulerAngles.z + 10)
            }).to(0.3, {
              eulerAngles: new Vec3(0, 0, this.to.eulerAngles.z - 10)
            }).union().repeatForever().start();
            this.toScaleYellowTween = tween(this.backYellow).to(0.3, {
              scale: new Vec3(0.8, 0.8)
            }).to(0.3, {
              scale: new Vec3(0.6, 0.6)
            }).union().repeatForever().start();
          }
        }

        shouldShowHand() {
          if (this.toScaleTween) {
            this.hideHand();
          }

          this.hand.active = false;
          this.shouldActivate = true;
          this.remainingTime = this.timeToActivate;
        }

        hideHand() {
          if (this.toScaleTween) {
            this.toScaleTween.stop();
          }

          if (this.rotationTween) {
            this.rotationTween.stop();
          }

          if (this.toScaleYellowTween) {
            this.toScaleYellowTween.stop();
          }

          if (this.to) {
            this.to.setScale(Vec3.ONE);
            this.to.setRotation(new Quat(0, 0, 0));
          }

          this.hand.active = false;
          this.shouldActivate = false;
          this.backYellow.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "game", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hand", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "firstTarget", [_dec4], {
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
//# sourceMappingURL=a70709c2ebe87f7c9113eea729a541c2dcb4642c.js.map