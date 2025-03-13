System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, Component, resources, SpriteFrame, TextAsset, tween, Node, DescriptionView, SpellingView, SpellingData, CorrectLabelComponent, super_html_playable, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, SpellingController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDescriptionView(extras) {
    _reporterNs.report("DescriptionView", "../description/DescriptionView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpellingView(extras) {
    _reporterNs.report("SpellingView", "./SpellingView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpellingData(extras) {
    _reporterNs.report("SpellingData", "./SpellingData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCorrectLabelComponent(extras) {
    _reporterNs.report("CorrectLabelComponent", "../CorrectLabelComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsuper_html_playable(extras) {
    _reporterNs.report("super_html_playable", "../../services/super_html_playable", _context.meta, extras);
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
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      TextAsset = _cc.TextAsset;
      tween = _cc.tween;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      DescriptionView = _unresolved_2.DescriptionView;
    }, function (_unresolved_3) {
      SpellingView = _unresolved_3.SpellingView;
    }, function (_unresolved_4) {
      SpellingData = _unresolved_4.SpellingData;
    }, function (_unresolved_5) {
      CorrectLabelComponent = _unresolved_5.CorrectLabelComponent;
    }, function (_unresolved_6) {
      super_html_playable = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1200cqMw85FfLLus4/Cr5cn", "SpellingController", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'Component', 'resources', 'SpriteFrame', 'TextAsset', 'tween', 'Tween', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpellingController", SpellingController = (_dec = ccclass('SpellingController'), _dec2 = property({
        type: _crd && DescriptionView === void 0 ? (_reportPossibleCrUseOfDescriptionView({
          error: Error()
        }), DescriptionView) : DescriptionView
      }), _dec3 = property({
        type: _crd && SpellingView === void 0 ? (_reportPossibleCrUseOfSpellingView({
          error: Error()
        }), SpellingView) : SpellingView
      }), _dec4 = property({
        type: _crd && CorrectLabelComponent === void 0 ? (_reportPossibleCrUseOfCorrectLabelComponent({
          error: Error()
        }), CorrectLabelComponent) : CorrectLabelComponent
      }), _dec5 = property({
        type: Animation
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = class SpellingController extends Component {
        constructor(...args) {
          super(...args);
          this.changeLevelClipName = "changeLevel";

          _initializerDefineProperty(this, "descriptionView", _descriptor, this);

          _initializerDefineProperty(this, "spellingView", _descriptor2, this);

          _initializerDefineProperty(this, "correctlabel", _descriptor3, this);

          _initializerDefineProperty(this, "animation", _descriptor4, this);

          _initializerDefineProperty(this, "redirectScreen", _descriptor5, this);

          this.currentLevelIndex = void 0;
          this.levelsData = void 0;
        }

        start() {
          this.redirectScreen.active = false;
          resources.load("configs/wordConnectConfig", TextAsset, (err, textAsset) => {
            if (err) {
              console.error(err.message);
              return;
            }

            this.buildSpelling(textAsset.text);
            this.currentLevelIndex = 0;
            this.applyLevelData();
          });
        }

        onLoad() {
          this.spellingView.node.on((_crd && SpellingView === void 0 ? (_reportPossibleCrUseOfSpellingView({
            error: Error()
          }), SpellingView) : SpellingView).VARIANT_SELECTED, this.onSomeVariantSelected, this);
        }

        onDestroy() {
          this.spellingView.node.off((_crd && SpellingView === void 0 ? (_reportPossibleCrUseOfSpellingView({
            error: Error()
          }), SpellingView) : SpellingView).VARIANT_SELECTED, this.onSomeVariantSelected, this);
        }

        buildSpelling(config) {
          this.levelsData = [];
          let levels = config.split('\n');

          for (let i = 0; i < levels.length; i++) {
            let level = new (_crd && SpellingData === void 0 ? (_reportPossibleCrUseOfSpellingData({
              error: Error()
            }), SpellingData) : SpellingData)();
            level.build(levels[i]);
            this.levelsData.push(level);
          }
        }

        applyLevelData() {
          let data = this.levelsData[this.currentLevelIndex];
          resources.load(data.pathToImage + '/spriteFrame', SpriteFrame, (err, spriteFrame) => {
            if (err) {
              console.error(err.message);
              return;
            }

            this.descriptionView.setNext(this.currentLevelIndex + 1, spriteFrame);
            this.spellingView.set(data.currentWord, data.wordVariants, data.correctVariantIndex);
          });
        }

        onSomeVariantSelected(event) {
          const index = event.index;
          if (index != this.levelsData[this.currentLevelIndex].correctVariantIndex) return;

          if (this.currentLevelIndex === this.levelsData.length - 1) {
            this.redirectScreen.active = true;
            (_crd && super_html_playable === void 0 ? (_reportPossibleCrUseOfsuper_html_playable({
              error: Error()
            }), super_html_playable) : super_html_playable).game_end();
            (_crd && super_html_playable === void 0 ? (_reportPossibleCrUseOfsuper_html_playable({
              error: Error()
            }), super_html_playable) : super_html_playable).download();
            return;
          }

          this.spellingView.block(true);
          let spellingTweens = this.spellingView.uncoverWord(this.levelsData[this.currentLevelIndex].getCorrectWord());
          let correctLabelTween = this.correctlabel.show();
          let allTweens = spellingTweens;
          allTweens.push(correctLabelTween);
          let tweensComplete = 0;
          allTweens.forEach(t => {
            t.call(() => {
              tweensComplete = tweensComplete + 1;
              if (tweensComplete === allTweens.length) this.showNextLevel();
            }).start();
          });
        }

        showNextLevel() {
          const changeLevelDelay = this.animation.getState(this.changeLevelClipName).clip.duration / 2;
          tween(this.node).delay(changeLevelDelay).call(() => {
            this.currentLevelIndex = this.currentLevelIndex + 1;
            this.applyLevelData();
          }).start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "descriptionView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spellingView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "correctlabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "animation", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "redirectScreen", [_dec6], {
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
//# sourceMappingURL=c15b5f978ee2dce2618980d301e8fb513b3cc986.js.map