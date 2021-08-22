import FormElement from "./form-element";

class Form {
  constructor(formFields) {
    this.el = null;
    this.formFields = formFields;
    this.formElements = [];

    this.init();
  }

  init() {
    this.el = document.querySelector("#form-app");

    this.el.appendChild(this.createFormElements());
    console.log(this.formElements);
  }

  createFormElements() {
    let inputParent = document.createElement("div");

    this.formFields.forEach(field => {
      let element = new FormElement(field);
      let builtElement = element.build();

      this.formElements.push(builtElement);
      inputParent.appendChild(builtElement);
    });

    return inputParent;
  }
}

const formFields = [
  {
    name: "firstName",
    text: "First Name",
    type: "text",
    required: true
  }, {
    name: "lastName",
    text: "Last Name",
    type: "text",
    required: true
  }, {
    name: "email",
    text: "Email Address",
    type: "email",
    required: true
  }, {
    name: "org",
    text: "Organization",
    type: "text",
    required: false
  }, {
    name: "euResident",
    text: "EU Resident",
    type: "select",
    required: true,
    options: [
      "Select One",
      "Yes",
      "No"
    ]
  }, {
    name: "advances",
    text: "Advances",
    type: "checkbox",
    required: false
  }, {
    name: "alerts",
    text: "Alerts",
    type: "checkbox"
  }, {
    name: "other",
    text: "Other Communications",
    type: "checkbox"
  }
];

const form = new Form(formFields);
