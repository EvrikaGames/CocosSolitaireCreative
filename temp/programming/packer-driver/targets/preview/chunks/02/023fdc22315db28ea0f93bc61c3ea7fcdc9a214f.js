System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Prefab, Vec3, Card, Word, Letter, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "./Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfICardData(extras) {
    _reporterNs.report("ICardData", "./ICardData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIWordData(extras) {
    _reporterNs.report("IWordData", "./IWordData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWord(extras) {
    _reporterNs.report("Word", "./Word", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLetter(extras) {
    _reporterNs.report("Letter", "./Letter", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Card = _unresolved_2.default;
    }, function (_unresolved_3) {
      Word = _unresolved_3.Word;
    }, function (_unresolved_4) {
      Letter = _unresolved_4.Letter;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47513HWEZBNKpV8qlNDg4Ts", "Game", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator); // Импортируйте ваш класс Card

      _export("default", GameController = (_dec = property(Label), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Prefab), _dec7 = property(Node), ccclass(_class = (_class2 = class GameController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sentenceLabel", _descriptor, this);

          _initializerDefineProperty(this, "cardPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "cardContainer", _descriptor3, this);

          _initializerDefineProperty(this, "completedWordPrefab", _descriptor4, this);

          _initializerDefineProperty(this, "completedWordContainer", _descriptor5, this);

          _initializerDefineProperty(this, "letterSlotPrefab", _descriptor6, this);

          _initializerDefineProperty(this, "letterSlotContainer", _descriptor7, this);

          this.predefinedDeck = [[{
            letter: 'S',
            position: 1,
            revealed: false
          }, {
            letter: 'A',
            position: 1,
            revealed: false
          }, {
            letter: 'W',
            position: 1,
            revealed: false
          }, {
            letter: 'I',
            position: 1,
            revealed: false
          }, {
            letter: 'B',
            position: 1,
            revealed: false
          }, {
            letter: 'S',
            position: 1,
            revealed: true
          }], [{
            letter: 'E',
            position: 2,
            revealed: false
          }, {
            letter: 'R',
            position: 2,
            revealed: false
          }, {
            letter: 'S',
            position: 2,
            revealed: false
          }, {
            letter: 'N',
            position: 2,
            revealed: false
          }, {
            letter: 'A',
            position: 2,
            revealed: false
          }, {
            letter: 'U',
            position: 2,
            revealed: true
          }], [{
            letter: 'A',
            position: 3,
            revealed: false
          }, {
            letter: 'M',
            position: 3,
            revealed: false
          }, {
            letter: 'A',
            position: 3,
            revealed: false
          }, {
            letter: 'G',
            position: 3,
            revealed: false
          }, {
            letter: 'E',
            position: 3,
            revealed: false
          }, {
            letter: 'N',
            position: 3,
            revealed: true
          }], [{
            letter: 'E',
            position: 4,
            revealed: false
          }, {
            letter: 'T',
            position: 4,
            revealed: false
          }, {
            letter: 'N',
            position: 4,
            revealed: false
          }, {
            letter: 'H',
            position: 4,
            revealed: false
          }, {
            letter: 'C',
            position: 4,
            revealed: false
          }, {
            letter: 'N',
            position: 4,
            revealed: true
          }], [{
            letter: 'E',
            position: 5,
            revealed: false
          }, {
            letter: 'R',
            position: 5,
            revealed: false
          }, {
            letter: 'D',
            position: 5,
            revealed: false
          }, {
            letter: 'T',
            position: 5,
            revealed: false
          }, {
            letter: 'H',
            position: 5,
            revealed: false
          }, {
            letter: 'Y',
            position: 5,
            revealed: true
          }]];
          this.predefinedWords = [{
            letters: ['S', 'U', 'N', 'N', 'Y'],
            completed: false
          }, {
            letters: ['B', 'E', 'A', 'C', 'H'],
            completed: false
          }, {
            letters: ['N', 'I', 'G', 'T', 'H'],
            completed: false
          }, {
            letters: ['W', 'A', 'R', 'M'],
            completed: false
          }, {
            letters: ['H', 'E', 'L', 'L', 'O'],
            completed: false
          }, {
            letters: ['H', 'E', 'L', 'L', 'O'],
            completed: false
          }, {
            letters: ['H', 'E', 'L', 'L', 'O'],
            completed: false
          }, {
            letters: ['H', 'E', 'L', 'L', 'O'],
            completed: false
          }];
          this.predefinedSentences = ["IF IT'S NOT CLOUDY, IT'S __", "IF IT'S NOT OCEAN, IT'S __", "IF IT'S NOT DAY, IT'S __", "IF IT'S NOT STONE, IT'S __", "IF IT'S NOT COLD, IT'S __", "IF IT'S NOT BUSH, IT'S __"];
          this.predefinedWordStrings = ["SUNNY", "BEACH", "NIGHT", "WARM"];
          this.currentWord = [];
          this.currentWordIndex = 0;
          this.currentSentenceIndex = 0;
          this.completedWords = [];
          this.letterSlots = [];
          this.currentLetterIndex = 0;
        }

        onLoad() {
          this.createCards();
          this.sentenceLabel.string = this.predefinedSentences[this.currentSentenceIndex];
          this.createCompletedWords();
          this.createSlots();
        }

        createCards() {
          for (var i = 0; i < this.predefinedDeck.length; i++) {
            var pile = this.predefinedDeck[i];

            for (var j = 0; j < pile.length; j++) {
              var cardData = pile[j];
              var cardNode = instantiate(this.cardPrefab);
              var card = cardNode.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                error: Error()
              }), Card) : Card);
              card.init(cardData);
              cardNode.setPosition(this.getCardPosition(i, j));
              this.cardContainer.addChild(cardNode);
            }
          }
        }

        getCardPosition(pileIndex, cardIndex) {
          return new Vec3(pileIndex * 120, cardIndex * -30, 0);
        }

        createCompletedWords() {
          for (var j = 0; j < this.predefinedWords.length; j++) {
            var completedWordNode = instantiate(this.completedWordPrefab);
            this.completedWords.push(completedWordNode.getComponent(_crd && Word === void 0 ? (_reportPossibleCrUseOfWord({
              error: Error()
            }), Word) : Word));
            completedWordNode.setPosition(this.getCompletedWordPosition(j, j % 2 == 0 ? j : j - 1));
            this.completedWordContainer.addChild(completedWordNode);
          }

          this.completedWords[this.currentWordIndex].selectWord();
        }

        getCompletedWordPosition(pileIndex, yPos) {
          return new Vec3(pileIndex % 2 * 212, yPos * -34);
        }

        createSlots() {
          var len = this.predefinedWords[this.currentWordIndex].letters.length;

          for (var i = 0; i < len; i++) {
            var letterSlotNode = instantiate(this.letterSlotPrefab);
            var letterSlot = letterSlotNode.getComponent(_crd && Letter === void 0 ? (_reportPossibleCrUseOfLetter({
              error: Error()
            }), Letter) : Letter);
            letterSlot.init(this.predefinedWords[this.currentWordIndex].letters[i]);
            this.letterSlots.push(letterSlot);
            letterSlotNode.setPosition(this.getSlotPosition(i, len));
            this.letterSlotContainer.addChild(letterSlotNode);
          }
        }

        deleteSlots() {
          this.letterSlots.forEach(slot => {
            slot.destroy;
          });
        }

        getSlotPosition(num, len) {
          return new Vec3(len % 2 == 0 ? num < len / 2 ? (len / 2 - 1 / 2 - num) * -86 : (num - len / 2 + 1 / 2) * 86 : num < len / 2 ? (len / 2 - 1 / 2 - num) * -86 : (num - (len / 2 - 1 / 2)) * 86, 0, 0);
        }

        moveCardToWord(card) {
          this.letterSlots[this.currentLetterIndex].setCard(card);
          this.currentLetterIndex++;

          if (this.currentLetterIndex >= this.letterSlots.length) {
            if (this.isWordRight()) {
              this.letterSlots.forEach(slot => {
                slot.removeCard();
              });
              this.completedWords[this.currentWordIndex].setString(this.predefinedWordStrings[this.currentWordIndex]);
              this.currentWordIndex++;
              this.completedWords[this.currentWordIndex].selectWord();
              this.deleteSlots();
              this.createSlots();
            } else {
              this.letterSlots.forEach(slot => {
                slot.getCard().returnCardToPosition();
              });
            }
          }
        }

        isWordRight() {
          for (var i = 0; i < this.letterSlots.length; i++) {
            if (this.letterSlots[i].isRight == false) return false;
          }

          return true;
        }

        checkWinCondition() {
          for (var word of this.predefinedWords) {
            if (!word.completed) {
              return false;
            }
          }

          console.log('Победа!');
          return true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sentenceLabel", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cardContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "completedWordPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "completedWordContainer", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "letterSlotPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "letterSlotContainer", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=023fdc22315db28ea0f93bc61c3ea7fcdc9a214f.js.map