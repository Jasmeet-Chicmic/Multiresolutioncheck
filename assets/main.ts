import { _decorator, Component, Enum, Input, Node, SpriteFrame, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
import { TYPES } from "./type";
@ccclass('main')
export class main extends Component {
    @property(Node)
    square = null;

    properties = {

    }
    @property(Node)
    rectangle: Node = null;


    @property({ type: Enum(TYPES) })
    selection: TYPES = TYPES.NONE;

    @property(Node)
    get frame(): Node {

        console.log("-----------------get");
        console.log(this.rectangle);
        console.log("-----------------get");

        return this.rectangle;
    }
    set frame(value: Node) {

        console.log("-----------------set");
        console.log(this.rectangle);
        console.log("-----------------set");

        console.log("-----------------set");
        console.log(value);
        console.log("-----------------set");

        this.rectangle = value;
        this.fitFrame();
    }

    check: Number = null;

    protected onLoad(): void {



    }
    start() {
        
       

    }


    fitFrame() {


        let rectangleHeight = this.rectangle.getComponent(UITransform).height;
        let rectangleWidth = this.rectangle.getComponent(UITransform).width;
        let squareHeight = this.square.getComponent(UITransform).height;
        let squareWidth = this.square.getComponent(UITransform).width;
        let ascpectRatioOfrectangle = this.rectangle.getComponent(UITransform).width / this.rectangle.getComponent(UITransform).height;
        console.log("ascpect Ration before = ", ascpectRatioOfrectangle);
        if (this.selection == TYPES.CROPED) {


            if (rectangleHeight < rectangleWidth) {
                let scaleof = squareHeight / rectangleHeight;
                this.rectangle.setScale(scaleof, scaleof)
            } else {
                let scaleof = squareWidth / rectangleWidth;
                this.rectangle.setScale(scaleof, scaleof)
            }
        } else if (this.selection == TYPES.WITHOUTCROP) {
            if (rectangleHeight < rectangleWidth) {
                let scaleof = squareWidth / rectangleWidth;
                this.rectangle.setScale(scaleof, scaleof)
            } else {

                let scaleof = squareHeight / rectangleHeight;
                this.rectangle.setScale(scaleof, scaleof)
            }

        }
        let ascpectRatioOfrectangle2 = this.rectangle.getComponent(UITransform).getBoundingBox().width / this.rectangle.getComponent(UITransform).getBoundingBox().height;
        // console.log("ascpect Ration after = ", ascpectRatioOfrectangle2);
        console.log("frameSet se");


    }

    update(deltaTime: number) {

    }
}

