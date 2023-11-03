<template>
  <a :href="href" class="block hover:text-[#FDCB2C] py-2">{{ title }}</a>
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
  },
};
</script>
