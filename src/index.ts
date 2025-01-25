import ChromeGrimpan from "./ChromeGrimpan.js";
import IEGrimpan from "./IEGrimpan.js";
import Grimpan from "./AbstractGrimpan.js";
import { ChromeGrimpanFactory } from "./GrimpanFactory.js";

function main() {
  const grimpan = ChromeGrimpanFactory.createGrimpan();
  const grimpanMenu = ChromeGrimpanFactory.createGrimpanMenu(
    grimpan,
    document.querySelector("#menu")!
  );
  const grimpanHistory = ChromeGrimpanFactory.createGrimpanHistory(grimpan);
  grimpan.initialize();
  grimpanMenu.initialize([
    "back",
    "forward",
    "color",
    "pipette",
    "pen",
    "circle",
    "rectangle",
    "eraser",
    "save",
  ]);
  grimpanHistory.initialize();
}

main();
