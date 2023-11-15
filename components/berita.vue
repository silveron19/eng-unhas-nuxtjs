<script>
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

  mounted() {
    window.addEventListener('resize', this.checkScreenSize);
    this.fetchEvents();
  },
  methods: {
    checkScreenSize() {
      return window.innerWidth >= 768;
    },
    fetchEvents() {
      $fetch('http://localhost:8055/items/berita', {
        mode: 'no-cors',
        method: 'GET',
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Network response was not ok. Status: ${response.status} - ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((data) => {
          this.events = data.data; // Assuming the data is in the 'data' field
        })
        .catch((error) => {
          console.error('Error fetching events:', error);
        });
    },
  },

  data() {
    return {
      isMediumSize: this.checkScreenSize,
      slides: [
        {
          id: 1,
          image: '_nuxt/images/gallery/image 1.jpg',
          title:
            'Title Title Title Title Title Title Title Titlte Title Title Title Title Title',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit.',
        },
        {
          id: 2,
          image: '_nuxt/images/gallery/image 2.jpg',
          title: 'Title',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit.',
        },
        {
          id: 3,
          image: '_nuxt/images/gallery/image 3.jpg',
          title: 'Title',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit.',
        },
        {
          id: 4,
          image: '_nuxt/images/gallery/image 1.jpg',
          title: 'Title',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit.',
        },
        {
          id: 5,
          image: '_nuxt/images/gallery/image 2.jpg',
          title: 'Title',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit.',
        },
        {
          id: 6,
          image: '_nuxt/images/gallery/image 3.jpg',
          title: 'Title',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit.',
        },
        {
          id: 7,
          image: '_nuxt/images/gallery/image 3.jpg',
          title: 'Title',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit.',
        },
        {
          id: 8,
          image: '_nuxt/images/gallery/image 3.jpg',
          title:
            'Title Title TitleTitle Title Title Title Title Title Title Title Title ',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit.',
        },
        {
          id: 9,
          image: '_nuxt/images/gallery/image 3.jpg',
          title: 'Title',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nisl nisi, sed lobortis nisi tincidunt et. Vivamus commodo, libero non eleifend aliquam, lacus augue vestibulum urna, nec lacinia diam arcu at dui. Vivamus dui justo, rhoncus quis magna ac, ullamcorper efficitur tortor. Mauris nec leo et urna feugiat vulputate. Nulla fringilla finibus posuere. Nulla facilisi. Donec lobortis mauris non interdum hendrerit.',
        },
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
  <div
    id="berita"
    class="bg-gray-200 px-10 md:px-14 lg:px-16 xl:px-24 py-8 justify-center align-center">
    <div
      id="berita"
      class="bg-gray-200 px-14 md:px-28 py-8 justify-center align-center">
      <div class="flex flex-row mb-10 justify-between">
        <div class="w-1/2 flex flex-row items-center">
          <h1
            class="text-black text-lg md:text-xl lg:text-3xl font-bold align-middle">
            BERITA
          </h1>
          <div
            class="ml-4 h-[4px] w-[75px] md:w-[250px] lg:w-[350px] xl:w-[400px] bg-yellow-600"></div>
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
          <img
            class="w-2/3 md:w-full lg:w-7/8"
            src="../images/berita/news 1.png"
            alt="" />
        </div>
        <div class="md:w-1/2">
          <div class="flex flex-row items-center">
            <Icon name="mdi:calendar" color="#063E63" />
            <p class="text-[#063E63] text-sm sm:text-base">13 Oktober 2023</p>
          </div>
          <h1
            class="text-base md:text-lg lg:text-2xl text-black font-semibold my-2 md:my-6">
            Fakultas Teknik Sukses Gelar Konferensi Internasional ICREST 2023
          </h1>
          <p class="text-gray-500 text-xs sm:text-sm md:text-base line-clamp-4">
            International Conference On Research In Engineering and Science
            Technology 2023 yang pertama sukses dilaksanakan oleh Fakultas
            Teknik Universitas Hasanuddin. Bertema Advanced Technologies to
            Fulfill SDGs For Suistainable Life, konferensi internasional ini
            digelar pada Selasa, 10 Oktober 2023 di Gedung CSA LT1 Fakultas
            Teknik Universitas Hasanuddin, Gowa.
          </p>
        </div>
      </div>
      <carousel
        v-if="isMediumSize"
        :wrap-around="true"
        :items-to-show="3"
        :items-to-scroll="1">
        <slide v-for="slide in slides" :key="slide.id">
          <div class="flex flex-col w-full h-full">
            <img
              :src="slide.image"
              class="object-cover h-[100px] md:h-[120px] lg:h-[200px]"
              alt="Slide {{ slide.id }}" />
            <p
              class="text-black text-sm md:text-base lg:text-lg font-bold text-justify mt-2 line-clamp-1">
              {{ slide.title }}
            </p>
            <p
              class="text-black text-xs md:text-sm font-light line-clamp-4 text-justify mt-2">
              {{ slide.subtitle }}
            </p>
          </div>
        </slide>
        <template #addons>
          <navigation />
        </template>
      </carousel>
      <div v-else>
        <div
          v-for="i in 3"
          class="overflow-hidden object-cover h-24 flex flex-row p-2 my-2 border-2 border-black rounded-lg">
          <div class="w-1/3 mr-2 flex">
            <img
              class="w-full h-128 object-cover flex-1"
              :src="slides[i].image"
              alt="" />
          </div>
          <div class="w-2/3">
            <h2 class="text-md text-black font-bold">{{ slides[i].title }}</h2>
            <p class="text-xs text-black font-light line-clamp-3">
              {{ slides[i].subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
