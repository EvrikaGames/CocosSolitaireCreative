import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Word')
export class Word extends Component {
    @property(Label)
    label: Label = null;
    
    @property(Node)
    selectedBack: Node = null;
    @property(Node)
    private numbers = null;
    @property(Label)
    private element = null;
    
    private isSelected: boolean = false;

    selectWord(){
        this.selectedBack.active = true;
    }
    setString(str: string){
        this.label.string = str;
        this.numbers.destroy();
    }
    setNumber(num: number){
        this.element.string = num.toString();
   }
}


