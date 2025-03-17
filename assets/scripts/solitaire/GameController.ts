import { _decorator, Color, Component, instantiate, Label, Node, Prefab, resources, TextAsset, tween, UIOpacity, UITransform, Vec2, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
import Card from './Card'; // Импортируйте ваш класс Card
import { ICardData } from './ICardData';
import { IWordData } from './IWordData';
import { Word } from './Word';
import { Letter } from './Letter';
import { Blocker } from './Blocker';
import { StoreButtonComponent } from '../ui/StoreButtonComponent';
import { ResultScreen } from './ResultScreen';
import { SoundController } from '../sound/SoundController';

@ccclass
export default class GameController extends Component {
    
    public static readonly VARIANTS_UPDATED = "variants_updated";
    public static readonly VARIANT_SELECTED = "variant_selected";

    @property(Node)
    blocker: Node = null;

    @property(Label)
    sentenceLabel: Label;

    @property(Prefab)
    cardPrefab: Prefab = null;

    @property(Node)
    cardContainer: Node = null;

    @property(Prefab)
    completedWordPrefab: Prefab = null;

    @property(Node)
    completedWordContainer: Node = null;

    @property(Prefab)
    letterSlotPrefab: Prefab = null;

    @property(Node)
    letterSlotContainer: Node = null;

    @property(Node)
    startPosition: Node = null;
    @property(Node)
    endPosition: Node = null;

    @property({ type: Node })
    private storeButtonNode: Node = null;

    @property(ResultScreen)
    resultScreen: ResultScreen = null;
    
    @property({type:SoundController})
    private sound = null;



    predefinedDeck: ICardData[][] = [];

    predefinedWords: IWordData[] = [];

    predefinedSentences: string[] = [];

    predefinedWordStrings: string[] = [];

    currentWord: string[] = [];
    currentWordIndex: number = 0;
    currentSentenceIndex: number = 0;
    completedWords: Word[] = [];
    letterSlots: Letter[] = [];
    currentLetterIndex: number = 0;

    cards: Card[] = [];

    onLoad() {
        
        
    }
    protected start(): void {
        const blockerComponent = this.blocker.getComponent(Blocker);
        if (!blockerComponent) {
            console.warn("Blocker component is missing!");
            return;
        }
    
        const loadSentences: Promise<void> = new Promise((resolve, reject) => {
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
    
        const loadLetters: Promise<void> = new Promise((resolve, reject) => {
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
        const loadCards: Promise<void> = new Promise((resolve, reject) => {
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
        }).catch((error) => {
            console.error("Error loading resources:", error);
        });
    }
    
    private buildSentences(config: string) {
        this.predefinedSentences = [];
        let centencesSplits = config.split('\n');

        for (let i = 0; i < centencesSplits.length; i++) {
            this.predefinedSentences.push(centencesSplits[i].replace('\r', '').toString());
        }
        console.log(this.predefinedSentences);
    }
    private buildWords(config: string) {
        this.predefinedWordStrings = [];
        const wordsSplits = config.split('\n');

        for (let i = 0; i < wordsSplits.length; i++) {
            this.predefinedWordStrings.push(wordsSplits[i]);
        }
        this.predefinedWords = [];
        this.predefinedWordStrings.forEach(element => {
            let buf: IWordData = {letters: element.replace('\r', '').split(''), completed: false};
            this.predefinedWords.push(buf);
        });
        console.log(this.predefinedWords);
    }
    private buildCards(config: string){
        this.predefinedDeck = [];
        let mass = config.split('\n');
        let elements:string[] = [];
        mass.forEach(str => {
            elements.push(str.replace('\r', ''));
        });
        for(let i = 0; i < elements.length; i++){
            let deck: ICardData[] = [];
            for(let j = 0; j < elements[i].length; j++){
                deck.push({letter: elements[i][j], position: i + 1, revealed: false});
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
                const card = cardNode.getComponent(Card);
                cardNode.setPosition(this.getCardPosition(i, j));
                card.init(cardData);
                card.setNum(n++);
                this.cardContainer.addChild(cardNode);
                this.cards.push(card);
            }
        }
        this.node.emit(GameController.VARIANTS_UPDATED, { });
    }

    getCardPosition(pileIndex: number, cardIndex: number): Vec3 {
        return new Vec3(pileIndex * 120, cardIndex * -30, 0);
    }

    createCompletedWords(){
        for (let j = 0; j < this.predefinedWords.length; j++) {
            const completedWordNode = instantiate(this.completedWordPrefab);
            this.completedWords.push(completedWordNode.getComponent(Word));
            completedWordNode.setPosition(this.getCompletedWordPosition(j, j % 2 == 0 ? j : j - 1));
            this.completedWordContainer.addChild(completedWordNode);
        }
        this.completedWords[this.currentWordIndex].selectWord();
    }
    getCompletedWordPosition(pileIndex: number, yPos: number): Vec3 {
        return new Vec3((pileIndex % 2) * 212, yPos * -34);
    }

    createSlots(){
        let len = this.predefinedWords[this.currentWordIndex].letters.length;
        for(let i = 0; i < len; i++){
            const letterSlotNode = instantiate(this.letterSlotPrefab);
            const letterSlot = letterSlotNode.getComponent(Letter);
            letterSlot.init(this.predefinedWords[this.currentWordIndex].letters[i]);
            this.letterSlots.push(letterSlot);
            letterSlotNode.setPosition(this.getSlotPosition(i, len));
            this.letterSlotContainer.addChild(letterSlotNode);
        }
    }
    deleteSlots(){
        this.letterSlots.forEach(slot => {
            slot.remove();
        });
    }
    getSlotPosition(num: number, len: number): Vec3 {
        return new Vec3(len % 2 == 0 ? (num < len / 2 ? ((len / 2 - 1 / 2 - num) * -92) : ((num - len / 2 + 1 / 2) * 92)) : (num < len / 2 ? 
            ((len / 2 - 1 / 2 - num) * -92) : (num - (len / 2 - 1 /2)) * 92), 0, 0);
    }

    moveCardToWord(card: Card){
        if(card.isSelected == false)
        {
            this.letterSlots[this.currentLetterIndex].setCard(card);
            this.sound.play(this.sound.hint);
            if(this.cards[card.getNumber() - 1] != undefined && this.cards[card.getNumber() - 1].label != null){
                this.cards[card.getNumber() - 1].reveal();
            }
            this.currentLetterIndex++;
            const blockerComponent = this.blocker.getComponent(Blocker);
            if(this.currentLetterIndex >= this.letterSlots.length){
                blockerComponent.showBlocker();
                setTimeout(() => {
                    if(this.isWordRight()){
                        this.letterSlots.forEach(slot => {
                            slot.repeatWordEndAnimation();
                        });
                        blockerComponent.showBlocker();
                        this.resultScreen.show(true);
                        this.sound.play(this.sound.correct);

                        this.completedWords[this.currentWordIndex].setString(this.predefinedWordStrings[this.currentWordIndex]);
                        this.completedWords[this.currentWordIndex].selectWord();
                        this.currentWordIndex++;
                        this.moveCardsToCompleteWord();
                        setTimeout(() => {
                            this.deleteSlots();
                            this.letterSlots = [];
                            this.createSlots();
                            this.currentLetterIndex = 0;
                            this.changeSentence();
                            blockerComponent.hideBlocker();
                        }, this.letterSlots.length * 50);

                    } else {
                        this.letterSlots.forEach(slot => {
                            slot.toWrongColor();
                            slot.repeatWordEndAnimation();
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
                        if(this.currentWordIndex > 4){
                            blockerComponent.showBlocker();
                            this.blocker.getComponent(Blocker).activateButtonStore();
                            const storeButtonComponent = this.storeButtonNode.getComponent(StoreButtonComponent);
                            if (storeButtonComponent) {
                            storeButtonComponent.onClick();
                            } else {
                                console.warn("StoreButtonComponent not found on the provided node!");
                            }
                        }
                    }, this.letterSlots.length * 50);
                    
                }, this.letterSlots.length * 50);
            } else {
                this.letterSlots[this.currentLetterIndex - 1].repeatWordAnimation();
                card.isSelected = true;
            }
   
        }else{
            for(let i = this.currentLetterIndex - 1; i >= 0; i--){
                let currentCard = this.letterSlots[i].getCard();
                currentCard.isSelected = false;
                if(currentCard == card){
                    this.moveCardToInitialPosition(currentCard);
                    this.currentLetterIndex--;
                    break;
                }else{
                    this.moveCardToInitialPosition(currentCard);
                    this.currentLetterIndex--;
                }
            }
            
        }
        this.node.emit(GameController.VARIANTS_UPDATED, { });
    }

    moveCardToInitialPosition(card: Card){
        card.returnCardToPosition();
        if(this.cards[card.getNumber() - 1] != undefined && this.cards[card.getNumber() - 1].label != null){
            this.cards[card.getNumber() - 1].hide();
        }
        card.isSelected = false;
    }

    getCorrectVariant(): Card{
        for(let i = this.currentLetterIndex - 1; i >= 0; i--){
            if(this.letterSlots[i].isOccupied && this.letterSlots[i].isRight == false){
                return this.letterSlots[i].getCard();
            }
        }
        let mass: Card[] = [];
        this.cards.forEach(card => {
            if(card.isRevealed && card.isSelected == false){
                mass.push(card);
            }
        });
        for(let i = 0; i < mass.length; i++){
            if(mass[i].label.string == this.letterSlots[this.currentLetterIndex].letter){
                return mass[i];
            }
        }
        console.error("No card!");
        return;
    }

    isWordRight(): boolean{
        for(let i = 0; i < this.letterSlots.length; i++){
            if(this.letterSlots[i].isRight == false)
                return false;
        }
        return true;
    }


    changeSentence(){
    const uiOpacity = this.sentenceLabel.getComponent(UIOpacity) || this.sentenceLabel.addComponent(UIOpacity);
    uiOpacity.opacity = 255;

    let vec = new Vec3(30, 0, 0);
    let vec1 = new Vec3(-30, 0, 0);

    // Анимация позиции узла
    tween(this.sentenceLabel.node)
        .to(0.3, { position: vec1 })
        .to(0.5, { position: this.endPosition.position })
        .call(() => {
            this.sentenceLabel.string = this.predefinedSentences[this.currentWordIndex];
            this.sentenceLabel.node.position = new Vec3(this.startPosition.position);

            tween(this.sentenceLabel.node)
                .to(0.8, { position: vec })
                .to(0.2, {position: new Vec3(0, 0, 0)})
                .start();
        })
        .start();

    // Анимация прозрачности
    tween(uiOpacity)
        .to(0.5, { opacity: 0 })
        .delay(0.6)
        .call(() => {
            tween(uiOpacity)
                .to(1, { opacity: 255 })
                .start();
        })
        .start();
    }


    moveCardsToCompleteWord(){
        let targetNode = this.completedWords[this.currentWordIndex - 1].node;

        let worldPos: Vec3 = targetNode.getWorldPosition();

        this.letterSlots.forEach((slot, index) => {
            setTimeout(() => {
            slot.getCard().moveToCompleteWord(worldPos);
            }, 50 * index);
        });
    }

}
