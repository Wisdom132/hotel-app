<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Hotel Management Timer</h4>
              <p class="card-category">Monitor all the users in your hotel</p>
            </template>
            <div class="all-icons">
              <div class="row">
                <div class="col-md-3" v-for="customer in customers" :key="customer._id">
                  <div class="card text-center">
                    <div
                      class="card-header text-light bg-secondary"
                    >{{customer.first_name}} {{customer.last_name}}</div>
                    <div class="card-body">
                      <h6 class="card-title">
                        <b>CheckIn:{{customer.checkin}}</b>
                      </h6>
                      <br>
                      <h6 class="card-title">
                        <b>CheckOut:{{customer.checkout}}</b>
                      </h6>
                      
                    </div>
                    <div class="card-footer text-light bg-secondary">
                      <count :checkout="customer.checkout" :checkin='customer.checkin'></count>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import count from "@/components/count.vue";
export default {
  components: {
    count
  },
  data() {
    return {
      customers: []
    };
  },
  methods: {
    fetchCustomers() {
      this.$http.get("http://localhost:3000/rooms").then(function(response) {
        this.customers = response.body;
        console.log(this.customers);
      });
    }
  },
  created() {
    this.fetchCustomers();
  }
};
</script>
<style>
</style>
