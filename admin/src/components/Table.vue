<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <input type="text" class="form-control col-md-6 ml-3" placeholder="Search a by last name" v-model="filterInput">
        <table class="table table-striped table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Room Type</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody> 
            <tr v-for="customer in filterBy(customers , filterInput)" :key="customer._id">
              <th scope="row">1</th>
              <td>{{customer.first_name}}</td>
              <td>{{customer.last_name}}</td>
              <td>{{customer.email}}</td>
              <td>{{customer.phone}}</td>
              <td>{{customer.room_type}}</td>
              <td>
                <router-link
                  :to="'/admin/maps/' +customer._id"
                  class="btn btn-primary btn-fill"
                >View</router-link>
              </td>
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
      customers: [],
      filterInput:'',
    }
  },
  methods: {
    fetchCustomers() {
      this.$http.get("http://localhost:3000/rooms").then(function(response) {
        this.customers = response.body;
        console.log(this.customers);
      });
    },
    filterBy(list,value) {
      return list.filter(function(customer) {
        return customer.last_name.indexOf(value) > -1;
      });
    }
  },
  created() {
    this.fetchCustomers();
  }
};
</script>
<style scoped>
</style>
