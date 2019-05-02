<template>
  <div id="app">
    <NaviBar/>
    <div id="content">
      <router-view/>
      <Footer/>
    </div>

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
  font-family: 'hero-new', 'hero-new-hairline', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#content{
  margin-top: 180px;
}

.font-ultralight {
  font-family: "hero-new-line", sans-serif;
  font-weight: 200;
  font-style: normal;
}

.font-light {
  font-family: "hero-new", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.font-regular {
  font-family: "hero-new", sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>
