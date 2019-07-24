<template>
    <div>
      <div class="container">
        <div class="row mb-5"> 
          <div class="col-md-6 offset-md-3">
            <!-- Default form login -->
<form class="text-center border border-primary p-5" v-on:submit.prevent style="margin-top:70px;height:33rem;padding-top:100px !important;">


    <!-- Email -->
    <input type="email" id="defaultLoginFormEmail" class="form-control mb-5" placeholder="Unique ID" v-model="email">

    <!-- Password -->
    <input type="password" id="defaultLoginFormPassword" class="form-control mb-5" placeholder="Password" v-model="password">

    <div class="d-flex justify-content-around">
        <div>
            <!-- Remember me -->
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
            </div>
        </div>
        <div>
            <!-- Forgot password -->
            <a href="#" @click="forgetPassword">Forgot password?</a>
        </div>
    </div>

    <!-- Sign in button -->
    <center><button class="btn btn-primary btn-block w-75 my-4" @click="login" type="submit">Login in</button></center>

    <!-- Register -->
    <!-- <p>Dont have an account? -->
        <!-- <a href="">Register</a> -->
    <!-- </p> -->

    <!-- Social login -->
    <!-- <p>or sign in with:</p> -->

    <!-- <a type="button" class="light-blue-text mx-2"> -->
        <!-- <i class="fab fa-facebook-f mx-2"></i> -->
    <!-- </a> -->
    <!-- <a type="button" class="light-blue-text mx-2"> -->
        <!-- <i class="fab fa-twitter mx-2"></i> -->
    <!-- </a> -->
    <!-- <a type="button" class="light-blue-text mx-2"> -->
        <!-- <i class="fab fa-linkedin-in mx-2"></i> -->
    <!-- </a> -->
    <!-- <a type="button" class="light-blue-text mx-2"> -->
        <!-- <i class="fab fa-github mx-2"></i> -->
    <!-- </a> -->

</form>
<!-- Default form login -->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        email:'',
        password:''
    }
},
methods: {
    login() {
        let eMail = /wisdomekpot@gmail.com/;
        let paSSword = /12345/;

        let emailTest = eMail.test(this.email);
        let PasswordTest = paSSword.test(this.password);
        if(emailTest ===false && PasswordTest === false) {
            alert('Wrong Information')
            return false;
        }else {
            //  console.log('true');
                this.$router.push('/admin/overview');
            // return true;
 
        }
    },
    forgetPassword() {
        let answer = prompt('what is the name of your pet');
        if(answer === "mycat") {
            alert('Unique ID = wisdomekpot@gmail.com and password = 1234')
        }else {
            alert('Baba You be thief Joor');
        }
    }
}
}
</script>

<style scoped>

</style>

