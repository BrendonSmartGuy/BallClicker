/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class X2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./X2/costumes/costume1.svg", {
        x: 30.809033680143386,
        y: 39.02413192919744
      })
    ];

    this.sounds = [new Sound("pop", "./X2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "close shop" },
        this.whenIReceiveCloseShop
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenIReceiveShop() {
    this.visible = true;
    this.moveAhead(1e191);
    this.goto(-134, 43);
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

  *whenthisspriteclicked() {
    if (this.stage.vars.undefined == 100 || this.stage.vars.undefined > 100) {
      this.stage.vars.undefined += -100;
      this.stage.vars.rebirths = "LVL 1";
      this.visible = false;
    }
  }
}
