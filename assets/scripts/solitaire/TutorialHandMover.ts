import { _decorator, Component, Node, Quat, tween, Tween, Vec3 } from 'cc';
import GameController from './GameController';
import Card from './Card';
const { ccclass, property } = _decorator;

@ccclass('TutorialHandMover')
export class TutorialHandMover extends Component {
    
    private readonly timeToActivate: number = 4;

    @property({type: GameController})
    private game: GameController = null;

    @property({type: Node})
    private hand: Node = null;
    
    @property({type: Node})
    private firstTarget: Node = null;

    private shouldActivate: boolean;
    private remainingTime: number;
    private to: Node;
    private toScaleTween: Tween<Node>;
    private rotationTween: Tween<Node>;
    private toScaleYellowTween: Tween<Node>;

    private backYellow: Node;

    onLoad() {
        this.game.node.on(GameController.VARIANTS_UPDATED, this.shouldShowHand, this);
        this.game.node.on(GameController.VARIANT_SELECTED, this.hideHand, this);
    }

    onDestroy() {
        this.game.node.off(GameController.VARIANTS_UPDATED, this.shouldShowHand, this);
        this.game.node.off(GameController.VARIANT_SELECTED, this.hideHand, this);
    }

    start() {
        this.hand.active = false;
        this.shouldActivate = false;
        this.to = this.firstTarget;
    }

    update(deltaTime: number) {
        
        if (!this.shouldActivate)
            return;

        this.remainingTime -= deltaTime;
        
        if (this.remainingTime > 0)
            return;

        this.shouldActivate = false;
        this.moveHand();
    }

    private moveHand() {
        this.hand.active = true;

        const moveDelay = 0.5;
        const scaleToNormal = 0.5;
        let correctVariant = this.game.getCorrectVariant();

        if (correctVariant) {
            this.to = correctVariant.node;
            this.to.eulerAngles = new Vec3(0, 0, 0);
            this.backYellow = correctVariant.backYellow;
            this.backYellow.active = true;

            this.hand.setWorldPosition(this.firstTarget.getWorldPosition());
            this.hand.setWorldPosition(this.to.getWorldPosition());
            /*tween(this.hand)
                .to(0.2, { worldPosition: this.to.getWorldPosition() })
                .start();*/
            tween(this.hand)
                .to(0.5, { scale: new Vec3(0.8, 0.8) })
                .to(0.5, {scale: new Vec3(0.7, 0.7)})
                .union()
                .repeatForever()
                .start();

            this.toScaleTween = tween(this.to)
                .to(moveDelay, { scale: new Vec3(1.1, 1.1) })
                .to(scaleToNormal, { scale: Vec3.ONE })
                .union()
                .repeatForever()
                .start();

            this.rotationTween = tween(this.to)
                .to(0.3, { eulerAngles: new Vec3(0, 0, this.to.eulerAngles.z + 10) })
                .to(0.3, { eulerAngles: new Vec3(0, 0, this.to.eulerAngles.z - 10) })
                .union()
                .repeatForever()
                .start();
            this.toScaleYellowTween = tween(this.backYellow)
                .to(0.3, { scale: new Vec3(0.8, 0.8) })
                .to(0.3, { scale: new Vec3(0.6, 0.6) })
                .union()
                .repeatForever()
                .start()
            
        }
    }

    private shouldShowHand() {
        if(this.toScaleTween){
            this.hideHand();
        }
        this.hand.active = false;
        this.shouldActivate = true;
        this.remainingTime = this.timeToActivate;
    }

    private hideHand() {
        if (this.toScaleTween) {
            this.toScaleTween.stop();
        }

        if (this.rotationTween) {
            this.rotationTween.stop();
        }
        if(this.toScaleYellowTween){
            this.toScaleYellowTween.stop();
        }

        if (this.to) {
            this.to.setScale(Vec3.ONE);
            this.to.setRotation(new Quat(0, 0, 0));
        }

        this.hand.active = false;
        this.shouldActivate = false;
        this.backYellow.active = false;
    }
}