System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Component, Label, CrosswordController, SoundController, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, HintController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCrosswordController(extras) {
    _reporterNs.report("CrosswordController", "../crossword/CrosswordController", _context.meta, extras);
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
      Button = _cc.Button;
      Component = _cc.Component;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      CrosswordController = _unresolved_2.CrosswordController;
    }, function (_unresolved_3) {
      SoundController = _unresolved_3.SoundController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6171fnL/GxKX7tkJQsk7l9y", "HintController", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HintController", HintController = (_dec = ccclass('HintController'), _dec2 = property({
        type: _crd && CrosswordController === void 0 ? (_reportPossibleCrUseOfCrosswordController({
          error: Error()
        }), CrosswordController) : CrosswordController
      }), _dec3 = property({
        type: _crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
          error: Error()
        }), SoundController) : SoundController
      }), _dec4 = property({
        type: Button
      }), _dec5 = property({
        type: Label
      }), _dec(_class = (_class2 = class HintController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "crosswordController", _descriptor, this);

          _initializerDefineProperty(this, "sound", _descriptor2, this);

          _initializerDefineProperty(this, "button", _descriptor3, this);

          _initializerDefineProperty(this, "label", _descriptor4, this);

          this.hintCount = 5;
        }

        start() {
          this.button.node.on(Button.EventType.CLICK, this.onClick, this);
          this.label.string = this.hintCount;
        }

        onClick(button) {
          if (this.hintCount < 1) return;

          if (this.tryOpenRandomLetters(1)) {
            this.hintCount--;
            this.label.string = this.hintCount;
            this.sound.play(this.sound.hint);
            this.crosswordController.checkWinCondition();
          }
        }

        tryOpenRandomLetters(count) {
          let result = false;
          let closedCells = this.crosswordController.crossword.cells.filter(cell => !cell.opened);

          for (let i = 0; i < count; i++) {
            if (closedCells.length === 0) break;
            let index = Math.floor(Math.random() * closedCells.length);
            closedCells[index].changeState(true);
            closedCells.splice(index, 1);
            result = true;
          }

          return result;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "crosswordController", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "button", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec5], {
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
//# sourceMappingURL=f783d27f068e8302716de83d135b1ae048153ac9.js.map