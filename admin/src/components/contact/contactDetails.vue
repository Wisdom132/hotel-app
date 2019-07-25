<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <input type="text" class="form-control col-md-6 ml-3" placeholder="Search a by last name" v-model="filterInput">
        <table class="table table-striped table-responsive-sm">
          <thead>
            <tr>
              <!-- <th scope="col">#</th> -->
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody> 
            <tr v-for="contact in contacts" :key="contact._id">
              <td scope="row">{{contact.first_name}}</td>
              <td>{{contact.last_name}}</td>
              <td>{{contact.email}}</td>
              <td>{{contact.phone}}</td>
              <td> <router-link class="btn btn-primary" :to="'/admin/contactInfo/'+contact._id">View</router-link> </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "l-table",
  data() {
    return {
      contacts: [],
      filterInput:'',
    }
  },
  methods: {
       fetchContacts() {
      this.$http.get("http://localhost:3000/contact").then(function(response) {
        this.contacts = response.body;
        console.log(this.contacts);
      });
    },
  },
  created() {
      this.fetchContacts();
  }
 
};
</script>
<style scoped>
</style>
