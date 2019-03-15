<template>
  <div>
    <Carousel :navigationEnabled="true">
      <Slide>
        Slide 1 Content
      </Slide>
      <Slide>
        Slide 2 Content
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'MyCarousel',
  components: {
    Carousel,
    Slide
  }
}
</script>