/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Glow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Glow", "./Glow/costumes/Glow.png", { x: 124, y: 124 })
    ];

    this.sounds = [new Sound("meow", "./Glow/sounds/meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.goto(0, 0);
    while (true) {
      this.direction += 3;
      yield;
    }
  }
}
