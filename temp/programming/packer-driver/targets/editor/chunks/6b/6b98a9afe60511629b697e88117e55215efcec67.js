System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, instantiate, UITransform, resources, TextAsset, Crossword, CrosswordLetterComponent, super_html_playable, SoundController, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, CrosswordController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCrossword(extras) {
    _reporterNs.report("Crossword", "./Crossword", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrosswordLetterComponent(extras) {
    _reporterNs.report("CrosswordLetterComponent", "../ui/CrosswordLetterComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrosswordWord(extras) {
    _reporterNs.report("CrosswordWord", "./CrosswordWord", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsuper_html_playable(extras) {
    _reporterNs.report("super_html_playable", "../services/super_html_playable", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundController(extras) {
    _reporterNs.report("SoundController", "../sound/SoundController", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      UITransform = _cc.UITransform;
      resources = _cc.resources;
      TextAsset = _cc.TextAsset;
    }, function (_unresolved_2) {
      Crossword = _unresolved_2.Crossword;
    }, function (_unresolved_3) {
      CrosswordLetterComponent = _unresolved_3.CrosswordLetterComponent;
    }, function (_unresolved_4) {
      super_html_playable = _unresolved_4.default;
    }, function (_unresolved_5) {
      SoundController = _unresolved_5.SoundController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e53d96e8pRECZnXgqf9Shx3", "CrosswordController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'instantiate', 'UITransform', 'resources', 'TextAsset']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CrosswordController", CrosswordController = (_dec = ccclass('CrosswordController'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: _crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
          error: Error()
        }), SoundController) : SoundController
      }), _dec(_class = (_class2 = class CrosswordController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "letterNode", _descriptor, this);

          _initializerDefineProperty(this, "sound", _descriptor2, this);

          this.crossword = new (_crd && Crossword === void 0 ? (_reportPossibleCrUseOfCrossword({
            error: Error()
          }), Crossword) : Crossword)();
        }

        start() {
          resources.load("configs/crossword", TextAsset, (err, textAsset) => {
            if (err) {
              console.error(err.message);
              return;
            }

            this.buildCrossword(textAsset.text);
          });
        }

        buildCrossword(config) {
          this.crossword.build(config);
          const transform = this.getComponent(UITransform);
          const spacingRatio = 0.05;
          const cellSize = (1 - spacingRatio) * transform.width / this.crossword.getMaxSize();
          this.letterNode.getComponent(_crd && CrosswordLetterComponent === void 0 ? (_reportPossibleCrUseOfCrosswordLetterComponent({
            error: Error()
          }), CrosswordLetterComponent) : CrosswordLetterComponent).setSize(cellSize);
          const cellSpaceSize = (1 + spacingRatio) * cellSize;
          const offsetX = -cellSpaceSize * this.crossword.sizeX / 2 + cellSpaceSize / 2;
          const offsetY = cellSpaceSize * this.crossword.sizeY / 2 - cellSpaceSize / 2;
          this.crossword.cells.forEach(cell => {
            let letterNode = instantiate(this.letterNode);
            letterNode.parent = this.node;
            letterNode.getComponent(_crd && CrosswordLetterComponent === void 0 ? (_reportPossibleCrUseOfCrosswordLetterComponent({
              error: Error()
            }), CrosswordLetterComponent) : CrosswordLetterComponent).setLetter(cell.letter);
            letterNode.setPosition(offsetX + cell.x * cellSpaceSize, offsetY - cell.y * cellSpaceSize, 0);
            cell.setNode(letterNode);
          });
          this.letterNode.destroy();
        }

        openWord(word) {
          const crosswordWord = this.crossword.words.find(cw => cw.word === word);
          let opened = false;

          if (!crosswordWord) {
            this.sound.play(this.sound.wrong);
            return {
              crosswordWord,
              opened
            };
          }

          opened = crosswordWord.letterCells.some(cell => !cell.opened) ? true : false;

          for (let i = 0; i < crosswordWord.letterCells.length; i++) {
            if (opened) crosswordWord.letterCells[i].changeState(true);else crosswordWord.letterCells[i].letterComponent.repeatWordAnimation();
          }

          if (opened) {
            this.sound.play(this.sound.correct);
            this.checkWinCondition();
          } else {
            this.sound.play(this.sound.wrong);
          }

          return {
            crosswordWord,
            opened
          };
        }

        checkWinCondition() {
          if (this.crossword.cells.some(cell => !cell.opened)) return;
          (_crd && super_html_playable === void 0 ? (_reportPossibleCrUseOfsuper_html_playable({
            error: Error()
          }), super_html_playable) : super_html_playable).game_end();
          (_crd && super_html_playable === void 0 ? (_reportPossibleCrUseOfsuper_html_playable({
            error: Error()
          }), super_html_playable) : super_html_playable).download();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "letterNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sound", [_dec3], {
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
//# sourceMappingURL=6b98a9afe60511629b697e88117e55215efcec67.js.map