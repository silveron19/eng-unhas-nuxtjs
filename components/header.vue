<template>
  <header
    class="flex justify-between items-center bg-[#063E63] w-full h-[14vh] px-10 md:px-14 lg:px-16 xl:px-24 border-solid border-x-0 border-t-0 border-b-2 border-[#C8102E] text-sm md:text-base lg:text-lg">
    <div class="flex space-x-5">
      <div class="flex">
        <a href="" class="flex">
          <Icon name="ic:round-email" class="w-6 h-6" />
          <p v-if="isMediumSize">teknik@unhas.ac.id</p>
        </a>
      </div>
      <div>
        <a href="" class="flex">
          <Icon name="ic:round-phone" class="w-6 h-6" />
          <p v-if="isMediumSize">+62 852-9999-9958</p>
        </a>
      </div>
    </div>
    <div class="flex justify-between">
      <div class="pr-3 space-x-6">
        <a href="">
          <Icon class="w-8 h-8" name="ic:baseline-facebook" />
        </a>
        <a href="">
          <Icon name="mdi:twitter-circle" class="w-8 h-8" />
        </a>
      </div>
    </div>
    <Language />
  </header>
</template>
<script>
export default {
  data() {
    return {
      isMediumSize: this.checkScreenSize,
      dropdownVisible: false,
    };
  },
  mounted() {
    window.addEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMediumSize = window.innerWidth >= 1024;
      return window.innerWidth >= 1024;
    },
    showDropdown() {
      this.dropdownVisible = true;
    },
    hideDropdown() {
      this.dropdownVisible = false;
    },
  },
};
</script>
