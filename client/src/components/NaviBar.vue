<template>
  <div id="navbar">
    <div class="row">
      <div class="left">
        <img class="home icon" src="../assets/home.png">
      </div>
      <div class="middle">
        <img class="title" src="../assets/zonef.png">
        <img class="myzone" src="../assets/myzone@2x.png">
      </div>
      <div class="right">
        <img class="favi icon" src="../assets/favi@2x.png">
        <img class="profile icon" src="../assets/user@2x.png">
        <div class="username" v-text="'' + username"></div>

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
  height: 150px;
  background: white;
  z-index: 100;
}

.left {
  margin-left: 5%;
  width: 15%;
}

.right {
  width: 20%;
}

.middle {
  width: 60%;
}

.icon {
  weight: 18px;
  height: 18px;
  margin-left: 10px;
  margin-right: 5px;
  margin-top:25px;
}

.username {
  display: inline-block;
  margin-right: 30px;
  margin-top: 25px;
  vertical-align: middle;
  font-weight: 200;
  margin-left: 5px;
}

.favi {
  margin-left: -100px;
}

.title {
  position: absolute;
  margin-left: -90px;
  margin-top: 70px;
  width: 180px;
  height: 45px;
}

.myzone {
  position: absolute;
  margin-left: 130px;
  margin-top: 75px;
  width: 115px;
  height: 35px;
}

img{
  margin-top: 20px;
  display: inline;
}



</style>