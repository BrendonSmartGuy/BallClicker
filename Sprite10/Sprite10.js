/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume4", "./Sprite10/costumes/costume4.svg", {
        x: 74.94611390334617,
        y: 51.17584709263187
      }),
      new Costume("costume2", "./Sprite10/costumes/costume2.svg", {
        x: 74.94611805375689,
        y: 51.17584827423937
      }),
      new Costume("costume3", "./Sprite10/costumes/costume3.svg", {
        x: 74.9461122041676,
        y: 51.17584945584687
      }),
      new Costume("costume5", "./Sprite10/costumes/costume5.svg", {
        x: 74.94611635457835,
        y: 51.175850637454374
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite10/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.goto(-214, 85);
  }

  *whenIReceiveShop() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.costumeNumber += 1;
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.costumeNumber == 1) {
        this.broadcast("100%");
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (this.costumeNumber == 2) {
        this.broadcast("60%");
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.costumeNumber == 3) {
        this.broadcast("20%");
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.costumeNumber == 4) {
        this.broadcast("nothing");
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    this.costume = "costume4";
    this.goto(-290, 85);
    while (true) {
      if (this.touching("mouse")) {
        for (let i = 0; i < 7; i++) {
          this.x += 10;
          yield;
        }
        while (!!this.touching("mouse")) {
          yield;
        }
        for (let i = 0; i < 7; i++) {
          this.x += -10;
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked7() {
    while (true) {
      if (this.keyPressed("v")) {
        while (!!this.keyPressed("v")) {
          yield;
        }
        this.stage.watchers.flagsClicked.visible = false;
        while (!this.keyPressed("v")) {
          yield;
        }
        this.stage.watchers.flagsClicked.visible = true;
        while (!!this.keyPressed("v")) {
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked8() {
    while (true) {
      if (this.keyPressed("h")) {
        while (!!this.keyPressed("h")) {
          yield;
        }
        this.visible = false;
        while (!this.keyPressed("h")) {
          yield;
        }
        this.visible = true;
        while (!!this.keyPressed("h")) {
          yield;
        }
      }
      yield;
    }
  }
}
