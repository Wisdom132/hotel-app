<template>
  <div>
    <div class="container">
      <div class="row mt-4 mb-4">
        <div class="col-md-9 offset-md-1">
          <router-link class="btn btn-primary mt-4" to="/admin/allusers">Back</router-link>
          <h3>
            {{customer.first_name}} {{customer.last_name}}
            <span class="pull-right">
              <button class="btn btn-danger btn-fill" @click="deleteCustomer(customer._id)">Delete</button>
              <button class="btn btn-primary btn-fill ml-3">Edit</button>
            </span>
          </h3>
          <ul class="list-group mb-4 mt-4">
            <li class="list-group-item">
              <strong>first Name:</strong>
              {{customer.first_name}}
            </li>
            <li class="list-group-item">
              <strong>last name:</strong>
              {{customer.last_name}}
            </li>
          </ul>
          <ul class="list-group mb-4">
            <li class="list-group-item">
              <strong>phone Number:</strong>
              {{customer.phone}}
            </li>
            <li class="list-group-item">
              <strong>Email:</strong>
              {{customer.email}}
            </li>
          </ul>
          <ul class="list-group">
            <li class="list-group-item">
              <strong>Address:</strong>
              {{customer.Address}}
            </li>
          </ul>
          <ul class="list-group mb-4">
            <li class="list-group-item">
              <strong>Room Type:</strong>
              {{customer.room_type}}
            </li>
            <li class="list-group-item">
              <strong>Room Number:</strong>
              {{customer.room_number}}
            </li>
          </ul>
          <ul class="list-group mb-4">
            <li class="list-group-item">
              <strong>Check in:</strong>
              {{customer.checkin}}
            </li>
             <li class="list-group-item">
              <strong>Check Out:</strong>
              {{customer.checkout}}
            </li>
            <li class="list-group-item">
              <strong>people:</strong>
              {{customer.people}}
            </li>
            <li class="list-group-item">
              <strong>kids:</strong>
              {{customer.kids}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      customer: ""
    };
  },
  methods: {
    fetchCustomer(id) {
      this.$http
        .get("http://localhost:3000/rooms/" + id)
        .then(function(response) {
          this.customer = response.body;
          console.log(id + "this is it");
        });
    },
    deleteCustomer(id) {
      console.log(id);
      this.$http
        .delete("http://localhost:3000/rooms/" + id)
        .then(function(response) {
          this.$router.push({ path: "/admin/allusers" });
        });
    }
  },
  created() {
    this.fetchCustomer(this.$route.params.id);
  }
};
</script>
<style>
</style>
