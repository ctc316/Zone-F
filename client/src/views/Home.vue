<template>
  <div class="container">

    <div class="jumbotron text-center">
            <h1>Welcome to the <strong>{{ followingZones[0]['name'] }}</strong> Example Starter App</h1>
            <p>Based on tutorial from <a target="_blank" href="https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0">here</a>.</p>

        <p>Fully loaded with Docker-compose for local development, hot reload, scss in templates, and more.</p>
        <router-link v-bind:to="{ name: 'Posts' }" class="add_post_link">View Posts App</router-link>
    </div>

</div>
</template>

<script>
import ZoneService from '@/services/ZoneService'
export default {
  name: 'Home',
  data () {
    return {
      followingZones: ZoneService.followingZones(),
    }
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
</style>
