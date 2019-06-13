<template>
    <div>
      <div class="container">
        <div class="row mb-5"> 
          <div class="col-md-6 offset-md-3">
            <!-- Default form login -->
<form class="text-center border border-primary p-5" style="margin-top:70px;height:33rem;padding-top:100px !important;">


    <!-- Email -->
    <input type="email" id="defaultLoginFormEmail" class="form-control mb-5" placeholder="E-mail">

    <!-- Password -->
    <input type="password" id="defaultLoginFormPassword" class="form-control mb-5" placeholder="Password">

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
            <a href="">Forgot password?</a>
        </div>
    </div>

    <!-- Sign in button -->
    <center><button class="btn btn-primary btn-block w-75 my-4" type="submit">Sign in</button></center>

    <!-- Register -->
    <p>Dont have an account?
        <a href="">Register</a>
    </p>

    <!-- Social login -->
    <p>or sign in with:</p>

    <!-- <a type="button" class="light-blue-text mx-2"> -->
        <i class="fab fa-facebook-f mx-2"></i>
    <!-- </a> -->
    <!-- <a type="button" class="light-blue-text mx-2"> -->
        <i class="fab fa-twitter mx-2"></i>
    <!-- </a> -->
    <!-- <a type="button" class="light-blue-text mx-2"> -->
        <i class="fab fa-linkedin-in mx-2"></i>
    <!-- </a> -->
    <!-- <a type="button" class="light-blue-text mx-2"> -->
        <i class="fab fa-github mx-2"></i>
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

}
</script>

<style scoped>
 input {
   border-top:0px;
   border-left:0px;
   border-right:0px;
   border-radius:0px;
 }
 .form-control:focus{
    border-color: #cccccc;
    -webkit-box-shadow: none;
    box-shadow: none;
}
</style>

