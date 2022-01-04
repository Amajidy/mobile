<template>
  <div class="input-modern"
       :class="errors.has(name)? 'invalid-status': { 'valid-status': value }">
    <label :for="name" class="input-modern__label">
      <slot />:
    </label>
    <div class="input-modern__parent">
      <input-img class="input-modern__img" v-if="imageName" :name="imageName"/>
      <input :type="type" class="input-modern__input" :id="name"
             v-validate="validate" v-bind="$attrs" :value="value"
             :name="name" :data-vv-as="$slots.default[0].text" @input="$emit('input', $event.target.value)"/>
      <span class="error">{{ errors.first(name) }}</span>
    </div>
  </div>
</template>

<script>
  import InputImg from "./input-img";

  export default {
    name: "input-modern",
    components: {InputImg},
    props: {
      name: {
        type: String,
        required: true
      },
      imageName: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String,
        default: ''
      },
      validate: {
        type: Object,
        default: () => ({required: true})
      },
    },
  }
</script>

<style scoped>

</style>
