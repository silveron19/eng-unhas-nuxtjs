<template>
  <div
    class="dynamicPage text-[#000] items-center px-10 md:px-14 lg:px-16 xl:px-24 w-full overflow-hidden"
    v-html="page ? page.data[0].content : 'Loading...'"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const page = ref(null);
const route = useRoute();

onMounted(async () => {
  try {
    console.log(route);
    const response = await fetch(
      `http://localhost:8055/items/Pages?filter[slug]=${route.params.blog}`
    );
    page.value = await response.json();
  } catch (error) {
    console.error('Error fetching page data:', error);
    page.value = null;
  }
});
</script>
