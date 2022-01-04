<template>
  <div class="tab-bar">
    <div class="tabs">

      <template v-for="(item, index) in items">
        <input type="radio" :id="`tab${index + 1}`" name="tab-control" :checked="index === items.length - 1">
      </template>

      <ul>
        <template v-for="(item, index) in items">
          <li :title="item" :key="index">
            <label :for="`tab${index + 1}`" role="button">
              <span>{{item}}</span>
            </label>
          </li>
        </template>
      </ul>

      <div class="slider">
        <div class="indicator"></div>
      </div>

      <slot name="some-content"></slot>

      <div class="content">
        <template v-for="(item, index) in items">
          <section :key="index">
            <slot :name="`content-${index + 1}`"></slot>
          </section>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-bar",
    props: {
      items: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-bar {
    direction: ltr;
    position: relative;

    /* tab setting */
    $tab-count: 4;
    $indicator-width: 60px;
    $indicator-height: 4px;

    /* selectors relative to radio inputs */
    $label-selector: "~ ul > li";
    $slider-selector: "~ .slider";
    $content-selector: "~ .content > section";

    @mixin tabs(
      $label-selector: $label-selector,
      $slider-selector: $slider-selector,
      $content-selector: $content-selector) {

      @for $i from 1 through $tab-count {
        &:nth-of-type(#{$i}):checked {
          #{$label-selector}:nth-child(#{$i}) {
            @content;
          }

          #{$slider-selector} {
            transform: translateX(#{100% * ($i - 1)});
          }

          #{$content-selector}:nth-child(#{$i}) {
            display: block;
          }
        }
      }
    }

    .tabs {
      left: 50%;
      transform: translateX(-50%);
      position: relative;
      background: white;
      border-radius: 5px;
      min-width: #{$tab-count * 60px};

      input[name="tab-control"] {
        display: none;
      }

      ul li label {
        font-size: 14px;
      }

      ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        padding-left: 0;
        margin-bottom: -2.516px;
        justify-content: space-between;
        align-items: flex-end;
        flex-wrap: wrap;
        border-bottom: 1px solid #3A31A1;

        li {
          box-sizing: border-box;
          flex: 1;
          width: calc(100% / $tab-count);
          padding: 0 10px;
          text-align: center;

          label {
            color: #3A31A1;
            padding: 5px auto;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            white-space: nowrap;
            -webkit-touch-callout: none;

            &:hover,
            &:focus,
            &:active {
              outline: 0;
            }
          }
        }
      }

      .slider {
        position: relative;
        width: calc(100% / $tab-count);
        transition: all 0.33s cubic-bezier(0.38, 0.8, 0.32, 1.07);

        .indicator {
          position: relative;
          width: $indicator-width;
          max-width: 100%;
          margin: 0 auto;
          height: $indicator-height;
          background: #FFD802;
          border-radius: 1px;
        }

      }

      .content {
        margin-top: 20px;
        padding: 0 15px;

        section {
          display: none;
          animation: {
            name: content;
            direction: normal;
            duration: 0.3s;
            timing-function: ease-in-out;
            iteration-count: 1;
          }
        }
      }

      input[name="tab-control"] {
        @include tabs {
          > label {
            cursor: default;
            color: #FFD802;
            font-family: 'yekanBakh-fat';
          }
        }
      }

      @keyframes content {
        from {
          opacity: 0;
          transform: translateY(5%);
        }
        to {
          opacity: 1;
          transform: translateY(0%);
        }
      }
    }
  }
</style>
