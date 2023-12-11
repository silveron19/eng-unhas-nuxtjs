<script>
import axios from 'axios';
export default {
    data() {
        return { visi: [] }
    },
    methods: {
        async fetchData() {
            try {
                const LINK = "http://localhost:8055/items/visi_misi/1"
                const response = await axios.get(LINK)
                let visi_misi = response.data.data
                console.log(visi_misi['misi'].split('\n'))
                this.visi = visi_misi
            } catch (e) {
                console.log(e)
            }
        }
    },
    mounted() {
        this.fetchData()
    }

}
</script>
<template>
    <div class="text-black px-10 md:px-14 lg:px-16 xl:px-24 py-8 flex justify-center flex-col">
        <h1 v-if="visi.length == 0" class="text-black">Halaman Visi Misi dan Sasaran</h1>
        <div class="text-black" v-else>
            <div class="my-4">
                <div v-for="element in visi['konten'].split('\n')">
                    <div :class="element.includes('\h3') ? 'text-2xl' : null" v-html="element"></div>
                </div>
            </div>
            <div class="my-4">
                <div v-for="element in visi['misi'].split('\n')">
                    <div :class="element.includes('\h3') ? 'text-2xl' : null" v-html="element"></div>
                </div>
            </div>
            <div class="my-4">
                <div v-for="element in visi['sasaran'].split('\n')">
                    <div :class="element.includes('\h3') ? 'text-2xl' : null" v-html="element"></div>
                </div>
            </div>
        </div>
    </div>
</template>