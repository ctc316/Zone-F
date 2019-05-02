<template>
  <div class='container'>
    <div class='section_title'> FOLLOWING ZONES </div>
      <div class='row zone_section'>
        <div class='col-sm'> <a href='zone/timelessgood'> <img class='zone_card' src='../assets/zone_cards/timelessgood@2x.png'> </a> </div>
        <div class='col-sm'> <a href='zone/wearforspeed'><img class='zone_card' src='../assets/zone_cards/wearforspeed@2x.png'> </a> </div>
        <div class='col-sm'> <a href='zone/knitted'><img class='zone_card' src='../assets/zone_cards/knitted@2x.png'> </a> </div>
      </div>
    <div class='section_title'> POPULAR ZONES </div>
      <div class='row zone_section'>
        <div class='col-sm'> <a href='zone/travelandfashion'><img class='zone_card' src='../assets/zone_cards/travelandfashion@2x.png'> </a> </div>
        <div class='col-sm'> <a href='zone/sparkling fabric'><img class='zone_card' src='../assets/zone_cards/sparkling fabric@2x.png'> </a> </div>
        <div class='col-sm'> <a href='zone/Printed Dyed'><img class='zone_card' src='../assets/zone_cards/Printed Dyed@2x.png'> </a> </div>
      </div>
    <div class='section_title '>EXPLORE MORE</div>

</div>
</template>

<script>
import ZoneService from '@/services/ZoneService'

export default {
  name: 'Home',
  data () {
    return {
      followingZones: ZoneService.followingZones()
    }
  },
  components: {

  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
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
