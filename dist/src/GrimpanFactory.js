import ChromeGrimpan from "./ChromeGrimpan.js";
import { ChromGrimpanHistory, IEGrimpanHistory, } from "./GrimpanHistory.js";
import { ChromGrimpanMenu, IEGrimpanMenu } from "./GrimpanMenu.js";
import IEGrimpan from "./IEGrimpan.js";
class AbstractGrimpanFactory {
    static createGrimpan() {
        throw new Error("하위 클래스에서 구현하셔야 합니다.");
    }
    static createGrimpanMenu(grimpan, dom) {
        throw new Error("하위 클래스에서 구현하셔야 합니다.");
    }
    static createGrimpanHistory(grimpan) {
        throw new Error("하위 클래스에서 구현하셔야 합니다.");
    }
}
export class ChromeGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return ChromeGrimpan.getInstance();
    }
    static createGrimpanMenu(grimpan, dom) {
        return ChromGrimpanMenu.getInstance(grimpan, dom);
    }
    static createGrimpanHistory(grimpan) {
        return ChromGrimpanHistory.getInstance(grimpan);
    }
}
export class IEGrimpanFactoru extends AbstractGrimpanFactory {
    static createGrimpan() {
        return IEGrimpan.getInstance();
    }
    static createGrimpanMenu(grimpan, dom) {
        return IEGrimpanMenu.getInstance(grimpan, dom);
    }
    static createGrimpanHistory(grimpan) {
        return IEGrimpanHistory.getInstance(grimpan);
    }
}
