System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, math, resources, SpriteFrame, TextAsset, tween, QuizDescription, QuizVariant, QuizData, HintComponent, CorrectLabelComponent, ResultScreen, super_html_playable, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _crd, ccclass, property, QuizController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfQuizDescription(extras) {
    _reporterNs.report("QuizDescription", "./QuizDescription", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQuizVariant(extras) {
    _reporterNs.report("QuizVariant", "./QuizVariant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQuizData(extras) {
    _reporterNs.report("QuizData", "./QuizData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHintComponent(extras) {
    _reporterNs.report("HintComponent", "./HintComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCorrectLabelComponent(extras) {
    _reporterNs.report("CorrectLabelComponent", "../wordConnect/CorrectLabelComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResultScreen(extras) {
    _reporterNs.report("ResultScreen", "./ResultScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsuper_html_playable(extras) {
    _reporterNs.report("super_html_playable", "../services/super_html_playable", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      Component = _cc.Component;
      math = _cc.math;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      TextAsset = _cc.TextAsset;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      QuizDescription = _unresolved_2.QuizDescription;
    }, function (_unresolved_3) {
      QuizVariant = _unresolved_3.QuizVariant;
    }, function (_unresolved_4) {
      QuizData = _unresolved_4.QuizData;
    }, function (_unresolved_5) {
      HintComponent = _unresolved_5.HintComponent;
    }, function (_unresolved_6) {
      CorrectLabelComponent = _unresolved_6.CorrectLabelComponent;
    }, function (_unresolved_7) {
      ResultScreen = _unresolved_7.ResultScreen;
    }, function (_unresolved_8) {
      super_html_playable = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb31bo0o4NKSpo3coaFsq+9", "QuizController", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'math', 'resources', 'SpriteFrame', 'TextAsset', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("QuizController", QuizController = (_dec = ccclass('QuizController'), _dec2 = property({
        type: _crd && QuizDescription === void 0 ? (_reportPossibleCrUseOfQuizDescription({
          error: Error()
        }), QuizDescription) : QuizDescription
      }), _dec3 = property([_crd && QuizVariant === void 0 ? (_reportPossibleCrUseOfQuizVariant({
        error: Error()
      }), QuizVariant) : QuizVariant]), _dec4 = property({
        type: _crd && HintComponent === void 0 ? (_reportPossibleCrUseOfHintComponent({
          error: Error()
        }), HintComponent) : HintComponent
      }), _dec5 = property({
        type: _crd && CorrectLabelComponent === void 0 ? (_reportPossibleCrUseOfCorrectLabelComponent({
          error: Error()
        }), CorrectLabelComponent) : CorrectLabelComponent
      }), _dec6 = property({
        type: _crd && ResultScreen === void 0 ? (_reportPossibleCrUseOfResultScreen({
          error: Error()
        }), ResultScreen) : ResultScreen
      }), _dec7 = property({
        type: Animation
      }), _dec(_class = (_class2 = (_class3 = class QuizController extends Component {
        constructor() {
          super(...arguments);
          this.quizShakeClipName = "quizShake";

          _initializerDefineProperty(this, "description", _descriptor, this);

          _initializerDefineProperty(this, "variants", _descriptor2, this);

          _initializerDefineProperty(this, "hint", _descriptor3, this);

          _initializerDefineProperty(this, "correct", _descriptor4, this);

          _initializerDefineProperty(this, "result", _descriptor5, this);

          _initializerDefineProperty(this, "animation", _descriptor6, this);

          this.quizIndex = void 0;
          this.quizData = void 0;
          this.correctCount = 0;
        }

        onLoad() {
          this.variants.forEach(v => {
            v.node.on((_crd && QuizVariant === void 0 ? (_reportPossibleCrUseOfQuizVariant({
              error: Error()
            }), QuizVariant) : QuizVariant).SELECTED_EVENT, this.onVariantSelected, this);
          });
          this.hint.node.on((_crd && HintComponent === void 0 ? (_reportPossibleCrUseOfHintComponent({
            error: Error()
          }), HintComponent) : HintComponent).ON_HINT_CLICKED, this.onHintClicked, this);
        }

        onDestroy() {
          this.variants.forEach(v => {
            v.node.off((_crd && QuizVariant === void 0 ? (_reportPossibleCrUseOfQuizVariant({
              error: Error()
            }), QuizVariant) : QuizVariant).SELECTED_EVENT, this.onVariantSelected, this);
          });
          this.hint.node.off((_crd && HintComponent === void 0 ? (_reportPossibleCrUseOfHintComponent({
            error: Error()
          }), HintComponent) : HintComponent).ON_HINT_CLICKED, this.onHintClicked, this);
        }

        start() {
          //resources.load("configs/quizConfig", TextAsset, (err, textAsset) => {
          resources.load("configs/quizConfigEN", TextAsset, (err, textAsset) => {
            if (err) {
              console.log(err.message);
              return;
            }

            this.buildQuiz(textAsset.text);
            this.quizIndex = 0;
            this.applyData();
          });
        }

        getActiveVariants() {
          return this.variants.filter(v => v.node.active == true);
        }

        buildQuiz(config) {
          this.quizData = [];
          var quizSplits = config.split('\n');

          for (var i = 0; i < quizSplits.length; i++) {
            var data = new (_crd && QuizData === void 0 ? (_reportPossibleCrUseOfQuizData({
              error: Error()
            }), QuizData) : QuizData)();
            data.build(quizSplits[i]);
            this.quizData.push(data);
          }
        }

        getCurrentQuizData() {
          return this.quizData[this.quizIndex];
        }

        applyData() {
          var data = this.getCurrentQuizData();
          resources.load(data.pathToImage + '/spriteFrame', SpriteFrame, (err, spriteFrame) => {
            if (err) {
              console.log(err.message);
              return;
            }

            this.description.set(spriteFrame, this.quizIndex + 1, this.quizData.length, data.description);
            this.variants.forEach((v, i) => {
              var data = this.getCurrentQuizData();
              v.node.active = true;
              v.reset();
              v.set(data.wordVariants[i], i, i == data.correctVariantIndex);
            });
            this.node.emit(QuizController.VARIANTS_UPDATED, {});
          });
        }

        changeQuiz() {
          this.quizIndex++;

          if (this.quizIndex >= this.quizData.length) {
            (_crd && super_html_playable === void 0 ? (_reportPossibleCrUseOfsuper_html_playable({
              error: Error()
            }), super_html_playable) : super_html_playable).game_end();
            (_crd && super_html_playable === void 0 ? (_reportPossibleCrUseOfsuper_html_playable({
              error: Error()
            }), super_html_playable) : super_html_playable).download();
            this.result.show(this.correctCount == this.quizData.length);
            return;
          }

          this.applyData();
        }

        onVariantSelected(event) {
          var index = event.index;
          this.node.emit(QuizController.VARIANT_SELECTED, {
            index: index
          });
          var quiz = this.getCurrentQuizData();

          if (index == quiz.correctVariantIndex) {
            this.correctCount++;
            var correctTween = this.correct.show();
            correctTween.call(() => {
              this.changeQuiz();
            }).start();
          } else {
            tween(this.node).call(() => this.animation.play(this.quizShakeClipName)).delay(this.animation.getState(this.quizShakeClipName).clip.duration).call(() => {
              this.changeQuiz();
            }).start();
          }
        }

        onHintClicked(event) {
          var quizData = this.getCurrentQuizData();
          var correctIndex = quizData.correctVariantIndex;
          var randomIndex = math.randomRangeInt(0, quizData.wordVariants.length - 1);

          if (randomIndex == correctIndex) {
            randomIndex = (randomIndex + 1) % quizData.wordVariants.length;
          }

          this.variants.forEach((v, i) => {
            v.node.active = i == correctIndex || i == randomIndex;
          });
          this.node.emit(QuizController.VARIANTS_UPDATED, {});
        }

      }, _class3.VARIANTS_UPDATED = "variants_updated", _class3.VARIANT_SELECTED = "variant_selected", _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "variants", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hint", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "correct", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "result", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec7], {
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
//# sourceMappingURL=54ee4c831e1c02eff145c8742216449fde0f0c68.js.map