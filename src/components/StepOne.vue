<template>
    <div class="stepOne">
        <p class="title text-center mB0">Create Account</p>
        <p class="subtitle text-center mT5">Glad to see you here!</p>
        
        <p class="w100 form mB10 mT30">Account</p>
        <div class="inputWrapper" :class="{'inputWrapper-warning': errors.has('email')}">
            <input 
                v-validate="'required|email'" 
                v-model="email" name="email" 
                class="w100 formInput" 
                type="text" 
                placeholder="example@email.com">
            <p v-if="errors.has('email')" class="errorMsg label">{{ errors.first('email') }}</p>
        </div>
        
        <p class="w100 form mB10 mT30">Password</p>
        <div class="inputWrapper" :class="{'inputWrapper-warning': errors.has('password')}">
            <input 
                v-validate="{required: true, min:8}" 
                v-model="password" 
                ref="password"
                name="password" 
                class="w100 formInput" 
                type="password">
            <p v-if="errors.has('password')" class="errorMsg label">{{ errors.first('password') }}</p>
        </div>
        
        <p class="w100 form mB10 mT30">Confirm Password</p>
        <div class="inputWrapper" :class="{'inputWrapper-warning': errors.has('checkPassword')}">
            <input 
                v-validate="{required: true, confirmed: 'password'}" 
                data-vv-as="password"
                v-model="checkPassword" 
                name="checkPassword" 
                class="w100 formInput" 
                type="password">
            <p v-if="errors.has('checkPassword')" class="errorMsg label">{{ errors.first('checkPassword') }}</p>
        </div>
        
        <button @click="validateBeforeNextStep" class="w100 mT30 button-main" :disabled="!validate">SUBMIT & NEXT</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            checkPassword: ''
        }
    },
    watch: {
        // [`${this.email}${this.password}${this.chechPassword}`]() {
        //     this.$validator.validate().then(res => {
        //         // console.log(res);
        //         this.validate = res;
        //     })
        // }
    },
    computed: {
        validate() {
            return this.errors.items.length === 0;
        },
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
