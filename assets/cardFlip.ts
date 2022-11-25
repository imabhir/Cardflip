import { _decorator, Component, Node, Vec3, Label, spriteAssembler, Sprite, SpriteFrame, tween, Layout } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('cardFlip')
export class cardFlip extends Component {
    @property({
        type: Label
    })label= null!;
    @property({
        type : SpriteFrame
    })faceDown= null!;
    // @property({
    //     type:Layout,
    // })setLayout=null!;

    start() {
        let scale=this.node.getScale();
        // this.node.getComponent(Sprite).grayscale=true;
        // this.text.string = "hello";

        this.node.on(Node.EventType.MOUSE_DOWN, (event) => {

            if(this.faceDown){
                tween(this.node)
                .to(0.5,{scale:new Vec3(0,1,1)})
                .call(()=>{
                    this.node.getComponent(Sprite).spriteFrame=this.faceDown;
                })
                .to(0.5,{scale:new Vec3(1,1,1)})
                .start();
            }else{
                console.log("else");
            }

           
            // let label =this.node.getComponentInChildren(Label);
            // let scale=this.node.getScale();
            // let sp=this.node.getComponents(Sprite);
            
            
            // if(scale.x==1){
            //     scale.x=0;
            //     label.string=" ";this.node.setScale(scale);
            // }else{
            //     label.string="$";
            //     scale.x++;this.node.setScale(scale);
            // }
            
          }, this);
    }

    update(deltaTime: number) {
        
    }
}

