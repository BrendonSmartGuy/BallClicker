/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Achivents extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Firstclick", "./Achivents/costumes/Firstclick.svg", {
        x: 65.729165,
        y: 34.75
      }),
      new Costume("Firstrebirth", "./Achivents/costumes/Firstrebirth.svg", {
        x: 65.72915499999999,
        y: 34.75
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "reset.ach" },
        this.whenIReceiveResetAch
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenGreenFlagClicked() {}

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveResetAch() {}

  *whenGreenFlagClicked3() {}

  *whenGreenFlagClicked4() {}
}
