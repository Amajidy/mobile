<template>
  <div class="verify-code">
    <div class="verify-code__main">

      <div class="main__timer">
        <img src="~/svg/verify/bg-whale.svg" alt="" class="position-absolute">
        <div class="main__circle">
          <div class="main__timer-image">
            <svg class="" ref="timer__I" width="145" height="131" viewBox="0 0 145 131" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M31.8739 122.538L40.3123 111.442L41.761 112.544L33.3226 123.64L31.8739 122.538Z" fill="white"/>
              <path d="M27.7295 118.867L37.0888 108.537L38.4376 109.758L29.0783 120.089L27.7295 118.867Z" fill="white"/>
              <path d="M23.9151 114.855L34.1263 105.365L35.3652 106.698L25.154 116.188L23.9151 114.855Z" fill="white"/>
              <path d="M20.4592 110.53L31.447 101.951L32.567 103.386L21.5792 111.964L20.4592 110.53Z" fill="white"/>
              <path d="M17.3872 105.924L29.0706 98.3201L30.0634 99.8455L18.38 107.45L17.3872 105.924Z" fill="white"/>
              <path d="M14.7214 101.072L27.0141 94.4983L27.8724 96.1032L15.5796 102.677L14.7214 101.072Z" fill="white"/>
              <path d="M12.4821 96.0088L25.2935 90.5142L26.0109 92.1869L13.1994 97.6814L12.4821 96.0088Z" fill="white"/>
              <path d="M10.6852 90.7721L23.9208 86.3972L24.492 88.1252L11.2564 92.5002L10.6852 90.7721Z" fill="white"/>
              <path d="M9.34449 85.4007L22.9068 82.1776L23.3276 83.9483L9.76531 87.1714L9.34449 85.4007Z" fill="white"/>
              <path d="M8.46977 79.9341L22.2586 77.8865L22.5259 79.6868L8.7371 81.7344L8.46977 79.9341Z" fill="white"/>
              <path d="M8.06723 74.4125L21.9809 73.5556L22.0927 75.3722L8.1791 76.2291L8.06723 74.4125Z" fill="white"/>
              <path d="M8.13959 68.8767L22.0754 69.2169L22.031 71.0364L8.09518 70.6962L8.13959 68.8767Z" fill="white"/>
              <path d="M8.68707 63.3676L22.5423 64.9023L22.342 66.7112L8.4867 65.1765L8.68707 63.3676Z" fill="white"/>
              <path d="M9.70495 57.9258L23.3774 60.6436L23.0226 62.4287L9.35011 59.7108L9.70495 57.9258Z" fill="white"/>
              <path d="M11.1861 52.5913L24.5749 56.4724L24.0682 58.2204L10.6794 54.3394L11.1861 52.5913Z" fill="white"/>
              <path d="M13.1198 47.4037L26.1262 52.4192L25.4714 54.1174L12.4649 49.1018L13.1198 47.4037Z" fill="white"/>
              <path d="M15.491 42.4011L28.0192 48.5141L27.2211 50.1498L14.6929 44.0368L15.491 42.4011Z" fill="white"/>
              <path d="M18.2834 37.6204L30.2408 44.7859L29.3053 46.3471L17.3479 39.1816L18.2834 37.6204Z" fill="white"/>
              <path d="M21.4749 33.0969L32.7733 41.262L31.7073 42.7371L20.4088 34.5721L21.4749 33.0969Z" fill="white"/>
              <path d="M25.0431 28.864L35.5993 37.9684L34.4106 39.3467L23.8544 30.2422L25.0431 28.864Z" fill="white"/>
              <path d="M28.9617 24.9529L38.6978 34.9295L37.3953 36.2007L27.6592 26.224L28.9617 24.9529Z" fill="white"/>
              <path d="M33.201 21.3924L42.0451 32.1676L40.6383 33.3223L31.7942 22.5471L33.201 21.3924Z" fill="white"/>
              <path d="M37.7306 18.2088L45.6175 29.7032L44.1168 30.7329L36.2299 19.2385L37.7306 18.2088Z" fill="white"/>
              <path d="M42.5161 15.4256L49.3877 27.5543L47.8042 28.4514L40.9326 16.3227L42.5161 15.4256Z" fill="white"/>
              <path d="M47.5233 13.0633L53.3288 25.7368L51.6741 26.4948L45.8686 13.8212L47.5233 13.0633Z" fill="white"/>
              <path d="M52.7141 11.1393L57.4107 24.2643L55.6971 24.8775L51.0005 11.7525L52.7141 11.1393Z" fill="white"/>
              <path d="M58.0515 9.66783L61.6046 23.1474L59.8447 23.6113L56.2916 10.1317L58.0515 9.66783Z" fill="white"/>
              <path d="M63.4952 8.65974L65.8787 22.3945L64.0855 22.7057L61.702 8.97092L63.4952 8.65974Z" fill="white"/>
              <path d="M69.005 8.12249L70.2011 22.0111L68.3879 22.1672L67.1917 8.27866L69.005 8.12249Z" fill="white"/>
              <path d="M74.5412 8.06L74.5412 22L72.7212 22L72.7212 8.06L74.5412 8.06Z" fill="white"/>
              <path d="M80.0618 8.47272L78.8657 22.3613L77.0524 22.2051L78.2485 8.31656L80.0618 8.47272Z" fill="white"/>
              <path d="M85.5272 9.35769L83.1438 23.0924L81.3506 22.7812L83.734 9.04651L85.5272 9.35769Z" fill="white"/>
              <path d="M90.8958 10.7083L87.3427 24.1879L85.5828 23.724L89.1359 10.2444L90.8958 10.7083Z" fill="white"/>
              <path d="M96.1291 12.5146L91.4325 25.6396L89.7189 25.0264L94.4155 11.9014L96.1291 12.5146Z" fill="white"/>
              <path d="M101.188 14.7633L95.3828 27.4369L93.7281 26.6789L99.5336 14.0053L101.188 14.7633Z" fill="white"/>
              <path d="M106.035 17.4378L99.1637 29.5665L97.5802 28.6693L104.452 16.5406L106.035 17.4378Z" fill="white"/>
              <path d="M110.636 20.5183L102.749 32.0127L101.248 30.983L109.135 19.4886L110.636 20.5183Z" fill="white"/>
              <path d="M114.954 23.9822L106.11 34.7575L104.703 33.6028L113.547 22.8275L114.954 23.9822Z" fill="white"/>
              <path d="M118.96 27.8039L109.224 37.7805L107.921 36.5094L117.657 26.5328L118.96 27.8039Z" fill="white"/>
              <path d="M122.623 31.9553L112.066 41.0597L110.878 39.6815L121.434 30.577L122.623 31.9553Z" fill="white"/>
              <path d="M125.916 36.4055L114.617 44.5706L113.551 43.0955L124.85 34.9304L125.916 36.4055Z" fill="white"/>
              <path d="M128.815 41.122L116.858 48.2874L115.922 46.7263L127.879 39.5608L128.815 41.122Z" fill="white"/>
              <path d="M131.299 46.0698L118.77 52.1828L117.972 50.5472L130.501 44.4341L131.299 46.0698Z" fill="white"/>
              <path d="M133.349 51.2124L120.342 56.2279L119.688 54.5298L132.694 49.5143L133.349 51.2124Z" fill="white"/>
              <path d="M134.95 56.5121L121.562 60.3931L121.055 58.6451L134.444 54.764L134.95 56.5121Z" fill="white"/>
              <path d="M136.091 61.9295L122.419 64.6474L122.064 62.8623L135.736 60.1445L136.091 61.9295Z" fill="white"/>
              <path d="M136.763 67.4249L122.907 68.9596L122.707 67.1506L136.562 65.6159L136.763 67.4249Z" fill="white"/>
              <path d="M136.96 72.9576L123.024 73.2978L122.98 71.4783L136.916 71.1381L136.96 72.9576Z" fill="white"/>
              <path d="M136.682 78.4869L122.768 77.63L122.88 75.8135L136.794 76.6703L136.682 78.4869Z" fill="white"/>
              <path d="M135.931 83.9719L122.142 81.9243L122.409 80.1241L136.198 82.1716L135.931 83.9719Z" fill="white"/>
              <path d="M134.712 89.3722L121.149 86.1491L121.57 84.3784L135.132 87.6016L134.712 89.3722Z" fill="white"/>
              <path d="M133.033 94.648L119.798 90.2731L120.369 88.545L133.605 92.92L133.033 94.648Z" fill="white"/>
              <path d="M130.909 99.7604L118.097 94.2659L118.815 92.5932L131.626 98.0877L130.909 99.7604Z" fill="white"/>
              <path d="M128.353 104.672L116.061 98.0981L116.919 96.4931L129.212 103.067L128.353 104.672Z" fill="white"/>
              <path d="M125.386 109.345L113.703 101.741L114.695 100.216L126.379 107.82L125.386 109.345Z" fill="white"/>
              <path d="M122.028 113.747L111.041 105.169L112.161 103.734L123.148 112.313L122.028 113.747Z" fill="white"/>
              <path d="M118.306 117.845L108.094 108.355L109.333 107.022L119.545 116.512L118.306 117.845Z" fill="white"/>
              <path d="M114.245 121.608L104.886 111.277L106.234 110.055L115.594 120.386L114.245 121.608Z" fill="white"/>
              <path d="M109.877 125.009L101.438 113.913L102.887 112.811L111.325 123.907L109.877 125.009Z" fill="white"/>
            </svg>
          </div>
          <span class="timer__remaining font-small">زمان باقیمانده</span>
          <span class="timer__second">ثانیه</span>
          <span class="timer__countDown">{{ time }}</span>
        </div>
        <p class="main--timer__description font-small">کد تایید برای شماره شما ارسال شد . <br>کد تایید را وارد کنید</p>
      </div>
      <div class="verify-code__verification">
        <verification-code ref="verify" :parentValues="inputValues" :fieldWidth="25" :field-height="35" :loading="false" :inputFields="4" @complete="onComplete"/>
      </div>
      <div class="verify-code__keyboard">
        <div class="keyboard-holder">
          <div class="keyboard-holder__number" @click="setKeyboardNumber">1</div>
        </div>
        <div class="keyboard-holder">
          <div class="keyboard-holder__number" @click="setKeyboardNumber">2</div>
        </div>
        <div class="keyboard-holder">
          <div class="keyboard-holder__number" @click="setKeyboardNumber">3</div>
        </div>
        <div class="keyboard-holder">
          <div class="keyboard-holder__number" @click="setKeyboardNumber">4</div>
        </div>
        <div class="keyboard-holder">
          <div class="keyboard-holder__number" @click="setKeyboardNumber">5</div>
        </div>
        <div class="keyboard-holder">
          <div class="keyboard-holder__number" @click="setKeyboardNumber">6</div>
        </div>
        <div class="keyboard-holder">
          <div class="keyboard-holder__number" @click="setKeyboardNumber">7</div>
        </div>
        <div class="keyboard-holder">
          <div class="keyboard-holder__number" @click="setKeyboardNumber">8</div>
        </div>
        <div class="keyboard-holder">
          <div class="keyboard-holder__number" @click="setKeyboardNumber">9</div>
        </div>
        <div class="keyboard-holder">
          <div class="keyboard-holder__number" @click="clearKeyboard">C</div>
        </div>
        <div class="keyboard-holder">
          <div class="keyboard-holder__number" @click="setKeyboardNumber">0</div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button :disabled="!resend" class="font-resend px-0" :class="{'disable': !resend}" @click="resendCode">ارسال مجدد</button>
        </div>
      </div>
      <btn-modern @click="$router.push('/upload')">مرحله بعد</btn-modern>
    </div>
  </div>
