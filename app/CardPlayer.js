import CardDrag from "./CardDrag.js";
/*eslint-disable */
export default class CardPlayer extends CardDrag {
  constructor(data) {
    let { health } = data;

    super(data);
    this.textHealth = new Phaser.GameObjects.Text(this.scene, 0, -110, health);
    this.textMaxHealth = new Phaser.GameObjects.Text(
      this.scene,
      -30,
      -90,
      health
    );
    this.textArmor = new Phaser.GameObjects.Text(this.scene, 0, -105);
    this.spriteArmor = new Phaser.GameObjects.Sprite(
      this.scene,
      47,
      -97,
      "armor"
    );
    this.textHealth.tint = 0;
    this.textMaxHealth.tint = 0;

    this.add([
      this.textHealth,
      this.textMaxHealth,
      this.spriteArmor,
      this.textArmor
    ]);
    this.health = health;
    this.maxHealth = health;
    this.armor = 0;
  }

  set health(newHealth) {
    this._health = newHealth;
    this.textHealth.text = this._health;
    this.textHealth.x = -53 - this.textHealth.width / 2;
  }
  getHealth() {
    return this.health;
  }

  set maxHealth(newMaxHealth) {
    this._maxHealth = newMaxHealth;
  }
  get maxHealth() {
    return this._maxHealth;
  }

  set armor(newArmor) {
    this._armor = newArmor;
    this.textArmor.text = this._armor;
    this.textArmor.x = 46 - this.textArmor.width / 2;
    this.textArmor.alpha = this._armor === 0 ? 0 : 1;
    this.spriteArmor.alpha = this._armor === 0 ? 0 : 1;
  }

  get armor() {
    return this._armor;
  }

  battle(battleValue) {
    if (battleValue <= this.armor) {
      this.armor = this.armor - battleValue;
      console.log(this.armor - battleValue);
    } else {
      this.health = this._health - (battleValue - this.armor);
      this.armor = 0;
    }
    if (this._health <= 0) this.dead = true;
  }

  set dead(dead) {
    this.health = 0;
    this.cardname = "CANCELED";
    this.draggable = false;
    this.deadAnimation();
  }
  get dead() {
    return this._cardname === "CANCELED";
  }
}
