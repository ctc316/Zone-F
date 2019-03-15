<template>
  <div class="container">

    <div class="jumbotron text-center">
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
    </div>

    <MyCarousel></MyCarousel>

    <!-- <div class="collection">
      <img src="https://picsum.photos/1024/480/?image=10" alt="image" class="image" width="1024" height="480">
      <div class="overlay"></div>
      <div class="description">This is my collection</div>
    </div> -->

  </div>
</template>

<script>
  import MyCarousel from '@/components/MyCarousel'

  export default {
    name: 'Zone',
    components: {
      MyCarousel
    }
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

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.overlay {
  transition: .5s ease;
  opacity: 1;
  position: absolute;
  z-index: 2;
}

.description {
  background-color: black;
  color: gray;
  font-size: 20px;
  position: absolute;
  z-index: 3;
  display: inline;
}

.collection {
  .image {
    opacity: 1;
  }

  .overlay {
    opacity: 1;
  }

  .description {
    opacity: 0;
  }
}

.collection:hover {
  .image {
    opacity: 0.3;
  }

  .overlay {
    opacity: 1;
  }

  .description {
    transition: .5s ease;
    opacity: 1;
    -webkit-transform: translateY(-100px);
    -ms-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}
</style>
