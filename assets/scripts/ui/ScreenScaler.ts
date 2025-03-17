import { _decorator, Component, Node, screen, Vec2, Vec3, view, ResolutionPolicy, Widget, Canvas } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ScreenScaler')
export class ScreenScaler extends Component {

    @property({type: Node})
    private letterContainer: Node = null;

    @property({type: Node})
    private cardContainer: Node = null;
    
    @property({type: Node})
    private completedWordsContainer: Node = null;

    @property({type: Node})
    private playWidget: Node = null;

    @property({type: Node})
    private iconWidget: Node = null;

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
    
    private lettersVerticalOffset: number = 110;
    private cardsVerticalOffset: number = 100;
    private wordsVerticalOffset: number = 100;
    private playHorizontalOffset: Vec2 = new Vec2(50, 50);
    private playVerticalOffset: Vec2 = new Vec2(240, -120);

    private iconHorizontalOffset: Vec2 = new Vec2(50, 50);
    private iconVerticalOffset: Vec2 = new Vec2(240, -120);

    private originalRatio: number = this.originalHeigth / this.originalWidth;
    private horizontalState: boolean = true;

    private originalLetterContainerPosition: Vec3;
    private originalCardContainerPosition: Vec3;
    private originalCompletedWordsContainerPosition: Vec3;
    private originalPlayWidgetPosition: Vec3;
    private originalWinPosition: Vec3;

    private originalLetterContainerScale: Vec3;
    private originalCardContainerScale: Vec3;
    private originalCompletedWordsContainerScale: Vec3;
    private originalBackgroundScale: Vec3;
    private originalPlayWidgetScale: Vec3;
    private originalWinScale: Vec3;

    start() {
        this.originalLetterContainerPosition = this.letterContainer.getPosition();
        this.originalCardContainerPosition = this.cardContainer.getPosition();
        this.originalCompletedWordsContainerPosition = this.completedWordsContainer.getPosition();
        this.originalPlayWidgetPosition = this.playWidget.getPosition();
        this.originalWinPosition = this.win.getPosition();

        this.originalLetterContainerScale = this.letterContainer.getScale().clone();
        this.originalCardContainerScale = this.cardContainer.getScale().clone();
        this.originalCompletedWordsContainerScale = this.completedWordsContainer.getScale().clone();
        this.originalBackgroundScale = this.background.getScale().clone();
        this.originalPlayWidgetScale = this.playWidget.getScale().clone();
        this.originalWinScale = this.win.getScale().clone();
        
        this.onWindowResize();
    }

    onLoad() {
        screen.on('window-resize', this.onWindowResize, this);
    }
    
    onDestroy() {
        screen.off('window-resize', this.onWindowResize, this);
    }

    onWindowResize() {
        const visibleSize = view.getVisibleSize();
        const width = visibleSize.width;
        const height = visibleSize.height;

        const heightRatio = height / this.originalHeigth;
        const widthRatio = width / this.originalWidth;
        const scale = Math.max(heightRatio, widthRatio);
    

        this.letterContainer.setScale(
            this.originalLetterContainerScale.x * scale,
            this.originalLetterContainerScale.y * scale
        );
        
        this.cardContainer.setScale(
            this.originalCardContainerScale.x* scale,
            this.originalCardContainerScale.y * scale
        );
        
    
        this.completedWordsContainer.setScale(
            this.originalCompletedWordsContainerScale.x * scale,
            this.originalCompletedWordsContainerScale.y * scale
        );
        
    
        this.background.setScale(
            this.originalBackgroundScale.x * scale,
            this.originalBackgroundScale.y * scale
        );
        this.background.setPosition(
            this.background.position.x,
            this.background.position.y
        );
    
        this.playWidget.setScale(
            this.originalPlayWidgetScale.x * scale/1.5,
            this.originalPlayWidgetScale.y * scale/1.5
        );
    
        this.win.setScale(
            this.originalWinScale.x * scale,
            this.originalWinScale.y * scale
        );

    
        const currentHorizontalState = width >= height;

        if (currentHorizontalState !== this.horizontalState) {
            this.horizontalState = currentHorizontalState;
    
            if (currentHorizontalState) {

                this.playWidget.setPosition(
                    this.originalPlayWidgetPosition.x * width/height, 
                    this.originalPlayWidgetPosition.y
                );
                this.win.setPosition(
                    this.originalWinPosition.x * width/height,
                    this.originalWinPosition.y
                );
            }
            else{
                this.letterContainer.setPosition(
                    this.originalLetterContainerPosition.x * scale,
                    (this.originalLetterContainerPosition.y + this.lettersVerticalOffset) * scale
                );
                this.cardContainer.setPosition(
                    this.originalCardContainerPosition.x * scale,
                    (this.originalCardContainerPosition.y + this.cardsVerticalOffset) * scale
                );
                this.completedWordsContainer.setPosition(
                    this.originalCompletedWordsContainerPosition.x * scale,
                    (this.originalCompletedWordsContainerPosition.y + this.wordsVerticalOffset)* scale
                );

                this.playWidget.setPosition(
                    this.originalPlayWidgetPosition.x,
                    this.originalPlayWidgetPosition.y
                );
                this.win.setPosition(
                    this.originalWinPosition.x,
                    this.originalWinPosition.y
                );
            }
        }
       
        console.log(`Screen resized: width=${width}, height=${height}, scale=${scale}`);
    }
    
    
    
    
    
}
