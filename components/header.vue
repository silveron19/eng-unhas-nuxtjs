<template>
  <header
    class="flex justify-between bg-[#063E63] w-full h-[10vh] items-center px-28 outline-[#C8102E] outline outline-2"
  >
    <div class="flex">
      <div class="flex pr-3">
        <a href="">
          <Icon name="ic:round-mail" class="w-6 h-6" />
        </a>
        <p class="pl-1">teknik@unhas.ac.id</p>
      </div>
      <div class="flex">
        <a href="">
          <Icon name="ic:round-phone" class="w-6 h-6" />
        </a>
        <p class="pl-1">+62 852-9999-9958</p>
      </div>
    </div>
    <div class="flex pr-3 text-center space-x-16 items-center justify-between">
      <div class="pr-3 space-x-6">
        <a href="">
          <Icon class="w-8 h-8" name="ic:baseline-facebook" />
        </a>
        <a href="">
          <Icon name="mdi:twitter-circle" class="w-8 h-8" />
        </a>
      </div>
      <div class="relative inline-block text-left">
        <button
          type="button"
          class="inline-flex w-full justify-center rounded-md bg-[#CDB646] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-[#CDB646] hover:bg-[#b9a540]"
          aria-haspopup="true"
          @click="toggleDropdown"
        >
          <Icon name="circle-flags:id" class="w-6 h-6" />
          <svg
            class="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          ></svg>
          <Icon name="ic:baseline-arrow-drop-down" class="w-6 h-6" />
        </button>
        <div
          class="absolute right-0 z-10 mt-2 w-14 origin-top-right rounded-md bg-[#CDB646] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
          v-show="showDropdown"
        >
          <div class="py-1" role="none">
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm hover:bg-[#b9a540]"
              role="menuitem"
              tabindex="-1"
              id="menu-item-1"
            >
              <Icon name="circle-flags:id" class="w-6 h-6" />
            </a>
            <a
              href="#"
              class="text-gray-700 block px-4 py-2 text-sm hover:bg-[#b9a540]"
              role="menuitem"
              tabindex="-1"
              id="menu-item-2"
            >
              <Icon name="circle-flags:en" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <nav>
    <a href="/"><img src="../images/logo.png" alt="" /></a>
    <div><img src="" alt="" /></div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>
