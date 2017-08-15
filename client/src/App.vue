<template>
  <div class="col-md-4">
    <h1>{{title}}</h1>
    <!-- <div class="progress">
      <progressbar now label type="warning" striped></progressbar>
      <progressbar now label type="success"></progressbar>
      <progressbar now label type="danger"></progressbar>
      <progressbar now label type="primary" striped animated></progressbar>
    </div> -->
    <navi></navi>
    <router-view></router-view>
  </div>
</template>

<script>
import navi from '@/components/navi'
export default {
  components: {
    navi
  },
  data () {
    return {
      title: 'Guessing Place'
    }
  }
}
</script>

<style>

</style>
