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
          <step-one 
            v-if="currentStep == 1"
            @next-step="nextStep()">
          </step-one>
          <step-two 
            v-if="currentStep == 2"
            @next-step="nextStep()">
          </step-two>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue';
import StepOne from '@/components/StepOne.vue';
import StepTwo from '@/components/StepTwo.vue';
export default {
  name: 'App',
  data() {
    return {
      currentStep: 2
    }
  },
  methods: {
    nextStep() {
      if(this.currentStep < 4) {
        this.currentStep++;
      }
    }
  },
  components: {
    ProgressBar,
    StepOne,
    StepTwo,
  }
}
</script>

<style src="./assets/style/main.scss" lang="scss"></style>
