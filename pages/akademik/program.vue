<script>
import axios from 'axios';
export default {
    data() {
        return { program: [] }
    },
    methods: {
        async fetchData() {
            try {
                const LINK = "http://localhost:8055/items/Academic_Programs/1"
                const response = await axios.get(LINK)
            } catch (e) {
                console.log(e)
            }
        }
    }

}
</script>

<template>
    <h1 class="font-bold text-black">Halaman Program</h1>
</template>