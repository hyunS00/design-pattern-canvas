import Grimpan from "./AbstractGrimpan.js";
import ChromeGrimpan from "./ChromeGrimpan.js";
import IEGrimpan from "./IEGrimpan.js";

interface Clonable {
  clone(): Clonable;
}
class HistoryStack extends Array implements Clonable {
  clone(): Clonable {
    return this.slice() as HistoryStack;
  }
}

export abstract class GrimpanHistory {
  grimpan: Grimpan;
  stack: HistoryStack;

  getStack() {
    return this.stack.clone();
  }

  protected constructor(grimpan: Grimpan) {
    this.grimpan = grimpan;
    this.stack = new HistoryStack();
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
