System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, tween, Vec3, QuizController, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, TutorialHandMover;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfQuizController(extras) {
    _reporterNs.report("QuizController", "./QuizController", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      QuizController = _unresolved_2.QuizController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7ee23BvJg9CMqxCsxlBIxqb", "TutorialHandMover", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TutorialHandMover", TutorialHandMover = (_dec = ccclass('TutorialHandMover'), _dec2 = property({
        type: _crd && QuizController === void 0 ? (_reportPossibleCrUseOfQuizController({
          error: Error()
        }), QuizController) : QuizController
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec(_class = (_class2 = class TutorialHandMover extends Component {
        constructor(...args) {
          super(...args);
          this.timeToActivate = 2;

          _initializerDefineProperty(this, "quiz", _descriptor, this);

          _initializerDefineProperty(this, "hand", _descriptor2, this);

          _initializerDefineProperty(this, "firstTarget", _descriptor3, this);

          this.shouldActivate = void 0;
          this.remainingTime = void 0;
          this.repeatTween = void 0;
          this.to = void 0;
          this.toScaleTween = void 0;
        }

        onLoad() {
          this.quiz.node.on((_crd && QuizController === void 0 ? (_reportPossibleCrUseOfQuizController({
            error: Error()
          }), QuizController) : QuizController).VARIANTS_UPDATED, this.shouldShowHand, this);
          this.quiz.node.on((_crd && QuizController === void 0 ? (_reportPossibleCrUseOfQuizController({
            error: Error()
          }), QuizController) : QuizController).VARIANT_SELECTED, this.hideHand, this);
        }

        onDestroy() {
          this.quiz.node.off((_crd && QuizController === void 0 ? (_reportPossibleCrUseOfQuizController({
            error: Error()
          }), QuizController) : QuizController).VARIANTS_UPDATED, this.shouldShowHand, this);
          this.quiz.node.off((_crd && QuizController === void 0 ? (_reportPossibleCrUseOfQuizController({
            error: Error()
          }), QuizController) : QuizController).VARIANT_SELECTED, this.hideHand, this);
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
          const scaleToNormal = 0.3;
          const variants = this.quiz.getActiveVariants();
          let variantIndex = 0;
          this.to = variants[variantIndex].node;
          this.hand.setWorldPosition(this.firstTarget.getWorldPosition());
          const callMoveTween = tween(this.node).call(() => {
            tween(this.hand).to(moveDelay, {
              worldPosition: this.to.getWorldPosition()
            }).start();
            this.toScaleTween = tween(this.to).to(moveDelay, {
              scale: new Vec3(1.1, 1.1)
            }).to(scaleToNormal, {
              scale: Vec3.ONE
            }).start();
          });
          const delayTween = tween(this.node).delay(moveDelay + scaleToNormal);
          const changeTo = tween(this.node).call(() => {
            variantIndex = (variantIndex + 1) % variants.length;
            this.to = variants[variantIndex].node;
          });
          this.repeatTween = tween(this.node).sequence(callMoveTween, delayTween, changeTo).repeatForever().start();
        }

        shouldShowHand() {
          if (this.repeatTween) this.hideHand();
          this.hand.active = false;
          this.shouldActivate = true;
          this.remainingTime = this.timeToActivate;
        }

        hideHand() {
          if (this.repeatTween) this.repeatTween.stop();
          this.hand.active = false;
          this.shouldActivate = false;
          if (this.toScaleTween) this.toScaleTween.stop();
          this.to.setScale(Vec3.ONE);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "quiz", [_dec2], {
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
//# sourceMappingURL=b5a39ff96114341a439653cc288e96f743f616e2.js.map