<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Light Bootstrap Table Heading</h4>
              <p class="card-category">Created using Roboto Font Family</p>
            </template>

            <div class="typo-line">
              <h2><p class="category">Small Tag</p>Header with small subtitle <br>
                <small>".small" is a tag for the headers</small>
              </h2>
            </div>
          </card>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'

  export default {
    components: {
      Card
    }
  }

</script>
<style>

</style>
