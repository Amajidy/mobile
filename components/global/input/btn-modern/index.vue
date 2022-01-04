<template>
  <button :type="type" v-on="$listeners" class="btn-modern my-4">
    <span><slot /></span>
  </button>
</template>

<script>
  export default {
    name: "btn-modern",
    props: {
      type: {
        type: String,
        default: 'button'
      }
    }
  }
</script>

<style scoped>

</style>
