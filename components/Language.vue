<template>
  <div class="relative inline-block text-left">
    <button
      type="button"
      class="inline-flex w-full justify-center bg-[#FDCB2C] px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-[#e2b728] gap-1"
      :class="{
        'rounded-t-md': dropdownVisible,
        'rounded-md': !dropdownVisible,
      }"
      @mouseover="showDropdown"
      @mouseleave="hideDropdown">
      <Icon name="circle-flags:id" class="w-6 h-6" />
      <Icon name="ic:baseline-arrow-drop-down" class="w-6 h-6" />
    </button>
    <div
      class="absolute rounded-b-md bg-[#FDCB2C] shadow-lg focus:outline-none z-10 w-full"
      v-show="dropdownVisible"
      @mouseover="showDropdown"
      @mouseleave="hideDropdown">
      <div class="rounded-b-md" role="none">
        <a
          href="#"
          class="text-gray-700 block px-3 py-2 text-sm rounded-b-md hover:bg-[#e2b728]"
          id="menu-item-2">
          <Icon name="circle-flags:en" class="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
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
