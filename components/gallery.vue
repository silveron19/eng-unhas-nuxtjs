<script>
import axios from 'axios';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      isMediumSize: this.checkScreenSize,
      slides: [

      ],
    };
  },
  methods: {
    checkScreenSize() {
      return window.innerWidth >= 768;
    },

    async fetchData() {
      const ENDPOINT = "http://localhost:8055/items/Galeries"
      try {
        const res = await axios.get(ENDPOINT)
        this.slides = res.data.data
        console.log(this.slides)
      } catch (e) {
        console.log(e)
      }
    }
  },

  mounted() {
    this.fetchData()
  }
};
</script>

<style>
.carousel__pagination {
  margin: 15px;
}

.carousel__pagination-button::after {
  display: block;
  content: '';
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid #063e63;
}

.carousel__pagination-button--active::after {
  background-color: red;
  border: 1px solid red;
}

.carousel__prev,
.carousel__next {
  margin: 0;
  top: 30%;
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0.8);
}

.more_button:hover {
  opacity: 0.5;
}

@media screen and (min-width: 768px) {

  .carousel__prev,
  .carousel__next {
    top: 40%;
  }

  .carousel__pagination {
    margin: 30px;
  }

  .carousel__pagination-button::after {
    width: 16px;
    height: 16px;
  }
}
</style>

<template>
  <div id="galeri" class="bg-white py-8 px-10 md:px-14 lg:px-16 xl:px-24">
    <div class="flex flex-row mb-10 justify-between">
      <div class="w-1/2 flex flex-row items-center">
        <h1 class="text-black text-lg md:text-xl lg:text-3xl font-bold align-middle">
          GALERI
        </h1>
        <div class="ml-4 h-[4px] w-[75px] md:w-[250px] lg:w-[350px] xl:w-[400px] bg-yellow-600"></div>
      </div>
      <div class="more_button items-center p-2">
        <div class="flex items-center m-1 justify-between">
          <a href="#galeri">
            <p class="text-[#063E63] font-bold text-xs md:text-lg">
              LIHAT GALERI LAINNYA
            </p>
          </a>
          <Icon name="mdi:arrow-right" class="ml-1" color="#063E63" />
        </div>
        <div class="w-full bg-[#063E63] h-[2px]"></div>
      </div>
    </div>
    <div v-if="slides.length == 0">
      <h1>Loading</h1>
    </div>
    <carousel v-else :autoplay="2000" :wrap-around="true" :items-to-show="3" :items-to-scroll="1">
      <slide v-for="slide in slides" :key="slide.id">
        <div class="flex flex-col w-full">
          <img :src="`http://localhost:8055/assets/${slide.image}`"
            class="object-cover h-[100px] md:h-[150px] lg:h-[250px]" alt="Slide {{ slide.id }}" />
          <p class="text-black font-bold mt-2 line-clamp-1">{{ slide.title }}</p>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>