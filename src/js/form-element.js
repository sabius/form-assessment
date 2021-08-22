class FormElement {
  constructor(data) {
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
    let parentElement = document.createElement('div');

    parentElement.appendChild(this.buildSpan());
    parentElement.appendChild(this.buildFormElement());

    return parentElement;
  }

  buildFormElement() {
    let formElement = null;

    if (this.type === 'text' || this.type === 'email') {
      formElement = this.buildInput();
    } else if (this.type === 'select') {
      formElement = this.buildSelect();
    } else if (this.type === 'checkbox') {
      formElement = this.buildCheckbox();
    } else {
      console.error('Unrecognized form element type.');
    }

    formElement.setAttribute("name", this.name);

    return formElement;
  }

  buildInput() {
    let element = document.createElement('input');

    return element;
  }

  buildSelect() {
    let element = document.createElement('select');

    this.options.forEach(option => {
      console.log(option);
      let optionElement = document.createElement('option')
      optionElement.setAttribute('value', option);
      optionElement.innerText = option;
      element.appendChild(optionElement);
    });

    return element;
  }

  buildCheckbox() {
    let element = document.createElement('input');
    element.setAttribute('type', 'checkbox');
    return element;
  }

  buildSpan() {
    let element = document.createElement('span');
    element.innerText = this.text;

    return element;
  }
}

export default FormElement;
