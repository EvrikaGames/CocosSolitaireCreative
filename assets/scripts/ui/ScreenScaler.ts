import { _decorator, Component, Node, screen, Vec2, Vec3, view, ResolutionPolicy, Widget, Canvas, UITransform } from 'cc';
import { Letter } from '../solitaire/Letter';
import Card from '../solitaire/Card';
const { ccclass, property } = _decorator;

@ccclass('ScreenScaler')
export class ScreenScaler extends Component {

    @property({type: Node})
    private letterContainer: Node = null;

    @property({type: Node})
    private cardContainer: Node = null;
    
    @property({type: Node})
    private completedWordsContainer: Node = null;

    @property(Node)
    private wordsContainer: Node = null;

    @property({type: Node})
    private playWidget: Node = null;

    @property({type: Node})
    private iconWidget: Node = null;

    @property(Node)
    private hand: Node = null;

    @property({type: Node})
    private background: Node = null;
    @property({type: Node})
    private constName: Node = null;
    @property({type: Node})
    private sentences: Node = null;

    @property({type: Node})
    private win: Node = null;



    private originalWidth: number = 1920;
    private originalHeigth: number = 1080;
    

    private originalRatio: number = this.originalHeigth / this.originalWidth;
    private horizontalState: boolean = true;

    private originalLetterContainerPosition: Vec3;
    private originalCardContainerPosition: Vec3;
    private originalCompletedWordsContainerPosition: Vec3;
    private originalWordsContainerPosition: Vec3;
    private originalHandPosition: Vec3;
    private originalSentencesWidgetTop: number;

    private originalPlayWidgetRight: number;

    private originalLetterContainerScale: Vec3;


    start() {
        this.originalLetterContainerPosition = this.letterContainer.getPosition();
        this.originalCardContainerPosition = this.cardContainer.getPosition();
        this.originalCompletedWordsContainerPosition = this.completedWordsContainer.getPosition();
        this.originalWordsContainerPosition = this.wordsContainer.getPosition();
        this.originalHandPosition = this.hand.getPosition();
        this.originalSentencesWidgetTop = this.sentences.getComponent(Widget).top;

        this.originalLetterContainerScale = this.letterContainer.getScale().clone();

        this.originalPlayWidgetRight =  this.playWidget.getComponent(Widget).right;
        
        this.onWindowResize(screen.windowSize.width, screen.windowSize.height);
    }

    onLoad() {
        screen.on('window-resize', this.onWindowResize, this);
    }
    
    onDestroy() {
        screen.off('window-resize', this.onWindowResize, this);
    }

    onWindowResize(width: number, height: number) {
        
        const currentHorizontalState = width >= height;

        const ratio = currentHorizontalState ? height / width : width / height;
        let scale = ratio / this.originalRatio;
        if (scale > 1) scale = 1;


        if (currentHorizontalState != this.horizontalState) {

            this.horizontalState = currentHorizontalState;
            let massLetter: Letter[] = this.letterContainer.getComponentsInChildren(Letter);
            let mass: Card[] = [];
            massLetter.forEach(letter => {
                if(letter.getCard()){
                    mass.push(letter.getCard());
                }
            });
            if (currentHorizontalState) {
                view.setDesignResolutionSize(this.originalWidth, this.originalHeigth, ResolutionPolicy.FIXED_WIDTH);

                this.letterContainer.setPosition(
                    this.originalLetterContainerPosition.x * scale,
                    this.originalLetterContainerPosition.y  * scale
                );
                this.cardContainer.setPosition(
                    this.originalCardContainerPosition.x * scale,
                    this.originalCardContainerPosition.y  * scale
                );
                this.completedWordsContainer.setPosition(
                    this.originalCompletedWordsContainerPosition.x * scale,
                    this.originalCompletedWordsContainerPosition.y * scale
                );
                this.wordsContainer.setPosition(
                    this.originalWordsContainerPosition.x * scale,
                    this.originalWordsContainerPosition.y * scale
                );
                this.originalHandPosition = this.hand.getParent().getPosition();
                this.hand.getParent().setPosition(
                    this.originalHandPosition.x * scale / 1.6,
                    this.originalHandPosition.y * scale / 1.2
                );
                this.sentences.getComponent(Widget).enabled = true;
                this.sentences.getComponent(Widget).top = this.originalSentencesWidgetTop;
                if(mass.length > 0){
                mass.forEach(card => {
                    card.node.setPosition(card.node.getPosition().x * scale, card.node.getPosition().y * scale / 1.025);
                });
            }
                this.playWidget.getComponent(Widget).right = this.originalPlayWidgetRight;
            }
            else {
                view.setDesignResolutionSize(this.originalHeigth, this.originalWidth, ResolutionPolicy.FIXED_HEIGHT);
                this.letterContainer.setPosition(
                    this.originalLetterContainerPosition.x * scale * 1.4,
                    this.originalLetterContainerPosition.y  * scale* 1.4
                );
                this.cardContainer.setPosition(
                    this.originalCardContainerPosition.x * scale* 1.7,
                    this.originalCardContainerPosition.y  * scale / 1.7
                );
                this.completedWordsContainer.setPosition(
                    this.originalCompletedWordsContainerPosition.x * scale * 1.7,
                    this.originalCompletedWordsContainerPosition.y * scale* 2.3
                );
                this.wordsContainer.setPosition(
                    this.originalWordsContainerPosition.x * scale * 3.1,
                    this.originalWordsContainerPosition.y * scale * 3.1
                );
                this.originalHandPosition = this.hand.getParent().getPosition();
                this.hand.getParent().setPosition(
                    this.originalHandPosition.x * scale * 1.6,
                    this.originalHandPosition.y * scale * 1.2
                );
                this.sentences.getComponent(Widget).enabled = false;
                this.sentences.setPosition(0, ((1920 - this.completedWordsContainer.position.y) / 2) * 1.1 * scale);
               // this.sentences.getComponent(Widget).top = this.originalSentencesWidgetTop * scale * 1.7;
                if(mass.length > 0){
                    mass.forEach(card => {
                        card.node.setPosition(card.node.getPosition().x * scale, card.node.getPosition().y * scale * 1.025);
                    });
                }

            }
        }

        

        this.letterContainer.setScale(this.originalLetterContainerScale.x * scale, this.originalLetterContainerScale.y * scale);
        this.cardContainer.setScale(scale, scale);
        this.completedWordsContainer.setScale(scale * 1.3, scale * 1.3);
        this.playWidget.setScale(scale, scale);
        this.win.setScale(scale, scale);
        this.constName.setScale(scale, scale);
        this.sentences.setScale(scale, scale);
        this.background.setScale(scale, scale);
        this.wordsContainer.setScale(scale, scale);
        this.hand.setScale(scale, scale);

        if (!currentHorizontalState) {

            this.background.setScale(scale * 2, scale * 2);
            this.letterContainer.setScale(this.originalLetterContainerScale.x * 1.7 * scale, this.originalLetterContainerScale.y * 1.7* scale);
            this.cardContainer.setScale(scale * 1.7, scale * 1.7);
            this.completedWordsContainer.setScale(scale * 2.2, scale * 2.2);
            this.sentences.setScale(scale * 1.4, scale * 1.4);
            this.wordsContainer.setScale(scale * 1.7, scale * 1.7);
            this.hand.setScale(scale * 1.4, scale * 1.4);

        }

        
       
        console.log(`Screen resized: width=${width}, height=${height}, scale=${scale}`);
    }
    
    
    
}




