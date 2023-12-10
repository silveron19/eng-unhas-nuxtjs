<script>
import axios from 'axios';
export default {
    data() {
        return { manajemen: [] }
    },
    methods: {
        async fetchData() {
            try {
                const LINK = "http://localhost:8055/items/manajemen"
                const newResponse = await axios.get(LINK)
                this.manajemen = newResponse.data

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
<style>
td img {
    width: 128px;
    height: 128px;
    object-fit: contain;
    display: inline;
}

td {
    border: 1px solid black;
    text-align: center;

}
</style>
<template>
    <h1 v-if="manajemen.length == 0" class="text-black">Hal Manajemen</h1>
    <div v-else class="text-black mx-28 my-8">
        <h1 class="text-2xl font-bold">Pimpinan Fakultas</h1>
        <table>
            <tbody>
                <tr v-for="tr in manajemen.data[0]['html_element'].split('<tr>')">
                    <td v-for="td in tr.split('<td>')" class="mx-4" v-html="td">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>