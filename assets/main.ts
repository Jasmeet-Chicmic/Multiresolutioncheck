import { _decorator, Component, Enum, Input, Node, SpriteFrame, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
import { TYPES } from "./type";
@ccclass('main')
export class main extends Component {
    @property(Node)
    square = null;


    @property(Node)
    rectangle: Node = null;

    @property(Node)
    options: Node = null;

    @property(SpriteFrame)
    rectangleSprite = null;
    @property(Node)
    get frame(): Node {
        return this.rectangle;
    }
    set frame(value: Node) {
        this.rectangle = value;
        this.fitFrame();
    }

    check: Number = null;

    protected onLoad(): void {
        console.log(this.options);

        this.options.children[0].on(Input.EventType.TOUCH_START, () => { this.check = TYPES.CROP })
        this.options.children[1].on(Input.EventType.TOUCH_START, () => { this.check = TYPES.WITHOUTCROP })

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
        if (this.check == TYPES.WITHOUTCROP) {
            this.frame = this.rectangleSprite;
            if (rectangleHeight < rectangleWidth) {
                let scaleof = squareHeight / rectangleHeight;
                this.rectangle.setScale(scaleof, scaleof)
            } else {
                let scaleof = squareWidth / rectangleWidth;
                this.rectangle.setScale(scaleof, scaleof)
            }
        } else {
            if (rectangleHeight < rectangleWidth) {
                let scaleof = squareWidth / rectangleWidth;
                this.rectangle.setScale(scaleof, scaleof)
            } else {

                let scaleof = squareHeight / rectangleHeight;
                this.rectangle.setScale(scaleof, scaleof)
            }

        }
        let ascpectRatioOfrectangle2 = this.rectangle.getComponent(UITransform).getBoundingBox().width / this.rectangle.getComponent(UITransform).getBoundingBox().height;
        console.log("ascpect Ration after = ", ascpectRatioOfrectangle2);
    }

    update(deltaTime: number) {

    }
}

