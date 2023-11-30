<script>
import axios from 'axios';
export default {
    data() {
        return {
            sejarah: [
                //     {
                //     data: {
                //         id: 1,
                //         date_created: "2023-11-30T01:39:52.818Z",
                //         hero: "1a1eb4a6-7f86-4452-afd8-cf80ac76483e",
                //         paragraph_2: "Pada mulanya kurikulum Fakultas Teknik hanya merupakan kurikulum tunggal dengan beberapa matakuliah pilihan yang terbatas. Kurikulum ini mengalami berbagai perubahan dan perkembangan sejak tahun 1963, termasuk peralihan dari Program Sarjana Muda, Program ",
                //         paragraph_1: "Fakultas Teknik (FT) adalah salah satu fakultas pada Universitas Hasanuddin (UNHAS) Makassar, berdiri tahun 1960. Ketika itu kampus UNHAS masih berlokasi di Baraya. Misi utama pendirian Fakultas Teknik pada masa itu adalah memberi peluang kepada putera-pu",
                //         paragraph_3: "Pada tahun 1985, Fakultas Teknik UNHAS pindah kampus ke Tamalanrea. Fakultas Teknik menempati lantai 1 gedung dan sebagian gedung Heavy Laboratory. Bersamaan dengan itu, dilaksanakanlah pengadaan peralatan laboratorium yang baru. Selama sepuluh tahun dari",
                //         paragraph_4: "Pada awalnya Fakultas Teknik Universitas Hasanuddin pada tanggal 10 September 1960 hanya terdapat 3 jurusan, yakni Teknik Sipil, Teknik Mesin dan Teknik Perkapalan. Selanjutnya Fakultas Teknik mempunyai 6 jurusan dengan membuka Jurusan Teknik Elektro, Tek",
                //         paragraph_5: "Seiring perkembangan, Fakultas Teknik Unhas maka dibangun pula Fakultas Teknik yang berada di Kampus Teknik Gowa yang saat ini telah diresmikan oleh Wakil Presiden RI, Bapak Jusuf Kalla pada tanggal 23 Juni 2018. Saat ini Fakultas Teknik memiliki 13 Depar",
                //         Header: "Sejarah Singkat"
                //     }
                // }
            ]
        }
        // {
        //     id: 1,
        //     date_created: "2023-11-30T01:39:52.818Z",
        //     hero: "1a1eb4a6-7f86-4452-afd8-cf80ac76483e",
        //     paragraph_1: "Fakultas Teknik (FT) adalah salah satu fakultas pada Universitas Hasanuddin (UNHAS) Makassar, berdiri tahun 1960. Ketika itu kampus UNHAS masih berlokasi di Baraya. Misi utama pendirian Fakultas Teknik pada masa itu adalah memberi peluang kepada putera-pu",
        //     paragraph_2: "Pada mulanya kurikulum Fakultas Teknik hanya merupakan kurikulum tunggal dengan beberapa matakuliah pilihan yang terbatas. Kurikulum ini mengalami berbagai perubahan dan perkembangan sejak tahun 1963, termasuk peralihan dari Program Sarjana Muda, Program ",
        //     paragraph_3: "Pada tahun 1985, Fakultas Teknik UNHAS pindah kampus ke Tamalanrea. Fakultas Teknik menempati lantai 1 gedung dan sebagian gedung Heavy Laboratory. Bersamaan dengan itu, dilaksanakanlah pengadaan peralatan laboratorium yang baru. Selama sepuluh tahun dari",
        //     paragraph_4: "Pada awalnya Fakultas Teknik Universitas Hasanuddin pada tanggal 10 September 1960 hanya terdapat 3 jurusan, yakni Teknik Sipil, Teknik Mesin dan Teknik Perkapalan. Selanjutnya Fakultas Teknik mempunyai 6 jurusan dengan membuka Jurusan Teknik Elektro, Tek",
        //     paragraph_5: "Seiring perkembangan, Fakultas Teknik Unhas maka dibangun pula Fakultas Teknik yang berada di Kampus Teknik Gowa yang saat ini telah diresmikan oleh Wakil Presiden RI, Bapak Jusuf Kalla pada tanggal 23 Juni 2018. Saat ini Fakultas Teknik memiliki 13 Depar",
        //     Header: "Sejarah Singkat",

        // }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            try {
                const LINK = "http://localhost:3000/data/sejarah"
                const newResponse = await axios.get(LINK)
                console.log(newResponse.data)
                this.sejarah = newResponse.data
                console.log()
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
            <p><img alt="" :src="'http://localhost:8055/assets/' + sejarah.data.hero"
                    style="border-style:solid; border-width:2px; height:713px; width:1381px"></p>

            <h1 class="font-bold text-xl">Sejarah Singkat</h1>

            <p class="my-4">{{ this.sejarah.data.paragraph_1 }}</p>

            <p class="my-4">{{ this.sejarah.data.paragraph_2 }}</p>

            <p class="my-4">{{ this.sejarah.data.paragraph_3 }}</p>

            <p class="my-4">{{ this.sejarah.data.paragraph_4 }}</p>

            <p class="my-4">{{ this.sejarah.data.paragraph_5 }}</p>
        </div>
    </div>
</template>