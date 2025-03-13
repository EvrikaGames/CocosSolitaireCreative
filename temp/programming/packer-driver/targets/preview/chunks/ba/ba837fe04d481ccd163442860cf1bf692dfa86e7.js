System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, QuizData, _crd;

  _export("QuizData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bfb85q2/C1AFqVZyoAA3cYi", "QuizData", undefined);

      __checkObsolete__(['_decorator']);

      _export("QuizData", QuizData = class QuizData {
        constructor() {
          this.pathToImage = void 0;
          this.description = void 0;
          this.wordVariants = void 0;
          this.correctVariantIndex = void 0;
        }

        build(level) {
          var splits = level.split('&');
          this.pathToImage = splits[0];
          this.description = splits[1];
          this.wordVariants = splits[2].split(',');
          this.correctVariantIndex = Number(splits[3]);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba837fe04d481ccd163442860cf1bf692dfa86e7.js.map