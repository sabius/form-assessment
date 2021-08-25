<template>
  <div class="form-app">
    <form-header
      :headline="header.headline"
      :disclaimer="header.disclaimer"
      :mandatory-partial="header.mandatoryPartial"/>
    <form action="">
      <form-inputs
        :input-list="inputs"/>
      <form-checkboxes
        :checkboxes="checkBoxes"/>
    </form>
  </div>
</template>

<script>
import FormHeader from './FormHeader.vue'
import FormInputs from './FormInputs.vue'
import FormCheckboxes from './FormCheckboxes.vue'

export default {
  name: 'Form App',
  components: {
    FormHeader,
    FormInputs,
    FormCheckboxes
  },
  data () {
    return {
      header: {
        headline: "Sign up for email updates",
        disclaimer: "*Indicates required field",
        mandatoryPartial: " is required."
      },
      inputs: [
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
        }
      ],
      checkBoxes: [
        {
          name: "advances",
          text: "Advances",
          type: "checkbox",
          required: false
        }, {
          name: "alerts",
          text: "Alerts",
          type: "checkbox",
        }, {
          name: "other",
          type: "checkbox",
          text: "Other Communications",
        }
      ]
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>
