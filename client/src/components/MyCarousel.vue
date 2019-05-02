<template>
  <div>
    <Carousel :scrollPerPage='true' :perPage=1>
      <Slide v-for='page in Math.ceil(collections.length / (rows * cols))' :key='page'>
        <b-row v-for='row in rows' :key='row'>
          <b-col v-for='col in cols' :key='col'>

            <div v-if='(page-1)*(rows*cols) + (row-1)*(cols) + col <= collections.length'>
              <a class='product_link' target='_blank' rel='noopener noreferrer' v-bind:href='collections[(page-1)*(rows*cols) + (row-1)*(cols) + col - 1].url'>
                <img v-bind:src='collections[(page-1)*(rows*cols) + (row-1)*(cols) + col - 1].img' alt='image' class='image' style='width: 100%'>
                <div style='display: inline-block'>
                  <div class=''>{{ collections[(page-1)*(rows*cols) + (row-1)*(cols) + col - 1].brand}}</div>
                  <div class='font-ultralight'>{{ collections[(page-1)*(rows*cols) + (row-1)*(cols) + col - 1].name}}</div>
                  <div class='font-ultralight'>${{ collections[(page-1)*(rows*cols) + (row-1)*(cols) + col - 1].price}}</div>
                </div>
              </a>
            </div>

            <div v-else>
            </div>

          </b-col>
        </b-row>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'MyCarousel',
  data () {
    return {
      rows: 2,
      cols: 4
    }
  },
  props: {
    collections: Object
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style>
  .product_link {
    color: #2c3e50;
    text-decoration: none;
  }
  .VueCarousel-slide {
    width: 100%;
  }

  .slide-row {
    width: 100%;
  }
</style>
