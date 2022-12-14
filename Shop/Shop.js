/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Shop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Shop/costumes/costume1.svg", {
        x: 52.5,
        y: 24.292192578548196
      }),
      new Costume("costume2", "./Shop/costumes/costume2.svg", {
        x: 52.5,
        y: 24.00000257854819
      })
    ];

    this.sounds = [new Sound("pop", "./Shop/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Button.Shop" },
        this.whenIReceiveButtonShop
      )
    ];

    this.vars.hidden = "N";
  }

  *whenGreenFlagClicked() {
    this.costume = "costume1";
    this.visible = true;
    while (true) {
      this.goto(190, -156);
      this.moveAhead();
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.costume = "costume2";
    yield* this.wait(0.1);
    this.costume = "costume1";
    yield* this.wait(0.4);
    this.broadcast("shop");
    this.stage.vars.shopOpen = "yes";
    while (true) {
      while (!this.keyPressed("e")) {
        yield;
      }
      while (!!this.keyPressed("e")) {
        yield;
      }
      this.costume = "costume2";
      yield* this.wait(0.1);
      this.costume = "costume1";
      yield* this.wait(0.4);
      this.broadcast("close shop");
      this.stage.vars.shopOpen = "no";
      return;
      yield;
    }
  }

  *whenIReceiveButtonShop() {
    if (this.vars.hidden == "Y") {
      this.visible = true;
      this.vars.hidden = "N";
    } else {
      this.visible = false;
      this.vars.hidden = "Y";
    }
  }
}
