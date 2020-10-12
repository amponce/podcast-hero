import MainScene from "./MainScene.js";
/*eslint-disable */
const config = {
  type: Phaser.AUTO,
  scale: {
    // mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT, better quality but not mobile responsive
    mode: Phaser.Scale.FIT,
    parent: "phaser-game",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 640,
    height: 1020
  },
  backgroundColor: "#002436",

  scene: [MainScene]
};

new Phaser.Game(config);
