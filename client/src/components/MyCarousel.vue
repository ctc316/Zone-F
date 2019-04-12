<template>
  <div>
    <Carousel :scrollPerPage="true" :perPage=1>
      <Slide v-for="page in Math.ceil(collections.length / (rows * cols))" :key="page">
        <b-row v-for="row in rows" :key="row">
          <b-col v-for="col in cols" :key="col">

            <div v-if="(page-1)*(rows*cols) + (row-1)*(cols) + col <= collections.length">
              <img src="https://via.placeholder.com/200x300?text=Product" alt="image" class="image" style="width: 100%">
              <div style="display: inline-block;">
                <div>{{ page }}, {{ row }}, {{ col }}</div>
                <div>{{ collections[(page-1)*(rows*cols) + (row-1)*(cols) + col - 1].brand}}</div>
                <div>{{ collections[(page-1)*(rows*cols) + (row-1)*(cols) + col - 1].name}}</div>
                <div>${{ collections[(page-1)*(rows*cols) + (row-1)*(cols) + col - 1].price}}</div>
              </div>
            </div>

            <div v-else>
              {{ page }}, {{ row }}, {{ col }}
            </div>

          </b-col>
        </b-row>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import ZoneService from '@/services/ZoneService';

export default {
  name: 'MyCarousel',
  data () {
    return {
      rows: 2,
      cols: 4,
    }
  },
  props: {
    collections: Object,
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style>
  .VueCarousel-slide {
    width: 100%;
  }

  .slide-row {
    width: 100%;
  }
</style>