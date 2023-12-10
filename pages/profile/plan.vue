<script>
import axios from 'axios';
export default {
    data() {
        return { plan: [] }
    },
    methods: {
        async fetchData() {
            try {
                const LINK = "http://localhost:8055/items/Pages/7"
                const newResponse = await axios.get(LINK)
                this.plan = newResponse.data
            } catch (e) {
                console.log(`Error is ${e}`)
            }
        }
    }
}
</script>
<template>
    <h1 class="text-black">Halaman MasterPlan</h1>
</template>