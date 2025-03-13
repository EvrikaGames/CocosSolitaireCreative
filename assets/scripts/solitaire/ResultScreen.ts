import { _decorator, Animation, Button, Component, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ResultScreen')
export class ResultScreen extends Component {
    
    @property({type:Node})
    private win: Node = null;

    @property([SpriteFrame])
    private sprites: SpriteFrame[] = [];

    

    @property({type:Animation})
    private animation = null;

    @property({type:Node})
    private touchBlocker = null;

    show(isWin: boolean) {
        const randomIndex = Math.floor(Math.random() * this.sprites.length);
        this.win.getComponent(Sprite).spriteFrame = this.sprites[randomIndex];
        this.win.active = isWin;

        this.touchBlocker.active = true;
        this.animation.play();
    }
}
