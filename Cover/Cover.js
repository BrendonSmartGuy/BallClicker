/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cover extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Discontinued Cover",
        "./Cover/costumes/Discontinued Cover.svg",
        { x: 245.75, y: 181 }
      ),
      new Costume("New Cover=", "./Cover/costumes/New Cover=.svg", {
        x: 293.0420420420425,
        y: 219.46846846846853
      })
    ];

    this.sounds = [new Sound("pop", "./Cover/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "v" }, this.whenKeyVPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "c" }, this.whenKeyCPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenKeyVPressed() {
    for (let i = 0; i < 10; i++) {
      while (true) {
        this.moveAhead();
        yield;
      }
      yield;
    }
    while (true) {
      if (/* no username */ "" == "BrendonSmartGuy") {
        this.visible = false;
        this.stage.watchers.undefined.visible = true;
        this.stage.watchers.rebirths.visible = true;
        this.stage.watchers.time.visible = true;
        this.broadcast("printershow");
        this.broadcast("Button.Shop");
      }
      yield;
    }
  }

  *whenKeyCPressed() {
    for (let i = 0; i < 10; i++) {
      while (true) {
        this.moveAhead();
        yield;
      }
      yield;
    }
    if (/* no username */ "" == "BrendonSmartGuy") {
      this.broadcast("Button.Shop");
      this.visible = true;
      this.moveAhead();
      this.stage.watchers.rebirths.visible = false;
      this.stage.watchers.undefined.visible = false;
      this.stage.watchers.time.visible = false;
      this.broadcast("printerhide");
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
