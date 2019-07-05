<template>
  <div>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <card>
          <h4 slot="header" class="card-title">Add A New User</h4>
          <form @submit="addCustomer">
            <div class="row">
              <div class="col-md-6">
                <base-input
                  type="text"
                  label="First Name"
                  placeholder="First Name"
                  v-model="customer.first_name"
                ></base-input>
              </div>
              <div class="col-md-6">
                <base-input
                  type="text"
                  label="Last Name"
                  placeholder="Last Name"
                  v-model="customer.last_name"
                ></base-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <base-input
                  type="text"
                  label="Phone Number"
                  placeholder="Phone Number"
                  v-model="customer.phone"
                ></base-input>
              </div>
              <div class="col-md-6">
                <base-input type="email" label="Email" placeholder="Email" v-model="customer.email"></base-input>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <base-input
                  type="text"
                  label="Address"
                  placeholder="Home Address"
                  v-model="customer.Address"
                ></base-input>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <base-input
                  type="date"
                  label="Checkin"
                  placeholder="*August 21,2019"
                  title="please follow the format"
                  v-model="customer.checkin"
                ></base-input>
              </div>
              <div class="col-md-4">
                <base-input
                  type="date"
                  label="Checkout"
                  placeholder="*August 21,2019"
                  title="please follow the format"
                  v-model="customer.checkout"
                ></base-input>
              </div>
              <div class="col-md-4">
                <label for>people</label>
                <select class="form-control" v-model="customer.people">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <label for>Kids</label>
                <select class="form-control" v-model="customer.kids">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for>Room Type</label>
                 <select class="form-control" @change="roomSelected" v-model="customer.room_type" >
                  <option v-for="option in options" :key="option.value" :value="option.value">
                    {{option.text}}
                    </option>
                </select>
                <span class="text-dark">Your Price{{selected}}</span>
               </div>
            </div>

            <div class="text-center">
              <paystack
                href="#"
                :amount="selected"
                :email="email"
                :paystackkey="paystackkey"
                :reference="reference"
                :callback="callback"
                :close="close"
                :embed="false"
                type="submit"
                class="btn btn-primary btn-fill float-right m-4"
              >Reserve</paystack>
            </div>
          </form>
        </card>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>
import paystack from "vue-paystack";
import Card from "src/components/Cards/Card.vue";

export default {   
  components: {
    paystack,
    Card
  },
  data() {
    return {
      // timer:'',
      selected: 0,
      options: [
        { text: "Family", value:200000 },
        { text: "Couple", value:300000 },
        { text: "Vip", value:500000 },
        { text: "VVip", value:700000 }
      ],
      customer: {},
      paystackkey: "pk_test_7d3ce7649cc6f27c84bd7b150110f45ba5023a97", //paystack public key
      email: "wisdomekpot@gmail.com", // Customer email
      amount: 0 //amount in kobo
    };
  },
  methods: {
    callback: function(response) {
      console.log(response);
    },
    close: function() {
      console.log("Payment closed");
    },
    addCustomer(e) {
      e.preventDefault();
      let newCustomer = {
        first_name: this.customer.first_name,
        last_name: this.customer.last_name,
        email: this.customer.email,
        phone: this.customer.phone,
        Address: this.customer.Address,
        checkin: this.customer.checkin,
        checkout: this.customer.checkout,
        people: this.customer.people,
        kids: this.customer.kids,
        room_type: this.customer.room_type,
        room_number: this.customer.room_number
      };
      this.$http
        .post("http://localhost:3000/rooms", newCustomer)
        .then(function(response) {
          console.log(response);
        });
      this.customer = {};
    },
    roomSelected() {
      let checkin = Number(this.customer.checkin.substring(8))
      let checkout = Number(this.customer.checkout.substring(8));
      this.selected = Number(this.customer.room_type) * (checkout - checkin)
      // debugger
    }
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  },
  mounted() {
    roomSelected() 
}
 
};
</script>
<style>
</style>
