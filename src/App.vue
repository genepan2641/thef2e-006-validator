<template>
  <div id="app">
    <div class="container">
      <div class="pageView">
        <div class="appProgressBar">
          <progress-bar 
            :total-step="4"
            :current-step="currentStep">
          </progress-bar>
        </div>
        <div class="appStep">
          <transition name="fade" mode="out-in" appear>
            <step-one v-if="currentStep == 1" :key="1" @next-step="nextStep()"></step-one>
            <step-two v-if="currentStep == 2" :key="2" @next-step="nextStep()"></step-two>
            <step-three v-if="currentStep == 3" :key="3" @next-step="nextStep()"></step-three>
            <step-four v-if="currentStep == 4" :key="4" @next-step="nextStep()"></step-four>
            <step-done v-if="currentStep == 5" :key="5"></step-done>
          </transition>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue';
import StepOne from '@/components/StepOne.vue';
import StepTwo from '@/components/StepTwo.vue';
import StepThree from '@/components/StepThree.vue';
import StepFour from '@/components/StepFour.vue';
import StepDone from '@/components/StepDone.vue';
export default {
  name: 'App',
  data() {
    return {
      currentStep: 1
    }
  },
  methods: {
    nextStep() {
      if(this.currentStep < 5) {
        this.currentStep++;
      }
    }
  },
  components: {
    ProgressBar,
    StepOne,
    StepTwo,
    StepThree,
    StepFour,
    StepDone
  }
}
</script>

<style src="./assets/style/main.scss" lang="scss"></style>
