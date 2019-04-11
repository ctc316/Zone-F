<template>
  <div id="navbar">
    <div class="row">
      <div class="col-sm">
        <img class="home" src="https://via.placeholder.com/40x40?text=home">
      </div>
      <div class="col-sm">
        <span>
        <img class="title" src="https://via.placeholder.com/300x70?text=Zone-F">
        <img class="my-zone" src="https://via.placeholder.com/200x30?text=My Zone">
        </span>
      </div>
      <div class="col-sm">
        <img class="favi" src="https://via.placeholder.com/40x40?text=Favi">
        <img class="profile" src="https://via.placeholder.com/40x40?text=Profile">
        <span class="username" v-text="'' + username"></span>

      </div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'NaviBar',
  data () {
    return {
      username: 'Yanni'
    }
  },
}
</script>
`
<style lang="scss" scoped>
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: white;
}

.username {
  text-decoration: underline;
  margin-right: 30px;
}

.favi {
  margin-left: -20px;
}



</style>