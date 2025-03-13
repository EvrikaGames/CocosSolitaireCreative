System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, SpellingData, _crd;

  _export("SpellingData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eec17F1CstBjqw1VUjzXATh", "SpellingData", undefined);

      __checkObsolete__(['_decorator']);

      _export("SpellingData", SpellingData = class SpellingData {
        constructor() {
          this.pathToImage = void 0;
          this.currentWord = void 0;
          this.wordVariants = void 0;
          this.correctVariantIndex = void 0;
        }

        build(level) {
          var splits = level.split('&');
          this.pathToImage = splits[0];
          this.currentWord = splits[1].replace(/-/g, ' ');
          this.wordVariants = splits[2].split(',');
          this.correctVariantIndex = Number(splits[3]);
        }

        getCorrectWord() {
          return this.wordVariants[this.correctVariantIndex];
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a200bf82e4f87df4abb8c06c5552f91c1ae2b126.js.map