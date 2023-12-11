<template>
  <div
    class="bg-gray-400"
    v-html="page ? page.data[0].content : 'Loading...'"></div>

  <!-- <div
    class="bg-gray-400"
    v-html="page ? page.data[0].user_created : 'Loading...'"></div> -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const page = ref(null);
const route = useRoute();

onMounted(async () => {
  try {
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
