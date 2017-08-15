<template>
  <div class="col-md-offset-4">
    <ul>
      <li v-for="ninja in ninjas">{{ninja}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['yoshi', 'Mario', 'Ryu']
    }
  }
}
</script>

<style>

</style>
