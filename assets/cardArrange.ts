import { _decorator, Component, Node, Layout, Enum } from 'cc';
const { ccclass, property } = _decorator;

enum A{
    x=1,
    y=2,
    z=3
}
Enum(A);
@ccclass('cardArrange')
export class cardArrange extends Component {
    @property({
        type:A,
    })layoutType=null;
    start() {
        console.log(this.node.getComponent(Layout));
    }
    onLoad(){

    }
    update(deltaTime: number) {
        
        if(this.layoutType==2)
            this.node.getComponent(Layout).type=2;
        else if(this.layoutType==1)
            this.node.getComponent(Layout).type=1
        else    
            this.node.getComponent(Layout).type=3        
    }
}

