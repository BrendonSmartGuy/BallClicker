/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class X5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./X5/costumes/costume1.svg", {
        x: 30.80903309417738,
        y: 39.02413036557323
      })
    ];

    this.sounds = [new Sound("pop", "./X5/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "close shop" },
        this.whenIReceiveCloseShop
      )
    ];
  }

  *whenIReceiveShop() {
    this.visible = true;
    this.moveAhead(1e191);
    this.goto(130, 43);
    for (let i = 0; i < 1; i++) {
      while (true) {
        if (this.mouse.down && this.touching("mouse")) {
          if (
            this.stage.vars.undefined == 1000 ||
            this.stage.vars.undefined > 1000
          ) {
            this.stage.vars.undefined += -1000;
            this.stage.vars.rebirths = "MAX";
          }
        }
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveCloseShop() {
    this.visible = false;
  }
}
