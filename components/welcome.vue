<template>
  <div
    class="flex justify-center items-center w-full min-h-[140vh] md:min-h-[100vh] relative">
    <div
      class="flex w-[80%] bg-[#063E63] z-[2] flex-col md:flex-row md:w-[90%]"
      :class="{ 'animate-fly-in': inViewport }">
      <div
        class="flex flex-col md:w-2/3 p-6 md:p-20 order-2 text-[white] md:order-1">
        <div>
          <p class="text-[1rem] font-medium">SAMBUTAN DEKAN</p>
          <p class="text-[2rem] mt-1 md:mt-[0.7vh] font-semibold">
            Prof. Dr. Eng. Ir. Muhammad Isran Ramli, S.T., M.T., IPM., ASEAN
            Eng.
          </p>
          <hr class="w-[15vw] h-[0.3vh] bg-[#CDB646] mt-1 md:mt-[1vh]" />
          <p class="text-[1.5rem] mt-[4vh]">
            Kami akan terus meningkatkan pencapaian menuju terwujudnya visi dan
            misi yang telah dicanangkan dalam rencana strategis fakultas.
          </p>
        </div>
        <a href="/">
          <p
            class="flex text-[1rem] text-[#CDB646] hover:text-[#675f38] justify-end items-end translate-y-1 underline-offset-6 mt-10 min-w-[100%] md:mt-20 md:translate-y-10">
            BACA SELENGKAPNYA ->
          </p>
        </a>
      </div>
      <div class="flex justify-center md:items-start md:justify-end md:w-1/3">
        <img src="../images/Rektor.png" class="md:w-[80%] md:shrink-0" alt="" />
      </div>
    </div>
    <div
      class="absolute left-0 bottom-[5vh] w-[42vw] h-[17vh] bg-[#DF3F3F] z-[1] md:bottom-[14vh]"
      :class="{ 'animate-fly-in': inViewport }"></div>
    <div
      class="flex justify-center items-center absolute left-0 -top-24 bottom-[14vh] w-[60%] h-[30vh] bg-[#CDB646] z-[0] md:w-[42vw] md:h-[39vh] md:left-10"
      :class="{ 'animate-fly-in': inViewport }">
      <p
        class="text-[1.25rem] text-center font-bold mb-0 md:mb-[2] md:text-[2rem]">
        SELAMAT DATANG DI FAKULTAS TEKNIK UNIVERSITAS HASANUDDIN
      </p>
    </div>
    <img
      src="../images/Motif2.png"
      class="absolute right-0 top-0 max-w-[40vw] max-h-[40vh]"
      alt="" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inViewport: false,
      observer: null,
    };
  },
  mounted() {
    this.observeElement();
  },
  methods: {
    observeElement() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };

      this.observer = new IntersectionObserver(
        this.handleIntersection,
        options
      );
      this.observer.observe(this.$el);
    },
    handleIntersection(entries) {
      if (entries[0].isIntersecting && !this.inViewport) {
        this.inViewport = true;
        this.observer.disconnect();
      }
    },
  },
};

</script>
<style scoped>
.animate-fly-in {
  animation: fly-in 1s ease-in-out both;
}

@keyframes fly-in {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
