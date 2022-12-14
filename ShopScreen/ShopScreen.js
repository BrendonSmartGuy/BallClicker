/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ShopScreen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./ShopScreen/costumes/costume1.svg", {
        x: 293.543535,
        y: 225.97596499999997
      })
    ];

    this.sounds = [new Sound("pop", "./ShopScreen/sounds/pop.wav")];

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
    this.stage.watchers.undefined.visible = false;
    this.stage.watchers.rebirths.visible = false;
    this.stage.watchers.time.visible = false;
    this.broadcast("printerhide");
    this.moveAhead(1e166);
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCloseShop() {
    yield* this.wait(0.6);
    this.visible = false;
    this.stage.watchers.undefined.visible = true;
    this.stage.watchers.time.visible = true;
    this.stage.watchers.rebirths.visible = true;
    this.broadcast("printershow");
  }
}
