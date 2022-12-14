/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class UserCheats extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./UserCheats/costumes/costume1.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [new Sound("pop", "./UserCheats/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "7" }, this.whenKey7Pressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenKey7Pressed() {
    if (this.stage.vars.epic.join(" ").includes(/* no username */ "")) {
      this.stage.vars.time += 1e26;
      this.stage.vars.undefined += 1e26;
      this.stage.vars.rebirths += 1e26;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.epic.visible = false;
  }
}
