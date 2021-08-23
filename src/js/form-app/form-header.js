class FormHeader {
  constructor(blockClass, data) {
    this.blockClass = blockClass;
    this.text = data.text;
    this.disclaimer = data.disclaimer;
    this.mandatoryPartial == data.mandatoryPartial;

    this.el = document.createElement('div');
    this.el.classList.add(`${this.blockClass}__header`);
  }

  render() {
    const header =document.createElement('h3');
    header.innerHTML = this.text;

    const disclaimer = document.createElement('span');
    disclaimer.innerHTML = this.disclaimer;

    this.el.appendChild(header);
    this.el.appendChild(disclaimer);

    return (this.el);
  }
}

export default FormHeader;
