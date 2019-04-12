<template>
  <div class="container">

    <!-- <div class="jumbotron text-center">
      <h1>Zone Name <strong>{{ $route.params.id }}</strong> </h1>

      <div>
        <img src="july.jpg" alt="zone profile image" class="center">
      </div>

      <div>
        <b-row>
          <b-col>Following</b-col>
          <b-col>Follower</b-col>
        </b-row>
      </div>
    </div> -->

    <div class='place-holder'></div>

    <div v-for="collection in zone.collections" :key="collection">
      <div class="collection">
        <div class="collection-cover">
          <img v-bind:src="collection.cover" alt="image" class="image">
          <div class="overlay"></div>
          <div class="description">{{ collection.collection_name }}</div>
        </div>

        <MyCarousel :collections=collection.items></MyCarousel>
      </div>
    </div>

  </div>
</template>

<script>
  import MyCarousel from '@/components/MyCarousel'
  import ZoneService from '@/services/ZoneService';

  export default {
    name: 'Zone',
    components: {
      MyCarousel
    },
    data () {
      var zone_id = this.$route.params.id
      return {
        zone: ZoneService.zone()[zone_id]
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.VueCarousel-slide {
  background-color: black;
}

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

.place-holder {
  margin: 250px
}

.collection {
  margin-top: 64px;
  margin-bottom: 64px;
}

.collection-cover {
  width: 800px;
  height: 400px;
  background-color: gray;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  position: relative;

  .overlay {
    transition: .3s ease;
    opacity: 0;
  }

  .description {
    transition: .5s ease;
    opacity: 0;
  }
} 

.collection-cover:hover {
  .overlay {
    opacity: 0.3;
    transition: .3s ease;
    background-color: white;
  }
  .description {
    transition: .5s ease;
    opacity: 1;
    -webkit-transform: translateY(-100px);
    -ms-transform: translateY(-100px);
    transform: translateY(-100px);
  }
} 

.image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 2;
}

.description {
  width: 100%;
  height: 100%;
  color: dark-gray;
  line-height: 550px;
  font-size: 50px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}


</style>
