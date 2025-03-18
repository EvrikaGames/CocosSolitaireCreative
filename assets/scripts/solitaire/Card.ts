import { _decorator, Component, find, Label, Node, Vec3, Event, EventTouch, Canvas, tween, UITransform, Quat, Sprite, Prefab, instantiate } from 'cc';
import { ICardData } from './ICardData';
import GameController from './GameController';
const { ccclass, property } = _decorator;

@ccclass
export default class Card extends Component {
    @property(Label)
    label: Label = null;

    @property(Node)
    back: Node = null;

    @property(Node)
    backYellow: Node = null;

    @property(Prefab)
    circle: Prefab = null;

    num: number;

    private cardData: ICardData;
    private initialPosition: Vec3;
    isSelected: boolean = false;
    isRevealed: boolean = false;

    @property
    rotationAngle: number = 360;

    private canTouch: boolean = true;


    init(cardData: ICardData) {
        this.cardData = cardData;
        this.label.string = cardData.letter;
        this.back.active = !cardData.revealed; 
        this.isRevealed = cardData.revealed; 
        this.initialPosition = new Vec3(this.node.position);
        this.backYellow.active = false;

        
    }

    reveal() {
        this.back.active = false;
        this.isRevealed = true;
    }
    hide(){
        this.back.active = true;
        this.isRevealed = false;
    }

    onEnable() {
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
        //this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    onDisable() {
        this.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
        //this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
    }

    onTouchStart(event: EventTouch) {
        
    }



        onTouchEnd(event) {
            if (!this.canTouch) {
                return;
            }
        
            if (this.isRevealed) {
                this.canTouch = false; 
        
                const index = event.index;
                this.node.emit(GameController.VARIANTS_UPDATED, { index: index });
                const game = find('Canvas').getComponentInChildren('GameController') as GameController;
                const closestSlot = game.moveCardToWord(this.node.getComponent(Card));
        
                setTimeout(() => {
                    this.canTouch = true;
                }, 700); 
            }
        }
    moveTo(targetWorldPos: Vec3){
        const parentUI = this.node.parent.getComponent(UITransform);
        if (!parentUI) {
            console.warn("Родительский узел не содержит UITransform");
            return;
        }
        const localTarget = parentUI.convertToNodeSpaceAR(targetWorldPos);
        tween(this.node)
            .to(0.2, {
                position: localTarget,
                eulerAngles: new Vec3(0, 0, -this.rotationAngle)
            })
            .start();
        this.backYellow.active = false;
    }

    moveToCompleteWord(worldPos: Vec3){
        const localPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(worldPos);

        tween(this.node)
        .to(0.5, { position: localPos })
        .call(() => {
            this.unschedule(this.createCircle);
        })
        .to(0.5, { scale: Vec3.ZERO }) 
        .call(() => {
            this.removeCard();
        })
        .start();
    
        this.schedule(this.createCircle.bind(this), 0.005, Math.ceil(0.5 / 0.005));
    }
    
    
    createCircle() {
        const newCircle = instantiate(this.circle);
        newCircle.parent = this.node.parent;
    
        const worldPos = this.node.getWorldPosition();
        const localPos = this.node.parent!.getComponent(UITransform)!.convertToNodeSpaceAR(worldPos);
        newCircle.setPosition(localPos);
    
        newCircle.setSiblingIndex(this.node.getSiblingIndex());
    
        newCircle.setScale(this.node.getScale().clone());
    

        tween(newCircle)
            .to(0.3, { scale: new Vec3(0, 0, 0) }) 
            .call(() => {
                newCircle.destroy();
            })
            .start();
    }
    
    
    
        


    removeCard(){this.node.destroy();}
    returnCardToPosition(){
        this.node.setRotation(new Quat(0, 0, 0));
        tween(this.node)
            .to(0.2, {
                position: this.initialPosition,
            })
            .start();
        this.backYellow.active = false;
        
    }
    getLetter(){return this.cardData.letter;}
    setNum(num: number){this.num = num;}
    getNumber(){return this.num;}
}
