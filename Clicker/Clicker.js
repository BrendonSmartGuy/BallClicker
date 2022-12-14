/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Clicker extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./Clicker/costumes/ball-a.svg", { x: 22, y: 22 }),
      new Costume("ball-b", "./Clicker/costumes/ball-b.svg", { x: 22, y: 22 }),
      new Costume("ball-c", "./Clicker/costumes/ball-c.svg", { x: 22, y: 22 }),
      new Costume("ball-d", "./Clicker/costumes/ball-d.svg", { x: 22, y: 22 }),
      new Costume("ball-e", "./Clicker/costumes/ball-e.svg", { x: 22, y: 22 })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(
        Trigger.BROADCAST,
        { name: "click.ball" },
        this.whenIReceiveClickBall
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(
        Trigger.BROADCAST,
        { name: "favorite" },
        this.whenIReceiveFavorite
      ),
      new Trigger(Trigger.BROADCAST, { name: "like" }, this.whenIReceiveLike),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked9),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked10)
    ];

    this.vars.clicks = 232;

    this.watchers.clicks = new Watcher({
      label: "Clicker: Clicks",
      style: "large",
      visible: true,
      value: () => this.vars.clicks,
      x: 453,
      y: 71
    });
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.wait(1);
      this.stage.vars.time += 1;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.vars.clicks > this.stage.vars.WorldRecord) {
        this.stage.vars.WorldRecord = this.vars.clicks;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if ("" > this.stage.vars.WorldRecord) {
        if (this.vars.clicks > 50) {
          null;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.keyPressed("space")) {
        while (!!this.keyPressed("space")) {
          yield;
        }
        this.vars.clicks +=
          this.stage.vars.rebirthsLoad + this.stage.vars.epicness;
        this.broadcast("click.ball");
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.vars.clicks += this.stage.vars.rebirths + this.stage.vars.epicness;
    this.broadcast("click.ball");
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.stage.vars.rebirths > 0) {
        this.stage.vars.rebirthsLoad =
          String(this.stage.vars.rebirths)[5 - 1] + 1;
      } else {
        this.stage.vars.rebirthsLoad = 0;
      }
      yield;
    }
  }

  *setup() {
    this.goto(0, 0);
    this.moveAhead();
    this.costume = "ball-a";
    this.watchers.clicks.visible = true;
    this.stage.watchers.time.visible = true;
    this.stage.watchers.rebirths.visible = true;
    this.stage.watchers.clones.visible = false;
    this.vars.clicks = 0;
    this.stage.vars.rebirths = 0;
    this.stage.vars.time = 0;
    this.stage.vars.epicness = 1;
    this.stage.vars.clones = 0;
    this.stage.watchers.favliketrack.visible = false;
    this.goto(0, 0);
  }

  *whenGreenFlagClicked6() {
    yield* this.setup();
  }

  *whenGreenFlagClicked7() {
    this.broadcast("printershow");
    this.moveAhead(1e95);
  }

  *whenIReceiveClickBall() {
    this.createClone();
  }

  *startAsClone() {
    if (this.stage.vars.clones == 50 || 50 > this.stage.vars.clones) {
      this.stage.vars.clones += 1;
      this.direction = 0;
      yield* this.glide(0.2, 0, 100);
      yield* this.glide(0.2, 0, 0);
      this.stage.vars.clones += -1;
      this.deleteThisClone();
    } else {
      this.deleteThisClone();
    }
  }

  *whenGreenFlagClicked8() {
    while (true) {
      this.effects.color += 1;
      yield;
    }
  }

  *whenIReceiveFavorite() {
    this.stage.vars.favliketrack += 1;
    if (this.stage.vars.favliketrack == 2) {
      this.vars.clicks += 1000;
      this.broadcast("click.ball");
    }
  }

  *whenIReceiveLike() {
    this.stage.vars.favliketrack += 1;
    if (this.stage.vars.favliketrack == 2) {
      this.vars.clicks += 1000;
      this.broadcast("click.ball");
    }
  }

  *whenGreenFlagClicked9() {
    while (true) {
      if (
        this.keyPressed("space") &&
        this.mouse.down && this.touching("mouse")
      ) {
        this.vars.clicks += -1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked10() {
    while (true) {
      if (this.vars.clicks < 0 || this.vars.clicks == 0) {
        this.vars.clicks += 1;
      }
      yield;
    }
  }
}
