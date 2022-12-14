/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class WorldRecord2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./WorldRecord2/costumes/costume1.svg", {
        x: 244.5,
        y: 183
      })
    ];

    this.sounds = [new Sound("pop", "./WorldRecord2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "w" }, this.whenKeyWPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars._2ndChair = 0;
    this.vars._2ndPlaceWr = 0;
  }

  *whenKeyWPressed() {
    for (let i = 0; i < 10; i++) {
      if (this.keyPressed("w")) {
        this.broadcast("printerhide");
        while (true) {
          this.moveAhead();
          this.visible = true;
          this.stage.watchers.undefined.visible = false;
          this.stage.watchers.rebirths.visible = false;
          this.stage.watchers.time.visible = false;
          this.watchers._2ndChair.visible = true;
          this.stage.watchers.undefined.visible = true;
          this.watchers._2ndPlaceWr.visible = true;
          this.stage.watchers.WorldRecord.visible = true;
          if (this.keyPressed("space")) {
            this.broadcast("printershow");
            this.stage.watchers.undefined.visible = true;
            this.stage.watchers.rebirths.visible = true;
            this.stage.watchers.time.visible = true;
            this.watchers._2ndChair.visible = false;
            this.stage.watchers.undefined.visible = false;
            this.stage.watchers.WorldRecord.visible = false;
            this.watchers._2ndPlaceWr.visible = false;
            this.visible = false;
            return;
          }
          yield;
        }
      }
      yield* this.wait(0.5);
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.watchers._2ndChair.visible = false;
    this.stage.watchers.undefined.visible = false;
    this.stage.watchers.WorldRecord.visible = false;
    this.watchers._2ndPlaceWr.visible = false;
  }
}
