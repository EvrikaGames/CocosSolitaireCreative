System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Vec3, instantiate, SpellingLetter, SpellingVariant, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, SpellingView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSpellingLetter(extras) {
    _reporterNs.report("SpellingLetter", "./SpellingLetter", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpellingVariant(extras) {
    _reporterNs.report("SpellingVariant", "./SpellingVariant", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      SpellingLetter = _unresolved_2.SpellingLetter;
    }, function (_unresolved_3) {
      SpellingVariant = _unresolved_3.SpellingVariant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ec9c6YnNNdH+LbLo6P/E9vy", "SpellingView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Tween', 'Node', 'Vec3', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpellingView", SpellingView = (_dec = ccclass('SpellingView'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Node
      }), _dec4 = property([_crd && SpellingVariant === void 0 ? (_reportPossibleCrUseOfSpellingVariant({
        error: Error()
      }), SpellingVariant) : SpellingVariant]), _dec(_class = (_class2 = (_class3 = class SpellingView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lettersRoot", _descriptor, this);

          _initializerDefineProperty(this, "letterPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "variants", _descriptor3, this);

          this.letterXSize = 85;
          this.letterXOffset = 10;
          this.letters = [];
        }

        set(word, variants, correctVariantIndex) {
          this.placeLetters(word.length);

          for (var i = 0; i < word.length; i++) {
            this.letters[i].set(word[i]);
          }

          for (var _i = 0; _i < this.variants.length; _i++) {
            this.variants[_i].set(variants[_i], _i, _i == correctVariantIndex);
          }
        }

        onLoad() {
          this.variants.forEach(v => {
            v.node.on((_crd && SpellingVariant === void 0 ? (_reportPossibleCrUseOfSpellingVariant({
              error: Error()
            }), SpellingVariant) : SpellingVariant).SELECTED_EVENT, this.onVariantSelected, this);
          });
        }

        onDestroy() {
          this.variants.forEach(v => {
            v.node.off((_crd && SpellingVariant === void 0 ? (_reportPossibleCrUseOfSpellingVariant({
              error: Error()
            }), SpellingVariant) : SpellingVariant).SELECTED_EVENT, this.onVariantSelected, this);
          });
        }

        onVariantSelected(event) {
          var index = event.index;
          this.node.emit(SpellingView.VARIANT_SELECTED, {
            index: index
          });
        }

        uncoverWord(word) {
          var lettersTweens = this.letters.map((l, i) => {
            return l.scaleTween(word[i], i * 0.25);
          });
          return lettersTweens;
        }

        block(isBlocked) {
          this.variants.forEach(v => {
            v.block(isBlocked);
          });
        }

        placeLetters(length) {
          while (this.letters.length > length) {
            this.letters.pop().node.destroy();
          }

          while (this.letters.length < length) {
            var letter = instantiate(this.letterPrefab);
            letter.active = true;
            letter.parent = this.lettersRoot;
            this.letters.push(letter.getComponent(_crd && SpellingLetter === void 0 ? (_reportPossibleCrUseOfSpellingLetter({
              error: Error()
            }), SpellingLetter) : SpellingLetter));
          }

          var offset = this.letterXSize + this.letterXOffset;
          var spawnX = (this.letters.length - 1) * offset / -2;

          for (var i = 0; i < this.letters.length; i++) {
            var _letter = this.letters[i];

            _letter.node.setPosition(new Vec3(spawnX + i * offset, 0, 0));
          }
        }

      }, _class3.VARIANT_SELECTED = "variant_selected", _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lettersRoot", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "letterPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "variants", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=19da14aacaa9d49f087c78079b3f9c18e149202d.js.map