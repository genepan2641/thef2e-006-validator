<template>
    <div class="stepFour">
        <p class="title text-center mB0">Payment Method</p>
        <p class="subtitle text-center mT5">Add your credit card information!</p>

        <p class="w100 form mB10 mT30">Card Number*</p>
        <div class="inputWrapper" :class="{'inputWrapper-warning': errors.has('cardNumber')}">
            <input 
                v-mask="'#### #### #### ####'"
                v-validate="'required|credit_card'"
                v-model="cardNumber"
                name="cardNumber"
                type="text" 
                class="w100 formInput"
                placeholder="1234 5678 9012 3456">
            <p v-if="errors.has('cardNumber')" class="errorMsg label">{{ errors.first('cardNumber') }}</p>
            <transition v-else name="fade" mode="out-in" appear>
                <img id="visaIcon" class="creditCardIcon" v-if="cardType == 1" style="width: 35px;" src="static/visa.png" alt="">
                <img id="masterIcon" class="creditCardIcon" v-if="cardType == 2" style="width: 35px;" src="static/master.png" alt="">
                <img id="jcbIcon" class="creditCardIcon" v-if="cardType == 3" style="width: 35px;" src="static/jcb.png" alt="">
            </transition>
        </div>

        <div class="flex-box">
            <div class="flex-1 mR20">
                <p class="form w100 mB10">Cardholder Name*</p>
                <div class="inputWrapper" :class="{'inputWrapper-warning': errors.has('holderName')}">
                    <input 
                        v-validate="'required'"
                        v-model="holderName" 
                        name="holderName"
                        type="text"
                        class="w100 formInput"
                        placeholder="EXAMPLE NAME">
                    <p v-if="errors.has('holderName')" class="errorMsg label">{{ errors.first('holderName') }}</p>
                </div>
            </div>
            <div class="flex-1">
                <p class="form w100 mB10">Bank Name*</p>
                <div class="inputWrapper" :class="{'inputWrapper-warning': errors.has('bankName')}">
                    <input
                        v-validate="'required'"
                        v-model="bankName" 
                        name="bankName"
                        type="text" 
                        class="w100 formInput"
                        placeholder="EXAMPLE BANK">
                    <p v-if="errors.has('bankName')" class="errorMsg label">{{ errors.first('bankName') }}</p>
                </div>
            </div>
        </div>

        <div class="flex-box">
            <div class="flex-1 mR20">
                <p class="w100 form mB10">CVV*</p>
                <div class="inputWrapper" :class="{'inputWrapper-warning': errors.has('cvv')}">
                    <input 
                        v-validate="'required|digits:3'"
                        v-model="cvv" 
                        name="cvv"
                        type="text" 
                        class="formInput w100" 
                        placeholder="123">
                    <p v-if="errors.has('cvv')" class="errorMsg label">{{ errors.first('cvv') }}</p>
                </div>
            </div>
            <div class="flex-2">
                <p class="w100 form mB10">Expire Date*</p>
                <div class="flex-box">
                    <div class="flex-1 mR20">
                        <div class="inputWrapper" :class="{'inputWrapper-warning': errors.has('cvv')}">
                            <select 
                                v-validate="'required'"
                                v-model="expireMonth" 
                                name="expireMonth"
                                class="w100 formInput">
                                <option value="" disabled>MM</option>
                                <option v-for="m in allSelectableMonth" :value="m" :key="m">{{ m }}</option>
                            </select>
                            <p v-if="errors.has('expireMonth')" class="errorMsg label">{{ errors.first('expireMonth') }}</p>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="inputWrapper" :class="{'inputWrapper-warning': errors.has('expireYear')}">
                            <select 
                                v-validate="'required'" 
                                v-model="expireYear" 
                                name="expireYear" 
                                class="w100 formInput">
                                    <option value="" disabled>YY</option>
                                    <option v-for="y in allSelectableYear" :value="y" :key="y">{{ y }}</option>
                            </select>
                            <p v-if="errors.has('expireYear')" class="errorMsg label">{{ errors.first('expireYear') }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button @click="validateBeforeNextStep" class="w100 mT30 button-main" :disabled="!validate">DONE</button>
    </div>
</template>

<script>
import {mask} from 'vue-the-mask';
import moment from 'moment';
export default {
    directives: {mask},
    data() {
        return {
            cardNumber: '',
            holderName: '',
            bankName: '',
            cvv: '',
            expireMonth: '',
            expireYear: '',
            cardType: ''
        }
    },
    computed: {
        validate() {
            return this.errors.items.length === 0;
        },
        allSelectableMonth() {
            let arr = [];
            let count = 1;
            while(count <= 12) {
                arr.push(count);
                count++;
            }
            return arr;
        },
        allSelectableYear() {
            let arr = [];
            let current = Number(moment().format('YY'));
            let count = 1;
            while(count <= 30) {
                arr.push(current + count);
                count++;
            }
            return arr;
        },
    },
    watch: {
        cardNumber(val) {
            //check for Visa
            if(/^4/.test(val)) {
                this.cardType = 1; //"visa"
            }
            //check for MasterCard
            else if(/^5[1-5]/.test(val)) {
                this.cardType = 2; //"mastercard";
            }
            //then check for JCB
            else if(/^35(2[89]|[3-8][0-9])/.test(val)) {
                this.cardType = 3 //"JCB";
            } else {
                this.cardType = '';
            }
        },
    },
    methods: {
        validateBeforeNextStep() {
            this.$validator.validate().then(res => {
                if(res) {
                    this.$emit('next-step');
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/_color.scss";

.creditCardIcon {
  position: absolute;
  top: 13px;
  right: 14px;
}
</style>
