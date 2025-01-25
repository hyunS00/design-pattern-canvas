import { GrimpanMenu } from "./GrimpanMenu.js";

abstract class GrimpanMenuElementBuilder {
  btn!: GrimpanMenuBtn;
  constructor() {}

  build() {
    return this.btn;
  }
}

interface Btn {
  name: string;
  type: string;
  onClick: () => void;
  active: boolean;
}
interface Input {
  name: string;
  type: string;
  onChange: () => void;
  value: string | number;
}

abstract class GrimpanMenuElement {
  protected menu: GrimpanMenu;
  protected name: string;

  protected constructor(menu: GrimpanMenu, name: string) {
    this.menu = menu;
    this.name = name;
  }

  abstract draw(): void;
}

export class GrimpanMenuInput extends GrimpanMenuElement {
  private onChange?: () => void;
  private value?: string | number;
  private constructor(
    menu: GrimpanMenu,
    name: string,
    type = "input",
    onChange?: () => void,
    value?: string | number
  ) {
    super(menu, name);
    this.onChange = onChange;
    this.value = value;
  }

  override draw() {
    const btn = document.createElement("input");
    btn.type = "color";
    btn.textContent = this.name;
    if (this.onChange) {
      btn.addEventListener("change", this.onChange.bind(this));
    }
    this.menu.dom.append(btn);
  }

  static Builder = class GrimpanMenuInputBuiler extends GrimpanMenuElementBuilder {
    override btn: GrimpanMenuInput;
    constructor(menu: GrimpanMenu, name: string) {
      super();
      this.btn = new GrimpanMenuInput(menu, name);
    }

    setOnChange(onChange: () => void) {
      this.btn.onChange = onChange;
      return this;
    }

    setValue(value: string | number) {
      this.btn.value = value;
      return this;
    }
  };
}

export class GrimpanMenuBtn extends GrimpanMenuElement {
  private onClick?: () => void;
  private active?: boolean;
  private constructor(
    menu: GrimpanMenu,
    name: string,
    type = "input",
    onClick?: () => void,
    active?: boolean
  ) {
    super(menu, name);
    this.onClick = onClick;
    this.active = active;
  }

  override draw(): void {
    const btn = document.createElement("button");
    btn.textContent = this.name;
    if (this.onClick) {
      btn.addEventListener("click", this.onClick.bind(this));
    }
    this.menu.dom.append(btn);
  }

  static Builder = class GrimpanMenuBtnBuiler extends GrimpanMenuElementBuilder {
    override btn: GrimpanMenuBtn;
    constructor(menu: GrimpanMenu, name: string) {
      super();
      this.btn = new GrimpanMenuBtn(menu, name);
    }

    setOnclik(onClick: () => void) {
      this.btn.onClick = onClick;
      return this;
    }

    setActive(active: boolean) {
      this.btn.active = active;
      return this;
    }
  };
}
