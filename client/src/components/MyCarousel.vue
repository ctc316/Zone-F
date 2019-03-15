<template>
  <div>
    <Carousel :scrollPerPage="true" :perPage=1>
      <Slide v-for="page in Math.ceil(total / (rows * cols))" :key="page">
        <b-row v-for="row in rows" :key="row">
          <b-col v-for="col in cols" :key="col">
            <div v-if="(page-1)*(rows*cols) + (row-1)*(cols) + col <= total">
              {{ page }}, {{ row }}, {{ col }}
              <img src="https://picsum.photos/1024/480/?image=11" alt="image" class="image" style="width: 100%">
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

export default {
  name: 'MyCarousel',
  data () {
    return {
      total: 19,
      rows: 3,
      cols: 4
    }
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