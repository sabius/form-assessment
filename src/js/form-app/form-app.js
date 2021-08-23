import FormElement from "./form-element";
import FormHeader from "./form-header";
import FormButtons from "./form-buttons";

class FormApp {
  constructor(formData) {
    this.blockClass = 'form-app';
    this.el = document.querySelector(`#${this.blockClass}`);
    this.el.classList.add(`${this.blockClass}`);
    this.headerData = formData.header;
    this.formInputs = formData.inputs;
    this.formCheckBoxes = formData.checkBoxes;
    this.form = null;
    this.formElements = [];
  }

  render() {
    this.el.appendChild(this.createFormHeader());
    this.el.appendChild(this.createForm());
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
    this.formInputs.forEach(field => {
      let element = new FormElement(this.blockClass, field);
      let builtElement = element.build();

      this.formElements.push(builtElement);
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
    const buttons = new FormButtons(this.blockClass);
    return buttons.build();
  }
}

export default FormApp;
