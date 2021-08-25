<template>
  <div class="form-app__inputs">
    <div
      v-for="input, inputIndex in inputList"
      :key="inputIndex"
      class="form-app__input">
        <span>{{input.text}}</span>
        <input
          v-if="input.type == 'text'"
          :id="input.name"
          :name="input.name"
          type="text">

        <input
          v-if="input.type == 'email'"
          :id="input.name"
          :name="input.name"
          type="email">

        <select
          v-if="input.type == 'select'"
          :id="input.name"
          :name="input.name" >
          <option
            v-for="option, optionKey in input.options"
            :key="optionKey"
            :value="option.value">
              {{option.text}}
            </option>
        </select>
    </div>
  </div>
</template>

<script>
export default {
  name:"FormInputs",
  props: [
    'input-list'
  ]
}
</script>
