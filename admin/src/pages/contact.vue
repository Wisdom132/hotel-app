<template>
     <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover text-left" body-classes="table-full-width table-responsive">
              <h3 class="card-title m-3">All Contacts</h3>
            <contact-details />
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contactDetails from '@/components/contact/contactDetails'
export default {
    components: {
        'contact-details' : contactDetails
    }
}
</script>

<style>

</style>
