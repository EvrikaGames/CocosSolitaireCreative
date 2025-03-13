import { _decorator, Component, Node, UITransform, Color, Button } from 'cc';
import { StoreButtonComponent } from '../ui/StoreButtonComponent';
const { ccclass, property } = _decorator;

@ccclass('Blocker')
export class Blocker extends Component {
    @property(Node)
    blocker: Node = null;

    @property(StoreButtonComponent)
    button: StoreButtonComponent = null;

    onLoad() {
        const uiTransform = this.blocker.getComponent(UITransform);
        if (uiTransform) {
            uiTransform.setContentSize(this.node.parent.getComponent(UITransform).contentSize);
            this.blocker.setPosition(0, 0, 0);
        }
        this.blocker.active = false;
    }


    showBlocker() {
        this.blocker.active = true;
    }

    hideBlocker() {
        this.blocker.active = false;
    }

    activateButtonStore(){
        this.button.enabled = true;
    }
}