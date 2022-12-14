/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Printer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Printer/costumes/costume1.svg", {
        x: 106.29530100713401,
        y: 47.36415049815696
      })
    ];

    this.sounds = [
      new Sound("pop", "./Printer/sounds/pop.wav"),
      new Sound("Dance Around", "./Printer/sounds/Dance Around.wav")
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

    this.vars.level = 0;
    this.vars.random = 0;
    this.vars.clicks2 = 0;

    this.watchers.level = new Watcher({
      label: "Printer: Level",
      style: "large",
      visible: true,
      value: () => this.vars.level,
      x: 670,
      y: 158
    });
    this.watchers.clicks2 = new Watcher({
      label: "Printer: Clicks",
      style: "large",
      visible: true,
      value: () => this.vars.clicks2,
      x: 453,
      y: 71
    });
  }

  *whenthisspriteclicked() {
    if (this.vars.clicks2 > 100 || this.vars.clicks2 == 100) {
      this.vars.clicks2 += -100;
      this.vars.level += 1;
    }
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (!(this.vars.level == 0)) {
        yield* this.wait(1);
        this.vars.clicks2 += this.vars.level;
        this.broadcast("click.ball");
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.vars.level = 0;
  }

  *whenIReceivePrinterhide() {
    this.watchers.level.visible = false;
  }

  *whenIReceivePrintershow() {
    this.watchers.level.visible = true;
  }
}
