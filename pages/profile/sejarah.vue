<script>
import axios from 'axios';
export default {
    data() {
        return {
            sejarah: []
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const LINK = "http://localhost:8055/items/Pages/1"
                const newResponse = await axios.get(LINK)
                this.sejarah = newResponse.data
            } catch (e) {
                console.log(`Error is ${e}`)
            }
        }
    }

}
</script>

<template>
    <div class="text-black px-10 md:px-14 lg:px-16 xl:px-24 py-8 flex justify-center flex-col">
        <div v-if="sejarah.length == 0">
            <p>Now Loading</p>
        </div>
        <div v-else>
            <p><img alt="" :src="'http://localhost:8055/assets/' + sejarah.data.image"
                    style="border-style:solid; border-width:2px; height:713px; width:1381px"></p>

            <h1 class="font-bold text-xl">Sejarah Singkat</h1>

            <div v-for="paragraph in (sejarah.data.content).split('\n')">
                <p class="my-4" v-html="paragraph"></p>
            </div>

        </div>
    </div>
</template>