<template>
  <div>
    <div class="container">
      <div class="row mt-4 mb-4">
        <div class="col-md-9 offset-md-1">
          <router-link class="btn btn-primary mt-4" to="/admin/allusers">Back</router-link>
          <h3>
            {{contact.first_name}} {{contact.last_name}}
            <span class="pull-right">
              <button class="btn btn-danger btn-fill" @click="deleteContact(contact._id)">Delete</button>
              <!-- <button class="btn btn-primary btn-fill ml-3">Edit</button> -->
            </span>
          </h3>
          <ul class="list-group mb-4 mt-4">
            <li class="list-group-item">
              <strong>first Name:</strong>
              {{contact.first_name}}
            </li>
            <li class="list-group-item">
              <strong>last name:</strong>
              {{contact.last_name}}
            </li>
          </ul>
          <ul class="list-group mb-4">
            <li class="list-group-item">
              <strong>phone Number:</strong>
              {{contact.phone}}
            </li>
            <li class="list-group-item">
              <strong>Email:</strong>
              {{contact.email}}
            </li>
          </ul>
          <ul class="list-group">
            <li class="list-group-item">
              <strong>Message:</strong>
              {{contact.message}}
            </li>
          </ul>
          <ul class="list-group mb-4">
            <li class="list-group-item">
              <strong>Sent Date:</strong>
              {{contact.Created_date}}
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
      contact: ""
    };
  },
  methods: {
    fetchContact(id) {
      this.$http
        .get("http://localhost:3000/contact/" + id)
        .then(function(response) {
          this.contact = response.body;
          console.log(id + "this is it");
        });
    },
    deleteContact(id) {
      console.log(id);
      this.$http
        .delete("http://localhost:3000/contact/" + id)
        .then(function(response) {
          this.$router.push({ path: "/admin/contact" });
        });
    }
  },
  created() {
    this.fetchContact(this.$route.params.id);
  }
};
</script>
<style>
</style>
