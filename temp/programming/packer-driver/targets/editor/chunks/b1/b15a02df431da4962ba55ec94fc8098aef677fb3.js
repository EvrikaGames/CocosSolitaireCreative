System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Prefab, resources, TextAsset, tween, UIOpacity, Vec3, Card, Word, Letter, Blocker, StoreButtonComponent, ResultScreen, SoundController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _class3, _crd, ccclass, property, GameController;

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

  function _reportPossibleCrUseOfBlocker(extras) {
    _reporterNs.report("Blocker", "./Blocker", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoreButtonComponent(extras) {
    _reporterNs.report("StoreButtonComponent", "../ui/StoreButtonComponent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResultScreen(extras) {
    _reporterNs.report("ResultScreen", "./ResultScreen", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
      TextAsset = _cc.TextAsset;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Card = _unresolved_2.default;
    }, function (_unresolved_3) {
      Word = _unresolved_3.Word;
    }, function (_unresolved_4) {
      Letter = _unresolved_4.Letter;
    }, function (_unresolved_5) {
      Blocker = _unresolved_5.Blocker;
    }, function (_unresolved_6) {
      StoreButtonComponent = _unresolved_6.StoreButtonComponent;
    }, function (_unresolved_7) {
      ResultScreen = _unresolved_7.ResultScreen;
    }, function (_unresolved_8) {
      SoundController = _unresolved_8.SoundController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47513HWEZBNKpV8qlNDg4Ts", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'resources', 'TextAsset', 'tween', 'UIOpacity', 'UITransform', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator); // Импортируйте ваш класс Card

      _export("default", GameController = (_dec = property(Node), _dec2 = property(Label), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Prefab), _dec6 = property(Node), _dec7 = property(Prefab), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property({
        type: Node
      }), _dec12 = property(_crd && ResultScreen === void 0 ? (_reportPossibleCrUseOfResultScreen({
        error: Error()
      }), ResultScreen) : ResultScreen), _dec13 = property({
        type: _crd && SoundController === void 0 ? (_reportPossibleCrUseOfSoundController({
          error: Error()
        }), SoundController) : SoundController
      }), ccclass(_class = (_class2 = (_class3 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "blocker", _descriptor, this);

          _initializerDefineProperty(this, "sentenceLabel", _descriptor2, this);

          _initializerDefineProperty(this, "cardPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "cardContainer", _descriptor4, this);

          _initializerDefineProperty(this, "completedWordPrefab", _descriptor5, this);

          _initializerDefineProperty(this, "completedWordContainer", _descriptor6, this);

          _initializerDefineProperty(this, "letterSlotPrefab", _descriptor7, this);

          _initializerDefineProperty(this, "letterSlotContainer", _descriptor8, this);

          _initializerDefineProperty(this, "startPosition", _descriptor9, this);

          _initializerDefineProperty(this, "endPosition", _descriptor10, this);

          _initializerDefineProperty(this, "storeButtonNode", _descriptor11, this);

          _initializerDefineProperty(this, "resultScreen", _descriptor12, this);

          _initializerDefineProperty(this, "sound", _descriptor13, this);

          this.predefinedDeck = [];
          this.predefinedWords = [];
          this.predefinedSentences = [];
          this.predefinedWordStrings = [];
          this.currentWord = [];
          this.currentWordIndex = 0;
          this.currentSentenceIndex = 0;
          this.completedWords = [];
          this.letterSlots = [];
          this.currentLetterIndex = 0;
          this.cards = [];
        }

        onLoad() {}

        start() {
          const blockerComponent = this.blocker.getComponent(_crd && Blocker === void 0 ? (_reportPossibleCrUseOfBlocker({
            error: Error()
          }), Blocker) : Blocker);

          if (!blockerComponent) {
            console.warn("Blocker component is missing!");
            return;
          }

          const loadSentences = new Promise((resolve, reject) => {
            resources.load("configs/sentences", TextAsset, (err, textAsset1) => {
              if (err) {
                console.log("Error loading letters-en:", err.message);
                reject(err);
                return;
              }

              this.buildSentences(textAsset1.text);
              resolve();
            });
          });
          const loadLetters = new Promise((resolve, reject) => {
            resources.load("configs/words", TextAsset, (err, textAsset) => {
              if (err) {
                console.log("Error loading letters:", err.message);
                reject(err);
                return;
              }

              this.buildWords(textAsset.text);
              resolve();
            });
          });
          const loadCards = new Promise((resolve, reject) => {
            resources.load("configs/cards", TextAsset, (err, textAsset) => {
              if (err) {
                console.log("Error loading letters:", err.message);
                reject(err);
                return;
              }

              this.buildCards(textAsset.text);
              resolve();
            });
          });
          Promise.all([loadSentences, loadLetters, loadCards]).then(() => {
            this.createCards();
            console.log(this.predefinedSentences);
            console.log(this.predefinedSentences[this.currentSentenceIndex]);
            this.sentenceLabel.string = this.predefinedSentences[this.currentSentenceIndex];
            this.createCompletedWords();
            this.createSlots();
          }).catch(error => {
            console.error("Error loading resources:", error);
          });
        }

        buildSentences(config) {
          this.predefinedSentences = [];
          let centencesSplits = config.split('\n');

          for (let i = 0; i < centencesSplits.length; i++) {
            this.predefinedSentences.push(centencesSplits[i].replace('\r', '').toString());
          }

          console.log(this.predefinedSentences);
        }

        buildWords(config) {
          this.predefinedWordStrings = [];
          const wordsSplits = config.split('\n');

          for (let i = 0; i < wordsSplits.length; i++) {
            this.predefinedWordStrings.push(wordsSplits[i]);
          }

          this.predefinedWords = [];
          this.predefinedWordStrings.forEach(element => {
            let buf = {
              letters: element.replace('\r', '').split(''),
              completed: false
            };
            this.predefinedWords.push(buf);
          });
          console.log(this.predefinedWords);
        }

        buildCards(config) {
          this.predefinedDeck = [];
          let mass = config.split('\n');
          let elements = [];
          mass.forEach(str => {
            elements.push(str.replace('\r', ''));
          });

          for (let i = 0; i < elements.length; i++) {
            let deck = [];

            for (let j = 0; j < elements[i].length; j++) {
              deck.push({
                letter: elements[i][j],
                position: i + 1,
                revealed: false
              });
            }

            deck[deck.length - 1].revealed = true;
            this.predefinedDeck.push(deck);
          }

          console.log(this.predefinedDeck);
        }

        createCards() {
          let n = 0;

          for (let i = 0; i < this.predefinedDeck.length; i++) {
            const pile = this.predefinedDeck[i];

            for (let j = 0; j < pile.length; j++) {
              const cardData = pile[j];
              const cardNode = instantiate(this.cardPrefab);
              const card = cardNode.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
                error: Error()
              }), Card) : Card);
              cardNode.setPosition(this.getCardPosition(i, j));
              card.init(cardData);
              card.setNum(n++);
              this.cardContainer.addChild(cardNode);
              this.cards.push(card);
            }
          }

          this.node.emit(GameController.VARIANTS_UPDATED, {});
        }

        getCardPosition(pileIndex, cardIndex) {
          return new Vec3(pileIndex * 120, cardIndex * -30, 0);
        }

        createCompletedWords() {
          for (let j = 0; j < this.predefinedWords.length; j++) {
            const completedWordNode = instantiate(this.completedWordPrefab);
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
          let len = this.predefinedWords[this.currentWordIndex].letters.length;

          for (let i = 0; i < len; i++) {
            const letterSlotNode = instantiate(this.letterSlotPrefab);
            const letterSlot = letterSlotNode.getComponent(_crd && Letter === void 0 ? (_reportPossibleCrUseOfLetter({
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
            slot.remove();
          });
        }

        getSlotPosition(num, len) {
          return new Vec3(len % 2 == 0 ? num < len / 2 ? (len / 2 - 1 / 2 - num) * -92 : (num - len / 2 + 1 / 2) * 92 : num < len / 2 ? (len / 2 - 1 / 2 - num) * -92 : (num - (len / 2 - 1 / 2)) * 92, 0, 0);
        }

        moveCardToWord(card) {
          if (card.isSelected == false) {
            this.letterSlots[this.currentLetterIndex].setCard(card);
            this.sound.play(this.sound.hint);

            if (this.cards[card.getNumber() - 1] != undefined && this.cards[card.getNumber() - 1].label != null) {
              this.cards[card.getNumber() - 1].reveal();
            }

            this.currentLetterIndex++;
            const blockerComponent = this.blocker.getComponent(_crd && Blocker === void 0 ? (_reportPossibleCrUseOfBlocker({
              error: Error()
            }), Blocker) : Blocker);

            if (this.currentLetterIndex >= this.letterSlots.length) {
              blockerComponent.showBlocker();
              setTimeout(() => {
                if (this.isWordRight()) {
                  this.letterSlots.forEach(slot => {
                    slot.repeatWordAnimation();
                  });
                  blockerComponent.showBlocker();
                  this.resultScreen.show(true);
                  this.sound.play(this.sound.correct);
                  setTimeout(() => {
                    this.completedWords[this.currentWordIndex].setString(this.predefinedWordStrings[this.currentWordIndex]);
                    this.completedWords[this.currentWordIndex].selectWord();
                    this.currentWordIndex++;
                    this.moveCardsToCompleteWord();
                    this.deleteSlots();
                    this.letterSlots = [];
                    this.createSlots();
                    this.currentLetterIndex = 0;
                    this.changeSentence();
                    blockerComponent.hideBlocker();
                  }, 1500);
                } else {
                  this.letterSlots.forEach(slot => {
                    slot.toWrongColor();
                    slot.repeatWordAnimation();
                  });
                  this.sound.play(this.sound.wrong);
                  blockerComponent.showBlocker();
                  setTimeout(() => {
                    this.letterSlots.forEach(slot => {
                      this.moveCardToInitialPosition(slot.getCard());
                    });
                    this.currentLetterIndex = 0;
                    blockerComponent.hideBlocker();
                  }, 1500);
                }

                setTimeout(() => {
                  if (this.currentWordIndex > 4) {
                    blockerComponent.showBlocker();
                    this.blocker.getComponent(_crd && Blocker === void 0 ? (_reportPossibleCrUseOfBlocker({
                      error: Error()
                    }), Blocker) : Blocker).activateButtonStore();
                    const storeButtonComponent = this.storeButtonNode.getComponent(_crd && StoreButtonComponent === void 0 ? (_reportPossibleCrUseOfStoreButtonComponent({
                      error: Error()
                    }), StoreButtonComponent) : StoreButtonComponent);

                    if (storeButtonComponent) {
                      storeButtonComponent.onClick();
                    } else {
                      console.warn("StoreButtonComponent not found on the provided node!");
                    }
                  }
                }, 1500);
              }, 1500);
            } else {
              card.isSelected = true;
            }
          } else {
            for (let i = this.currentLetterIndex - 1; i >= 0; i--) {
              let currentCard = this.letterSlots[i].getCard();
              currentCard.isSelected = false;

              if (currentCard == card) {
                this.moveCardToInitialPosition(currentCard);
                this.currentLetterIndex--;
                break;
              } else {
                this.moveCardToInitialPosition(currentCard);
                this.currentLetterIndex--;
              }
            }
          }

          this.node.emit(GameController.VARIANTS_UPDATED, {});
        }

        moveCardToInitialPosition(card) {
          card.returnCardToPosition();

          if (this.cards[card.getNumber() - 1] != undefined && this.cards[card.getNumber() - 1].label != null) {
            this.cards[card.getNumber() - 1].hide();
          }

          card.isSelected = false;
        }

        getCorrectVariant() {
          for (let i = this.currentLetterIndex - 1; i >= 0; i--) {
            if (this.letterSlots[i].isOccupied && this.letterSlots[i].isRight == false) {
              return this.letterSlots[i].getCard();
            }
          }

          let mass = [];
          this.cards.forEach(card => {
            if (card.isRevealed && card.isSelected == false) {
              mass.push(card);
            }
          });

          for (let i = 0; i < mass.length; i++) {
            if (mass[i].label.string == this.letterSlots[this.currentLetterIndex].letter) {
              return mass[i];
            }
          }

          console.error("No card!");
          return;
        }

        isWordRight() {
          for (let i = 0; i < this.letterSlots.length; i++) {
            if (this.letterSlots[i].isRight == false) return false;
          }

          return true;
        }

        changeSentence() {
          const uiOpacity = this.sentenceLabel.getComponent(UIOpacity) || this.sentenceLabel.addComponent(UIOpacity);
          uiOpacity.opacity = 255;
          tween(this.sentenceLabel.node).parallel(tween().to(1, {
            position: this.endPosition.position
          }), tween(uiOpacity).to(1, {
            opacity: 0
          })).call(() => {
            this.sentenceLabel.string = this.predefinedSentences[this.currentWordIndex];
            this.sentenceLabel.node.position = new Vec3(this.startPosition.position);
            tween(this.sentenceLabel.node).parallel(tween().to(1, {
              position: new Vec3(0, 0, 0)
            }), tween(uiOpacity).to(1, {
              opacity: 255
            })).start();
          }).start();
        }

        moveCardsToCompleteWord() {
          let targetNode = this.completedWords[this.currentWordIndex - 1].node;
          let worldPos = targetNode.getWorldPosition();
          this.letterSlots.forEach(slot => {
            slot.getCard().moveToCompleteWord(worldPos);
          });
        }

      }, _class3.VARIANTS_UPDATED = "variants_updated", _class3.VARIANT_SELECTED = "variant_selected", _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blocker", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "sentenceLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cardPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cardContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "completedWordPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "completedWordContainer", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "letterSlotPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "letterSlotContainer", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "startPosition", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "endPosition", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "storeButtonNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "resultScreen", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "sound", [_dec13], {
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
//# sourceMappingURL=b15a02df431da4962ba55ec94fc8098aef677fb3.js.map