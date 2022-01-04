<template>
  <div class="title-page">
    <!-- -->
    <span class="title-page__title v-text-bold v-text-purple" v-html="title"></span>
    <!-- -->
    <div class="select-title">
      <v-select v-model="selectedLanguage" :searchable="false" label="title" :reduce="data=>data.value"
                :options="optionsLanguage">
        <template #open-indicator="{ attributes }">
          <img src="~svg/components/arrow-select-title-filter.svg" v-bind="attributes" alt="...">
        </template>
      </v-select>
    </div>
    <!-- -->
  </div>
</template>

<script>
  export default {
    name: "title-page",
    data: () => ({
      selectedLanguage: 'fa',
      optionsLanguage: [
        {
          title: "مارکت تتر",
          value: "fa",
        },
        {
          title: "مارکت تتر",
          value: "en",
        }
      ]
    }),
    props: {
      title: {
        type: String,
        required: true
      },
      isFilter: {
        type: Boolean,
        default: false
      },
    },
  }
</script>

<style lang="scss">
@import "~assets/scss/var";
  .title-page {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    .title-page__title {
      font-size: 28px;
    }

    .select-title {
      position: relative;
      height: 35px;

      .vs__selected {
        height: 35px;
        margin: 0;
        color: $ColorText;
        font-size: 16px;
        display: flex;
        align-items: center;
      }

      .v-select {
        direction: rtl;
        width: 130px;
        margin: 0 auto;

        .vs__dropdown-toggle {
          font-size: 15px;
          border-radius: 5px;
          height: 35px;
          border: 1px solid $ColorText;

          .vs__actions {
            padding: 4px 6px 0 15px;
          }
        }

        .vs__search {
          display: none;
        }

        .vs__clear {
          display: none;
        }

        .vs__dropdown-menu {
          text-align: right;
          background-color: #f3f6fd;
          border-top: none;

          li {
            color: #3C4858;
            padding: 5px 10px;
            font-size: 16px;
          }
        }

      }

    }
  }
</style>
