<template>
  <div>
    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Contact Us</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <card>
              <form v-on:submit.prevent>
                <div class="row">
                  <div class="col-md-6">
                    <base-input
                      type="text"
                      label="First Name"
                      placeholder="First Name"
                      v-model="contact.first_name"
                    ></base-input>
                  </div>
                  <div class="col-md-6">
                    <base-input
                      type="text"
                      label="Last Name"
                      placeholder="Last Name"
                      v-model="contact.last_name"
                    ></base-input>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6">
                    <base-input
                      type="text"
                      label="Phone Number"
                      placeholder="Phone Number"
                      v-model="contact.phone"
                    ></base-input>
                  </div>
                  <div class="col-md-6">
                    <base-input
                      type="email"
                      label="Email"
                      placeholder="Email"
                      v-model="contact.email"
                    ></base-input>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <base-input
                      type="text"
                      label="Message"
                      placeholder="Please Drop Your Message"
                      v-model="contact.message"
                    ></base-input>
                  </div>
                </div>
                <div class="text-center">
                  <button class="btn btn-primary" @click="contactAdmin">Contact</button>
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
import Card from "src/components/Cards/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      contact: {}
    };
  },
  methods: {
    contactAdmin() {
      let newContact = {
        first_name: this.contact.first_name,
        last_name: this.contact.last_name,
        email: this.contact.email,
        phone: this.contact.phone,
        message: this.contact.message
      };
      this.$http
        .post("http://localhost:3000/contact", newContact)
        .then(response => {
          console.log(response);
        });
      this.contact = {};
    }
  }
};
</script>
<style scoped>
.modal.show .modal-dialog {
  transform: translate(0%, 0%);
  -webkit-transform: translate(0%, 0%) !important;
}
</style>
