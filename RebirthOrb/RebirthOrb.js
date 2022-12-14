/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class RebirthOrb extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./RebirthOrb/costumes/ball-a.svg", {
        x: 22,
        y: 22
      }),
      new Costume("ball-b", "./RebirthOrb/costumes/ball-b.svg", {
        x: 22,
        y: 22
      }),
      new Costume("ball-c", "./RebirthOrb/costumes/ball-c.svg", {
        x: 22,
        y: 22
      }),
      new Costume("ball-d", "./RebirthOrb/costumes/ball-d.svg", {
        x: 22,
        y: 22
      }),
      new Costume("ball-e", "./RebirthOrb/costumes/ball-e.svg", {
        x: 22,
        y: 22
      })
    ];

    this.sounds = [
      new Sound("Boing", "./RebirthOrb/sounds/Boing.wav"),
      new Sound("Pop", "./RebirthOrb/sounds/Pop.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.undefined > 50 && this.stage.vars.time > 50) {
      this.stage.vars.time += -50;
      this.stage.vars.undefined += -50;
      this.stage.vars.rebirths += 1;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
