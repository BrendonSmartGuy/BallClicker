/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AC extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./AC/costumes/costume1.svg", {
        x: 163.66792566347524,
        y: 48.5
      }),
      new Costume("costume2", "./AC/costumes/costume2.svg", {
        x: 163.6679188794584,
        y: 48.5
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "show.a-c" },
        this.whenIReceiveShowAC
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide.a-c" },
        this.whenIReceiveHideAC
      )
    ];

    this.vars.input1 = 0;
    this.vars.easteregg = [];
  }

  *whenGreenFlagClicked() {
    this.size = 50;
    this.goto(103, -91);
    this.visible = false;
  }

  *whenIReceiveShowAC() {
    this.visible = true;
    this.createClone();
    if (this.stage.vars.token.includes(this.vars.easteregg.join(" "))) {
      this.visible = false;
      this.deleteThisClone();
    } else {
      this.vars.input1 = "doshow";
    }
  }

  *startAsClone() {
    this.goto(-158, -91);
    this.costume = "costume2";
    if (this.vars.input1 == "doshow") {
      while (true) {
        if (this.mouse.down && this.touching("mouse")) {
          this.broadcast("X");
        }
        yield;
      }
    } else {
      this.visible = false;
      /* TODO: Implement stop other scripts in sprite */ null;
      return;
    }
  }

  *whenIReceiveHideAC() {
    this.visible = false;
    this.deleteThisClone();
  }
}
