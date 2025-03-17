import { _decorator, color, Color, Component, Node, Sprite, tween, Vec3 } from 'cc';
import Card from './Card';
const { ccclass, property } = _decorator;

@ccclass('Letter')
export class Letter extends Component {
    private readonly correctColor: Color = new Color(0, 255, 0, 255);
    private readonly uncorrectColor: Color = new Color(255, 0, 0, 255);

    letter: string;
    isRight: boolean = false;
    isOccupied: boolean = false;
    private card: Card = null;

    @property({type: Sprite})
    private checkSprite = null;

    private defaultColor: Color;
    private targetColor: Color;

    onLoad() {
        this.defaultColor = new Color(this.checkSprite.color);
    }

    CompareLetters(card: Card){
        if(card.getLetter() == this.letter){
            this.isRight = true;
            this.targetColor = this.correctColor;
        } else{
            this.isRight = false;
            this.targetColor = this.uncorrectColor;
        }

    }
    init(letter: string){
        this.letter = letter;
        this.isRight = false;
        this.isOccupied = false;
    }
    setCard(card: Card){
        this.card = card;
        this.isOccupied = true;
        this.CompareLetters(card);
        card.isSelected = true;
        card.moveTo(this.node.getWorldPosition());
    }

    remove(){
        this.card = null;
        this.node.destroy();
        
    }
    getCard(){return this.card;}

    repeatWordAnimation() {
        tween(this.node)
        .delay(0.2)
        .call(() => {
            this.checkSprite.color = this.targetColor;
        })
        .to(0.1, {scale : new Vec3(this.node.scale.x + 0.2, this.node.scale.y + 0.2, 0)})
        .delay(0.3)
        .to(0.1, {scale : new Vec3(1, 1, 0)})
        .call(() => {
            this.checkSprite.color = this.defaultColor;
        })
        .start();
    }
    repeatWordEndAnimation() {
        tween(this.node)
        .call(() => {
            this.checkSprite.color = this.targetColor;
        })
        .to(0.1, {scale : new Vec3(this.node.scale.x + 0.2, this.node.scale.y + 0.2, 0)})
        .delay(0.3)
        .to(0.1, {scale : new Vec3(1, 1, 0)})
        .call(() => {
            this.checkSprite.color = this.defaultColor;
        })
        .start();
    }
    toDefaultColor(){this.checkSprite.color = this.defaultColor;}
    toRightColor(){this.targetColor = this.correctColor;}
    toWrongColor(){this.targetColor = this.uncorrectColor;}
}


