<template>
    <div class="stepOne">
        <p class="title text-center mB0">General Information</p>
        <p class="subtitle text-center mT5">Tell us who you are!</p>
        
        <div class="flex-box">
            <div class="flex-1 mR20">
                <p class="w100 form mB10 mT30">Name <span class="hint">(optional)</span></p>
                <input v-model="name" class="w100 formInput" type="text" placeholder="Example Name">
            </div>

            <div class="flex-1">
                <p class="w100 form mB10 mT30">Phone*</p>
                <div class="inputWrapper" :class="{'inputWrapper-warning': errors.has('phone')}">
                    <input 
                        v-mask="'#### ### ###'"
                        v-validate="'required|verify_phone'" 
                        v-model="phone" 
                        name="phone" 
                        class="w100 formInput" 
                        placeholder="0912 345 678">
                    <p v-if="errors.has('phone')" class="errorMsg label">{{ errors.first('phone') }}</p>
                </div>
            </div>
        </div>
        
        <div class="mT30">
            <p class="w100 form mB10 mT30">Birth Date <span class="hint">(optional)</span></p>
            <div class="flex-box">
                <div class="flex-1 mR20">
                    <select class="w100 formInput" v-model="birthYear">
                        <option value="" disabled>year</option>
                        <option v-for="(y, i) in allSelectableYear" :value="y" :key="`year${i}`">{{ y }}</option>
                    </select>
                </div>
                <div class="flex-1 mR20">
                    <select class="w100 formInput" v-model="birthMonth">
                        <option value="" disabled>month</option>
                        <option  v-for="(m, i) in allSelectableMonth" :value="m" :key="i">{{ m }}</option>
                    </select>
                </div>
                <div class="flex-1">
                    <select :disabled="dateDisable" class="w100 formInput" v-model="birthDate">
                        <option value="" disabled>date</option>
                        <option v-for="(d, i) in allSelectableDate" :value="d" :key="i">{{ d }}</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="mT30">
            <p class="w100 form mB10 mT30">Address*</p>
        </div>
        <div class="flex-box">
            <div class="flex-1 inputWrapper mR20">
                <select v-model="city" class="w100 formInput ">
                    <option value="" disabled>City</option>
                    <option v-for="c in allSelectableCity" :value="c" :key="c">{{ c }}</option>
                </select>
            </div>
            <div class="flex-1 inputWrapper" :class="{'inputWrapper-warning': errors.has('dist')}">
                <select v-validate="'required'" v-model="dist" name="dist" class="w100 formInput">
                    <option value="" disabled>Dist</option>
                    <option v-for="d in allSelectableDist" :value="d" :key="d">{{ d }}</option>
                </select>
                    <p v-if="errors.has('dist')" class="errorMsg">{{ errors.first('dist') }}</p>
            </div>
        </div>
        <div class="inputWrapper mT20" :class="{'inputWrapper-warning': errors.has('address')}">
            <input 
                v-validate="'required'"
                v-model="address" 
                type="text" 
                class="w100 formInput"
                name="address"
                placeholder="Address Detail">
            <p v-if="errors.has('address')" class="errorMsg">{{ errors.first('address') }}</p>
        </div>

        <button @click="validateBeforeNextStep" class="w100 mT30 button-main" :disabled="!validate">SUBMIT & NEXT</button>
    </div>
</template>

<script>
import {mask} from 'vue-the-mask';
import moment from 'moment';
import region from '../fakeData/region';
export default {
    directives: {mask},
    data() {
        return {
            name: '',
            phone: '',
            birthYear: '',
            birthMonth: '',
            birthDate: '',
            city: '台北市',
            dist: '',
            address: ''
        }
    },
    computed: {
        validate() {
            return this.errors.items.length === 0;
        },
        allSelectableYear() {
            let arr = [];
            let startDate = moment('1960/01/01', 'YYYY/MM/DD');
            while(startDate.isBefore(moment())) {
                arr.push(startDate.format('YYYY'));
                startDate = startDate.add(1, 'y');
            }
            return arr;
        },
        allSelectableMonth() {
            let arr = [];
            for(let i = 1; i <= 12; i++) {
                arr.push(i);
            }
            return arr;
        },
        allSelectableDate() {
            let currentMonth = moment(`${this.birthYear}/${this.birthMonth}/1`, 'YYYY/MM/DD');
            return currentMonth.daysInMonth();
        },
        dateDisable() {
            return this.birthYear == '' || this.birthMonth == '';
        },
        allSelectableCity() {
            return Object.keys(region);
        },
        allSelectableDist() {
            return this.city == '' ? [''] : Object.keys(region[this.city]);
        }
    },
    watch: {
        city() {
            this.dist = '';
        }
    },
    methods: {
        validateBeforeNextStep() {
            this.$validator.validate().then(res => {
                if(res) {
                    this.$emit('next-step');
                }
            });
        }
    }
}
</script>

<style></style>