</template>

<script>
import VerificationCode from "~/components/global/VerificationCode";
import moment from "moment";

export default {
  name: "verify",
  components: {VerificationCode},
  layout: "form",
  data() {
    return {
      date: moment({hour: 0, minute: 1, seconds: 0}),
      resend: false,
      timerTimeOut: null,
      timerInterval: null,
      timer_label: null,
      keyboardNumber:null,
      inputValues:['','','','']
    }
  },
  methods: {
    onComplete(v) {
      console.log("onComplete ", v);
    },
    setKeyboardNumber(e){
      let number = e.target.innerText
      let BreakException = {}
      try{
        this.inputValues.forEach((el, index) =>{
          if (this.inputValues[index] === ''){
            this.inputValues[index] = number
            this.$refs.verify.how()
            throw BreakException
          }
        })
      }catch (e) {
        if (e !== BreakException) throw e;
      }

    },
    clearKeyboard(){
      this.inputValues.forEach((el, index) =>{
        this.inputValues[index] = ''
      })
      this.$refs.verify.how()
    },
    cal() {
      this.timer_label = this.$refs.timer__I.children
      for (let timerKey in this.timer_label) {
        if (this.timer_label[timerKey].outerHTML) {
          this.timerTimeOut = setTimeout(() => {
            this.timer_label[timerKey].style.opacity = 1
            this.timer_label[timerKey].style.transition = 'opacity 300ms'
          }, 1000 * timerKey)
        }
      }
      this.timerInterval = setInterval(() => {
        if (this.date.minute() !== 0 || this.date.second() !== 0){
          this.date = moment(this.date.subtract(1, 'seconds'))}
        else {
          this.resend = true
          clearInterval()
        }
      }, 1000);
    },
    resendCode(){

      this.resend = false
      this.date = moment({hour: 0, minute: 1, seconds: 0})
      this.timer_label = this.$refs.timer__I.children
      clearTimeout(this.timerTimeOut)
      clearInterval(this.timerInterval)
      for (let timerKey in this.timer_label) {
        if (this.timer_label[timerKey].outerHTML) {
          setTimeout(() => {
            this.timer_label[timerKey].style.opacity = 0
            this.timer_label[timerKey].style.transition = 'opacity 500ms'
        }, 20 * timerKey)
        }
      }


      this.cal()
    }
  },
  computed: {
    time() {
      return this.date.format('mm:ss');
    }
  },
  mounted() {
    this.cal()
    this.timer_label = this.$refs.timer__I.children
  }
}
</script>

<style lang="scss" scoped>

</style>
