<template>
  <a
    class="dropdown-button block relative text-lg hover:text-[#FDCB2C] pb-4 px-12 font-bold"
    :href="href"
    @mouseover="showDropdown_nav(index)"
    @mouseleave="hideDropdown_nav(index)"
    >{{ title }}</a
  >
  <div
    v-if="dropdown_v === index"
    class="dropdown-content absolute bg-black shadow-md pl-4 w-56 z-10"
    @mouseover="showDropdown_nav(index)"
    @mouseleave="hideDropdown_nav(index)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      dropdown_v: null,
      timers: [],
    };
  },
  methods: {
    showDropdown_nav(index) {
      clearTimeout(this.timers);
      this.dropdown_v = index;
    },
    hideDropdown_nav(index) {
      this.timers[index] = setTimeout(() => {
        if (this.dropdown_v === index) {
          this.dropdown_v = null;
        }
      }, 200);
    },
  },
};
</script>
