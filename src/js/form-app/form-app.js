import FormElement from "./form-element";
import FormHeader from "./form-header";

class FormApp {
  constructor(formData) {
    this.blockClass = 'form-app';
    this.el = document.querySelector(`#${this.blockClass}`);
    this.el.classList.add(`${this.blockClass}`);
    this.headerData = formData.header;
    this.formFields = formData.fields;
    this.formElements = [];
  }

  render() {
    this.el.appendChild(this.createFormHeader());
    this.el.appendChild(this.createFormElements());
  }

  createFormHeader() {
    const header = new FormHeader(this.blockClass, this.headerData);
    return header.render();
  }

  createFormElements() {
    let inputParent = document.createElement("form");

    this.formFields.forEach(field => {
      let element = new FormElement(this.blockClass, field);
      let builtElement = element.build();

      this.formElements.push(builtElement);
      inputParent.appendChild(builtElement);
    });

    return inputParent;
  }
}

export default FormApp;
