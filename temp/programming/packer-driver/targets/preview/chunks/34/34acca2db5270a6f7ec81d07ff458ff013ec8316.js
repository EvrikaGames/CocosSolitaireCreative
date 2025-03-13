System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CrosswordWord, _crd;

  function _reportPossibleCrUseOfCrosswordCell(extras) {
    _reporterNs.report("CrosswordCell", "./CrosswordCell", _context.meta, extras);
  }

  _export("CrosswordWord", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bfff1wRkC1CzpwMvSwwCcHg", "CrosswordWord", undefined);

      _export("CrosswordWord", CrosswordWord = class CrosswordWord {
        constructor(word, vertical, letterCells) {
          this.word = void 0;
          this.vertical = void 0;
          this.letterCells = void 0;
          this.word = word;
          this.vertical = vertical;
          this.letterCells = letterCells;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=34acca2db5270a6f7ec81d07ff458ff013ec8316.js.map