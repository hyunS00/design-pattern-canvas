class Grimpan {
    static instances = new Map();
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("canvas 엘리먼트를 입력하세요");
        }
    }
    initialize() { }
    initializeMenu() { }
    static getInstance(selector) {
        if (!this.instances.get(selector)) {
            const instance = new Grimpan(document.querySelector(`#${selector}`));
            this.instances.set(selector, instance);
        }
        return this.instances.get(selector);
    }
}
export default Grimpan;
