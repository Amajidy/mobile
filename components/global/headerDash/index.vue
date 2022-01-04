<template>
  <div class="header-dash">
    <div class="header-dash__hamburger">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="header-dash__avatar"></div>
  </div>
</template>

<script>
  export default {
    name: "header-dash"
  }
</script>

<style lang="scss" scoped>
  .header-dash {
    width: 100%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-dash__avatar {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.6);
      overflow: hidden;
    }

    .header-dash__hamburger {
      display: block;
      position: relative;
      z-index: 1;
      -webkit-user-select: none;
      user-select: none;

      div {
        display: block;
        width: 33px;
        height: 3px;
        margin-bottom: 5px;
        position: relative;
        background: #cdcdcd;
        border-radius: 10px;
        z-index: 1;
        background: linear-gradient(180deg, #3A31A1 0%, #321C81 93.23%, rgba(41, 45, 50, 0) 100%);
        transform-origin: 4px 0;
        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        opacity 0.55s ease;
      }
    }
  }
</style>
