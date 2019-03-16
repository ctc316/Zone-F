<template>
  <div id="app">
    <NaviBar></NaviBar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import NaviBar from '@/components/NaviBar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: { NaviBar, Footer }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
