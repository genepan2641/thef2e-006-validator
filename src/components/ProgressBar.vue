<template>
    <div class="progressBar">
        <template v-for="(n, i) in totalStep">
            <div 
                :key="`dot${i}`"
                class="progressBar__dotWrapper"
                :class="{
                    'progressBar__dotWrapper-disabled': isDisabled(n),
                    'progressBar__dotWrapper-current': isCurrent(n)
                }">
                <i v-if="n < currentStep" class="fas fa-check-circle"></i>
                <div v-if="n == currentStep" class="dot"></div>
            </div>
            <div 
                :key="`line${i}`"
                v-if="n < totalStep" 
                class="progressBar__line"
                :class="{'progressBar__line-disabled': isDisabled(n + 1)}"></div>
        </template>
        
    </div>
</template>

<script>
export default {
    props: {
        totalStep: {
            type: Number,
            required: true
        },
        currentStep: {
            type: Number,
            required: true
        }
    },
    methods: {
        isDisabled(val) {
            return val > this.currentStep;
        },
        isCurrent(val) {
            return val == this.currentStep;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/_color.scss";
.progressBar {
  display: flex;
  align-items: center;
}
.progressBar__dotWrapper {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-family: "Font Awesome 5 Free";
  .fas {
    color: $main-color;
  }

  .dot {
    background-color: $main-color;
    border-radius: 50%;
    width: 8px;
    height: 8px;
  }
}
.progressBar__dotWrapper-disabled {
  border: 2px solid $secondary-color;
}
.progressBar__dotWrapper-current {
  padding: 2px;
  border: 2px solid $main-color;
}
.progressBar__line {
  height: 2px;
  flex: 1;
  background-color: $main-color;

  &-disabled {
    background-color: $secondary-color;
  }
}
</style>
