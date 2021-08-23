class FormButtons {
  constructor(blockClass) {
    this.blockClass = blockClass;
    this.el = document.createElement('div');
    this.el.classList.add(`${this.blockClass}__buttons`);
  }

  build() {
    this.el.appendChild(this.createSubmit());
    this.el.appendChild(this.createReset());
    return this.el;
  }

  createSubmit() {
    const button = document.createElement("button");
    button.classList.add(`${this.blockClass}__button`);
    button.classList.add(`${this.blockClass}__button--submit`);
    button.innerText = "SUBMIT";
    return button;
  }

  createReset() {
    const button = document.createElement("button");
    button.classList.add(`${this.blockClass}__button`);
    button.classList.add(`${this.blockClass}__button--reset`);
    button.innerText = "RESET";
    return button;
  }
}

export default FormButtons;
