<template>
  <header
    class="flex justify-between items-center bg-[#063E63] w-full h-[16vh] px-56 border-solid border-x-0 border-t-0 border-b-2 border-[#C8102E]">
    <div class="flex">
      <div class="flex pr-5">
        <a href="">
          <Icon name="ic:round-email" class="w-6 h-6" /> teknik@unhas.ac.id
        </a>
      </div>
      <div class="flex">
        <a href="">
          <Icon name="ic:round-phone" class="w-6 h-6" /> +62 852-9999-9958
        </a>
      </div>
    </div>
    <div
      class="flex relative text-center items-center space-x-16 justify-between">
      <div class="pr-3 space-x-6">
        <a href="">
          <Icon class="w-8 h-8" name="ic:baseline-facebook" />
        </a>
        <a href="">
          <Icon name="mdi:twitter-circle" class="w-8 h-8" />
        </a>
      </div>
      <Language />
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      dropdownVisible: false,
    };
  },
  methods: {
    showDropdown() {
      this.dropdownVisible = true;
    },
    hideDropdown() {
      this.dropdownVisible = false;
    },
  },
};
</script>
