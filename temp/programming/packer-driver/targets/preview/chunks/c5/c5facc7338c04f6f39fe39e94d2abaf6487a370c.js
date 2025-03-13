System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, CrosswordLetterComponent, CrosswordCell, _crd;

  function _reportPossibleCrUseOfCrosswordLetterComponent(extras) {
    _reporterNs.report("CrosswordLetterComponent", "../ui/CrosswordLetterComponent", _context.meta, extras);
  }

  _export("CrosswordCell", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      CrosswordLetterComponent = _unresolved_2.CrosswordLetterComponent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b9ee3CxC5HQqyPLPKBMiKQ", "CrosswordCell", undefined);

      __checkObsolete__(['Node']);

      _export("CrosswordCell", CrosswordCell = class CrosswordCell {
        constructor(x, y, letter) {
          this.x = void 0;
          this.y = void 0;
          this.letter = void 0;
          this.opened = void 0;
          this.node = void 0;
          this.letterComponent = void 0;
          this.x = x;
          this.y = y;
          this.opened = false;
          this.letter = letter;
          this.node = null;
          this.letterComponent = null;
        }

        setNode(node) {
          this.node = node;
          this.letterComponent = node.getComponent(_crd && CrosswordLetterComponent === void 0 ? (_reportPossibleCrUseOfCrosswordLetterComponent({
            error: Error()
          }), CrosswordLetterComponent) : CrosswordLetterComponent);
        }

        changeState(opened) {
          this.opened = opened;
          if (this.letterComponent) this.letterComponent.changeState(opened);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5facc7338c04f6f39fe39e94d2abaf6487a370c.js.map