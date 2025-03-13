System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CrosswordCell, CrosswordWord, Crossword, _crd;

  function _reportPossibleCrUseOfCrosswordCell(extras) {
    _reporterNs.report("CrosswordCell", "./CrosswordCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCrosswordWord(extras) {
    _reporterNs.report("CrosswordWord", "./CrosswordWord", _context.meta, extras);
  }

  _export("Crossword", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      CrosswordCell = _unresolved_2.CrosswordCell;
    }, function (_unresolved_3) {
      CrosswordWord = _unresolved_3.CrosswordWord;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "caf04dfnbRH/6fW83GCrOWc", "Crossword", undefined);

      _export("Crossword", Crossword = class Crossword {
        constructor() {
          this.sizeX = void 0;
          this.sizeY = void 0;
          this.words = void 0;
          this.cells = void 0;
        }

        getMaxSize() {
          return this.sizeX > this.sizeY ? this.sizeX : this.sizeY;
        }

        build(config) {
          this.sizeX = 0;
          this.sizeY = 0;
          this.words = [];
          this.cells = [];
          let lines = config.split('+');
          this.buildWordsFromLine(lines[0], false);
          if (lines.length > 1) this.buildWordsFromLine(lines[1], true);
        }

        buildWordsFromLine(line, vertical) {
          let splits = line.split('|');

          for (let i = 0; i < splits.length; i++) {
            let wordParams = splits[i].split('.');
            if (wordParams.length < 3) continue;
            let x = parseInt(wordParams[0]);
            let y = parseInt(wordParams[1]);
            let word = wordParams[2];
            let cells = [];

            for (let j = 0; j < word.length; j++) {
              let cellX = vertical ? x : x + j;
              let cellY = vertical ? y + j : y;
              let cell = this.cells.find(cell => cell.x === cellX && cell.y === cellY);

              if (!cell) {
                cell = new (_crd && CrosswordCell === void 0 ? (_reportPossibleCrUseOfCrosswordCell({
                  error: Error()
                }), CrosswordCell) : CrosswordCell)(cellX, cellY, word[j]);
                if (cell.x >= this.sizeX) this.sizeX = cell.x + 1;
                if (cell.y >= this.sizeY) this.sizeY = cell.y + 1;
                this.cells.push(cell);
              }

              cells.push(cell);
            }

            let crosswordWord = new (_crd && CrosswordWord === void 0 ? (_reportPossibleCrUseOfCrosswordWord({
              error: Error()
            }), CrosswordWord) : CrosswordWord)(word, vertical, cells);
            this.words.push(crosswordWord);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7bd02252e0a802e884ad11e06923946fe4dec574.js.map