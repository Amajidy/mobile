<template>
  <div>
    <img :src="require(`~/assets/media/svg/form/${name}.svg`)" :alt="name">
  </div>
</template>

<script>
  export default {
    name: "input-img",
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
