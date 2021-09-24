import FormElement from "./form-element";
import FormHeader from "./form-header";
import FormButtons from "./form-buttons";

class FormApp {
  constructor(formData) {
    this.blockClass = 'form-app';
    this.el = document.querySelector(`#${this.blockClass}`);
    this.el.classList.add(`${this.blockClass}`);
    this.headerData = formData.header;
    this.inputData = formData.inputs;
    this.formCheckBoxes = formData.checkBoxes;
    this.formInputs = [];
    this.form = null;
    this.formElements = [];
    this.submitBtn = null;
    this.resetBtn = null;
    this.formIsValid = false;
  }

  render() {
    this.el.appendChild(this.createFormHeader());
    this.el.appendChild(this.createForm());
    this.setEventListeners();
  }

  createFormHeader() {
    const header = new FormHeader(this.blockClass, this.headerData);
    return header.render();
  }

  createForm() {
    this.form = document.createElement("form");
    this.form.classList.add(`${this.blockClass}__container`);
    this.form.appendChild(this.createFormInputs());
    this.form.appendChild(this.createFormCheckboxes());
    this.form.appendChild(this.createButtons());

    return this.form;
  }

  createFormInputs() {
    const parentElement = document.createElement("div");
    parentElement.classList.add(`${this.blockClass}__inputs`);
    this.inputData.forEach(field => {
      let element = new FormElement(this.blockClass, field);
      let builtElement = element.build();

      this.formInputs.push(builtElement);
      parentElement.appendChild(builtElement);
    });

    return parentElement;
  }

  createFormCheckboxes() {
    const parentElement = document.createElement("div");
    parentElement.classList.add(`${this.blockClass}__checkboxes`);
    this.formCheckBoxes.forEach(field => {
      console.log(field);
      let element = new FormElement(this.blockClass, field);
      let builtElement = element.build();

      this.formElements.push(builtElement);
      parentElement.appendChild(builtElement);
    });
    return parentElement;
  }

  createButtons() {
    let buttons = new FormButtons(this.blockClass);
    console.log(buttons);
    buttons = buttons.build();
    console.log(buttons);
    this.submitBtn = buttons.querySelector(`.${this.blockClass}__button--submit`);
    this.resetBtn = buttons.querySelector(`.${this.blockClass}__button--reset`);

    console.log(this.submitBtn);

    return buttons;
  }

  setEventListeners() {
    this.submitBtn.addEventListener('click', e => {
      e.preventDefault();
      
      this.validateForm();
    });
  }

  validateForm() {
    this.formInputs.forEach(input => {
      const inputEl = input.querySelector('[data-required]');

      if (inputEl) {
        console.log(inputEl.value);
      }
    });
  }
}

export default FormApp;
