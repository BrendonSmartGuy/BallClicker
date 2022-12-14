/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 0,
        y: 0
      }),
      new Costume("Ball Pit", "./Stage/costumes/Ball Pit.svg", {
        x: 254.00000000000003,
        y: 182.49999999999983
      })
    ];

    this.sounds = [
      new Sound("youtube.mp3", "./Stage/sounds/youtube.mp3.wav"),
      new Sound(
        "Vexento - Tevo (Original Mix)",
        "./Stage/sounds/Vexento - Tevo (Original Mix).wav"
      ),
      new Sound(
        "Rain Drop by bubblebee3",
        "./Stage/sounds/Rain Drop by bubblebee3.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "20%" }, this.whenIReceive20),
      new Trigger(
        Trigger.BROADCAST,
        { name: "nothing" },
        this.whenIReceiveNothing
      ),
      new Trigger(Trigger.BROADCAST, { name: "60%" }, this.whenIReceive60),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.rebirths = 0;
    this.vars.time = 526;
    this.vars.WorldRecord = "1.1150000000000006e+29";
    this.vars.epicness = 1;
    this.vars.shopOpen = "no";
    this.vars.flagsClicked = 0;
    this.vars.token = "TOKEN";
    this.vars.clones = 0;
    this.vars.quality = "LOW";
    this.vars.rebirthsLoad = 0;
    this.vars.i = 21;
    this.vars.favliketrack = 4;
    this.vars.xPositionOfNumbers = -200;
    this.vars.theNumber = 0;
    this.vars.maximumLength = 10;
    this.vars.widthBetweenNumbers = 16;
    this.vars.playing = 1;
    this.vars.epic = [
      "BrendonSmartGuy",
      "BrendonSmartTest",
      "LiamSmartGuy",
      "justsmartguyisaac"
    ];
    this.vars.achivements = [
      "ballclicker3",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Rebirth!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!",
      "First Click!"
    ];
    this.vars.reversedigits = [];

    this.watchers.rebirths = new Watcher({
      label: "REBIRTHS",
      style: "large",
      visible: true,
      value: () => this.vars.rebirths,
      x: 240,
      y: -157
    });
    this.watchers.time = new Watcher({
      label: "TIME",
      style: "large",
      visible: true,
      value: () => this.vars.time,
      x: 240,
      y: -134
    });
  }

  *whenGreenFlagClicked() {
    this.audioEffects.volume = 100;
    while (true) {
      yield* this.playSoundUntilDone(this.random(1, 3));
      yield;
    }
  }

  *whenIReceive20() {
    this.audioEffects.volume = 30;
  }

  *whenIReceiveNothing() {
    this.audioEffects.volume = 0;
  }

  *whenIReceive60() {
    this.audioEffects.volume = 50;
  }

  *whenGreenFlagClicked2() {
    this.clearPen();
  }
}
