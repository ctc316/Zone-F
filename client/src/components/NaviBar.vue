<template>
  <div id="navbar">
    <div class="row">
      <div class="left">
        <a href="/"> <img class="home icon" src="../assets/home.png"> </a>
        <a v-if="!isHome" href="/"> <img class="zonef icon" src="../assets/zonef.png"> </a>
      </div>
      <div class="middle">
        <img v-if="isHome" class="title" src="../assets/zonef.png">
        <img v-if="isHome" class="myzone" src="../assets/myzone@2x.png">
        <div v-if="!isHome" class="text-title"> {{$route.params.id}} </div>
        <div v-if="!isHome" class="text-description"> ['{{description}}''] </div>
        <div v-if="!isHome" class="row follower_section"> 
          <div class="col-sm" >
            <img class="visit" src="../assets/visits@2x.png"> </img> 
            <span> {{visits}} visits </span>
          </div>
          <div class="col-sm" >
            <img class="followed" src="../assets/followed@2x.png"> </img> 
          </div>
          <div class="col-sm" >
            <img class="follows" src="../assets/followers@2x.png"> </img> 
            <span> {{follows}} follows </span>
          </div>
        </div>
      </div>
      <div class="right">
        <img v-if="!isHome" class="myzone-icon" src="../assets/myzone@2x.png">
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
      username: 'Yanni',
      isHome: this.$route.name == "Home",
      description: (() => {
          return "I wear; I travel; I become"
      })(),
      visits: (() => {
        return 1314
      })(),
      follows: (() => {
        return 312
      })(), 
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
  min-height: 150px;
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

.home {
  position: absolute;
  left: 12%;
}

.zonef {
  position: absolute;
  left: 14%;
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

.text-title {
  font-size: 3em;
  margin-top: 50px;
}

.myzone {
  position: absolute;
  margin-left: 130px;
  margin-top: 75px;
  width: 115px;
  height: 35px;
}

.myzone-icon {
  position: absolute;
  right: 18.5%;
  width: 60px;
  height: 18px;
  margin-top: 28px;
}

.visit {
  width: 30px;
  height: 8px;
  display: inline;
}

.follower_section {
  margin-left: 14%;
  width: 72%;
  margin-top: 15px;
  margin-bottom: 20px;
}

.followed {
  width: 100px;
}

.follows {
  width: 14px;
  height: 14px;
  margin-top: -5px;
}


</style>