<template>
  <div class="form-app__header">
    <h3>{{ headline }}</h3>
    <span class="form-app__disclaimer">{{ disclaimer }}</span>
    <div class="form-app__mandatory">{{ mandatoryPartial }}</div>
  </div>
</template>

<script>
export default {
  name: 'FormHeader',
  props: [
    'headline',
    'disclaimer',
    'mandatory-partial'
  ]
}
</script>
