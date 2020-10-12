import CardPlayer from "./CardPlayer.js";
import Grid from "./Grid.js";
import { RestartButton } from "./RestartButton.js";
/*eslint-disable */
export default class Main extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    this.load.image("armor", "assets/armor.png");
    this.load.image("card", "assets/card.png");
    this.load.image("dead", "assets/dead.png");
    this.load.image("surprise-guest", "assets/surprise-guest.png");
    this.load.image("joe-rogan", "assets/joe-rogan.png");
    this.load.image("bill-burr", "assets/bill-burr.png");
    this.load.image("michelle-obama", "assets/michelle-obama.png");
    this.load.image("my-favorite-murder", "assets/my-favorite-murder.png");
    this.load.image("mark-marron", "assets/mark-marron.png");
    this.load.image("sword-and-scale", "assets/sword-and-scale.png");
    this.load.image("date-line", "assets/date-line.png");
    this.load.image("the-daily", "assets/the-daily.png");
    this.load.image("conan", "assets/conan.png");
    this.load.image("trending", "assets/trending.png");
    this.load.image("new-subscribers", "assets/new-subscribers.png");
    this.load.image("sofia", "assets/sofia.png");
    this.load.image("tigerbelly", "assets/tigerbelly.png");
    this.load.image("hero", "assets/hero.png");
    this.load.image("playercard", "assets/playerCard.png");
    this.load.image("restartbutton", "assets/restartBtn.png");
    this.load.image("shield", "assets/shield.png");
    this.load.image("dax", "assets/dax.png");
  }

  create() {
    this.grid = new Grid({ scene: this, columns: 3, rows: 3 });
    this.grid.cards[0].highlighted = true;
    this.player = new CardPlayer({
      scene: this,
      name: "Our Hero",
      x: this.game.config.width / 2,
      y: this.game.config.height - 200,
      card: "playercard",
      image: "hero",
      health: 21,
      depth: 1,

      ondragend: (pointer, gameObject) => {
        this.player.x = this.player.originalX;
        this.player.y = this.player.originalY;
        if (this.highlighted) {
          this.player.originalX = this.player.x = this.highlighted.x;
          this.highlighted.selected = true;
          switch (this.highlighted.cardtype) {
            case "battle":
              this.player.battle(this.highlighted.value);
              this.highlighted.dead = true;
              this.highlighted.deadAnimation();

              break;
            case "heal":
              this.player.health = Math.min(
                this.player._health + this.highlighted.value,
                this.player.maxHealth
              );

              break;
            case "armor":
              this.player.armor = this.highlighted.value;
              break;
            default:
              //
              break;
          }
          if (this.player.dead) {
            RestartButton(this);
          } else {
            this.grid.fadeFrontRow();
          }
        }
      }
    });
  }

  update(time, delta) {
    this.grid.cards[0].highlighted = false;
    this.grid.cards[1].highlighted = false;
    this.grid.cards[2].highlighted = false;
    this.highlighted = null;
    let columnWidth = this.game.config.width / this.grid.columns;
    if (this.player.y < 700) {
      if (this.player.x < columnWidth) {
        this.grid.cards[0].highlighted = true;
        this.highlighted = this.grid.cards[0];
      } else if (this.player.x > columnWidth * 2) {
        this.grid.cards[2].highlighted = true;
        this.highlighted = this.grid.cards[2];
      } else {
        this.grid.cards[1].highlighted = true;
        this.highlighted = this.grid.cards[1];
      }
    }
  }
}
