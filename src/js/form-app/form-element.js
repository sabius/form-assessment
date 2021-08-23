class FormElement {
  constructor(blockClass, data) {
    this.blockClass = blockClass;
    this.name = data.name;
    this.text = data.text;
    this.type = data.type;
    this.required = data.required;
    this.options = data.options;

    this.el = null;
  }

  build() {
    return this.buildParent();
  }

  buildParent() {
    this.el = document.createElement('div');

    this.el.appendChild(this.buildSpan());
    this.el.appendChild(this.buildFormElement());

    return this.el;
  }

  buildFormElement() {
    let formElement = null;

    if (this.type === 'text' || this.type === 'email') {
      this.el.classList.add(`${this.blockClass}__input`);
      formElement = this.buildInput();
    } else if (this.type === 'select') {
      this.el.classList.add(`${this.blockClass}__select`);
      formElement = this.buildSelect();
    } else if (this.type === 'checkbox') {
      this.el.classList.add(`${this.blockClass}__checkbox`);
      formElement = this.buildCheckbox();
    } else {
      console.error('Unrecognized form element type.');
    }

    formElement.setAttribute("name", this.name);

    return formElement;
  }

  buildInput() {
    const element = document.createElement('input');
    element.setAttribute('type', 'text');

    return element;
  }

  buildSelect() {
    const element = document.createElement('select');

    this.options.forEach(option => {
      let optionElement = document.createElement('option')
      optionElement.setAttribute('value', option.value);
      optionElement.innerText = option.text;
      element.appendChild(optionElement);
    });

    return element;
  }

  buildCheckbox() {
    const element = document.createElement('input');
    element.setAttribute('type', 'checkbox');

    return element;
  }

  buildSpan() {
    const element = document.createElement('span');

    element.innerText = `${this.text.toUpperCase()}${this.required?'*':''}`;

    return element;
  }
}

export default FormElement;
