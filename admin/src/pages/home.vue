<template>
    <div>
      <intro></intro>
      <book/>
    </div>
</template>

<script>
import intro from 'src/components/intro.vue'
import book from '@/components/book.vue'

export default {
name:'home',
components: {
    intro,book
}
}
</script>

<style>

</style>
