<template>
  <div class="upload">
    <div class="upload__btn">
      <img src="~/svg/verify/bg-whale.svg" alt="">
      <div class="upload__btn-circle">
        <input type="file" @change="onFileChange"
               class="upload__btn-input">
        <svg v-if="!image" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.6668 25.3333C30.6668 26.0406 30.3859 26.7189 29.8858 27.219C29.3857 27.719 28.7074 28 28.0002 28H4.00016C3.29292 28 2.61464 27.719 2.11454 27.219C1.61445 26.7189 1.3335 26.0406 1.3335 25.3333V10.6667C1.3335 9.95942 1.61445 9.28115 2.11454 8.78105C2.61464 8.28095 3.29292 8 4.00016 8H9.3335L12.0002 4H20.0002L22.6668 8H28.0002C28.7074 8 29.3857 8.28095 29.8858 8.78105C30.3859 9.28115 30.6668 9.95942 30.6668 10.6667V25.3333Z" stroke="#3A31A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.9998 22.6667C18.9454 22.6667 21.3332 20.2789 21.3332 17.3333C21.3332 14.3878 18.9454 12 15.9998 12C13.0543 12 10.6665 14.3878 10.6665 17.3333C10.6665 20.2789 13.0543 22.6667 15.9998 22.6667Z" stroke="#3A31A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <img class="upload__btn-circle__image" v-if="image" :src="image" accept="image/*">
      </div>
      <p class="upload__btn-title font-small">محل آپلود عکس شما</p>

    </div>
    <div class="upload__description">
      <p class="font-small text-center">اطلاعات تکمیلی خود را وارد کنید با نهنگ ابی <br> وارد دریای بازار های مالی شوید.</p>
    </div>
    <div class="upload__form w-100">
      <input-modern v-model="formData.name" name="name">شماره موبایل یا ایمیل</input-modern>
      <v-select dir="rtl" v-model="introduction_method" :searchable="false" :clearable="false" label="title"
                :reduce="data=>data.value"
                :options="introductions"
      >
        <template #open-indicator="{ attributes }">
          <img src="~svg/form/arrow-select-upload.svg" v-bind="attributes" alt="...">
        </template>
      </v-select>

    </div>
    <btn-modern @click="$router.push('/')">مرحله بعد</btn-modern>
  </div>
</template>

<script>
export default {
  name: "upload",
  layout: 'form',
  data(){
    return{
      image:null,
      introduction_method: 'آشنایی از طریق وب سایت',
      introductions: [
        {
          title: "آشنایی از طریق دوست",
          value: "friend",
        },
        {
          title: "آشنایی از طریق وب سایت",
          value: "website",
        },
        {
          title: "آشنایی از طریق تبلیغات",
          value: "ads",
        }
      ],
      formData:{
        name:'',

      }
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.image = URL.createObjectURL(file);
    }
  }
}
</script>

<style scoped>

</style>
