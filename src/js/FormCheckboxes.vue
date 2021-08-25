<template>
  <div class="form-app__checkboxes">
    <div
      v-for="checkbox, checkboxIndex in checkboxes"
      :key="checkboxIndex"
      class="form-app__checkbox">
        <span>{{checkbox.text}}</span>
        <input
          :name="checkbox.name"
          type="checkbox">
      </div>
  </div>
</template>

<script>
export default {
  name: 'FormCheckboxes',
  props: [
    'checkboxes'
  ]
}
</script>
