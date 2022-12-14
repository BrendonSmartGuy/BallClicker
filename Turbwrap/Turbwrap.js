/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Turbwrap extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Turbwrap/costumes/costume1.svg", {
        x: 242.50000000000006,
        y: 187.00000000000006
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(-4, 4);
    while (true) {
      if (undefined == "true") {
        this.visible = false;
      } else {
        this.visible = true;
        if (this.keyPressed("space") || this.touching("mouse")) {
          this.visible = false;
          return;
        }
      }
      yield;
    }
  }
}
