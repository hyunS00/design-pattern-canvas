import Grimpan from "./AbstractGrimpan.js";
import ChromeGrimpan from "./ChromeGrimpan.js";
import IEGrimpan from "./IEGrimpan.js";

export abstract class GrimpanHistory {
  grimpan: Grimpan;
  protected constructor(grimpan: Grimpan) {
    this.grimpan = grimpan;
  }

  abstract initialize(): void;

  static getInstance(grimpan: Grimpan) {}
}

export class IEGrimpanHistory extends GrimpanHistory {
  private static instance: IEGrimpanHistory;
  override initialize(): void {}

  static override getInstance(grimpan: IEGrimpan): IEGrimpanHistory {
    if (!this.instance) {
      this.instance = new IEGrimpanHistory(grimpan);
    }
    return this.instance;
  }
}

export class ChromGrimpanHistory extends GrimpanHistory {
  private static instance: ChromGrimpanHistory;
  override initialize(): void {}

  static override getInstance(grimpan: ChromeGrimpan): ChromGrimpanHistory {
    if (!this.instance) {
      this.instance = new ChromGrimpanHistory(grimpan);
    }
    return this.instance;
  }
}
