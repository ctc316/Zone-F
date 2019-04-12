<template>
  <div class="container">
    <div class="section_title"> FOLLOWING ZONES </div>
      <div class="row zone_section">
        <div class="col-sm"> <a href="zone/timelessgood"> <img class="zone_card" src="../assets/zone_cards/timelessgood@2x.png"> </a> </div>
        <div class="col-sm"> <a href="zone/wearforspeed"><img class="zone_card" src="../assets/zone_cards/wearforspeed@2x.png"> </a> </div>
        <div class="col-sm"> <img class="zone_card" src="../assets/zone_cards/knitted@2x.png"> </div>
      </div>
    <div class="section_title"> POPULAR ZONES </div>
      <div class="row zone_section">
        <div class="col-sm"> <img class="zone_card" src="../assets/zone_cards/travelandfashion@2x.png"> </div>
        <div class="col-sm"> <img class="zone_card" src="../assets/zone_cards/sparkling fabric@2x.png"> </div>
        <div class="col-sm"> <img class="zone_card" src="../assets/zone_cards/Printed Dyed@2x.png"> </div>
      </div>
    <div class="section_title">EXPLORE MORE</div>
    
<!--
    <div>
      <ul>
        <li v-for="zone in followingZones" :key="zone.zone_id">
          {{ zone.name }}, {{ zone.zone_id }}
        </li>
      </ul>
    </div>

    <div class="jumbotron text-center">
            <h1>Welcome to the <strong>{{ followingZones[0]['name'] }}</strong> Example Starter App</h1>
            <p>Based on tutorial from <a target="_blank" href="https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0">here</a>.</p>

        <p>Fully loaded with Docker-compose for local development, hot reload, scss in templates, and more.</p>
        <router-link v-bind:to="{ name: 'Posts' }" class="add_post_link">View Posts App</router-link>
    </div>
  -->

</div>
</template>

<script>
import ZoneService from '@/services/ZoneService'
import NewPost from '@/components/NewPost'

export default {
  name: 'Home',
  data () {
    return {
      followingZones: ZoneService.followingZones()
    }
  },
  components: {
    NewPost
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.section_title {
  width: 100%;
  font-size: 1.3em;
  text-decoration: underline;
  font-weight: bold;
  margin-top:50px;
  margin-bottom:20px;
}

.zone_card {
  width: 240px;
  height: 320px;
}
.zone_section {
  margin-left: 8%;
  margin-right: 8%;
}

</style>
