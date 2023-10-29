<script>
export default {
  name: 'App',
  data() {
    return {
      agendas: [
        {
          title: 'International Guest Lecture on Journal Article',
          location:
            'Senat Meeting Room, COT Building, 2nd floor, Engineering Faculty of Universitas Hasanuddin',
          duration: '25 Juni 2019 -  25 Juni 2019',
          day: '25',
          month: 'Jun',
        },
        {
          title:
            'Pengembangan Karakter Mahasiswa Baru 2019 Fakultas Teknik Unhas',
          location: 'Asrama Mahasiswa Fakultas Teknik, Kampus Gowa',
          duration: '22 Juni 2019 -  22 Juni 2019',
          day: '22',
          month: 'Jun',
        },
      ],
    };
  },
};
</script>

<template>
  <div
    id="agenda"
    class="bg-white px-14 md:px-28 py-8 justify-center align-center">
    <div class="flex flex-row mb-10 justify-between items-center">
      <div class="w-1/2 flex flex-row items-center">
        <h1
          class="text-black text-lg md:text-xl lg:text-3xl font-bold align-middle">
          AGENDA
        </h1>
        <div
          class="ml-4 h-[4px] w-[75px] md:w-[250px] lg:w-[350px] xl:w-[400px] bg-yellow-600"></div>
      </div>
      <div class="more_button items-center p-2">
        <div class="flex items-center m-1 justify-between">
          <a href="#galeri">
            <p class="text-[#063E63] font-bold text-xs md:text-lg">
              LIHAT AGENDA LAINNYA
            </p>
          </a>
          <Icon name="mdi:arrow-right" class="ml-1" color="#063E63" />
        </div>
        <div class="w-full bg-[#063E63] h-[2px]"></div>
      </div>
    </div>
    <div id="list_agenda" class="flex flex-col lg:flex-row gap-4">
      <div
        v-for="agenda in agendas"
        class="overflow-hidden border-2 h-[120px] md:h-[140px] lg:h-[160px] bg-white flex flex-row">
        <div class="bg-[#063E63] h-1/2 p-8 flex flex-col justify-center">
          <h1 class="text-center text-base md:text-xl font-bold">
            {{ agenda.day }}
          </h1>
          <h1 class="text-center text-sm">{{ agenda.month }}</h1>
        </div>
        <div class="flex flex-col justify-evenly p-4 h-full ml-4">
          <div class="flex items-center">
            <Icon name="mdi:calendar" color="#063E63" />
            <h2 class="text-black text-sm">{{ agenda.duration }}</h2>
          </div>
          <h1 class="text-black font-bold text-sm md:text-lg">
            {{ agenda.title }}
          </h1>
          <div class="flex items-center">
            <Icon class="w-[24px] m-2" name="mdi:location" color="#063E63" />
            <h2 class="text-black text-xs md:text-sm">{{ agenda.location }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
