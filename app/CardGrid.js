import CardBase from "./CardBase.js";
/*eslint-disable */
export default class CardGrid extends CardBase {
  constructor(data) {
    let { value, hp, type } = data;
    super(data);
    this.textValue = new Phaser.GameObjects.Text(this.scene, 0, -115, value);
    this.add(this.textValue);
    this.hp = hp;
    this.value = value;
    this.cardtype = type;
  }
  set value(newValue) {
    this._value = newValue;
    this.textValue.text = this._value + " " + this.hp;
    this.textValue.x = 0 - this.textValue.width / 2;
    if (this.hp === "+") {
      this.textValue.setStyle({
        color: "#000"
      });
    } else {
      this.textValue.setStyle({
        color: "#E40B0B"
      });
    }
  }
  get value() {
    return this._value;
  }

  set highlighted(highlight) {
    if (highlight) {
      let color = 0xcccc88;
      this.spriteCard.tint = color;
      this.spriteImage.tint = color;
    } else {
      this.spriteCard.tint = 0xffffff;
      this.spriteImage.tint = 0xffffff;
    }
  }
}
