<template>
  <div class="content">
    <div class="container-fluid">
      <card>
        <div class="row">
          <div class="col-md-6 offset-md-6">
              <input type="text" class="form-control" placeholder="Search by last name" v-model="filterInput">
          </div>
        </div>
        <div class="row">
          <div class="col-md-8">
            <h4>{{this.title}}</h4>
            <div class="alert alert-info" v-for="customer in filterBy(customers , filterInput)" :key="customer._id">
              <span>{{customer.first_name}} {{customer.last_name}} registered on {{customer.Created_date}}</span>
            </div>
          </div>
        </div>
        <br>

      </card>
    </div>
  </div>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card
    },
    data () {
      return {
        title:'Notification Status',
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
  }

</script>
<style>

</style>
