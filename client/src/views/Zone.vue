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

    <div class="collection">
      <img src="https://picsum.photos/1024/480/?image=10" alt="image" class="image">
      <div class="overlay"></div>
      <div class="description">This is my collection</div>
    </div>

  </div>
</template>

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

.collection {
  width: 100%;
  height: 500px;
  background-color: gray;
  margin: 0 auto;
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

.collection:hover {
  .overlay {
    opacity: 0.3;
    transition: .3s ease;
    background-color: white;
  }
  .description {
    transition: .5s ease;
    opacity: 1;
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
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
