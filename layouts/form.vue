<template>
  <div class="form-layout">
    <Nuxt/>

    <!-- circle step -->
    <circle-step v-if="$route.path !== '/get-started' && $route.path !== '/auth/sign-in'" />
  </div>
</template>

<script>
  import CircleStep from "~/components/template/form/circle-step";
  export default {
    components: {CircleStep},
  };
</script>

<style>
</style>
