<script>
import 'vue3-carousel/dist/carousel.css';
import axios from 'axios';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  mounted() {
    window.addEventListener('resize', this.checkScreenSize);
    this.fetchData()
  },
  methods: {
    checkScreenSize() {
      return window.innerWidth >= 768;
    },
    async fetchData() {
      const ENDPOINT = "http://localhost:8055/items/beritas"
      try {
        const res = await axios.get(ENDPOINT)
        this.slides = res.data.data
        console.log(this.slides)
      } catch (e) {
        console.log(e)
      }
    },
    convertDate(dateString) {
      return new Date(dateString).toDateString().split(" ")
    }
  },

  data() {
    return {
      isMediumSize: this.checkScreenSize,
      slides: [

      ],
    };
  },
};
</script>

<style>
.carousel__slide {
  padding: 0 8px;
}

.carousel__prev,
.carousel__next {
  margin: 0;
  top: 35%;
  border: 2px solid black;
  background-color: rgba(255, 255, 255, 0.8);
}

@media screen and (min-width: 768px) {

  .carousel__prev,
  .carousel__next {
    margin: 0;
    top: 40%;
    border: 2px solid black;
    background-color: rgba(255, 255, 255, 0.8);
  }
}
</style>

<template>
  <div id="berita" class="bg-gray-200 px-10 md:px-14 lg:px-16 xl:px-24 py-8 justify-center align-center">
    <div v-if="slides.length == 0">
      <h1>Loading</h1>
    </div>
    <div v-else>
      <div id="berita" class="bg-gray-200 px-14 md:px-28 py-8 justify-center align-center">
        <div class="flex flex-row mb-10 justify-between">
          <div class="w-1/2 flex flex-row items-center">
            <h1 class="text-black text-lg md:text-xl lg:text-3xl font-bold align-middle">
              BERITA
            </h1>
            <div class="ml-4 h-[4px] w-[75px] md:w-[250px] lg:w-[350px] xl:w-[400px] bg-yellow-600"></div>
          </div>
          <div class="more_button items-center p-2">
            <div class="flex items-center m-1 justify-between">
              <a href="#galeri">
                <p class="text-[#063E63] font-bold text-xs md:text-lg">
                  LIHAT BERITA LAINNYA
                </p>
              </a>
              <Icon name="mdi:arrow-right" class="ml-1" color="#063E63" />
            </div>
            <div class="w-full bg-[#063E63] h-[2px]"></div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-8 mb-8 md:mb-16">
          <div class="w-full sm:w-1/3 flex justify-center">
            <img class="w-2/3 md:w-full lg:w-7/8" :src="`http://localhost:8055/assets/${slides[0].thumb}`" />
          </div>
          <div class="md:w-1/2">
            <div class="flex flex-row items-center">
              <Icon name="mdi:calendar" color="#063E63" />
              <p class="text-[#063E63] text-sm sm:text-base">{{ `${slides[0].tanggal_publikasi}` }}</p>
            </div>
            <h1 v-html="slides[0].Title" class="text-base md:text-lg lg:text-2xl text-black font-semibold my-2 md:my-6">
            </h1>
            <p v-html="slides[0].konten" class="text-gray-500 text-xs sm:text-sm md:text-base line-clamp-4">

            </p>
          </div>
        </div>
        <carousel v-if="isMediumSize" :wrap-around="true" :items-to-show="3" :items-to-scroll="1">
          <slide v-for="slide in slides" :key="slide.id">
            <div class="flex flex-col w-full h-full">
              <img class="object-cover h-[100px] md:h-[120px] lg:h-[200px]" alt="`Slide ${{slide.id}}`"
                :src="`http://localhost:8055/assets/${slide.thumb}`" />
              <p class="text-black text-sm md:text-base lg:text-lg font-bold text-justify mt-2 line-clamp-1">
                {{ slide.title }}
              </p>
              <p v-html="slide.konten" class="text-black text-xs md:text-sm font-light line-clamp-4 text-justify mt-2">
              </p>
            </div>
          </slide>
          <template #addons>
            <navigation />
          </template>
        </carousel>
        <div v-else>
          <div v-for="i in 3"
            class="overflow-hidden object-cover h-24 flex flex-row p-2 my-2 border-2 border-black rounded-lg">
            <div class="w-1/3 mr-2 flex">
              <img class="w-full h-128 object-cover flex-1" :src="`http://localhost:8055/assets/${slides[i].thumb}`"
                alt="">
            </div>
            <div class="w-2/3">
              <h2 class="text-md text-black font-bold">{{ slides[i].title }}</h2>
              <p v-html="slides[i].konten" class="text-xs text-black font-light line-clamp-3">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>