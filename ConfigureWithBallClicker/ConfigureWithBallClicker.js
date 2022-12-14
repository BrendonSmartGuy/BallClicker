/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ConfigureWithBallClicker extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "entertoken",
        "./ConfigureWithBallClicker/costumes/entertoken.svg",
        { x: 292.5, y: 180 }
      ),
      new Costume(
        "ballclicker3",
        "./ConfigureWithBallClicker/costumes/ballclicker3.svg",
        { x: 110.5, y: 104.25 }
      )
    ];

    this.sounds = [
      new Sound("pop", "./ConfigureWithBallClicker/sounds/pop.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.vars.finishedCon = "X";
    this.vars.tokenList = [
      "USED:BallClicker3NONOLMAONOTNCHDBHXGVXZFSVCSDXSDFB@#$%^&*(&RE$#^SERYXDCFYT&%$RD"
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, 0);
    this.stage.watchers.token.visible = false;
    this.stage.vars.token = "TOKEN";
    this.watchers.tokenList.visible = false;
    this.costume = "entertoken";
    while (true) {
      if (this.keyPressed("o")) {
        while (true) {
          if (this.keyPressed("p")) {
            this.visible = true;
            this.moveAhead();
            this.stage.watchers.undefined.visible = false;
            this.stage.watchers.time.visible = false;
            this.stage.watchers.rebirths.visible = false;
            this.stage.watchers.token.visible = true;
            this.costume = "entertoken";
            yield* this.askAndWait("TOKEN NUMBER");
            if (this.vars.tokenList.join(" ").includes(this.answer)) {
              this.costume = this.answer;
              this.stage.vars.token = this.answer;
              this.stage.watchers.token.visible = false;
              this.broadcast("show.a-c");
            }
            while (true) {
              if (this.keyPressed("o")) {
                this.visible = false;
                this.stage.watchers.undefined.visible = true;
                this.stage.watchers.time.visible = true;
                this.stage.watchers.rebirths.visible = true;
                this.stage.watchers.token.visible = false;
                this.broadcast("hide.a-c");
              }
              yield;
            }
          }
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.costumeNumber == 2) {
        if (!(this.vars.finishedCon == "yes")) {
          this.stage.vars.undefined += 1000;
          this.vars.finishedCon = "yes";
          if (this.keyPressed("o")) {
            this.stage.watchers.undefined.visible = true;
            this.stage.watchers.time.visible = true;
            this.stage.watchers.rebirths.visible = true;
            this.stage.watchers.token.visible = false;
            this.broadcast("hide.a-c");
            /* TODO: Implement stop other scripts in sprite */ null;
            return;
          }
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.achivements.splice(1 - 1, 1, "ballclicker3");
    this.vars.finishedCon = "X";
  }
}
