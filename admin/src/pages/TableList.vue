<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover text-left" body-classes="table-full-width table-responsive">
              <h3 class="card-title m-3">All Users</h3>
            <l-table></l-table>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LTable from "src/components/Table.vue";
import Card from "src/components/Cards/Card.vue";
export default {
  components: {
    LTable,
    Card
  },
  data() {
    return {
     
    };
  }
};
</script>
<style>
</style>
