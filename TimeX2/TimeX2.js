/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TimeX2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./TimeX2/costumes/costume1.svg", {
        x: 106.29529881453874,
        y: 47.36414756135426
      })
    ];

    this.sounds = [
      new Sound("pop", "./TimeX2/sounds/pop.wav"),
      new Sound("Dance Around", "./TimeX2/sounds/Dance Around.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "printerhide" },
        this.whenIReceivePrinterhide
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "printershow" },
        this.whenIReceivePrintershow
      )
    ];

    this.vars.level2 = 0;
    this.vars.random2 = 0.47173949322287956;
    this.vars.clicks3 = 0;

    this.watchers.level2 = new Watcher({
      label: "TimeX2: Level",
      style: "large",
      visible: true,
      value: () => this.vars.level2,
      x: 670,
      y: 57
    });
    this.watchers.clicks3 = new Watcher({
      label: "TimeX2: Clicks",
      style: "large",
      visible: true,
      value: () => this.vars.clicks3,
      x: 453,
      y: 71
    });
  }

  *whenthisspriteclicked() {
    if (this.vars.clicks3 > 100) {
      this.vars.clicks3 += -100;
      this.vars.level2 += 1;
    }
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.wait(1);
      this.stage.vars.time += 1 + this.vars.level2;
      this.broadcast("tick");
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.vars.level2 = 0;
  }

  *whenIReceivePrinterhide() {
    this.watchers.level2.visible = false;
  }

  *whenIReceivePrintershow() {
    this.watchers.level2.visible = true;
  }
}
