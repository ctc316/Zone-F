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
      <img src="https://picsum.photos/1024/480/?image=10" alt="image" class="image" width="1024" height="480">
      <div class="middle">
        <div class="text">This is my collection</div>
      </div>
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

.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.collection:hover .image {
  opacity: 0.3;
}

.collection:hover .middle {
  opacity: 1;
}

.text {
  color: gray;
  font-size: 20px;
  text-align: center;
}
</style>
