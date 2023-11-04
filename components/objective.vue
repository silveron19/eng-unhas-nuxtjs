<template>
  <div class="min-h-[90vh] bg-[#efefef] pt-10 relative">
    <div class="flex pl-[2rem] items-center md:pl-[12rem]">
      <div class="text-black text-[2.5rem] font-bold">Visi dan Misi</div>
      <div class="bg-[#CDB646] flex grow ml-10 h-2 mt-2"></div>
    </div>
    <div class="flex h-[73vh] min-w-full">
      <div class="flex items-center basis-1/2 justify-center flex-col relative">
        <div
          class="min-w-[17vw] lg:w-[17vw] min-h-[32vh] bg-[#CDB646] px-4 absolute bottom-[20rem] right-[2rem] rounded-md lg:right-[17rem] lg:bottom-[17rem] lg:px-8"
          :class="{ 'animate-fly-in': inViewport }">
          <p class="text-center text-[2.25rem] pt-2 pb-4 font-bold">Visi</p>
          <p class="text-[1.25rem] leading-6">
            Menjadi institusi unggulan dalam bidang rekayasa untuk keberlanjutan
            global dengan semangat budaya maritim
          </p>
        </div>
        <div
          class="min-w-[17vw] lg:w-[17vw] min-h-[32vh] bg-[#063E63] px-8 absolute right-[2rem] bottom-[0rem] rounded-md lg:bottom-[2rem]"
          :class="{ 'animate-fly-in': inViewport }">
          <p class="text-center text-[2.25rem] pt-2 pb-4 font-bold">Misi</p>
          <p class="text-[1.25rem] leading-6 pb-4">
            Mengembangkan pendidikan, penelitian, dan pengabdian masyarakat pada
            bidang rekayasa dengan semangat budaya maritim.
          </p>
        </div>
      </div>
      <div class="flex items-center basis-1/2 justify-center">
        <div
          class="flex-col min-w-[25vw] min-h-[59vh] lg:w-[25vw] lg:h-[59vh] bg-black px-8 rounded-md mt-[4rem]"
          :class="{ 'animate-fly-in': inViewport }">
          <p class="text-center text-[2.5rem] font-bold pt-4 pb-10">
            Sasaran Pendidikan
          </p>
          <p class="text-[1.25rem] leading-6">
            Membentuk keseimbangan penelitian - pendidikan; melalui keterpaduan
            sistem pendidikan yang komprehensif dan kreatif pada strata sarjana,
            dan percepatan penelitian pada strata pascasarjana melalui
            pendidikan berbasis laboratorium (Labo-Based Education / LBE)
          </p>
        </div>
      </div>
    </div>
    <img
      src="../images/Motif.png"
      class="absolute left-0 bottom-0 max-w-[40%] h-100" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inViewport: false,
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

      const observer = new IntersectionObserver(
        this.handleIntersection,
        options
      );
      observer.observe(this.$el);
    },
    handleIntersection(entries) {
      if (entries[0].isIntersecting) {
        this.inViewport = true;
      } else {
        this.inViewport = false;
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
