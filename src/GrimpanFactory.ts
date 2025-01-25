import Grimpan from "./AbstractGrimpan.js";
import ChromeGrimpan from "./ChromeGrimpan.js";
import {
  ChromGrimpanHistory,
  GrimpanHistory,
  IEGrimpanHistory,
} from "./GrimpanHistory.js";
import { ChromGrimpanMenu, GrimpanMenu, IEGrimpanMenu } from "./GrimpanMenu.js";
import IEGrimpan from "./IEGrimpan.js";

abstract class AbstractGrimpanFactory {
  static createGrimpan(): Grimpan {
    throw new Error("하위 클래스에서 구현하셔야 합니다.");
  }
  static createGrimpanMenu(grimpan: Grimpan, dom: HTMLElement): GrimpanMenu {
    throw new Error("하위 클래스에서 구현하셔야 합니다.");
  }
  static createGrimpanHistory(grimpan: Grimpan): GrimpanHistory {
    throw new Error("하위 클래스에서 구현하셔야 합니다.");
  }
}

export class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan(): Grimpan {
    return ChromeGrimpan.getInstance();
  }
  static override createGrimpanMenu(
    grimpan: ChromeGrimpan,
    dom: HTMLElement
  ): GrimpanMenu {
    return ChromGrimpanMenu.getInstance(grimpan, dom);
  }
  static override createGrimpanHistory(grimpan: Grimpan): GrimpanHistory {
    return ChromGrimpanHistory.getInstance(grimpan);
  }
}

export class IEGrimpanFactoru extends AbstractGrimpanFactory {
  static override createGrimpan(): Grimpan {
    return IEGrimpan.getInstance();
  }
  static override createGrimpanMenu(
    grimpan: IEGrimpan,
    dom: HTMLElement
  ): GrimpanMenu {
    return IEGrimpanMenu.getInstance(grimpan, dom);
  }
  static override createGrimpanHistory(grimpan: Grimpan): GrimpanHistory {
    return IEGrimpanHistory.getInstance(grimpan);
  }
}
