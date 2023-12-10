<script>
import axios from 'axios';
export default {
    data() {
        return { guru_besar: [] }
    },
    methods: {
        async fetchData() {
            try {
                const LINK = "http://localhost:8055/items/guru_besar"
                const newResponse = await axios.get(LINK)
                this.guru_besar = newResponse.data
            } catch (e) {
                console.log(`Error is ${e}`)
            }
        }
    },
    mounted() {
        this.fetchData()
    }
}
</script>
<template>
    <h1 v-if="guru_besar.length == 0" class="font-bold text-black">Halaman Guru</h1>
    <div v-else class="text-black mx-28 my-8">
        <h1 class="font-bold text-3xl mb-5">Guru Besar</h1>
        <table>
            <tbody>
                <tr v-for="tr in guru_besar.data[0]['table'].split('<tr>')">
                    <td v-for="td in tr.split('<td>')">
                        <p class="mx-4" v-html="td"></p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>