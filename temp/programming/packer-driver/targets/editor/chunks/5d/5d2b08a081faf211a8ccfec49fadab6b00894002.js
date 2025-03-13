System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, input, Input, instantiate, Node, resources, TextAsset, UITransform, Vec2, Vec3, CrosswordController, ConnectorLetterComponent, LineGraphics, LettersLabelComponent, SoundController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, LettersConnectorController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCrosswordController(extras) {
    _reporterNs.report("CrosswordController", "../crossword/CrosswordController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConnectorLetterComponent(extras) {
    _reporterNs.report("ConnectorLetterComponent", "../ui/ConnectorLetterComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLineGraphics(extras) {
    _reporterNs.report("LineGraphics", "../ui/LineGraphics", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLettersLabelComponent(extras) {
    _reporterNs.report("LettersLabelComponent", "../ui/LettersLabelComponent", _context.meta, extras);
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
      input = _cc.input;
      Input = _cc.Input;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      resources = _cc.resources;
      TextAsset = _cc.TextAsset;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      CrosswordController = _unresolved_2.CrosswordController;
    }, function (_unresolved_3) {
      ConnectorLetterComponent = _unresolved_3.ConnectorLetterComponent;
    }, function (_unresolved_4) {
      LineGraphics = _unresolved_4.LineGraphics;
    }, function (_unresolved_5) {
      LettersLabelComponent = _unresolved_5.LettersLabelComponent;
    }, function (_unresolved_6) {
      SoundController = _unresolved_6.SoundController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35757Sc9QBKSKAJfmFGDtfk", "LettersConnectorController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'input', 'Input', 'instantiate', 'Node', 'resources', 'TextAsset', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LettersConnectorController", LettersConnectorController = (_dec = ccclass('LettersConnectorController'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: _crd && LineGraphics === void 0 ? (_reportPossibleCrUseOfLineGraphics({
          error: Error()
        }), LineGraphics) : LineGraphics
      }), _dec4 = property({
        type: _crd && LettersLabelComponent === void 0 ? (_reportPossibleCrUseOfLettersLabelComponent({
          error: Error()
        }), LettersLabelComponent) : LettersLabelComponent
      }), _dec5 = property({
        type: _crd && CrosswordController === void 0 ? (_reportPossibleCrUseOfCrosswordController({
          error: Error()
        }), CrosswordController) : CrosswordController
      }), _dec6 = property({
        type: _crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
          error: Error()
        }), SoundController) : SoundController
      }), _dec(_class = (_class2 = class LettersConnectorController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "letterNode", _descriptor, this);

          _initializerDefineProperty(this, "lineGraphics", _descriptor2, this);

          _initializerDefineProperty(this, "lettersLabelComponent", _descriptor3, this);

          _initializerDefineProperty(this, "crosswordContoller", _descriptor4, this);

          _initializerDefineProperty(this, "sound", _descriptor5, this);

          this.letterNodes = [];
          this.selectedLetters = [];
        }

        start() {
          input.on(Input.EventType.TOUCH_START, this.onTouch, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouch, this);
          input.on(Input.EventType.TOUCH_END, this.onEndTouch, this);
          input.on(Input.EventType.TOUCH_CANCEL, this.onEndTouch, this);
          resources.load("configs/letters", TextAsset, (err, textAsset) => {
            if (err) {
              console.error(err.message);
              return;
            }

            this.setup(textAsset.text);
          });
        }

        onDestroy() {
          input.off(Input.EventType.TOUCH_START, this.onTouch, this);
          input.off(Input.EventType.TOUCH_MOVE, this.onTouch, this);
          input.off(Input.EventType.TOUCH_END, this.onEndTouch, this);
          input.off(Input.EventType.TOUCH_CANCEL, this.onEndTouch, this);
        }

        setup(config) {
          const lettersCount = config.length;
          const uiTransform = this.getComponent(UITransform);
          const radiusRatio = 0.72;

          for (let i = 0; i < lettersCount; i++) {
            let letter = config[i];
            let letterNode = instantiate(this.letterNode);
            letterNode.parent = this.node;
            let connectorLetter = letterNode.getComponent(_crd && ConnectorLetterComponent === void 0 ? (_reportPossibleCrUseOfConnectorLetterComponent({
              error: Error()
            }), ConnectorLetterComponent) : ConnectorLetterComponent);
            connectorLetter.setLetter(letter);
            let x = Math.sin(2 * Math.PI / lettersCount * i);
            let y = Math.cos(2 * Math.PI / lettersCount * i);
            const radius = uiTransform.width / 2;
            x *= radius * radiusRatio;
            y *= radius * radiusRatio;
            letterNode.setPosition(x, y, 0);
            this.letterNodes.push(letterNode);
          }

          this.letterNode.destroy();
        }

        onTouch(event) {
          let touchLocation = event.getUILocation();
          let touchLocalPos = this.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(touchLocation.x, touchLocation.y, 0));
          touchLocation = new Vec2(touchLocalPos.x, touchLocalPos.y);

          for (let i = 0; i < this.letterNodes.length; i++) {
            let letterNode = this.letterNodes[i];
            if (!letterNode.getComponent(UITransform).getBoundingBox().contains(touchLocation)) continue;
            let connectorLetter = letterNode.getComponent(_crd && ConnectorLetterComponent === void 0 ? (_reportPossibleCrUseOfConnectorLetterComponent({
              error: Error()
            }), ConnectorLetterComponent) : ConnectorLetterComponent);

            if (!connectorLetter.selected) {
              connectorLetter.changeState(true);
              this.selectedLetters.push(letterNode);
              this.lettersLabelComponent.updateText(this.getCurrentLetters());
              this.playSound(this.selectedLetters.length);
            } else {
              const selectedLettersCount = this.selectedLetters.length;

              if (selectedLettersCount > 1 && this.selectedLetters[selectedLettersCount - 2] === letterNode) {
                this.selectedLetters[selectedLettersCount - 1].getComponent(_crd && ConnectorLetterComponent === void 0 ? (_reportPossibleCrUseOfConnectorLetterComponent({
                  error: Error()
                }), ConnectorLetterComponent) : ConnectorLetterComponent).changeState(false);
                this.selectedLetters.splice(selectedLettersCount - 1, 1);
                this.lettersLabelComponent.updateText(this.getCurrentLetters());
              }
            }
          }

          this.redrawLine(touchLocalPos);
        }

        onEndTouch(event) {
          const letters = this.getCurrentLetters();

          if (letters.length > 2) {
            const {
              crosswordWord,
              opened
            } = this.crosswordContoller.openWord(letters);

            if (opened) {
              this.lettersLabelComponent.updateText(null);
            } else {
              this.lettersLabelComponent.wrongWordShake(null);
            }
          } else {
            this.lettersLabelComponent.updateText(null);
          }

          this.selectedLetters.forEach(node => {
            node.getComponent(_crd && ConnectorLetterComponent === void 0 ? (_reportPossibleCrUseOfConnectorLetterComponent({
              error: Error()
            }), ConnectorLetterComponent) : ConnectorLetterComponent).changeState(false);
          });
          this.selectedLetters = [];
          this.redrawLine(null);
        }

        getCurrentLetters() {
          let result = '';
          this.selectedLetters.forEach(node => {
            result += node.getComponent(_crd && ConnectorLetterComponent === void 0 ? (_reportPossibleCrUseOfConnectorLetterComponent({
              error: Error()
            }), ConnectorLetterComponent) : ConnectorLetterComponent).letter;
          });
          return result;
        }

        redrawLine(touchPosition) {
          let points = [];

          if (this.selectedLetters.length > 0) {
            this.selectedLetters.forEach(letterNode => {
              let pos = letterNode.getPosition();
              points.push(new Vec2(pos.x, pos.y));
            });
            points.push(new Vec2(touchPosition.x, touchPosition.y));
          }

          this.lineGraphics.redrawLine(points);
        }

        playSound(step) {
          let audioClip = this.sound.letter1;
          if (step == 2) audioClip = this.sound.letter2;else if (step >= 3) audioClip = this.sound.letter3;
          this.sound.play(audioClip);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "letterNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lineGraphics", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lettersLabelComponent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "crosswordContoller", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sound", [_dec6], {
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
//# sourceMappingURL=5d2b08a081faf211a8ccfec49fadab6b00894002.js.map