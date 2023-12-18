<script>
import axios from 'axios';
export default {
  name: 'App',
  data() {
    return {
      agendas: [
        
      ],
    };
  },
  methods: {
    async fetchData() {
      const ENDPOINT = "http://localhost:8055/items/Agendas"
      try {
        const res = await axios.get(ENDPOINT)
        this.agendas = res.data.data
      } catch (e) {
        console.log(e)
      }
    },
    convertDate(dateString) {
      return new Date(dateString).toDateString().split(" ")
    }
  },
  mounted() {
    this.fetchData()
  }
};
</script>

<template>
  <div id="agenda" class="bg-white px-10 md:px-14 lg:px-16 xl:px-24 py-8 justify-center align-center">
    <div class="flex flex-row mb-10 justify-between items-center">
      <div class="w-1/2 flex flex-row items-center">
        <h1 class="text-black text-lg md:text-xl lg:text-3xl font-bold align-middle">
          AGENDA
        </h1>
        <div class="ml-4 h-[4px] w-[75px] md:w-[250px] lg:w-[350px] xl:w-[400px] bg-yellow-600"></div>
      </div>
      <div class="more_button items-center p-2">
        <div class="flex items-center m-1 justify-between">
          <a href="#agenda">
            <p class="text-[#063E63] font-bold text-xs md:text-lg">
              LIHAT AGENDA LAINNYA
            </p>
          </a>
          <Icon name="mdi:arrow-right" class="ml-1" color="#063E63" />
        </div>
        <div class="w-full bg-[#063E63] h-[2px]"></div>
      </div>
    </div>
    <div v-if="agendas.length == 0">
      <h1 class="text-black">LOADING</h1>
    </div>
    <div v-else id="list_agenda" class="flex flex-col lg:flex-row gap-4 justify-evenly">
      <div v-for="agenda in agendas.slice(0, 2)"
        class="overflow-hidden border-2 h-[120px] md:h-[140px] lg:h-[160px] bg-white flex flex-row">
        <div class="bg-[#063E63] h-1/2 p-8 flex flex-col justify-center">
          <h1 class="text-center text-base md:text-xl font-bold">
            {{ new Date(agenda.start_date).toDateString().split(" ")[2] }}
          </h1>
          <h1 class="text-center text-sm">{{ new Date(agenda.start_date).toDateString().split(" ")[1] }}</h1>
        </div>
        <div class="flex flex-col justify-start ml-4">
          <div class="flex items-center">
            <Icon name="mdi:calendar" color="#063E63" />
            <h2 class="text-black text-sm">{{ `${convertDate(agenda.start_date)[2]} ${convertDate(agenda.start_date)[1]}
                          ${convertDate(agenda.start_date)[3]}` }}
            </h2>
          </div>
          <h1 class="text-black font-bold text-sm md:text-lg">
            {{ agenda.title }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

