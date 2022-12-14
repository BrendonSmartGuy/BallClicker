import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Blank from "./Blank/Blank.js";
import Clicker from "./Clicker/Clicker.js";
import RebirthOrb from "./RebirthOrb/RebirthOrb.js";
import WorldRecord2 from "./WorldRecord2/WorldRecord2.js";
import Printer from "./Printer/Printer.js";
import TimeX2 from "./TimeX2/TimeX2.js";
import Cover from "./Cover/Cover.js";
import UserCheats from "./UserCheats/UserCheats.js";
import Achivents from "./Achivents/Achivents.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import ShopScreen from "./ShopScreen/ShopScreen.js";
import Shop from "./Shop/Shop.js";
import ConfigureWithBallClicker from "./ConfigureWithBallClicker/ConfigureWithBallClicker.js";
import AC from "./AC/AC.js";
import Turbwrap from "./Turbwrap/Turbwrap.js";
import X2 from "./X2/X2.js";
import X3 from "./X3/X3.js";
import X4 from "./X4/X4.js";
import X5 from "./X5/X5.js";
import Glow from "./Glow/Glow.js";
import Panel from "./Panel/Panel.js";
import Coorddot from "./Coorddot/Coorddot.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Blank: new Blank({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Clicker: new Clicker({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 16
  }),
  RebirthOrb: new RebirthOrb({
    x: -152,
    y: -48,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  WorldRecord2: new WorldRecord2({
    x: 1,
    y: -1,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  Printer: new Printer({
    x: 151,
    y: 149,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 7
  }),
  TimeX2: new TimeX2({
    x: 186.3109875190031,
    y: 84.96890488932007,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 6
  }),
  Cover: new Cover({
    x: -2,
    y: -1,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  UserCheats: new UserCheats({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Achivents: new Achivents({
    x: -90,
    y: 90,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Sprite10: new Sprite10({
    x: -290,
    y: 85,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  ShopScreen: new ShopScreen({
    x: 44,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  Shop: new Shop({
    x: 190,
    y: -156,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 19
  }),
  ConfigureWithBallClicker: new ConfigureWithBallClicker({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  AC: new AC({
    x: 103,
    y: -91,
    direction: 90,
    costumeNumber: 2,
    size: 50,
    visible: false,
    layerOrder: 10
  }),
  Turbwrap: new Turbwrap({
    x: -4,
    y: 4,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  X2: new X2({
    x: -134,
    y: 43,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22
  }),
  X3: new X3({
    x: -53,
    y: 43,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20
  }),
  X4: new X4({
    x: 42,
    y: 43,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 21
  }),
  X5: new X5({
    x: 130,
    y: 43,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  Glow: new Glow({
    x: 0,
    y: 0,
    direction: 123,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 1
  }),
  Panel: new Panel({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Coorddot: new Coorddot({
    x: -209,
    y: 154,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
