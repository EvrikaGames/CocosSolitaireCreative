import { _decorator, Component, find, Label, Node, Vec3, Event, EventTouch, Canvas, tween, UITransform, Quat } from 'cc';
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

    num: number;

    private cardData: ICardData;
    private initialPosition: Vec3;
    isSelected: boolean = false;
    isRevealed: boolean = false;

    @property
    rotationAngle: number = 360;


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

    /*onTouchMove(event: EventTouch) {
        const delta = event.getDelta();
        this.node.setPosition(this.node.position.add(delta.toVec3()));
    }*/

    onTouchEnd(event) {
        if(this.isRevealed){
            const index = event.index;
            this.node.emit(GameController.VARIANTS_UPDATED, {index: index});
            //this.node.emit(GameController.VARIANT_SELECTED, {index: index});
            const game = find('Canvas').getComponentInChildren('GameController') as  GameController;
            const closestSlot = game.moveCardToWord(this.node.getComponent(Card));
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
            .to(1, { position: localPos })
            .to(1, { scale: Vec3.ZERO })
            .call(() => {
                this.removeCard();
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
