import FormApp from './form-app/form-app'

const formData = {
  header: {
    text: "Sign up for email updates",
    disclaimer: "*Indicates required field",
    mandatoryPartial: " is required."
  },
  fields: [{
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
      {
        value: "",
        text: "Select One"
      },{
        value: "yes",
        text: "Yes"
      },{
        value: "no",
        text: "No"
      }
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
]};

let formApp = new FormApp(formData);
formApp.render();
